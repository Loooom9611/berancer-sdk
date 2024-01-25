// pnpm test -- addLiquidity.integration.test.ts

import { config } from 'dotenv';
config();

import {
    createTestClient,
    http,
    parseUnits,
    publicActions,
    walletActions,
    parseEther,
} from 'viem';

import {
    AddLiquidityUnbalancedInput,
    AddLiquiditySingleTokenInput,
    AddLiquidityKind,
    Slippage,
    Hex,
    PoolState,
    CHAINS,
    ChainId,
    AddLiquidity,
    AddLiquidityInput,
    InputAmount,
    PoolType,
} from '../../src';
import { forkSetup } from '../lib/utils/helper';
import { AddLiquidityTxInput } from '../lib/utils/types';
import {
    doAddLiquidity,
    assertAddLiquidityUnbalanced,
    assertAddLiquiditySingleToken,
} from '../lib/utils/addLiquidityHelper';
import { ANVIL_NETWORKS, startFork } from '../anvil/anvil-global-setup';
import { TOKENS } from 'test/lib/utils/addresses';

const { rpcUrl } = await startFork(ANVIL_NETWORKS.SEPOLIA);
const chainId = ChainId.SEPOLIA;
const poolId = '0x5939ab16fDf1991B0EF603c639B6b501A7841fAB'; // MockWeightedPool

const BAL = TOKENS[chainId].BAL;
const WETH = TOKENS[chainId].WETH;

describe('add liquidity test', () => {
    let txInput: AddLiquidityTxInput;
    let poolState: PoolState;

    beforeAll(async () => {
        // setup mock api
        const api = new MockApi();

        // get pool state from api
        poolState = await api.getPool(poolId);

        const client = createTestClient({
            mode: 'anvil',
            chain: CHAINS[chainId],
            transport: http(rpcUrl),
        })
            .extend(publicActions)
            .extend(walletActions);

        txInput = {
            client,
            addLiquidity: new AddLiquidity(),
            slippage: Slippage.fromPercentage('1'), // 1%
            poolState: poolState,
            testAddress: '0x027917095a4d4964eFF7280676F405126BF9A6b5', // test account
            addLiquidityInput: {} as AddLiquidityInput,
        };
    });

    beforeEach(async () => {
        await forkSetup(
            txInput.client,
            txInput.testAddress,
            [...txInput.poolState.tokens.map((t) => t.address)],
            [1, 3],
            [
                ...txInput.poolState.tokens.map((t) =>
                    parseUnits('100', t.decimals),
                ),
            ],
            undefined,
            3,
        );
    });

    describe('add liquidity unbalanced', () => {
        let input: Omit<AddLiquidityUnbalancedInput, 'amountsIn'>;
        let amountsIn: InputAmount[];
        beforeAll(() => {
            amountsIn = txInput.poolState.tokens.map((t) => ({
                rawAmount: parseUnits('1', t.decimals),
                decimals: t.decimals,
                address: t.address,
            }));
            input = {
                chainId,
                rpcUrl,
                kind: AddLiquidityKind.Unbalanced,
            };
        });
        test('token inputs', async () => {
            const addLiquidityInput = {
                ...input,
                amountsIn: [...amountsIn.splice(0, 1)],
            };
            const addLiquidityOutput = await doAddLiquidity({
                ...txInput,
                addLiquidityInput,
            });
            assertAddLiquidityUnbalanced(
                txInput.client.chain?.id as number,
                txInput.poolState,
                addLiquidityInput,
                addLiquidityOutput,
                txInput.slippage,
            );
        });

        test('with native', async () => {
            const addLiquidityInput = {
                ...input,
                amountsIn,
                useNativeAssetAsWrappedAmountIn: true,
            };
            const addLiquidityOutput = await doAddLiquidity({
                ...txInput,
                addLiquidityInput,
            });
            assertAddLiquidityUnbalanced(
                txInput.client.chain?.id as number,
                txInput.poolState,
                addLiquidityInput,
                addLiquidityOutput,
                txInput.slippage,
            );
        });
    });

    describe('add liquidity single asset', () => {
        let input: AddLiquiditySingleTokenInput;
        beforeAll(() => {
            const bptOut: InputAmount = {
                rawAmount: parseEther('1'),
                decimals: 18,
                address: poolState.address,
            };
            const tokenIn = WETH.address;
            input = {
                bptOut,
                tokenIn,
                chainId,
                rpcUrl,
                kind: AddLiquidityKind.SingleToken,
            };
        });
        test('with token', async () => {
            const addLiquidityOutput = await doAddLiquidity({
                ...txInput,
                addLiquidityInput: input,
            });

            assertAddLiquiditySingleToken(
                txInput.client.chain?.id as number,
                txInput.poolState,
                input,
                addLiquidityOutput,
                txInput.slippage,
            );
        });

        test('with native', async () => {
            const addLiquidityInput = {
                ...input,
                useNativeAssetAsWrappedAmountIn: true,
            };
            const addLiquidityOutput = await doAddLiquidity({
                ...txInput,
                addLiquidityInput,
            });

            assertAddLiquiditySingleToken(
                txInput.client.chain?.id as number,
                txInput.poolState,
                addLiquidityInput,
                addLiquidityOutput,
                txInput.slippage,
            );
        });
    });

    // TODO: test add liquidity proportional after ProportionalAmountsHelper is implemented
});

/*********************** Mock To Represent API Requirements **********************/

export class MockApi {
    public async getPool(id: Hex): Promise<PoolState> {
        const tokens = [
            {
                address: BAL.address,
                decimals: BAL.decimals,
                index: 0,
            },
            {
                address: WETH.address,
                decimals: WETH.decimals,
                index: 1,
            },
        ];

        return {
            id,
            address: id,
            type: PoolType.Weighted,
            tokens,
            balancerVersion: 3,
        };
    }
}

/******************************************************************************/
