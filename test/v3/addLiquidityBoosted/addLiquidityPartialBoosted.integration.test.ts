// pnpm test -- addLiquidityPartialBoosted.integration.test.ts
import dotenv from 'dotenv';
dotenv.config();

import {
    createTestClient,
    http,
    parseUnits,
    publicActions,
    TestActions,
    walletActions,
} from 'viem';
import {
    Address,
    BALANCER_COMPOSITE_LIQUIDITY_ROUTER,
    CHAINS,
    ChainId,
    PERMIT2,
    PublicWalletClient,
    Slippage,
    Token,
    TokenAmount,
    AddLiquidityBoostedV3,
    AddLiquidityKind,
    AddLiquidityBoostedUnbalancedInput,
} from '@/index';
import { ANVIL_NETWORKS, startFork } from 'test/anvil/anvil-global-setup';
import {
    approveSpenderOnPermit2,
    approveSpenderOnToken,
    areBigIntsWithinPercent,
    sendTransactionGetBalances,
    setTokenBalances,
    TOKENS,
} from 'test/lib/utils';
import { partialBoostedPool_USDT_stataDAI } from 'test/mockData/partialBoostedPool';

const chainId = ChainId.SEPOLIA;
const USDT = TOKENS[chainId].USDT_AAVE;
const DAI = TOKENS[chainId].DAI_AAVE;

const parentBptToken = new Token(
    chainId,
    partialBoostedPool_USDT_stataDAI.address,
    18,
);
// These are the underlying tokens
const usdtToken = new Token(chainId, USDT.address, USDT.decimals);
const daiToken = new Token(chainId, DAI.address, DAI.decimals);

describe('V3 add liquidity partial boosted', () => {
    let rpcUrl: string;
    let client: PublicWalletClient & TestActions;
    let testAddress: Address;
    const addLiquidityBoosted = new AddLiquidityBoostedV3();
    let addLiquidityInput: AddLiquidityBoostedUnbalancedInput;
    const amountsIn = [
        TokenAmount.fromHumanAmount(usdtToken, '1'),
        TokenAmount.fromHumanAmount(daiToken, '2'),
    ];

    beforeAll(async () => {
        // setup chain and test client
        ({ rpcUrl } = await startFork(ANVIL_NETWORKS.SEPOLIA));

        client = createTestClient({
            mode: 'anvil',
            chain: CHAINS[chainId],
            transport: http(rpcUrl),
        })
            .extend(publicActions)
            .extend(walletActions);

        testAddress = (await client.getAddresses())[0];

        await setTokenBalances(
            client,
            testAddress,
            amountsIn.map((t) => t.token.address),
            [USDT.slot, DAI.slot] as number[],
            amountsIn.map((t) => parseUnits('1000', t.token.decimals)),
        );

        addLiquidityInput = {
            amountsIn: amountsIn.map((a) => ({
                address: a.token.address,
                rawAmount: a.amount,
                decimals: a.token.decimals,
            })),
            chainId,
            rpcUrl,
            kind: AddLiquidityKind.Unbalanced,
        };
    });

    test('query with underlying', async () => {
        const queryOutput = await addLiquidityBoosted.query(
            addLiquidityInput,
            partialBoostedPool_USDT_stataDAI,
        );
        expect(queryOutput.protocolVersion).toEqual(3);
        expect(queryOutput.bptOut.token).to.deep.eq(parentBptToken);
        expect(queryOutput.bptOut.amount > 0n).to.be.true;
        expect(queryOutput.amountsIn).to.deep.eq(amountsIn);
    });

    test('add liquidity transaction', async () => {
        for (const amount of addLiquidityInput.amountsIn) {
            // Approve Permit2 to spend account tokens
            await approveSpenderOnToken(
                client,
                testAddress,
                amount.address,
                PERMIT2[chainId],
            );
            // Approve Router to spend account tokens using Permit2
            await approveSpenderOnPermit2(
                client,
                testAddress,
                amount.address,
                BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
            );
        }

        const queryOutput = await addLiquidityBoosted.query(
            addLiquidityInput,
            partialBoostedPool_USDT_stataDAI,
        );

        const addLiquidityBuildInput = {
            ...queryOutput,
            slippage: Slippage.fromPercentage('1'), // 1%,
        };

        const addLiquidityBuildCallOutput = addLiquidityBoosted.buildCall(
            addLiquidityBuildInput,
        );
        expect(addLiquidityBuildCallOutput.value === 0n).to.be.true;
        expect(addLiquidityBuildCallOutput.to).to.eq(
            BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
        );

        // send add liquidity transaction and check balance changes
        const { transactionReceipt, balanceDeltas } =
            await sendTransactionGetBalances(
                [
                    ...amountsIn.map((t) => t.token.address),
                    queryOutput.bptOut.token.address,
                ],
                client,
                testAddress,
                addLiquidityBuildCallOutput.to,
                addLiquidityBuildCallOutput.callData,
                addLiquidityBuildCallOutput.value,
            );

        expect(transactionReceipt.status).to.eq('success');

        expect(amountsIn.map((a) => a.amount)).to.deep.eq(
            balanceDeltas.slice(0, -1),
        );
        // Here we check that output diff is within an acceptable tolerance.
        // !!! This should only be used in the case of buffers as all other cases can be equal
        areBigIntsWithinPercent(
            balanceDeltas[balanceDeltas.length - 1],
            queryOutput.bptOut.amount,
            0.001,
        );
    });
});
