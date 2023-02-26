import { PoolType, SwapKind } from '../../../types';
import { BigintIsh, Token, TokenAmount } from '../../';
import { BasePool } from '../';
import {
    ALMOST_ONE,
    getPoolAddress,
    MathSol,
    PREMINTED_STABLE_BPT,
    unsafeFastParseEther,
    WAD,
} from '../../../utils';
import {
    _calcBptInGivenExactTokensOut,
    _calcBptOutGivenExactTokensIn,
    _calcInGivenOut,
    _calcOutGivenIn,
    _calcTokenInGivenExactBptOut,
    _calcTokenOutGivenExactBptIn,
    _calculateInvariant,
} from './math';
import { RawComposableStablePool } from '../../../data/types';

class StablePoolToken extends TokenAmount {
    public readonly rate: bigint;
    public readonly index: number;
    public scale18: bigint;

    public constructor(token: Token, amount: BigintIsh, rate: BigintIsh, index: number) {
        super(token, amount);
        this.rate = BigInt(rate);
        this.scale18 = (this.amount * this.scalar * this.rate) / WAD;
        this.index = index;
    }

    public increase(amount: bigint): TokenAmount {
        this.amount = this.amount + amount;
        this.scale18 = (this.amount * this.scalar * this.rate) / WAD;
        return this;
    }

    public decrease(amount: bigint): TokenAmount {
        this.amount = this.amount - amount;
        this.scale18 = (this.amount * this.scalar * this.rate) / WAD;
        return this;
    }
}

export class StablePool implements BasePool {
    public readonly id: string;
    public readonly address: string;
    public readonly poolType: PoolType = PoolType.ComposableStable;
    public readonly amp: bigint;
    public readonly swapFee: bigint;
    public readonly bptIndex: number;

    public totalShares: bigint;
    public tokens: StablePoolToken[];

    private readonly tokenMap: Map<string, StablePoolToken>;
    private readonly tokenIndexMap: Map<string, number>;

    static fromRawPool(pool: RawComposableStablePool): StablePool {
        const poolTokens: StablePoolToken[] = [];

        for (const t of pool.tokens) {
            if (!t.priceRate) throw new Error('Stable pool token does not have a price rate');
            const token = new Token(1, t.address, t.decimals, t.symbol, t.name);
            const tokenAmount = TokenAmount.fromHumanAmount(token, t.balance);

            poolTokens.push(
                new StablePoolToken(
                    token,
                    tokenAmount.amount,
                    unsafeFastParseEther(t.priceRate),
                    t.index,
                ),
            );
        }

        const totalShares = unsafeFastParseEther(pool.totalShares);
        const amp = BigInt(pool.amp) * 1000n;

        return new StablePool(
            pool.id,
            amp,
            unsafeFastParseEther(pool.swapFee),
            poolTokens,
            totalShares,
        );
    }

    constructor(
        id: string,
        amp: bigint,
        swapFee: bigint,
        tokens: StablePoolToken[],
        totalShares: bigint,
    ) {
        this.id = id;
        this.address = getPoolAddress(id);
        this.amp = amp;
        this.swapFee = swapFee;
        this.totalShares = totalShares;

        this.tokens = tokens.sort((a, b) => a.index - b.index);
        this.tokenMap = new Map(this.tokens.map(token => [token.token.address, token]));
        this.tokenIndexMap = new Map(this.tokens.map(token => [token.token.address, token.index]));
        this.bptIndex = this.tokenIndexMap.get(this.address) || -1;
    }

    public getNormalizedLiquidity(tokenIn: Token, tokenOut: Token): bigint {
        const tIn = this.tokenMap.get(tokenIn.address);
        const tOut = this.tokenMap.get(tokenOut.address);

        if (!tIn || !tOut) throw new Error('Pool does not contain the tokens provided');
        // TODO: Fix stable normalized liquidity calc
        return tOut.amount * this.amp;
    }

    public swapGivenIn(tokenIn: Token, tokenOut: Token, swapAmount: TokenAmount): TokenAmount {
        const tInIndex = this.tokenIndexMap.get(tokenIn.address);
        const tOutIndex = this.tokenIndexMap.get(tokenOut.address);

        if (typeof tInIndex !== 'number' || typeof tOutIndex !== 'number') {
            throw new Error('Pool does not contain the tokens provided');
        }

        const balancesNoBpt = this.dropBptItem(this.tokens.map(t => t.scale18));

        // TODO: Fix stable swap limit
        if (swapAmount.scale18 > this.tokens[tInIndex].scale18) {
            throw new Error('Swap amount exceeds the pool limit');
        }

        const invariant = _calculateInvariant(this.amp, balancesNoBpt);

        let tokenOutScale18: bigint;
        if (tokenIn.isEqual(this.tokens[this.bptIndex].token)) {
            const amountInWithRate = swapAmount.mulDownFixed(this.tokens[tInIndex].rate);

            tokenOutScale18 = _calcTokenOutGivenExactBptIn(
                this.amp,
                [...balancesNoBpt],
                this.skipBptIndex(tOutIndex),
                amountInWithRate.scale18,
                this.totalShares,
                invariant,
                this.swapFee,
            );
        } else if (tokenOut.isEqual(this.tokens[this.bptIndex].token)) {
            const amountsIn = new Array(balancesNoBpt.length).fill(0n);

            const amountInWithRate = swapAmount.mulDownFixed(this.tokens[tInIndex].rate);
            amountsIn[this.skipBptIndex(tInIndex)] = amountInWithRate.scale18;

            tokenOutScale18 = _calcBptOutGivenExactTokensIn(
                this.amp,
                [...balancesNoBpt],
                amountsIn,
                this.totalShares,
                invariant,
                this.swapFee,
            );
        } else {
            const amountInWithFee = this.subtractSwapFeeAmount(swapAmount);
            const amountInWithRate = amountInWithFee.mulDownFixed(this.tokens[tInIndex].rate);

            tokenOutScale18 = _calcOutGivenIn(
                this.amp,
                [...balancesNoBpt],
                this.skipBptIndex(tInIndex),
                this.skipBptIndex(tOutIndex),
                amountInWithRate.scale18,
                invariant,
            );
        }

        const amountOut = TokenAmount.fromScale18Amount(tokenOut, tokenOutScale18);

        return amountOut.divDownFixed(this.tokens[tOutIndex].rate);
    }

    public swapGivenOut(
        tokenIn: Token,
        tokenOut: Token,
        swapAmount: TokenAmount,
        mutateBalances?: boolean,
    ): TokenAmount {
        const tInIndex = this.tokenIndexMap.get(tokenIn.address);
        const tOutIndex = this.tokenIndexMap.get(tokenOut.address);

        if (typeof tInIndex !== 'number' || typeof tOutIndex !== 'number') {
            throw new Error('Pool does not contain the tokens provided');
        }

        const balancesNoBpt = this.dropBptItem(this.tokens.map(t => t.scale18));

        // TODO: Fix stable swap limit
        if (swapAmount.scale18 > this.tokens[tOutIndex].scale18) {
            throw new Error('Swap amount exceeds the pool limit');
        }

        const amountOutWithRate = swapAmount.mulDownFixed(this.tokens[tOutIndex].rate);

        const invariant = _calculateInvariant(this.amp, balancesNoBpt);

        let amountIn: TokenAmount;
        if (tokenIn.isEqual(this.tokens[this.bptIndex].token)) {
            const amountsOut = new Array(balancesNoBpt.length).fill(0n);
            amountsOut[this.skipBptIndex(tOutIndex)] = amountOutWithRate.scale18;

            const tokenInScale18 = _calcBptInGivenExactTokensOut(
                this.amp,
                [...balancesNoBpt],
                amountsOut,
                this.totalShares,
                invariant,
                this.swapFee,
            );

            amountIn = TokenAmount.fromScale18Amount(tokenIn, tokenInScale18, true).divDownFixed(
                this.tokens[tInIndex].rate,
            );
        } else if (tokenOut.isEqual(this.tokens[this.bptIndex].token)) {
            const tokenInScale18 = _calcTokenInGivenExactBptOut(
                this.amp,
                [...balancesNoBpt],
                this.skipBptIndex(tInIndex),
                amountOutWithRate.scale18,
                this.totalShares,
                invariant,
                this.swapFee,
            );

            amountIn = TokenAmount.fromScale18Amount(tokenIn, tokenInScale18, true).divDownFixed(
                this.tokens[tInIndex].rate,
            );
        } else {
            const tokenInScale18 = _calcInGivenOut(
                this.amp,
                [...balancesNoBpt],
                this.skipBptIndex(tInIndex),
                this.skipBptIndex(tOutIndex),
                amountOutWithRate.scale18,
                invariant,
            );

            const amountInWithoutFee = TokenAmount.fromScale18Amount(tokenIn, tokenInScale18, true);
            const amountInWithFee = this.addSwapFeeAmount(amountInWithoutFee);

            amountIn = amountInWithFee.divDownFixed(this.tokens[tInIndex].rate);
        }

        if (mutateBalances) {
            this.tokens[tInIndex].increase(amountIn.amount);
            this.tokens[tOutIndex].decrease(swapAmount.amount);

            if (tInIndex === this.bptIndex) {
                this.totalShares = this.totalShares - amountIn.amount;
            } else if (tOutIndex === this.bptIndex) {
                this.totalShares = this.totalShares + swapAmount.amount;
            }
        }

        return amountIn;
    }

    public subtractSwapFeeAmount(amount: TokenAmount): TokenAmount {
        const feeAmount = amount.mulUpFixed(this.swapFee);
        return amount.sub(feeAmount);
    }

    public addSwapFeeAmount(amount: TokenAmount): TokenAmount {
        return amount.divUpFixed(MathSol.complementFixed(this.swapFee));
    }

    public getLimitAmountSwap(tokenIn: Token, tokenOut: Token, swapKind: SwapKind): bigint {
        const tIn = this.tokenMap.get(tokenIn.address);
        const tOut = this.tokenMap.get(tokenOut.address);

        if (!tIn || !tOut) throw new Error('Pool does not contain the tokens provided');

        if (swapKind === SwapKind.GivenIn) {
            // Return max valid amount of tokenIn
            // As an approx - use almost the total balance of token out as we can add any amount of tokenIn and expect some back
            return (tIn.amount * ALMOST_ONE) / tIn.rate;
        } else {
            // Return max amount of tokenOut - approx is almost all balance
            return (tOut.amount * ALMOST_ONE) / tOut.rate;
        }
    }

    public skipBptIndex(index: number): number {
        if (index === this.bptIndex) throw new Error('Cannot skip BPT index');
        return index < this.bptIndex ? index : index - 1;
    }

    public dropBptItem(amounts: bigint[]): bigint[] {
        const amountsWithoutBpt = new Array(amounts.length - 1).fill(0n);
        for (let i = 0; i < amountsWithoutBpt.length; i++) {
            amountsWithoutBpt[i] = amounts[i < this.bptIndex ? i : i + 1];
        }
        return amountsWithoutBpt;
    }
}
