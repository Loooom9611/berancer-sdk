import { AddLiquidityInput } from '../../addLiquidity';
import { CreatePoolComposableStableInput } from '../../createPool/types';
import { InitPoolInput } from '../../initPool/types';
import { RemoveLiquidityInput } from '../../removeLiquidity';
import { PoolStateInput } from '../../types';
import { InputValidatorBase } from '../types';
import {
    validateCreatePoolTokens,
    validatePoolHasBpt,
    validateTokensAddLiquidity,
    validateTokensRemoveLiquidity,
} from '../utils/validateTokens';

export class InputValidatorComposableStable implements InputValidatorBase {
    validateAddLiquidity(
        addLiquidityInput: AddLiquidityInput | InitPoolInput,
        poolState: PoolStateInput,
    ): void {
        validatePoolHasBpt(poolState);
        validateTokensAddLiquidity(addLiquidityInput, poolState);
    }

    validateRemoveLiquidity(
        input: RemoveLiquidityInput,
        poolState: PoolStateInput,
    ): void {
        validatePoolHasBpt(poolState);
        validateTokensRemoveLiquidity(input, poolState);
    }

    validateCreatePool(input: CreatePoolComposableStableInput): void {
        validateCreatePoolTokens(input.tokens);
        if (BigInt(input.amplificationParameter) <= BigInt(0)) {
            throw new Error('Amplification parameter must be greater than 0');
        }
        return;
    }
}
