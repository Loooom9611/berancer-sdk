"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } async function _asyncNullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return await rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/abi/authorizer.ts
var authorizerAbi = [
  {
    inputs: [{ internalType: "address", name: "admin", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32"
      }
    ],
    name: "RoleAdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "RoleRevoked",
    type: "event"
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "actionId", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
      { internalType: "address", name: "", type: "address" }
    ],
    name: "canPerform",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" }
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "roles", type: "bytes32[]" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "roles", type: "bytes32[]" },
      { internalType: "address[]", name: "accounts", type: "address[]" }
    ],
    name: "grantRolesToMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "roles", type: "bytes32[]" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "roles", type: "bytes32[]" },
      { internalType: "address[]", name: "accounts", type: "address[]" }
    ],
    name: "revokeRolesFromMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/balancerBatchRouter.ts
var balancerBatchRouterAbi = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      { internalType: "contract IWETH", name: "weth", type: "address" },
      {
        internalType: "contract IPermit2",
        name: "permit2",
        type: "address"
      },
      { internalType: "string", name: "routerVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "ErrorSelectorNotFound", type: "error" },
  { inputs: [], name: "EthTransfer", type: "error" },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InsufficientEth", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapDeadline", type: "error" },
  { inputs: [], name: "TransientIndexOutOfBounds", type: "error" },
  {
    inputs: [],
    name: "getSender",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "address", name: "owner", type: "address" },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct IRouterCommon.PermitApproval[]",
        name: "permitBatch",
        type: "tuple[]"
      },
      {
        internalType: "bytes[]",
        name: "permitSignatures",
        type: "bytes[]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permit2Batch",
        type: "tuple"
      },
      { internalType: "bytes", name: "permit2Signature", type: "bytes" },
      { internalType: "bytes[]", name: "multicallData", type: "bytes[]" }
    ],
    name: "permitBatchAndCall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "contract IERC20",
                name: "tokenOut",
                type: "address"
              },
              {
                internalType: "bool",
                name: "isBuffer",
                type: "bool"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathStep[]",
            name: "steps",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "exactAmountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountOut",
            type: "uint256"
          }
        ],
        internalType: "struct IBatchRouter.SwapPathExactAmountIn[]",
        name: "paths",
        type: "tuple[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "querySwapExactIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsOut",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            components: [
              {
                internalType: "contract IERC20",
                name: "tokenIn",
                type: "address"
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "pool",
                    type: "address"
                  },
                  {
                    internalType: "contract IERC20",
                    name: "tokenOut",
                    type: "address"
                  },
                  {
                    internalType: "bool",
                    name: "isBuffer",
                    type: "bool"
                  }
                ],
                internalType: "struct IBatchRouter.SwapPathStep[]",
                name: "steps",
                type: "tuple[]"
              },
              {
                internalType: "uint256",
                name: "exactAmountIn",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathExactAmountIn[]",
            name: "paths",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IBatchRouter.SwapExactInHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "querySwapExactInHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsOut",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "contract IERC20",
                name: "tokenOut",
                type: "address"
              },
              {
                internalType: "bool",
                name: "isBuffer",
                type: "bool"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathStep[]",
            name: "steps",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "maxAmountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "exactAmountOut",
            type: "uint256"
          }
        ],
        internalType: "struct IBatchRouter.SwapPathExactAmountOut[]",
        name: "paths",
        type: "tuple[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "querySwapExactOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            components: [
              {
                internalType: "contract IERC20",
                name: "tokenIn",
                type: "address"
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "pool",
                    type: "address"
                  },
                  {
                    internalType: "contract IERC20",
                    name: "tokenOut",
                    type: "address"
                  },
                  {
                    internalType: "bool",
                    name: "isBuffer",
                    type: "bool"
                  }
                ],
                internalType: "struct IBatchRouter.SwapPathStep[]",
                name: "steps",
                type: "tuple[]"
              },
              {
                internalType: "uint256",
                name: "maxAmountIn",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "exactAmountOut",
                type: "uint256"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathExactAmountOut[]",
            name: "paths",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IBatchRouter.SwapExactOutHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "querySwapExactOutHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "contract IERC20",
                name: "tokenOut",
                type: "address"
              },
              {
                internalType: "bool",
                name: "isBuffer",
                type: "bool"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathStep[]",
            name: "steps",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "exactAmountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "minAmountOut",
            type: "uint256"
          }
        ],
        internalType: "struct IBatchRouter.SwapPathExactAmountIn[]",
        name: "paths",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "swapExactIn",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsOut",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            components: [
              {
                internalType: "contract IERC20",
                name: "tokenIn",
                type: "address"
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "pool",
                    type: "address"
                  },
                  {
                    internalType: "contract IERC20",
                    name: "tokenOut",
                    type: "address"
                  },
                  {
                    internalType: "bool",
                    name: "isBuffer",
                    type: "bool"
                  }
                ],
                internalType: "struct IBatchRouter.SwapPathStep[]",
                name: "steps",
                type: "tuple[]"
              },
              {
                internalType: "uint256",
                name: "exactAmountIn",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "minAmountOut",
                type: "uint256"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathExactAmountIn[]",
            name: "paths",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IBatchRouter.SwapExactInHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "swapExactInHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsOut",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "pool",
                type: "address"
              },
              {
                internalType: "contract IERC20",
                name: "tokenOut",
                type: "address"
              },
              {
                internalType: "bool",
                name: "isBuffer",
                type: "bool"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathStep[]",
            name: "steps",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "maxAmountIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "exactAmountOut",
            type: "uint256"
          }
        ],
        internalType: "struct IBatchRouter.SwapPathExactAmountOut[]",
        name: "paths",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "swapExactOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            components: [
              {
                internalType: "contract IERC20",
                name: "tokenIn",
                type: "address"
              },
              {
                components: [
                  {
                    internalType: "address",
                    name: "pool",
                    type: "address"
                  },
                  {
                    internalType: "contract IERC20",
                    name: "tokenOut",
                    type: "address"
                  },
                  {
                    internalType: "bool",
                    name: "isBuffer",
                    type: "bool"
                  }
                ],
                internalType: "struct IBatchRouter.SwapPathStep[]",
                name: "steps",
                type: "tuple[]"
              },
              {
                internalType: "uint256",
                name: "maxAmountIn",
                type: "uint256"
              },
              {
                internalType: "uint256",
                name: "exactAmountOut",
                type: "uint256"
              }
            ],
            internalType: "struct IBatchRouter.SwapPathExactAmountOut[]",
            name: "paths",
            type: "tuple[]"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IBatchRouter.SwapExactOutHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "swapExactOutHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "pathAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/balancerBufferRouter.ts
var balancerBufferRouterAbi = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      { internalType: "contract IWETH", name: "weth", type: "address" },
      {
        internalType: "contract IPermit2",
        name: "permit2",
        type: "address"
      },
      { internalType: "string", name: "routerVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "ErrorSelectorNotFound", type: "error" },
  { inputs: [], name: "EthTransfer", type: "error" },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InsufficientEth", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapDeadline", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxAmountWrappedIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactSharesToIssue",
        type: "uint256"
      }
    ],
    name: "addLiquidityToBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedIn",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxAmountWrappedIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactSharesToIssue",
        type: "uint256"
      },
      { internalType: "address", name: "sharesOwner", type: "address" }
    ],
    name: "addLiquidityToBufferHook",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedIn",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getSender",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactAmountWrappedIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      }
    ],
    name: "initializeBuffer",
    outputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactAmountWrappedIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      },
      { internalType: "address", name: "sharesOwner", type: "address" }
    ],
    name: "initializeBufferHook",
    outputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "address", name: "owner", type: "address" },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct IRouterCommon.PermitApproval[]",
        name: "permitBatch",
        type: "tuple[]"
      },
      {
        internalType: "bytes[]",
        name: "permitSignatures",
        type: "bytes[]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permit2Batch",
        type: "tuple"
      },
      { internalType: "bytes", name: "permit2Signature", type: "bytes" },
      { internalType: "bytes[]", name: "multicallData", type: "bytes[]" }
    ],
    name: "permitBatchAndCall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactSharesToIssue",
        type: "uint256"
      }
    ],
    name: "queryAddLiquidityToBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedIn",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactSharesToIssue",
        type: "uint256"
      }
    ],
    name: "queryAddLiquidityToBufferHook",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedIn",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactAmountWrappedIn",
        type: "uint256"
      }
    ],
    name: "queryInitializeBuffer",
    outputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountUnderlyingIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactAmountWrappedIn",
        type: "uint256"
      }
    ],
    name: "queryInitializeBufferHook",
    outputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactSharesToRemove",
        type: "uint256"
      }
    ],
    name: "queryRemoveLiquidityFromBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "removedUnderlyingBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "removedWrappedBalanceOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactSharesToRemove",
        type: "uint256"
      }
    ],
    name: "queryRemoveLiquidityFromBufferHook",
    outputs: [
      {
        internalType: "uint256",
        name: "removedUnderlyingBalanceOut",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "removedWrappedBalanceOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/balancerQueries.ts
var balancerQueriesAbi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "enum IVault.SwapKind",
        name: "kind",
        type: "uint8"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "assetInIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "assetOutIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]"
      },
      {
        internalType: "contract IAsset[]",
        name: "assets",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      }
    ],
    name: "queryBatchSwap",
    outputs: [
      { internalType: "int256[]", name: "assetDeltas", type: "int256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.ExitPoolRequest",
        name: "request",
        type: "tuple"
      }
    ],
    name: "queryExit",
    outputs: [
      { internalType: "uint256", name: "bptIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.JoinPoolRequest",
        name: "request",
        type: "tuple"
      }
    ],
    name: "queryJoin",
    outputs: [
      { internalType: "uint256", name: "bptOut", type: "uint256" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IAsset",
            name: "assetIn",
            type: "address"
          },
          {
            internalType: "contract IAsset",
            name: "assetOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.SingleSwap",
        name: "singleSwap",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      }
    ],
    name: "querySwap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/balancerRelayer.ts
var balancerRelayerAbi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address"
      },
      {
        internalType: "address",
        name: "libraryAddress",
        type: "address"
      },
      {
        internalType: "address",
        name: "queryLibrary",
        type: "address"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "getLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getQueryLibrary",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]"
      }
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]"
      }
    ],
    name: "vaultActionsQueryMulticall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

// src/abi/balancerRouter.ts
var balancerRouterAbi = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      { internalType: "contract IWETH", name: "weth", type: "address" },
      {
        internalType: "contract IPermit2",
        name: "permit2",
        type: "address"
      },
      { internalType: "string", name: "routerVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "ErrorSelectorNotFound", type: "error" },
  { inputs: [], name: "EthTransfer", type: "error" },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InsufficientEth", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapDeadline", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "maxAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityCustom",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.AddLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "addLiquidityHook",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "maxAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityProportional",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquiditySingleTokenExactOut",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityUnbalanced",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "donate",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getSender",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "initialize",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "exactAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouter.InitializeHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "initializeHook",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "address", name: "owner", type: "address" },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct IRouterCommon.PermitApproval[]",
        name: "permitBatch",
        type: "tuple[]"
      },
      {
        internalType: "bytes[]",
        name: "permitSignatures",
        type: "bytes[]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permit2Batch",
        type: "tuple"
      },
      { internalType: "bytes", name: "permit2Signature", type: "bytes" },
      { internalType: "bytes[]", name: "multicallData", type: "bytes[]" }
    ],
    name: "permitBatchAndCall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "maxAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityCustom",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.AddLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "queryAddLiquidityHook",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityProportional",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquiditySingleTokenExactOut",
    outputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityUnbalanced",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "maxBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquidityCustom",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "maxBptAmountIn",
            type: "uint256"
          },
          {
            internalType: "enum RemoveLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.RemoveLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "queryRemoveLiquidityHook",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquidityProportional",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      }
    ],
    name: "queryRemoveLiquidityRecovery",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      }
    ],
    name: "queryRemoveLiquidityRecoveryHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquiditySingleTokenExactIn",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquiditySingleTokenExactOut",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amountGiven",
            type: "uint256"
          },
          { internalType: "uint256", name: "limit", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouter.SwapSingleTokenHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "querySwapHook",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "exactAmountIn", type: "uint256" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "querySwapSingleTokenExactIn",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCalculated",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "querySwapSingleTokenExactOut",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCalculated",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "maxBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquidityCustom",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "maxBptAmountIn",
            type: "uint256"
          },
          {
            internalType: "enum RemoveLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.RemoveLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "removeLiquidityHook",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquidityProportional",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      }
    ],
    name: "removeLiquidityRecovery",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      }
    ],
    name: "removeLiquidityRecoveryHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquiditySingleTokenExactIn",
    outputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "maxBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquiditySingleTokenExactOut",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "exactAmountIn", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "swapSingleTokenExactIn",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "exactAmountOut",
        type: "uint256"
      },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "swapSingleTokenExactOut",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amountGiven",
            type: "uint256"
          },
          { internalType: "uint256", name: "limit", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouter.SwapSingleTokenHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "swapSingleTokenHook",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/batchRelayerLibrary.ts
var batchRelayerLibraryAbi = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      {
        internalType: "contract IERC20",
        name: "wstETH",
        type: "address"
      },
      {
        internalType: "contract IBalancerMinter",
        name: "minter",
        type: "address"
      },
      {
        internalType: "bool",
        name: "canCallUserCheckpoint",
        type: "bool"
      },
      { internalType: "string", name: "version", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approveVault",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IVault.SwapKind",
        name: "kind",
        type: "uint8"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "assetInIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "assetOutIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]"
      },
      {
        internalType: "contract IAsset[]",
        name: "assets",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      },
      { internalType: "int256[]", name: "limits", type: "int256[]" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "value", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "index", type: "uint256" },
          { internalType: "uint256", name: "key", type: "uint256" }
        ],
        internalType: "struct VaultActions.OutputReference[]",
        name: "outputReferences",
        type: "tuple[]"
      }
    ],
    name: "batchSwap",
    outputs: [
      { internalType: "int256[]", name: "results", type: "int256[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "canCallUserCheckpoint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      {
        internalType: "enum VaultActions.PoolKind",
        name: "kind",
        type: "uint8"
      },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address"
      },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.ExitPoolRequest",
        name: "request",
        type: "tuple"
      },
      {
        components: [
          { internalType: "uint256", name: "index", type: "uint256" },
          { internalType: "uint256", name: "key", type: "uint256" }
        ],
        internalType: "struct VaultActions.OutputReference[]",
        name: "outputReferences",
        type: "tuple[]"
      }
    ],
    name: "exitPool",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      {
        internalType: "contract IStakingLiquidityGauge[]",
        name: "gauges",
        type: "address[]"
      }
    ],
    name: "gaugeCheckpoint",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStakingLiquidityGauge[]",
        name: "gauges",
        type: "address[]"
      }
    ],
    name: "gaugeClaimRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStakingLiquidityGauge",
        name: "gauge",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "gaugeDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address[]", name: "gauges", type: "address[]" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "gaugeMint",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "approval", type: "bool" },
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "gaugeSetMinterApproval",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStakingLiquidityGauge",
        name: "gauge",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "gaugeWithdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getEntrypoint",
    outputs: [
      {
        internalType: "contract IBalancerRelayer",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      {
        internalType: "enum VaultActions.PoolKind",
        name: "kind",
        type: "uint8"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.JoinPoolRequest",
        name: "request",
        type: "tuple"
      },
      { internalType: "uint256", name: "value", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "joinPool",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.UserBalanceOpKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IAsset",
            name: "asset",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          }
        ],
        internalType: "struct IVault.UserBalanceOp[]",
        name: "ops",
        type: "tuple[]"
      },
      { internalType: "uint256", name: "value", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "index", type: "uint256" },
          { internalType: "uint256", name: "key", type: "uint256" }
        ],
        internalType: "struct VaultActions.OutputReference[]",
        name: "outputReferences",
        type: "tuple[]"
      }
    ],
    name: "manageUserBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "ref", type: "uint256" }],
    name: "peekChainedReferenceValue",
    outputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "relayer", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
      { internalType: "bytes", name: "authorisation", type: "bytes" }
    ],
    name: "setRelayerApproval",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "stakeETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "stakeETHAndWrap",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IAsset",
            name: "assetIn",
            type: "address"
          },
          {
            internalType: "contract IAsset",
            name: "assetOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.SingleSwap",
        name: "singleSwap",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      },
      { internalType: "uint256", name: "limit", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint256", name: "value", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "swap",
    outputs: [{ internalType: "uint256", name: "result", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStaticATokenLM",
        name: "staticToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bool", name: "toUnderlying", type: "bool" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapAaveStaticToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ICToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapCompoundV2",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapERC4626",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IEulerToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapEuler",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IGearboxDieselToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "dieselAmount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapGearbox",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IReaperTokenVault",
        name: "vaultToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapReaperVaultToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IShareToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapShareToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ITetuSmartVault",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapTetu",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IUnbuttonToken",
        name: "wrapperToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapUnbuttonToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapWstETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IYearnTokenVault",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "unwrapYearn",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Permit",
        name: "token",
        type: "address"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "vaultPermit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20PermitDAI",
        name: "token",
        type: "address"
      },
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "bool", name: "allowed", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "vaultPermitDAI",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStaticATokenLM",
        name: "staticToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bool", name: "fromUnderlying", type: "bool" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapAaveDynamicToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ICToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapCompoundV2",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapERC4626",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IEulerToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "eulerProtocol", type: "address" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapEuler",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IGearboxDieselToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "mainAmount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapGearbox",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IReaperTokenVault",
        name: "vaultToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapReaperVaultToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IShareToken",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapShareToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapStETH",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract ITetuSmartVault",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapTetu",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IUnbuttonToken",
        name: "wrapperToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "uAmount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapUnbuttonToken",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IYearnTokenVault",
        name: "wrappedToken",
        type: "address"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      {
        internalType: "uint256",
        name: "outputReference",
        type: "uint256"
      }
    ],
    name: "wrapYearn",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];

// src/abi/composableStableFactoryV6.V2.ts
var composableStableFactoryV6Abi_V2 = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address"
      },
      {
        internalType: "contract IProtocolFeePercentagesProvider",
        name: "protocolFeeProvider",
        type: "address"
      },
      {
        internalType: "string",
        name: "factoryVersion",
        type: "string"
      },
      {
        internalType: "string",
        name: "poolVersion",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [],
    name: "FactoryDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256",
        name: "amplificationParameter",
        type: "uint256"
      },
      {
        internalType: "contract IRateProvider[]",
        name: "rateProviders",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "tokenRateCacheDurations",
        type: "uint256[]"
      },
      {
        internalType: "bool",
        name: "exemptFromYieldProtocolFeeFlag",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "create",
    outputs: [
      {
        internalType: "contract ComposableStablePool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4"
      }
    ],
    name: "getActionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      {
        internalType: "contract IAuthorizer",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCreationCodeContracts",
    outputs: [
      {
        internalType: "address",
        name: "contractA",
        type: "address"
      },
      {
        internalType: "address",
        name: "contractB",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauseConfiguration",
    outputs: [
      {
        internalType: "uint256",
        name: "pauseWindowDuration",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodDuration",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeePercentagesProvider",
    outputs: [
      {
        internalType: "contract IProtocolFeePercentagesProvider",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "isPoolFromFactory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/erc20.ts
var erc20Abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/permit2.ts
var permit2Abi = [
  {
    inputs: [
      { internalType: "uint256", name: "deadline", type: "uint256" }
    ],
    name: "AllowanceExpired",
    type: "error"
  },
  { inputs: [], name: "ExcessiveInvalidation", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "maxAmount", type: "uint256" }
    ],
    name: "InvalidAmount",
    type: "error"
  },
  { inputs: [], name: "InvalidContractSignature", type: "error" },
  { inputs: [], name: "InvalidNonce", type: "error" },
  { inputs: [], name: "InvalidSignature", type: "error" },
  { inputs: [], name: "InvalidSignatureLength", type: "error" },
  { inputs: [], name: "InvalidSigner", type: "error" },
  { inputs: [], name: "LengthMismatch", type: "error" },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "signatureDeadline",
        type: "uint256"
      }
    ],
    name: "SignatureExpired",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "Lockdown",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "newNonce",
        type: "uint48"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "oldNonce",
        type: "uint48"
      }
    ],
    name: "NonceInvalidation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "amount",
        type: "uint160"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "expiration",
        type: "uint48"
      },
      {
        indexed: false,
        internalType: "uint48",
        name: "nonce",
        type: "uint48"
      }
    ],
    name: "Permit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "word",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mask",
        type: "uint256"
      }
    ],
    name: "UnorderedNonceInvalidation",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      // account
      { internalType: "address", name: "", type: "address" },
      // token
      { internalType: "address", name: "", type: "address" }
      // spender
    ],
    name: "allowance",
    outputs: [
      { internalType: "uint160", name: "amount", type: "uint160" },
      { internalType: "uint48", name: "expiration", type: "uint48" },
      { internalType: "uint48", name: "nonce", type: "uint48" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint160", name: "amount", type: "uint160" },
      { internalType: "uint48", name: "expiration", type: "uint48" }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint48", name: "newNonce", type: "uint48" }
    ],
    name: "invalidateNonces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "wordPos", type: "uint256" },
      { internalType: "uint256", name: "mask", type: "uint256" }
    ],
    name: "invalidateUnorderedNonces",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          }
        ],
        internalType: "struct IAllowanceTransfer.TokenSpenderPair[]",
        name: "approvals",
        type: "tuple[]"
      }
    ],
    name: "lockdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    name: "nonceBitmap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permitBatch",
        type: "tuple"
      },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails",
            name: "details",
            type: "tuple"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitSingle",
        name: "permitSingle",
        type: "tuple"
      },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
              }
            ],
            internalType: "struct ISignatureTransfer.TokenPermissions",
            name: "permitted",
            type: "tuple"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.PermitTransferFrom",
        name: "permit",
        type: "tuple"
      },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint256",
            name: "requestedAmount",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
        name: "transferDetails",
        type: "tuple"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permitTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
              }
            ],
            internalType: "struct ISignatureTransfer.TokenPermissions[]",
            name: "permitted",
            type: "tuple[]"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
        name: "permit",
        type: "tuple"
      },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint256",
            name: "requestedAmount",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
        name: "transferDetails",
        type: "tuple[]"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permitTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
              }
            ],
            internalType: "struct ISignatureTransfer.TokenPermissions",
            name: "permitted",
            type: "tuple"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.PermitTransferFrom",
        name: "permit",
        type: "tuple"
      },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint256",
            name: "requestedAmount",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.SignatureTransferDetails",
        name: "transferDetails",
        type: "tuple"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes32", name: "witness", type: "bytes32" },
      {
        internalType: "string",
        name: "witnessTypeString",
        type: "string"
      },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permitWitnessTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
              }
            ],
            internalType: "struct ISignatureTransfer.TokenPermissions[]",
            name: "permitted",
            type: "tuple[]"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.PermitBatchTransferFrom",
        name: "permit",
        type: "tuple"
      },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint256",
            name: "requestedAmount",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureTransfer.SignatureTransferDetails[]",
        name: "transferDetails",
        type: "tuple[]"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "bytes32", name: "witness", type: "bytes32" },
      {
        internalType: "string",
        name: "witnessTypeString",
        type: "string"
      },
      { internalType: "bytes", name: "signature", type: "bytes" }
    ],
    name: "permitWitnessTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint160",
            name: "amount",
            type: "uint160"
          },
          { internalType: "address", name: "token", type: "address" }
        ],
        internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]",
        name: "transferDetails",
        type: "tuple[]"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint160", name: "amount", type: "uint160" },
      { internalType: "address", name: "token", type: "address" }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abi/vault.V2.ts
var vaultV2Abi = [
  {
    inputs: [
      {
        internalType: "contract IAuthorizer",
        name: "authorizer",
        type: "address"
      },
      { internalType: "contract IWETH", name: "weth", type: "address" },
      {
        internalType: "uint256",
        name: "pauseWindowDuration",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodDuration",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "AuthorizerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "ExternalBalanceTransfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IFlashLoanRecipient",
        name: "recipient",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256"
      }
    ],
    name: "FlashLoan",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "delta",
        type: "int256"
      }
    ],
    name: "InternalBalanceChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "int256[]",
        name: "deltas",
        type: "int256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "protocolFeeAmounts",
        type: "uint256[]"
      }
    ],
    name: "PoolBalanceChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "assetManager",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "cashDelta",
        type: "int256"
      },
      {
        indexed: false,
        internalType: "int256",
        name: "managedDelta",
        type: "int256"
      }
    ],
    name: "PoolBalanceManaged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "poolAddress",
        type: "address"
      },
      {
        indexed: false,
        internalType: "enum IVault.PoolSpecialization",
        name: "specialization",
        type: "uint8"
      }
    ],
    name: "PoolRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "RelayerApprovalChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "TokensDeregistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "assetManagers",
        type: "address[]"
      }
    ],
    name: "TokensRegistered",
    type: "event"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      { internalType: "contract IWETH", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IVault.SwapKind",
        name: "kind",
        type: "uint8"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "assetInIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "assetOutIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]"
      },
      {
        internalType: "contract IAsset[]",
        name: "assets",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      },
      { internalType: "int256[]", name: "limits", type: "int256[]" },
      { internalType: "uint256", name: "deadline", type: "uint256" }
    ],
    name: "batchSwap",
    outputs: [
      { internalType: "int256[]", name: "assetDeltas", type: "int256[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "deregisterTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address"
      },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.ExitPoolRequest",
        name: "request",
        type: "tuple"
      }
    ],
    name: "exitPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IFlashLoanRecipient",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "flashLoan",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      { internalType: "contract IAuthorizer", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    name: "getInternalBalance",
    outputs: [
      { internalType: "uint256[]", name: "balances", type: "uint256[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getNextNonce",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPausedState",
    outputs: [
      { internalType: "bool", name: "paused", type: "bool" },
      {
        internalType: "uint256",
        name: "pauseWindowEndTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodEndTime",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "poolId", type: "bytes32" }],
    name: "getPool",
    outputs: [
      { internalType: "address", name: "", type: "address" },
      {
        internalType: "enum IVault.PoolSpecialization",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getPoolTokenInfo",
    outputs: [
      { internalType: "uint256", name: "cash", type: "uint256" },
      { internalType: "uint256", name: "managed", type: "uint256" },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      },
      { internalType: "address", name: "assetManager", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes32", name: "poolId", type: "bytes32" }],
    name: "getPoolTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      { internalType: "uint256[]", name: "balances", type: "uint256[]" },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeesCollector",
    outputs: [
      {
        internalType: "contract ProtocolFeesCollector",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "address", name: "relayer", type: "address" }
    ],
    name: "hasApprovedRelayer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      {
        components: [
          {
            internalType: "contract IAsset[]",
            name: "assets",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          { internalType: "bytes", name: "userData", type: "bytes" },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.JoinPoolRequest",
        name: "request",
        type: "tuple"
      }
    ],
    name: "joinPool",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.PoolBalanceOpKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        internalType: "struct IVault.PoolBalanceOp[]",
        name: "ops",
        type: "tuple[]"
      }
    ],
    name: "managePoolBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.UserBalanceOpKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IAsset",
            name: "asset",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          }
        ],
        internalType: "struct IVault.UserBalanceOp[]",
        name: "ops",
        type: "tuple[]"
      }
    ],
    name: "manageUserBalance",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IVault.SwapKind",
        name: "kind",
        type: "uint8"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "assetInIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "assetOutIndex",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.BatchSwapStep[]",
        name: "swaps",
        type: "tuple[]"
      },
      {
        internalType: "contract IAsset[]",
        name: "assets",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      }
    ],
    name: "queryBatchSwap",
    outputs: [{ internalType: "int256[]", name: "", type: "int256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum IVault.PoolSpecialization",
        name: "specialization",
        type: "uint8"
      }
    ],
    name: "registerPool",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "address[]",
        name: "assetManagers",
        type: "address[]"
      }
    ],
    name: "registerTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "setAuthorizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "paused", type: "bool" }],
    name: "setPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "relayer", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" }
    ],
    name: "setRelayerApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IAsset",
            name: "assetIn",
            type: "address"
          },
          {
            internalType: "contract IAsset",
            name: "assetOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IVault.SingleSwap",
        name: "singleSwap",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bool",
            name: "fromInternalBalance",
            type: "bool"
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "bool",
            name: "toInternalBalance",
            type: "bool"
          }
        ],
        internalType: "struct IVault.FundManagement",
        name: "funds",
        type: "tuple"
      },
      { internalType: "uint256", name: "limit", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" }
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCalculated",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/vault.V3.ts
var vaultV3Abi = [
  {
    inputs: [
      {
        internalType: "contract IVaultExtension",
        name: "vaultExtension",
        type: "address"
      },
      {
        internalType: "contract IAuthorizer",
        name: "authorizer",
        type: "address"
      },
      {
        internalType: "contract IProtocolFeeController",
        name: "protocolFeeController",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "AfterAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterInitializeHookFailed", type: "error" },
  { inputs: [], name: "AfterRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterSwapHookFailed", type: "error" },
  { inputs: [], name: "AllZeroInputs", type: "error" },
  { inputs: [], name: "AmountGivenZero", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "AmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "AmountOutBelowMin",
    type: "error"
  },
  { inputs: [], name: "BalanceNotSettled", type: "error" },
  { inputs: [], name: "BalanceOverflow", type: "error" },
  { inputs: [], name: "BeforeAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeInitializeHookFailed", type: "error" },
  { inputs: [], name: "BeforeRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeSwapHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "BptAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "BptAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferNotInitialized",
    type: "error"
  },
  { inputs: [], name: "BufferSharesInvalidOwner", type: "error" },
  { inputs: [], name: "BufferSharesInvalidReceiver", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "BufferTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "CannotReceiveEth", type: "error" },
  { inputs: [], name: "CannotSwapSameToken", type: "error" },
  { inputs: [], name: "DoesNotSupportAddLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportDonation", type: "error" },
  { inputs: [], name: "DoesNotSupportRemoveLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportUnbalancedLiquidity", type: "error" },
  { inputs: [], name: "DynamicSwapFeeHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "approver", type: "address" }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "FeePrecisionTooHigh", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "HookAdjustedAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "HookAdjustedAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "HookAdjustedSwapLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "poolFactory", type: "address" }
    ],
    name: "HookRegistrationFailed",
    type: "error"
  },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InvalidAddLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidRemoveLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "InvalidTokenConfiguration", type: "error" },
  { inputs: [], name: "InvalidTokenDecimals", type: "error" },
  { inputs: [], name: "InvalidTokenType", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "InvalidUnderlyingToken",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "invariantRatio",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxInvariantRatio",
        type: "uint256"
      }
    ],
    name: "InvariantRatioAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "invariantRatio",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minInvariantRatio",
        type: "uint256"
      }
    ],
    name: "InvariantRatioBelowMin",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      }
    ],
    name: "IssuedSharesBelowMin",
    type: "error"
  },
  { inputs: [], name: "MaxTokens", type: "error" },
  { inputs: [], name: "MinTokens", type: "error" },
  { inputs: [], name: "MultipleNonZeroInputs", type: "error" },
  { inputs: [], name: "NotEnoughBufferShares", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedUnderlyingAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualUnderlyingAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughUnderlying",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedWrappedAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualWrappedAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughWrapped",
    type: "error"
  },
  { inputs: [], name: "NotStaticCall", type: "error" },
  { inputs: [], name: "NotVaultDelegateCall", type: "error" },
  { inputs: [], name: "PauseBufferPeriodDurationTooLarge", type: "error" },
  { inputs: [], name: "PercentageAboveMax", type: "error" },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotPaused",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPauseWindowExpired",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPaused",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "PoolTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "ProtocolFeesExceedTotalCollected", type: "error" },
  { inputs: [], name: "QueriesDisabled", type: "error" },
  { inputs: [], name: "QueriesDisabledPermanently", type: "error" },
  { inputs: [], name: "QuoteResultSpoofed", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  { inputs: [], name: "RouterNotTrusted", type: "error" },
  {
    inputs: [{ internalType: "int256", name: "value", type: "int256" }],
    name: "SafeCastOverflowedIntToUint",
    type: "error"
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SafeCastOverflowedUintToInt",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapFeePercentageTooHigh", type: "error" },
  { inputs: [], name: "SwapFeePercentageTooLow", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "SwapLimit",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenNotRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "expectedToken", type: "address" },
      { internalType: "address", name: "actualToken", type: "address" }
    ],
    name: "TokensMismatch",
    type: "error"
  },
  { inputs: [], name: "TradeAmountTooSmall", type: "error" },
  { inputs: [], name: "VaultBuffersArePaused", type: "error" },
  { inputs: [], name: "VaultIsNotUnlocked", type: "error" },
  { inputs: [], name: "VaultNotPaused", type: "error" },
  { inputs: [], name: "VaultPauseWindowDurationTooLarge", type: "error" },
  { inputs: [], name: "VaultPauseWindowExpired", type: "error" },
  { inputs: [], name: "VaultPaused", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "WrapAmountTooSmall",
    type: "error"
  },
  { inputs: [], name: "WrongProtocolFeeControllerDeployment", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address"
      }
    ],
    name: "WrongUnderlyingToken",
    type: "error"
  },
  { inputs: [], name: "WrongVaultAdminDeployment", type: "error" },
  { inputs: [], name: "WrongVaultExtensionDeployment", type: "error" },
  { inputs: [], name: "ZeroDivision", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateSwapFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateSwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateYieldFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "AuthorizerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesBurned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issuedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesMinted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum AddLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsAddedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityAddedToBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum RemoveLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsRemovedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityRemovedFromBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolInitialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PoolPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "recoveryMode",
        type: "bool"
      }
    ],
    name: "PoolRecoveryModeStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "factory",
        type: "address"
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct TokenConfig[]",
        name: "tokenConfig",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "pauseWindowEndTime",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableHookAdjustedAmounts",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallComputeDynamicSwapFee",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "address",
            name: "hooksContract",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct HooksConfig",
        name: "hooksConfig",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    name: "PoolRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IProtocolFeeController",
        name: "newProtocolFeeController",
        type: "address"
      }
    ],
    name: "ProtocolFeeControllerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeeAmount",
        type: "uint256"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "SwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Unwrap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "eventKey",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "eventData",
        type: "bytes"
      }
    ],
    name: "VaultAuxiliary",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultBuffersPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Wrap",
    type: "event"
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "pool", type: "address" },
          { internalType: "address", name: "to", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct AddLiquidityParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "addLiquidity",
    outputs: [
      { internalType: "uint256[]", name: "amountsIn", type: "uint256[]" },
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "enum WrappingDirection",
            name: "direction",
            type: "uint8"
          },
          {
            internalType: "contract IERC4626",
            name: "wrappedToken",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amountGivenRaw",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "limitRaw",
            type: "uint256"
          }
        ],
        internalType: "struct BufferWrapOrUnwrapParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "erc4626BufferWrapOrUnwrap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCalculatedRaw",
        type: "uint256"
      },
      { internalType: "uint256", name: "amountInRaw", type: "uint256" },
      { internalType: "uint256", name: "amountOutRaw", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getPoolTokenCountAndIndexOfToken",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVaultExtension",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "reentrancyGuardEntered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "pool", type: "address" },
          { internalType: "address", name: "from", type: "address" },
          {
            internalType: "uint256",
            name: "maxBptAmountIn",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          {
            internalType: "enum RemoveLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct RemoveLiquidityParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "removeLiquidity",
    outputs: [
      { internalType: "uint256", name: "bptAmountIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      },
      { internalType: "bytes", name: "returnData", type: "bytes" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "sendTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" },
      { internalType: "uint256", name: "amountHint", type: "uint256" }
    ],
    name: "settle",
    outputs: [{ internalType: "uint256", name: "credit", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amountGivenRaw",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "limitRaw",
            type: "uint256"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct VaultSwapParams",
        name: "vaultSwapParams",
        type: "tuple"
      }
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountCalculated",
        type: "uint256"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "amountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "unlock",
    outputs: [{ internalType: "bytes", name: "result", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/vaultExtension.V3.ts
var vaultExtensionAbi_V3 = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "mainVault",
        type: "address"
      },
      {
        internalType: "contract IVaultAdmin",
        name: "vaultAdmin",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "AfterAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterInitializeHookFailed", type: "error" },
  { inputs: [], name: "AfterRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterSwapHookFailed", type: "error" },
  { inputs: [], name: "AmountGivenZero", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "AmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "AmountOutBelowMin",
    type: "error"
  },
  { inputs: [], name: "BalanceNotSettled", type: "error" },
  { inputs: [], name: "BalanceOverflow", type: "error" },
  { inputs: [], name: "BeforeAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeInitializeHookFailed", type: "error" },
  { inputs: [], name: "BeforeRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeSwapHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "BptAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "BptAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferNotInitialized",
    type: "error"
  },
  { inputs: [], name: "BufferSharesInvalidOwner", type: "error" },
  { inputs: [], name: "BufferSharesInvalidReceiver", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "BufferTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "CannotReceiveEth", type: "error" },
  { inputs: [], name: "CannotSwapSameToken", type: "error" },
  { inputs: [], name: "CodecOverflow", type: "error" },
  { inputs: [], name: "DoesNotSupportAddLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportDonation", type: "error" },
  { inputs: [], name: "DoesNotSupportRemoveLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportUnbalancedLiquidity", type: "error" },
  { inputs: [], name: "DynamicSwapFeeHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "approver", type: "address" }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  { inputs: [], name: "ErrorSelectorNotFound", type: "error" },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "FeePrecisionTooHigh", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "HookAdjustedAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "HookAdjustedAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "HookAdjustedSwapLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "poolFactory", type: "address" }
    ],
    name: "HookRegistrationFailed",
    type: "error"
  },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InvalidAddLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidRemoveLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "InvalidTokenConfiguration", type: "error" },
  { inputs: [], name: "InvalidTokenDecimals", type: "error" },
  { inputs: [], name: "InvalidTokenType", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "InvalidUnderlyingToken",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      }
    ],
    name: "IssuedSharesBelowMin",
    type: "error"
  },
  { inputs: [], name: "MaxTokens", type: "error" },
  { inputs: [], name: "MinTokens", type: "error" },
  { inputs: [], name: "NotEnoughBufferShares", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedUnderlyingAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualUnderlyingAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughUnderlying",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedWrappedAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualWrappedAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughWrapped",
    type: "error"
  },
  { inputs: [], name: "NotStaticCall", type: "error" },
  { inputs: [], name: "NotVaultDelegateCall", type: "error" },
  { inputs: [], name: "OutOfBounds", type: "error" },
  { inputs: [], name: "PauseBufferPeriodDurationTooLarge", type: "error" },
  { inputs: [], name: "PercentageAboveMax", type: "error" },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotPaused",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPauseWindowExpired",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPaused",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "PoolTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "ProtocolFeesExceedTotalCollected", type: "error" },
  { inputs: [], name: "QueriesDisabled", type: "error" },
  { inputs: [], name: "QueriesDisabledPermanently", type: "error" },
  { inputs: [], name: "QuoteResultSpoofed", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [{ internalType: "bytes", name: "result", type: "bytes" }],
    name: "Result",
    type: "error"
  },
  { inputs: [], name: "RouterNotTrusted", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SafeCastOverflowedUintToInt",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapFeePercentageTooHigh", type: "error" },
  { inputs: [], name: "SwapFeePercentageTooLow", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "SwapLimit",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenNotRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "expectedToken", type: "address" },
      { internalType: "address", name: "actualToken", type: "address" }
    ],
    name: "TokensMismatch",
    type: "error"
  },
  { inputs: [], name: "TokensNotSorted", type: "error" },
  { inputs: [], name: "TradeAmountTooSmall", type: "error" },
  { inputs: [], name: "VaultBuffersArePaused", type: "error" },
  { inputs: [], name: "VaultIsNotUnlocked", type: "error" },
  { inputs: [], name: "VaultNotPaused", type: "error" },
  { inputs: [], name: "VaultPauseWindowDurationTooLarge", type: "error" },
  { inputs: [], name: "VaultPauseWindowExpired", type: "error" },
  { inputs: [], name: "VaultPaused", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "WrapAmountTooSmall",
    type: "error"
  },
  { inputs: [], name: "WrongProtocolFeeControllerDeployment", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address"
      }
    ],
    name: "WrongUnderlyingToken",
    type: "error"
  },
  { inputs: [], name: "WrongVaultAdminDeployment", type: "error" },
  { inputs: [], name: "WrongVaultExtensionDeployment", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateSwapFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateSwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateYieldFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "AuthorizerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesBurned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issuedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesMinted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum AddLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsAddedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityAddedToBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum RemoveLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsRemovedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityRemovedFromBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolInitialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PoolPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "recoveryMode",
        type: "bool"
      }
    ],
    name: "PoolRecoveryModeStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "factory",
        type: "address"
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct TokenConfig[]",
        name: "tokenConfig",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "pauseWindowEndTime",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableHookAdjustedAmounts",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallComputeDynamicSwapFee",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "address",
            name: "hooksContract",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct HooksConfig",
        name: "hooksConfig",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    name: "PoolRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IProtocolFeeController",
        name: "newProtocolFeeController",
        type: "address"
      }
    ],
    name: "ProtocolFeeControllerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeeAmount",
        type: "uint256"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "SwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Unwrap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "eventKey",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "eventData",
        type: "bytes"
      }
    ],
    name: "VaultAuxiliary",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultBuffersPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Wrap",
    type: "event"
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "account", type: "address" }
    ],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        components: [
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amountGivenScaled18",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "balancesScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "indexIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "indexOut",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "router",
            type: "address"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct PoolSwapParams",
        name: "swapParams",
        type: "tuple"
      }
    ],
    name: "computeDynamicSwapFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "dynamicSwapFeePercentage",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "eventKey", type: "bytes32" },
      { internalType: "bytes", name: "eventData", type: "bytes" }
    ],
    name: "emitAuxiliaryEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getAddLiquidityCalledFlag",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getAggregateSwapFeeAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getAggregateYieldFeeAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      { internalType: "contract IAuthorizer", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getBptRate",
    outputs: [{ internalType: "uint256", name: "rate", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getCurrentLiveBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "getERC4626BufferAsset",
    outputs: [{ internalType: "address", name: "asset", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getHooksConfig",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "enableHookAdjustedAmounts",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallComputeDynamicSwapFee",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "address",
            name: "hooksContract",
            type: "address"
          }
        ],
        internalType: "struct HooksConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNonzeroDeltaCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolConfig",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bool",
                name: "disableUnbalancedLiquidity",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "enableAddLiquidityCustom",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "enableRemoveLiquidityCustom",
                type: "bool"
              },
              {
                internalType: "bool",
                name: "enableDonation",
                type: "bool"
              }
            ],
            internalType: "struct LiquidityManagement",
            name: "liquidityManagement",
            type: "tuple"
          },
          {
            internalType: "uint256",
            name: "staticSwapFeePercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "aggregateSwapFeePercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "aggregateYieldFeePercentage",
            type: "uint256"
          },
          {
            internalType: "uint40",
            name: "tokenDecimalDiffs",
            type: "uint40"
          },
          {
            internalType: "uint32",
            name: "pauseWindowEndTime",
            type: "uint32"
          },
          {
            internalType: "bool",
            name: "isPoolRegistered",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolInitialized",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolPaused",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolInRecoveryMode",
            type: "bool"
          }
        ],
        internalType: "struct PoolConfig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolData",
    outputs: [
      {
        components: [
          {
            internalType: "PoolConfigBits",
            name: "poolConfigBits",
            type: "bytes32"
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]"
          },
          {
            components: [
              {
                internalType: "enum TokenType",
                name: "tokenType",
                type: "uint8"
              },
              {
                internalType: "contract IRateProvider",
                name: "rateProvider",
                type: "address"
              },
              {
                internalType: "bool",
                name: "paysYieldFees",
                type: "bool"
              }
            ],
            internalType: "struct TokenInfo[]",
            name: "tokenInfo",
            type: "tuple[]"
          },
          {
            internalType: "uint256[]",
            name: "balancesRaw",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "balancesLiveScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "tokenRates",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "decimalScalingFactors",
            type: "uint256[]"
          }
        ],
        internalType: "struct PoolData",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolPausedState",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "address", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolRoleAccounts",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        internalType: "struct PoolRoleAccounts",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolTokenInfo",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenInfo[]",
        name: "tokenInfo",
        type: "tuple[]"
      },
      {
        internalType: "uint256[]",
        name: "balancesRaw",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "lastBalancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolTokenRates",
    outputs: [
      {
        internalType: "uint256[]",
        name: "decimalScalingFactors",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "tokenRates",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getPoolTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeeController",
    outputs: [
      {
        internalType: "contract IProtocolFeeController",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getReservesOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "getStaticSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "getTokenDelta",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVaultAdmin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "initialize",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "isERC4626BufferInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolInRecoveryMode",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolPaused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolRegistered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isQueryDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isQueryDisabledPermanently",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isUnlocked",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "quote",
    outputs: [{ internalType: "bytes", name: "result", type: "bytes" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "quoteAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "reentrancyGuardEntered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenConfig[]",
        name: "tokenConfig",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "uint32",
        name: "pauseWindowEndTime",
        type: "uint32"
      },
      { internalType: "bool", name: "protocolFeeExempt", type: "bool" },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    name: "registerPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "from", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      }
    ],
    name: "removeLiquidityRecovery",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOutRaw",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/weightedPoolFactory.V3.ts
var weightedPoolFactoryAbi_V3 = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      {
        internalType: "uint32",
        name: "pauseWindowDuration",
        type: "uint32"
      },
      { internalType: "string", name: "factoryVersion", type: "string" },
      { internalType: "string", name: "poolVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "Create2EmptyBytecode", type: "error" },
  { inputs: [], name: "Create2FailedDeployment", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "Create2InsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "Disabled", type: "error" },
  { inputs: [], name: "IndexOutOfBounds", type: "error" },
  { inputs: [], name: "PoolPauseWindowDurationOverflow", type: "error" },
  { inputs: [], name: "SenderNotAllowed", type: "error" },
  { inputs: [], name: "StandardPoolWithCreator", type: "error" },
  { anonymous: false, inputs: [], name: "FactoryDisabled", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolCreated",
    type: "event"
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenConfig[]",
        name: "tokens",
        type: "tuple[]"
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      { internalType: "bool", name: "enableDonation", type: "bool" },
      {
        internalType: "bool",
        name: "disableUnbalancedLiquidity",
        type: "bool"
      },
      { internalType: "bytes32", name: "salt", type: "bytes32" }
    ],
    name: "create",
    outputs: [{ internalType: "address", name: "pool", type: "address" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      { internalType: "contract IAuthorizer", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDefaultLiquidityManagement",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getDefaultPoolHooksContract",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes", name: "constructorArgs", type: "bytes" },
      { internalType: "bytes32", name: "salt", type: "bytes32" }
    ],
    name: "getDeploymentAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNewPoolPauseWindowEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOriginalPauseWindowEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauseWindowDuration",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolVersion",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPools",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "count", type: "uint256" }
    ],
    name: "getPoolsInRange",
    outputs: [
      { internalType: "address[]", name: "pools", type: "address[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolFromFactory",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/weightedPoolFactoryV4.V2.ts
var weightedPoolFactoryV4Abi_V2 = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address"
      },
      {
        internalType: "contract IProtocolFeePercentagesProvider",
        name: "protocolFeeProvider",
        type: "address"
      },
      {
        internalType: "string",
        name: "factoryVersion",
        type: "string"
      },
      {
        internalType: "string",
        name: "poolVersion",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [],
    name: "FactoryDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]"
      },
      {
        internalType: "contract IRateProvider[]",
        name: "rateProviders",
        type: "address[]"
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      }
    ],
    name: "create",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4"
      }
    ],
    name: "getActionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      {
        internalType: "contract IAuthorizer",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCreationCodeContracts",
    outputs: [
      {
        internalType: "address",
        name: "contractA",
        type: "address"
      },
      {
        internalType: "address",
        name: "contractB",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauseConfiguration",
    outputs: [
      {
        internalType: "uint256",
        name: "pauseWindowDuration",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodDuration",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeePercentagesProvider",
    outputs: [
      {
        internalType: "contract IProtocolFeePercentagesProvider",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isDisabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "isPoolFromFactory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/weightedPoolV4.V2.ts
var weightedPoolV4Abi_V2 = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string"
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "normalizedWeights",
            type: "uint256[]"
          },
          {
            internalType: "contract IRateProvider[]",
            name: "rateProviders",
            type: "address[]"
          },
          {
            internalType: "address[]",
            name: "assetManagers",
            type: "address[]"
          },
          {
            internalType: "uint256",
            name: "swapFeePercentage",
            type: "uint256"
          }
        ],
        internalType: "struct WeightedPool.NewPoolParams",
        name: "params",
        type: "tuple"
      },
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address"
      },
      {
        internalType: "contract IProtocolFeePercentagesProvider",
        name: "protocolFeeProvider",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "pauseWindowDuration",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodDuration",
        type: "uint256"
      },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "string", name: "version", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "feeType",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "protocolFeePercentage",
        type: "uint256"
      }
    ],
    name: "ProtocolFeePercentageCacheUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool"
      }
    ],
    name: "RecoveryModeStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "SwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getATHRateProduct",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getActualSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      {
        internalType: "contract IAuthorizer",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getInvariant",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getLastPostJoinExitInvariant",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "getNextNonce",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNormalizedWeights",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPausedState",
    outputs: [
      { internalType: "bool", name: "paused", type: "bool" },
      {
        internalType: "uint256",
        name: "pauseWindowEndTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "bufferPeriodEndTime",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "feeType", type: "uint256" }],
    name: "getProtocolFeePercentageCache",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolFeesCollector",
    outputs: [
      {
        internalType: "contract IProtocolFeesCollector",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProtocolSwapFeeDelegation",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRateProviders",
    outputs: [
      {
        internalType: "contract IRateProvider[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getScalingFactors",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "inRecoveryMode",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256"
      },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "onExitPool",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256"
      },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "onJoinPool",
    outputs: [
      { internalType: "uint256[]", name: "", type: "uint256[]" },
      { internalType: "uint256[]", name: "", type: "uint256[]" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IVault.SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "contract IERC20",
            name: "tokenIn",
            type: "address"
          },
          {
            internalType: "contract IERC20",
            name: "tokenOut",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "bytes32",
            name: "poolId",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "lastChangeBlock",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "userData",
            type: "bytes"
          }
        ],
        internalType: "struct IPoolSwapStructs.SwapRequest",
        name: "request",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "balanceTokenIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "balanceTokenOut",
        type: "uint256"
      }
    ],
    name: "onSwap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "value", type: "uint256" },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256"
      },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryExit",
    outputs: [
      { internalType: "uint256", name: "bptIn", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "poolId", type: "bytes32" },
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256[]",
        name: "balances",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "lastChangeBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "protocolSwapFeePercentage",
        type: "uint256"
      },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryJoin",
    outputs: [
      { internalType: "uint256", name: "bptOut", type: "uint256" },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      { internalType: "bytes", name: "poolConfig", type: "bytes" }
    ],
    name: "setAssetManagerPoolConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "setSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "updateProtocolFeePercentageCache",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/weightedPool.V3.ts
var weightedPoolAbi_V3 = [
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          {
            internalType: "uint256",
            name: "numTokens",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "normalizedWeights",
            type: "uint256[]"
          },
          { internalType: "string", name: "version", type: "string" }
        ],
        internalType: "struct WeightedPool.NewPoolParams",
        name: "params",
        type: "tuple"
      },
      { internalType: "contract IVault", name: "vault", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "BaseOutOfBounds", type: "error" },
  { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "length", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "deadline", type: "uint256" }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "signer", type: "address" },
      { internalType: "address", name: "owner", type: "address" }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  { inputs: [], name: "ExponentOutOfBounds", type: "error" },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "currentNonce", type: "uint256" }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  { inputs: [], name: "InvalidExponent", type: "error" },
  { inputs: [], name: "InvalidShortString", type: "error" },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "MaxInRatio", type: "error" },
  { inputs: [], name: "MaxOutRatio", type: "error" },
  { inputs: [], name: "MinWeight", type: "error" },
  { inputs: [], name: "NormalizedWeightInvariant", type: "error" },
  { inputs: [], name: "ProductOutOfBounds", type: "error" },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  {
    inputs: [{ internalType: "string", name: "str", type: "string" }],
    name: "StringTooLong",
    type: "error"
  },
  { inputs: [], name: "WeightedPoolBptRateUnsupported", type: "error" },
  { inputs: [], name: "ZeroDivision", type: "error" },
  { inputs: [], name: "ZeroInvariant", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      },
      { internalType: "uint256", name: "tokenInIndex", type: "uint256" },
      {
        internalType: "uint256",
        name: "invariantRatio",
        type: "uint256"
      }
    ],
    name: "computeBalance",
    outputs: [
      { internalType: "uint256", name: "newBalance", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      },
      { internalType: "enum Rounding", name: "rounding", type: "uint8" }
    ],
    name: "computeInvariant",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { internalType: "bytes1", name: "fields", type: "bytes1" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "emitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "emitTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAggregateFeePercentages",
    outputs: [
      {
        internalType: "uint256",
        name: "aggregateSwapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "aggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentLiveBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumInvariantRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumInvariantRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getNormalizedWeights",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getStaticSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokenInfo",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenInfo[]",
        name: "tokenInfo",
        type: "tuple[]"
      },
      {
        internalType: "uint256[]",
        name: "balancesRaw",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "lastBalancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getWeightedPoolDynamicData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "balancesLiveScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "tokenRates",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "staticSwapFeePercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256"
          },
          {
            internalType: "bool",
            name: "isPoolInitialized",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolPaused",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolInRecoveryMode",
            type: "bool"
          }
        ],
        internalType: "struct WeightedPoolDynamicData",
        name: "data",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getWeightedPoolImmutableData",
    outputs: [
      {
        components: [
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "decimalScalingFactors",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "normalizedWeights",
            type: "uint256[]"
          }
        ],
        internalType: "struct WeightedPoolImmutableData",
        name: "data",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "incrementNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amountGivenScaled18",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "balancesScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "indexIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "indexOut",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "router",
            type: "address"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct PoolSwapParams",
        name: "request",
        type: "tuple"
      }
    ],
    name: "onSwap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
    ],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/vaultAdmin.V3.ts
var vaultAdminAbi_V3 = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "mainVault",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "pauseWindowDuration",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "bufferPeriodDuration",
        type: "uint32"
      },
      {
        internalType: "uint256",
        name: "minTradeAmount",
        type: "uint256"
      },
      { internalType: "uint256", name: "minWrapAmount", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "AfterAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterInitializeHookFailed", type: "error" },
  { inputs: [], name: "AfterRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "AfterSwapHookFailed", type: "error" },
  { inputs: [], name: "AmountGivenZero", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "AmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "AmountOutBelowMin",
    type: "error"
  },
  { inputs: [], name: "BalanceNotSettled", type: "error" },
  { inputs: [], name: "BalanceOverflow", type: "error" },
  { inputs: [], name: "BeforeAddLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeInitializeHookFailed", type: "error" },
  { inputs: [], name: "BeforeRemoveLiquidityHookFailed", type: "error" },
  { inputs: [], name: "BeforeSwapHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "BptAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "BptAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "BufferNotInitialized",
    type: "error"
  },
  { inputs: [], name: "BufferSharesInvalidOwner", type: "error" },
  { inputs: [], name: "BufferSharesInvalidReceiver", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "BufferTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "CannotReceiveEth", type: "error" },
  { inputs: [], name: "CannotSwapSameToken", type: "error" },
  { inputs: [], name: "CodecOverflow", type: "error" },
  { inputs: [], name: "DoesNotSupportAddLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportDonation", type: "error" },
  { inputs: [], name: "DoesNotSupportRemoveLiquidityCustom", type: "error" },
  { inputs: [], name: "DoesNotSupportUnbalancedLiquidity", type: "error" },
  { inputs: [], name: "DynamicSwapFeeHookFailed", type: "error" },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "allowance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "approver", type: "address" }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "receiver", type: "address" }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "spender", type: "address" }],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  { inputs: [], name: "FeePrecisionTooHigh", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "HookAdjustedAmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "HookAdjustedAmountOutBelowMin",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "HookAdjustedSwapLimit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "poolFactory", type: "address" }
    ],
    name: "HookRegistrationFailed",
    type: "error"
  },
  { inputs: [], name: "InvalidAddLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidRemoveLiquidityKind", type: "error" },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "InvalidTokenConfiguration", type: "error" },
  { inputs: [], name: "InvalidTokenDecimals", type: "error" },
  { inputs: [], name: "InvalidTokenType", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "InvalidUnderlyingToken",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      }
    ],
    name: "IssuedSharesBelowMin",
    type: "error"
  },
  { inputs: [], name: "MaxTokens", type: "error" },
  { inputs: [], name: "MinTokens", type: "error" },
  { inputs: [], name: "NotEnoughBufferShares", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedUnderlyingAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualUnderlyingAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughUnderlying",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expectedWrappedAmount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "actualWrappedAmount",
        type: "uint256"
      }
    ],
    name: "NotEnoughWrapped",
    type: "error"
  },
  { inputs: [], name: "NotStaticCall", type: "error" },
  { inputs: [], name: "NotVaultDelegateCall", type: "error" },
  { inputs: [], name: "OutOfBounds", type: "error" },
  { inputs: [], name: "PauseBufferPeriodDurationTooLarge", type: "error" },
  { inputs: [], name: "PercentageAboveMax", type: "error" },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInRecoveryMode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotInitialized",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotPaused",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolNotRegistered",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPauseWindowExpired",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "PoolPaused",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "totalSupply", type: "uint256" }
    ],
    name: "PoolTotalSupplyTooLow",
    type: "error"
  },
  { inputs: [], name: "ProtocolFeesExceedTotalCollected", type: "error" },
  { inputs: [], name: "QueriesDisabled", type: "error" },
  { inputs: [], name: "QueriesDisabledPermanently", type: "error" },
  { inputs: [], name: "QuoteResultSpoofed", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  { inputs: [], name: "RouterNotTrusted", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
    name: "SafeCastOverflowedUintToInt",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SenderNotAllowed", type: "error" },
  { inputs: [], name: "SwapFeePercentageTooHigh", type: "error" },
  { inputs: [], name: "SwapFeePercentageTooLow", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "limit", type: "uint256" }
    ],
    name: "SwapLimit",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenAlreadyRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "token", type: "address" }
    ],
    name: "TokenNotRegistered",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      { internalType: "address", name: "expectedToken", type: "address" },
      { internalType: "address", name: "actualToken", type: "address" }
    ],
    name: "TokensMismatch",
    type: "error"
  },
  { inputs: [], name: "TradeAmountTooSmall", type: "error" },
  { inputs: [], name: "VaultBuffersArePaused", type: "error" },
  { inputs: [], name: "VaultIsNotUnlocked", type: "error" },
  { inputs: [], name: "VaultNotPaused", type: "error" },
  { inputs: [], name: "VaultPauseWindowDurationTooLarge", type: "error" },
  { inputs: [], name: "VaultPauseWindowExpired", type: "error" },
  { inputs: [], name: "VaultPaused", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "WrapAmountTooSmall",
    type: "error"
  },
  { inputs: [], name: "WrongProtocolFeeControllerDeployment", type: "error" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address"
      }
    ],
    name: "WrongUnderlyingToken",
    type: "error"
  },
  { inputs: [], name: "WrongVaultAdminDeployment", type: "error" },
  { inputs: [], name: "WrongVaultExtensionDeployment", type: "error" },
  { inputs: [], name: "ZeroDivision", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateSwapFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateSwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "aggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    name: "AggregateYieldFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "AuthorizerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesBurned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "issuedShares",
        type: "uint256"
      }
    ],
    name: "BufferSharesMinted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum AddLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsAddedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityAddedToBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "liquidityProvider",
        type: "address"
      },
      {
        indexed: true,
        internalType: "enum RemoveLiquidityKind",
        name: "kind",
        type: "uint8"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amountsRemovedRaw",
        type: "uint256[]"
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "swapFeeAmountsRaw",
        type: "uint256[]"
      }
    ],
    name: "LiquidityRemoved",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountWrapped",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "LiquidityRemovedFromBuffer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolInitialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "PoolPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "recoveryMode",
        type: "bool"
      }
    ],
    name: "PoolRecoveryModeStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "factory",
        type: "address"
      },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct TokenConfig[]",
        name: "tokenConfig",
        type: "tuple[]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "pauseWindowEndTime",
        type: "uint32"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "enableHookAdjustedAmounts",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterInitialize",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallComputeDynamicSwapFee",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterSwap",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterAddLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallBeforeRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "shouldCallAfterRemoveLiquidity",
            type: "bool"
          },
          {
            internalType: "address",
            name: "hooksContract",
            type: "address"
          }
        ],
        indexed: false,
        internalType: "struct HooksConfig",
        name: "hooksConfig",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        indexed: false,
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    name: "PoolRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IProtocolFeeController",
        name: "newProtocolFeeController",
        type: "address"
      }
    ],
    name: "ProtocolFeeControllerChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeeAmount",
        type: "uint256"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "SwapFeePercentageChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawnUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Unwrap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "eventKey",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "eventData",
        type: "bytes"
      }
    ],
    name: "VaultAuxiliary",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultBuffersPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "paused",
        type: "bool"
      }
    ],
    name: "VaultPausedStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesDisabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultQueriesEnabled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedUnderlying",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "mintedShares",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bufferBalances",
        type: "bytes32"
      }
    ],
    name: "Wrap",
    type: "event"
  },
  { stateMutability: "payable", type: "fallback" },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "maxAmountUnderlyingInRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "maxAmountWrappedInRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exactSharesToIssue",
        type: "uint256"
      },
      { internalType: "address", name: "sharesOwner", type: "address" }
    ],
    name: "addLiquidityToBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "amountUnderlyingRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedRaw",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "areBuffersPaused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "collectAggregateFees",
    outputs: [
      {
        internalType: "uint256[]",
        name: "totalSwapFees",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "totalYieldFees",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableQuery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disableQueryPermanently",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "disableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableQuery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "enableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      }
    ],
    name: "getBufferAsset",
    outputs: [
      {
        internalType: "address",
        name: "underlyingToken",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "token",
        type: "address"
      }
    ],
    name: "getBufferBalance",
    outputs: [
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "uint256", name: "", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBufferMinimumTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "token",
        type: "address"
      },
      { internalType: "address", name: "user", type: "address" }
    ],
    name: "getBufferOwnerShares",
    outputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBufferPeriodDuration",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBufferPeriodEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "token",
        type: "address"
      }
    ],
    name: "getBufferTotalShares",
    outputs: [{ internalType: "uint256", name: "shares", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumPoolTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumPoolTokens",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumTradeAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumWrapAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauseWindowEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolMinimumTotalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getVaultPausedState",
    outputs: [
      { internalType: "bool", name: "", type: "bool" },
      { internalType: "uint32", name: "", type: "uint32" },
      { internalType: "uint32", name: "", type: "uint32" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amountUnderlyingRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amountWrappedRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minIssuedShares",
        type: "uint256"
      },
      { internalType: "address", name: "sharesOwner", type: "address" }
    ],
    name: "initializeBuffer",
    outputs: [
      { internalType: "uint256", name: "issuedShares", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isVaultPaused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "pausePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pauseVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pauseVaultBuffers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "reentrancyGuardEntered",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "sharesToRemove",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minAmountUnderlyingOutRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minAmountWrappedOutRaw",
        type: "uint256"
      }
    ],
    name: "removeLiquidityFromBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "removedUnderlyingBalanceRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "removedWrappedBalanceRaw",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "wrappedToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "sharesToRemove",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minAmountUnderlyingOutRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "minAmountWrappedOutRaw",
        type: "uint256"
      },
      { internalType: "address", name: "sharesOwner", type: "address" }
    ],
    name: "removeLiquidityFromBufferHook",
    outputs: [
      {
        internalType: "uint256",
        name: "removedUnderlyingBalanceRaw",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "removedWrappedBalanceRaw",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IAuthorizer",
        name: "newAuthorizer",
        type: "address"
      }
    ],
    name: "setAuthorizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IProtocolFeeController",
        name: "newProtocolFeeController",
        type: "address"
      }
    ],
    name: "setProtocolFeeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      }
    ],
    name: "setStaticSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "unpausePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpauseVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpauseVaultBuffers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "newAggregateSwapFeePercentage",
        type: "uint256"
      }
    ],
    name: "updateAggregateSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "newAggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    name: "updateAggregateYieldFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/abi/stablePool.V3.ts
var stablePoolAbi_V3 = [
  {
    inputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "symbol", type: "string" },
          {
            internalType: "uint256",
            name: "amplificationParameter",
            type: "uint256"
          },
          { internalType: "string", name: "version", type: "string" }
        ],
        internalType: "struct StablePool.NewPoolParams",
        name: "params",
        type: "tuple"
      },
      { internalType: "contract IVault", name: "vault", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "AmpUpdateAlreadyStarted", type: "error" },
  { inputs: [], name: "AmpUpdateDurationTooShort", type: "error" },
  { inputs: [], name: "AmpUpdateNotStarted", type: "error" },
  { inputs: [], name: "AmpUpdateRateTooFast", type: "error" },
  { inputs: [], name: "AmplificationFactorTooHigh", type: "error" },
  { inputs: [], name: "AmplificationFactorTooLow", type: "error" },
  { inputs: [], name: "ECDSAInvalidSignature", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "length", type: "uint256" }],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [{ internalType: "bytes32", name: "s", type: "bytes32" }],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      { internalType: "uint256", name: "deadline", type: "uint256" }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "signer", type: "address" },
      { internalType: "address", name: "owner", type: "address" }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "uint256", name: "currentNonce", type: "uint256" }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  { inputs: [], name: "InvalidShortString", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SenderNotAllowed", type: "error" },
  { inputs: [], name: "StableComputeBalanceDidNotConverge", type: "error" },
  { inputs: [], name: "StableInvariantDidNotConverge", type: "error" },
  {
    inputs: [{ internalType: "string", name: "str", type: "string" }],
    name: "StringTooLong",
    type: "error"
  },
  { inputs: [], name: "ZeroDivision", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startValue",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endValue",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
      }
    ],
    name: "AmpUpdateStarted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentValue",
        type: "uint256"
      }
    ],
    name: "AmpUpdateStopped",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      },
      { internalType: "uint256", name: "tokenInIndex", type: "uint256" },
      {
        internalType: "uint256",
        name: "invariantRatio",
        type: "uint256"
      }
    ],
    name: "computeBalance",
    outputs: [
      { internalType: "uint256", name: "newBalance", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      },
      { internalType: "enum Rounding", name: "rounding", type: "uint8" }
    ],
    name: "computeInvariant",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      { internalType: "bytes1", name: "fields", type: "bytes1" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "version", type: "string" },
      { internalType: "uint256", name: "chainId", type: "uint256" },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      { internalType: "bytes32", name: "salt", type: "bytes32" },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "emitApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "emitTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAggregateFeePercentages",
    outputs: [
      {
        internalType: "uint256",
        name: "aggregateSwapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "aggregateYieldFeePercentage",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAmplificationParameter",
    outputs: [
      { internalType: "uint256", name: "value", type: "uint256" },
      { internalType: "bool", name: "isUpdating", type: "bool" },
      { internalType: "uint256", name: "precision", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAmplificationState",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "startValue",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "endValue",
            type: "uint64"
          },
          {
            internalType: "uint32",
            name: "startTime",
            type: "uint32"
          },
          { internalType: "uint32", name: "endTime", type: "uint32" }
        ],
        internalType: "struct AmplificationState",
        name: "amplificationState",
        type: "tuple"
      },
      { internalType: "uint256", name: "precision", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCurrentLiveBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "balancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumInvariantRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMaximumSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumInvariantRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinimumSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getRate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getStablePoolDynamicData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256[]",
            name: "balancesLiveScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256[]",
            name: "tokenRates",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "staticSwapFeePercentage",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "bptRate",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "amplificationParameter",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startValue",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endValue",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "startTime",
            type: "uint32"
          },
          { internalType: "uint32", name: "endTime", type: "uint32" },
          {
            internalType: "bool",
            name: "isAmpUpdating",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolInitialized",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolPaused",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "isPoolInRecoveryMode",
            type: "bool"
          }
        ],
        internalType: "struct StablePoolDynamicData",
        name: "data",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getStablePoolImmutableData",
    outputs: [
      {
        components: [
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "decimalScalingFactors",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "amplificationParameterPrecision",
            type: "uint256"
          }
        ],
        internalType: "struct StablePoolImmutableData",
        name: "data",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getStaticSwapFeePercentage",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokenInfo",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        components: [
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenInfo[]",
        name: "tokenInfo",
        type: "tuple[]"
      },
      {
        internalType: "uint256[]",
        name: "balancesRaw",
        type: "uint256[]"
      },
      {
        internalType: "uint256[]",
        name: "lastBalancesLiveScaled18",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokens",
    outputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "incrementNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum SwapKind",
            name: "kind",
            type: "uint8"
          },
          {
            internalType: "uint256",
            name: "amountGivenScaled18",
            type: "uint256"
          },
          {
            internalType: "uint256[]",
            name: "balancesScaled18",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "indexIn",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "indexOut",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "router",
            type: "address"
          },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct PoolSwapParams",
        name: "request",
        type: "tuple"
      }
    ],
    name: "onSwap",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "deadline", type: "uint256" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "rawEndValue", type: "uint256" },
      { internalType: "uint256", name: "endTime", type: "uint256" }
    ],
    name: "startAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stopAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes4", name: "interfaceId", type: "bytes4" }
    ],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/stablePoolFactory.V3.ts
var stablePoolFactoryAbi_V3 = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      {
        internalType: "uint32",
        name: "pauseWindowDuration",
        type: "uint32"
      },
      { internalType: "string", name: "factoryVersion", type: "string" },
      { internalType: "string", name: "poolVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { inputs: [], name: "Create2EmptyBytecode", type: "error" },
  { inputs: [], name: "Create2FailedDeployment", type: "error" },
  {
    inputs: [
      { internalType: "uint256", name: "balance", type: "uint256" },
      { internalType: "uint256", name: "needed", type: "uint256" }
    ],
    name: "Create2InsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "Disabled", type: "error" },
  { inputs: [], name: "IndexOutOfBounds", type: "error" },
  { inputs: [], name: "MaxTokens", type: "error" },
  { inputs: [], name: "PoolPauseWindowDurationOverflow", type: "error" },
  { inputs: [], name: "SenderNotAllowed", type: "error" },
  { inputs: [], name: "StandardPoolWithCreator", type: "error" },
  { anonymous: false, inputs: [], name: "FactoryDisabled", type: "event" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "PoolCreated",
    type: "event"
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address"
          },
          {
            internalType: "enum TokenType",
            name: "tokenType",
            type: "uint8"
          },
          {
            internalType: "contract IRateProvider",
            name: "rateProvider",
            type: "address"
          },
          {
            internalType: "bool",
            name: "paysYieldFees",
            type: "bool"
          }
        ],
        internalType: "struct TokenConfig[]",
        name: "tokens",
        type: "tuple[]"
      },
      {
        internalType: "uint256",
        name: "amplificationParameter",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "address",
            name: "pauseManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "swapFeeManager",
            type: "address"
          },
          {
            internalType: "address",
            name: "poolCreator",
            type: "address"
          }
        ],
        internalType: "struct PoolRoleAccounts",
        name: "roleAccounts",
        type: "tuple"
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "poolHooksContract",
        type: "address"
      },
      { internalType: "bool", name: "enableDonation", type: "bool" },
      {
        internalType: "bool",
        name: "disableUnbalancedLiquidity",
        type: "bool"
      },
      { internalType: "bytes32", name: "salt", type: "bytes32" }
    ],
    name: "create",
    outputs: [{ internalType: "address", name: "pool", type: "address" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes4", name: "selector", type: "bytes4" }],
    name: "getActionId",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      { internalType: "contract IAuthorizer", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDefaultLiquidityManagement",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "disableUnbalancedLiquidity",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableAddLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableRemoveLiquidityCustom",
            type: "bool"
          },
          {
            internalType: "bool",
            name: "enableDonation",
            type: "bool"
          }
        ],
        internalType: "struct LiquidityManagement",
        name: "liquidityManagement",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getDefaultPoolHooksContract",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes", name: "constructorArgs", type: "bytes" },
      { internalType: "bytes32", name: "salt", type: "bytes32" }
    ],
    name: "getDeploymentAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getNewPoolPauseWindowEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getOriginalPauseWindowEndTime",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPauseWindowDuration",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPoolVersion",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPools",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "start", type: "uint256" },
      { internalType: "uint256", name: "count", type: "uint256" }
    ],
    name: "getPoolsInRange",
    outputs: [
      { internalType: "address[]", name: "pools", type: "address[]" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      { internalType: "contract IVault", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isDisabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "pool", type: "address" }],
    name: "isPoolFromFactory",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/abi/balancerCompositeLiquidityRouter.ts
var balancerCompositeLiquidityRouterAbi = [
  {
    inputs: [
      { internalType: "contract IVault", name: "vault", type: "address" },
      { internalType: "contract IWETH", name: "weth", type: "address" },
      {
        internalType: "contract IPermit2",
        name: "permit2",
        type: "address"
      },
      { internalType: "string", name: "routerVersion", type: "string" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenIn",
        type: "address"
      },
      { internalType: "uint256", name: "amountIn", type: "uint256" },
      { internalType: "uint256", name: "maxAmountIn", type: "uint256" }
    ],
    name: "AmountInAboveMax",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenOut",
        type: "address"
      },
      { internalType: "uint256", name: "amountOut", type: "uint256" },
      { internalType: "uint256", name: "minAmountOut", type: "uint256" }
    ],
    name: "AmountOutBelowMin",
    type: "error"
  },
  { inputs: [], name: "ElementNotFound", type: "error" },
  { inputs: [], name: "ErrorSelectorNotFound", type: "error" },
  { inputs: [], name: "EthTransfer", type: "error" },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  { inputs: [], name: "InputLengthMismatch", type: "error" },
  { inputs: [], name: "InsufficientEth", type: "error" },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [
      { internalType: "uint8", name: "bits", type: "uint8" },
      { internalType: "uint256", name: "value", type: "uint256" }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "SenderIsNotVault",
    type: "error"
  },
  { inputs: [], name: "SwapDeadline", type: "error" },
  { inputs: [], name: "TransientIndexOutOfBounds", type: "error" },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "expectedTokensOut",
        type: "address[]"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" }
    ],
    name: "WrongTokensOut",
    type: "error"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.AddLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "addLiquidityERC4626PoolProportionalHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsIn",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.AddLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "addLiquidityERC4626PoolUnbalancedHook",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "maxUnderlyingAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityProportionalToERC4626Pool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsIn",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "parentPool", type: "address" },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityUnbalancedNestedPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "maxAmountsIn",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "minBptAmountOut",
            type: "uint256"
          },
          {
            internalType: "enum AddLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.AddLiquidityHookParams",
        name: "params",
        type: "tuple"
      },
      { internalType: "address[]", name: "tokensIn", type: "address[]" }
    ],
    name: "addLiquidityUnbalancedNestedPoolHook",
    outputs: [
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "exactUnderlyingAmountsIn",
        type: "uint256[]"
      },
      {
        internalType: "uint256",
        name: "minBptAmountOut",
        type: "uint256"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "addLiquidityUnbalancedToERC4626Pool",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getSender",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          { internalType: "address", name: "token", type: "address" },
          { internalType: "address", name: "owner", type: "address" },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          { internalType: "uint256", name: "nonce", type: "uint256" },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct IRouterCommon.PermitApproval[]",
        name: "permitBatch",
        type: "tuple[]"
      },
      {
        internalType: "bytes[]",
        name: "permitSignatures",
        type: "bytes[]"
      },
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "token",
                type: "address"
              },
              {
                internalType: "uint160",
                name: "amount",
                type: "uint160"
              },
              {
                internalType: "uint48",
                name: "expiration",
                type: "uint48"
              },
              {
                internalType: "uint48",
                name: "nonce",
                type: "uint48"
              }
            ],
            internalType: "struct IAllowanceTransfer.PermitDetails[]",
            name: "details",
            type: "tuple[]"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "sigDeadline",
            type: "uint256"
          }
        ],
        internalType: "struct IAllowanceTransfer.PermitBatch",
        name: "permit2Batch",
        type: "tuple"
      },
      { internalType: "bytes", name: "permit2Signature", type: "bytes" },
      { internalType: "bytes[]", name: "multicallData", type: "bytes[]" }
    ],
    name: "permitBatchAndCall",
    outputs: [
      { internalType: "bytes[]", name: "results", type: "bytes[]" }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountOut",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityProportionalToERC4626Pool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsIn",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "parentPool", type: "address" },
      { internalType: "address[]", name: "tokensIn", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "exactAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityUnbalancedNestedPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256[]",
        name: "exactUnderlyingAmountsIn",
        type: "uint256[]"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryAddLiquidityUnbalancedToERC4626Pool",
    outputs: [
      { internalType: "uint256", name: "bptAmountOut", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquidityProportionalFromERC4626Pool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "parentPool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "queryRemoveLiquidityProportionalNestedPool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "maxBptAmountIn",
            type: "uint256"
          },
          {
            internalType: "enum RemoveLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.RemoveLiquidityHookParams",
        name: "params",
        type: "tuple"
      }
    ],
    name: "removeLiquidityERC4626PoolProportionalHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "pool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      {
        internalType: "uint256[]",
        name: "minUnderlyingAmountsOut",
        type: "uint256[]"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquidityProportionalFromERC4626Pool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "underlyingAmountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "parentPool", type: "address" },
      {
        internalType: "uint256",
        name: "exactBptAmountIn",
        type: "uint256"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" },
      {
        internalType: "uint256[]",
        name: "minAmountsOut",
        type: "uint256[]"
      },
      { internalType: "bool", name: "wethIsEth", type: "bool" },
      { internalType: "bytes", name: "userData", type: "bytes" }
    ],
    name: "removeLiquidityProportionalNestedPool",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          { internalType: "address", name: "pool", type: "address" },
          {
            internalType: "uint256[]",
            name: "minAmountsOut",
            type: "uint256[]"
          },
          {
            internalType: "uint256",
            name: "maxBptAmountIn",
            type: "uint256"
          },
          {
            internalType: "enum RemoveLiquidityKind",
            name: "kind",
            type: "uint8"
          },
          { internalType: "bool", name: "wethIsEth", type: "bool" },
          { internalType: "bytes", name: "userData", type: "bytes" }
        ],
        internalType: "struct IRouterCommon.RemoveLiquidityHookParams",
        name: "params",
        type: "tuple"
      },
      { internalType: "address[]", name: "tokensOut", type: "address[]" }
    ],
    name: "removeLiquidityProportionalNestedPoolHook",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/data/providers/balancer-api/client/index.ts
var BalancerApiClient = class {
  constructor(apiUrl, chainId) {
    __publicField(this, "apiUrl");
    __publicField(this, "chainId");
    this.apiUrl = apiUrl;
    this.chainId = chainId;
  }
  async fetch(requestQuery) {
    const headers = {
      "Content-Type": "application/json",
      ChainId: this.chainId.toString()
    };
    if (process.env.BEX_API_KEY) {
      headers["x-api-key"] = process.env.BEX_API_KEY;
    }
    const response = await fetch(this.apiUrl, {
      method: "post",
      body: JSON.stringify(requestQuery),
      headers
    });
    return response.json();
  }
};

// src/types.ts
var PoolType = /* @__PURE__ */ ((PoolType2) => {
  PoolType2["AaveLinear"] = "AaveLinear";
  PoolType2["ComposableStable"] = "ComposableStable";
  PoolType2["CowAmm"] = "CowAmm";
  PoolType2["Fx"] = "FX";
  PoolType2["Gyro2"] = "Gyro2";
  PoolType2["Gyro3"] = "Gyro3";
  PoolType2["GyroE"] = "GyroE";
  PoolType2["MetaStable"] = "MetaStable";
  PoolType2["Stable"] = "Stable";
  PoolType2["Weighted"] = "Weighted";
  PoolType2["Boosted"] = "Boosted";
  return PoolType2;
})(PoolType || {});
var SwapKind = /* @__PURE__ */ ((SwapKind2) => {
  SwapKind2[SwapKind2["GivenIn"] = 0] = "GivenIn";
  SwapKind2[SwapKind2["GivenOut"] = 1] = "GivenOut";
  return SwapKind2;
})(SwapKind || {});
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2[TokenType2["STANDARD"] = 0] = "STANDARD";
  TokenType2[TokenType2["TOKEN_WITH_RATE"] = 1] = "TOKEN_WITH_RATE";
  TokenType2[TokenType2["ERC4626_TOKEN"] = 2] = "ERC4626_TOKEN";
  return TokenType2;
})(TokenType || {});

// src/utils/poolTypeMapper.ts
var poolTypeMap = {
  COMPOSABLE_STABLE: "ComposableStable" /* ComposableStable */,
  GYRO: "Gyro2" /* Gyro2 */,
  GYRO3: "Gyro3" /* Gyro3 */,
  GYROE: "GyroE" /* GyroE */,
  META_STABLE: "MetaStable" /* MetaStable */,
  STABLE: "Stable" /* Stable */,
  WEIGHTED: "Weighted" /* Weighted */,
  COW_AMM: "CowAmm" /* CowAmm */
};
var mapPoolType = (type) => {
  const supportedPoolTypes = Object.keys(poolTypeMap);
  if (!supportedPoolTypes.includes(type)) {
    throw new Error(
      `Unsupported pool type ${type} - supported types are ${supportedPoolTypes.join(
        ", "
      )}`
    );
  }
  return poolTypeMap[type];
};

// src/entities/token.ts
var Token = class {
  constructor(chainId, address, decimals, symbol, name, wrapped) {
    __publicField(this, "chainId");
    __publicField(this, "address");
    __publicField(this, "decimals");
    __publicField(this, "symbol");
    __publicField(this, "name");
    __publicField(this, "wrapped");
    this.chainId = chainId;
    this.address = address.toLowerCase();
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
    this.wrapped = wrapped ? wrapped.toLowerCase() : address.toLowerCase();
  }
  isEqual(token) {
    return this.chainId === token.chainId && this.address === token.address;
  }
  isUnderlyingEqual(token) {
    return this.chainId === token.chainId && this.wrapped === token.wrapped;
  }
  isSameAddress(address) {
    return this.address === address.toLowerCase();
  }
  toInputToken() {
    return {
      address: this.address,
      decimals: this.decimals
    };
  }
};

// src/utils/constants.ts
var _chains = require('viem/chains');
var ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
var EMPTY_SENDER = { account: ZERO_ADDRESS };
var NATIVE_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
var MAX_UINT112 = 5192296858534827628530496329220095n;
var MAX_UINT256 = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;
var PREMINTED_STABLE_BPT = 2596148429267413814265248164610048n;
var DECIMAL_SCALES = {
  0: 1n,
  1: 10n,
  2: 100n,
  3: 1000n,
  4: 10000n,
  5: 100000n,
  6: 1000000n,
  7: 10000000n,
  8: 100000000n,
  9: 1000000000n,
  10: 10000000000n,
  11: 100000000000n,
  12: 1000000000000n,
  13: 10000000000000n,
  14: 100000000000000n,
  15: 1000000000000000n,
  16: 10000000000000000n,
  17: 100000000000000000n,
  18: 1000000000000000000n
};
var SECONDS_PER_YEAR = 31536000n;
var ChainId = /* @__PURE__ */ ((ChainId23) => {
  ChainId23[ChainId23["MAINNET"] = 1] = "MAINNET";
  ChainId23[ChainId23["BERACHAIN"] = 80094] = "BERACHAIN";
  ChainId23[ChainId23["AVALANCHE"] = 43114] = "AVALANCHE";
  ChainId23[ChainId23["BASE_GOERLI"] = 84531] = "BASE_GOERLI";
  ChainId23[ChainId23["SEPOLIA"] = 11155111] = "SEPOLIA";
  return ChainId23;
})(ChainId || {});
var API_CHAIN_NAMES = {
  [1 /* MAINNET */]: "MAINNET",
  [80094 /* BERACHAIN */]: "BERACHAIN",
  [11155111 /* SEPOLIA */]: "SEPOLIA"
};
var CHAINS = {
  [1 /* MAINNET */]: _chains.mainnet,
  [80094 /* BERACHAIN */]: _chains.berachain,
  [43114 /* AVALANCHE */]: _chains.avalanche,
  [11155111 /* SEPOLIA */]: _chains.sepolia
};
var BALANCER_RELAYER = {
  [43114 /* AVALANCHE */]: "0xA084c11cb55e67C9becf9607f1DBB20ec4D5E7b2",
  [1 /* MAINNET */]: "0x35Cea9e57A393ac66Aaa7E25C391D52C74B5648f",
  [80094 /* BERACHAIN */]: "0x7852fB9d0895e6e8b3EedA553c03F6e2F9124dF9",
  [11155111 /* SEPOLIA */]: "0x7852fB9d0895e6e8b3EedA553c03F6e2F9124dF9"
};
var VAULT = {
  [43114 /* AVALANCHE */]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  [1 /* MAINNET */]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  [11155111 /* SEPOLIA */]: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",
  [80094 /* BERACHAIN */]: "0x4Be03f781C497A489E3cB0287833452cA9B9E80B"
};
var VAULT_V3 = {
  [11155111 /* SEPOLIA */]: "0xbA1333333333a1BA1108E8412f11850A5C319bA9",
  [1 /* MAINNET */]: "0xbA1333333333a1BA1108E8412f11850A5C319bA9"
};
var VAULT_ADMIN = {
  [11155111 /* SEPOLIA */]: "0x35fFB749B273bEb20F40f35EdeB805012C539864",
  [1 /* MAINNET */]: "0x35fFB749B273bEb20F40f35EdeB805012C539864"
};
var BALANCER_QUERIES = {
  [43114 /* AVALANCHE */]: "0xC128468b7Ce63eA702C1f104D55A2566b13D3ABD",
  [1 /* MAINNET */]: "0xE39B5e3B6D74016b2F6A9673D7d7493B6DF549d5",
  [11155111 /* SEPOLIA */]: "0x1802953277FD955f9a254B80Aa0582f193cF1d77",
  [80094 /* BERACHAIN */]: "0x3C612e132624f4Bd500eE1495F54565F0bcc9b59"
};
var WEIGHTED_POOL_FACTORY_BALANCER_V2 = {
  [43114 /* AVALANCHE */]: "0x230a59f4d9adc147480f03b0d3fffecd56c3289a",
  [1 /* MAINNET */]: "0x897888115ada5773e02aa29f775430bfb5f34c51",
  [80094 /* BERACHAIN */]: "0xa966fA8F2d5B087FFFA499C0C1240589371Af409"
};
var COMPOSABLE_STABLE_POOL_FACTORY = {
  [43114 /* AVALANCHE */]: "0xb9F8AB3ED3F3aCBa64Bc6cd2DcA74B7F38fD7B88",
  [1 /* MAINNET */]: "0x5B42eC6D40f7B7965BE5308c70e2603c0281C1E9",
  [11155111 /* SEPOLIA */]: "0x05503B3aDE04aCA81c8D6F88eCB73Ba156982D2B",
  [80094 /* BERACHAIN */]: "0xDfA30BDa0375d4763711AB0CC8D91B20bfCC87E1"
};
var WEIGHTED_POOL_FACTORY_BALANCER_V3 = {
  [11155111 /* SEPOLIA */]: "0x7532d5a3bE916e4a4D900240F49F0BABd4FD855C",
  [1 /* MAINNET */]: "0x201efd508c8DfE9DE1a13c2452863A78CB2a86Cc"
};
var STABLE_POOL_FACTORY_BALANCER_V3 = {
  [11155111 /* SEPOLIA */]: "0xd67F485C07D258B3e93835a3799d862ffcB55923",
  [1 /* MAINNET */]: "0xB9d01CA61b9C181dA1051bFDd28e1097e920AB14"
};
var BALANCER_ROUTER = {
  [11155111 /* SEPOLIA */]: "0x0BF61f706105EA44694f2e92986bD01C39930280",
  [1 /* MAINNET */]: "0x5C6fb490BDFD3246EB0bB062c168DeCAF4bD9FDd"
};
var BALANCER_BATCH_ROUTER = {
  [11155111 /* SEPOLIA */]: "0xC85b652685567C1B074e8c0D4389f83a2E458b1C",
  [1 /* MAINNET */]: "0x136f1EFcC3f8f88516B9E94110D56FDBfB1778d1"
};
var BALANCER_COMPOSITE_LIQUIDITY_ROUTER = {
  [11155111 /* SEPOLIA */]: "0xc6674C0c7694E9b990eAc939E74F8cc3DD39B4b0",
  [1 /* MAINNET */]: "0x1CD776897ef4f647bf8241Ec69549e4A9cb1D608"
};
var BALANCER_BUFFER_ROUTER = {
  [11155111 /* SEPOLIA */]: "0xb5F3A41515457CC6E2716c62a011D260441CcfC9",
  [1 /* MAINNET */]: "0x9179C06629ef7f17Cb5759F501D89997FE0E7b45"
};
var PERMIT2 = {
  [11155111 /* SEPOLIA */]: "0x000000000022D473030F116dDEE9F6B43aC78BA3",
  [1 /* MAINNET */]: "0x000000000022D473030F116dDEE9F6B43aC78BA3"
};
var AUTHORIZER = {
  [11155111 /* SEPOLIA */]: "0xa331d84ec860bf466b4cdccfb4ac09a1b43f3ae6"
};
var ADMIN_OF_AUTHORIZER = "0x171C0fF5943CE5f133130436A29bF61E26516003";
var NATIVE_ASSETS = {
  [1 /* MAINNET */]: new Token(
    1 /* MAINNET */,
    NATIVE_ADDRESS,
    18,
    "ETH",
    "Ether",
    "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
  ),
  [11155111 /* SEPOLIA */]: new Token(
    11155111 /* SEPOLIA */,
    NATIVE_ADDRESS,
    18,
    "ETH",
    "Ether",
    "0x7b79995e5f793a07bc00c21412e50ecae098e7f9"
  ),
  [43114 /* AVALANCHE */]: new Token(
    43114 /* AVALANCHE */,
    NATIVE_ADDRESS,
    18,
    "AVAX",
    "Avax",
    "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
  ),
  [80094 /* BERACHAIN */]: new Token(
    80094 /* BERACHAIN */,
    ZERO_ADDRESS,
    18,
    "BERA",
    "Bera",
    "0x6969696969696969696969696969696969696969"
  )
};
var ETH = NATIVE_ASSETS[1 /* MAINNET */];
var DEFAULT_FUND_MANAGMENT = {
  sender: ZERO_ADDRESS,
  recipient: ZERO_ADDRESS,
  fromInternalBalance: false,
  toInternalBalance: false
};
var DEFAULT_USERDATA = "0x";
var API_ENDPOINT = "https://api-v3.balancer.fi";
var TEST_API_ENDPOINT = "https://test-api-v3.balancer.fi";

// src/utils/errors.ts
var addLiquiditySingleTokenShouldHaveTokenInIndexError = Error(
  "AddLiquidityKind.SingleToken should have tokenInIndex"
);
var addLiquidityProportionalUnavailableError = new Error(
  "AddLiquidityKind.Proportional is not available for V3. Please use ProportionalAmountsHelper to calculate proportional amountsIn and use AddLiquidityKind.Unbalanced instead."
);
var removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError = Error("RemoveLiquidityKind.SingleTokenExactIn should have tokenOutIndex");
var removeLiquidityUnbalancedNotSupportedOnV3 = Error(
  "Unbalanced remove liquidity not supported on V3"
);
var addLiquidityProportionalNotSupportedOnPoolTypeError = (poolType) => Error(`Add Liquidity Proportional not supported on pool type: ${poolType}`);
var addLiquidityProportionalOnlyError = (kind, poolType) => Error(
  `Add Liquidity ${kind} not supported for pool ${poolType}. Use Add Liquidity Proportional`
);
var removeLiquidityProportionalOnlyError = (kind, poolType) => Error(
  `Remove Liquidity ${kind} not supported for pool ${poolType}. Use Remove Liquidity Proportional`
);
var buildCallWithPermit2ProtocolVersionError = Error(
  "buildCall with Permit2 signatures is only available for v3"
);

// src/entities/tokenAmount.ts
var _decimaljslight = require('decimal.js-light'); var _decimaljslight2 = _interopRequireDefault(_decimaljslight);
var _viem = require('viem');

// src/utils/math.ts
var WAD = 1000000000000000000n;
var RAY = 1000000000000000000000000000000000000n;
var TWO_WAD = 2000000000000000000n;
var FOUR_WAD = 4000000000000000000n;
var HUNDRED_WAD = 100000000000000000000n;
var abs = (n) => n < 0n ? -n : n;
var min = (values) => values.reduce((a, b) => a < b ? a : b);
var max = (values) => values.reduce((a, b) => a > b ? a : b);
var _require = (b, message) => {
  if (!b)
    throw new Error(message);
};
var _MathSol = class _MathSol {
  static max(a, b) {
    return a >= b ? a : b;
  }
  static min(a, b) {
    return a < b ? a : b;
  }
  static mulDownFixed(a, b) {
    const product = a * b;
    return product / WAD;
  }
  static mulUpFixed(a, b) {
    const product = a * b;
    if (product === 0n) {
      return 0n;
    }
    return (product - 1n) / WAD + 1n;
  }
  static divDownFixed(a, b) {
    if (a === 0n) {
      return 0n;
    }
    const aInflated = a * WAD;
    return aInflated / b;
  }
  static divUpFixed(a, b) {
    if (a === 0n) {
      return 0n;
    }
    const aInflated = a * WAD;
    return (aInflated - 1n) / b + 1n;
  }
  static divUp(a, b) {
    if (a === 0n) {
      return 0n;
    }
    return 1n + (a - 1n) / b;
  }
  // version = poolTypeVersion
  static powUpFixed(x, y, version) {
    if (y === WAD && version !== 1) {
      return x;
    }
    if (y === TWO_WAD && version !== 1) {
      return _MathSol.mulUpFixed(x, x);
    }
    if (y === FOUR_WAD && version !== 1) {
      const square = _MathSol.mulUpFixed(x, x);
      return _MathSol.mulUpFixed(square, square);
    }
    const raw = LogExpMath.pow(x, y);
    const maxError = _MathSol.mulUpFixed(raw, _MathSol.MAX_POW_RELATIVE_ERROR) + 1n;
    return raw + maxError;
  }
  // version = poolTypeVersion
  static powDownFixed(x, y, version) {
    if (y === WAD && version !== 1) {
      return x;
    }
    if (y === TWO_WAD && version !== 1) {
      return _MathSol.mulUpFixed(x, x);
    }
    if (y === FOUR_WAD && version !== 1) {
      const square = _MathSol.mulUpFixed(x, x);
      return _MathSol.mulUpFixed(square, square);
    }
    const raw = LogExpMath.pow(x, y);
    const maxError = _MathSol.mulUpFixed(raw, _MathSol.MAX_POW_RELATIVE_ERROR) + 1n;
    if (raw < maxError) {
      return 0n;
    }
    return raw - maxError;
  }
  static complementFixed(x) {
    return x < WAD ? WAD - x : 0n;
  }
};
__publicField(_MathSol, "MAX_POW_RELATIVE_ERROR", 10000n);
var MathSol = _MathSol;
var _LogExpMath = class _LogExpMath {
  // eˆ(x11)
  // All arguments and return values are 18 decimal fixed point numbers.
  static pow(x, y) {
    if (y === 0n) {
      return WAD;
    }
    if (x === 0n) {
      return 0n;
    }
    _require(
      x < 57896044618658097711785492504343953926634992332820282019728792003956564819968n,
      "Errors.X_OUT_OF_BOUNDS"
    );
    const x_int256 = x;
    _require(y < _LogExpMath.MILD_EXPONENT_BOUND, "Errors.Y_OUT_OF_BOUNDS");
    const y_int256 = y;
    let logx_times_y;
    if (_LogExpMath.LN_36_LOWER_BOUND < x_int256 && x_int256 < _LogExpMath.LN_36_UPPER_BOUND) {
      const ln_36_x = _LogExpMath._ln_36(x_int256);
      logx_times_y = ln_36_x / WAD * y_int256 + ln_36_x % WAD * y_int256 / WAD;
    } else {
      logx_times_y = _LogExpMath._ln(x_int256) * y_int256;
    }
    logx_times_y /= WAD;
    _require(
      _LogExpMath.MIN_NATURAL_EXPONENT <= logx_times_y && logx_times_y <= _LogExpMath.MAX_NATURAL_EXPONENT,
      "Errors.PRODUCT_OUT_OF_BOUNDS"
    );
    return _LogExpMath.exp(logx_times_y);
  }
  static exp(x_) {
    let x = x_;
    _require(
      x >= _LogExpMath.MIN_NATURAL_EXPONENT && x <= _LogExpMath.MAX_NATURAL_EXPONENT,
      "Errors.INVALID_EXPONENT"
    );
    if (x < 0) {
      return WAD * WAD / _LogExpMath.exp(-1n * x);
    }
    let firstAN;
    if (x >= _LogExpMath.x0) {
      x -= _LogExpMath.x0;
      firstAN = _LogExpMath.a0;
    } else if (x >= _LogExpMath.x1) {
      x -= _LogExpMath.x1;
      firstAN = _LogExpMath.a1;
    } else {
      firstAN = 1n;
    }
    x *= 100n;
    let product = HUNDRED_WAD;
    if (x >= _LogExpMath.x2) {
      x -= _LogExpMath.x2;
      product = product * _LogExpMath.a2 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x3) {
      x -= _LogExpMath.x3;
      product = product * _LogExpMath.a3 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x4) {
      x -= _LogExpMath.x4;
      product = product * _LogExpMath.a4 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x5) {
      x -= _LogExpMath.x5;
      product = product * _LogExpMath.a5 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x6) {
      x -= _LogExpMath.x6;
      product = product * _LogExpMath.a6 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x7) {
      x -= _LogExpMath.x7;
      product = product * _LogExpMath.a7 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x8) {
      x -= _LogExpMath.x8;
      product = product * _LogExpMath.a8 / HUNDRED_WAD;
    }
    if (x >= _LogExpMath.x9) {
      x -= _LogExpMath.x9;
      product = product * _LogExpMath.a9 / HUNDRED_WAD;
    }
    let seriesSum = HUNDRED_WAD;
    let term;
    term = x;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 2n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 3n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 4n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 5n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 6n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 7n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 8n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 9n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 10n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 11n;
    seriesSum += term;
    term = term * x / HUNDRED_WAD / 12n;
    seriesSum += term;
    return product * seriesSum / HUNDRED_WAD * firstAN / 100n;
  }
  static _ln_36(x_) {
    let x = x_;
    x *= WAD;
    const z = (x - RAY) * RAY / (x + RAY);
    const z_squared = z * z / RAY;
    let num = z;
    let seriesSum = num;
    num = num * z_squared / RAY;
    seriesSum += num / 3n;
    num = num * z_squared / RAY;
    seriesSum += num / 5n;
    num = num * z_squared / RAY;
    seriesSum += num / 7n;
    num = num * z_squared / RAY;
    seriesSum += num / 9n;
    num = num * z_squared / RAY;
    seriesSum += num / 11n;
    num = num * z_squared / RAY;
    seriesSum += num / 13n;
    num = num * z_squared / RAY;
    seriesSum += num / 15n;
    return seriesSum * 2n;
  }
  /**
   * @dev Internal natural logarithm (ln(a)) with signed 18 decimal fixed point argument.
   */
  static _ln(a_) {
    let a = a_;
    if (a < WAD) {
      return -1n * _LogExpMath._ln(WAD * WAD / a);
    }
    let sum = 0n;
    if (a >= _LogExpMath.a0 * WAD) {
      a /= _LogExpMath.a0;
      sum += _LogExpMath.x0;
    }
    if (a >= _LogExpMath.a1 * WAD) {
      a /= _LogExpMath.a1;
      sum += _LogExpMath.x1;
    }
    sum *= 100n;
    a *= 100n;
    if (a >= _LogExpMath.a2) {
      a = a * HUNDRED_WAD / _LogExpMath.a2;
      sum += _LogExpMath.x2;
    }
    if (a >= _LogExpMath.a3) {
      a = a * HUNDRED_WAD / _LogExpMath.a3;
      sum += _LogExpMath.x3;
    }
    if (a >= _LogExpMath.a4) {
      a = a * HUNDRED_WAD / _LogExpMath.a4;
      sum += _LogExpMath.x4;
    }
    if (a >= _LogExpMath.a5) {
      a = a * HUNDRED_WAD / _LogExpMath.a5;
      sum += _LogExpMath.x5;
    }
    if (a >= _LogExpMath.a6) {
      a = a * HUNDRED_WAD / _LogExpMath.a6;
      sum += _LogExpMath.x6;
    }
    if (a >= _LogExpMath.a7) {
      a = a * HUNDRED_WAD / _LogExpMath.a7;
      sum += _LogExpMath.x7;
    }
    if (a >= _LogExpMath.a8) {
      a = a * HUNDRED_WAD / _LogExpMath.a8;
      sum += _LogExpMath.x8;
    }
    if (a >= _LogExpMath.a9) {
      a = a * HUNDRED_WAD / _LogExpMath.a9;
      sum += _LogExpMath.x9;
    }
    if (a >= _LogExpMath.a10) {
      a = a * HUNDRED_WAD / _LogExpMath.a10;
      sum += _LogExpMath.x10;
    }
    if (a >= _LogExpMath.a11) {
      a = a * HUNDRED_WAD / _LogExpMath.a11;
      sum += _LogExpMath.x11;
    }
    const z = (a - HUNDRED_WAD) * HUNDRED_WAD / (a + HUNDRED_WAD);
    const z_squared = z * z / HUNDRED_WAD;
    let num = z;
    let seriesSum = num;
    num = num * z_squared / HUNDRED_WAD;
    seriesSum += num / 3n;
    num = num * z_squared / HUNDRED_WAD;
    seriesSum += num / 5n;
    num = num * z_squared / HUNDRED_WAD;
    seriesSum += num / 7n;
    num = num * z_squared / HUNDRED_WAD;
    seriesSum += num / 9n;
    num = num * z_squared / HUNDRED_WAD;
    seriesSum += num / 11n;
    seriesSum *= 2n;
    return (sum + seriesSum) / 100n;
  }
};
// All fixed point multiplications and divisions are inlined. This means we need to divide by ONE when multiplying
// two numbers, and multiply by ONE when dividing them.
// The domain of natural exponentiation is bound by the word size and number of decimals used.
//
// Because internally the result will be stored using 20 decimals, the largest possible result is
// (2^255 - 1) / 10^20, which makes the largest exponent ln((2^255 - 1) / 10^20) = 130.700829182905140221.
// The smallest possible result is 10^(-18), which makes largest negative argument
// ln(10^(-18)) = -41.446531673892822312.
// We use 130.0 and -41.0 to have some safety margin.
__publicField(_LogExpMath, "MAX_NATURAL_EXPONENT", 130000000000000000000n);
__publicField(_LogExpMath, "MIN_NATURAL_EXPONENT", -41000000000000000000n);
// Bounds for ln_36's argument. Both ln(0.9) and ln(1.1) can be represented with 36 decimal places in a fixed point
// 256 bit integer.
__publicField(_LogExpMath, "LN_36_LOWER_BOUND", WAD - 100000000000000000n);
__publicField(_LogExpMath, "LN_36_UPPER_BOUND", WAD + 100000000000000000n);
// static MILD_EXPONENT_BOUND: bigint = 2 ** 254 / HUNDRED_WAD;
// Precomputed value of the above expression
__publicField(_LogExpMath, "MILD_EXPONENT_BOUND", 289480223093290488558927462521719769633174961664101410098n);
// 18 decimal constants
__publicField(_LogExpMath, "x0", 128000000000000000000n);
// 2ˆ7
__publicField(_LogExpMath, "a0", 38877084059945950922200000000000000000000000000000000000n);
// eˆ(x0) (no decimals)
__publicField(_LogExpMath, "x1", 64000000000000000000n);
// 2ˆ6
__publicField(_LogExpMath, "a1", 6235149080811616882910000000n);
// eˆ(x1) (no decimals)
// 20 decimal constants
__publicField(_LogExpMath, "x2", 3200000000000000000000n);
// 2ˆ5
__publicField(_LogExpMath, "a2", 7896296018268069516100000000000000n);
// eˆ(x2)
__publicField(_LogExpMath, "x3", 1600000000000000000000n);
// 2ˆ4
__publicField(_LogExpMath, "a3", 888611052050787263676000000n);
// eˆ(x3)
__publicField(_LogExpMath, "x4", 800000000000000000000n);
// 2ˆ3
__publicField(_LogExpMath, "a4", 298095798704172827474000n);
// eˆ(x4)
__publicField(_LogExpMath, "x5", 400000000000000000000n);
// 2ˆ2
__publicField(_LogExpMath, "a5", 5459815003314423907810n);
// eˆ(x5)
__publicField(_LogExpMath, "x6", 200000000000000000000n);
// 2ˆ1
__publicField(_LogExpMath, "a6", 738905609893065022723n);
// eˆ(x6)
__publicField(_LogExpMath, "x7", 100000000000000000000n);
// 2ˆ0
__publicField(_LogExpMath, "a7", 271828182845904523536n);
// eˆ(x7)
__publicField(_LogExpMath, "x8", 50000000000000000000n);
// 2ˆ-1
__publicField(_LogExpMath, "a8", 164872127070012814685n);
// eˆ(x8)
__publicField(_LogExpMath, "x9", 25000000000000000000n);
// 2ˆ-2
__publicField(_LogExpMath, "a9", 128402541668774148407n);
// eˆ(x9)
__publicField(_LogExpMath, "x10", 12500000000000000000n);
// 2ˆ-3
__publicField(_LogExpMath, "a10", 113314845306682631683n);
// eˆ(x10)
__publicField(_LogExpMath, "x11", 6250000000000000000n);
// 2ˆ-4
__publicField(_LogExpMath, "a11", 106449445891785942956n);
var LogExpMath = _LogExpMath;

// src/entities/tokenAmount.ts
var TokenAmount = class _TokenAmount {
  constructor(token, amount) {
    __publicField(this, "token");
    __publicField(this, "scalar");
    __publicField(this, "decimalScale");
    __publicField(this, "amount");
    __publicField(this, "scale18");
    this.decimalScale = DECIMAL_SCALES[token.decimals];
    this.token = token;
    this.amount = BigInt(amount);
    this.scalar = DECIMAL_SCALES[18 - token.decimals];
    this.scale18 = this.amount * this.scalar;
  }
  static fromRawAmount(token, rawAmount) {
    return new _TokenAmount(token, rawAmount);
  }
  static fromHumanAmount(token, humanAmount) {
    const rawAmount = _viem.parseUnits.call(void 0, humanAmount, token.decimals);
    return new _TokenAmount(token, rawAmount);
  }
  static fromScale18Amount(token, scale18Amount, divUp) {
    const scalar = DECIMAL_SCALES[18 - token.decimals];
    const rawAmount = divUp ? 1n + (BigInt(scale18Amount) - 1n) / scalar : BigInt(scale18Amount) / scalar;
    return new _TokenAmount(token, rawAmount);
  }
  static fromInputAmount(input, chainId) {
    const token = new Token(chainId, input.address, input.decimals);
    return new _TokenAmount(token, input.rawAmount);
  }
  add(other) {
    return new _TokenAmount(this.token, this.amount + other.amount);
  }
  sub(other) {
    return new _TokenAmount(this.token, this.amount - other.amount);
  }
  mulUpFixed(other) {
    const product = this.amount * other;
    const multiplied = (product - 1n) / WAD + 1n;
    return new _TokenAmount(this.token, multiplied);
  }
  mulDownFixed(other) {
    const multiplied = this.amount * other / WAD;
    return new _TokenAmount(this.token, multiplied);
  }
  divUpFixed(other) {
    const divided = (this.amount * WAD + other - 1n) / other;
    return new _TokenAmount(this.token, divided);
  }
  divDownFixed(other) {
    const divided = this.amount * WAD / other;
    return new _TokenAmount(this.token, divided);
  }
  toSignificant(significantDigits = 6) {
    let result = new (0, _decimaljslight2.default)(this.amount.toString()).div(new (0, _decimaljslight2.default)(this.decimalScale.toString())).toDecimalPlaces(significantDigits).toFixed(significantDigits);
    if (result.includes(".")) {
      while (result.at(-1) === "0") {
        result = result.slice(0, -1);
      }
    }
    if (result.at(-1) === ".") {
      result = result.slice(0, -1);
    }
    return result;
  }
  toInputAmount() {
    return {
      address: this.token.address,
      decimals: this.token.decimals,
      rawAmount: this.amount
    };
  }
};

// src/utils/helpers.ts
function checkInputs(tokenIn, tokenOut, swapKind, swapAmount) {
  let amount;
  if (swapAmount instanceof TokenAmount) {
    amount = swapAmount;
  } else {
    amount = TokenAmount.fromRawAmount(
      swapKind === 0 /* GivenIn */ ? tokenIn : tokenOut,
      swapAmount
    );
  }
  if (tokenIn.chainId !== tokenOut.chainId || tokenIn.chainId !== amount.token.chainId) {
    throw new Error("ChainId mismatch for inputs");
  }
  if (swapKind === 0 /* GivenIn */ && !tokenIn.isEqual(amount.token) || swapKind === 1 /* GivenOut */ && !tokenOut.isEqual(amount.token)) {
    throw new Error("Swap amount token does not match input token");
  }
  return amount;
}
function isSameAddress(address1, address2) {
  return address1.toLowerCase() === address2.toLowerCase();
}
function removeIndex(array, index) {
  return index === -1 ? array : [...array.slice(0, index), ...array.slice(index + 1)];
}
function insertIndex(array, index, value) {
  return index === -1 ? array : [...array.slice(0, index), value, ...array.slice(index)];
}

// src/utils/pool.ts
var getPoolAddress = (poolId) => {
  if (poolId.length !== 66)
    throw new Error("Invalid poolId length");
  return poolId.slice(0, 42).toLowerCase();
};
function poolIsLinearPool(poolType) {
  return poolType.includes("Linear");
}
function poolHasVirtualSupply(poolType) {
  return poolType === "PhantomStable" || poolIsLinearPool(poolType);
}
function poolHasActualSupply(poolType) {
  return poolType === "ComposableStable";
}
function poolHasPercentFee(poolType) {
  return poolType === "Element";
}

// src/utils/sortByAddress.ts
function sortByAddress(objectWithAddressArray) {
  return objectWithAddressArray.sort(
    (a, b) => a.address.toLowerCase().localeCompare(b.address.toLowerCase())
  );
}

// src/data/providers/balancer-api/modules/nested-pool-state/index.ts
var NestedPools = class {
  constructor(balancerApiClient) {
    this.balancerApiClient = balancerApiClient;
    __publicField(this, "nestedPoolStateQuery", `#graphql
  query GetPool($id: String!, $chain: GqlChain!) {
    poolGetPool(id: $id, chain: $chain) {
      id
      protocolVersion
      address
      type
      poolTokens {
        index
        address
        decimals
        symbol
        name
        nestedPool {
          id
          address
          type
          tokens {
            index
            address
            decimals
            underlyingToken {
              address
              decimals
            }
          }
        }
        underlyingToken {
          address
          decimals
        }
      }
    }
  }
`);
    __publicField(this, "fetchNestedPoolState", async (id) => {
      const {
        data: { poolGetPool }
      } = await this.balancerApiClient.fetch({
        query: this.nestedPoolStateQuery,
        variables: {
          id: id.toLowerCase(),
          // the API requires chain names to be sent as uppercase strings
          chain: API_CHAIN_NAMES[this.balancerApiClient.chainId]
        }
      });
      const nestedPoolState = this.mapPoolToNestedPoolState(
        poolGetPool
      );
      return nestedPoolState;
    });
    __publicField(this, "mapPoolToNestedPoolState", (pool) => {
      return pool.protocolVersion === 2 ? mapPoolToNestedPoolStateV2(pool) : mapPoolToNestedPoolStateV3(pool);
    });
  }
};
function mapPoolToNestedPoolStateV3(pool) {
  const pools = [
    {
      id: pool.id,
      address: pool.address,
      type: mapPoolType(pool.type),
      level: 1,
      tokens: pool.poolTokens.map((t) => {
        const minimalToken = {
          address: t.address,
          decimals: t.decimals,
          index: t.index,
          symbol: t.symbol,
          name: t.name,
          underlyingToken: t.underlyingToken === null ? null : { ...t.underlyingToken, index: t.index }
        };
        return minimalToken;
      })
    }
  ];
  pool.poolTokens.forEach((token) => {
    if (!token.nestedPool || isSameAddress(pool.address, token.nestedPool.address))
      return;
    pools.push({
      id: token.nestedPool.id,
      address: token.nestedPool.address,
      level: 0,
      type: mapPoolType(token.nestedPool.type),
      tokens: token.nestedPool.tokens.map((t) => {
        const minimalToken = {
          address: t.address,
          decimals: t.decimals,
          index: t.index,
          underlyingToken: t.underlyingToken === null ? null : { ...t.underlyingToken, index: t.index }
        };
        return minimalToken;
      })
    });
  });
  const poolTokens = pool.poolTokens;
  const mainTokens = poolTokens.flatMap((token) => {
    if (token.nestedPool) {
      return token.nestedPool.tokens.map(getMainToken);
    }
    return [getMainToken(token)];
  });
  return {
    protocolVersion: pool.protocolVersion,
    pools,
    mainTokens
  };
}
function getMainToken(token) {
  if (token.underlyingToken) {
    return {
      index: token.index,
      address: token.underlyingToken.address,
      decimals: token.underlyingToken.decimals
    };
  }
  if (!token.nestedPool) {
    return {
      index: token.index,
      address: token.address,
      decimals: token.decimals
    };
  }
  const nestedTokens = token.nestedPool.tokens.map(getMainToken);
  return nestedTokens[0];
}
function mapPoolToNestedPoolStateV2(pool) {
  const pools = [
    {
      id: pool.id,
      address: pool.address,
      type: mapPoolType(pool.type),
      level: 1,
      tokens: pool.poolTokens.map((t) => {
        const minimalToken = {
          address: t.address,
          decimals: t.decimals,
          index: t.index,
          underlyingToken: t.underlyingToken === null ? null : { ...t.underlyingToken, index: t.index }
        };
        return minimalToken;
      })
    }
  ];
  pool.poolTokens.forEach((token) => {
    if (!token.nestedPool || isSameAddress(pool.address, token.nestedPool.address))
      return;
    pools.push({
      id: token.nestedPool.id,
      address: token.nestedPool.address,
      level: 0,
      type: mapPoolType(token.nestedPool.type),
      tokens: token.nestedPool.tokens.map((t) => {
        const minimalToken = {
          address: t.address,
          decimals: t.decimals,
          index: t.index,
          underlyingToken: t.underlyingToken === null ? null : { ...t.underlyingToken, index: t.index }
        };
        return minimalToken;
      })
    });
  });
  const mainTokens = pools.flatMap((p) => p.tokens).filter((t) => !pools.find((p) => p.address === t.address));
  return {
    protocolVersion: 2,
    pools,
    mainTokens
  };
}

// src/data/providers/balancer-api/modules/pool-state/index.ts
var Pools = class {
  constructor(balancerApiClient) {
    this.balancerApiClient = balancerApiClient;
    __publicField(this, "poolStateQuery", `#graphql
    query poolGetPool($id: String!, $chain: GqlChain!) {
      poolGetPool(id: $id, chain:$chain) {
        id
        address
        type
        protocolVersion
        poolTokens {
          index
          address
          decimals
          symbol
          name
        }
      }
    }`);
    __publicField(this, "poolStateWithRawTokensQuery", `#graphql
    query GetPool($id: String!, $chain: GqlChain!) {
      poolGetPool(id:$id, chain:$chain) {
        id
        address
        type
        protocolVersion
        poolTokens {
          index
          address
          decimals
          balance
          symbol
          name
        }
        dynamicData {
          totalShares
          volume24h
          fees24h
          aprItems {
            apr
            id
          }
        }
      }
    }`);
  }
  async fetchPoolState(id) {
    const { data } = await this.balancerApiClient.fetch({
      query: this.poolStateQuery,
      variables: {
        id: id.toLowerCase(),
        // the API requires chain names to be sent as uppercase strings
        chain: API_CHAIN_NAMES[this.balancerApiClient.chainId]
      }
    });
    const poolGetPool = {
      ...data.poolGetPool,
      tokens: data.poolGetPool.poolTokens,
      type: mapPoolType(data.poolGetPool.type)
    };
    return poolGetPool;
  }
  async fetchPoolStateWithBalances(id) {
    const { data } = await this.balancerApiClient.fetch({
      query: this.poolStateWithRawTokensQuery,
      variables: {
        id: id.toLowerCase(),
        chain: API_CHAIN_NAMES[this.balancerApiClient.chainId]
      }
    });
    const poolStateWithBalances = {
      ...data.poolGetPool,
      tokens: data.poolGetPool.poolTokens,
      type: mapPoolType(data.poolGetPool.type),
      totalShares: data.poolGetPool.dynamicData.totalShares,
      volume24h: data.poolGetPool.dynamicData.volume24h,
      fees24h: data.poolGetPool.dynamicData.fees24h,
      aprItems: data.poolGetPool.dynamicData.aprItems
    };
    return poolStateWithBalances;
  }
};

// src/data/providers/balancer-api/modules/sorSwapPaths/index.ts
var SorSwapPaths = class {
  constructor(balancerApiClient) {
    this.balancerApiClient = balancerApiClient;
    __publicField(this, "sorSwapPathQuery", `#graphql
  query SorSwapPaths($chain: GqlChain!, $swapType: GqlSorSwapType!, $swapAmount: AmountHumanReadable!, $tokenIn: String!, $tokenOut: String!) {
    sorGetSwapPaths(
      swapAmount: $swapAmount
      chain: $chain
      swapType: $swapType
      tokenIn: $tokenIn
      tokenOut: $tokenOut
    ) {
      tokenInAmount
      tokenOutAmount
      returnAmount
      priceImpact {
        error
        priceImpact
      }
      totalSwapFee
      swapAmount
      paths {
        inputAmountRaw
        outputAmountRaw
        pools
        protocolVersion
        tokens {
          address
          decimals
        }
      }
      routes {
        share
        tokenInAmount
        tokenOut
        tokenOutAmount
        hops {
          poolId
          tokenIn
          tokenInAmount
          tokenOut
          tokenOutAmount
          pool {
            symbol
          }
        }
      }
    }
  }
`);
    __publicField(this, "sorSwapPathQueryWithVersion", `#graphql
  query SorSwapPaths($chain: GqlChain!, $swapType: GqlSorSwapType!, $swapAmount: AmountHumanReadable!, $tokenIn: String!, $tokenOut: String!, $useProtocolVersion: Int!) {
    sorGetSwapPaths(
      swapAmount: $swapAmount
      chain: $chain
      swapType: $swapType
      tokenIn: $tokenIn
      tokenOut: $tokenOut
      useProtocolVersion: $useProtocolVersion
    ) {
      tokenInAmount
      tokenOutAmount
      returnAmount
      priceImpact {
        error
        priceImpact
      }
      totalSwapFee
      swapAmount
      paths {
        inputAmountRaw
        outputAmountRaw
        pools
        protocolVersion
        tokens {
          address
          decimals
        }
      }
      routes {
        share
        tokenInAmount
        tokenOut
        tokenOutAmount
        hops {
          poolId
          tokenIn
          tokenInAmount
          tokenOut
          tokenOutAmount
          pool {
            symbol
          }
        }
      }
    }
  }
`);
  }
  async fetchSorSwapPaths(sorInput) {
    const variables = {
      chain: this.mapGqlChain(sorInput.chainId),
      swapAmount: sorInput.swapAmount.toSignificant(
        sorInput.swapAmount.token.decimals
      ),
      // Must use human scale
      swapType: sorInput.swapKind === 0 /* GivenIn */ ? "EXACT_IN" : "EXACT_OUT",
      tokenIn: sorInput.tokenIn,
      tokenOut: sorInput.tokenOut
    };
    const { data } = await this.balancerApiClient.fetch({
      query: sorInput.useProtocolVersion ? this.sorSwapPathQueryWithVersion : this.sorSwapPathQuery,
      variables: sorInput.useProtocolVersion ? {
        ...variables,
        useProtocolVersion: sorInput.useProtocolVersion
      } : variables
    });
    const paths = data.sorGetSwapPaths.paths;
    const priceImpact = data.sorGetSwapPaths.priceImpact;
    const routes = data.sorGetSwapPaths.routes;
    const totalSwapFee = Number(data.sorGetSwapPaths.totalSwapFee);
    return { paths, priceImpact, routes, totalSwapFee };
  }
  mapGqlChain(chainId) {
    if (chainId in API_CHAIN_NAMES) {
      return API_CHAIN_NAMES[chainId];
    } else
      throw Error(`Unsupported API chain: ${chainId}`);
  }
};

// src/data/providers/balancer-api/modules/buffer-state/index.ts
var Buffers = class {
  constructor(balancerApiClient) {
    this.balancerApiClient = balancerApiClient;
    __publicField(this, "bufferStateQuery", `
      query GetBufferState($wrappedTokenAddress: String!, $chain: GqlChain!) {
        tokenGetTokens(
        chains: [$chain],
          where: {tokensIn: [$wrappedTokenAddress]}
        ) {
          address
          decimals
          isErc4626
          underlyingTokenAddress
        }
      }
    `);
  }
  async fetchBufferState(wrappedTokenAddress) {
    const { data } = await this.balancerApiClient.fetch({
      query: this.bufferStateQuery,
      variables: {
        wrappedTokenAddress: wrappedTokenAddress.toLowerCase(),
        // the API requires chain names to be sent as uppercase strings
        chain: API_CHAIN_NAMES[this.balancerApiClient.chainId]
      }
    });
    const wrappedToken = data.tokenGetTokens[0];
    if (!wrappedToken.isErc4626) {
      throw new Error(
        `Wrapped token address provided is not an ERC4626: ${wrappedTokenAddress}`
      );
    }
    const bufferState = {
      wrappedToken: {
        address: wrappedToken.address,
        decimals: wrappedToken.decimals
      },
      underlyingToken: {
        address: wrappedToken.underlyingTokenAddress,
        decimals: wrappedToken.decimals
      }
    };
    return bufferState;
  }
};

// src/data/providers/balancer-api/index.ts
var BalancerApi = class {
  constructor(balancerApiUrl, chainId) {
    __publicField(this, "balancerApiClient");
    __publicField(this, "pools");
    __publicField(this, "nestedPools");
    __publicField(this, "sorSwapPaths");
    __publicField(this, "buffers");
    this.balancerApiClient = new BalancerApiClient(balancerApiUrl, chainId);
    this.pools = new Pools(this.balancerApiClient);
    this.nestedPools = new NestedPools(this.balancerApiClient);
    this.sorSwapPaths = new SorSwapPaths(this.balancerApiClient);
    this.buffers = new Buffers(this.balancerApiClient);
  }
};

// src/data/providers/initPoolDataProvider.ts






// src/utils/tokens.ts

async function getTokenDecimals(tokenAddress, client) {
  try {
    const abi = [
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ];
    const tokenContract = _viem.getContract.call(void 0, {
      abi,
      address: tokenAddress,
      client
    });
    const decimals = await tokenContract.read.decimals();
    return decimals;
  } catch (e) {
    console.warn(e);
    throw new Error(
      `Error: Unable to get Token Decimals from token: ${tokenAddress}`
    );
  }
}
async function getPoolTokensV2(poolId, client) {
  try {
    const chainId = await client.getChainId();
    const vaultV2 = _viem.getContract.call(void 0, {
      abi: vaultV2Abi,
      address: VAULT[chainId],
      client
    });
    const poolTokensFromVault = await vaultV2.read.getPoolTokens([
      poolId
    ]);
    return poolTokensFromVault;
  } catch (e) {
    console.warn(e);
    throw new Error(
      `Error: Unable to get pool tokens using this pool id: ${poolId}`
    );
  }
}
async function getPoolTokensV3(poolAddress, client) {
  try {
    const chainId = await client.getChainId();
    const vaultV3 = _viem.getContract.call(void 0, {
      abi: vaultExtensionAbi_V3,
      address: VAULT_V3[chainId],
      client
    });
    return await vaultV3.read.getPoolTokens([poolAddress]);
  } catch (e) {
    console.warn(e);
    throw new Error(
      `Error: Unable to get pool tokens using this pool address: ${poolAddress}`
    );
  }
}

// src/data/providers/initPoolDataProvider.ts
var InitPoolDataProvider = class {
  constructor(chainId, rpcUrl) {
    this.chainId = chainId;
    this.rpcUrl = rpcUrl;
    __publicField(this, "client");
    __publicField(this, "simplePoolAbi", [
      {
        inputs: [],
        name: "getPoolId",
        outputs: [
          {
            internalType: "bytes32",
            name: "",
            type: "bytes32"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ]);
    this.client = _viem.createPublicClient.call(void 0, {
      transport: _viem.http.call(void 0, this.rpcUrl, { timeout: 6e4 }),
      chain: CHAINS[this.chainId]
    });
  }
  async getInitPoolData(poolAddress, poolType, protocolVersion) {
    if (protocolVersion === 2) {
      return this.getInitPoolDataV2(poolAddress, poolType);
    }
    return this.getInitPoolDataV3(poolAddress, poolType);
  }
  async getInitPoolDataV2(poolAddress, poolType) {
    const poolContract = _viem.getContract.call(void 0, {
      abi: this.simplePoolAbi,
      address: poolAddress,
      client: this.client
    });
    const poolId = await poolContract.read.getPoolId();
    const poolTokensFromVault = await getPoolTokensV2(poolId, this.client);
    const poolTokens = await Promise.all(
      poolTokensFromVault[0].map(async (address, index) => {
        const decimals = await getTokenDecimals(address, this.client);
        return {
          address: address.toLowerCase(),
          index,
          decimals
        };
      })
    );
    return {
      id: poolId,
      address: poolAddress.toLowerCase(),
      type: poolType,
      tokens: poolTokens,
      protocolVersion: 2
    };
  }
  async getInitPoolDataV3(poolAddress, poolType) {
    const poolTokensFromVault = await getPoolTokensV3(
      poolAddress,
      this.client
    );
    const poolTokens = await Promise.all(
      poolTokensFromVault.map(async (address, index) => {
        const decimals = await getTokenDecimals(address, this.client);
        return {
          address: address.toLowerCase(),
          index,
          decimals
        };
      })
    );
    return {
      id: poolAddress,
      address: poolAddress.toLowerCase(),
      type: poolType,
      tokens: poolTokens,
      protocolVersion: 3
    };
  }
};

// src/data/providers/onchain/index.ts





var Pools2 = class {
  constructor(rpcUrl, chainId) {
    this.rpcUrl = rpcUrl;
    this.chainId = chainId;
    __publicField(this, "client");
    this.client = _viem.createPublicClient.call(void 0, {
      transport: _viem.http.call(void 0, this.rpcUrl),
      chain: CHAINS[this.chainId]
    });
  }
  async fetchPoolState(id, poolType) {
    const poolTokens = await this.client.readContract({
      address: VAULT_V3[this.chainId],
      abi: vaultExtensionAbi_V3,
      functionName: "getPoolTokens",
      args: [id]
    });
    const decimalCalls = poolTokens.map((t) => {
      return {
        address: t,
        abi: _viem.parseAbi.call(void 0, [
          "function decimals() external view returns (uint8)"
        ]),
        functionName: "decimals"
      };
    });
    const decimals = await this.client.multicall({
      contracts: decimalCalls,
      allowFailure: false
    });
    const poolState = {
      id,
      address: id,
      type: poolType,
      protocolVersion: 3,
      tokens: poolTokens.map((t, i) => {
        return {
          index: i,
          address: t,
          decimals: decimals[i]
        };
      })
    };
    return poolState;
  }
};
var OnChainProvider = class {
  constructor(rpcUrl, chainId) {
    __publicField(this, "pools");
    this.pools = new Pools2(rpcUrl, chainId);
  }
};

// src/entities/encoders/composableStable.ts


// src/entities/addLiquidity/types.ts
var AddLiquidityKind = /* @__PURE__ */ ((AddLiquidityKind2) => {
  AddLiquidityKind2["Unbalanced"] = "Unbalanced";
  AddLiquidityKind2["SingleToken"] = "SingleToken";
  AddLiquidityKind2["Proportional"] = "Proportional";
  return AddLiquidityKind2;
})(AddLiquidityKind || {});

// src/entities/removeLiquidity/types.ts
var RemoveLiquidityKind = /* @__PURE__ */ ((RemoveLiquidityKind2) => {
  RemoveLiquidityKind2["Unbalanced"] = "Unbalanced";
  RemoveLiquidityKind2["SingleTokenExactOut"] = "SingleTokenExactOut";
  RemoveLiquidityKind2["SingleTokenExactIn"] = "SingleTokenExactIn";
  RemoveLiquidityKind2["Proportional"] = "Proportional";
  RemoveLiquidityKind2["Recovery"] = "Recovery";
  return RemoveLiquidityKind2;
})(RemoveLiquidityKind || {});

// src/entities/encoders/base.ts

var RECOVERY_REMOVE_LIQUIDITY_CODE = 255n;
var encodeRemoveLiquidityRecovery = (bptAmountIn) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [RECOVERY_REMOVE_LIQUIDITY_CODE, bptAmountIn]
  );
};

// src/entities/encoders/composableStable.ts
var ComposableStablePoolJoinKind = /* @__PURE__ */ ((ComposableStablePoolJoinKind2) => {
  ComposableStablePoolJoinKind2[ComposableStablePoolJoinKind2["INIT"] = 0] = "INIT";
  ComposableStablePoolJoinKind2[ComposableStablePoolJoinKind2["EXACT_TOKENS_IN_FOR_BPT_OUT"] = 1] = "EXACT_TOKENS_IN_FOR_BPT_OUT";
  ComposableStablePoolJoinKind2[ComposableStablePoolJoinKind2["TOKEN_IN_FOR_EXACT_BPT_OUT"] = 2] = "TOKEN_IN_FOR_EXACT_BPT_OUT";
  ComposableStablePoolJoinKind2[ComposableStablePoolJoinKind2["ALL_TOKENS_IN_FOR_EXACT_BPT_OUT"] = 3] = "ALL_TOKENS_IN_FOR_EXACT_BPT_OUT";
  return ComposableStablePoolJoinKind2;
})(ComposableStablePoolJoinKind || {});
var ComposableStablePoolExitKind = /* @__PURE__ */ ((ComposableStablePoolExitKind2) => {
  ComposableStablePoolExitKind2[ComposableStablePoolExitKind2["EXACT_BPT_IN_FOR_ONE_TOKEN_OUT"] = 0] = "EXACT_BPT_IN_FOR_ONE_TOKEN_OUT";
  ComposableStablePoolExitKind2[ComposableStablePoolExitKind2["BPT_IN_FOR_EXACT_TOKENS_OUT"] = 1] = "BPT_IN_FOR_EXACT_TOKENS_OUT";
  ComposableStablePoolExitKind2[ComposableStablePoolExitKind2["EXACT_BPT_IN_FOR_ALL_TOKENS_OUT"] = 2] = "EXACT_BPT_IN_FOR_ALL_TOKENS_OUT";
  return ComposableStablePoolExitKind2;
})(ComposableStablePoolExitKind || {});
var _ComposableStableEncoder = class _ComposableStableEncoder {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Encodes the User Data for initializing a WeightedPool
   * @param amounts Amounts of tokens to be added to the pool
   * @returns
   */
  static encodeInitPoolUserData(amounts) {
    return _ComposableStableEncoder.initPool(amounts.amountsIn);
  }
  /**
   * Encodes the User Data for adding liquidity to a ComposableStablePool
   * @param kind Kind of the Add Liquidity operation: Init, Unbalanced, SingleToken, Proportional
   * @param amounts Amounts of tokens to be added to the pool
   * @returns
   */
  static encodeAddLiquidityUserData(kind, amounts) {
    switch (kind) {
      case "Unbalanced" /* Unbalanced */:
        return _ComposableStableEncoder.addLiquidityUnbalanced(
          amounts.maxAmountsInWithoutBpt,
          amounts.minimumBpt
        );
      case "SingleToken" /* SingleToken */: {
        if (amounts.tokenInIndex === void 0) {
          throw addLiquiditySingleTokenShouldHaveTokenInIndexError;
        }
        return _ComposableStableEncoder.addLiquiditySingleToken(
          amounts.minimumBpt,
          amounts.tokenInIndex
        );
      }
      case "Proportional" /* Proportional */: {
        return _ComposableStableEncoder.addLiquidityProportional(
          amounts.minimumBpt
        );
      }
    }
  }
  /**
   * Encodes the User Data for removing liquidity to a ComposableStablePool
   * @param kind Kind of the Remove Liquidity operation: Unbalanced, SingleTokenExactIn, Proportional
   * @param amounts Amounts of tokens to be removed from the pool
   * @returns
   */
  static encodeRemoveLiquidityUserData(kind, amounts) {
    switch (kind) {
      case "Unbalanced" /* Unbalanced */:
      case "SingleTokenExactOut" /* SingleTokenExactOut */:
        return _ComposableStableEncoder.removeLiquidityUnbalanced(
          amounts.minAmountsOut,
          amounts.maxBptAmountIn
        );
      case "SingleTokenExactIn" /* SingleTokenExactIn */:
        if (amounts.tokenOutIndex === void 0)
          throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
        return _ComposableStableEncoder.removeLiquiditySingleTokenExactIn(
          amounts.maxBptAmountIn,
          amounts.tokenOutIndex
        );
      case "Proportional" /* Proportional */:
        return _ComposableStableEncoder.removeLiquidityProportional(
          amounts.maxBptAmountIn
        );
      case "Recovery" /* Recovery */:
        return encodeRemoveLiquidityRecovery(amounts.maxBptAmountIn);
    }
  }
};
/**
 * Encodes the userData parameter for providing the initial liquidity to a ComposableStablePool
 * @param initialBalances - the amounts of tokens to send to the pool to form the initial balances
 */
__publicField(_ComposableStableEncoder, "initPool", (amountsIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }],
  [BigInt(0 /* INIT */), amountsIn]
));
/**
 * Encodes the userData parameter for adding liquidity to a ComposableStablePool with exact token inputs
 * @param amountsIn - the amounts each of token to deposit in the pool as liquidity
 * @param minimumBPT - the minimum acceptable BPT to receive in return for deposited tokens
 */
__publicField(_ComposableStableEncoder, "addLiquidityUnbalanced", (amountsIn, minimumBPT) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(
      1 /* EXACT_TOKENS_IN_FOR_BPT_OUT */
    ),
    amountsIn,
    minimumBPT
  ]
));
/**
 * Encodes the userData parameter for adding liquidity to a ComposableStablePool with a single token to receive an exact amount of BPT
 * @param bptAmountOut - the amount of BPT to be minted
 * @param tokenIndex - the index of the token to be provided as liquidity. This index should consider tokens array without BPT.
 */
__publicField(_ComposableStableEncoder, "addLiquiditySingleToken", (bptAmountOut, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(2 /* TOKEN_IN_FOR_EXACT_BPT_OUT */),
      bptAmountOut,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for adding liquidity to a ComposableStablePool proportionally to receive an exact amount of BPT
 * @param bptAmountOut - the amount of BPT to be minted
 */
__publicField(_ComposableStableEncoder, "addLiquidityProportional", (bptAmountOut) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [
      BigInt(
        3 /* ALL_TOKENS_IN_FOR_EXACT_BPT_OUT */
      ),
      bptAmountOut
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 * @param tokenIndex - the index of the token to be removed from the pool
 */
__publicField(_ComposableStableEncoder, "removeLiquiditySingleTokenExactIn", (bptAmountIn, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(
        0 /* EXACT_BPT_IN_FOR_ONE_TOKEN_OUT */
      ),
      bptAmountIn,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 */
__publicField(_ComposableStableEncoder, "removeLiquidityProportional", (bptAmountIn) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [
      BigInt(
        2 /* EXACT_BPT_IN_FOR_ALL_TOKENS_OUT */
      ),
      bptAmountIn
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing exact amounts of tokens
 * @param amountsOut - the amounts of each token to be withdrawn from the pool
 * @param maxBPTAmountIn - the minimum acceptable BPT to burn in return for withdrawn tokens
 */
__publicField(_ComposableStableEncoder, "removeLiquidityUnbalanced", (amountsOut, maxBPTAmountIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(
      1 /* BPT_IN_FOR_EXACT_TOKENS_OUT */
    ),
    amountsOut,
    maxBPTAmountIn
  ]
));
var ComposableStableEncoder = _ComposableStableEncoder;

// src/abi/cowAmmPool.ts
var cowAmmPoolAbi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "BONE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "BPOW_PRECISION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "EXIT_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "INIT_POOL_SUPPLY",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_BOUND_TOKENS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_BPOW_BASE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_IN_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_OUT_RATIO",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_TOTAL_WEIGHT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MAX_WEIGHT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_BALANCE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_BOUND_TOKENS",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_BPOW_BASE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_FEE",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "MIN_WEIGHT",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "src",
        type: "address",
        internalType: "address"
      },
      {
        name: "dst",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "approve",
    inputs: [
      {
        name: "dst",
        type: "address",
        internalType: "address"
      },
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [
      {
        name: "whom",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "bind",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "denorm",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "calcInGivenOut",
    inputs: [
      {
        name: "tokenBalanceIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenBalanceOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcOutGivenIn",
    inputs: [
      {
        name: "tokenBalanceIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenBalanceOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcPoolInGivenSingleOut",
    inputs: [
      {
        name: "tokenBalanceOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolSupply",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "totalWeight",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "poolAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcPoolOutGivenSingleIn",
    inputs: [
      {
        name: "tokenBalanceIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolSupply",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "totalWeight",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "poolAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcSingleInGivenPoolOut",
    inputs: [
      {
        name: "tokenBalanceIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolSupply",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "totalWeight",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcSingleOutGivenPoolIn",
    inputs: [
      {
        name: "tokenBalanceOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolSupply",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "totalWeight",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "poolAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "calcSpotPrice",
    inputs: [
      {
        name: "tokenBalanceIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenBalanceOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenWeightOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "spotPrice",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "decreaseApproval",
    inputs: [
      {
        name: "dst",
        type: "address",
        internalType: "address"
      },
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "exitPool",
    inputs: [
      {
        name: "poolAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "minAmountsOut",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "exitswapExternAmountOut",
    inputs: [
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "maxPoolAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "poolAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "exitswapPoolAmountIn",
    inputs: [
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "poolAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "minAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "finalize",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "getBalance",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getColor",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32"
      }
    ],
    stateMutability: "pure"
  },
  {
    type: "function",
    name: "getController",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getCurrentTokens",
    inputs: [],
    outputs: [
      {
        name: "tokens",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getDenormalizedWeight",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getFinalTokens",
    inputs: [],
    outputs: [
      {
        name: "tokens",
        type: "address[]",
        internalType: "address[]"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getNormalizedWeight",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getNumTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSpotPrice",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "spotPrice",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSpotPriceSansFee",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "spotPrice",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getSwapFee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getTotalDenormalizedWeight",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "increaseApproval",
    inputs: [
      {
        name: "dst",
        type: "address",
        internalType: "address"
      },
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "isBound",
    inputs: [
      {
        name: "t",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "isFinalized",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "joinPool",
    inputs: [
      {
        name: "poolAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "maxAmountsIn",
        type: "uint256[]",
        internalType: "uint256[]"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "joinswapExternAmountIn",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "minPoolAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "poolAmountOut",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "joinswapPoolAmountOut",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "poolAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "maxAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "setController",
    inputs: [
      {
        name: "manager",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "setSwapFee",
    inputs: [
      {
        name: "swapFee",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapExactAmountIn",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "minAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "maxPrice",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "spotPriceAfter",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "swapExactAmountOut",
    inputs: [
      {
        name: "tokenIn",
        type: "address",
        internalType: "address"
      },
      {
        name: "maxAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "tokenOut",
        type: "address",
        internalType: "address"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "maxPrice",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "tokenAmountIn",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "spotPriceAfter",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "totalSupply",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "transfer",
    inputs: [
      {
        name: "dst",
        type: "address",
        internalType: "address"
      },
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "src",
        type: "address",
        internalType: "address"
      },
      {
        name: "dst",
        type: "address",
        internalType: "address"
      },
      {
        name: "amt",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "unbind",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address"
      }
    ],
    outputs: [],
    stateMutability: "nonpayable"
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LOG_CALL",
    inputs: [
      {
        name: "sig",
        type: "bytes4",
        indexed: true,
        internalType: "bytes4"
      },
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "data",
        type: "bytes",
        indexed: false,
        internalType: "bytes"
      }
    ],
    anonymous: true
  },
  {
    type: "event",
    name: "LOG_EXIT",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LOG_JOIN",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenIn",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "LOG_SWAP",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenIn",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenOut",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "tokenAmountIn",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      },
      {
        name: "tokenAmountOut",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address"
      },
      {
        name: "value",
        type: "uint256",
        indexed: false,
        internalType: "uint256"
      }
    ],
    anonymous: false
  }
];

// src/entities/utils/cowAmmHelpers.ts








// src/entities/utils/getSortedTokens.ts
function getSortedTokens(tokens, chainId) {
  return tokens.sort((a, b) => a.index - b.index).map((t) => new Token(chainId, t.address, t.decimals));
}

// src/entities/utils/cowAmmHelpers.ts
var getPoolStateWithBalancesCowAmm = async (poolState, chainId, rpcUrl) => {
  const totalSupplyContract = {
    address: poolState.address,
    abi: cowAmmPoolAbi,
    functionName: "totalSupply"
  };
  const sortedTokens = getSortedTokens(poolState.tokens, chainId);
  const getBalanceContracts = sortedTokens.map((token) => ({
    address: poolState.address,
    abi: cowAmmPoolAbi,
    functionName: "getBalance",
    args: [token.address]
  }));
  const publicClient = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const outputs = await publicClient.multicall({
    contracts: [
      totalSupplyContract,
      ...getBalanceContracts
    ]
  });
  if (outputs.some((output) => output.status === "failure")) {
    throw new Error(
      "Error: Unable to get pool state with balances for CowAmm pool."
    );
  }
  const totalShares = outputs[0].result;
  const balances = outputs.slice(1).map((output) => output.result);
  const poolStateWithBalances = {
    ...poolState,
    tokens: sortedTokens.map((token, i) => ({
      address: token.address,
      decimals: token.decimals,
      index: i,
      balance: _viem.formatUnits.call(void 0, balances[i], token.decimals)
    })),
    totalShares: _viem.formatEther.call(void 0, totalShares)
  };
  return poolStateWithBalances;
};
function calculateProportionalAmountsCowAmm(pool, referenceAmount) {
  const tokensWithBpt = [
    ...pool.tokens,
    {
      address: pool.address,
      balance: pool.totalShares,
      decimals: 18
    }
  ];
  const bptIndex = tokensWithBpt.length - 1;
  const referenceTokenIndex = tokensWithBpt.findIndex(
    (t) => t.address.toLowerCase() === referenceAmount.address.toLowerCase()
  );
  if (referenceTokenIndex === -1) {
    throw new Error(
      "Reference amount must be relative to a token in the pool or its BPT"
    );
  }
  const balances = tokensWithBpt.map(
    (t) => _viem.parseUnits.call(void 0, t.balance, t.decimals)
  );
  const referenceTokenBalance = balances[referenceTokenIndex];
  let ratio;
  let proportionalAmounts;
  if (referenceTokenIndex === bptIndex) {
    ratio = bdiv(referenceAmount.rawAmount, referenceTokenBalance);
    proportionalAmounts = balances.map((b) => bmul(b, ratio));
  } else {
    ratio = bdivDown(referenceAmount.rawAmount, referenceTokenBalance);
    proportionalAmounts = balances.map((b) => bmulDown(b, ratio));
  }
  const amounts = tokensWithBpt.map(({ address, decimals }, index) => ({
    address,
    decimals,
    rawAmount: proportionalAmounts[index]
  }));
  const bptAmount = amounts.pop();
  return {
    tokenAmounts: amounts,
    bptAmount
  };
}
function bmul(a, b) {
  const c0 = a * b;
  if (a !== BigInt(0) && c0 / a !== b) {
    throw new Error("BNum_MulOverflow");
  }
  const c1 = c0 + (WAD >> 1n);
  if (c1 < c0) {
    throw new Error("BNum_MulOverflow");
  }
  const c2 = c1 / WAD;
  return c2;
}
function bmulDown(a, b) {
  const c0 = a * b;
  const c1 = c0 - (b >> 1n);
  const c2 = c1 / WAD;
  return c2;
}
function bdiv(a, b) {
  if (b === 0n) {
    throw new Error("BNum_DivZero");
  }
  const c0 = a * WAD;
  if (a !== 0n && c0 / a !== WAD) {
    throw new Error("BNum_DivInternal");
  }
  const c1 = c0 + (b >> 1n);
  if (c1 < c0) {
    throw new Error("BNum_DivInternal");
  }
  const c2 = c1 / b;
  return c2;
}
function bdivDown(a, b) {
  if (b === 0n) {
    throw new Error("BNum_DivZero");
  }
  const c0 = a * WAD;
  const c1 = c0 - (WAD >> 1n);
  return c1 / b;
}

// src/entities/utils/doAddLiquidityQuery.ts

async function doAddLiquidityQuery(rpcUrl, chainId, args) {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const {
    result: [bptOut, amountsIn]
  } = await client.simulateContract({
    address: BALANCER_QUERIES[chainId],
    abi: balancerQueriesAbi,
    functionName: "queryJoin",
    args
  });
  return {
    bptOut,
    amountsIn
  };
}

// src/entities/utils/getAmounts.ts
function getAmounts(tokens, amounts, defaultAmount = 0n) {
  return tokens.map(
    (t) => _nullishCoalesce(_optionalChain([amounts, 'access', _2 => _2.find, 'call', _3 => _3((a) => t.isSameAddress(a.address)), 'optionalAccess', _4 => _4.rawAmount]), () => ( defaultAmount))
  );
}

// src/entities/utils/getPoolStateWithBalancesV2.ts






var getPoolStateWithBalancesV2 = async (poolState, chainId, rpcUrl) => {
  const totalSupplyContract = getTotalSupplyContractV2(poolState);
  const getBalanceContracts = {
    address: VAULT[chainId],
    abi: vaultV2Abi,
    functionName: "getPoolTokens",
    args: [poolState.id]
  };
  const publicClient = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const outputs = await publicClient.multicall({
    contracts: [totalSupplyContract, getBalanceContracts]
  });
  if (outputs.some((output) => output.status === "failure")) {
    console.log(
      "Multicall error/s getting pool state with balances for v2 pool",
      {
        errors: outputs.filter((o) => o.status === "failure").map((o) => o.error),
        chainId,
        poolId: poolState.id
      }
    );
    throw new Error(
      "Error: Unable to get pool state with balances for v2 pool."
    );
  }
  const totalShares = outputs[0].result;
  const [_, balances] = outputs[1].result;
  const sortedTokens = getSortedTokens(poolState.tokens, chainId);
  const poolStateWithBalances = {
    ...poolState,
    tokens: sortedTokens.map((token, i) => ({
      address: token.address,
      decimals: token.decimals,
      index: i,
      balance: _viem.formatUnits.call(void 0, balances[i], token.decimals)
    })),
    totalShares: _viem.formatEther.call(void 0, totalShares)
  };
  return poolStateWithBalances;
};
var getTotalSupplyContractV2 = (poolState) => {
  if (poolState.type === "ComposableStable" /* ComposableStable */) {
    return {
      address: poolState.address,
      abi: [
        {
          inputs: [],
          name: "getActualSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        }
      ],
      functionName: "getActualSupply"
    };
  }
  return {
    address: poolState.address,
    abi: [
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ],
    functionName: "totalSupply"
  };
};

// src/entities/utils/getPoolStateWithBalancesV3.ts







var getPoolStateWithBalancesV3 = async (poolState, chainId, rpcUrl) => {
  const publicClient = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { tokenAmounts, totalShares } = await getTokenAmountsAndTotalShares(
    chainId,
    poolState,
    publicClient
  );
  const poolStateWithBalances = {
    ...poolState,
    tokens: tokenAmounts.map((tokenAmount, i) => ({
      address: tokenAmount.token.address,
      decimals: tokenAmount.token.decimals,
      index: i,
      balance: _viem.formatUnits.call(void 0, 
        tokenAmount.amount,
        tokenAmount.token.decimals
      )
    })),
    totalShares: _viem.formatEther.call(void 0, totalShares)
  };
  return poolStateWithBalances;
};
var getBoostedPoolStateWithBalancesV3 = async (poolState, chainId, rpcUrl) => {
  const publicClient = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { tokenAmounts, totalShares } = await getTokenAmountsAndTotalShares(
    chainId,
    poolState,
    publicClient
  );
  const sortedTokens = [...poolState.tokens].sort(
    (a, b) => a.index - b.index
  );
  const underlyingBalances = await getUnderlyingBalances(
    sortedTokens,
    tokenAmounts,
    publicClient
  );
  const poolStateWithUnderlyingBalances = {
    ...poolState,
    tokens: sortedTokens.map((token, i) => ({
      ...token,
      balance: _viem.formatUnits.call(void 0, 
        tokenAmounts[i].amount,
        token.decimals
      ),
      underlyingToken: token.underlyingToken === null ? null : {
        ...token.underlyingToken,
        balance: _viem.formatUnits.call(void 0, 
          underlyingBalances.shift(),
          token.underlyingToken.decimals
        )
      }
    })),
    totalShares: _viem.formatEther.call(void 0, totalShares)
  };
  return poolStateWithUnderlyingBalances;
};
var getUnderlyingBalances = async (sortedTokens, tokenAmounts, publicClient) => {
  const underlyingTokens = sortedTokens.map((token, index) => ({ token, index })).filter(({ token }) => token.underlyingToken !== null);
  const getUnderlyingBalancesContracts = underlyingTokens.map(
    ({ token, index }) => ({
      address: token.address,
      abi: _viem.erc4626Abi,
      functionName: "previewRedeem",
      args: [tokenAmounts[index].amount]
    })
  );
  const underlyingBalanceOutputs = await publicClient.multicall({
    contracts: [...getUnderlyingBalancesContracts]
  });
  if (underlyingBalanceOutputs.some((output) => output.status === "failure")) {
    throw new Error(
      "Error: Unable to get underlying balances for v3 pool."
    );
  }
  const underlyingBalances = underlyingBalanceOutputs.map(
    (output) => output.result
  );
  return underlyingBalances;
};
var getTokenAmountsAndTotalShares = async (chainId, poolState, publicClient) => {
  const totalSupplyContract = {
    address: VAULT_V3[chainId],
    abi: vaultExtensionAbi_V3,
    functionName: "totalSupply",
    args: [poolState.address]
  };
  const getBalanceContracts = {
    address: VAULT_V3[chainId],
    abi: vaultExtensionAbi_V3,
    functionName: "getCurrentLiveBalances",
    args: [poolState.address]
  };
  const outputs = await publicClient.multicall({
    contracts: [totalSupplyContract, getBalanceContracts]
  });
  if (outputs.some((output) => output.status === "failure")) {
    throw new Error(
      "Error: Unable to get pool state with balances for v3 pool."
    );
  }
  const totalShares = outputs[0].result;
  const balancesScale18 = outputs[1].result;
  const poolTokens = getSortedTokens(poolState.tokens, chainId);
  const tokenAmounts = poolTokens.map(
    (token, i) => TokenAmount.fromScale18Amount(token, balancesScale18[i])
  );
  return { tokenAmounts, totalShares };
};

// src/entities/utils/getValue.ts
var getValue = (amountsIn, wethIsEth, slippage) => {
  let value = 0n;
  if (wethIsEth) {
    value = _nullishCoalesce(_optionalChain([amountsIn, 'access', _5 => _5.find, 'call', _6 => _6(
      (a) => a.token.isUnderlyingEqual(NATIVE_ASSETS[a.token.chainId])
    ), 'optionalAccess', _7 => _7.amount]), () => ( 0n));
  }
  if (slippage) {
    return slippage.applyTo(value);
  }
  return value;
};

// src/entities/utils/replaceWrapped.ts
function replaceWrapped(tokens, chainId) {
  return tokens.map((token) => {
    if (token.isUnderlyingEqual(NATIVE_ASSETS[chainId])) {
      return new Token(chainId, ZERO_ADDRESS, 18);
    }
    return token;
  });
}

// src/entities/utils/parseAddLiquidityArgs.ts
function parseAddLiquidityArgs({
  wethIsEth,
  chainId,
  sortedTokens,
  poolId,
  sender,
  recipient,
  maxAmountsIn,
  userData,
  fromInternalBalance
}) {
  const tokensIn = chainId && wethIsEth ? replaceWrapped([...sortedTokens], chainId) : [...sortedTokens];
  const joinPoolRequest = {
    assets: tokensIn.map((t) => t.address),
    // with BPT
    maxAmountsIn,
    // with BPT
    userData,
    // wihtout BPT
    fromInternalBalance: !!fromInternalBalance
  };
  return {
    args: [poolId, sender, recipient, joinPoolRequest],
    tokensIn
  };
}

// src/entities/utils/parseInitializeArgs.ts
function parseInitializeArgs({
  exactAmountsIn,
  minBptAmountOut,
  wethIsEth,
  poolAddress,
  sortedTokens
}) {
  return {
    args: [
      poolAddress,
      sortedTokens.map(({ address }) => address),
      exactAmountsIn,
      minBptAmountOut,
      _nullishCoalesce(wethIsEth, () => ( false)),
      DEFAULT_USERDATA
    ]
  };
}

// src/entities/utils/proportionalAmountsHelpers.ts

function calculateProportionalAmounts(pool, referenceAmount) {
  const tokensWithoutBpt = pool.tokens.filter(
    (t) => !pool.address.toLowerCase().includes(t.address.toLowerCase())
  );
  const tokensWithBpt = [
    ...tokensWithoutBpt,
    {
      address: pool.address,
      balance: pool.totalShares,
      decimals: 18
    }
  ];
  const referenceTokenIndex = tokensWithBpt.findIndex(
    (t) => t.address.toLowerCase() === referenceAmount.address.toLowerCase()
  );
  if (referenceTokenIndex === -1) {
    throw new Error(
      "Reference amount must be relative to a token in the pool or its BPT"
    );
  }
  const balances = tokensWithBpt.map(
    (t) => _viem.parseUnits.call(void 0, t.balance, t.decimals)
  );
  const referenceTokenBalance = balances[referenceTokenIndex];
  const ratio = MathSol.divDownFixed(
    referenceAmount.rawAmount,
    referenceTokenBalance
  );
  const proportionalAmounts = balances.map(
    (b) => MathSol.mulDownFixed(b, ratio)
  );
  const amounts = tokensWithBpt.map(({ address, decimals }, index) => ({
    address,
    decimals,
    rawAmount: proportionalAmounts[index]
  }));
  const bptAmount = amounts.pop();
  return {
    tokenAmounts: amounts,
    bptAmount
  };
}
var getBptAmountFromReferenceAmount = async (input, poolState) => {
  let bptAmount;
  if (input.referenceAmount.address === poolState.address) {
    bptAmount = input.referenceAmount;
  } else {
    switch (poolState.protocolVersion) {
      case 1:
        throw new Error("CowAmm pools should use CowAmm helpers");
      case 2: {
        const poolStateWithBalances = await getPoolStateWithBalancesV2(
          poolState,
          input.chainId,
          input.rpcUrl
        );
        ({ bptAmount } = calculateProportionalAmounts(
          poolStateWithBalances,
          input.referenceAmount
        ));
        break;
      }
      case 3: {
        const poolStateWithBalances = await getPoolStateWithBalancesV3(
          poolState,
          input.chainId,
          input.rpcUrl
        );
        ({ bptAmount } = calculateProportionalAmounts(
          poolStateWithBalances,
          input.referenceAmount
        ));
        break;
      }
    }
  }
  return bptAmount;
};
var getBptAmountFromReferenceAmountBoosted = async (input, poolStateWithUnderlyings) => {
  let bptAmount;
  if (isSameAddress(
    input.referenceAmount.address,
    poolStateWithUnderlyings.address
  )) {
    bptAmount = input.referenceAmount;
  } else {
    const poolStateWithUnderlyingBalances = await getBoostedPoolStateWithBalancesV3(
      poolStateWithUnderlyings,
      input.chainId,
      input.rpcUrl
    );
    const poolStateWithBalances = {
      ...poolStateWithUnderlyingBalances,
      tokens: poolStateWithUnderlyingBalances.tokens.map(
        (t) => _nullishCoalesce(t.underlyingToken, () => ( t))
      )
    };
    ({ bptAmount } = calculateProportionalAmounts(
      poolStateWithBalances,
      input.referenceAmount
    ));
  }
  return bptAmount;
};

// src/entities/utils/isPoolToken.ts
function isPoolTokenWithUnderlying(token) {
  return "underlyingToken" in token;
}
function isPoolToken(tokens, token) {
  let isPoolToken2 = false;
  let isUnderlyingToken = false;
  tokens.some((t) => {
    const isToken = isSameAddress(t.address, token);
    const isUnderlying = isPoolTokenWithUnderlying(t) && _optionalChain([t, 'access', _8 => _8.underlyingToken, 'optionalAccess', _9 => _9.address]) && isSameAddress(t.underlyingToken.address, token);
    if (isToken || isUnderlying) {
      isPoolToken2 = true;
      isUnderlyingToken = !!isUnderlying;
      return true;
    }
    return false;
  });
  return { isPoolToken: isPoolToken2, isUnderlyingToken };
}

// src/entities/utils/validateNestedPoolState.ts
function validateNestedPoolState(nestedPoolState) {
  const topLevel = Math.max(...nestedPoolState.pools.map((p) => p.level));
  nestedPoolState.mainTokens.forEach((t) => {
    const poolsWithToken = nestedPoolState.pools.filter((p) => {
      const poolToken = isPoolToken(p.tokens, t.address);
      return poolToken.isPoolToken;
    });
    if (poolsWithToken.length < 1)
      throw new Error(
        "NestedPoolState, main token must exist as a token of a pool"
      );
    if (poolsWithToken.length > 1)
      throw new Error(
        `NestedPoolState, main token can't be token of more than 1 pool`
      );
    if (poolsWithToken[0]) {
      if (topLevel - poolsWithToken[0].level > 1)
        throw new Error(
          "NestedPoolState, main token only supported to a max of 1 level of nesting"
        );
    }
  });
  return true;
}

// src/entities/addLiquidity/addLiquidityV2/composableStable/addLiquidityComposableStable.ts


// src/entities/addLiquidity/helpers.ts
var getAmountsQuery = async (input, poolState, bptIndex = -1) => {
  const poolTokens = getSortedTokens(poolState.tokens, input.chainId);
  switch (input.kind) {
    case "Unbalanced" /* Unbalanced */: {
      const maxAmountsIn = getAmounts(poolTokens, input.amountsIn);
      return {
        minimumBpt: 0n,
        maxAmountsIn,
        tokenInIndex: void 0,
        maxAmountsInWithoutBpt: removeIndex(maxAmountsIn, bptIndex)
      };
    }
    case "SingleToken" /* SingleToken */: {
      const tokenInIndex = poolTokens.filter((_, index) => index !== bptIndex).findIndex((t) => t.isSameAddress(input.tokenIn));
      if (tokenInIndex === -1)
        throw Error("Can't find index of SingleToken");
      const maxAmountsIn = Array(poolTokens.length).fill(0n);
      maxAmountsIn[tokenInIndex] = MAX_UINT256;
      return {
        minimumBpt: input.bptOut.rawAmount,
        maxAmountsIn,
        tokenInIndex,
        maxAmountsInWithoutBpt: removeIndex(maxAmountsIn, bptIndex)
      };
    }
    case "Proportional" /* Proportional */: {
      const maxAmountsIn = Array(poolTokens.length).fill(MAX_UINT256);
      const bptAmount = await getBptAmountFromReferenceAmount(
        input,
        poolState
      );
      return {
        minimumBpt: bptAmount.rawAmount,
        maxAmountsIn,
        tokenInIndex: void 0,
        maxAmountsInWithoutBpt: removeIndex(maxAmountsIn, bptIndex)
      };
    }
  }
};
var getAmountsCall = (input, bptIndex = -1) => {
  switch (input.addLiquidityKind) {
    case "Unbalanced" /* Unbalanced */: {
      const minimumBpt = input.slippage.applyTo(input.bptOut.amount, -1);
      const maxAmountsIn = input.amountsIn.map((a) => a.amount);
      return {
        minimumBpt,
        maxAmountsIn,
        tokenInIndex: input.tokenInIndex,
        maxAmountsInWithoutBpt: removeIndex(maxAmountsIn, bptIndex)
      };
    }
    case "SingleToken" /* SingleToken */:
    case "Proportional" /* Proportional */: {
      const maxAmountsIn = input.amountsIn.map(
        (a) => input.slippage.applyTo(a.amount)
      );
      return {
        minimumBpt: input.bptOut.amount,
        maxAmountsIn,
        tokenInIndex: input.tokenInIndex,
        maxAmountsInWithoutBpt: removeIndex(maxAmountsIn, bptIndex)
      };
    }
  }
};

// src/entities/addLiquidity/addLiquidityV2/composableStable/addLiquidityComposableStable.ts
var AddLiquidityComposableStable = class {
  async query(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const bptIndex = sortedTokens.findIndex(
      (t) => t.address === poolState.address
    );
    const amounts = await getAmountsQuery(input, poolState, bptIndex);
    const userData = ComposableStableEncoder.encodeAddLiquidityUserData(
      input.kind,
      amounts
    );
    const { args, tokensIn } = parseAddLiquidityArgs({
      chainId: input.chainId,
      sortedTokens,
      poolId: poolState.id,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: false
      // This isn't required for the query
    });
    const queryOutput = await doAddLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptOut = TokenAmount.fromRawAmount(bpt, queryOutput.bptOut);
    const amountsIn = queryOutput.amountsIn.map(
      (a, i) => TokenAmount.fromRawAmount(tokensIn[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      addLiquidityKind: input.kind,
      poolId: poolState.id,
      bptOut,
      amountsIn,
      tokenInIndex: amounts.tokenInIndex,
      chainId: input.chainId,
      protocolVersion: 2,
      bptIndex
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall(input, input.bptIndex);
    const userData = ComposableStableEncoder.encodeAddLiquidityUserData(
      input.addLiquidityKind,
      amounts
    );
    const { args } = parseAddLiquidityArgs({
      ...input,
      sortedTokens: input.amountsIn.map((a) => a.token),
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: !!input.fromInternalBalance,
      wethIsEth: !!input.wethIsEth
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "joinPool",
      args
    });
    return {
      callData,
      args,
      to: VAULT[input.chainId],
      value: getValue(input.amountsIn, !!input.wethIsEth, input.slippage),
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/encoders/stable.ts

var _StableEncoder = class _StableEncoder {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Encodes the User Data for initializing a StablePool
   * @param amounts Amounts of tokens to be added to the pool
   * @returns
   */
  static encodeInitPoolUserData(amounts) {
    return _StableEncoder.initPool(amounts.maxAmountsIn);
  }
};
/**
 * Encodes the User Data for adding liquidity to a StablePool
 * @param kind Kind of the Add Liquidity operation: Init, Unbalanced, SingleToken, Proportional
 * @param amounts Amounts of tokens to be added to the pool
 * @returns
 */
__publicField(_StableEncoder, "encodeAddLiquidityUserData", (kind, amounts) => {
  switch (kind) {
    case "Unbalanced" /* Unbalanced */:
      return _StableEncoder.addLiquidityUnbalanced(
        amounts.maxAmountsIn,
        amounts.minimumBpt
      );
    case "SingleToken" /* SingleToken */: {
      if (amounts.tokenInIndex === void 0) {
        throw addLiquiditySingleTokenShouldHaveTokenInIndexError;
      }
      return _StableEncoder.addLiquiditySingleToken(
        amounts.minimumBpt,
        amounts.tokenInIndex
      );
    }
    default:
      throw new Error(`AddLiquidityKind not supported: ${kind}`);
  }
});
/**
 * Encodes the User Data for removing liquidity from a StablePool
 * @param kind Kind of the Remove Liquidity operation: Unbalanced, SingleToken, Proportional
 * @param amounts Amounts of tokens to be removed from the pool
 * @returns
 */
__publicField(_StableEncoder, "encodeRemoveLiquidityUserData", (kind, amounts) => {
  switch (kind) {
    case "Unbalanced" /* Unbalanced */:
    case "SingleTokenExactOut" /* SingleTokenExactOut */:
      return _StableEncoder.removeLiquidityUnbalanced(
        amounts.minAmountsOut,
        amounts.maxBptAmountIn
      );
    case "SingleTokenExactIn" /* SingleTokenExactIn */:
      if (amounts.tokenOutIndex === void 0)
        throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
      return _StableEncoder.removeLiquiditySingleTokenExactIn(
        amounts.maxBptAmountIn,
        amounts.tokenOutIndex
      );
    case "Proportional" /* Proportional */:
      return _StableEncoder.removeLiquidityProportional(
        amounts.maxBptAmountIn
      );
    case "Recovery" /* Recovery */:
      return encodeRemoveLiquidityRecovery(amounts.maxBptAmountIn);
  }
});
/**
 * Encodes the userData parameter for providing the initial liquidity to a StablePool
 * @param initialBalances - the amounts of tokens to send to the pool to form the initial balances
 */
__publicField(_StableEncoder, "initPool", (amountsIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }],
  [BigInt(0 /* INIT */), amountsIn]
));
/**
 * Encodes the userData parameter for adding liquidity to a StablePool with exact token inputs
 * @param amountsIn - the amounts each of token to deposit in the pool as liquidity
 * @param minimumBPT - the minimum acceptable BPT to receive in return for deposited tokens
 */
__publicField(_StableEncoder, "addLiquidityUnbalanced", (amountsIn, minimumBPT) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(1 /* EXACT_TOKENS_IN_FOR_BPT_OUT */),
    amountsIn,
    minimumBPT
  ]
));
/**
 * Encodes the userData parameter for adding liquidity to a StablePool with a single token to receive an exact amount of BPT
 * @param bptAmountOut - the amount of BPT to be minted
 * @param tokenIndex - the index of the token to be provided as liquidity
 */
__publicField(_StableEncoder, "addLiquiditySingleToken", (bptAmountOut, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(2 /* TOKEN_IN_FOR_EXACT_BPT_OUT */),
      bptAmountOut,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a StablePool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 * @param tokenIndex - the index of the token to removed from the pool
 */
__publicField(_StableEncoder, "removeLiquiditySingleTokenExactIn", (bptAmountIn, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(0 /* EXACT_BPT_IN_FOR_ONE_TOKEN_OUT */),
      bptAmountIn,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a StablePool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 */
__publicField(_StableEncoder, "removeLiquidityProportional", (bptAmountIn) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [
      BigInt(1 /* EXACT_BPT_IN_FOR_TOKENS_OUT */),
      bptAmountIn
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a StablePool by removing exact amounts of tokens
 * @param amountsOut - the amounts of each token to be withdrawn from the pool
 * @param maxBPTAmountIn - the minimum acceptable BPT to burn in return for withdrawn tokens
 */
__publicField(_StableEncoder, "removeLiquidityUnbalanced", (amountsOut, maxBPTAmountIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(2 /* BPT_IN_FOR_EXACT_TOKENS_OUT */),
    amountsOut,
    maxBPTAmountIn
  ]
));
var StableEncoder = _StableEncoder;

// src/entities/addLiquidity/addLiquidityV2/stable/addLiquidityStable.ts

var AddLiquidityStable = class {
  async query(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = await getAmountsQuery(input, poolState);
    const userData = StableEncoder.encodeAddLiquidityUserData(
      input.kind,
      amounts
    );
    const { args, tokensIn } = parseAddLiquidityArgs({
      chainId: input.chainId,
      sortedTokens,
      poolId: poolState.id,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      maxAmountsIn: amounts.maxAmountsIn,
      userData
    });
    const queryOutput = await doAddLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptOut = TokenAmount.fromRawAmount(bpt, queryOutput.bptOut);
    const amountsIn = queryOutput.amountsIn.map(
      (a, i) => TokenAmount.fromRawAmount(tokensIn[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      addLiquidityKind: input.kind,
      poolId: poolState.id,
      bptOut,
      amountsIn,
      chainId: input.chainId,
      tokenInIndex: amounts.tokenInIndex,
      protocolVersion: poolState.protocolVersion
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall(input);
    const userData = StableEncoder.encodeAddLiquidityUserData(
      input.addLiquidityKind,
      amounts
    );
    const { args } = parseAddLiquidityArgs({
      ...input,
      sortedTokens: input.amountsIn.map((a) => a.token),
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: input.fromInternalBalance,
      wethIsEth: !!input.wethIsEth
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "joinPool",
      args
    });
    return {
      callData,
      args,
      to: VAULT[input.chainId],
      value: getValue(input.amountsIn, !!input.wethIsEth, input.slippage),
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/addLiquidity/addLiquidityV2/weighted/addLiquidityWeighted.ts


// src/entities/encoders/weighted.ts

var WeightedPoolJoinKind = /* @__PURE__ */ ((WeightedPoolJoinKind2) => {
  WeightedPoolJoinKind2[WeightedPoolJoinKind2["INIT"] = 0] = "INIT";
  WeightedPoolJoinKind2[WeightedPoolJoinKind2["EXACT_TOKENS_IN_FOR_BPT_OUT"] = 1] = "EXACT_TOKENS_IN_FOR_BPT_OUT";
  WeightedPoolJoinKind2[WeightedPoolJoinKind2["TOKEN_IN_FOR_EXACT_BPT_OUT"] = 2] = "TOKEN_IN_FOR_EXACT_BPT_OUT";
  WeightedPoolJoinKind2[WeightedPoolJoinKind2["ALL_TOKENS_IN_FOR_EXACT_BPT_OUT"] = 3] = "ALL_TOKENS_IN_FOR_EXACT_BPT_OUT";
  return WeightedPoolJoinKind2;
})(WeightedPoolJoinKind || {});
var WeightedPoolExitKind = /* @__PURE__ */ ((WeightedPoolExitKind2) => {
  WeightedPoolExitKind2[WeightedPoolExitKind2["EXACT_BPT_IN_FOR_ONE_TOKEN_OUT"] = 0] = "EXACT_BPT_IN_FOR_ONE_TOKEN_OUT";
  WeightedPoolExitKind2[WeightedPoolExitKind2["EXACT_BPT_IN_FOR_TOKENS_OUT"] = 1] = "EXACT_BPT_IN_FOR_TOKENS_OUT";
  WeightedPoolExitKind2[WeightedPoolExitKind2["BPT_IN_FOR_EXACT_TOKENS_OUT"] = 2] = "BPT_IN_FOR_EXACT_TOKENS_OUT";
  WeightedPoolExitKind2[WeightedPoolExitKind2["MANAGEMENT_FEE_TOKENS_OUT"] = 3] = "MANAGEMENT_FEE_TOKENS_OUT";
  return WeightedPoolExitKind2;
})(WeightedPoolExitKind || {});
var _WeightedEncoder = class _WeightedEncoder {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  /**
   * Encodes the User Data for initializing a WeightedPool
   * @param amounts Amounts of tokens to be added to the pool
   * @returns
   */
  static encodeInitPoolUserData(amounts) {
    return _WeightedEncoder.initPool(amounts.maxAmountsIn);
  }
};
/**
 * Encodes the User Data for adding liquidity to a WeightedPool
 * @param kind Kind of the Add Liquidity operation: Init, Unbalanced, SingleToken, Proportional
 * @param amounts Amounts of tokens to be added to the pool
 * @returns
 */
__publicField(_WeightedEncoder, "encodeAddLiquidityUserData", (kind, amounts) => {
  switch (kind) {
    case "Unbalanced" /* Unbalanced */:
      return _WeightedEncoder.addLiquidityUnbalanced(
        amounts.maxAmountsIn,
        amounts.minimumBpt
      );
    case "SingleToken" /* SingleToken */: {
      if (amounts.tokenInIndex === void 0) {
        throw addLiquiditySingleTokenShouldHaveTokenInIndexError;
      }
      return _WeightedEncoder.addLiquiditySingleToken(
        amounts.minimumBpt,
        amounts.tokenInIndex
      );
    }
    case "Proportional" /* Proportional */: {
      return _WeightedEncoder.addLiquidityProportional(
        amounts.minimumBpt
      );
    }
  }
});
/**
 * Encodes the User Data for removing liquidity from a WeightedPool
 * @param kind Kind of the Remove Liquidity operation: Unbalanced, SingleToken, Proportional
 * @param amounts Amounts of tokens to be removed from the pool
 * @returns
 */
__publicField(_WeightedEncoder, "encodeRemoveLiquidityUserData", (kind, amounts) => {
  switch (kind) {
    case "Unbalanced" /* Unbalanced */:
    case "SingleTokenExactOut" /* SingleTokenExactOut */:
      return _WeightedEncoder.removeLiquidityUnbalanced(
        amounts.minAmountsOut,
        amounts.maxBptAmountIn
      );
    case "SingleTokenExactIn" /* SingleTokenExactIn */:
      if (amounts.tokenOutIndex === void 0)
        throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
      return _WeightedEncoder.removeLiquiditySingleTokenExactIn(
        amounts.maxBptAmountIn,
        amounts.tokenOutIndex
      );
    case "Proportional" /* Proportional */:
      return _WeightedEncoder.removeLiquidityProportional(
        amounts.maxBptAmountIn
      );
    case "Recovery" /* Recovery */:
      return encodeRemoveLiquidityRecovery(amounts.maxBptAmountIn);
  }
});
/**
 * Encodes the userData parameter for providing the initial liquidity to a WeightedPool
 * @param initialBalances - the amounts of tokens to send to the pool to form the initial balances
 */
__publicField(_WeightedEncoder, "initPool", (amountsIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }],
  [BigInt(0 /* INIT */), amountsIn]
));
/**
 * Encodes the userData parameter for adding liquidity to a WeightedPool with exact token inputs
 * @param amountsIn - the amounts each of token to deposit in the pool as liquidity
 * @param minimumBPT - the minimum acceptable BPT to receive in return for deposited tokens
 */
__publicField(_WeightedEncoder, "addLiquidityUnbalanced", (amountsIn, minimumBPT) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(1 /* EXACT_TOKENS_IN_FOR_BPT_OUT */),
    amountsIn,
    minimumBPT
  ]
));
/**
 * Encodes the userData parameter for adding liquidity to a WeightedPool with a single token to receive an exact amount of BPT
 * @param bptAmountOut - the amount of BPT to be minted
 * @param tokenIndex - the index of the token to be provided as liquidity
 */
__publicField(_WeightedEncoder, "addLiquiditySingleToken", (bptAmountOut, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(2 /* TOKEN_IN_FOR_EXACT_BPT_OUT */),
      bptAmountOut,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for adding liquidity to a WeightedPool proportionally to receive an exact amount of BPT
 * @param bptAmountOut - the amount of BPT to be minted
 */
__publicField(_WeightedEncoder, "addLiquidityProportional", (bptAmountOut) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [
      BigInt(3 /* ALL_TOKENS_IN_FOR_EXACT_BPT_OUT */),
      bptAmountOut
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a WeightedPool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 * @param tokenIndex - the index of the token to removed from the pool
 */
__publicField(_WeightedEncoder, "removeLiquiditySingleTokenExactIn", (bptAmountIn, tokenIndex) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }, { type: "uint256" }],
    [
      BigInt(0 /* EXACT_BPT_IN_FOR_ONE_TOKEN_OUT */),
      bptAmountIn,
      BigInt(tokenIndex)
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a WeightedPool by removing tokens in return for an exact amount of BPT
 * @param bptAmountIn - the amount of BPT to be burned
 */
__publicField(_WeightedEncoder, "removeLiquidityProportional", (bptAmountIn) => {
  return _viem.encodeAbiParameters.call(void 0, 
    [{ type: "uint256" }, { type: "uint256" }],
    [
      BigInt(1 /* EXACT_BPT_IN_FOR_TOKENS_OUT */),
      bptAmountIn
    ]
  );
});
/**
 * Encodes the userData parameter for removing liquidity from a WeightedPool by removing exact amounts of tokens
 * @param amountsOut - the amounts of each token to be withdrawn from the pool
 * @param maxBPTAmountIn - the minimum acceptable BPT to burn in return for withdrawn tokens
 */
__publicField(_WeightedEncoder, "removeLiquidityUnbalanced", (amountsOut, maxBPTAmountIn) => _viem.encodeAbiParameters.call(void 0, 
  [{ type: "uint256" }, { type: "uint256[]" }, { type: "uint256" }],
  [
    BigInt(2 /* BPT_IN_FOR_EXACT_TOKENS_OUT */),
    amountsOut,
    maxBPTAmountIn
  ]
));
var WeightedEncoder = _WeightedEncoder;

// src/entities/addLiquidity/addLiquidityV2/weighted/addLiquidityWeighted.ts
var AddLiquidityWeighted = class {
  async query(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = await getAmountsQuery(input, poolState);
    const userData = WeightedEncoder.encodeAddLiquidityUserData(
      input.kind,
      amounts
    );
    const { args, tokensIn } = parseAddLiquidityArgs({
      chainId: input.chainId,
      sortedTokens,
      poolId: poolState.id,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      maxAmountsIn: amounts.maxAmountsIn,
      userData
    });
    const queryOutput = await doAddLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptOut = TokenAmount.fromRawAmount(bpt, queryOutput.bptOut);
    const amountsIn = queryOutput.amountsIn.map(
      (a, i) => TokenAmount.fromRawAmount(tokensIn[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      addLiquidityKind: input.kind,
      poolId: poolState.id,
      bptOut,
      amountsIn,
      chainId: input.chainId,
      tokenInIndex: amounts.tokenInIndex,
      protocolVersion: 2
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall(input);
    const userData = WeightedEncoder.encodeAddLiquidityUserData(
      input.addLiquidityKind,
      amounts
    );
    const { args } = parseAddLiquidityArgs({
      ...input,
      sortedTokens: input.amountsIn.map((a) => a.token),
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: !!input.fromInternalBalance,
      wethIsEth: !!input.wethIsEth
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "joinPool",
      args
    });
    return {
      callData,
      args,
      to: VAULT[input.chainId],
      value: getValue(input.amountsIn, !!input.wethIsEth, input.slippage),
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/addLiquidity/addLiquidityV2/index.ts
var AddLiquidityV2 = class {
  constructor(config) {
    __publicField(this, "addLiquidityTypes", {});
    const { customAddLiquidityTypes } = config || {};
    this.addLiquidityTypes = {
      //GYRO2, GYRO3, GYROE pool types only support Add Liquidity Proportional (3 - ALL_TOKENS_IN_FOR_BPT_OUT)
      ["ComposableStable" /* ComposableStable */]: new AddLiquidityComposableStable(),
      ["Gyro2" /* Gyro2 */]: new AddLiquidityWeighted(),
      ["Gyro3" /* Gyro3 */]: new AddLiquidityWeighted(),
      ["GyroE" /* GyroE */]: new AddLiquidityWeighted(),
      ["MetaStable" /* MetaStable */]: new AddLiquidityStable(),
      ["Stable" /* Stable */]: new AddLiquidityStable(),
      ["Weighted" /* Weighted */]: new AddLiquidityWeighted(),
      // custom add liquidity types take precedence over base types
      ...customAddLiquidityTypes
    };
  }
  getAddLiquidity(poolType) {
    if (!this.addLiquidityTypes[poolType]) {
      throw new Error(`Unsupported pool type ${poolType}`);
    }
    return this.addLiquidityTypes[poolType];
  }
  async query(input, poolState) {
    return this.getAddLiquidity(poolState.type).query(input, poolState);
  }
  buildCall(input) {
    return this.getAddLiquidity(input.poolType).buildCall(input);
  }
  buildCallWithPermit2() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/addLiquidity/addLiquidityV3/index.ts


// src/entities/addLiquidity/addLiquidityV3/doAddLiquidityUnbalancedQuery.ts

var doAddLiquidityUnbalancedQuery = async (rpcUrl, chainId, sender, userData, poolAddress, maxAmountsIn) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: bptAmountOut } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquidityUnbalanced",
    args: [poolAddress, maxAmountsIn, sender, userData]
  });
  return bptAmountOut;
};

// src/entities/addLiquidity/addLiquidityV3/doAddLiquiditySingleTokenQuery.ts

var doAddLiquiditySingleTokenQuery = async (rpcUrl, chainId, sender, userData, tokenIn, poolAddress, bptOut) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: amountIn } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquiditySingleTokenExactOut",
    args: [poolAddress, tokenIn, bptOut, sender, userData]
  });
  return amountIn;
};

// src/entities/addLiquidity/addLiquidityV3/doAddLiquidityProportionalQuery.ts

var doAddLiquidityProportionalQuery = async (rpcUrl, chainId, sender, userData, poolAddress, bptOut) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: amountsIn } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquidityProportional",
    args: [poolAddress, bptOut, sender, userData]
  });
  return [...amountsIn];
};

// src/entities/addLiquidity/addLiquidityV3/index.ts
var AddLiquidityV3 = class {
  async query(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const bptToken = new Token(input.chainId, poolState.address, 18);
    let bptOut;
    let amountsIn;
    let tokenInIndex;
    switch (input.kind) {
      case "Proportional" /* Proportional */: {
        const bptAmount = await getBptAmountFromReferenceAmount(
          input,
          poolState
        );
        const amountsInNumbers = await doAddLiquidityProportionalQuery(
          input.rpcUrl,
          input.chainId,
          _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
          _nullishCoalesce(input.userData, () => ( "0x")),
          poolState.address,
          bptAmount.rawAmount
        );
        amountsIn = sortedTokens.map(
          (t, i) => TokenAmount.fromRawAmount(t, amountsInNumbers[i])
        );
        bptOut = TokenAmount.fromRawAmount(
          bptToken,
          bptAmount.rawAmount
        );
        tokenInIndex = void 0;
        break;
      }
      case "Unbalanced" /* Unbalanced */: {
        const maxAmountsIn = getAmounts(sortedTokens, input.amountsIn);
        const bptAmountOut = await doAddLiquidityUnbalancedQuery(
          input.rpcUrl,
          input.chainId,
          _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
          _nullishCoalesce(input.userData, () => ( "0x")),
          poolState.address,
          maxAmountsIn
        );
        bptOut = TokenAmount.fromRawAmount(bptToken, bptAmountOut);
        amountsIn = sortedTokens.map(
          (t, i) => TokenAmount.fromRawAmount(t, maxAmountsIn[i])
        );
        tokenInIndex = void 0;
        break;
      }
      case "SingleToken" /* SingleToken */: {
        bptOut = TokenAmount.fromRawAmount(
          bptToken,
          input.bptOut.rawAmount
        );
        const amountIn = await doAddLiquiditySingleTokenQuery(
          input.rpcUrl,
          input.chainId,
          _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
          _nullishCoalesce(input.userData, () => ( "0x")),
          input.tokenIn,
          poolState.address,
          input.bptOut.rawAmount
        );
        amountsIn = sortedTokens.map((t) => {
          if (t.isSameAddress(input.tokenIn))
            return TokenAmount.fromRawAmount(t, amountIn);
          return TokenAmount.fromRawAmount(t, 0n);
        });
        tokenInIndex = sortedTokens.findIndex(
          (t) => t.isSameAddress(input.tokenIn)
        );
        break;
      }
    }
    const output = {
      to: BALANCER_ROUTER[input.chainId],
      poolType: poolState.type,
      poolId: poolState.id,
      addLiquidityKind: input.kind,
      bptOut,
      amountsIn,
      tokenInIndex,
      chainId: input.chainId,
      protocolVersion: 3,
      userData: _nullishCoalesce(input.userData, () => ( "0x"))
    };
    return output;
  }
  buildCall(input) {
    const amounts = getAmountsCall(input);
    let callData;
    switch (input.addLiquidityKind) {
      case "Proportional" /* Proportional */:
        {
          callData = _viem.encodeFunctionData.call(void 0, {
            abi: balancerRouterAbi,
            functionName: "addLiquidityProportional",
            args: [
              input.poolId,
              amounts.maxAmountsIn,
              amounts.minimumBpt,
              !!input.wethIsEth,
              input.userData
            ]
          });
        }
        break;
      case "Unbalanced" /* Unbalanced */:
        {
          callData = _viem.encodeFunctionData.call(void 0, {
            abi: balancerRouterAbi,
            functionName: "addLiquidityUnbalanced",
            args: [
              input.poolId,
              input.amountsIn.map((a) => a.amount),
              amounts.minimumBpt,
              !!input.wethIsEth,
              input.userData
            ]
          });
        }
        break;
      case "SingleToken" /* SingleToken */:
        {
          if (input.tokenInIndex === void 0) {
            throw addLiquiditySingleTokenShouldHaveTokenInIndexError;
          }
          callData = _viem.encodeFunctionData.call(void 0, {
            abi: balancerRouterAbi,
            functionName: "addLiquiditySingleTokenExactOut",
            args: [
              input.poolId,
              input.amountsIn[input.tokenInIndex].token.address,
              input.amountsIn[input.tokenInIndex].amount,
              input.bptOut.amount,
              !!input.wethIsEth,
              input.userData
            ]
          });
        }
        break;
    }
    return {
      callData,
      to: BALANCER_ROUTER[input.chainId],
      value: getValue(input.amountsIn, !!input.wethIsEth),
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/utils/areTokensInArray.ts
function areTokensInArray(tokens, tokenArray) {
  const sanitisedTokens = tokens.map((t) => t.toLowerCase());
  const sanitisedTokenArray = tokenArray.map((t) => t.toLowerCase());
  for (const token of sanitisedTokens) {
    if (!sanitisedTokenArray.includes(token)) {
      throw new Error(`Token ${token} not found in array`);
    }
  }
}

// src/entities/inputValidator/utils/validateTokens.ts
var validateTokensAddLiquidity = (addLiquidityInput, poolState) => {
  switch (addLiquidityInput.kind) {
    case "Unbalanced" /* Unbalanced */:
      areTokensInArray(
        addLiquidityInput.amountsIn.map((a) => a.address),
        poolState.tokens.map((t) => t.address)
      );
      break;
    case "SingleToken" /* SingleToken */:
      areTokensInArray(
        [addLiquidityInput.tokenIn],
        poolState.tokens.map((t) => t.address)
      );
      break;
    case "Proportional" /* Proportional */:
      areTokensInArray(
        [addLiquidityInput.referenceAmount.address],
        [poolState.address, ...poolState.tokens.map((t) => t.address)]
        // reference amount can be any pool token or pool BPT
      );
      break;
    default:
      break;
  }
};
var validateTokensRemoveLiquidity = (removeLiquidityInput, poolState) => {
  switch (removeLiquidityInput.kind) {
    case "Unbalanced" /* Unbalanced */:
      areTokensInArray(
        removeLiquidityInput.amountsOut.map((a) => a.address),
        poolState.tokens.map((t) => t.address)
      );
      break;
    case "SingleTokenExactOut" /* SingleTokenExactOut */:
      areTokensInArray(
        [removeLiquidityInput.amountOut.address],
        poolState.tokens.map((t) => t.address)
      );
      break;
    case "SingleTokenExactIn" /* SingleTokenExactIn */:
      areTokensInArray(
        [removeLiquidityInput.tokenOut],
        poolState.tokens.map((t) => t.address)
      );
      break;
    case "Proportional" /* Proportional */:
      areTokensInArray(
        [removeLiquidityInput.bptIn.address],
        [poolState.address]
      );
      break;
  }
};
var validateTokensRemoveLiquidityRecovery = (removeLiquidityRecoveryInput, poolState) => {
  areTokensInArray(
    [removeLiquidityRecoveryInput.bptIn.address],
    [poolState.address]
  );
};
var validatePoolHasBpt = (poolState) => {
  const { tokens, address } = poolState;
  const bptIndex = tokens.findIndex((t) => t.address === address);
  if (bptIndex < 0) {
    throw new Error(
      "INPUT_ERROR: Pool State should have BPT token included"
    );
  }
};
var validateCreatePoolTokens = (tokens) => {
  const tokenAddresses = tokens.map((t) => t.address);
  if (tokenAddresses.length !== new Set(tokenAddresses).size) {
    throw new Error("Duplicate token addresses");
  }
  if (tokens.length < 2) {
    throw new Error("Minimum of 2 tokens required");
  }
};

// src/entities/inputValidator/inputValidatorBase.ts

var InputValidatorBase = class {
  validateInitPool(initPoolInput, poolState) {
    areTokensInArray(
      initPoolInput.amountsIn.map((a) => a.address),
      poolState.tokens.map((t) => t.address)
    );
    if (poolState.protocolVersion === 3) {
      this.validateWethIsEth(initPoolInput);
    }
  }
  validateCreatePool(input) {
    validateCreatePoolTokens(input.tokens);
    if (input.protocolVersion === 3) {
      input.tokens.forEach(({ tokenType, rateProvider }) => {
        if (tokenType !== 0 /* STANDARD */ && rateProvider === _viem.zeroAddress) {
          throw new Error(
            "Only TokenType.STANDARD is allowed to have zeroAddress rateProvider"
          );
        }
      });
    }
  }
  validateAddLiquidity(addLiquidityInput, poolState) {
    validateTokensAddLiquidity(addLiquidityInput, poolState);
  }
  validateRemoveLiquidity(input, poolState) {
    validateTokensRemoveLiquidity(input, poolState);
  }
  validateRemoveLiquidityRecovery(input, poolState) {
    validateTokensRemoveLiquidityRecovery(input, poolState);
  }
  validateWethIsEth(initPoolInput) {
    if (initPoolInput.wethIsEth) {
      const inputContainsWrappedNativeAsset = initPoolInput.amountsIn.some(
        (a) => isSameAddress(
          a.address,
          NATIVE_ASSETS[initPoolInput.chainId].wrapped
        )
      );
      if (!inputContainsWrappedNativeAsset) {
        throw new Error(
          "wethIsEth requires wrapped native asset as input"
        );
      }
    }
  }
};

// src/entities/inputValidator/composableStable/inputValidatorComposableStable.ts
var InputValidatorComposableStable = class extends InputValidatorBase {
  validateAddLiquidity(addLiquidityInput, poolState) {
    super.validateAddLiquidity(addLiquidityInput, poolState);
    validatePoolHasBpt(poolState);
  }
  validateRemoveLiquidity(input, poolState) {
    super.validateRemoveLiquidity(input, poolState);
    validatePoolHasBpt(poolState);
  }
  validateRemoveLiquidityRecovery(input, poolStateWithBalances) {
    super.validateRemoveLiquidityRecovery(input, poolStateWithBalances);
    validatePoolHasBpt(poolStateWithBalances);
  }
  validateCreatePool(input) {
    super.validateCreatePool(input);
    if (input.tokens.length > 5) {
      throw new Error(
        "Composable stable pools can have a maximum of 5 tokens"
      );
    }
    if (input.amplificationParameter <= BigInt(0)) {
      throw new Error("Amplification parameter must be greater than 0");
    }
    if (input.amplificationParameter > BigInt(5e3)) {
      throw new Error(
        "Amplification parameter must be equal or lower than 5000"
      );
    }
    return;
  }
};

// src/entities/inputValidator/cowAmm/inputValidatorCowAmm.ts
var InputValidatorCowAmm = class extends InputValidatorBase {
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  validateInitPool(initPoolInput, poolState) {
    throw new Error("Method not implemented.");
  }
  validateAddLiquidity(addLiquidityInput, poolState) {
    if (addLiquidityInput.kind !== "Proportional" /* Proportional */) {
      throw addLiquidityProportionalOnlyError(
        addLiquidityInput.kind,
        poolState.type
      );
    }
    validateTokensAddLiquidity(addLiquidityInput, poolState);
  }
  validateRemoveLiquidity(removeLiquidityInput, poolState) {
    if (removeLiquidityInput.kind !== "Proportional" /* Proportional */) {
      throw removeLiquidityProportionalOnlyError(
        removeLiquidityInput.kind,
        poolState.type
      );
    }
    validateTokensRemoveLiquidity(removeLiquidityInput, poolState);
  }
  validateCreatePool(input) {
    console.log(input);
    throw new Error("Method not implemented.");
  }
};

// src/entities/inputValidator/gyro/inputValidatorGyro.ts
var InputValidatorGyro = class extends InputValidatorBase {
  // biome-ignore lint/correctness/noUnusedVariables: <explanation>
  validateInitPool(initPoolInput, poolState) {
    throw new Error("Method not implemented.");
  }
  validateAddLiquidity(addLiquidityInput, poolState) {
    if (addLiquidityInput.kind !== "Proportional" /* Proportional */) {
      throw addLiquidityProportionalOnlyError(
        addLiquidityInput.kind,
        poolState.type
      );
    }
    validateTokensAddLiquidity(addLiquidityInput, poolState);
  }
  validateRemoveLiquidity(removeLiquidityInput, poolState) {
    if (removeLiquidityInput.kind !== "Proportional" /* Proportional */) {
      throw removeLiquidityProportionalOnlyError(
        removeLiquidityInput.kind,
        poolState.type
      );
    }
    validateTokensRemoveLiquidity(removeLiquidityInput, poolState);
  }
  validateCreatePool(input) {
    console.log(input);
    throw new Error("Method not implemented.");
  }
};

// src/entities/inputValidator/stable/inputValidatorStable.ts
var MAX_AMP = 5000n;
var MIN_AMP = 1n;
var MAX_TOKENS = 5;
var InputValidatorStable = class extends InputValidatorBase {
  validateCreatePool(input) {
    super.validateCreatePool(input);
    if (input.tokens.length > MAX_TOKENS) {
      throw new Error(
        `Stable pools can only have a maximum of ${MAX_TOKENS} tokens`
      );
    }
    if (input.amplificationParameter < MIN_AMP) {
      throw new Error(
        `Amplification parameter below minimum of ${MIN_AMP}`
      );
    }
    if (input.amplificationParameter > MAX_AMP) {
      throw new Error(
        `Amplification parameter above maximum of ${MAX_AMP}`
      );
    }
  }
  validateAddLiquidity(addLiquidityInput, poolState) {
    if (poolState.protocolVersion === 2 && addLiquidityInput.kind === "Proportional" /* Proportional */) {
      throw addLiquidityProportionalNotSupportedOnPoolTypeError(
        poolState.type
      );
    }
    validateTokensAddLiquidity(addLiquidityInput, poolState);
  }
};

// src/entities/inputValidator/weighted/inputValidatorWeighted.ts
var InputValidatorWeighted = class extends InputValidatorBase {
  validateCreatePool(input) {
    super.validateCreatePool(input);
    if (input.tokens.length > 8) {
      throw new Error("Weighted pools can have a maximum of 8 tokens");
    }
    const weightsSum = input.tokens.reduce(
      (acc, { weight }) => acc + weight,
      0n
    );
    if (weightsSum !== BigInt(1e18)) {
      throw new Error("Weights must sum to 1e18");
    }
    if (input.tokens.find(({ weight }) => weight === 0n)) {
      throw new Error("Weight cannot be 0");
    }
  }
};

// src/entities/inputValidator/boosted/inputValidatorBoosted.ts
var InputValidatorBoosted = class extends InputValidatorBase {
  validateAddLiquidityBoosted(addLiquidityInput, poolState) {
    if (poolState.protocolVersion !== 3) {
      throw new Error("protocol version must be 3");
    }
    if (addLiquidityInput.kind === "Unbalanced" /* Unbalanced */) {
      const childTokens = poolState.tokens.map((t) => {
        if (t.underlyingToken)
          return t.underlyingToken.address.toLowerCase();
        return t.address.toLowerCase();
      });
      addLiquidityInput.amountsIn.forEach((a) => {
        if (!childTokens.includes(
          a.address.toLowerCase()
        )) {
          throw new Error(
            `Address ${a.address} is not contained in the pool's child tokens.`
          );
        }
      });
    }
  }
};

// src/entities/inputValidator/inputValidator.ts
var InputValidator = class {
  constructor() {
    __publicField(this, "validators", {});
    this.validators = {
      ["ComposableStable" /* ComposableStable */]: new InputValidatorComposableStable(),
      ["CowAmm" /* CowAmm */]: new InputValidatorCowAmm(),
      ["Gyro2" /* Gyro2 */]: new InputValidatorGyro(),
      ["Gyro3" /* Gyro3 */]: new InputValidatorGyro(),
      ["GyroE" /* GyroE */]: new InputValidatorGyro(),
      ["MetaStable" /* MetaStable */]: new InputValidatorStable(),
      ["Stable" /* Stable */]: new InputValidatorStable(),
      ["Weighted" /* Weighted */]: new InputValidatorWeighted(),
      ["Boosted" /* Boosted */]: new InputValidatorBoosted()
    };
  }
  getValidator(poolType) {
    if (!this.validators[poolType]) {
      console.warn(
        `Pool type ${poolType} does not have a validator, using default.`
      );
      return new InputValidatorBase();
    }
    return this.validators[poolType];
  }
  validateInitPool(initPoolInput, poolState) {
    this.validateChain(initPoolInput.chainId);
    this.getValidator(poolState.type).validateInitPool(
      initPoolInput,
      poolState
    );
  }
  validateAddLiquidity(addLiquidityInput, poolState) {
    this.validateChain(addLiquidityInput.chainId);
    this.getValidator(poolState.type).validateAddLiquidity(
      addLiquidityInput,
      poolState
    );
  }
  validateRemoveLiquidity(removeLiquidityInput, poolState) {
    this.validateChain(removeLiquidityInput.chainId);
    this.getValidator(poolState.type).validateRemoveLiquidity(
      removeLiquidityInput,
      poolState
    );
  }
  validateRemoveLiquidityRecovery(removeLiquidityRecoveryInput, poolState) {
    this.validateChain(removeLiquidityRecoveryInput.chainId);
    this.getValidator(poolState.type).validateRemoveLiquidityRecovery(
      removeLiquidityRecoveryInput,
      poolState
    );
  }
  validateCreatePool(input) {
    this.validateChain(input.chainId);
    this.getValidator(input.poolType).validateCreatePool(input);
  }
  validateAddLiquidityBoosted(addLiquidityInput, poolState) {
    if (poolState.type !== "Boosted" /* Boosted */)
      throw new Error(
        `validateAddLiquidityBoosted on non boosted pool: ${poolState.address}:${poolState.type}`
      );
    this.validateChain(addLiquidityInput.chainId);
    this.validators["Boosted" /* Boosted */].validateAddLiquidityBoosted(addLiquidityInput, poolState);
  }
  validateChain(chainId) {
    if (chainId in CHAINS)
      return;
    throw new Error(`Unsupported ChainId: ${chainId}`);
  }
  static validateBuildCallWithPermit2(input) {
    if (input.protocolVersion !== 3) {
      throw buildCallWithPermit2ProtocolVersionError;
    }
  }
};

// src/entities/addLiquidity/addLiquidityCowAmm/index.ts

var AddLiquidityCowAmm = class {
  async query(input, poolState) {
    const poolStateWithBalances = await getPoolStateWithBalancesCowAmm(
      poolState,
      input.chainId,
      input.rpcUrl
    );
    const { bptAmount: _bptAmount } = calculateProportionalAmountsCowAmm(
      poolStateWithBalances,
      input.referenceAmount
    );
    const { tokenAmounts, bptAmount } = calculateProportionalAmountsCowAmm(
      poolStateWithBalances,
      _bptAmount
    );
    const bptOut = TokenAmount.fromRawAmount(
      new Token(input.chainId, bptAmount.address, bptAmount.decimals),
      bptAmount.rawAmount
    );
    const amountsIn = tokenAmounts.map(
      (amountIn) => TokenAmount.fromRawAmount(
        new Token(input.chainId, amountIn.address, amountIn.decimals),
        amountIn.rawAmount
      )
    );
    const tokenInIndex = void 0;
    const output = {
      to: poolState.id,
      poolType: poolState.type,
      poolId: poolState.id,
      addLiquidityKind: input.kind,
      bptOut,
      amountsIn,
      tokenInIndex,
      chainId: input.chainId,
      protocolVersion: 1
    };
    return output;
  }
  buildCall(input) {
    if (input.addLiquidityKind !== "Proportional" /* Proportional */) {
      throw new Error(
        `Error: Add Liquidity ${input.addLiquidityKind} is not supported. Cow AMM pools support Add Liquidity Proportional only.`
      );
    }
    if (input.wethIsEth) {
      throw new Error(
        "Cow AMM pools do not support adding liquidity with ETH."
      );
    }
    const amounts = getAmountsCall(input);
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: cowAmmPoolAbi,
      functionName: "joinPool",
      args: [amounts.minimumBpt, amounts.maxAmountsInWithoutBpt]
    });
    return {
      callData,
      to: input.poolId,
      value: 0n,
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/addLiquidity/index.ts
var AddLiquidity = class {
  constructor(config) {
    this.config = config;
    __publicField(this, "inputValidator", new InputValidator());
  }
  query(input, poolState) {
    this.inputValidator.validateAddLiquidity(input, poolState);
    switch (poolState.protocolVersion) {
      case 1: {
        const addLiquidity = new AddLiquidityCowAmm();
        return addLiquidity.query(
          input,
          poolState
        );
      }
      case 2: {
        const addLiquidity = new AddLiquidityV2(this.config);
        return addLiquidity.query(input, poolState);
      }
      case 3: {
        const addLiquidity = new AddLiquidityV3();
        return addLiquidity.query(input, poolState);
      }
    }
  }
  buildCall(input) {
    switch (input.protocolVersion) {
      case 1: {
        const addLiquidity = new AddLiquidityCowAmm();
        return addLiquidity.buildCall(input);
      }
      case 2: {
        if ("sender" in input) {
          const addLiquidity = new AddLiquidityV2(this.config);
          return addLiquidity.buildCall(input);
        }
        break;
      }
      case 3: {
        if (!("sender" in input)) {
          if (!("userData" in input))
            throw new Error(
              "UserData must be provided in buildCall input"
            );
          const addLiquidity = new AddLiquidityV3();
          return addLiquidity.buildCall(input);
        }
        break;
      }
    }
    throw Error("buildCall input/version mis-match");
  }
  buildCallWithPermit2(input, permit2) {
    InputValidator.validateBuildCallWithPermit2(input);
    if (!("userData" in input))
      throw new Error("UserData must be provided in buildCall input");
    const addLiquidity = new AddLiquidityV3();
    return addLiquidity.buildCallWithPermit2(input, permit2);
  }
};

// src/entities/addLiquidityBoosted/index.ts


// src/entities/addLiquidityBoosted/doAddLiquidityUnbalancedQuery.ts

var doAddLiquidityUnbalancedQuery2 = async (rpcUrl, chainId, sender, userData, poolAddress, exactUnderlyingAmountsIn) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: bptAmountOut } = await client.simulateContract({
    address: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
    abi: [
      ...balancerCompositeLiquidityRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquidityUnbalancedToERC4626Pool",
    args: [poolAddress, exactUnderlyingAmountsIn, sender, userData]
  });
  return bptAmountOut;
};

// src/entities/addLiquidityBoosted/doAddLiquidityPropotionalQuery.ts

var doAddLiquidityProportionalQuery2 = async (rpcUrl, chainId, sender, userData, poolAddress, exactBptAmountOut) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: exactAmountsIn } = await client.simulateContract({
    address: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
    abi: [
      ...balancerCompositeLiquidityRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquidityProportionalToERC4626Pool",
    args: [poolAddress, exactBptAmountOut, sender, userData]
  });
  return [...exactAmountsIn];
};

// src/entities/addLiquidityBoosted/index.ts
var AddLiquidityBoostedV3 = class {
  constructor() {
    __publicField(this, "inputValidator", new InputValidator());
  }
  async query(input, poolState) {
    this.inputValidator.validateAddLiquidityBoosted(input, {
      ...poolState,
      type: "Boosted"
    });
    const bptToken = new Token(input.chainId, poolState.address, 18);
    let bptOut;
    let amountsIn;
    const childTokens = poolState.tokens.map((t) => {
      if (t.underlyingToken) {
        return t.underlyingToken;
      }
      return {
        address: t.address,
        decimals: t.decimals,
        index: t.index
      };
    });
    switch (input.kind) {
      case "Unbalanced" /* Unbalanced */: {
        const sortedTokens = getSortedTokens(
          childTokens,
          input.chainId
        );
        const maxAmountsIn = getAmounts(sortedTokens, input.amountsIn);
        const bptAmountOut = await doAddLiquidityUnbalancedQuery2(
          input.rpcUrl,
          input.chainId,
          _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
          _nullishCoalesce(input.userData, () => ( "0x")),
          poolState.address,
          maxAmountsIn
        );
        bptOut = TokenAmount.fromRawAmount(bptToken, bptAmountOut);
        amountsIn = sortedTokens.map(
          (t, i) => TokenAmount.fromRawAmount(t, maxAmountsIn[i])
        );
        break;
      }
      case "Proportional" /* Proportional */: {
        const bptAmount = await getBptAmountFromReferenceAmountBoosted(
          input,
          poolState
        );
        const exactAmountsInNumbers = await doAddLiquidityProportionalQuery2(
          input.rpcUrl,
          input.chainId,
          _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
          _nullishCoalesce(input.userData, () => ( "0x")),
          poolState.address,
          bptAmount.rawAmount
        );
        amountsIn = childTokens.map(
          (t, i) => TokenAmount.fromRawAmount(
            new Token(input.chainId, t.address, t.decimals),
            exactAmountsInNumbers[i]
          )
        );
        bptOut = TokenAmount.fromRawAmount(
          bptToken,
          bptAmount.rawAmount
        );
        break;
      }
    }
    const output = {
      poolId: poolState.id,
      poolType: poolState.type,
      addLiquidityKind: input.kind,
      bptOut,
      amountsIn,
      chainId: input.chainId,
      protocolVersion: 3,
      userData: _nullishCoalesce(input.userData, () => ( "0x")),
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId]
    };
    return output;
  }
  buildCall(input) {
    const amounts = getAmountsCall(input);
    const wethIsEth = _nullishCoalesce(input.wethIsEth, () => ( false));
    const args = [
      input.poolId,
      amounts.maxAmountsIn,
      amounts.minimumBpt,
      wethIsEth,
      input.userData
    ];
    let callData;
    switch (input.addLiquidityKind) {
      case "Unbalanced" /* Unbalanced */: {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerCompositeLiquidityRouterAbi,
          functionName: "addLiquidityUnbalancedToERC4626Pool",
          args
        });
        break;
      }
      case "Proportional" /* Proportional */: {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerCompositeLiquidityRouterAbi,
          functionName: "addLiquidityProportionalToERC4626Pool",
          args
        });
        break;
      }
      case "SingleToken" /* SingleToken */: {
        throw new Error("SingleToken not supported");
      }
    }
    const value = getValue(input.amountsIn, wethIsEth);
    return {
      callData,
      args,
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      value,
      minBptOut: TokenAmount.fromRawAmount(
        input.bptOut.token,
        amounts.minimumBpt
      ),
      maxAmountsIn: input.amountsIn.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.maxAmountsIn[i])
      )
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/addLiquidityBuffer/index.ts


// src/entities/addLiquidityBuffer/doAddLiquidityQuery.ts

var doAddLiquidityQuery2 = async (rpcUrl, chainId, wrappedToken, exactSharesToIssue) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const {
    result: [amountUnderlyingIn, amountWrappedIn]
  } = await client.simulateContract({
    address: BALANCER_BUFFER_ROUTER[chainId],
    abi: [
      ...balancerBufferRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryAddLiquidityToBuffer",
    args: [wrappedToken, exactSharesToIssue]
  });
  return { amountUnderlyingIn, amountWrappedIn };
};

// src/entities/addLiquidityBuffer/index.ts
var AddLiquidityBufferV3 = class {
  async query(input, bufferState) {
    const { amountUnderlyingIn, amountWrappedIn } = await doAddLiquidityQuery2(
      input.rpcUrl,
      input.chainId,
      bufferState.wrappedToken.address,
      input.exactSharesToIssue
    );
    const underlyingToken = new Token(
      input.chainId,
      bufferState.underlyingToken.address,
      bufferState.underlyingToken.decimals
    );
    const underlyingAmountIn = TokenAmount.fromRawAmount(
      underlyingToken,
      amountUnderlyingIn
    );
    const wrappedToken = new Token(
      input.chainId,
      bufferState.wrappedToken.address,
      bufferState.wrappedToken.decimals
    );
    const wrappedAmountIn = TokenAmount.fromRawAmount(
      wrappedToken,
      amountWrappedIn
    );
    const output = {
      exactSharesToIssue: input.exactSharesToIssue,
      underlyingAmountIn,
      wrappedAmountIn,
      chainId: input.chainId,
      protocolVersion: 3,
      to: BALANCER_BUFFER_ROUTER[input.chainId]
    };
    return output;
  }
  buildCall(input) {
    const maxUnderlyingAmountIn = TokenAmount.fromRawAmount(
      input.underlyingAmountIn.token,
      input.slippage.applyTo(input.underlyingAmountIn.amount)
    );
    const maxWrappedAmountIn = TokenAmount.fromRawAmount(
      input.wrappedAmountIn.token,
      input.slippage.applyTo(input.wrappedAmountIn.amount)
    );
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerBufferRouterAbi,
      functionName: "addLiquidityToBuffer",
      args: [
        input.wrappedAmountIn.token.address,
        maxUnderlyingAmountIn.amount,
        maxWrappedAmountIn.amount,
        input.exactSharesToIssue
      ]
    });
    return {
      callData,
      to: BALANCER_BUFFER_ROUTER[input.chainId],
      value: 0n,
      // Default to 0 as native not supported
      maxUnderlyingAmountIn,
      maxWrappedAmountIn,
      exactSharesToIssue: input.exactSharesToIssue
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/addLiquidityNested/addLiquidityNestedV2/index.ts


// src/entities/relayer/index.ts









// src/entities/relayer/authorization.ts

var _RelayerAuthorization = class _RelayerAuthorization {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
};
__publicField(_RelayerAuthorization, "encodeCalldataAuthorization", (calldata, deadline, signatureHex) => {
  const encodedDeadline = _viem.pad.call(void 0, _viem.toHex.call(void 0, deadline), { size: 32 });
  const { v, r, s } = _viem.parseSignature.call(void 0, signatureHex);
  const encodedV = _viem.pad.call(void 0, _viem.toHex.call(void 0, v), { size: 32 });
  const encodedR = _viem.pad.call(void 0, r, { size: 32 });
  const encodedS = _viem.pad.call(void 0, s, { size: 32 });
  return _viem.concat.call(void 0, [
    calldata,
    encodedDeadline,
    encodedV,
    encodedR,
    encodedS
  ]);
});
__publicField(_RelayerAuthorization, "signJoinAuthorization", (client, signerAddress, allowedSender, allowedCalldata, deadline, nonce) => _RelayerAuthorization.signAuthorizationFor(
  "JoinPool" /* JoinPool */,
  client,
  signerAddress,
  allowedSender,
  allowedCalldata,
  deadline,
  nonce
));
__publicField(_RelayerAuthorization, "signExitAuthorization", (client, signerAddress, allowedSender, allowedCalldata, deadline, nonce) => _RelayerAuthorization.signAuthorizationFor(
  "ExitPool" /* ExitPool */,
  client,
  signerAddress,
  allowedSender,
  allowedCalldata,
  deadline,
  nonce
));
__publicField(_RelayerAuthorization, "signSwapAuthorization", (client, signerAddress, allowedSender, allowedCalldata, deadline, nonce) => _RelayerAuthorization.signAuthorizationFor(
  "Swap" /* Swap */,
  client,
  signerAddress,
  allowedSender,
  allowedCalldata,
  deadline,
  nonce
));
__publicField(_RelayerAuthorization, "signBatchSwapAuthorization", (client, signerAddress, allowedSender, allowedCalldata, deadline, nonce) => _RelayerAuthorization.signAuthorizationFor(
  "BatchSwap" /* BatchSwap */,
  client,
  signerAddress,
  allowedSender,
  allowedCalldata,
  deadline,
  nonce
));
__publicField(_RelayerAuthorization, "signSetRelayerApprovalAuthorization", (client, signerAddress, allowedSender, allowedCalldata, deadline, nonce) => _RelayerAuthorization.signAuthorizationFor(
  "SetRelayerApproval" /* SetRelayerApproval */,
  client,
  signerAddress,
  allowedSender,
  allowedCalldata,
  deadline,
  nonce
));
__publicField(_RelayerAuthorization, "signAuthorizationFor", async (type, client, signerAddress, allowedSender, allowedCalldata, deadline = MAX_UINT256, nonce) => {
  const chainId = await client.getChainId();
  const verifyingContract = VAULT[chainId];
  const domain = {
    name: "Balancer V2 Vault",
    version: "1",
    chainId,
    verifyingContract
  };
  const types = {
    [type]: [
      { name: "calldata", type: "bytes" },
      { name: "sender", type: "address" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" }
    ]
  };
  let _nonce = nonce;
  if (_nonce === void 0) {
    _nonce = await client.readContract({
      abi: vaultV2Abi,
      address: verifyingContract,
      functionName: "getNextNonce",
      args: [signerAddress]
    });
  }
  const signature = client.signTypedData({
    account: signerAddress,
    domain,
    types,
    primaryType: type,
    message: {
      calldata: allowedCalldata,
      sender: allowedSender,
      nonce: _nonce,
      deadline
    }
  });
  return signature;
});
var RelayerAuthorization = _RelayerAuthorization;

// src/entities/relayer/index.ts
var _Relayer = class _Relayer {
  // Read-only reference: it is not deleted after a read.
  static toChainedReference(key, isTemporary = true) {
    const prefix = isTemporary ? _Relayer.CHAINED_REFERENCE_TEMP_PREFIX : _Relayer.CHAINED_REFERENCE_READONLY_PREFIX;
    const paddedKey = _viem.pad.call(void 0, _viem.toHex.call(void 0, key), { dir: "left", size: 30 });
    const chainedReferenceWithPrefix = _viem.concat.call(void 0, [prefix, paddedKey]);
    return _viem.hexToBigInt.call(void 0, chainedReferenceWithPrefix);
  }
  static fromChainedReference(ref) {
    const chainedReferenceWithoutPrefix = _viem.slice.call(void 0, _viem.toHex.call(void 0, ref), 2);
    return _viem.hexToBigInt.call(void 0, chainedReferenceWithoutPrefix);
  }
  static encodePeekChainedReferenceValue(reference) {
    return _viem.encodeFunctionData.call(void 0, {
      abi: batchRelayerLibraryAbi,
      functionName: "peekChainedReferenceValue",
      args: [reference]
    });
  }
  static encodeSetRelayerApproval(relayerAddress, approved, signature) {
    return _viem.encodeFunctionData.call(void 0, {
      abi: batchRelayerLibraryAbi,
      functionName: "setRelayerApproval",
      args: [relayerAddress, approved, signature]
    });
  }
  static encodeApproveVault(tokenAddress, maxAmount) {
    return _viem.encodeFunctionData.call(void 0, {
      abi: batchRelayerLibraryAbi,
      functionName: "approveVault",
      args: [tokenAddress, maxAmount]
    });
  }
};
__publicField(_Relayer, "CHAINED_REFERENCE_TEMP_PREFIX", "0xba10");
// Temporary reference: it is deleted after a read.
__publicField(_Relayer, "CHAINED_REFERENCE_READONLY_PREFIX", "0xba11");
__publicField(_Relayer, "signRelayerApproval", async (relayerAddress, signerAddress, client) => {
  const approval = _viem.encodeFunctionData.call(void 0, {
    abi: vaultV2Abi,
    functionName: "setRelayerApproval",
    args: [signerAddress, relayerAddress, true]
  });
  const signature = await RelayerAuthorization.signSetRelayerApprovalAuthorization(
    client,
    signerAddress,
    relayerAddress,
    approval
  );
  const encodedSignature = RelayerAuthorization.encodeCalldataAuthorization(
    "0x",
    MAX_UINT256,
    signature
  );
  return encodedSignature;
});
var Relayer = _Relayer;

// src/entities/addLiquidityNested/addLiquidityNestedV2/encodeCalls.ts

var encodeCalls = (callsAttributes) => {
  const encodedCalls = [];
  const values = [];
  for (const callAttributes of callsAttributes) {
    const {
      wethIsEth,
      chainId,
      sortedTokens,
      poolId,
      poolAddress,
      poolType,
      kind,
      sender,
      recipient,
      maxAmountsIn,
      minBptOut,
      fromInternalBalance,
      outputReference
    } = callAttributes;
    const tokensIn = wethIsEth ? replaceWrapped([...sortedTokens], chainId) : [...sortedTokens];
    const amountsIn = [...sortedTokens].map((t, i) => {
      return TokenAmount.fromRawAmount(t, maxAmountsIn[i].amount);
    });
    const value = getValue(amountsIn, !!wethIsEth);
    const _maxAmountsIn = maxAmountsIn.map((a) => a.amount);
    const amountsInWithoutBpt = _maxAmountsIn.filter(
      (_, i) => !sortedTokens[i].isSameAddress(poolAddress)
    );
    const userData = getUserData(poolType, amountsInWithoutBpt, minBptOut);
    const joinPoolRequest = {
      assets: tokensIn.map((t) => t.address),
      // with BPT
      maxAmountsIn: _maxAmountsIn,
      // with BPT
      userData,
      // wihtout BPT
      fromInternalBalance
    };
    const encodedCall = _viem.encodeFunctionData.call(void 0, {
      abi: batchRelayerLibraryAbi,
      functionName: "joinPool",
      args: [
        poolId,
        kind,
        sender,
        recipient,
        joinPoolRequest,
        value,
        outputReference
      ]
    });
    encodedCalls.push(encodedCall);
    values.push(value);
  }
  return { encodedCalls, values };
};
var getUserData = (poolType, amountsInWithoutBpt, minBptOut) => {
  switch (poolType) {
    case "Weighted" /* Weighted */:
      return WeightedEncoder.addLiquidityUnbalanced(
        amountsInWithoutBpt,
        minBptOut
      );
    case "ComposableStable" /* ComposableStable */:
      return ComposableStableEncoder.addLiquidityUnbalanced(
        amountsInWithoutBpt,
        minBptOut
      );
    default:
      throw new Error(`Unsupported pool type: ${poolType}`);
  }
};

// src/entities/addLiquidityNested/addLiquidityNestedV2/doAddLiquidityNestedQuery.ts






var doAddLiquidityNestedQuery = async (chainId, rpcUrl, encodedMulticall) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { data } = await client.call({
    ...EMPTY_SENDER,
    to: BALANCER_RELAYER[chainId],
    data: encodedMulticall
  });
  const result = _viem.decodeFunctionResult.call(void 0, {
    abi: [
      ...balancerRelayerAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "vaultActionsQueryMulticall",
    data
  });
  const peekedValue = _viem.decodeAbiParameters.call(void 0, 
    [{ type: "uint256" }],
    result[result.length - 1]
  )[0];
  return peekedValue;
};

// src/entities/types.ts
var PoolKind = /* @__PURE__ */ ((PoolKind2) => {
  PoolKind2[PoolKind2["WEIGHTED"] = 0] = "WEIGHTED";
  PoolKind2[PoolKind2["LEGACY_STABLE"] = 1] = "LEGACY_STABLE";
  PoolKind2[PoolKind2["COMPOSABLE_STABLE"] = 2] = "COMPOSABLE_STABLE";
  PoolKind2[PoolKind2["COMPOSABLE_STABLE_V2"] = 3] = "COMPOSABLE_STABLE_V2";
  return PoolKind2;
})(PoolKind || {});

// src/entities/addLiquidityNested/addLiquidityNestedV2/getQueryCallsAttributes.ts
var getQueryCallsAttributes = ({ amountsIn, chainId, fromInternalBalance }, pools) => {
  const poolsSortedByLevel = pools.sort((a, b) => a.level - b.level);
  const accountAddressPlaceholder = ZERO_ADDRESS;
  const calls = [];
  for (const pool of poolsSortedByLevel) {
    const sortedTokens = pool.tokens.sort((a, b) => a.index - b.index).map((t) => new Token(chainId, t.address, t.decimals));
    const maxAmountsIn = getMaxAmountsIn(sortedTokens, amountsIn, calls);
    if (maxAmountsIn.every((a) => a.amount === 0n && !a.isRef)) {
      continue;
    }
    calls.push({
      chainId,
      sortedTokens,
      poolId: pool.id,
      poolAddress: pool.address,
      poolType: pool.type,
      kind: pool.type === "ComposableStable" /* ComposableStable */ ? 3 /* COMPOSABLE_STABLE_V2 */ : 0 /* WEIGHTED */,
      sender: getSender(maxAmountsIn, accountAddressPlaceholder, chainId),
      recipient: "0x",
      // set as placeholder - will be updated after all calls are created
      maxAmountsIn,
      minBptOut: 0n,
      // limits set to zero for query calls
      fromInternalBalance: _nullishCoalesce(fromInternalBalance, () => ( false)),
      outputReference: Relayer.toChainedReference(
        BigInt(poolsSortedByLevel.indexOf(pool))
      )
    });
  }
  updateRecipients(calls, accountAddressPlaceholder);
  return calls;
};
var getMaxAmountsIn = (sortedTokens, amountsIn, calls) => {
  return sortedTokens.map((token) => {
    const amountIn = amountsIn.find((a) => token.isSameAddress(a.address));
    if (amountIn !== void 0) {
      return {
        amount: amountIn.rawAmount,
        isRef: false
      };
    }
    const previousCall = calls.find(
      (call) => getPoolAddress(call.poolId) === token.address
    );
    if (previousCall !== void 0) {
      return {
        amount: previousCall.outputReference,
        isRef: true
      };
    }
    return {
      amount: 0n,
      isRef: false
    };
  });
};
var getSender = (maxAmountsIn, accountAddress, chainId) => {
  return maxAmountsIn.some((a) => !a.isRef && a.amount > 0n) ? accountAddress : BALANCER_RELAYER[chainId];
};
var updateRecipients = (calls, accountAddress) => {
  for (const call of calls) {
    const followingCall = calls.find(
      (_call) => _call.maxAmountsIn.some((a) => a.amount === call.outputReference)
    );
    if (followingCall !== void 0) {
      call.recipient = followingCall.sender;
    } else {
      call.recipient = accountAddress;
    }
  }
};

// src/entities/addLiquidityNested/addLiquidityNestedV2/validateInputs.ts
var validateQueryInput = (input, nestedPoolState) => {
  const mainTokens = nestedPoolState.mainTokens.map(
    (t) => new Token(input.chainId, t.address, t.decimals)
  );
  const amountsIn = input.amountsIn.map((amountIn) => {
    const tokenIn = mainTokens.find(
      (t) => t.isSameAddress(amountIn.address)
    );
    if (tokenIn === void 0) {
      throw new Error(
        `Adding liquidity with ${amountIn.address} requires it to exist within mainTokens`
      );
    }
    return TokenAmount.fromRawAmount(tokenIn, amountIn.rawAmount);
  });
  return amountsIn;
};
var validateBuildCallInput = (input) => {
  const chainId = input.callsAttributes[0].chainId;
  if (input.wethIsEth) {
    if (!input.amountsIn.some(
      (a) => a.token.isUnderlyingEqual(NATIVE_ASSETS[chainId])
    )) {
      throw new Error(
        "Adding liquidity with native asset requires wrapped native asset to exist within amountsIn"
      );
    }
  }
};

// src/entities/addLiquidityNested/addLiquidityNestedV2/index.ts
var AddLiquidityNestedV2 = class {
  async query(input, nestedPoolState) {
    const amountsIn = validateQueryInput(input, nestedPoolState);
    const callsAttributes = getQueryCallsAttributes(
      input,
      nestedPoolState.pools
    );
    const { encodedCalls } = encodeCalls(callsAttributes);
    const peekCall = Relayer.encodePeekChainedReferenceValue(
      callsAttributes[callsAttributes.length - 1].outputReference
    );
    encodedCalls.push(peekCall);
    const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRelayerAbi,
      functionName: "vaultActionsQueryMulticall",
      args: [encodedCalls]
    });
    const peekedValue = await doAddLiquidityNestedQuery(
      input.chainId,
      input.rpcUrl,
      encodedMulticall
    );
    const tokenOut = new Token(
      input.chainId,
      callsAttributes[callsAttributes.length - 1].poolAddress,
      18
    );
    const bptOut = TokenAmount.fromRawAmount(tokenOut, peekedValue);
    return {
      to: BALANCER_RELAYER[input.chainId],
      callsAttributes,
      amountsIn,
      bptOut,
      protocolVersion: 2
    };
  }
  buildCall(input) {
    validateBuildCallInput(input);
    const minBptOut = input.slippage.applyTo(input.bptOut.amount, -1);
    input.callsAttributes[input.callsAttributes.length - 1] = {
      ...input.callsAttributes[input.callsAttributes.length - 1],
      minBptOut
    };
    input.callsAttributes = input.callsAttributes.map((call) => {
      return {
        ...call,
        sender: call.sender === ZERO_ADDRESS ? input.accountAddress : call.sender,
        recipient: call.recipient === ZERO_ADDRESS ? input.accountAddress : call.recipient,
        wethIsEth: input.wethIsEth
      };
    });
    const { encodedCalls, values } = encodeCalls(input.callsAttributes);
    if (input.relayerApprovalSignature !== void 0) {
      encodedCalls.unshift(
        Relayer.encodeSetRelayerApproval(
          BALANCER_RELAYER[input.callsAttributes[0].chainId],
          true,
          input.relayerApprovalSignature
        )
      );
    }
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRelayerAbi,
      functionName: "multicall",
      args: [encodedCalls]
    });
    const accumulatedValue = values.reduce((acc, value) => {
      return acc + value;
    }, 0n);
    return {
      callData,
      to: BALANCER_RELAYER[input.callsAttributes[0].chainId],
      value: accumulatedValue,
      minBptOut
    };
  }
};

// src/entities/addLiquidityNested/addLiquidityNestedV3/index.ts






var AddLiquidityNestedV3 = class {
  constructor() {
    __publicField(this, "doQueryAddLiquidityUnbalancedNestedPool", async ({ rpcUrl, chainId }, parentPool, tokensIn, maxAmountsIn, sender, userData) => {
      const client = _viem.createPublicClient.call(void 0, {
        transport: _viem.http.call(void 0, rpcUrl),
        chain: CHAINS[chainId]
      });
      const { result: bptAmountOut } = await client.simulateContract({
        address: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
        abi: [
          ...balancerCompositeLiquidityRouterAbi,
          ...vaultV3Abi,
          ...vaultExtensionAbi_V3,
          ...permit2Abi
        ],
        functionName: "queryAddLiquidityUnbalancedNestedPool",
        args: [parentPool, tokensIn, maxAmountsIn, sender, userData]
      });
      return bptAmountOut;
    });
  }
  /**
   *
   * @param input amountsIn can be any order and does not need all tokens. Tokens must be tokens of child pools and must not be BPT.
   * @param nestedPoolState
   * @returns
   */
  async query(input, nestedPoolState) {
    validateQueryInput(input, nestedPoolState);
    const parentPool = nestedPoolState.pools.reduce(
      (max2, curr) => curr.level > max2.level ? curr : max2
    );
    const mainTokens = nestedPoolState.mainTokens.map(
      (t) => new Token(input.chainId, t.address, t.decimals)
    );
    const maxAmountsIn = getAmounts(mainTokens, input.amountsIn, 0n);
    const bptAmountOut = await this.doQueryAddLiquidityUnbalancedNestedPool(
      input,
      parentPool.address,
      nestedPoolState.mainTokens.map((t) => t.address),
      maxAmountsIn,
      _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
      _nullishCoalesce(input.userData, () => ( "0x"))
    );
    const bptToken = new Token(input.chainId, parentPool.address, 18);
    return {
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      parentPool: parentPool.address,
      chainId: input.chainId,
      amountsIn: mainTokens.map(
        (t, i) => TokenAmount.fromRawAmount(t, maxAmountsIn[i])
      ),
      bptOut: TokenAmount.fromRawAmount(bptToken, bptAmountOut),
      protocolVersion: 3,
      userData: _nullishCoalesce(input.userData, () => ( "0x"))
    };
  }
  buildCall(input) {
    const minBptOut = input.slippage.applyTo(input.bptOut.amount, -1);
    const wethIsEth = _nullishCoalesce(input.wethIsEth, () => ( false));
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "addLiquidityUnbalancedNestedPool",
      args: [
        input.parentPool,
        input.amountsIn.map((a) => a.token.address),
        input.amountsIn.map((a) => a.amount),
        minBptOut,
        wethIsEth,
        input.userData
      ]
    });
    return {
      callData,
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      value: getValue(input.amountsIn, wethIsEth),
      minBptOut
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/addLiquidityNested/index.ts
var AddLiquidityNested = class {
  async query(input, nestedPoolState) {
    validateNestedPoolState(nestedPoolState);
    switch (nestedPoolState.protocolVersion) {
      case 1: {
        throw new Error(
          "AddLiquidityNested not supported for ProtocolVersion 1."
        );
      }
      case 2: {
        const addLiquidity = new AddLiquidityNestedV2();
        return addLiquidity.query(input, nestedPoolState);
      }
      case 3: {
        const addLiquidity = new AddLiquidityNestedV3();
        return addLiquidity.query(input, nestedPoolState);
      }
    }
  }
  buildCall(input) {
    switch (input.protocolVersion) {
      case 2: {
        const addLiquidity = new AddLiquidityNestedV2();
        return addLiquidity.buildCall(input);
      }
      case 3: {
        const addLiquidity = new AddLiquidityNestedV3();
        return addLiquidity.buildCall(input);
      }
    }
  }
  buildCallWithPermit2(input, permit2) {
    const addLiquidity = new AddLiquidityNestedV3();
    return addLiquidity.buildCallWithPermit2(input, permit2);
  }
  /**
   * Helper to construct AddLiquidityNestedCallInput with proper type resolving.
   * @param queryOutput
   * @param params
   * @returns AddLiquidityNestedCallInput
   */
  buildAddLiquidityInput(queryOutput, params) {
    if (queryOutput.protocolVersion === 2) {
      return {
        ...queryOutput,
        protocolVersion: 2,
        slippage: params.slippage,
        accountAddress: params.accountAddress,
        relayerApprovalSignature: params.relayerApprovalSignature,
        wethIsEth: params.wethIsEth
      };
    }
    return {
      ...queryOutput,
      protocolVersion: 3,
      slippage: params.slippage
    };
  }
};

// src/entities/createPool/createPoolV2/composableStable/createPoolComposableStable.ts


// src/entities/utils/getRandomBytes32.ts
var getRandomBytes32 = () => {
  const getRandomBytes8 = () => Math.random().toString(16).slice(2, 10);
  const randomBytes32 = Array(8).fill(null).map(getRandomBytes8).join("");
  return `0x${randomBytes32}`;
};

// src/entities/createPool/createPoolV2/composableStable/createPoolComposableStable.ts
var CreatePoolComposableStableV2 = class {
  buildCall(input) {
    const args = this.parseCreateFunctionArgs(input);
    const encodedCall = _viem.encodeFunctionData.call(void 0, {
      abi: composableStableFactoryV6Abi_V2,
      functionName: "create",
      args
    });
    return {
      callData: encodedCall,
      to: COMPOSABLE_STABLE_POOL_FACTORY[input.chainId]
    };
  }
  parseCreateFunctionArgs(input) {
    const sortedTokenParams = sortByAddress(input.tokens);
    const [tokens, rateProviders, tokenRateCacheDurations] = sortedTokenParams.reduce(
      (acc, curr) => {
        acc[0].push(curr.address);
        acc[1].push(curr.rateProvider);
        acc[2].push(curr.tokenRateCacheDuration);
        return acc;
      },
      [[], [], []]
    );
    return [
      input.name || input.symbol,
      input.symbol,
      tokens,
      input.amplificationParameter,
      rateProviders,
      tokenRateCacheDurations,
      input.exemptFromYieldProtocolFeeFlag,
      _viem.parseEther.call(void 0, input.swapFee),
      input.poolOwnerAddress,
      input.salt || getRandomBytes32()
    ];
  }
};

// src/entities/createPool/createPoolV2/weighted/createPoolWeighted.ts

var CreatePoolWeightedV2 = class {
  buildCall(input) {
    const args = this.parseCreateFunctionArgs(input);
    const encodedCall = _viem.encodeFunctionData.call(void 0, {
      abi: weightedPoolFactoryV4Abi_V2,
      functionName: "create",
      args
    });
    return {
      callData: encodedCall,
      to: WEIGHTED_POOL_FACTORY_BALANCER_V2[input.chainId]
    };
  }
  parseCreateFunctionArgs(input) {
    const sortedTokenParams = sortByAddress(input.tokens);
    const [tokens, weights, rateProviders] = sortedTokenParams.reduce(
      (acc, curr) => {
        acc[0].push(curr.address);
        acc[1].push(curr.weight);
        acc[2].push(curr.rateProvider);
        return acc;
      },
      [[], [], []]
    );
    return [
      input.name || input.symbol,
      input.symbol,
      tokens,
      weights,
      rateProviders,
      _viem.parseEther.call(void 0, input.swapFee),
      input.poolOwnerAddress,
      input.salt || getRandomBytes32()
    ];
  }
};

// src/entities/createPool/createPoolV2/index.ts
var CreatePoolV2 = class {
  constructor() {
    __publicField(this, "createPoolTypes", {});
    this.createPoolTypes = {
      ["Weighted" /* Weighted */]: new CreatePoolWeightedV2(),
      ["ComposableStable" /* ComposableStable */]: new CreatePoolComposableStableV2()
    };
  }
  getCreatePool(poolType) {
    if (!this.createPoolTypes[poolType]) {
      throw new Error("Unsupported pool type: ${poolType}");
    }
    return this.createPoolTypes[poolType];
  }
  buildCall(input) {
    return this.getCreatePool(input.poolType).buildCall(input);
  }
};

// src/entities/createPool/createPoolV3/weighted/createPoolWeighted.ts

var CreatePoolWeightedV3 = class {
  buildCall(input) {
    const callData = this.encodeCall(input);
    return {
      callData,
      to: WEIGHTED_POOL_FACTORY_BALANCER_V3[input.chainId]
    };
  }
  encodeCall(input) {
    const sortedTokenParams = sortByAddress(input.tokens);
    const [tokenConfigs, normalizedWeights] = sortedTokenParams.reduce(
      (acc, {
        address: tokenAddress,
        rateProvider,
        weight,
        tokenType,
        paysYieldFees
      }) => {
        acc[0].push({
          token: tokenAddress,
          tokenType,
          rateProvider,
          paysYieldFees: _nullishCoalesce(paysYieldFees, () => ( false))
        });
        acc[1].push(weight);
        return acc;
      },
      [[], []]
    );
    const roleAccounts = {
      pauseManager: input.pauseManager,
      swapFeeManager: input.swapFeeManager,
      poolCreator: _viem.zeroAddress
    };
    const args = [
      input.name || input.symbol,
      input.symbol,
      tokenConfigs,
      normalizedWeights,
      roleAccounts,
      input.swapFeePercentage,
      input.poolHooksContract,
      input.enableDonation,
      input.disableUnbalancedLiquidity,
      input.salt || getRandomBytes32()
    ];
    return _viem.encodeFunctionData.call(void 0, {
      abi: weightedPoolFactoryAbi_V3,
      functionName: "create",
      args
    });
  }
};

// src/entities/createPool/createPoolV3/stable/createPoolStable.ts

var CreatePoolStableV3 = class {
  buildCall(input) {
    const callData = this.encodeCall(input);
    return {
      callData,
      to: STABLE_POOL_FACTORY_BALANCER_V3[input.chainId]
    };
  }
  encodeCall(input) {
    const sortedTokenConfigs = sortByAddress(input.tokens);
    const roleAccounts = {
      pauseManager: input.pauseManager,
      swapFeeManager: input.swapFeeManager,
      poolCreator: _viem.zeroAddress
      // balancer core pool types are not allowed to have a creator
    };
    const args = [
      input.name || input.symbol,
      input.symbol,
      sortedTokenConfigs.map(
        ({ address, rateProvider, tokenType, paysYieldFees }) => ({
          token: address,
          tokenType,
          rateProvider,
          paysYieldFees
        })
      ),
      input.amplificationParameter,
      roleAccounts,
      input.swapFeePercentage,
      input.poolHooksContract,
      input.enableDonation,
      input.disableUnbalancedLiquidity,
      input.salt || getRandomBytes32()
    ];
    return _viem.encodeFunctionData.call(void 0, {
      abi: stablePoolFactoryAbi_V3,
      functionName: "create",
      args
    });
  }
};

// src/entities/createPool/createPoolV3/index.ts
var CreatePoolV3 = class {
  constructor() {
    __publicField(this, "createPoolTypes", {});
    this.createPoolTypes = {
      ["Weighted" /* Weighted */]: new CreatePoolWeightedV3(),
      ["Stable" /* Stable */]: new CreatePoolStableV3()
    };
  }
  getCreatePool(poolType) {
    if (!this.createPoolTypes[poolType]) {
      throw new Error("Unsupported pool type: ${poolType}");
    }
    return this.createPoolTypes[poolType];
  }
  buildCall(input) {
    return this.getCreatePool(input.poolType).buildCall(input);
  }
};

// src/entities/createPool/index.ts
var CreatePool = class {
  constructor() {
    __publicField(this, "inputValidator");
    this.inputValidator = new InputValidator();
  }
  buildCall(input) {
    this.inputValidator.validateCreatePool(input);
    switch (input.protocolVersion) {
      case 2:
        return new CreatePoolV2().buildCall(input);
      case 3:
        return new CreatePoolV3().buildCall(input);
    }
  }
};

// src/entities/initBuffer/index.ts


// src/entities/initBuffer/doInitBufferQuery.ts

var doInitBufferQuery = async (rpcUrl, chainId, wrappedToken, exactAmountUnderlyingIn, exactAmountWrappedIn) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: issuedShares } = await client.simulateContract({
    address: BALANCER_BUFFER_ROUTER[chainId],
    abi: [
      ...balancerBufferRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryInitializeBuffer",
    args: [wrappedToken, exactAmountUnderlyingIn, exactAmountWrappedIn]
  });
  return { issuedShares };
};

// src/entities/initBuffer/index.ts
var InitBufferV3 = class {
  async query(input) {
    const { issuedShares } = await doInitBufferQuery(
      input.rpcUrl,
      input.chainId,
      input.wrappedAmountIn.address,
      input.underlyingAmountIn.rawAmount,
      input.wrappedAmountIn.rawAmount
    );
    const underlyingAmountIn = TokenAmount.fromInputAmount(
      input.underlyingAmountIn,
      input.chainId
    );
    const wrappedAmountIn = TokenAmount.fromInputAmount(
      input.wrappedAmountIn,
      input.chainId
    );
    const output = {
      issuedShares,
      underlyingAmountIn,
      wrappedAmountIn,
      chainId: input.chainId,
      protocolVersion: 3,
      to: BALANCER_BUFFER_ROUTER[input.chainId]
    };
    return output;
  }
  buildCall(input) {
    const minIssuedShares = input.slippage.applyTo(input.issuedShares, -1);
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerBufferRouterAbi,
      functionName: "initializeBuffer",
      args: [
        input.wrappedAmountIn.token.address,
        input.underlyingAmountIn.amount,
        input.wrappedAmountIn.amount,
        minIssuedShares
      ]
    });
    return {
      callData,
      to: BALANCER_BUFFER_ROUTER[input.chainId],
      value: 0n,
      // Default to 0 as native not supported
      minIssuedShares
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/initPool/initPoolV2/composableStable/initPoolComposableStable.ts

var InitPoolComposableStable = class {
  buildCall(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = this.getAmounts(input, poolState.address, sortedTokens);
    const userData = ComposableStableEncoder.encodeInitPoolUserData(amounts);
    const { args } = parseAddLiquidityArgs({
      ...input,
      poolId: poolState.id,
      sortedTokens,
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: _nullishCoalesce(input.fromInternalBalance, () => ( false)),
      wethIsEth: !!input.wethIsEth
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "joinPool",
      args
    });
    const amountsIn = input.amountsIn.map((a) => {
      const token = new Token(input.chainId, a.address, a.decimals);
      return TokenAmount.fromRawAmount(token, a.rawAmount);
    });
    return {
      callData,
      to: VAULT[input.chainId],
      value: getValue(amountsIn, !!input.wethIsEth)
    };
  }
  getAmounts(input, poolAddress, poolTokens) {
    const bptIndex = poolTokens.findIndex((t) => t.address === poolAddress);
    const maxAmountsIn = getAmounts(poolTokens, [
      ...input.amountsIn.slice(0, bptIndex),
      {
        address: poolAddress,
        decimals: 18,
        rawAmount: MAX_UINT256
      },
      ...input.amountsIn.slice(bptIndex)
    ]);
    const amountsIn = getAmounts(poolTokens, [
      ...input.amountsIn.slice(0, bptIndex),
      {
        address: poolAddress,
        decimals: 18,
        rawAmount: BigInt(0)
      },
      ...input.amountsIn.slice(bptIndex)
    ]);
    return {
      maxAmountsIn,
      amountsIn
    };
  }
};

// src/entities/initPool/initPoolV2/weighted/initPoolWeighted.ts

var InitPoolWeighted = class {
  buildCall(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = this.getAmounts(input, sortedTokens);
    const userData = WeightedEncoder.encodeInitPoolUserData(amounts);
    const { args } = parseAddLiquidityArgs({
      ...input,
      poolId: poolState.id,
      sortedTokens,
      maxAmountsIn: amounts.maxAmountsIn,
      userData,
      fromInternalBalance: _nullishCoalesce(input.fromInternalBalance, () => ( false))
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "joinPool",
      args
    });
    const amountsIn = input.amountsIn.map((a) => {
      const token = new Token(input.chainId, a.address, a.decimals);
      return TokenAmount.fromRawAmount(token, a.rawAmount);
    });
    return {
      callData,
      to: VAULT[input.chainId],
      value: getValue(amountsIn, !!input.wethIsEth)
    };
  }
  getAmounts(input, poolTokens) {
    return {
      maxAmountsIn: getAmounts(poolTokens, input.amountsIn)
    };
  }
};

// src/entities/initPool/initPoolV2/index.ts
var InitPoolV2 = class {
  constructor(config) {
    __publicField(this, "initPoolTypes", {});
    const { initPoolTypes: customAddLiquidityInitTypes } = config || {};
    this.initPoolTypes = {
      ["Weighted" /* Weighted */]: new InitPoolWeighted(),
      ["ComposableStable" /* ComposableStable */]: new InitPoolComposableStable(),
      ...customAddLiquidityInitTypes
    };
  }
  getInitPool(poolType) {
    if (!this.initPoolTypes[poolType]) {
      throw new Error("Unsupported pool type: ${poolType}");
    }
    return this.initPoolTypes[poolType];
  }
  buildCall(input, poolState) {
    return this.getInitPool(poolState.type).buildCall(input, poolState);
  }
};

// src/entities/initPool/initPoolV3.ts

var InitPoolV3 = class {
  buildCall(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const { exactAmountsIn } = this.getAmounts(input, sortedTokens);
    const { args } = parseInitializeArgs({
      ...input,
      exactAmountsIn,
      poolAddress: poolState.address,
      sortedTokens
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "initialize",
      args
    });
    const amountsIn = input.amountsIn.map((a) => {
      const token = new Token(input.chainId, a.address, a.decimals);
      return TokenAmount.fromRawAmount(token, a.rawAmount);
    });
    return {
      callData,
      to: BALANCER_ROUTER[input.chainId],
      value: getValue(amountsIn, !!input.wethIsEth)
    };
  }
  getAmounts(input, tokens) {
    return {
      exactAmountsIn: getAmounts(tokens, input.amountsIn)
    };
  }
};

// src/entities/initPool/index.ts
var InitPool = class {
  constructor(config) {
    this.config = config;
    __publicField(this, "inputValidator", new InputValidator());
  }
  buildCall(input, poolState) {
    this.inputValidator.validateInitPool(input, poolState);
    switch (poolState.protocolVersion) {
      case 2:
        return new InitPoolV2().buildCall(
          input,
          poolState
        );
      case 3:
        return new InitPoolV3().buildCall(
          input,
          poolState
        );
      default:
        throw Error(
          `SDK does not support init for vault version: ${poolState.protocolVersion}`
        );
    }
  }
};

// src/entities/permitHelper/helper.ts
var getNonce = async (client, token, owner) => {
  return await client.readContract({
    abi: [
      {
        inputs: [
          { internalType: "address", name: "owner", type: "address" }
        ],
        name: "nonces",
        outputs: [
          { internalType: "uint256", name: "", type: "uint256" }
        ],
        stateMutability: "view",
        type: "function"
      }
    ],
    address: token,
    functionName: "nonces",
    args: [owner]
  });
};

// src/entities/removeLiquidity/helper.ts
var getAmountsQuery2 = (tokens, input, bptIndex = -1) => {
  switch (input.kind) {
    case "Unbalanced" /* Unbalanced */:
      return {
        minAmountsOut: getAmounts(tokens, input.amountsOut),
        tokenOutIndex: void 0,
        maxBptAmountIn: MAX_UINT256
        // maxAmountIn set to max when querying
      };
    case "SingleTokenExactOut" /* SingleTokenExactOut */:
      return {
        minAmountsOut: getAmounts(tokens, [input.amountOut]),
        tokenOutIndex: tokens.filter((_, index) => index !== bptIndex).findIndex((t) => t.isSameAddress(input.amountOut.address)),
        maxBptAmountIn: MAX_UINT256
        // maxAmountIn set to max when querying
      };
    case "SingleTokenExactIn" /* SingleTokenExactIn */:
      return {
        minAmountsOut: Array(tokens.length).fill(1n),
        // minAmountsOut set to 1 wei when querying
        tokenOutIndex: tokens.filter((_, index) => index !== bptIndex).findIndex((t) => t.isSameAddress(input.tokenOut)),
        maxBptAmountIn: input.bptIn.rawAmount
      };
    case "Proportional" /* Proportional */:
      return {
        minAmountsOut: Array(tokens.length).fill(1n),
        // minAmountsOut set to 1 wei when querying
        tokenOutIndex: void 0,
        maxBptAmountIn: input.bptIn.rawAmount
      };
    case "Recovery" /* Recovery */:
      return {
        minAmountsOut: Array(tokens.length).fill(1n),
        // minAmountsOut set to 1 wei when querying
        tokenOutIndex: void 0,
        maxBptAmountIn: input.bptIn.rawAmount
      };
  }
};
var getAmountsCall2 = (input) => {
  switch (input.removeLiquidityKind) {
    case "Unbalanced" /* Unbalanced */:
    case "SingleTokenExactOut" /* SingleTokenExactOut */:
      return {
        minAmountsOut: input.amountsOut.map((a) => a.amount),
        tokenOutIndex: input.tokenOutIndex,
        maxBptAmountIn: input.slippage.applyTo(input.bptIn.amount)
      };
    case "SingleTokenExactIn" /* SingleTokenExactIn */:
      if (input.tokenOutIndex === void 0) {
        throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
      }
      return {
        minAmountsOut: input.amountsOut.map(
          (a) => input.slippage.applyTo(a.amount, -1)
        ),
        tokenOutIndex: input.tokenOutIndex,
        maxBptAmountIn: input.bptIn.amount
      };
    case "Proportional" /* Proportional */:
    case "Recovery" /* Recovery */:
      return {
        minAmountsOut: input.amountsOut.map(
          (a) => input.slippage.applyTo(a.amount, -1)
        ),
        tokenOutIndex: input.tokenOutIndex,
        maxBptAmountIn: input.bptIn.amount
      };
  }
};

// src/entities/permitHelper/index.ts
var PermitHelper = class {
};
__publicField(PermitHelper, "signRemoveLiquidityApproval", async (input) => {
  const amounts = getAmountsCall2(input);
  const nonce = await _asyncNullishCoalesce(input.nonce, async () => ( await getNonce(
    input.client,
    input.bptIn.token.address,
    input.owner
  )));
  const { permitApproval, permitSignature } = await signPermit(
    input.client,
    input.bptIn.token.address,
    input.owner,
    BALANCER_ROUTER[input.chainId],
    nonce,
    amounts.maxBptAmountIn,
    input.deadline
  );
  return { batch: [permitApproval], signatures: [permitSignature] };
});
__publicField(PermitHelper, "signRemoveLiquidityNestedApproval", async (input) => {
  const nonce = await _asyncNullishCoalesce(input.nonce, async () => ( await getNonce(
    input.client,
    input.bptAmountIn.token.address,
    input.owner
  )));
  const { permitApproval, permitSignature } = await signPermit(
    input.client,
    input.bptAmountIn.token.address,
    input.owner,
    BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
    nonce,
    input.bptAmountIn.amount,
    // maxBptIn
    input.deadline
  );
  return { batch: [permitApproval], signatures: [permitSignature] };
});
__publicField(PermitHelper, "signRemoveLiquidityBoostedApproval", async (input) => {
  const amounts = getAmountsCall2(input);
  const nonce = await _asyncNullishCoalesce(input.nonce, async () => ( await getNonce(
    input.client,
    input.bptIn.token.address,
    input.owner
  )));
  const { permitApproval, permitSignature } = await signPermit(
    input.client,
    input.bptIn.token.address,
    input.owner,
    BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
    nonce,
    amounts.maxBptAmountIn,
    input.deadline
  );
  return { batch: [permitApproval], signatures: [permitSignature] };
});
var signPermit = async (client, token, owner, spender, nonce, amount = MAX_UINT256, deadline = MAX_UINT256) => {
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" }
    ]
  };
  const message = {
    owner,
    spender,
    value: amount,
    nonce,
    deadline
  };
  const domain = await getDomain(client, token);
  const permitSignature = await client.signTypedData({
    account: owner,
    message,
    domain,
    primaryType: "Permit",
    types
  });
  const permitApproval = {
    token,
    owner,
    spender,
    amount,
    nonce,
    deadline
  };
  return { permitApproval, permitSignature };
};
var getDomain = async (client, token) => {
  const [, name, version, chainId, verifyingContract, , ,] = await client.readContract({
    abi: weightedPoolAbi_V3,
    address: token,
    functionName: "eip712Domain",
    args: []
  });
  const domain = {
    name,
    version,
    chainId: Number(chainId),
    verifyingContract
  };
  return domain;
};

// src/entities/permit2Helper/allowanceTransfer.ts


// src/entities/permit2Helper/constants.ts
var MaxUint48 = BigInt("0xffffffffffff");
var MaxUint160 = BigInt("0xffffffffffffffffffffffffffffffffffffffff");
var MaxUint256 = BigInt(
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
);
var MaxAllowanceTransferAmount = MaxUint160;
var MaxAllowanceExpiration = MaxUint48;
var MaxOrderedNonce = MaxUint48;
var MaxSignatureTransferAmount = MaxUint256;
var MaxUnorderedNonce = MaxUint256;
var MaxSigDeadline = MaxUint256;
var InstantExpiration = BigInt(0);

// src/entities/permit2Helper/domain.ts
var PERMIT2_DOMAIN_NAME = "Permit2";
function permit2Domain(permit2Address, chainId) {
  return {
    name: PERMIT2_DOMAIN_NAME,
    chainId,
    verifyingContract: permit2Address
  };
}

// src/entities/permit2Helper/allowanceTransfer.ts
var PERMIT_DETAILS = [
  { name: "token", type: "address" },
  { name: "amount", type: "uint160" },
  { name: "expiration", type: "uint48" },
  { name: "nonce", type: "uint48" }
];
var PERMIT_TYPES = {
  PermitDetails: PERMIT_DETAILS,
  PermitSingle: [
    { name: "details", type: "PermitDetails" },
    { name: "spender", type: "address" },
    { name: "sigDeadline", type: "uint256" }
  ]
};
var PERMIT_BATCH_TYPES = {
  PermitDetails: PERMIT_DETAILS,
  PermitBatch: [
    { name: "details", type: "PermitDetails[]" },
    { name: "spender", type: "address" },
    { name: "sigDeadline", type: "uint256" }
  ]
};
function isPermit(permit) {
  return !Array.isArray(permit.details);
}
var AllowanceTransfer = class _AllowanceTransfer {
  /**
   * Cannot be constructed.
   */
  constructor() {
  }
  // return the data to be sent in a eth_signTypedData RPC call
  // for signing the given permit data
  static getPermitSingleData(permit, permit2Address, chainId) {
    if (permit.sigDeadline > MaxSigDeadline) {
      throw new Error("SIG_DEADLINE_OUT_OF_RANGE");
    }
    const domain = permit2Domain(permit2Address, chainId);
    validatePermitDetails(permit.details);
    return {
      domain,
      values: permit
    };
  }
  // return the data to be sent in a eth_signTypedData RPC call
  // for signing the given permit data
  static getPermitBatchData(permit, permit2Address, chainId) {
    if (permit.sigDeadline > MaxSigDeadline) {
      throw new Error("SIG_DEADLINE_OUT_OF_RANGE");
    }
    const domain = permit2Domain(permit2Address, chainId);
    permit.details.forEach(validatePermitDetails);
    return {
      domain,
      values: permit
    };
  }
  // return the data to be sent in a eth_signTypedData RPC call
  // for signing the given permit data
  static getPermitData(permit, permit2Address, chainId) {
    if (permit.sigDeadline > MaxSigDeadline) {
      throw new Error("SIG_DEADLINE_OUT_OF_RANGE");
    }
    const domain = permit2Domain(permit2Address, chainId);
    if (isPermit(permit)) {
      validatePermitDetails(permit.details);
      return {
        domain,
        types: PERMIT_TYPES,
        values: permit
      };
    } else {
      permit.details.forEach(validatePermitDetails);
      return {
        domain,
        types: PERMIT_BATCH_TYPES,
        values: permit
      };
    }
  }
  static hash(permit, permit2Address, chainId) {
    if (isPermit(permit)) {
      const { domain, values } = _AllowanceTransfer.getPermitSingleData(
        permit,
        permit2Address,
        chainId
      );
      return _viem.hashTypedData.call(void 0, {
        domain,
        types: PERMIT_TYPES,
        primaryType: "PermitSingle",
        message: values
      });
    } else {
      const { domain, values } = _AllowanceTransfer.getPermitBatchData(
        permit,
        permit2Address,
        chainId
      );
      return _viem.hashTypedData.call(void 0, {
        domain,
        types: PERMIT_BATCH_TYPES,
        primaryType: "PermitBatch",
        message: values
      });
    }
  }
};
function validatePermitDetails(details) {
  if (details.nonce > MaxOrderedNonce) {
    throw new Error("NONCE_OUT_OF_RANGE");
  }
  if (details.amount > MaxAllowanceTransferAmount) {
    throw new Error("AMOUNT_OUT_OF_RANGE");
  }
  if (details.expiration > MaxAllowanceExpiration) {
    throw new Error("EXPIRATION_OUT_OF_RANGE");
  }
}

// src/entities/swap/limits.ts
function getLimitAmount(slippage, swapKind, expectedAmount) {
  let limitAmount;
  if (swapKind === 0 /* GivenIn */) {
    limitAmount = slippage.applyTo(expectedAmount.amount, -1);
  } else {
    limitAmount = slippage.applyTo(expectedAmount.amount);
  }
  return TokenAmount.fromRawAmount(expectedAmount.token, limitAmount);
}
function getPathLimits(slippage, expected, maxAmount) {
  if (!expected.pathAmounts)
    return void 0;
  let pathAmounts;
  let total = 0n;
  if (expected.swapKind === 0 /* GivenIn */) {
    pathAmounts = expected.pathAmounts.map((a) => {
      const limit = slippage.applyTo(a, -1);
      total = total + limit;
      return limit;
    });
  } else {
    pathAmounts = expected.pathAmounts.map((a) => {
      const limit = slippage.applyTo(a);
      total = total + limit;
      return limit;
    });
  }
  const diff = maxAmount - total;
  pathAmounts[0] = pathAmounts[0] + diff;
  return pathAmounts;
}

// src/entities/permit2Helper/index.ts
var Permit2Helper = class {
  static async signAddLiquidityApproval(input) {
    if (input.nonces && input.nonces.length !== input.amountsIn.length) {
      throw new Error("Nonces length doesn't match amountsIn length");
    }
    if (input.expirations && input.expirations.length !== input.amountsIn.length) {
      throw new Error(
        "Expirations length doesn't match amountsIn length"
      );
    }
    const amounts = getAmountsCall(input);
    const spender = BALANCER_ROUTER[input.chainId];
    const details = [];
    for (let i = 0; i < input.amountsIn.length; i++) {
      details.push(
        await getDetails(
          input.client,
          input.amountsIn[i].token.address,
          input.owner,
          spender,
          amounts.maxAmountsIn[i],
          input.expirations ? input.expirations[i] : void 0,
          input.nonces ? input.nonces[i] : void 0
        )
      );
    }
    return signPermit2(input.client, input.owner, spender, details);
  }
  static async signAddLiquidityNestedApproval(input) {
    if (input.nonces && input.nonces.length !== input.amountsIn.length) {
      throw new Error("Nonces length doesn't match amountsIn length");
    }
    if (input.expirations && input.expirations.length !== input.amountsIn.length) {
      throw new Error(
        "Expirations length doesn't match amountsIn length"
      );
    }
    const maxAmountsIn = input.amountsIn.map((a) => a.amount);
    const spender = BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId];
    const details = [];
    for (let i = 0; i < input.amountsIn.length; i++) {
      details.push(
        await getDetails(
          input.client,
          input.amountsIn[i].token.address,
          input.owner,
          spender,
          maxAmountsIn[i],
          input.expirations ? input.expirations[i] : void 0,
          input.nonces ? input.nonces[i] : void 0
        )
      );
    }
    return signPermit2(input.client, input.owner, spender, details);
  }
  static async signAddLiquidityBoostedApproval(input) {
    if (input.nonces && input.nonces.length !== input.amountsIn.length) {
      throw new Error("Nonces length doesn't match amountsIn length");
    }
    if (input.expirations && input.expirations.length !== input.amountsIn.length) {
      throw new Error(
        "Expirations length doesn't match amountsIn length"
      );
    }
    const amounts = getAmountsCall(input);
    const spender = BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId];
    const details = [];
    for (let i = 0; i < input.amountsIn.length; i++) {
      details.push(
        await getDetails(
          input.client,
          input.amountsIn[i].token.address,
          input.owner,
          spender,
          amounts.maxAmountsIn[i],
          input.expirations ? input.expirations[i] : void 0,
          input.nonces ? input.nonces[i] : void 0
        )
      );
    }
    return signPermit2(input.client, input.owner, spender, details);
  }
  static async signAddLiquidityBufferApproval(input) {
    if (input.nonces && input.nonces.length !== 2) {
      throw new Error("Nonces length doesn't match amountsIn length");
    }
    if (input.expirations && input.expirations.length !== 2) {
      throw new Error(
        "Expirations length doesn't match amountsIn length"
      );
    }
    const spender = BALANCER_BUFFER_ROUTER[input.chainId];
    const details = [
      await getDetails(
        input.client,
        input.wrappedAmountIn.token.address,
        input.owner,
        spender,
        input.wrappedAmountIn.amount,
        input.expirations ? input.expirations[0] : void 0,
        input.nonces ? input.nonces[0] : void 0
      ),
      await getDetails(
        input.client,
        input.underlyingAmountIn.token.address,
        input.owner,
        spender,
        input.underlyingAmountIn.amount,
        input.expirations ? input.expirations[1] : void 0,
        input.nonces ? input.nonces[1] : void 0
      )
    ];
    return signPermit2(input.client, input.owner, spender, details);
  }
  static async signInitBufferApproval(input) {
    if (input.nonces && input.nonces.length !== 2) {
      throw new Error("Nonces length doesn't match amountsIn length");
    }
    if (input.expirations && input.expirations.length !== 2) {
      throw new Error(
        "Expirations length doesn't match amountsIn length"
      );
    }
    const spender = BALANCER_BUFFER_ROUTER[input.chainId];
    const details = [
      await getDetails(
        input.client,
        input.wrappedAmountIn.token.address,
        input.owner,
        spender,
        input.wrappedAmountIn.amount,
        input.expirations ? input.expirations[0] : void 0,
        input.nonces ? input.nonces[0] : void 0
      ),
      await getDetails(
        input.client,
        input.underlyingAmountIn.token.address,
        input.owner,
        spender,
        input.underlyingAmountIn.amount,
        input.expirations ? input.expirations[1] : void 0,
        input.nonces ? input.nonces[1] : void 0
      )
    ];
    return signPermit2(input.client, input.owner, spender, details);
  }
  static async signSwapApproval(input) {
    let maxAmountIn;
    if (input.queryOutput.swapKind === 0 /* GivenIn */) {
      const queryOutput = input.queryOutput;
      maxAmountIn = queryOutput.amountIn;
    } else {
      const queryOutput = input.queryOutput;
      maxAmountIn = getLimitAmount(
        input.slippage,
        1 /* GivenOut */,
        queryOutput.expectedAmountIn
      );
    }
    const chainId = await input.client.getChainId();
    const spender = input.queryOutput.pathAmounts ? BALANCER_BATCH_ROUTER[chainId] : BALANCER_ROUTER[chainId];
    const details = [
      await getDetails(
        input.client,
        maxAmountIn.token.address,
        input.owner,
        spender,
        maxAmountIn.amount,
        input.expiration,
        input.nonce
      )
    ];
    const permit2 = await signPermit2(
      input.client,
      input.owner,
      spender,
      details
    );
    return permit2;
  }
};
var signPermit2 = async (client, owner, spender, details, sigDeadline = MaxSigDeadline) => {
  const batch = {
    details,
    spender,
    sigDeadline
  };
  const chainId = await client.getChainId();
  const { domain, types, values } = AllowanceTransfer.getPermitData(
    batch,
    PERMIT2[chainId],
    chainId
  );
  const signature = await client.signTypedData({
    account: owner,
    message: {
      ...values
    },
    domain,
    primaryType: "PermitBatch",
    types
  });
  return { batch, signature };
};
var getDetails = async (client, token, owner, spender, amount = MaxAllowanceTransferAmount, expiration = Number(MaxAllowanceExpiration), nonce) => {
  let _nonce;
  if (nonce === void 0) {
    _nonce = await getNonce2(client, token, owner, spender);
  } else {
    _nonce = nonce;
  }
  const details = {
    token,
    amount,
    expiration,
    nonce: _nonce
  };
  return details;
};
var getNonce2 = async (client, token, owner, spender) => {
  const chainId = await client.getChainId();
  const result = await client.readContract({
    abi: permit2Abi,
    address: PERMIT2[chainId],
    functionName: "allowance",
    args: [owner, token, spender]
  });
  const nonce = result[1];
  return nonce;
};

// src/entities/removeLiquidity/removeLiquidityV2/weighted/removeLiquidityWeighted.ts


// src/entities/utils/doRemoveLiquidityQuery.ts

async function doRemoveLiquidityQuery(rpcUrl, chainId, args) {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const {
    result: [bptIn, amountsOut]
  } = await client.simulateContract({
    address: BALANCER_QUERIES[chainId],
    abi: balancerQueriesAbi,
    functionName: "queryExit",
    args
  });
  return {
    bptIn,
    amountsOut
  };
}

// src/entities/utils/parseRemoveLiquidityArgs.ts
function parseRemoveLiquidityArgs({
  chainId,
  wethIsEth,
  sortedTokens,
  poolId,
  sender,
  recipient,
  minAmountsOut,
  userData,
  toInternalBalance
}) {
  const tokensOut = chainId && wethIsEth ? replaceWrapped([...sortedTokens], chainId) : [...sortedTokens];
  const exitPoolRequest = {
    assets: tokensOut.map((t) => t.address),
    // with BPT
    minAmountsOut,
    // with BPT
    userData,
    // wihtout BPT
    toInternalBalance: !!toInternalBalance
  };
  return {
    args: [poolId, sender, recipient, exitPoolRequest],
    tokensOut
  };
}

// src/entities/removeLiquidity/removeLiquidityV2/weighted/removeLiquidityWeighted.ts
var RemoveLiquidityWeighted = class {
  async query(input, poolState) {
    if (input.kind === "Recovery" /* Recovery */) {
      return this.queryRemoveLiquidityRecovery(input, poolState);
    }
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = getAmountsQuery2(sortedTokens, input);
    const userData = WeightedEncoder.encodeRemoveLiquidityUserData(
      input.kind,
      amounts
    );
    const { args, tokensOut } = parseRemoveLiquidityArgs({
      chainId: input.chainId,
      poolId: poolState.id,
      sortedTokens,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      minAmountsOut: amounts.minAmountsOut,
      userData
    });
    const queryOutput = await doRemoveLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(bpt, queryOutput.bptIn);
    const amountsOut = queryOutput.amountsOut.map(
      (a, i) => TokenAmount.fromRawAmount(tokensOut[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: amounts.tokenOutIndex,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  // RemoveLiquidityRecovery doesn't have a proper query method on v2, so
  // this method replicates SC behavior off-chain
  async queryRemoveLiquidityRecovery(input, poolState) {
    const poolStateWithBalances = await getPoolStateWithBalancesV2(
      poolState,
      input.chainId,
      input.rpcUrl
    );
    const { tokenAmounts } = calculateProportionalAmounts(
      poolStateWithBalances,
      input.bptIn
    );
    const bptToken = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(
      bptToken,
      input.bptIn.rawAmount
    );
    const amountsOut = tokenAmounts.map(
      (amount) => TokenAmount.fromRawAmount(
        new Token(input.chainId, amount.address, amount.decimals),
        amount.rawAmount
      )
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: void 0,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall2(input);
    const userData = WeightedEncoder.encodeRemoveLiquidityUserData(
      input.removeLiquidityKind,
      amounts
    );
    const { args } = parseRemoveLiquidityArgs({
      poolId: input.poolId,
      sortedTokens: input.amountsOut.map((a) => a.token),
      sender: input.sender,
      recipient: input.recipient,
      minAmountsOut: amounts.minAmountsOut,
      userData,
      toInternalBalance: !!input.toInternalBalance,
      wethIsEth: !!input.wethIsEth,
      chainId: input.chainId
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "exitPool",
      args
    });
    return {
      args,
      callData,
      to: VAULT[input.chainId],
      value: 0n,
      maxBptIn: TokenAmount.fromRawAmount(
        input.bptIn.token,
        amounts.maxBptAmountIn
      ),
      minAmountsOut: input.amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.minAmountsOut[i])
      )
    };
  }
  buildCallWithPermit() {
    throw new Error("buildCallWithPermit is not supported on v2");
  }
};

// src/entities/removeLiquidity/removeLiquidityV2/composableStable/removeLiquidityComposableStable.ts

var RemoveLiquidityComposableStable = class {
  async query(input, poolState) {
    if (input.kind === "Recovery" /* Recovery */) {
      return this.queryRemoveLiquidityRecovery(input, poolState);
    }
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const bptIndex = poolState.tokens.findIndex(
      (t) => t.address === poolState.address
    );
    const amounts = getAmountsQuery2(sortedTokens, input, bptIndex);
    const amountsWithoutBpt = {
      ...amounts,
      minAmountsOut: [
        ...amounts.minAmountsOut.slice(0, bptIndex),
        ...amounts.minAmountsOut.slice(bptIndex + 1)
      ]
    };
    const userData = ComposableStableEncoder.encodeRemoveLiquidityUserData(
      input.kind,
      amountsWithoutBpt
    );
    const { args, tokensOut } = parseRemoveLiquidityArgs({
      chainId: input.chainId,
      poolId: poolState.id,
      sortedTokens,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      minAmountsOut: amounts.minAmountsOut,
      userData
    });
    const queryOutput = await doRemoveLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(bpt, queryOutput.bptIn);
    const amountsOut = queryOutput.amountsOut.map(
      (a, i) => TokenAmount.fromRawAmount(tokensOut[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: amounts.tokenOutIndex,
      bptIndex,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  // RemoveLiquidityRecovery doesn't have a proper query method on v2, so
  // this method replicates SC behavior off-chain
  async queryRemoveLiquidityRecovery(input, poolState) {
    const poolStateWithBalances = await getPoolStateWithBalancesV2(
      poolState,
      input.chainId,
      input.rpcUrl
    );
    const { tokenAmounts } = calculateProportionalAmounts(
      poolStateWithBalances,
      input.bptIn
    );
    const bptToken = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(
      bptToken,
      input.bptIn.rawAmount
    );
    const bptIndex = poolState.tokens.findIndex(
      (t) => t.address === poolState.address
    );
    let amountsOut = tokenAmounts.map(
      (amount) => TokenAmount.fromRawAmount(
        new Token(input.chainId, amount.address, amount.decimals),
        amount.rawAmount
      )
    );
    amountsOut = insertIndex(
      amountsOut,
      bptIndex,
      TokenAmount.fromRawAmount(bptToken, 0n)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: void 0,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall2(input);
    const amountsWithoutBpt = {
      ...amounts,
      minAmountsOut: [
        ...amounts.minAmountsOut.slice(0, input.bptIndex),
        ...amounts.minAmountsOut.slice(input.bptIndex + 1)
      ]
    };
    const userData = ComposableStableEncoder.encodeRemoveLiquidityUserData(
      input.removeLiquidityKind,
      amountsWithoutBpt
    );
    const { args } = parseRemoveLiquidityArgs({
      poolId: input.poolId,
      sortedTokens: input.amountsOut.map((a) => a.token),
      sender: input.sender,
      recipient: input.recipient,
      minAmountsOut: amounts.minAmountsOut,
      userData,
      toInternalBalance: !!input.toInternalBalance,
      wethIsEth: !!input.wethIsEth,
      chainId: input.chainId
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "exitPool",
      args
    });
    return {
      args,
      callData,
      to: VAULT[input.chainId],
      value: 0n,
      maxBptIn: TokenAmount.fromRawAmount(
        input.bptIn.token,
        amounts.maxBptAmountIn
      ),
      minAmountsOut: input.amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.minAmountsOut[i])
      )
    };
  }
  buildCallWithPermit() {
    throw new Error("buildCallWithPermit is not supported on v2");
  }
};

// src/entities/removeLiquidity/removeLiquidityV2/stable/removeLiquidityStable.ts

var RemoveLiquidityStable = class {
  async query(input, poolState) {
    if (input.kind === "Recovery" /* Recovery */) {
      return this.queryRemoveLiquidityRecovery(input, poolState);
    }
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = getAmountsQuery2(sortedTokens, input);
    const userData = StableEncoder.encodeRemoveLiquidityUserData(
      input.kind,
      amounts
    );
    const { args, tokensOut } = parseRemoveLiquidityArgs({
      chainId: input.chainId,
      poolId: poolState.id,
      sortedTokens,
      sender: ZERO_ADDRESS,
      recipient: ZERO_ADDRESS,
      minAmountsOut: amounts.minAmountsOut,
      userData
    });
    const queryOutput = await doRemoveLiquidityQuery(
      input.rpcUrl,
      input.chainId,
      args
    );
    const bpt = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(bpt, queryOutput.bptIn);
    const amountsOut = queryOutput.amountsOut.map(
      (a, i) => TokenAmount.fromRawAmount(tokensOut[i], a)
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: amounts.tokenOutIndex,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  // RemoveLiquidityRecovery doesn't have a proper query method on v2, so
  // this method replicates SC behavior off-chain
  async queryRemoveLiquidityRecovery(input, poolState) {
    const poolStateWithBalances = await getPoolStateWithBalancesV2(
      poolState,
      input.chainId,
      input.rpcUrl
    );
    const { tokenAmounts } = calculateProportionalAmounts(
      poolStateWithBalances,
      input.bptIn
    );
    const bptToken = new Token(input.chainId, poolState.address, 18);
    const bptIn = TokenAmount.fromRawAmount(
      bptToken,
      input.bptIn.rawAmount
    );
    const amountsOut = tokenAmounts.map(
      (amountIn) => TokenAmount.fromRawAmount(
        new Token(input.chainId, amountIn.address, amountIn.decimals),
        amountIn.rawAmount
      )
    );
    return {
      to: VAULT[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: void 0,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
  }
  buildCall(input) {
    const amounts = getAmountsCall2(input);
    const userData = StableEncoder.encodeRemoveLiquidityUserData(
      input.removeLiquidityKind,
      amounts
    );
    const { args } = parseRemoveLiquidityArgs({
      poolId: input.poolId,
      sortedTokens: input.amountsOut.map((a) => a.token),
      sender: input.sender,
      recipient: input.recipient,
      minAmountsOut: amounts.minAmountsOut,
      userData,
      toInternalBalance: !!input.toInternalBalance,
      wethIsEth: !!input.wethIsEth,
      chainId: input.chainId
    });
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "exitPool",
      args
    });
    return {
      args,
      callData,
      to: VAULT[input.chainId],
      value: 0n,
      maxBptIn: TokenAmount.fromRawAmount(
        input.bptIn.token,
        amounts.maxBptAmountIn
      ),
      minAmountsOut: input.amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.minAmountsOut[i])
      )
    };
  }
  buildCallWithPermit() {
    throw new Error("buildCallWithPermit is not supported on v2");
  }
};

// src/entities/removeLiquidity/removeLiquidityV2/index.ts
var RemoveLiquidityV2 = class {
  constructor(config) {
    __publicField(this, "removeLiquidityTypes", {});
    const { customRemoveLiquidityTypes } = config || {};
    this.removeLiquidityTypes = {
      //GYRO2, GYRO3, GYROE only support Remove Liquidity Proportional(1 - EXACT_BPT_IN_FOR_TOKENS_OUT)
      ["ComposableStable" /* ComposableStable */]: new RemoveLiquidityComposableStable(),
      ["Gyro2" /* Gyro2 */]: new RemoveLiquidityWeighted(),
      ["Gyro3" /* Gyro3 */]: new RemoveLiquidityWeighted(),
      ["GyroE" /* GyroE */]: new RemoveLiquidityWeighted(),
      ["MetaStable" /* MetaStable */]: new RemoveLiquidityStable(),
      ["Stable" /* Stable */]: new RemoveLiquidityStable(),
      ["Weighted" /* Weighted */]: new RemoveLiquidityWeighted(),
      // custom remove liquidity types take precedence over base types
      ...customRemoveLiquidityTypes
    };
  }
  getRemoveLiquidity(poolType) {
    if (!this.removeLiquidityTypes[poolType]) {
      throw new Error(`Unsupported pool type ${poolType}`);
    }
    return this.removeLiquidityTypes[poolType];
  }
  async query(input, poolState) {
    return this.getRemoveLiquidity(poolState.type).query(input, poolState);
  }
  buildCall(input) {
    return this.getRemoveLiquidity(input.poolType).buildCall(input);
  }
  buildCallWithPermit() {
    throw new Error("buildCallWithPermit is not supported on v2");
  }
};

// src/entities/removeLiquidity/removeLiquidityV3/doRemoveLiquiditySingleTokenExactOutQuery.ts

var doRemoveLiquiditySingleTokenExactOutQuery = async (rpcUrl, chainId, sender, userData, poolAddress, tokenOut, exactAmountOut) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: bptIn } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryRemoveLiquiditySingleTokenExactOut",
    args: [poolAddress, tokenOut, exactAmountOut, sender, userData]
  });
  return bptIn;
};

// src/entities/removeLiquidity/removeLiquidityV3/doRemoveLiquiditySingleTokenExactInQuery.ts

var doRemoveLiquiditySingleTokenExactInQuery = async (rpcUrl, chainId, sender, userData, poolAddress, tokenOut, exactBptAmountIn) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: amountOut } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryRemoveLiquiditySingleTokenExactIn",
    args: [poolAddress, exactBptAmountIn, tokenOut, sender, userData]
  });
  return amountOut;
};

// src/entities/removeLiquidity/removeLiquidityV3/doRemoveLiquidityProportionalQuery.ts

var doRemoveLiquidityProportionalQuery = async (rpcUrl, chainId, sender, userData, poolAddress, exactBptAmountIn) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: amountsOut } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryRemoveLiquidityProportional",
    args: [poolAddress, exactBptAmountIn, sender, userData]
  });
  return amountsOut;
};

// src/entities/removeLiquidity/removeLiquidityV3/doRemoveLiquidityRecoveryQuery.ts

var doRemoveLiquidityRecoveryQuery = async ({ chainId, rpcUrl, bptIn }, poolAddress) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: amountsOut } = await client.simulateContract({
    address: BALANCER_ROUTER[chainId],
    abi: [
      ...balancerRouterAbi,
      ...vaultV3Abi,
      ...vaultExtensionAbi_V3,
      ...permit2Abi
    ],
    functionName: "queryRemoveLiquidityRecovery",
    args: [poolAddress, bptIn.rawAmount]
  });
  return amountsOut;
};

// src/entities/removeLiquidity/removeLiquidityV3/encodeRemoveLiquiditySingleTokenExactOut.ts

var encodeRemoveLiquiditySingleTokenExactOut = (input, maxBptAmountIn) => {
  if (input.tokenOutIndex === void 0) {
    throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
  }
  return _viem.encodeFunctionData.call(void 0, {
    abi: balancerRouterAbi,
    functionName: "removeLiquiditySingleTokenExactOut",
    args: [
      input.poolId,
      maxBptAmountIn,
      input.amountsOut[input.tokenOutIndex].token.address,
      input.amountsOut[input.tokenOutIndex].amount,
      !!input.wethIsEth,
      input.userData
    ]
  });
};

// src/entities/removeLiquidity/removeLiquidityV3/encodeRemoveLiquiditySingleTokenExactIn.ts

var encodeRemoveLiquiditySingleTokenExactIn = (input, minAmountsOut) => {
  if (input.tokenOutIndex === void 0) {
    throw new Error(
      "RemoveLiquidityKind.SingleTokenExactOut should have tokenOutIndex"
    );
  }
  return _viem.encodeFunctionData.call(void 0, {
    abi: balancerRouterAbi,
    functionName: "removeLiquiditySingleTokenExactIn",
    args: [
      input.poolId,
      input.bptIn.amount,
      input.amountsOut[input.tokenOutIndex].token.address,
      minAmountsOut[input.tokenOutIndex],
      !!input.wethIsEth,
      input.userData
    ]
  });
};

// src/entities/removeLiquidity/removeLiquidityV3/encodeRemoveLiquidityProportional.ts

var encodeRemoveLiquidityProportional = (input, minAmountsOut) => {
  return _viem.encodeFunctionData.call(void 0, {
    abi: balancerRouterAbi,
    functionName: "removeLiquidityProportional",
    args: [
      input.poolId,
      input.bptIn.amount,
      minAmountsOut,
      !!input.wethIsEth,
      input.userData
    ]
  });
};

// src/entities/removeLiquidity/removeLiquidityV3/encodeRemoveLiquidityRecovery.ts

var encodeRemoveLiquidityRecovery2 = (input, minAmountsOut) => {
  return _viem.encodeFunctionData.call(void 0, {
    abi: balancerRouterAbi,
    functionName: "removeLiquidityRecovery",
    args: [input.poolId, input.bptIn.amount, minAmountsOut]
  });
};

// src/entities/removeLiquidity/removeLiquidityV3/index.ts

var RemoveLiquidityV3 = class {
  async query(input, poolState) {
    const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
    const amounts = getAmountsQuery2(sortedTokens, input);
    let maxBptAmountIn;
    let minAmountsOut;
    switch (input.kind) {
      case "Unbalanced" /* Unbalanced */:
        throw removeLiquidityUnbalancedNotSupportedOnV3;
      case "SingleTokenExactOut" /* SingleTokenExactOut */:
        {
          maxBptAmountIn = await doRemoveLiquiditySingleTokenExactOutQuery(
            input.rpcUrl,
            input.chainId,
            _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
            _nullishCoalesce(input.userData, () => ( "0x")),
            poolState.address,
            input.amountOut.address,
            input.amountOut.rawAmount
          );
          minAmountsOut = amounts.minAmountsOut;
        }
        break;
      case "SingleTokenExactIn" /* SingleTokenExactIn */:
        {
          maxBptAmountIn = amounts.maxBptAmountIn;
          const minAmountOut = await doRemoveLiquiditySingleTokenExactInQuery(
            input.rpcUrl,
            input.chainId,
            _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
            _nullishCoalesce(input.userData, () => ( "0x")),
            poolState.address,
            input.tokenOut,
            input.bptIn.rawAmount
          );
          minAmountsOut = sortedTokens.map((t) => {
            return t.isSameAddress(input.tokenOut) ? minAmountOut : 0n;
          });
        }
        break;
      case "Proportional" /* Proportional */:
        {
          maxBptAmountIn = amounts.maxBptAmountIn;
          minAmountsOut = await doRemoveLiquidityProportionalQuery(
            input.rpcUrl,
            input.chainId,
            _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
            _nullishCoalesce(input.userData, () => ( "0x")),
            poolState.address,
            input.bptIn.rawAmount
          );
        }
        break;
      case "Recovery" /* Recovery */:
        {
          maxBptAmountIn = amounts.maxBptAmountIn;
          minAmountsOut = await doRemoveLiquidityRecoveryQuery(
            input,
            poolState.address
          );
        }
        break;
    }
    const bptToken = new Token(input.chainId, poolState.address, 18);
    const output = {
      to: BALANCER_ROUTER[input.chainId],
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn: TokenAmount.fromRawAmount(bptToken, maxBptAmountIn),
      amountsOut: sortedTokens.map(
        (t, i) => TokenAmount.fromRawAmount(t, minAmountsOut[i])
      ),
      tokenOutIndex: amounts.tokenOutIndex,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId,
      userData: _nullishCoalesce(input.userData, () => ( "0x"))
    };
    return output;
  }
  buildCall(input) {
    const amounts = getAmountsCall2(input);
    let callData;
    switch (input.removeLiquidityKind) {
      case "Unbalanced" /* Unbalanced */:
        throw removeLiquidityUnbalancedNotSupportedOnV3;
      case "SingleTokenExactOut" /* SingleTokenExactOut */:
        {
          callData = encodeRemoveLiquiditySingleTokenExactOut(
            input,
            amounts.maxBptAmountIn
          );
        }
        break;
      case "SingleTokenExactIn" /* SingleTokenExactIn */:
        {
          callData = encodeRemoveLiquiditySingleTokenExactIn(
            input,
            amounts.minAmountsOut
          );
        }
        break;
      case "Proportional" /* Proportional */:
        {
          callData = encodeRemoveLiquidityProportional(
            input,
            amounts.minAmountsOut
          );
        }
        break;
      case "Recovery" /* Recovery */:
        {
          callData = encodeRemoveLiquidityRecovery2(
            input,
            amounts.minAmountsOut
          );
        }
        break;
    }
    return {
      callData,
      to: BALANCER_ROUTER[input.chainId],
      value: 0n,
      // remove liquidity always has value = 0
      maxBptIn: TokenAmount.fromRawAmount(
        input.bptIn.token,
        amounts.maxBptAmountIn
      ),
      minAmountsOut: input.amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.minAmountsOut[i])
      )
    };
  }
  buildCallWithPermit(input, permit) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      permit.batch,
      permit.signatures,
      { details: [], spender: _viem.zeroAddress, sigDeadline: 0n },
      "0x",
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/removeLiquidity/removeLiquidityCowAmm/index.ts

var RemoveLiquidityCowAmm = class {
  async query(input, poolState) {
    const poolStateWithBalances = await getPoolStateWithBalancesCowAmm(
      poolState,
      input.chainId,
      input.rpcUrl
    );
    const { tokenAmounts } = calculateProportionalAmountsCowAmm(
      poolStateWithBalances,
      input.bptIn
    );
    const bptIn = TokenAmount.fromRawAmount(
      new Token(input.chainId, input.bptIn.address, input.bptIn.decimals),
      input.bptIn.rawAmount
    );
    const amountsOut = tokenAmounts.map(
      (amountIn) => TokenAmount.fromRawAmount(
        new Token(input.chainId, amountIn.address, amountIn.decimals),
        amountIn.rawAmount
      )
    );
    const output = {
      to: poolState.id,
      poolType: poolState.type,
      removeLiquidityKind: input.kind,
      poolId: poolState.id,
      bptIn,
      amountsOut,
      tokenOutIndex: void 0,
      protocolVersion: poolState.protocolVersion,
      chainId: input.chainId
    };
    return output;
  }
  buildCall(input) {
    if (input.removeLiquidityKind !== "Proportional" /* Proportional */) {
      throw new Error(
        `Error: Remove Liquidity ${input.removeLiquidityKind} is not supported. Cow AMM pools support Remove Liquidity Proportional only.`
      );
    }
    const amounts = getAmountsCall2(input);
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: cowAmmPoolAbi,
      functionName: "exitPool",
      args: [amounts.maxBptAmountIn, amounts.minAmountsOut]
    });
    return {
      callData,
      to: input.poolId,
      value: 0n,
      // remove liquidity always has value = 0
      maxBptIn: TokenAmount.fromRawAmount(
        input.bptIn.token,
        amounts.maxBptAmountIn
      ),
      minAmountsOut: input.amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(a.token, amounts.minAmountsOut[i])
      )
    };
  }
  buildCallWithPermit() {
    throw buildCallWithPermit2ProtocolVersionError;
  }
};

// src/entities/removeLiquidity/index.ts
var RemoveLiquidity = class {
  constructor(config) {
    this.config = config;
    __publicField(this, "inputValidator", new InputValidator());
  }
  async query(input, poolState) {
    this.inputValidator.validateRemoveLiquidity(input, poolState);
    switch (poolState.protocolVersion) {
      case 1: {
        const removeLiquidity = new RemoveLiquidityCowAmm();
        return removeLiquidity.query(
          input,
          poolState
        );
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
  buildCall(input) {
    const isV2Input = "sender" in input;
    switch (input.protocolVersion) {
      case 1: {
        const removeLiquidity = new RemoveLiquidityCowAmm();
        return removeLiquidity.buildCall(input);
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
          if (!("userData" in input))
            throw new Error(
              "UserData must be provided in buildCall input"
            );
          const removeLiquidity = new RemoveLiquidityV3();
          return removeLiquidity.buildCall(input);
        }
        break;
      }
    }
    throw Error("buildCall input/version mis-match");
  }
  buildCallWithPermit(input, permit) {
    if (input.protocolVersion === 3) {
      if (!("userData" in input))
        throw new Error("UserData must be provided in buildCall input");
      const removeLiquidity = new RemoveLiquidityV3();
      return removeLiquidity.buildCallWithPermit(input, permit);
    }
    throw Error(
      "buildCall with Permit signatures is only available for v3"
    );
  }
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/index.ts


// src/entities/removeLiquidityNested/removeLiquidityNestedV2/encodeCalls.ts

var encodeCalls2 = (callsAttributes, isProportional) => {
  const encodedCalls = [];
  for (const callAttributes of callsAttributes) {
    const {
      wethIsEth,
      chainId,
      sortedTokens,
      poolId,
      poolAddress,
      poolType,
      kind,
      sender,
      recipient,
      bptAmountIn,
      minAmountsOut,
      toInternalBalance,
      outputReferences,
      tokenOutIndex
    } = callAttributes;
    let tokensOut = [...sortedTokens];
    if (wethIsEth) {
      tokensOut = replaceWrapped([...sortedTokens], chainId);
    }
    let userData;
    if (isProportional) {
      userData = getUserDataProportional(poolType, bptAmountIn.amount);
    } else {
      if (tokenOutIndex === void 0) {
        throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
      }
      const bptIndex = sortedTokens.findIndex(
        (t) => t.isSameAddress(poolAddress)
      );
      const tokenOutIndexWithoutBpt = bptIndex === -1 || tokenOutIndex < bptIndex ? tokenOutIndex : tokenOutIndex - 1;
      userData = getUserDataSingleTokenExactIn(
        tokenOutIndexWithoutBpt,
        poolType,
        bptAmountIn.amount
      );
    }
    const exitPoolRequest = {
      assets: tokensOut.map((t) => t.address),
      // with BPT
      minAmountsOut,
      // with BPT
      userData,
      // wihtout BPT
      toInternalBalance
    };
    const encodedCall = _viem.encodeFunctionData.call(void 0, {
      abi: batchRelayerLibraryAbi,
      functionName: "exitPool",
      args: [
        poolId,
        kind,
        sender,
        recipient,
        exitPoolRequest,
        outputReferences
      ]
    });
    encodedCalls.push(encodedCall);
  }
  return encodedCalls;
};
var getUserDataProportional = (poolType, bptAmountIn) => {
  switch (poolType) {
    case "Weighted" /* Weighted */:
      return WeightedEncoder.removeLiquidityProportional(bptAmountIn);
    case "ComposableStable" /* ComposableStable */:
      return ComposableStableEncoder.removeLiquidityProportional(
        bptAmountIn
      );
    default:
      throw new Error(`Unsupported pool type ${poolType}`);
  }
};
var getUserDataSingleTokenExactIn = (tokenOutIndex, poolType, bptAmountIn) => {
  if (tokenOutIndex === void 0) {
    throw removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError;
  }
  switch (poolType) {
    case "Weighted" /* Weighted */:
      return WeightedEncoder.removeLiquiditySingleTokenExactIn(
        bptAmountIn,
        tokenOutIndex
      );
    case "ComposableStable" /* ComposableStable */:
      return ComposableStableEncoder.removeLiquiditySingleTokenExactIn(
        bptAmountIn,
        tokenOutIndex
      );
    default:
      throw new Error(`Unsupported pool type ${poolType}`);
  }
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/doRemoveLiquidityNestedQuery.ts






var doRemoveLiquidityNestedQuery = async (chainId, rpcUrl, encodedMulticall, tokensOutIndexes) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { data } = await client.call({
    ...EMPTY_SENDER,
    to: BALANCER_RELAYER[chainId],
    data: encodedMulticall
  });
  const result = _viem.decodeFunctionResult.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "vaultActionsQueryMulticall",
    data
  });
  const peekedValues = [];
  result.forEach((r, i) => {
    if (tokensOutIndexes.includes(i))
      peekedValues.push(_viem.decodeAbiParameters.call(void 0, [{ type: "uint256" }], r)[0]);
  });
  return peekedValues;
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/getPeekCalls.ts
var getPeekCalls = (calls, isProportional) => {
  const tokensOut = [];
  const peekCalls = [];
  if (isProportional) {
    calls.forEach((call) => {
      call.outputReferences.forEach((outputReference) => {
        const tokenOut = call.sortedTokens[Number(outputReference.index)];
        const isTokenBeingUsedAsInput = calls.some(
          (_call) => tokenOut.isSameAddress(_call.poolAddress)
        );
        if (!isTokenBeingUsedAsInput) {
          tokensOut.push(tokenOut);
          const readOnlyChainedReference = Relayer.toChainedReference(
            Relayer.fromChainedReference(outputReference.key),
            false
          );
          peekCalls.push(
            Relayer.encodePeekChainedReferenceValue(
              readOnlyChainedReference
            )
          );
        }
      });
    });
  } else {
    const lastCall = calls[calls.length - 1];
    const tokenOut = lastCall.sortedTokens[lastCall.tokenOutIndex];
    tokensOut.push(tokenOut);
    const readOnlyChainedReference = Relayer.toChainedReference(
      Relayer.fromChainedReference(lastCall.outputReferences[0].key),
      false
    );
    peekCalls.push(
      Relayer.encodePeekChainedReferenceValue(readOnlyChainedReference)
    );
  }
  return { peekCalls, tokensOut };
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/getQueryCallsAttributes.ts
var getQueryCallsAttributes2 = (input, pools, isProportional) => {
  const { bptAmountIn, chainId, toInternalBalance = false } = input;
  let callsAttributes;
  const poolsTopDown = pools.sort((a, b) => b.level - a.level);
  const accountAddressPlaceholder = ZERO_ADDRESS;
  if (isProportional) {
    callsAttributes = getProportionalCallsAttributes(
      poolsTopDown,
      chainId,
      accountAddressPlaceholder,
      bptAmountIn,
      toInternalBalance
    );
  } else {
    const { tokenOut } = input;
    callsAttributes = getSingleTokenCallsAttributes(
      poolsTopDown,
      chainId,
      accountAddressPlaceholder,
      bptAmountIn,
      toInternalBalance,
      tokenOut
    );
  }
  const bptIn = new Token(chainId, poolsTopDown[0].address, 18);
  const _bptAmountIn = TokenAmount.fromRawAmount(bptIn, bptAmountIn);
  return { callsAttributes, bptAmountIn: _bptAmountIn };
};
var getProportionalCallsAttributes = (poolsSortedByLevel, chainId, accountAddress, bptAmountIn, toInternalBalance) => {
  const calls = [];
  for (const pool of poolsSortedByLevel) {
    const sortedTokens = pool.tokens.sort((a, b) => a.index - b.index).map((t) => new Token(chainId, t.address, t.decimals));
    const sortedTokensWithoutBpt = sortedTokens.filter(
      (t) => !t.isSameAddress(pool.address)
    );
    calls.push({
      chainId,
      sortedTokens,
      poolId: pool.id,
      poolAddress: pool.address,
      poolType: pool.type,
      kind: pool.type === "ComposableStable" /* ComposableStable */ ? 3 /* COMPOSABLE_STABLE_V2 */ : 0 /* WEIGHTED */,
      sender: getSenderProportional(calls, pool.address, accountAddress),
      recipient: getRecipientProportional(
        sortedTokensWithoutBpt,
        poolsSortedByLevel,
        accountAddress,
        chainId
      ),
      bptAmountIn: getBptAmountIn(pool, bptAmountIn, calls, true),
      minAmountsOut: Array(sortedTokens.length).fill(0n),
      // limits set to zero for query calls
      toInternalBalance,
      outputReferences: sortedTokensWithoutBpt.map((token) => {
        return {
          key: Relayer.toChainedReference(
            BigInt(poolsSortedByLevel.indexOf(pool)) * 10n + BigInt(sortedTokens.indexOf(token))
          ),
          index: BigInt(sortedTokens.indexOf(token))
        };
      })
    });
  }
  return calls;
};
var getSingleTokenCallsAttributes = (poolsTopDown, chainId, accountAddress, bptAmountIn, toInternalBalance, tokenOut) => {
  const removeLiquidityPath = getRemoveLiquidityPath(
    tokenOut,
    poolsTopDown
  );
  const calls = [];
  for (let i = 0; i < removeLiquidityPath.length; i++) {
    const pool = removeLiquidityPath[i];
    const sortedTokens = pool.tokens.sort((a, b) => a.index - b.index).map((t) => new Token(chainId, t.address, t.decimals));
    const isLastCall = i === removeLiquidityPath.length - 1;
    const currenTokenOut = isLastCall ? tokenOut : removeLiquidityPath[i + 1].address;
    const tokenOutIndex = sortedTokens.findIndex(
      (t) => t.isSameAddress(currenTokenOut)
    );
    calls.push({
      chainId,
      sortedTokens,
      poolId: pool.id,
      poolAddress: pool.address,
      poolType: pool.type,
      kind: pool.type === "ComposableStable" /* ComposableStable */ ? 3 /* COMPOSABLE_STABLE_V2 */ : 0 /* WEIGHTED */,
      sender: i === 0 ? accountAddress : BALANCER_RELAYER[chainId],
      recipient: isLastCall ? accountAddress : BALANCER_RELAYER[chainId],
      bptAmountIn: getBptAmountIn(pool, bptAmountIn, calls, false),
      minAmountsOut: Array(sortedTokens.length).fill(0n),
      // limits set to zero for query calls
      toInternalBalance,
      outputReferences: [
        {
          key: Relayer.toChainedReference(
            BigInt(removeLiquidityPath.indexOf(pool)) * 10n + BigInt(tokenOutIndex)
          ),
          index: BigInt(tokenOutIndex)
        }
      ],
      tokenOutIndex
    });
  }
  return calls;
};
var getRemoveLiquidityPath = (tokenOut, poolsTopDown) => {
  const topPool = poolsTopDown[0];
  const removeLiquidityPath = [];
  let tokenOutByLevel = tokenOut;
  while (tokenOutByLevel !== topPool.address) {
    const currentPool = poolsTopDown.find(
      (p) => (
        /**
         * Filter out pools that have tokenOutByLevel as it's own address
         * in order to prevent pools with BPT as token to be picked up
         * incorrectly - e.g. when removing liquidity from WETH/3-POOL to DAI, the
         * first iteration will pick 3-POOL as the "bottom" pool and update
         * tokenOutByLevel to 3-POOL-BPT. Since 3-POOL-BPT is contained
         * on both WETH/3-POOL and 3-POOL itself, simply checking if the
         * pool contains that token could result in the bottom pool being
         * picked up again.
         */
        p.address !== tokenOutByLevel && p.tokens.some((t) => t.address === tokenOutByLevel)
      )
    );
    removeLiquidityPath.unshift(currentPool);
    tokenOutByLevel = currentPool.address;
  }
  return removeLiquidityPath;
};
var getBptAmountIn = (pool, bptAmountIn, calls, isProportional) => {
  if (calls.length === 0) {
    return {
      amount: bptAmountIn,
      isRef: false
    };
  }
  let previousCall;
  let outputReferenceIndex;
  if (isProportional) {
    previousCall = calls.find(
      (call) => call.sortedTokens.map((token) => token.address).includes(pool.address)
    );
    outputReferenceIndex = previousCall.sortedTokens.map((token) => token.address).indexOf(pool.address);
  } else {
    previousCall = calls[calls.length - 1];
    outputReferenceIndex = 0;
  }
  const previousCallOutputReference = previousCall.outputReferences.find(
    (opRef) => opRef.index === BigInt(outputReferenceIndex)
  );
  return {
    amount: previousCallOutputReference.key,
    isRef: true
  };
};
var getSenderProportional = (calls, poolAddress, accountAddress) => {
  const previousCall = calls.find(
    (_call) => _call.sortedTokens.map((token) => token.address).includes(poolAddress)
  );
  return previousCall !== void 0 ? previousCall.recipient : accountAddress;
};
var getRecipientProportional = (sortedTokensWithoutBpt, poolsSortedByLevel, accountAddress, chainId) => {
  const containsOutputToken = sortedTokensWithoutBpt.some(
    (token) => !poolsSortedByLevel.some(
      (_pool) => token.isSameAddress(_pool.address)
    )
  );
  return containsOutputToken ? accountAddress : BALANCER_RELAYER[chainId];
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/validateInputs.ts
var validateQueryInput2 = (input, nestedPoolState) => {
  const tokenOut = "tokenOut" in input ? input.tokenOut : void 0;
  const isProportional = tokenOut === void 0;
  const mainTokens = nestedPoolState.mainTokens.map(
    (token) => new Token(input.chainId, token.address, token.decimals)
  );
  if (!isProportional) {
    validateInputsSingleToken(
      input,
      mainTokens
    );
  }
  return isProportional;
};
var validateInputsSingleToken = (input, mainTokens) => {
  const tokenOut = mainTokens.find((t) => t.isSameAddress(input.tokenOut));
  if (tokenOut === void 0) {
    throw new Error(
      `Removing liquidity to ${input.tokenOut} requires it to exist within main tokens`
    );
  }
};
var validateBuildCallInput2 = (input) => {
  if (input.wethIsEth && !input.amountsOut.some(
    (a) => a.token.isSameAddress(NATIVE_ASSETS[input.chainId].wrapped)
  )) {
    throw new Error(
      "Removing liquidity to native asset requires wrapped native asset to exist within amounts out"
    );
  }
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV2/index.ts
var RemoveLiquidityNestedV2 = class {
  async query(input, nestedPoolState) {
    const isProportional = validateQueryInput2(input, nestedPoolState);
    const { callsAttributes, bptAmountIn } = getQueryCallsAttributes2(
      input,
      nestedPoolState.pools,
      isProportional
    );
    const encodedCalls = encodeCalls2(callsAttributes, isProportional);
    const { peekCalls, tokensOut } = getPeekCalls(
      callsAttributes,
      isProportional
    );
    let tokensOutCount = 0;
    const tokensOutIndexes = [];
    callsAttributes.forEach((call, i) => {
      tokensOut.forEach((tokenOut, j) => {
        if (call.sortedTokens.some(
          (t) => t.isSameAddress(tokenOut.address)
        )) {
          tokensOutCount++;
          encodedCalls.splice(i + tokensOutCount, 0, peekCalls[j]);
          tokensOutIndexes.push(i + tokensOutCount);
        }
      });
    });
    const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRelayerAbi,
      functionName: "vaultActionsQueryMulticall",
      args: [encodedCalls]
    });
    const peekedValues = await doRemoveLiquidityNestedQuery(
      input.chainId,
      input.rpcUrl,
      encodedMulticall,
      tokensOutIndexes
    );
    const amountsOut = tokensOut.map(
      (tokenOut, i) => TokenAmount.fromRawAmount(tokenOut, peekedValues[i])
    );
    return {
      to: BALANCER_RELAYER[input.chainId],
      protocolVersion: 2,
      callsAttributes,
      bptAmountIn,
      amountsOut,
      isProportional,
      chainId: input.chainId
    };
  }
  buildCall(input) {
    validateBuildCallInput2(input);
    const minAmountsOut = input.amountsOut.map(
      (amountOut) => TokenAmount.fromRawAmount(
        amountOut.token,
        input.slippage.applyTo(amountOut.amount, -1)
      )
    );
    input.callsAttributes.forEach((call) => {
      minAmountsOut.forEach((minAmountOut, j) => {
        const minAmountOutIndex = call.sortedTokens.findIndex(
          (t) => t.isSameAddress(minAmountOut.token.address)
        );
        if (minAmountOutIndex !== -1) {
          call.minAmountsOut[minAmountOutIndex] = minAmountsOut[j].amount;
        }
      });
      call.wethIsEth = !!input.wethIsEth;
      call.sender = call.sender === ZERO_ADDRESS ? input.accountAddress : call.sender;
      call.recipient = call.recipient === ZERO_ADDRESS ? input.accountAddress : call.recipient;
    });
    const encodedCalls = encodeCalls2(
      input.callsAttributes,
      input.isProportional
    );
    if (input.relayerApprovalSignature !== void 0) {
      encodedCalls.unshift(
        Relayer.encodeSetRelayerApproval(
          BALANCER_RELAYER[input.callsAttributes[0].chainId],
          true,
          input.relayerApprovalSignature
        )
      );
    }
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerRelayerAbi,
      functionName: "multicall",
      args: [encodedCalls]
    });
    return {
      callData,
      to: BALANCER_RELAYER[input.callsAttributes[0].chainId],
      minAmountsOut
    };
  }
};

// src/entities/removeLiquidityNested/removeLiquidityNestedV3/index.ts






var RemoveLiquidityNestedV3 = class {
  constructor() {
    __publicField(this, "doQueryRemoveLiquidityProportionalNestedPool", async ({ rpcUrl, chainId }, parentPool, exactBptAmountIn, tokensOut, sender, userData) => {
      const client = _viem.createPublicClient.call(void 0, {
        transport: _viem.http.call(void 0, rpcUrl),
        chain: CHAINS[chainId]
      });
      const { result: amountsOut } = await client.simulateContract({
        address: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
        abi: [
          ...balancerCompositeLiquidityRouterAbi,
          ...vaultV3Abi,
          ...vaultExtensionAbi_V3,
          ...permit2Abi
        ],
        functionName: "queryRemoveLiquidityProportionalNestedPool",
        args: [parentPool, exactBptAmountIn, tokensOut, sender, userData]
      });
      return amountsOut;
    });
  }
  async query(input, nestedPoolState) {
    const parentPool = nestedPoolState.pools.reduce(
      (max2, curr) => curr.level > max2.level ? curr : max2
    );
    const mainTokens = nestedPoolState.mainTokens.map(
      (t) => new Token(input.chainId, t.address, t.decimals)
    );
    const bptToken = new Token(input.chainId, parentPool.address, 18);
    const amountsOut = await this.doQueryRemoveLiquidityProportionalNestedPool(
      input,
      parentPool.address,
      input.bptAmountIn,
      mainTokens.map((t) => t.address),
      _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
      _nullishCoalesce(input.userData, () => ( "0x"))
    );
    return {
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      protocolVersion: 3,
      bptAmountIn: TokenAmount.fromRawAmount(bptToken, input.bptAmountIn),
      chainId: input.chainId,
      parentPool: parentPool.address,
      userData: _nullishCoalesce(input.userData, () => ( "0x")),
      amountsOut: amountsOut.map(
        (a, i) => TokenAmount.fromRawAmount(mainTokens[i], a)
      )
    };
  }
  buildCall(input) {
    const minAmountsOut = input.amountsOut.map(
      (amountOut) => TokenAmount.fromRawAmount(
        amountOut.token,
        input.slippage.applyTo(amountOut.amount, -1)
      )
    );
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "removeLiquidityProportionalNestedPool",
      args: [
        input.parentPool,
        input.bptAmountIn.amount,
        minAmountsOut.map((a) => a.token.address),
        minAmountsOut.map((a) => a.amount),
        _nullishCoalesce(input.wethIsEth, () => ( false)),
        input.userData
      ]
    });
    return {
      callData,
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      minAmountsOut
    };
  }
};

// src/entities/removeLiquidityNested/index.ts

var RemoveLiquidityNested = class {
  async query(input, nestedPoolState) {
    validateNestedPoolState(nestedPoolState);
    switch (nestedPoolState.protocolVersion) {
      case 1: {
        throw new Error(
          "RemoveLiquidityNested not supported for ProtocolVersion 1."
        );
      }
      case 2: {
        const removeLiquidity = new RemoveLiquidityNestedV2();
        return removeLiquidity.query(input, nestedPoolState);
      }
      case 3: {
        const removeLiquidity = new RemoveLiquidityNestedV3();
        return removeLiquidity.query(input, nestedPoolState);
      }
    }
  }
  buildCall(input) {
    switch (input.protocolVersion) {
      case 2: {
        validateBuildCallInput2(input);
        const removeLiquidity = new RemoveLiquidityNestedV2();
        return removeLiquidity.buildCall(input);
      }
      case 3: {
        const removeLiquidity = new RemoveLiquidityNestedV3();
        return removeLiquidity.buildCall(input);
      }
    }
  }
  buildCallWithPermit(input, permit) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      permit.batch,
      permit.signatures,
      { details: [], spender: _viem.zeroAddress, sigDeadline: 0n },
      "0x",
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
  /**
   * Helper to construct RemoveLiquidityNestedCallInput with proper type resolving.
   * @param queryOutput
   * @param params
   * @returns RemoveLiquidityNestedCallInput
   */
  buildRemoveLiquidityInput(queryOutput, params) {
    if (queryOutput.protocolVersion === 2) {
      return {
        ...queryOutput,
        protocolVersion: 2,
        slippage: params.slippage,
        accountAddress: params.accountAddress,
        relayerApprovalSignature: params.relayerApprovalSignature,
        wethIsEth: params.wethIsEth
      };
    }
    return {
      ...queryOutput,
      protocolVersion: 3,
      slippage: params.slippage
    };
  }
};

// src/entities/swap/paths/pathHelpers.ts
function getInputAmount(paths) {
  if (!paths.every(
    (p) => p.inputAmount.token.isEqual(paths[0].inputAmount.token)
  )) {
    throw new Error(
      "Input amount can only be calculated if all paths have the same input token"
    );
  }
  const amounts = paths.map((path) => path.inputAmount);
  return amounts.reduce((a, b) => a.add(b));
}
function getOutputAmount(paths) {
  if (!paths.every(
    (p) => p.outputAmount.token.isEqual(paths[0].outputAmount.token)
  )) {
    throw new Error(
      "Output amount can only be calculated if all paths have the same output token"
    );
  }
  const amounts = paths.map((path) => path.outputAmount);
  return amounts.reduce((a, b) => a.add(b));
}
function validatePaths(paths) {
  if (paths.length === 0)
    throw new Error("Invalid swap: must contain at least 1 path.");
  validateBufferVersion(paths);
  validateBufferLength(paths);
  const protocolVersion = paths[0].protocolVersion;
  if (!paths.every((p) => p.protocolVersion === protocolVersion))
    throw new Error(
      "Unsupported swap: all paths must use same Balancer version."
    );
  const tokenIn = paths[0].tokens[0].address.toLowerCase();
  const tokenOut = paths[0].tokens[paths[0].tokens.length - 1].address.toLowerCase();
  if (!paths.every(
    (p) => p.tokens[0].address.toLowerCase() === tokenIn && p.tokens[p.tokens.length - 1].address.toLowerCase() === tokenOut
  )) {
    throw new Error(
      "Unsupported swap: all paths must start/end with same token."
    );
  }
}
function validateBufferVersion(paths) {
  if (!paths.every((p) => {
    return _optionalChain([p, 'access', _10 => _10.isBuffer, 'optionalAccess', _11 => _11.some, 'call', _12 => _12((b) => b === true)]) ? p.protocolVersion === 3 : true;
  })) {
    throw new Error("Unsupported swap: buffers not supported in V2.");
  }
}
function validateBufferLength(paths) {
  if (!paths.every((p) => {
    return p.isBuffer ? p.isBuffer.length === p.pools.length : true;
  })) {
    throw new Error(
      "Unsupported swap: buffers and pools must have same length."
    );
  }
}
function isBatchSwap(paths, inputToken, outputToken) {
  return paths.length > 1 || paths[0].pools.length > 1 || isSameAddress(paths[0].pools[0], inputToken) || isSameAddress(paths[0].pools[0], outputToken);
}

// src/entities/swap/paths/pathWithAmount.ts
var PathWithAmount = class {
  constructor(chainId, tokens, pools, inputAmountRaw, outputAmountRaw, isBuffer) {
    __publicField(this, "pools");
    __publicField(this, "isBuffer");
    __publicField(this, "tokens");
    __publicField(this, "outputAmount");
    __publicField(this, "inputAmount");
    if (pools.length === 0 || tokens.length < 2) {
      throw new Error(
        "Invalid path: must contain at least 1 pool and 2 tokens."
      );
    }
    if (tokens.length !== pools.length + 1) {
      throw new Error(
        "Invalid path: tokens length must equal pools length + 1"
      );
    }
    const tokenIn = new Token(
      chainId,
      tokens[0].address,
      tokens[0].decimals
    );
    const tokenOut = new Token(
      chainId,
      tokens[tokens.length - 1].address,
      tokens[tokens.length - 1].decimals
    );
    this.pools = pools;
    this.isBuffer = isBuffer ? isBuffer : new Array(this.pools.length).fill(false);
    this.tokens = tokens;
    this.inputAmount = TokenAmount.fromRawAmount(tokenIn, inputAmountRaw);
    this.outputAmount = TokenAmount.fromRawAmount(
      tokenOut,
      outputAmountRaw
    );
  }
};

// src/entities/swap/swaps/v2/index.ts






var SwapV2 = class {
  constructor({ chainId, paths, swapKind }) {
    __publicField(this, "chainId");
    __publicField(this, "isBatchSwap");
    __publicField(this, "paths");
    __publicField(this, "assets");
    __publicField(this, "swapKind");
    __publicField(this, "swaps");
    __publicField(this, "inputAmount");
    __publicField(this, "outputAmount");
    if (paths.length === 0)
      throw new Error("Invalid swap: must contain at least 1 path.");
    this.paths = paths.map(
      (p) => new PathWithAmount(
        chainId,
        p.tokens.map((t) => {
          return {
            ...t,
            address: t.address.toLowerCase()
          };
        }),
        p.pools.map((pool) => pool.toLowerCase()),
        p.inputAmountRaw,
        p.outputAmountRaw,
        void 0
      )
    );
    this.chainId = chainId;
    this.swapKind = swapKind;
    this.inputAmount = getInputAmount(this.paths);
    this.outputAmount = getOutputAmount(this.paths);
    this.isBatchSwap = this.paths.length > 1 || this.paths[0].pools.length > 1;
    this.assets = [
      ...new Set(
        this.paths.flatMap((p) => p.tokens).map((t) => t.address)
      )
    ];
    const swaps = this.getSwaps(this.paths);
    this.swaps = swaps;
  }
  get quote() {
    return this.swapKind === 0 /* GivenIn */ ? this.outputAmount : this.inputAmount;
  }
  // rpcUrl is optional, but recommended to prevent rate limiting
  async query(rpcUrl, block) {
    const client = _viem.createPublicClient.call(void 0, {
      chain: CHAINS[this.chainId],
      transport: rpcUrl ? _viem.http.call(void 0, rpcUrl) : _viem.http.call(void 0, )
    });
    const queriesContract = _viem.getContract.call(void 0, {
      address: BALANCER_QUERIES[this.chainId],
      abi: balancerQueriesAbi,
      client
    });
    return this.isBatchSwap ? this.queryBatchSwap(queriesContract, block) : this.querySingleSwap(queriesContract, block);
  }
  async querySingleSwap(queriesContract, block) {
    const { result } = await queriesContract.simulate.querySwap(
      [this.swaps, DEFAULT_FUND_MANAGMENT],
      { blockNumber: block }
    );
    if (this.swapKind === 0 /* GivenIn */) {
      return {
        to: VAULT[this.chainId],
        swapKind: 0 /* GivenIn */,
        expectedAmountOut: TokenAmount.fromRawAmount(
          this.outputAmount.token,
          result
        ),
        amountIn: this.inputAmount
      };
    }
    return {
      to: VAULT[this.chainId],
      swapKind: 1 /* GivenOut */,
      expectedAmountIn: TokenAmount.fromRawAmount(
        this.inputAmount.token,
        result
      ),
      amountOut: this.outputAmount
    };
  }
  async queryBatchSwap(queriesContract, block) {
    const { result } = await queriesContract.simulate.queryBatchSwap(
      [
        this.swapKind,
        this.swaps,
        this.assets,
        DEFAULT_FUND_MANAGMENT
      ],
      {
        blockNumber: block
      }
    );
    if (this.swapKind === 0 /* GivenIn */) {
      return {
        to: VAULT[this.chainId],
        swapKind: 0 /* GivenIn */,
        expectedAmountOut: TokenAmount.fromRawAmount(
          this.outputAmount.token,
          abs(
            result[this.assets.indexOf(this.outputAmount.token.address)]
          )
        ),
        amountIn: this.inputAmount
      };
    }
    return {
      to: VAULT[this.chainId],
      swapKind: 1 /* GivenOut */,
      expectedAmountIn: TokenAmount.fromRawAmount(
        this.inputAmount.token,
        abs(
          result[this.assets.indexOf(this.inputAmount.token.address)]
        )
      ),
      amountOut: this.outputAmount
    };
  }
  convertWrappedToZero(chainId, address) {
    return address.toLowerCase() === NATIVE_ASSETS[chainId].wrapped.toLowerCase() ? ZERO_ADDRESS : address;
  }
  queryCallData() {
    let callData;
    if (this.isBatchSwap) {
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerQueriesAbi,
        functionName: "queryBatchSwap",
        args: [
          this.swapKind,
          this.swaps,
          this.assets,
          DEFAULT_FUND_MANAGMENT
        ]
      });
    } else {
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerQueriesAbi,
        functionName: "querySwap",
        args: [this.swaps, DEFAULT_FUND_MANAGMENT]
      });
    }
    return callData;
  }
  /**
   * Returns the limits for a batchSwap
   *
   * @param limitAmount maxAmountIn/minAmountOut depending on swap kind
   * @returns
   */
  limitsBatchSwap(limitAmount) {
    const limits = new Array(this.assets.length).fill(0n);
    if (!this.isBatchSwap) {
      throw new Error("Limits: Non batchSwap path.");
    }
    for (let i = 0; i < this.assets.length; i++) {
      if (this.assets[i] === this.inputAmount.token.address) {
        if (this.swapKind === 0 /* GivenIn */) {
          limits[i] = this.inputAmount.amount;
        } else {
          limits[i] = limitAmount.amount;
        }
      }
      if (this.assets[i] === this.outputAmount.token.address) {
        if (this.swapKind === 0 /* GivenIn */) {
          limits[i] = -1n * limitAmount.amount;
        } else {
          limits[i] = -1n * this.outputAmount.amount;
        }
      }
    }
    return limits;
  }
  /**
   * Returns the transaction data to be sent to the vault contract
   *
   * @param input
   * @returns
   */
  buildCall(input) {
    let limitAmount;
    if (input.queryOutput.swapKind === 0 /* GivenIn */) {
      limitAmount = getLimitAmount(
        input.slippage,
        0 /* GivenIn */,
        input.queryOutput.expectedAmountOut
      );
    } else {
      limitAmount = getLimitAmount(
        input.slippage,
        1 /* GivenOut */,
        input.queryOutput.expectedAmountIn
      );
    }
    const funds = {
      sender: input.sender,
      recipient: input.recipient,
      fromInternalBalance: false,
      // Set default to false as not supported in V3 and keeps interface simple
      toInternalBalance: false
    };
    let callData;
    if (this.isBatchSwap) {
      const limits = this.limitsBatchSwap(limitAmount);
      callData = this.callDataBatchSwap(
        limits,
        _nullishCoalesce(input.deadline, () => ( MAX_UINT256)),
        funds,
        !!input.wethIsEth
      );
    } else {
      callData = this.callDataSingleSwap(
        limitAmount.amount,
        _nullishCoalesce(input.deadline, () => ( MAX_UINT256)),
        funds,
        !!input.wethIsEth
      );
    }
    if (this.swapKind === 0 /* GivenIn */) {
      return {
        to: VAULT[this.chainId],
        callData,
        value: this.value(limitAmount, !!input.wethIsEth),
        minAmountOut: limitAmount
      };
    }
    return {
      to: VAULT[this.chainId],
      callData,
      value: this.value(limitAmount, !!input.wethIsEth),
      maxAmountIn: limitAmount
    };
  }
  buildCallWithPermit2() {
    throw new Error("buildCallWithPermit2 is not supported on v2");
  }
  /**
   * Returns the native assset value to be sent to the vault contract based on the swap kind and the limit
   *
   * @param limitAmount
   * @returns
   */
  value(limitAmount, wethIsEth) {
    let value = 0n;
    if (wethIsEth && this.inputAmount.token.address === NATIVE_ASSETS[this.chainId].wrapped) {
      if (this.swapKind === 0 /* GivenIn */)
        value = this.inputAmount.amount;
      else
        value = limitAmount.amount;
    }
    return value;
  }
  /**
   * Returns the call data to be sent to the vault contract for the swap execution.
   *
   * @param limit Limit amount (minOut for ExactIn, maxIn for ExactOut)
   * @param deadline unix timestamp
   * @param funds FundManagement
   * @returns
   */
  callDataSingleSwap(limit, deadline, funds, wethIsEth) {
    const swap = { ...this.swaps };
    if (wethIsEth) {
      swap.assetIn = this.convertWrappedToZero(
        this.chainId,
        swap.assetIn
      );
      swap.assetOut = this.convertWrappedToZero(
        this.chainId,
        swap.assetOut
      );
    }
    return _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "swap",
      args: [swap, funds, limit, deadline]
    });
  }
  /**
   * Returns the call data to be sent to the vault contract for the swap execution.
   *
   * @param limits calculated from swap.limits()
   * @param deadline unix timestamp
   * @param funds FundManagement
   * @returns
   */
  callDataBatchSwap(limits, deadline, funds, wethIsEth) {
    return _viem.encodeFunctionData.call(void 0, {
      abi: vaultV2Abi,
      functionName: "batchSwap",
      args: [
        this.swapKind,
        this.swaps,
        wethIsEth ? this.assets.map(
          (a) => this.convertWrappedToZero(this.chainId, a)
        ) : this.assets,
        funds,
        limits,
        deadline
      ]
    });
  }
  // helper methods
  getSwaps(paths) {
    let swaps;
    if (this.isBatchSwap) {
      swaps = [];
      if (this.swapKind === 0 /* GivenIn */) {
        paths.map((p) => {
          p.pools.map((pool, i) => {
            swaps.push({
              poolId: pool,
              assetInIndex: BigInt(
                this.assets.indexOf(p.tokens[i].address)
              ),
              assetOutIndex: BigInt(
                this.assets.indexOf(p.tokens[i + 1].address)
              ),
              amount: i === 0 ? p.inputAmount.amount : 0n,
              userData: DEFAULT_USERDATA
            });
          });
        });
      } else {
        paths.map((p) => {
          const reversedPools = [...p.pools].reverse();
          const reversedTokens = [...p.tokens].reverse();
          reversedPools.map((pool, i) => {
            swaps.push({
              poolId: pool,
              assetInIndex: BigInt(
                this.assets.indexOf(
                  reversedTokens[i + 1].address
                )
              ),
              assetOutIndex: BigInt(
                this.assets.indexOf(reversedTokens[i].address)
              ),
              amount: i === 0 ? p.outputAmount.amount : 0n,
              userData: DEFAULT_USERDATA
            });
          });
        });
      }
    } else {
      const path = paths[0];
      const pool = path.pools[0];
      swaps = {
        poolId: pool,
        kind: this.swapKind,
        assetIn: path.tokens[0].address,
        assetOut: path.tokens[1].address,
        amount: this.swapKind === 0 /* GivenIn */ ? path.inputAmount.amount : path.outputAmount.amount,
        userData: DEFAULT_USERDATA
      };
    }
    return swaps;
  }
};

// src/entities/swap/swaps/v3/index.ts







var SwapV3 = class {
  constructor({
    chainId,
    paths,
    swapKind,
    userData = DEFAULT_USERDATA
  }) {
    __publicField(this, "chainId");
    __publicField(this, "isBatchSwap");
    __publicField(this, "paths");
    __publicField(this, "swapKind");
    __publicField(this, "userData");
    __publicField(this, "swaps");
    __publicField(this, "inputAmount");
    __publicField(this, "outputAmount");
    if (paths.length === 0)
      throw new Error("Invalid swap: must contain at least 1 path.");
    this.paths = paths.map(
      (p) => new PathWithAmount(
        chainId,
        p.tokens,
        p.pools,
        p.inputAmountRaw,
        p.outputAmountRaw,
        p.isBuffer
      )
    );
    this.chainId = chainId;
    this.swapKind = swapKind;
    this.inputAmount = getInputAmount(this.paths);
    this.outputAmount = getOutputAmount(this.paths);
    this.isBatchSwap = isBatchSwap(
      paths,
      this.inputAmount.token.address,
      this.outputAmount.token.address
    );
    this.swaps = this.getSwaps(this.paths);
    this.userData = userData;
  }
  get quote() {
    return this.swapKind === 0 /* GivenIn */ ? this.outputAmount : this.inputAmount;
  }
  // rpcUrl is optional, but recommended to prevent rate limiting
  async query(rpcUrl, block, sender) {
    const client = _viem.createPublicClient.call(void 0, {
      chain: CHAINS[this.chainId],
      transport: rpcUrl ? _viem.http.call(void 0, rpcUrl) : _viem.http.call(void 0, )
    });
    return this.isBatchSwap ? this.queryBatchSwap(client, block, sender) : this.querySingleSwap(client, block, sender);
  }
  async querySingleSwap(client, block, sender) {
    const routerContract = _viem.getContract.call(void 0, {
      address: BALANCER_ROUTER[this.chainId],
      abi: [
        ...balancerRouterAbi,
        ...vaultV3Abi,
        ...vaultExtensionAbi_V3,
        ...permit2Abi
      ],
      client
    });
    if ("exactAmountIn" in this.swaps) {
      const { result } = await routerContract.simulate.querySwapSingleTokenExactIn(
        [
          this.swaps.pool,
          this.swaps.tokenIn,
          this.swaps.tokenOut,
          this.swaps.exactAmountIn,
          _nullishCoalesce(sender, () => ( _viem.zeroAddress)),
          this.userData
        ],
        { blockNumber: block }
      );
      return {
        to: BALANCER_ROUTER[this.chainId],
        swapKind: 0 /* GivenIn */,
        expectedAmountOut: TokenAmount.fromRawAmount(
          this.outputAmount.token,
          result
        ),
        amountIn: this.inputAmount
      };
    }
    if ("exactAmountOut" in this.swaps) {
      const { result } = await routerContract.simulate.querySwapSingleTokenExactOut(
        [
          this.swaps.pool,
          this.swaps.tokenIn,
          this.swaps.tokenOut,
          this.swaps.exactAmountOut,
          _nullishCoalesce(sender, () => ( _viem.zeroAddress)),
          this.userData
        ],
        { blockNumber: block }
      );
      return {
        to: BALANCER_ROUTER[this.chainId],
        swapKind: 1 /* GivenOut */,
        expectedAmountIn: TokenAmount.fromRawAmount(
          this.inputAmount.token,
          result
        ),
        amountOut: this.outputAmount
      };
    }
    throw Error("Unsupported V3 Query");
  }
  getSwapsWithLimits(pathLimits) {
    let totalPathLimits = 0n;
    if (this.swapKind === 0 /* GivenIn */) {
      const swapsWithLimits2 = this.swaps.map(
        (s, i) => {
          const minAmountOut = pathLimits ? pathLimits[i] : 0n;
          totalPathLimits += minAmountOut;
          return {
            ...s,
            minAmountOut
          };
        }
      );
      return { swapsWithLimits: swapsWithLimits2, totalPathLimits };
    }
    const swapsWithLimits = this.swaps.map(
      (s, i) => {
        const maxAmountIn = pathLimits ? pathLimits[i] : 0n;
        totalPathLimits += maxAmountIn;
        return {
          ...s,
          maxAmountIn
        };
      }
    );
    return { swapsWithLimits, totalPathLimits };
  }
  async queryBatchSwap(client, block, sender) {
    const batchRouterContract = _viem.getContract.call(void 0, {
      address: BALANCER_BATCH_ROUTER[this.chainId],
      abi: [
        ...balancerBatchRouterAbi,
        ...vaultV3Abi,
        ...vaultExtensionAbi_V3,
        ...permit2Abi
      ],
      client
    });
    const swapsWithLimits = this.getSwapsWithLimits();
    if (this.swapKind === 0 /* GivenIn */) {
      const { result: result2 } = await batchRouterContract.simulate.querySwapExactIn(
        [
          swapsWithLimits.swapsWithLimits,
          _nullishCoalesce(sender, () => ( _viem.zeroAddress)),
          this.userData
        ],
        { blockNumber: block }
      );
      if (result2[1].length !== 1)
        throw Error(
          "Swaps only support paths with matching tokenIn>tokenOut"
        );
      return {
        to: BALANCER_BATCH_ROUTER[this.chainId],
        swapKind: 0 /* GivenIn */,
        expectedAmountOut: TokenAmount.fromRawAmount(
          this.outputAmount.token,
          result2[2][0]
        ),
        amountIn: this.inputAmount,
        pathAmounts: result2[0]
      };
    }
    const { result } = await batchRouterContract.simulate.querySwapExactOut(
      [
        swapsWithLimits.swapsWithLimits,
        _nullishCoalesce(sender, () => ( _viem.zeroAddress)),
        this.userData
      ],
      { blockNumber: block }
    );
    if (result[1].length !== 1)
      throw Error(
        "Swaps only support paths with matching tokenIn>tokenOut"
      );
    return {
      to: BALANCER_BATCH_ROUTER[this.chainId],
      swapKind: 1 /* GivenOut */,
      expectedAmountIn: TokenAmount.fromRawAmount(
        this.inputAmount.token,
        result[2][0]
      ),
      amountOut: this.outputAmount,
      pathAmounts: result[0]
    };
  }
  queryCallData() {
    let callData;
    if (this.isBatchSwap) {
      const swapsWithLimits = this.getSwapsWithLimits();
      if (this.swapKind === 0 /* GivenIn */) {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerBatchRouterAbi,
          functionName: "querySwapExactIn",
          args: [
            swapsWithLimits.swapsWithLimits,
            _viem.zeroAddress,
            this.userData
          ]
        });
      } else {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerBatchRouterAbi,
          functionName: "querySwapExactOut",
          args: [
            swapsWithLimits.swapsWithLimits,
            _viem.zeroAddress,
            this.userData
          ]
        });
      }
    } else {
      if ("exactAmountIn" in this.swaps) {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerRouterAbi,
          functionName: "querySwapSingleTokenExactIn",
          args: [
            this.swaps.pool,
            this.swaps.tokenIn,
            this.swaps.tokenOut,
            this.swaps.exactAmountIn,
            _viem.zeroAddress,
            this.userData
          ]
        });
      } else if ("exactAmountOut" in this.swaps) {
        callData = _viem.encodeFunctionData.call(void 0, {
          abi: balancerRouterAbi,
          functionName: "querySwapSingleTokenExactOut",
          args: [
            this.swaps.pool,
            this.swaps.tokenIn,
            this.swaps.tokenOut,
            this.swaps.exactAmountOut,
            _viem.zeroAddress,
            this.userData
          ]
        });
      } else
        throw new Error("Incorrect V3 Swap");
    }
    return callData;
  }
  /**
   * Returns the transaction data to be sent to the router contract
   *
   * @param input
   * @returns
   */
  buildCall(input) {
    let limitAmount;
    let call;
    if (input.queryOutput.swapKind === 0 /* GivenIn */) {
      limitAmount = getLimitAmount(
        input.slippage,
        0 /* GivenIn */,
        input.queryOutput.expectedAmountOut
      );
    } else {
      limitAmount = getLimitAmount(
        input.slippage,
        1 /* GivenOut */,
        input.queryOutput.expectedAmountIn
      );
    }
    if (!this.isBatchSwap) {
      call = {
        to: BALANCER_ROUTER[this.chainId],
        callData: this.callDataSingleSwap(
          limitAmount,
          _nullishCoalesce(input.deadline, () => ( MAX_UINT256)),
          !!input.wethIsEth
        ),
        value: this.value(limitAmount, !!input.wethIsEth)
      };
    } else {
      const pathLimits = getPathLimits(
        input.slippage,
        input.queryOutput,
        limitAmount.amount
      );
      if (!pathLimits)
        throw Error(
          "V3 BatchSwaps need path limits for call construction"
        );
      call = {
        to: BALANCER_BATCH_ROUTER[this.chainId],
        callData: this.callDataBatchSwap(
          limitAmount.amount,
          pathLimits,
          _nullishCoalesce(input.deadline, () => ( MAX_UINT256)),
          !!input.wethIsEth
        ),
        value: this.value(limitAmount, !!input.wethIsEth)
      };
    }
    if (this.swapKind === 0 /* GivenIn */) {
      return {
        ...call,
        minAmountOut: limitAmount
      };
    }
    return {
      ...call,
      maxAmountIn: limitAmount
    };
  }
  buildCallWithPermit2(input, permit2) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      [],
      [],
      permit2.batch,
      permit2.signature,
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerBatchRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
  /**
   * Returns the call data to be sent to the router contract for a single token swap execution.
   * @param limit minAmountOut/maxAmountIn depending on SwapKind
   * @param deadline
   * @param wethIsEth
   * @returns
   */
  callDataSingleSwap(limit, deadline, wethIsEth) {
    let callData;
    if ("exactAmountIn" in this.swaps) {
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerRouterAbi,
        functionName: "swapSingleTokenExactIn",
        args: [
          this.swaps.pool,
          this.swaps.tokenIn,
          this.swaps.tokenOut,
          this.swaps.exactAmountIn,
          limit.amount,
          // minAmountOut
          deadline,
          wethIsEth,
          this.userData
        ]
      });
    } else if ("exactAmountOut" in this.swaps) {
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerRouterAbi,
        functionName: "swapSingleTokenExactOut",
        args: [
          this.swaps.pool,
          this.swaps.tokenIn,
          this.swaps.tokenOut,
          this.swaps.exactAmountOut,
          limit.amount,
          // maxAmountIn
          deadline,
          wethIsEth,
          this.userData
        ]
      });
    } else
      throw new Error("Incorrect V3 Swap");
    return callData;
  }
  /**
   * Returns the call data to be sent to the router contract for batchSwap execution.
   * @param limitAmount total minAmountOut/maxAmountIn depending on SwapKind
   * @param pathLimits individual path minAmountOut/maxAmountIn depending on SwapKind
   * @param deadline
   * @param wethIsEth
   * @returns
   */
  callDataBatchSwap(limitAmount, pathLimits, deadline, wethIsEth) {
    let callData;
    const swapsWithLimits = this.getSwapsWithLimits(pathLimits);
    if (this.swapKind === 0 /* GivenIn */) {
      if (this.swaps.length !== pathLimits.length)
        throw Error("Must have a limit for each path.");
      if (swapsWithLimits.totalPathLimits !== limitAmount)
        throw new Error(
          `minAmountOut mismatch, ${limitAmount} ${swapsWithLimits.totalPathLimits}`
        );
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerBatchRouterAbi,
        functionName: "swapExactIn",
        args: [
          swapsWithLimits.swapsWithLimits,
          deadline,
          wethIsEth,
          this.userData
        ]
      });
    } else {
      if (this.swaps.length !== pathLimits.length)
        throw Error("Must have a limit for each path.");
      if (swapsWithLimits.totalPathLimits !== limitAmount)
        throw new Error(
          `maxAmountIn mismatch, ${limitAmount} ${swapsWithLimits.totalPathLimits}`
        );
      callData = _viem.encodeFunctionData.call(void 0, {
        abi: balancerBatchRouterAbi,
        functionName: "swapExactOut",
        args: [
          swapsWithLimits.swapsWithLimits,
          deadline,
          wethIsEth,
          this.userData
        ]
      });
    }
    return callData;
  }
  /**
   * Returns the native assset value to be sent to the router contract based on the swap kind and the limit amounts
   *
   * @param limit
   * @returns
   */
  value(limit, wethIsEth) {
    let value = 0n;
    if (wethIsEth && this.inputAmount.token.address === NATIVE_ASSETS[this.chainId].wrapped) {
      if (this.isBatchSwap) {
        if (this.swapKind === 0 /* GivenIn */) {
          for (const swap of this.swaps) {
            value += swap.exactAmountIn;
          }
        } else {
          value = limit.amount;
        }
      } else {
        if ("exactAmountIn" in this.swaps)
          value = this.swaps.exactAmountIn;
        else if ("exactAmountOut" in this.swaps)
          value = limit.amount;
        else
          throw new Error("Incorrect V3 Swap");
      }
    }
    return value;
  }
  // helper methods
  getSwaps(paths) {
    let swaps;
    if (this.isBatchSwap) {
      if (this.swapKind === 0 /* GivenIn */) {
        swaps = [];
        swaps = paths.map((p) => {
          return {
            tokenIn: p.inputAmount.token.address,
            exactAmountIn: p.inputAmount.amount,
            steps: p.pools.map((pool, i) => {
              return {
                pool,
                tokenOut: p.tokens[i + 1].address,
                isBuffer: p.isBuffer[i]
              };
            })
          };
        });
      } else {
        swaps = [];
        swaps = paths.map((p) => {
          return {
            tokenIn: p.inputAmount.token.address,
            exactAmountOut: p.outputAmount.amount,
            steps: p.pools.map((pool, i) => {
              return {
                pool,
                tokenOut: p.tokens[i + 1].address,
                isBuffer: p.isBuffer[i]
              };
            })
          };
        });
      }
    } else {
      const path = paths[0];
      const pool = path.pools[0];
      const tokenIn = path.tokens[0].address;
      const tokenOut = path.tokens[1].address;
      if (this.swapKind === 0 /* GivenIn */) {
        swaps = {
          pool,
          tokenIn,
          tokenOut,
          exactAmountIn: path.inputAmount.amount
        };
      } else {
        swaps = {
          pool,
          tokenIn,
          tokenOut,
          exactAmountOut: path.outputAmount.amount
        };
      }
    }
    return swaps;
  }
};

// src/entities/swap/index.ts
var Swap = class {
  constructor(swapInput) {
    __publicField(this, "swap");
    __publicField(this, "protocolVersion");
    validatePaths(swapInput.paths);
    const _protocolVersion = swapInput.paths[0].protocolVersion;
    switch (_protocolVersion) {
      case 2:
        this.swap = new SwapV2(swapInput);
        break;
      case 3:
        this.swap = new SwapV3(swapInput);
        break;
      default:
        throw Error(
          `SDK does not support swap for vault version: ${_protocolVersion}`
        );
    }
    this.protocolVersion = _protocolVersion;
  }
  get quote() {
    return this.swap.swapKind === 0 /* GivenIn */ ? this.outputAmount : this.inputAmount;
  }
  get inputAmount() {
    return this.swap.inputAmount;
  }
  get outputAmount() {
    return this.swap.outputAmount;
  }
  get isBatchSwap() {
    return this.swap.isBatchSwap;
  }
  // rpcUrl is optional, but recommended to prevent rate limiting
  async query(rpcUrl, block, sender) {
    return this.swap.query(rpcUrl, block, sender);
  }
  queryCallData() {
    return this.swap.queryCallData();
  }
  /**
   * Returns the transaction data to be sent to the vault contract
   *
   * @param input
   * @returns
   */
  buildCall(input) {
    const isV2Input = "sender" in input;
    if (this.protocolVersion === 3 && isV2Input)
      throw Error("Cannot define sender/recipient in V3");
    if (this.protocolVersion === 2 && !isV2Input)
      throw Error("Sender/recipient must be defined in V2");
    return this.swap.buildCall(input);
  }
  buildCallWithPermit2(input, permit2) {
    InputValidator.validateBuildCallWithPermit2({
      protocolVersion: this.protocolVersion
    });
    return this.swap.buildCallWithPermit2(input, permit2);
  }
};

// src/entities/priceImpactAmount.ts

var PriceImpactAmount = class _PriceImpactAmount {
  constructor(amount) {
    __publicField(this, "amount");
    // raw amount in wei (i.e. 18 decimals)
    __publicField(this, "decimal");
    // decimal = wei * 1e-18
    __publicField(this, "percentage");
    // percentage = decimal * 1e-2
    __publicField(this, "bps");
    this.amount = BigInt(amount);
    this.decimal = parseFloat(_viem.formatEther.call(void 0, this.amount));
    this.percentage = this.decimal * 100;
    this.bps = this.decimal * 1e4;
  }
  // bps = basis points = decimal * 1e-4
  static fromRawAmount(rawAmount) {
    return new _PriceImpactAmount(rawAmount);
  }
  static fromDecimal(decimalAmount) {
    const rawAmount = _viem.parseEther.call(void 0, decimalAmount);
    return _PriceImpactAmount.fromRawAmount(rawAmount);
  }
  static fromPercentage(percentageAmount) {
    const decimalAmount = Number(percentageAmount) / 100;
    return _PriceImpactAmount.fromDecimal(`${decimalAmount}`);
  }
  static fromBasisPoints(bpsAmount) {
    const decimalAmount = Number(bpsAmount) / 1e4;
    return _PriceImpactAmount.fromDecimal(`${decimalAmount}`);
  }
};

// src/entities/priceImpact/helper.ts
var priceImpactABA = (initialA, finalA) => {
  const priceImpact = MathSol.divDownFixed(
    initialA.scale18 - finalA.scale18,
    initialA.scale18 * 2n
  );
  return PriceImpactAmount.fromRawAmount(priceImpact);
};

// src/entities/removeLiquidityBoosted/index.ts


// src/entities/removeLiquidityBoosted/doRemoveLiquidityProportionalQuery.ts

var doRemoveLiquidityProportionalQuery2 = async (rpcUrl, chainId, exactBptAmountIn, sender, userData, poolAddress) => {
  const client = _viem.createPublicClient.call(void 0, {
    transport: _viem.http.call(void 0, rpcUrl),
    chain: CHAINS[chainId]
  });
  const { result: underlyingAmountsOut } = await client.simulateContract({
    address: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[chainId],
    abi: balancerCompositeLiquidityRouterAbi,
    functionName: "queryRemoveLiquidityProportionalFromERC4626Pool",
    args: [poolAddress, exactBptAmountIn, sender, userData]
  });
  return [...underlyingAmountsOut];
};

// src/entities/removeLiquidityBoosted/index.ts
var RemoveLiquidityBoostedV3 = class {
  constructor() {
    __publicField(this, "inputValidator", new InputValidator());
  }
  async query(input, poolState) {
    this.inputValidator.validateRemoveLiquidity(input, {
      ...poolState,
      type: "Boosted"
    });
    const underlyingAmountsOut = await doRemoveLiquidityProportionalQuery2(
      input.rpcUrl,
      input.chainId,
      input.bptIn.rawAmount,
      _nullishCoalesce(input.sender, () => ( _viem.zeroAddress)),
      _nullishCoalesce(input.userData, () => ( "0x")),
      poolState.address
    );
    const childTokens = poolState.tokens.map((t) => {
      if (t.underlyingToken) {
        return t.underlyingToken;
      }
      return {
        address: t.address,
        decimals: t.decimals,
        index: t.index
      };
    });
    const sortedChildTokens = getSortedTokens(childTokens, input.chainId);
    const amountsOut = underlyingAmountsOut.map((amount, i) => {
      const token = new Token(
        input.chainId,
        sortedChildTokens[i].address,
        sortedChildTokens[i].decimals
      );
      return TokenAmount.fromRawAmount(token, amount);
    });
    const bptToken = new Token(input.chainId, poolState.address, 18);
    const output = {
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      poolType: poolState.type,
      poolId: poolState.address,
      removeLiquidityKind: "Proportional" /* Proportional */,
      bptIn: TokenAmount.fromRawAmount(bptToken, input.bptIn.rawAmount),
      amountsOut,
      protocolVersion: 3,
      chainId: input.chainId,
      userData: _nullishCoalesce(input.userData, () => ( "0x"))
    };
    return output;
  }
  buildCall(input) {
    const amounts = getAmountsCall2(input);
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "removeLiquidityProportionalFromERC4626Pool",
      args: [
        input.poolId,
        input.bptIn.amount,
        amounts.minAmountsOut,
        _nullishCoalesce(input.wethIsEth, () => ( false)),
        input.userData
      ]
    });
    return {
      callData,
      to: BALANCER_COMPOSITE_LIQUIDITY_ROUTER[input.chainId],
      value: 0n,
      // always has 0 value
      maxBptIn: input.bptIn,
      minAmountsOut: amounts.minAmountsOut.map((amount, i) => {
        return TokenAmount.fromRawAmount(
          input.amountsOut[i].token,
          amount
        );
      })
    };
  }
  buildCallWithPermit(input, permit) {
    const buildCallOutput = this.buildCall(input);
    const args = [
      permit.batch,
      permit.signatures,
      { details: [], spender: _viem.zeroAddress, sigDeadline: 0n },
      "0x",
      [buildCallOutput.callData]
    ];
    const callData = _viem.encodeFunctionData.call(void 0, {
      abi: balancerCompositeLiquidityRouterAbi,
      functionName: "permitBatchAndCall",
      args
    });
    return {
      ...buildCallOutput,
      callData
    };
  }
};

// src/entities/priceImpact/addLiquidityUnbalancedBoosted.ts

async function addLiquidityUnbalancedBoosted(input, poolState) {
  const addLiquidity = new AddLiquidityBoostedV3();
  let amountsIn;
  let bptOut;
  try {
    const queryResult = await addLiquidity.query(input, poolState);
    amountsIn = queryResult.amountsIn;
    bptOut = queryResult.bptOut;
  } catch (err) {
    throw new Error(
      `addLiquidity operation will fail at SC level with user defined input.
${err}`
    );
  }
  const poolTokens = amountsIn.map((a) => a.token);
  const removeLiquidity = new RemoveLiquidityBoostedV3();
  const removeLiquidityInput = {
    chainId: input.chainId,
    rpcUrl: input.rpcUrl,
    bptIn: bptOut.toInputAmount(),
    kind: "Proportional" /* Proportional */
  };
  const { amountsOut } = await removeLiquidity.query(
    removeLiquidityInput,
    poolState
  );
  const deltas = amountsOut.map((a, i) => a.amount - amountsIn[i].amount);
  const deltaBPTs = [];
  for (let i = 0; i < deltas.length; i++) {
    if (deltas[i] === 0n) {
      deltaBPTs.push(0n);
    } else {
      deltaBPTs.push(
        await queryAddLiquidityForTokenDelta(
          addLiquidity,
          input,
          poolState,
          poolTokens,
          i,
          deltas[i]
        )
      );
    }
  }
  let remainingDeltaIndex = 0;
  if (deltaBPTs.some((deltaBPT) => deltaBPT !== 0n)) {
    remainingDeltaIndex = await zeroOutDeltas(
      addLiquidity,
      input,
      poolState,
      poolTokens,
      deltas,
      deltaBPTs
    );
  }
  const deltaAmount = TokenAmount.fromRawAmount(
    amountsIn[remainingDeltaIndex].token,
    abs(deltas[remainingDeltaIndex])
  );
  return priceImpactABA(
    amountsIn[remainingDeltaIndex],
    amountsIn[remainingDeltaIndex].sub(deltaAmount)
  );
}
async function queryAddLiquidityForTokenDelta(addLiquidity, input, poolState, poolTokens, tokenIndex, delta) {
  const absDelta = TokenAmount.fromRawAmount(
    poolTokens[tokenIndex],
    abs(delta)
  );
  const amountsIn = [absDelta.toInputAmount()];
  if (absDelta.amount <= 1000n)
    amountsIn[0].rawAmount = 1001n;
  try {
    const { bptOut: deltaBPT } = await addLiquidity.query(
      {
        ...input,
        amountsIn
      },
      poolState
    );
    return delta < 0n ? -deltaBPT.amount : deltaBPT.amount;
  } catch (err) {
    if (err instanceof _viem.BaseError) {
      const revertError = err.walk(
        (err2) => err2 instanceof _viem.ContractFunctionRevertedError
      );
      if (revertError instanceof _viem.ContractFunctionRevertedError) {
        const errorName = _nullishCoalesce(_optionalChain([revertError, 'access', _13 => _13.data, 'optionalAccess', _14 => _14.errorName]), () => ( ""));
        if (errorName === "WrapAmountTooSmall") {
          return 0n;
        }
      }
    }
    throw new Error(
      `Unexpected error while calculating addLiquidityUnbalancedBoosted PI at Delta add step:
${err}`
    );
  }
}
async function zeroOutDeltas(addLiquidity, input, poolState, poolTokens, deltas, deltaBPTs) {
  let minNegativeDeltaIndex = deltaBPTs.findIndex(
    (deltaBPT) => deltaBPT === max(deltaBPTs.filter((a) => a < 0n))
  );
  const nonZeroDeltasBPTs = deltaBPTs.filter((d) => d !== 0n);
  for (let i = 0; i < nonZeroDeltasBPTs.length - 1; i++) {
    const minPositiveDeltaIndex = deltaBPTs.findIndex(
      (deltaBPT) => deltaBPT === min(deltaBPTs.filter((a) => a > 0n))
    );
    minNegativeDeltaIndex = deltaBPTs.findIndex(
      (deltaBPT) => deltaBPT === max(deltaBPTs.filter((a) => a < 0n))
    );
    let swapKind;
    let givenTokenIndex;
    let resultTokenIndex;
    let inputAmountRaw = 0n;
    let outputAmountRaw = 0n;
    if (deltaBPTs[minPositiveDeltaIndex] < abs(deltaBPTs[minNegativeDeltaIndex])) {
      swapKind = 0 /* GivenIn */;
      givenTokenIndex = minPositiveDeltaIndex;
      resultTokenIndex = minNegativeDeltaIndex;
      inputAmountRaw = abs(deltas[givenTokenIndex]);
    } else {
      swapKind = 1 /* GivenOut */;
      givenTokenIndex = minNegativeDeltaIndex;
      resultTokenIndex = minPositiveDeltaIndex;
      outputAmountRaw = abs(deltas[givenTokenIndex]);
    }
    const tokenIn = poolTokens[minPositiveDeltaIndex].toInputToken();
    const tokenInWrapInfo = getTokenWrapInfo(poolState.tokens, tokenIn);
    const tokenOut = poolTokens[minNegativeDeltaIndex].toInputToken();
    const tokenOutWrapInfo = getTokenWrapInfo(poolState.tokens, tokenOut);
    const swapInput = buildSwapInput(
      input.chainId,
      swapKind,
      poolState.address,
      tokenInWrapInfo,
      tokenOutWrapInfo,
      inputAmountRaw,
      outputAmountRaw
    );
    try {
      const swap = new Swap(swapInput);
      const result = await swap.query(input.rpcUrl);
      const resultAmount = result.swapKind === 0 /* GivenIn */ ? result.expectedAmountOut : result.expectedAmountIn;
      deltas[givenTokenIndex] = 0n;
      deltaBPTs[givenTokenIndex] = 0n;
      deltas[resultTokenIndex] = deltas[resultTokenIndex] + resultAmount.amount;
      deltaBPTs[resultTokenIndex] = await queryAddLiquidityForTokenDelta(
        addLiquidity,
        input,
        poolState,
        poolTokens,
        resultTokenIndex,
        deltas[resultTokenIndex]
      );
    } catch (err) {
      throw new Error(
        `Unexpected error while calculating addLiquidityUnbalancedBoosted PI at Swap step:
${err}`
      );
    }
  }
  return minNegativeDeltaIndex;
}
function getTokenWrapInfo(tokens, token) {
  const poolToken = tokens.find(
    (t) => isSameAddress(t.address, token.address)
  );
  if (poolToken)
    return {
      token: poolToken,
      shouldWrap: false,
      wrapped: void 0
    };
  const wrapped = tokens.filter((t) => t.underlyingToken !== null).find((t) => isSameAddress(t.underlyingToken.address, token.address));
  if (!wrapped)
    throw Error(`Cannot map token to wrapped: ${token.address}`);
  return {
    token,
    shouldWrap: true,
    wrapped
  };
}
function buildSwapInput(chainId, swapKind, pool, tokenInWrapInfo, tokenOutWrapInfo, inputAmountRaw, outputAmountRaw) {
  const inTokens = [
    {
      address: tokenInWrapInfo.token.address,
      decimals: tokenInWrapInfo.token.decimals
    }
  ];
  const outTokens = [
    {
      address: tokenOutWrapInfo.token.address,
      decimals: tokenOutWrapInfo.token.decimals
    }
  ];
  const pools = [pool];
  const isBuffer = [false];
  if (tokenInWrapInfo.shouldWrap) {
    inTokens.push({
      address: tokenInWrapInfo.wrapped.address,
      decimals: tokenInWrapInfo.wrapped.decimals
    });
    pools.unshift(tokenInWrapInfo.wrapped.address);
    isBuffer.unshift(true);
  }
  if (tokenOutWrapInfo.shouldWrap) {
    outTokens.unshift({
      address: tokenOutWrapInfo.wrapped.address,
      decimals: tokenOutWrapInfo.wrapped.decimals
    });
    pools.push(tokenOutWrapInfo.wrapped.address);
    isBuffer.push(true);
  }
  const swapInput = {
    chainId,
    paths: [
      {
        tokens: [...inTokens, ...outTokens],
        pools,
        isBuffer,
        inputAmountRaw,
        outputAmountRaw,
        protocolVersion: 3
      }
    ],
    swapKind
  };
  return swapInput;
}

// src/entities/priceImpact/addLiquidityUnbalanced.ts
var addLiquidityUnbalanced = async (input, poolState) => {
  const addLiquidity = new AddLiquidity();
  let amountsIn;
  let bptOut;
  let poolTokens;
  try {
    const queryResult = await addLiquidity.query(input, poolState);
    amountsIn = queryResult.amountsIn;
    bptOut = queryResult.bptOut;
    poolTokens = amountsIn.map((a) => a.token);
  } catch (err) {
    throw new Error(
      `addLiquidityUnbalanced operation will fail at SC level with user defined input.
${err}`
    );
  }
  const removeLiquidity = new RemoveLiquidity();
  const removeLiquidityInput = {
    chainId: input.chainId,
    rpcUrl: input.rpcUrl,
    bptIn: bptOut.toInputAmount(),
    kind: "Proportional" /* Proportional */
  };
  const { amountsOut } = await removeLiquidity.query(
    removeLiquidityInput,
    poolState
  );
  const deltas = amountsOut.map((a, i) => a.amount - amountsIn[i].amount);
  const deltaBPTs = [];
  for (let i = 0; i < deltas.length; i++) {
    if (deltas[i] === 0n) {
      deltaBPTs.push(0n);
    } else {
      try {
        deltaBPTs.push(await queryAddLiquidityForTokenDelta2(i));
      } catch (err) {
        throw new Error(
          `Unexpected error while calculating addLiquidityUnbalanced PI at Delta add step:
${err}`
        );
      }
    }
  }
  let remainingDeltaIndex = 0;
  if (deltaBPTs.some((deltaBPT) => deltaBPT !== 0n)) {
    remainingDeltaIndex = await zeroOutDeltas2(deltas, deltaBPTs);
  }
  const deltaAmount = TokenAmount.fromRawAmount(
    amountsIn[remainingDeltaIndex].token,
    abs(deltas[remainingDeltaIndex])
  );
  return priceImpactABA(
    amountsIn[remainingDeltaIndex],
    amountsIn[remainingDeltaIndex].sub(deltaAmount)
  );
  async function zeroOutDeltas2(deltas2, deltaBPTs2) {
    let minNegativeDeltaIndex = deltaBPTs2.findIndex(
      (deltaBPT) => deltaBPT === max(deltaBPTs2.filter((a) => a < 0n))
    );
    const nonZeroDeltasBPTs = deltaBPTs2.filter((d) => d !== 0n);
    for (let i = 0; i < nonZeroDeltasBPTs.length - 1; i++) {
      const minPositiveDeltaIndex = deltaBPTs2.findIndex(
        (deltaBPT) => deltaBPT === min(deltaBPTs2.filter((a) => a > 0n))
      );
      minNegativeDeltaIndex = deltaBPTs2.findIndex(
        (deltaBPT) => deltaBPT === max(deltaBPTs2.filter((a) => a < 0n))
      );
      let swapKind;
      let givenTokenIndex;
      let resultTokenIndex;
      let inputAmountRaw = 0n;
      let outputAmountRaw = 0n;
      if (deltaBPTs2[minPositiveDeltaIndex] < abs(deltaBPTs2[minNegativeDeltaIndex])) {
        swapKind = 0 /* GivenIn */;
        givenTokenIndex = minPositiveDeltaIndex;
        resultTokenIndex = minNegativeDeltaIndex;
        inputAmountRaw = abs(deltas2[givenTokenIndex]);
      } else {
        swapKind = 1 /* GivenOut */;
        givenTokenIndex = minNegativeDeltaIndex;
        resultTokenIndex = minPositiveDeltaIndex;
        outputAmountRaw = abs(deltas2[givenTokenIndex]);
      }
      try {
        const swapInput = {
          chainId: input.chainId,
          paths: [
            {
              tokens: [
                poolTokens[minPositiveDeltaIndex].toInputToken(),
                poolTokens[minNegativeDeltaIndex].toInputToken()
              ],
              pools: [poolState.id],
              inputAmountRaw,
              outputAmountRaw,
              protocolVersion: poolState.protocolVersion
            }
          ],
          swapKind
        };
        const swap = new Swap(swapInput);
        const result = await swap.query(input.rpcUrl);
        const resultAmount = result.swapKind === 0 /* GivenIn */ ? result.expectedAmountOut : result.expectedAmountIn;
        deltas2[givenTokenIndex] = 0n;
        deltaBPTs2[givenTokenIndex] = 0n;
        deltas2[resultTokenIndex] = deltas2[resultTokenIndex] + resultAmount.amount;
        deltaBPTs2[resultTokenIndex] = await queryAddLiquidityForTokenDelta2(resultTokenIndex);
      } catch (err) {
        throw new Error(
          `Unexpected error while calculating addLiquidityUnbalanced PI at Swap step:
${err}`
        );
      }
    }
    return minNegativeDeltaIndex;
  }
  async function queryAddLiquidityForTokenDelta2(tokenIndex) {
    const absDelta = TokenAmount.fromRawAmount(
      poolTokens[tokenIndex],
      abs(deltas[tokenIndex])
    );
    const { bptOut: deltaBPT } = await addLiquidity.query(
      {
        ...input,
        amountsIn: [absDelta.toInputAmount()]
      },
      poolState
    );
    const signal = deltas[tokenIndex] >= 0n ? 1n : -1n;
    return deltaBPT.amount * signal;
  }
};

// src/entities/priceImpact/addLiquidityNested.ts
async function addLiquidityNested(input, nestedPoolState) {
  const addLiquidity = new AddLiquidity();
  const addLiquidityBoosted = new AddLiquidityBoostedV3();
  const sortedPools = nestedPoolState.pools.sort((a, b) => a.level - b.level);
  const priceImpactAmounts = [];
  const childrenBptOuts = [];
  for (const pool of sortedPools) {
    let amountsIn = [];
    let isBoostedPool = false;
    if (pool.level === 0) {
      amountsIn = input.amountsIn.filter((a) => {
        const poolToken = isPoolToken(pool.tokens, a.address);
        if (poolToken.isPoolToken && poolToken.isUnderlyingToken)
          isBoostedPool = true;
        return poolToken.isPoolToken;
      });
      if (amountsIn.length === 0)
        continue;
    } else {
      amountsIn = [...childrenBptOuts, ...input.amountsIn].filter((a) => {
        const poolToken = isPoolToken(pool.tokens, a.address);
        if (poolToken.isPoolToken && poolToken.isUnderlyingToken)
          isBoostedPool = true;
        return poolToken.isPoolToken;
      });
    }
    let addResult;
    if (isBoostedPool)
      addResult = await getAddBoostedUnbalancedResult(
        addLiquidityBoosted,
        input.chainId,
        input.rpcUrl,
        pool,
        amountsIn
      );
    else
      addResult = await getAddUnbalancedResult(
        addLiquidity,
        input.chainId,
        input.rpcUrl,
        pool,
        amountsIn,
        nestedPoolState.protocolVersion
      );
    priceImpactAmounts.push(addResult.priceImpactAmount);
    childrenBptOuts.push(addResult.bptOut.toInputAmount());
  }
  const priceImpactSum = priceImpactAmounts.reduce(
    (acc, cur) => acc + cur.amount,
    0n
  );
  return PriceImpactAmount.fromRawAmount(priceImpactSum);
}
async function getAddUnbalancedResult(addLiquidity, chainId, rpcUrl, pool, amountsIn, protocolVersion) {
  const addLiquidityInput = {
    chainId,
    rpcUrl,
    amountsIn,
    kind: "Unbalanced" /* Unbalanced */
  };
  const poolState = {
    ...pool,
    protocolVersion
  };
  const priceImpactAmount = await addLiquidityUnbalanced(
    addLiquidityInput,
    poolState
  );
  const { bptOut } = await addLiquidity.query(addLiquidityInput, poolState);
  return { priceImpactAmount, bptOut };
}
async function getAddBoostedUnbalancedResult(addLiquidityBoosted, chainId, rpcUrl, pool, amountsIn) {
  const addLiquidityInput = {
    chainId,
    rpcUrl,
    amountsIn,
    kind: "Unbalanced" /* Unbalanced */
  };
  const priceImpactAmount = await addLiquidityUnbalancedBoosted(
    addLiquidityInput,
    { ...pool, protocolVersion: 3 }
  );
  const { bptOut } = await addLiquidityBoosted.query(addLiquidityInput, {
    ...pool,
    protocolVersion: 3
  });
  return { priceImpactAmount, bptOut };
}

// src/entities/priceImpact/index.ts
var PriceImpact = class {
  static async addLiquidityUnbalancedBoosted(input, poolState) {
    return addLiquidityUnbalancedBoosted(input, poolState);
  }
};
/**
 * Calculate price impact on add liquidity single token operations
 * @param input same input used in the corresponding add liquidity operation
 * @param poolState same pool state used in the corresponding add liquidity operation
 * @returns price impact amount
 */
__publicField(PriceImpact, "addLiquiditySingleToken", async (input, poolState) => {
  const addLiquidity = new AddLiquidity();
  let amountsIn;
  try {
    const queryResult = await addLiquidity.query(input, poolState);
    amountsIn = queryResult.amountsIn;
  } catch (err) {
    throw new Error(
      `addLiquiditySingleToken operation will fail at SC level with user defined input.
${err}`
    );
  }
  const removeLiquidity = new RemoveLiquidity();
  const removeLiquidityInput = {
    chainId: input.chainId,
    rpcUrl: input.rpcUrl,
    bptIn: input.bptOut,
    tokenOut: input.tokenIn,
    kind: "SingleTokenExactIn" /* SingleTokenExactIn */
  };
  const { amountsOut } = await removeLiquidity.query(
    removeLiquidityInput,
    poolState
  );
  const sortedTokens = getSortedTokens(poolState.tokens, input.chainId);
  const tokenIndex = sortedTokens.findIndex(
    (t) => t.isSameAddress(input.tokenIn)
  );
  return priceImpactABA(amountsIn[tokenIndex], amountsOut[tokenIndex]);
});
/**
 * Calculate price impact on add liquidity unbalanced operations
 *
 * This is the only price impact calculation that adapts the ABA method instead
 * of applying it directly. This happens because tha ABA method requires a
 * corresponding reverse operation to be applied, so we "get back" to the original
 * state for comparison, hence A -> B -> A.
 * This is not possible for AddLiquidityUnbalanced on v3 because there is no
 * RemoveLiquidityUnbalanced.
 * The alternative found was to simulate the RemoveLiquidityUnbalanced by applying
 * RemoveLiquidityProportional and then swapping between tokens.
 *
 * Here are the steps to calculate the price impact for add liquidity unbalanced:
 * 1. query add liquidity unbalanced with `exactAmountsIn` to get `bptOut`
 * 2. query remove liquidity proportional with `bptOut` as `bptIn` to get `proportionalAmountsOut`
 * 3. get `diffs` =  `proportionalAmountsOut` - `exactAmountsIn`
 * 4. swap between tokens zeroing out the `diffs` between `proportionalAmountsOut`
 *    and `exactAmountsIn`, leaving the remaining diff within a single
 *    token → `diffFinal` (see code below for detailed steps)
 * 5. `amountInitial` will be the the `exactAmountsIn` respective to `diffFinal` token
 * 6. price impact ABA = `diffFinal` / `amountInitial` / 2
 *
 * @param input same input used in the corresponding add liquidity operation
 * @param poolState same pool state used in the corresponding add liquidity operation
 * @returns price impact amount
 */
__publicField(PriceImpact, "addLiquidityUnbalanced", async (input, poolState) => {
  return addLiquidityUnbalanced(input, poolState);
});
/**
 * Calculate price impact on adding liquidity for nested pools.
 *
 * Note: is based on the premise that the price impact on adding liquidity
 * for nested pools is the sum of the price impacts of each add liquidity
 * operation in the nested pools.
 * @param input same input used in the corresponding add liquidity nested operation
 * @param nestedPoolState same nested pool state used in the corresponding add liquidity nested operation
 * @returns price impact amount
 */
__publicField(PriceImpact, "addLiquidityNested", async (input, nestedPoolState) => {
  return await addLiquidityNested(input, nestedPoolState);
});
/**
 * Calculate price impact on remove liquidity operations
 * @param input same input used in the corresponding remove liquidity operation
 * @param poolState same pool state used in the corresponding remove liquidity operation
 * @returns price impact amount
 */
__publicField(PriceImpact, "removeLiquidity", async (input, poolState) => {
  const removeLiquidity = new RemoveLiquidity();
  let amountsOut;
  let bptIn;
  try {
    const queryResult = await removeLiquidity.query(input, poolState);
    amountsOut = queryResult.amountsOut;
    bptIn = queryResult.bptIn;
  } catch (err) {
    throw new Error(
      `removeLiquidity operation will fail at SC level with user defined input.
${err}`
    );
  }
  const addLiquidity = new AddLiquidity();
  const addLiquidityInput = {
    chainId: input.chainId,
    rpcUrl: input.rpcUrl,
    amountsIn: amountsOut.map((a) => a.toInputAmount()),
    kind: "Unbalanced" /* Unbalanced */
  };
  const { bptOut } = await addLiquidity.query(
    addLiquidityInput,
    poolState
  );
  return priceImpactABA(bptIn, bptOut);
});
/**
 * Calculate price impact on removing liquidity for nested pools.
 *
 * Note: is based on the premise that the price impact on removing liquidity
 * for nested pools is the sum of the price impacts of each remove liquidity
 * operation in the nested pools.
 * @param input same input used in the corresponding remove liquidity nested operation
 * @param nestedPoolState same nested pool state used in the corresponding remove liquidity nested operation
 * @returns price impact amount
 */
__publicField(PriceImpact, "removeLiquidityNested", async (input, nestedPoolState) => {
  const removeLiquidityNested = new RemoveLiquidityNested();
  let amountsOut;
  let bptAmountIn;
  try {
    const queryResult = await removeLiquidityNested.query(
      input,
      nestedPoolState
    );
    amountsOut = queryResult.amountsOut;
    bptAmountIn = queryResult.bptAmountIn;
  } catch (err) {
    throw new Error(
      `removeLiquidity operation will fail at SC level with user defined input.
${err}`
    );
  }
  const addLiquidityNested2 = new AddLiquidityNested();
  const addLiquidityNestedInput = {
    chainId: input.chainId,
    rpcUrl: input.rpcUrl,
    fromInternalBalance: input.toInternalBalance,
    amountsIn: amountsOut.map((a) => a.toInputAmount())
  };
  const { bptOut } = await addLiquidityNested2.query(
    addLiquidityNestedInput,
    nestedPoolState
  );
  return priceImpactABA(bptAmountIn, bptOut);
});

// src/entities/slippage.ts

var Slippage = class _Slippage {
  /**
   * Creates a new slippage object
   *
   * @param amount amount of slippage, always positive
   */
  constructor(amount) {
    __publicField(this, "amount");
    __publicField(this, "decimal");
    __publicField(this, "percentage");
    __publicField(this, "bps");
    this.amount = BigInt(amount) > 0n ? BigInt(amount) : -1n * BigInt(amount);
    this.decimal = parseFloat(_viem.formatEther.call(void 0, this.amount));
    this.percentage = this.decimal * 100;
    this.bps = this.decimal * 1e4;
  }
  static fromRawAmount(rawAmount) {
    return new _Slippage(rawAmount);
  }
  static fromDecimal(decimalAmount) {
    const rawAmount = _viem.parseEther.call(void 0, decimalAmount);
    return _Slippage.fromRawAmount(rawAmount);
  }
  static fromPercentage(percentageAmount) {
    const decimalAmount = Number(percentageAmount) / 100;
    return _Slippage.fromDecimal(`${decimalAmount}`);
  }
  static fromBasisPoints(bpsAmount) {
    const decimalAmount = Number(bpsAmount) / 1e4;
    return _Slippage.fromDecimal(`${decimalAmount}`);
  }
  /**
   * Applies slippage to an amount in a given direction
   *
   * @param amount amout to apply slippage to
   * @param direction +1 adds the slippage to the amount, and -1 will remove the slippage from the amount
   * @returns
   */
  applyTo(amount, direction = 1) {
    return MathSol.mulDownFixed(
      amount,
      BigInt(direction) * this.amount + WAD
    );
  }
};

// src/entities/swap/swaps/v2/auraBalSwaps/auraBalSwaps.ts


// src/entities/swap/swaps/v2/auraBalSwaps/types.ts
var AuraBalSwapKind = /* @__PURE__ */ ((AuraBalSwapKind2) => {
  AuraBalSwapKind2[AuraBalSwapKind2["FromAuraBal"] = 0] = "FromAuraBal";
  AuraBalSwapKind2[AuraBalSwapKind2["ToAuraBal"] = 1] = "ToAuraBal";
  return AuraBalSwapKind2;
})(AuraBalSwapKind || {});

// src/entities/swap/swaps/v2/auraBalSwaps/constants.ts
var BAL = "0xba100000625a3754423978a60c9317c58a424e3d";
var auraBAL = "0x616e8BfA43F920657B3497DBf40D6b1A02D4608d";
var supportedTokens = [BAL, NATIVE_ASSETS[1 /* MAINNET */].wrapped];
var auraBalToken = new Token(1 /* MAINNET */, auraBAL, 18);
var balWethId = "0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014";
var balWethAddress = "0x5c6ee304399dbdb9c8ef030ab642b10820db8f56";
var auraBalStableId = "0x3dd0843a028c86e0b760b1a76929d1c5ef93a2dd000200000000000000000249";
var balWethAssets = [
  BAL,
  NATIVE_ASSETS[1 /* MAINNET */].wrapped
];

// src/entities/swap/swaps/v2/auraBalSwaps/parseInputs.ts
function isAuraBalSwap(input) {
  const { tokenIn, tokenOut, kind, swapAmount } = input;
  return isGivenIn(kind) && isAddressEqual(tokenIn, swapAmount) && isMainnet(tokenIn, tokenOut, swapAmount) && hasSupportedTokens(tokenIn, tokenOut);
}
function isMainnet(tokenIn, tokenOut, swapAmount) {
  if (!(tokenIn.chainId === 1 /* MAINNET */ && tokenOut.chainId === 1 /* MAINNET */ && swapAmount.token.chainId))
    throw Error("auraBal Swap: Must be mainnet.");
  return true;
}
function isAddressEqual(token, amount) {
  if (!token.isSameAddress(amount.token.address))
    throw Error("auraBal Swap: tokenIn and swapAmount address must match.");
  return true;
}
function isGivenIn(kind) {
  if (kind !== 0 /* GivenIn */)
    throw Error("auraBal Swap: Must be SwapKind GivenIn.");
  return true;
}
function hasSupportedTokens(tokenIn, tokenOut) {
  const tokenInIsAuraBal = auraBalToken.isSameAddress(tokenIn.address);
  const tokenOutIsAuraBal = auraBalToken.isSameAddress(tokenOut.address);
  if (tokenInIsAuraBal && tokenOutIsAuraBal)
    throw Error("auraBal Swap: Both tokens are auraBal");
  if (!tokenInIsAuraBal && !tokenOutIsAuraBal)
    throw Error("auraBal Swap: Must have tokenIn or tokenOut as auraBal.");
  if (tokenInIsAuraBal) {
    if (!isSupportedToken(tokenOut))
      throw Error("auraBal Swap: Unsupported tokenOut");
  } else if (tokenOutIsAuraBal) {
    if (!isSupportedToken(tokenIn))
      throw Error("auraBal Swap: Unsupported tokenIn");
  }
  return true;
}
function parseInputs(input) {
  const { tokenIn, tokenOut, swapAmount } = input;
  if (!isAuraBalSwap(input))
    throw Error("Not A Valid AuraBal Swap");
  const auraBalIn = auraBalToken.isSameAddress(tokenIn.address);
  return {
    kind: auraBalIn ? 0 /* FromAuraBal */ : 1 /* ToAuraBal */,
    swapToken: auraBalIn ? tokenOut : tokenIn,
    inputAmount: swapAmount
  };
}
function isSupportedToken(token) {
  return supportedTokens.some((t) => token.isSameAddress(t));
}

// src/entities/swap/swaps/v2/auraBalSwaps/joinSwap.ts







// src/entities/swap/swaps/v2/auraBalSwaps/joinPool.ts






// src/entities/swap/swaps/v2/auraBalSwaps/replaceWrapped.ts
function replaceWrapped2(tokens, chainId) {
  return tokens.map((token) => {
    if (NATIVE_ASSETS[chainId].wrapped.toLowerCase() === token.toLowerCase()) {
      return ZERO_ADDRESS;
    }
    return token;
  });
}

// src/entities/swap/swaps/v2/auraBalSwaps/joinPool.ts
function encodeJoinData(token, sender, inputAmount, wethIsEth) {
  const tokenInIndex = balWethAssets.findIndex((t) => token.isSameAddress(t));
  if (tokenInIndex === -1)
    throw new Error(`Join token not in BAL-WETH pool ${token.address}`);
  const useNativeAsset = wethIsEth && token.isUnderlyingEqual(NATIVE_ASSETS[1 /* MAINNET */]);
  const maxAmountsIn = Array(balWethAssets.length).fill(0n);
  maxAmountsIn[tokenInIndex] = inputAmount;
  const poolKind = 1;
  const userData = _viem.encodeAbiParameters.call(void 0, 
    _viem.parseAbiParameters.call(void 0, "uint256, uint256[], uint256"),
    [1n, maxAmountsIn, 0n]
  );
  const joinPoolRequest = {
    assets: useNativeAsset ? replaceWrapped2(balWethAssets, 1 /* MAINNET */) : balWethAssets,
    maxAmountsIn,
    userData,
    fromInternalBalance: false
  };
  const joinPoolOpRef = Relayer.toChainedReference(1n, false);
  const value = useNativeAsset ? inputAmount : 0n;
  const joinPoolData = _viem.encodeFunctionData.call(void 0, {
    abi: batchRelayerLibraryAbi,
    functionName: "joinPool",
    args: [
      balWethId,
      poolKind,
      sender,
      // Join tokens come from the user
      BALANCER_RELAYER[1 /* MAINNET */],
      // BPT goes to the Relayer (so we can approve for swap)
      joinPoolRequest,
      value,
      joinPoolOpRef
    ]
  });
  return {
    joinPoolData,
    joinPoolOpRef,
    value
  };
}

// src/entities/swap/swaps/v2/auraBalSwaps/swap.ts

function encodeSwapData(amount, assetIn, assetOut, sender, recipient, limit, value, isTempRef) {
  const singleSwap = {
    poolId: auraBalStableId,
    kind: 0,
    assetIn,
    assetOut,
    amount,
    // Note - this can be an opRef
    userData: "0x"
  };
  const funds = {
    sender,
    recipient,
    fromInternalBalance: false,
    toInternalBalance: false
  };
  const swapOpRef = Relayer.toChainedReference(2n, isTempRef);
  const swapData = _viem.encodeFunctionData.call(void 0, {
    abi: batchRelayerLibraryAbi,
    functionName: "swap",
    args: [
      singleSwap,
      funds,
      limit,
      MAX_UINT256,
      value,
      swapOpRef
    ]
  });
  return {
    swapData,
    swapOpRef
  };
}

// src/entities/swap/swaps/v2/auraBalSwaps/joinSwap.ts
async function queryJoinSwap(input) {
  const { swapToken: joinToken, inputAmount, kind, client } = input;
  const value = 0n;
  const { joinPoolData, joinPoolOpRef } = encodeJoinData(
    joinToken,
    _viem.zeroAddress,
    // Note zeroAddress used for query but not for build
    inputAmount.amount,
    false
    // for query we always use WETH
  );
  const { swapData, swapOpRef } = encodeSwapData(
    joinPoolOpRef,
    balWethAddress,
    auraBAL,
    _viem.zeroAddress,
    _viem.zeroAddress,
    0n,
    value,
    true
  );
  const peekData = Relayer.encodePeekChainedReferenceValue(swapOpRef);
  const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "vaultActionsQueryMulticall",
    args: [[joinPoolData, swapData, peekData]]
  });
  const { data } = await client.call({
    ...EMPTY_SENDER,
    to: BALANCER_RELAYER[1 /* MAINNET */],
    data: encodedMulticall
  });
  const result = _viem.decodeFunctionResult.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "vaultActionsQueryMulticall",
    data
  });
  const peekedValue = _viem.decodeAbiParameters.call(void 0, 
    [{ type: "uint256" }],
    result[result.length - 1]
  )[0];
  return {
    inputAmount: TokenAmount.fromRawAmount(joinToken, inputAmount.amount),
    expectedAmountOut: TokenAmount.fromRawAmount(auraBalToken, peekedValue),
    kind
  };
}
function buildJoinSwapCall(userAddress, inputAmount, swapLimit, joinToken, wethIsEth, relayerApprovalSignature) {
  const { joinPoolData, joinPoolOpRef, value } = encodeJoinData(
    joinToken,
    userAddress,
    inputAmount,
    wethIsEth
  );
  const approval = Relayer.encodeApproveVault(balWethAddress, joinPoolOpRef);
  const { swapData } = encodeSwapData(
    joinPoolOpRef,
    balWethAddress,
    auraBAL,
    BALANCER_RELAYER[1 /* MAINNET */],
    userAddress,
    swapLimit,
    0n,
    // always 0 value
    true
  );
  const encodedCalls = [joinPoolData, approval, swapData];
  if (relayerApprovalSignature !== void 0) {
    encodedCalls.unshift(
      Relayer.encodeSetRelayerApproval(
        BALANCER_RELAYER[1 /* MAINNET */],
        true,
        relayerApprovalSignature
      )
    );
  }
  const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "multicall",
    args: [encodedCalls]
  });
  return { callData: encodedMulticall, value };
}

// src/entities/swap/swaps/v2/auraBalSwaps/swapExit.ts







// src/entities/swap/swaps/v2/auraBalSwaps/exitPool.ts





function encodeExitData(token, userAddress, swapOpRef, limit, wethIsEth) {
  const tokenOutIndex = balWethAssets.findIndex(
    (t) => token.isSameAddress(t)
  );
  if (tokenOutIndex === -1)
    throw new Error(`exit token not in BAL-WETH pool ${token.address}`);
  const minAmountsOut = Array(balWethAssets.length).fill(0n);
  minAmountsOut[tokenOutIndex] = limit;
  const poolKind = 1;
  const userData = _viem.encodeAbiParameters.call(void 0, 
    _viem.parseAbiParameters.call(void 0, "uint256, uint256, uint256"),
    [0n, swapOpRef, BigInt(tokenOutIndex)]
  );
  const exitPoolRequest = {
    assets: wethIsEth ? replaceWrapped2(balWethAssets, 1 /* MAINNET */) : balWethAssets,
    minAmountsOut,
    userData,
    toInternalBalance: false
  };
  const exitPoolOpRefKey = Relayer.toChainedReference(1n);
  const exitPoolData = _viem.encodeFunctionData.call(void 0, {
    abi: batchRelayerLibraryAbi,
    functionName: "exitPool",
    args: [
      balWethId,
      poolKind,
      BALANCER_RELAYER[1],
      // BPT comes from the Relayer (so we can approve before exit)
      userAddress,
      // exit token goes to the user
      exitPoolRequest,
      [{ key: exitPoolOpRefKey, index: BigInt(tokenOutIndex) }]
    ]
  });
  return {
    exitPoolData,
    exitPoolOpRef: exitPoolOpRefKey
  };
}

// src/entities/swap/swaps/v2/auraBalSwaps/swapExit.ts
async function querySwapExit(input) {
  const { swapToken: exitToken, inputAmount, kind, client } = input;
  const value = 0n;
  const { swapData, swapOpRef } = encodeSwapData(
    inputAmount.amount,
    auraBAL,
    balWethAddress,
    _viem.zeroAddress,
    // Note zeroAddress used for query but not for build
    _viem.zeroAddress,
    0n,
    value,
    true
  );
  const { exitPoolData, exitPoolOpRef } = encodeExitData(
    exitToken,
    _viem.zeroAddress,
    // Note zeroAddress used for query but not for build
    swapOpRef,
    0n,
    false
    // always use weth for query
  );
  const peekData = Relayer.encodePeekChainedReferenceValue(exitPoolOpRef);
  const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "vaultActionsQueryMulticall",
    args: [[swapData, exitPoolData, peekData]]
  });
  const { data } = await client.call({
    ...EMPTY_SENDER,
    to: BALANCER_RELAYER[1 /* MAINNET */],
    data: encodedMulticall
  });
  const result = _viem.decodeFunctionResult.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "vaultActionsQueryMulticall",
    data
  });
  const peekedValue = _viem.decodeAbiParameters.call(void 0, 
    [{ type: "uint256" }],
    result[result.length - 1]
  )[0];
  return {
    inputAmount: TokenAmount.fromRawAmount(
      auraBalToken,
      inputAmount.amount
    ),
    expectedAmountOut: TokenAmount.fromRawAmount(exitToken, peekedValue),
    kind
  };
}
function buildSwapExitCall(user, inputAmount, exitLimit, exitToken, wethIsEth, relayerApprovalSignature) {
  const value = 0n;
  const { swapData, swapOpRef } = encodeSwapData(
    inputAmount,
    auraBAL,
    balWethAddress,
    user,
    BALANCER_RELAYER[1 /* MAINNET */],
    0n,
    value,
    false
  );
  const approval = Relayer.encodeApproveVault(balWethAddress, swapOpRef);
  const { exitPoolData } = encodeExitData(
    exitToken,
    user,
    swapOpRef,
    exitLimit,
    wethIsEth
  );
  const encodedCalls = [swapData, approval, exitPoolData];
  if (relayerApprovalSignature !== void 0) {
    encodedCalls.unshift(
      Relayer.encodeSetRelayerApproval(
        BALANCER_RELAYER[1 /* MAINNET */],
        true,
        relayerApprovalSignature
      )
    );
  }
  const encodedMulticall = _viem.encodeFunctionData.call(void 0, {
    abi: balancerRelayerAbi,
    functionName: "multicall",
    args: [encodedCalls]
  });
  return encodedMulticall;
}

// src/entities/swap/swaps/v2/auraBalSwaps/auraBalSwaps.ts
var AuraBalSwap = class {
  constructor(rpcUrl) {
    __publicField(this, "client");
    this.client = _viem.createPublicClient.call(void 0, {
      transport: _viem.http.call(void 0, rpcUrl),
      chain: CHAINS[1 /* MAINNET */]
    });
  }
  isAuraBalSwap(input) {
    return isAuraBalSwap(input);
  }
  async query(input) {
    const inputs = parseInputs(input);
    if (inputs.kind === 1 /* ToAuraBal */)
      return queryJoinSwap({ ...inputs, client: this.client });
    return querySwapExit({ ...inputs, client: this.client });
  }
  /**
   * Returns the transaction data to be sent to the relayer contract
   *
   * @param input
   * @returns
   */
  buildCall(input) {
    const limitAmount = getLimitAmount(
      input.slippage,
      0 /* GivenIn */,
      input.queryOutput.expectedAmountOut
    );
    let callData;
    let value = 0n;
    if (input.queryOutput.kind === 1 /* ToAuraBal */) {
      const buildOutput = buildJoinSwapCall(
        input.user,
        input.queryOutput.inputAmount.amount,
        limitAmount.amount,
        input.queryOutput.inputAmount.token,
        input.wethIsEth,
        input.relayerApprovalSignature
      );
      callData = buildOutput.callData;
      value = buildOutput.value;
    } else {
      callData = buildSwapExitCall(
        input.user,
        input.queryOutput.inputAmount.amount,
        limitAmount.amount,
        input.queryOutput.expectedAmountOut.token,
        input.wethIsEth,
        input.relayerApprovalSignature
      );
    }
    return {
      to: BALANCER_RELAYER[1 /* MAINNET */],
      callData,
      value,
      minAmountOut: limitAmount
    };
  }
};






























































































































































exports.ADMIN_OF_AUTHORIZER = ADMIN_OF_AUTHORIZER; exports.API_CHAIN_NAMES = API_CHAIN_NAMES; exports.API_ENDPOINT = API_ENDPOINT; exports.AUTHORIZER = AUTHORIZER; exports.AddLiquidity = AddLiquidity; exports.AddLiquidityBoostedV3 = AddLiquidityBoostedV3; exports.AddLiquidityBufferV3 = AddLiquidityBufferV3; exports.AddLiquidityKind = AddLiquidityKind; exports.AddLiquidityNested = AddLiquidityNested; exports.AllowanceTransfer = AllowanceTransfer; exports.AuraBalSwap = AuraBalSwap; exports.AuraBalSwapKind = AuraBalSwapKind; exports.BALANCER_BATCH_ROUTER = BALANCER_BATCH_ROUTER; exports.BALANCER_BUFFER_ROUTER = BALANCER_BUFFER_ROUTER; exports.BALANCER_COMPOSITE_LIQUIDITY_ROUTER = BALANCER_COMPOSITE_LIQUIDITY_ROUTER; exports.BALANCER_QUERIES = BALANCER_QUERIES; exports.BALANCER_RELAYER = BALANCER_RELAYER; exports.BALANCER_ROUTER = BALANCER_ROUTER; exports.BalancerApi = BalancerApi; exports.CHAINS = CHAINS; exports.COMPOSABLE_STABLE_POOL_FACTORY = COMPOSABLE_STABLE_POOL_FACTORY; exports.ChainId = ChainId; exports.ComposableStableEncoder = ComposableStableEncoder; exports.ComposableStablePoolExitKind = ComposableStablePoolExitKind; exports.ComposableStablePoolJoinKind = ComposableStablePoolJoinKind; exports.CreatePool = CreatePool; exports.DECIMAL_SCALES = DECIMAL_SCALES; exports.DEFAULT_FUND_MANAGMENT = DEFAULT_FUND_MANAGMENT; exports.DEFAULT_USERDATA = DEFAULT_USERDATA; exports.EMPTY_SENDER = EMPTY_SENDER; exports.ETH = ETH; exports.FOUR_WAD = FOUR_WAD; exports.HUNDRED_WAD = HUNDRED_WAD; exports.InitBufferV3 = InitBufferV3; exports.InitPool = InitPool; exports.InitPoolDataProvider = InitPoolDataProvider; exports.InstantExpiration = InstantExpiration; exports.MAX_UINT112 = MAX_UINT112; exports.MAX_UINT256 = MAX_UINT256; exports.MathSol = MathSol; exports.MaxAllowanceExpiration = MaxAllowanceExpiration; exports.MaxAllowanceTransferAmount = MaxAllowanceTransferAmount; exports.MaxOrderedNonce = MaxOrderedNonce; exports.MaxSigDeadline = MaxSigDeadline; exports.MaxSignatureTransferAmount = MaxSignatureTransferAmount; exports.MaxUint160 = MaxUint160; exports.MaxUint256 = MaxUint256; exports.MaxUint48 = MaxUint48; exports.MaxUnorderedNonce = MaxUnorderedNonce; exports.NATIVE_ASSETS = NATIVE_ASSETS; exports.OnChainProvider = OnChainProvider; exports.PERMIT2 = PERMIT2; exports.PREMINTED_STABLE_BPT = PREMINTED_STABLE_BPT; exports.PathWithAmount = PathWithAmount; exports.Permit2Helper = Permit2Helper; exports.PermitHelper = PermitHelper; exports.PoolKind = PoolKind; exports.PoolType = PoolType; exports.Pools = Pools2; exports.PriceImpact = PriceImpact; exports.PriceImpactAmount = PriceImpactAmount; exports.RAY = RAY; exports.Relayer = Relayer; exports.RemoveLiquidity = RemoveLiquidity; exports.RemoveLiquidityBoostedV3 = RemoveLiquidityBoostedV3; exports.RemoveLiquidityKind = RemoveLiquidityKind; exports.RemoveLiquidityNested = RemoveLiquidityNested; exports.RemoveLiquidityNestedV2 = RemoveLiquidityNestedV2; exports.RemoveLiquidityNestedV3 = RemoveLiquidityNestedV3; exports.SECONDS_PER_YEAR = SECONDS_PER_YEAR; exports.STABLE_POOL_FACTORY_BALANCER_V3 = STABLE_POOL_FACTORY_BALANCER_V3; exports.Slippage = Slippage; exports.Swap = Swap; exports.SwapKind = SwapKind; exports.TEST_API_ENDPOINT = TEST_API_ENDPOINT; exports.TWO_WAD = TWO_WAD; exports.Token = Token; exports.TokenAmount = TokenAmount; exports.TokenType = TokenType; exports.VAULT = VAULT; exports.VAULT_ADMIN = VAULT_ADMIN; exports.VAULT_V3 = VAULT_V3; exports.WAD = WAD; exports.WEIGHTED_POOL_FACTORY_BALANCER_V2 = WEIGHTED_POOL_FACTORY_BALANCER_V2; exports.WEIGHTED_POOL_FACTORY_BALANCER_V3 = WEIGHTED_POOL_FACTORY_BALANCER_V3; exports.WeightedEncoder = WeightedEncoder; exports.WeightedPoolExitKind = WeightedPoolExitKind; exports.WeightedPoolJoinKind = WeightedPoolJoinKind; exports.ZERO_ADDRESS = ZERO_ADDRESS; exports.abs = abs; exports.addLiquidityProportionalNotSupportedOnPoolTypeError = addLiquidityProportionalNotSupportedOnPoolTypeError; exports.addLiquidityProportionalOnlyError = addLiquidityProportionalOnlyError; exports.addLiquidityProportionalUnavailableError = addLiquidityProportionalUnavailableError; exports.addLiquiditySingleTokenShouldHaveTokenInIndexError = addLiquiditySingleTokenShouldHaveTokenInIndexError; exports.authorizerAbi = authorizerAbi; exports.balancerBatchRouterAbi = balancerBatchRouterAbi; exports.balancerBufferRouterAbi = balancerBufferRouterAbi; exports.balancerCompositeLiquidityRouterAbi = balancerCompositeLiquidityRouterAbi; exports.balancerQueriesAbi = balancerQueriesAbi; exports.balancerRelayerAbi = balancerRelayerAbi; exports.balancerRouterAbi = balancerRouterAbi; exports.batchRelayerLibraryAbi = batchRelayerLibraryAbi; exports.buildCallWithPermit2ProtocolVersionError = buildCallWithPermit2ProtocolVersionError; exports.calculateProportionalAmounts = calculateProportionalAmounts; exports.calculateProportionalAmountsCowAmm = calculateProportionalAmountsCowAmm; exports.checkInputs = checkInputs; exports.composableStableFactoryV6Abi_V2 = composableStableFactoryV6Abi_V2; exports.doAddLiquidityQuery = doAddLiquidityQuery; exports.encodeRemoveLiquidityRecovery = encodeRemoveLiquidityRecovery; exports.erc20Abi = erc20Abi; exports.getAmounts = getAmounts; exports.getBoostedPoolStateWithBalancesV3 = getBoostedPoolStateWithBalancesV3; exports.getBptAmountFromReferenceAmount = getBptAmountFromReferenceAmount; exports.getBptAmountFromReferenceAmountBoosted = getBptAmountFromReferenceAmountBoosted; exports.getInputAmount = getInputAmount; exports.getOutputAmount = getOutputAmount; exports.getPoolAddress = getPoolAddress; exports.getPoolStateWithBalancesCowAmm = getPoolStateWithBalancesCowAmm; exports.getPoolStateWithBalancesV2 = getPoolStateWithBalancesV2; exports.getPoolStateWithBalancesV3 = getPoolStateWithBalancesV3; exports.getSortedTokens = getSortedTokens; exports.getValue = getValue; exports.insertIndex = insertIndex; exports.isAuraBalSwap = isAuraBalSwap; exports.isBatchSwap = isBatchSwap; exports.isSameAddress = isSameAddress; exports.mapPoolToNestedPoolStateV2 = mapPoolToNestedPoolStateV2; exports.mapPoolToNestedPoolStateV3 = mapPoolToNestedPoolStateV3; exports.mapPoolType = mapPoolType; exports.max = max; exports.min = min; exports.parseAddLiquidityArgs = parseAddLiquidityArgs; exports.parseInitializeArgs = parseInitializeArgs; exports.permit2Abi = permit2Abi; exports.poolHasActualSupply = poolHasActualSupply; exports.poolHasPercentFee = poolHasPercentFee; exports.poolHasVirtualSupply = poolHasVirtualSupply; exports.poolIsLinearPool = poolIsLinearPool; exports.priceImpactABA = priceImpactABA; exports.removeIndex = removeIndex; exports.removeLiquidityProportionalOnlyError = removeLiquidityProportionalOnlyError; exports.removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError = removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError; exports.removeLiquidityUnbalancedNotSupportedOnV3 = removeLiquidityUnbalancedNotSupportedOnV3; exports.replaceWrapped = replaceWrapped; exports.sortByAddress = sortByAddress; exports.stablePoolAbi_V3 = stablePoolAbi_V3; exports.stablePoolFactoryAbi_V3 = stablePoolFactoryAbi_V3; exports.validateNestedPoolState = validateNestedPoolState; exports.validatePaths = validatePaths; exports.vaultAdminAbi_V3 = vaultAdminAbi_V3; exports.vaultExtensionAbi_V3 = vaultExtensionAbi_V3; exports.vaultV2Abi = vaultV2Abi; exports.vaultV3Abi = vaultV3Abi; exports.weightedPoolAbi_V3 = weightedPoolAbi_V3; exports.weightedPoolFactoryAbi_V3 = weightedPoolFactoryAbi_V3; exports.weightedPoolFactoryV4Abi_V2 = weightedPoolFactoryV4Abi_V2; exports.weightedPoolV4Abi_V2 = weightedPoolV4Abi_V2;
//# sourceMappingURL=index.js.map