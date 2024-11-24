// pnpm test -- v3/utils/getPoolStateWithBalancesV3.integration.test.ts

import { config } from 'dotenv';
config();

import {
    Hex,
    PoolState,
    ChainId,
    PoolType,
    getPoolStateWithBalancesV3,
    PoolStateWithBalances,
} from '@/index';
import { POOLS, TOKENS } from '../../lib/utils';
import { ANVIL_NETWORKS, startFork } from '../../anvil/anvil-global-setup';

const protocolVersion = 3;

const chainId = ChainId.SEPOLIA;

const poolId = POOLS[chainId].MOCK_USDC_DAI_POOL.id;
const USDC = TOKENS[chainId].USDC;
const DAI = TOKENS[chainId].DAI;

describe('add liquidity test', () => {
    let poolState: PoolState;
    let rpcUrl: string;

    beforeAll(async () => {
        // setup mock api
        const api = new MockApi();

        // get pool state from api
        poolState = await api.getPool(poolId);

        ({ rpcUrl } = await startFork(
            ANVIL_NETWORKS[ChainId[chainId]],
            undefined,
            7057106n,
        ));
    });

    describe('getPoolStateWithBalancesV3', () => {
        test('<18 decimals tokens', async () => {
            const poolStateWithBalances = await getPoolStateWithBalancesV3(
                poolState,
                chainId,
                rpcUrl,
            );

            const mockData: PoolStateWithBalances = {
                ...poolState,
                tokens: [
                    {
                        address: USDC.address,
                        decimals: USDC.decimals,
                        index: 0,
                        balance: '9585.21526',
                    },
                    {
                        address: DAI.address,
                        decimals: DAI.decimals,
                        index: 1,
                        balance: '10256.288668913000293429',
                    },
                ],
                totalShares: '9912.817276660069114899',
            };

            expect(poolStateWithBalances).to.deep.eq(mockData);
        });
    });
});

/*********************** Mock To Represent API Requirements **********************/
class MockApi {
    public async getPool(id: Hex): Promise<PoolState> {
        const tokens = [
            {
                address: USDC.address,
                decimals: USDC.decimals,
                index: 0,
            },
            {
                address: DAI.address,
                decimals: DAI.decimals,
                index: 1,
            },
        ];

        return {
            id,
            address: id,
            type: PoolType.Weighted,
            tokens,
            protocolVersion,
        };
    }
}

/******************************************************************************/
