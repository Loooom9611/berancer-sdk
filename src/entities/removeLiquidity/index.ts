import {
    RemoveLiquidityBase,
    RemoveLiquidityBuildCallOutput,
    RemoveLiquidityBuildCallInput,
    RemoveLiquidityConfig,
    RemoveLiquidityInput,
    RemoveLiquidityQueryOutput,
    RemoveLiquidityRecoveryInput,
} from './types';
import { PoolState, PoolStateWithBalances } from '../types';
import { InputValidator } from '../inputValidator/inputValidator';
import { RemoveLiquidityV2 } from './removeLiquidityV2';
import { RemoveLiquidityV3 } from './removeLiquidityV3';

export class RemoveLiquidity implements RemoveLiquidityBase {
    private readonly inputValidator: InputValidator = new InputValidator();

    constructor(public config?: RemoveLiquidityConfig) {}

    public async query(
        input: RemoveLiquidityInput,
        poolState: PoolState,
    ): Promise<RemoveLiquidityQueryOutput> {
        this.inputValidator.validateRemoveLiquidity(input, poolState);
        switch (poolState.vaultVersion) {
            case 0: {
                throw new Error('Not implemented');
            }
            case 2: {
                const removeLiquidity = new RemoveLiquidityV2(this.config);
                return removeLiquidity.query(input, poolState);
            }
            case 3: {
                const removeLiquidity = new RemoveLiquidityV3();
                return removeLiquidity.query(input, poolState);
            }
        }
    }

    /**
     * It's not possible to query Remove Liquidity Recovery in the same way as
     * other remove liquidity kinds, so a separate handler is required for it.
     * Since it's not affected by fees or anything other than pool balances,
     * it's possible to calculate amountsOut as proportional amounts.
     */
    public async queryRemoveLiquidityRecovery(
        input: RemoveLiquidityRecoveryInput,
        poolState: PoolStateWithBalances,
    ): Promise<RemoveLiquidityQueryOutput> {
        this.inputValidator.validateRemoveLiquidityRecovery(input, poolState);
        switch (poolState.vaultVersion) {
            case 0: {
                throw new Error('Not implemented');
            }
            case 2: {
                const removeLiquidity = new RemoveLiquidityV2(this.config);
                return removeLiquidity.queryRemoveLiquidityRecovery(
                    input,
                    poolState,
                );
            }
            case 3: {
                const removeLiquidity = new RemoveLiquidityV3();
                return removeLiquidity.queryRemoveLiquidityRecovery(
                    input,
                    poolState,
                );
            }
        }
    }

    public buildCall(
        input: RemoveLiquidityBuildCallInput,
    ): RemoveLiquidityBuildCallOutput {
        const isV2Input = 'sender' in input;
        switch (input.vaultVersion) {
            case 0: {
                throw new Error('Not implemented');
            }
            case 2: {
                if (isV2Input) {
                    const removeLiquidity = new RemoveLiquidityV2(this.config);
                    return removeLiquidity.buildCall(input);
                }
                break;
            }
            case 3: {
                if (!isV2Input) {
                    const removeLiquidity = new RemoveLiquidityV3();
                    return removeLiquidity.buildCall(input);
                }
                break;
            }
        }

        throw Error('buildCall input/version mis-match');
    }
}
