import { Address as Address$1, Chain, WalletClient, PublicActions, TypedDataDomain, TypedData, Hex as Hex$1, PublicClient } from 'viem';

declare const authorizerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "admin";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "previousAdminRole";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "newAdminRole";
        readonly type: "bytes32";
    }];
    readonly name: "RoleAdminChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleGranted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "RoleRevoked";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DEFAULT_ADMIN_ROLE";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "actionId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "canPerform";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleAdmin";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256";
        readonly name: "index";
        readonly type: "uint256";
    }];
    readonly name: "getRoleMember";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }];
    readonly name: "getRoleMemberCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "roles";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "grantRoles";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "roles";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "accounts";
        readonly type: "address[]";
    }];
    readonly name: "grantRolesToMany";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "hasRole";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "renounceRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRole";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "roles";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "revokeRoles";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32[]";
        readonly name: "roles";
        readonly type: "bytes32[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "accounts";
        readonly type: "address[]";
    }];
    readonly name: "revokeRolesFromMany";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];

declare const balancerBatchRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IWETH";
        readonly name: "weth";
        readonly type: "address";
    }, {
        readonly internalType: "contract IPermit2";
        readonly name: "permit2";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "routerVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ErrorSelectorNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EthTransfer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapDeadline";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TransientIndexOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "getSender";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRouterCommon.PermitApproval[]";
        readonly name: "permitBatch";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "permitSignatures";
        readonly type: "bytes[]";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly name: "details";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly name: "permit2Batch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "permit2Signature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "multicallData";
        readonly type: "bytes[]";
    }];
    readonly name: "permitBatchAndCall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isBuffer";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathStep[]";
            readonly name: "steps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "exactAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountOut";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IBatchRouter.SwapPathExactAmountIn[]";
        readonly name: "paths";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "querySwapExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "tokenIn";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "pool";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isBuffer";
                    readonly type: "bool";
                }];
                readonly internalType: "struct IBatchRouter.SwapPathStep[]";
                readonly name: "steps";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "exactAmountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathExactAmountIn[]";
            readonly name: "paths";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBatchRouter.SwapExactInHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "querySwapExactInHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isBuffer";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathStep[]";
            readonly name: "steps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "exactAmountOut";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IBatchRouter.SwapPathExactAmountOut[]";
        readonly name: "paths";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "querySwapExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "tokenIn";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "pool";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isBuffer";
                    readonly type: "bool";
                }];
                readonly internalType: "struct IBatchRouter.SwapPathStep[]";
                readonly name: "steps";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxAmountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "exactAmountOut";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathExactAmountOut[]";
            readonly name: "paths";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBatchRouter.SwapExactOutHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "querySwapExactOutHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isBuffer";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathStep[]";
            readonly name: "steps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "exactAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmountOut";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IBatchRouter.SwapPathExactAmountIn[]";
        readonly name: "paths";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "swapExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "tokenIn";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "pool";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isBuffer";
                    readonly type: "bool";
                }];
                readonly internalType: "struct IBatchRouter.SwapPathStep[]";
                readonly name: "steps";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "exactAmountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmountOut";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathExactAmountIn[]";
            readonly name: "paths";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBatchRouter.SwapExactInHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "swapExactInHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "pool";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "tokenOut";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "isBuffer";
                readonly type: "bool";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathStep[]";
            readonly name: "steps";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "exactAmountOut";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IBatchRouter.SwapPathExactAmountOut[]";
        readonly name: "paths";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "swapExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "tokenIn";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "pool";
                    readonly type: "address";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "tokenOut";
                    readonly type: "address";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isBuffer";
                    readonly type: "bool";
                }];
                readonly internalType: "struct IBatchRouter.SwapPathStep[]";
                readonly name: "steps";
                readonly type: "tuple[]";
            }, {
                readonly internalType: "uint256";
                readonly name: "maxAmountIn";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "exactAmountOut";
                readonly type: "uint256";
            }];
            readonly internalType: "struct IBatchRouter.SwapPathExactAmountOut[]";
            readonly name: "paths";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IBatchRouter.SwapExactOutHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "swapExactOutHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "pathAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const balancerBufferRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IWETH";
        readonly name: "weth";
        readonly type: "address";
    }, {
        readonly internalType: "contract IPermit2";
        readonly name: "permit2";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "routerVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ErrorSelectorNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EthTransfer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapDeadline";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountWrappedIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToIssue";
        readonly type: "uint256";
    }];
    readonly name: "addLiquidityToBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountWrappedIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToIssue";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sharesOwner";
        readonly type: "address";
    }];
    readonly name: "addLiquidityToBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getSender";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountWrappedIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }];
    readonly name: "initializeBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountWrappedIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sharesOwner";
        readonly type: "address";
    }];
    readonly name: "initializeBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRouterCommon.PermitApproval[]";
        readonly name: "permitBatch";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "permitSignatures";
        readonly type: "bytes[]";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly name: "details";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly name: "permit2Batch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "permit2Signature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "multicallData";
        readonly type: "bytes[]";
    }];
    readonly name: "permitBatchAndCall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToIssue";
        readonly type: "uint256";
    }];
    readonly name: "queryAddLiquidityToBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToIssue";
        readonly type: "uint256";
    }];
    readonly name: "queryAddLiquidityToBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountWrappedIn";
        readonly type: "uint256";
    }];
    readonly name: "queryInitializeBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountUnderlyingIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountWrappedIn";
        readonly type: "uint256";
    }];
    readonly name: "queryInitializeBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToRemove";
        readonly type: "uint256";
    }];
    readonly name: "queryRemoveLiquidityFromBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "removedUnderlyingBalanceOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "removedWrappedBalanceOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToRemove";
        readonly type: "uint256";
    }];
    readonly name: "queryRemoveLiquidityFromBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "removedUnderlyingBalanceOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "removedWrappedBalanceOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const balancerQueriesAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "_vault";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum IVault.SwapKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetInIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetOutIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.BatchSwapStep[]";
        readonly name: "swaps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "contract IAsset[]";
        readonly name: "assets";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }];
    readonly name: "queryBatchSwap";
    readonly outputs: readonly [{
        readonly internalType: "int256[]";
        readonly name: "assetDeltas";
        readonly type: "int256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.ExitPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "queryExit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.JoinPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "queryJoin";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "enum IVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.SingleSwap";
        readonly name: "singleSwap";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }];
    readonly name: "querySwap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "vault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const balancerRelayerAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "libraryAddress";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "queryLibrary";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "getLibrary";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getQueryLibrary";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "vaultActionsQueryMulticall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const balancerRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IWETH";
        readonly name: "weth";
        readonly type: "address";
    }, {
        readonly internalType: "contract IPermit2";
        readonly name: "permit2";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "routerVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ErrorSelectorNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EthTransfer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapDeadline";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "maxAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityCustom";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.AddLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "addLiquidityHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "maxAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityProportional";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquiditySingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityUnbalanced";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "donate";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getSender";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "exactAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouter.InitializeHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "initializeHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRouterCommon.PermitApproval[]";
        readonly name: "permitBatch";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "permitSignatures";
        readonly type: "bytes[]";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly name: "details";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly name: "permit2Batch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "permit2Signature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "multicallData";
        readonly type: "bytes[]";
    }];
    readonly name: "permitBatchAndCall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "maxAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityCustom";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.AddLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "queryAddLiquidityHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityProportional";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquiditySingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityUnbalanced";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquidityCustom";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxBptAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum RemoveLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.RemoveLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "queryRemoveLiquidityHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquidityProportional";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "queryRemoveLiquidityRecovery";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "queryRemoveLiquidityRecoveryHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquiditySingleTokenExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquiditySingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGiven";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "limit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouter.SwapSingleTokenHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "querySwapHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "querySwapSingleTokenExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountCalculated";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "querySwapSingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountCalculated";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquidityCustom";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxBptAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum RemoveLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.RemoveLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "removeLiquidityHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquidityProportional";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly name: "removeLiquidityRecovery";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly name: "removeLiquidityRecoveryHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquiditySingleTokenExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquiditySingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "swapSingleTokenExactIn";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "swapSingleTokenExactOut";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGiven";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "limit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouter.SwapSingleTokenHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "swapSingleTokenHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const batchRelayerLibraryAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "wstETH";
        readonly type: "address";
    }, {
        readonly internalType: "contract IBalancerMinter";
        readonly name: "minter";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "canCallUserCheckpoint";
        readonly type: "bool";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approveVault";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum IVault.SwapKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetInIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetOutIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.BatchSwapStep[]";
        readonly name: "swaps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "contract IAsset[]";
        readonly name: "assets";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }, {
        readonly internalType: "int256[]";
        readonly name: "limits";
        readonly type: "int256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "key";
            readonly type: "uint256";
        }];
        readonly internalType: "struct VaultActions.OutputReference[]";
        readonly name: "outputReferences";
        readonly type: "tuple[]";
    }];
    readonly name: "batchSwap";
    readonly outputs: readonly [{
        readonly internalType: "int256[]";
        readonly name: "results";
        readonly type: "int256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "canCallUserCheckpoint";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "enum VaultActions.PoolKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address payable";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.ExitPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "key";
            readonly type: "uint256";
        }];
        readonly internalType: "struct VaultActions.OutputReference[]";
        readonly name: "outputReferences";
        readonly type: "tuple[]";
    }];
    readonly name: "exitPool";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "contract IStakingLiquidityGauge[]";
        readonly name: "gauges";
        readonly type: "address[]";
    }];
    readonly name: "gaugeCheckpoint";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IStakingLiquidityGauge[]";
        readonly name: "gauges";
        readonly type: "address[]";
    }];
    readonly name: "gaugeClaimRewards";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IStakingLiquidityGauge";
        readonly name: "gauge";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "gaugeDeposit";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "gauges";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "gaugeMint";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bool";
        readonly name: "approval";
        readonly type: "bool";
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "gaugeSetMinterApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IStakingLiquidityGauge";
        readonly name: "gauge";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "gaugeWithdraw";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getEntrypoint";
    readonly outputs: readonly [{
        readonly internalType: "contract IBalancerRelayer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "enum VaultActions.PoolKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.JoinPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "joinPool";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IVault.UserBalanceOpKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly internalType: "struct IVault.UserBalanceOp[]";
        readonly name: "ops";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "key";
            readonly type: "uint256";
        }];
        readonly internalType: "struct VaultActions.OutputReference[]";
        readonly name: "outputReferences";
        readonly type: "tuple[]";
    }];
    readonly name: "manageUserBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "ref";
        readonly type: "uint256";
    }];
    readonly name: "peekChainedReferenceValue";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "relayer";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "authorisation";
        readonly type: "bytes";
    }];
    readonly name: "setRelayerApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "stakeETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "stakeETHAndWrap";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "enum IVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.SingleSwap";
        readonly name: "singleSwap";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "result";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IStaticATokenLM";
        readonly name: "staticToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "toUnderlying";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapAaveStaticToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ICToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapCompoundV2";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapERC4626";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IEulerToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapEuler";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGearboxDieselToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "dieselAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapGearbox";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IReaperTokenVault";
        readonly name: "vaultToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapReaperVaultToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IShareToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapShareToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ITetuSmartVault";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapTetu";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IUnbuttonToken";
        readonly name: "wrapperToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapUnbuttonToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapWstETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IYearnTokenVault";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "unwrapYearn";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20Permit";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "vaultPermit";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20PermitDAI";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "holder";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "nonce";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "expiry";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "allowed";
        readonly type: "bool";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "vaultPermitDAI";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IStaticATokenLM";
        readonly name: "staticToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "fromUnderlying";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapAaveDynamicToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ICToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapCompoundV2";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapERC4626";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IEulerToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "eulerProtocol";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapEuler";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IGearboxDieselToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "mainAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapGearbox";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IReaperTokenVault";
        readonly name: "vaultToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapReaperVaultToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IShareToken";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapShareToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapStETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract ITetuSmartVault";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapTetu";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IUnbuttonToken";
        readonly name: "wrapperToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "uAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapUnbuttonToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IYearnTokenVault";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "outputReference";
        readonly type: "uint256";
    }];
    readonly name: "wrapYearn";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}];

declare const composableStableFactoryV6Abi_V2: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IProtocolFeePercentagesProvider";
        readonly name: "protocolFeeProvider";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "factoryVersion";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "poolVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "FactoryDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolCreated";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "amplificationParameter";
        readonly type: "uint256";
    }, {
        readonly internalType: "contract IRateProvider[]";
        readonly name: "rateProviders";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "tokenRateCacheDurations";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "exemptFromYieldProtocolFeeFlag";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "contract ComposableStablePool";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disable";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCreationCode";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCreationCodeContracts";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "contractA";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "contractB";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPauseConfiguration";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pauseWindowDuration";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodDuration";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolFeePercentagesProvider";
    readonly outputs: readonly [{
        readonly internalType: "contract IProtocolFeePercentagesProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isDisabled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolFromFactory";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const erc20Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name_";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol_";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "subtractedValue";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];

declare const permit2Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "AllowanceExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExcessiveInvalidation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "maxAmount";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAmount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidContractSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidNonce";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSignatureLength";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSigner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "LengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "signatureDeadline";
        readonly type: "uint256";
    }];
    readonly name: "SignatureExpired";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly indexed: false;
        readonly internalType: "uint48";
        readonly name: "expiration";
        readonly type: "uint48";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "Lockdown";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint48";
        readonly name: "newNonce";
        readonly type: "uint48";
    }, {
        readonly indexed: false;
        readonly internalType: "uint48";
        readonly name: "oldNonce";
        readonly type: "uint48";
    }];
    readonly name: "NonceInvalidation";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly indexed: false;
        readonly internalType: "uint48";
        readonly name: "expiration";
        readonly type: "uint48";
    }, {
        readonly indexed: false;
        readonly internalType: "uint48";
        readonly name: "nonce";
        readonly type: "uint48";
    }];
    readonly name: "Permit";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "word";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "mask";
        readonly type: "uint256";
    }];
    readonly name: "UnorderedNonceInvalidation";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiration";
        readonly type: "uint48";
    }, {
        readonly internalType: "uint48";
        readonly name: "nonce";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly internalType: "uint48";
        readonly name: "expiration";
        readonly type: "uint48";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint48";
        readonly name: "newNonce";
        readonly type: "uint48";
    }];
    readonly name: "invalidateNonces";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "wordPos";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "mask";
        readonly type: "uint256";
    }];
    readonly name: "invalidateUnorderedNonces";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly internalType: "struct IAllowanceTransfer.TokenSpenderPair[]";
        readonly name: "approvals";
        readonly type: "tuple[]";
    }];
    readonly name: "lockdown";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "nonceBitmap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly name: "details";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly name: "permitBatch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails";
            readonly name: "details";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitSingle";
        readonly name: "permitSingle";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.TokenPermissions";
            readonly name: "permitted";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
        readonly name: "permit";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
        readonly name: "transferDetails";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permitTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
            readonly name: "permitted";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
        readonly name: "permit";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
        readonly name: "transferDetails";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permitTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.TokenPermissions";
            readonly name: "permitted";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.PermitTransferFrom";
        readonly name: "permit";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails";
        readonly name: "transferDetails";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "witness";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "witnessTypeString";
        readonly type: "string";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permitWitnessTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ISignatureTransfer.TokenPermissions[]";
            readonly name: "permitted";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.PermitBatchTransferFrom";
        readonly name: "permit";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "requestedAmount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct ISignatureTransfer.SignatureTransferDetails[]";
        readonly name: "transferDetails";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "witness";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "witnessTypeString";
        readonly type: "string";
    }, {
        readonly internalType: "bytes";
        readonly name: "signature";
        readonly type: "bytes";
    }];
    readonly name: "permitWitnessTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint160";
            readonly name: "amount";
            readonly type: "uint160";
        }, {
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly internalType: "struct IAllowanceTransfer.AllowanceTransferDetails[]";
        readonly name: "transferDetails";
        readonly type: "tuple[]";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint160";
        readonly name: "amount";
        readonly type: "uint160";
    }, {
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];

declare const vaultV2Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly internalType: "contract IWETH";
        readonly name: "weth";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "pauseWindowDuration";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodDuration";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "AuthorizerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "ExternalBalanceTransfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IFlashLoanRecipient";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "feeAmount";
        readonly type: "uint256";
    }];
    readonly name: "FlashLoan";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "delta";
        readonly type: "int256";
    }];
    readonly name: "InternalBalanceChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "PausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "int256[]";
        readonly name: "deltas";
        readonly type: "int256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "protocolFeeAmounts";
        readonly type: "uint256[]";
    }];
    readonly name: "PoolBalanceChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "assetManager";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "cashDelta";
        readonly type: "int256";
    }, {
        readonly indexed: false;
        readonly internalType: "int256";
        readonly name: "managedDelta";
        readonly type: "int256";
    }];
    readonly name: "PoolBalanceManaged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "poolAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "enum IVault.PoolSpecialization";
        readonly name: "specialization";
        readonly type: "uint8";
    }];
    readonly name: "PoolRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "relayer";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "RelayerApprovalChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly name: "Swap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly name: "TokensDeregistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly indexed: false;
        readonly internalType: "address[]";
        readonly name: "assetManagers";
        readonly type: "address[]";
    }];
    readonly name: "TokensRegistered";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "WETH";
    readonly outputs: readonly [{
        readonly internalType: "contract IWETH";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum IVault.SwapKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetInIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetOutIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.BatchSwapStep[]";
        readonly name: "swaps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "contract IAsset[]";
        readonly name: "assets";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }, {
        readonly internalType: "int256[]";
        readonly name: "limits";
        readonly type: "int256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "batchSwap";
    readonly outputs: readonly [{
        readonly internalType: "int256[]";
        readonly name: "assetDeltas";
        readonly type: "int256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly name: "deregisterTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address payable";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.ExitPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "exitPool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IFlashLoanRecipient";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amounts";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "flashLoan";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDomainSeparator";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly name: "getInternalBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "getNextNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPausedState";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodEndTime";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }];
    readonly name: "getPool";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "enum IVault.PoolSpecialization";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getPoolTokenInfo";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "cash";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "managed";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "assetManager";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }];
    readonly name: "getPoolTokens";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolFeesCollector";
    readonly outputs: readonly [{
        readonly internalType: "contract ProtocolFeesCollector";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "relayer";
        readonly type: "address";
    }];
    readonly name: "hasApprovedRelayer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IAsset[]";
            readonly name: "assets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.JoinPoolRequest";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "joinPool";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IVault.PoolBalanceOpKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IVault.PoolBalanceOp[]";
        readonly name: "ops";
        readonly type: "tuple[]";
    }];
    readonly name: "managePoolBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IVault.UserBalanceOpKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }];
        readonly internalType: "struct IVault.UserBalanceOp[]";
        readonly name: "ops";
        readonly type: "tuple[]";
    }];
    readonly name: "manageUserBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum IVault.SwapKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetInIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "assetOutIndex";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.BatchSwapStep[]";
        readonly name: "swaps";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "contract IAsset[]";
        readonly name: "assets";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }];
    readonly name: "queryBatchSwap";
    readonly outputs: readonly [{
        readonly internalType: "int256[]";
        readonly name: "";
        readonly type: "int256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "enum IVault.PoolSpecialization";
        readonly name: "specialization";
        readonly type: "uint8";
    }];
    readonly name: "registerPool";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "assetManagers";
        readonly type: "address[]";
    }];
    readonly name: "registerTokens";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "setAuthorizer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "setPaused";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "relayer";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "approved";
        readonly type: "bool";
    }];
    readonly name: "setRelayerApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "enum IVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IAsset";
            readonly name: "assetOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IVault.SingleSwap";
        readonly name: "singleSwap";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "fromInternalBalance";
            readonly type: "bool";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "toInternalBalance";
            readonly type: "bool";
        }];
        readonly internalType: "struct IVault.FundManagement";
        readonly name: "funds";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountCalculated";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const vaultV3Abi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVaultExtension";
        readonly name: "vaultExtension";
        readonly type: "address";
    }, {
        readonly internalType: "contract IAuthorizer";
        readonly name: "authorizer";
        readonly type: "address";
    }, {
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "protocolFeeController";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AllZeroInputs";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmountGivenZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "AmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "AmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceNotSettled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "BufferTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotReceiveEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotSwapSameToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportAddLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportDonation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportRemoveLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportUnbalancedLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DynamicSwapFeeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeePrecisionTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedSwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "poolFactory";
        readonly type: "address";
    }];
    readonly name: "HookRegistrationFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAddLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidRemoveLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenConfiguration";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenDecimals";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenType";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "InvalidUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "invariantRatio";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxInvariantRatio";
        readonly type: "uint256";
    }];
    readonly name: "InvariantRatioAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "invariantRatio";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minInvariantRatio";
        readonly type: "uint256";
    }];
    readonly name: "InvariantRatioBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }];
    readonly name: "IssuedSharesBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MinTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MultipleNonZeroInputs";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughBufferShares";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedUnderlyingAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualUnderlyingAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughUnderlying";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedWrappedAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualWrappedAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughWrapped";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotStaticCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotVaultDelegateCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PauseBufferPeriodDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PercentageAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "PoolTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ProtocolFeesExceedTotalCollected";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabledPermanently";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QuoteResultSpoofed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RouterNotTrusted";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "int256";
        readonly name: "value";
        readonly type: "int256";
    }];
    readonly name: "SafeCastOverflowedIntToUint";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintToInt";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "SwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expectedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "actualToken";
        readonly type: "address";
    }];
    readonly name: "TokensMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TradeAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultBuffersArePaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultIsNotUnlocked";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "WrapAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongProtocolFeeControllerDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "underlyingToken";
        readonly type: "address";
    }];
    readonly name: "WrongUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultAdminDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultExtensionDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroDivision";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateSwapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateSwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateYieldFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "AuthorizerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesBurned";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesMinted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum AddLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsAddedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityAddedToBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum RemoveLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsRemovedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityRemovedFromBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInitialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "PoolPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "recoveryMode";
        readonly type: "bool";
    }];
    readonly name: "PoolRecoveryModeStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "factory";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokenConfig";
        readonly type: "tuple[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint32";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "enableHookAdjustedAmounts";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallComputeDynamicSwapFee";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "hooksContract";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct HooksConfig";
        readonly name: "hooksConfig";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly name: "PoolRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "newProtocolFeeController";
        readonly type: "address";
    }];
    readonly name: "ProtocolFeeControllerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeeAmount";
        readonly type: "uint256";
    }];
    readonly name: "Swap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "SwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "withdrawnUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Unwrap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "eventKey";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "eventData";
        readonly type: "bytes";
    }];
    readonly name: "VaultAuxiliary";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultBuffersPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesEnabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "depositedUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "mintedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Wrap";
    readonly type: "event";
}, {
    readonly stateMutability: "payable";
    readonly type: "fallback";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct AddLiquidityParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "enum WrappingDirection";
            readonly name: "direction";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IERC4626";
            readonly name: "wrappedToken";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGivenRaw";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "limitRaw";
            readonly type: "uint256";
        }];
        readonly internalType: "struct BufferWrapOrUnwrapParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "erc4626BufferWrapOrUnwrap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountCalculatedRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountInRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOutRaw";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getPoolTokenCountAndIndexOfToken";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVaultExtension";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reentrancyGuardEntered";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxBptAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "enum RemoveLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct RemoveLiquidityParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "returnData";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "sendTo";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountHint";
        readonly type: "uint256";
    }];
    readonly name: "settle";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "credit";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGivenRaw";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "limitRaw";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct VaultSwapParams";
        readonly name: "vaultSwapParams";
        readonly type: "tuple";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountCalculated";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "unlock";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const vaultExtensionAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "mainVault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IVaultAdmin";
        readonly name: "vaultAdmin";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmountGivenZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "AmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "AmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceNotSettled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "BufferTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotReceiveEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotSwapSameToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CodecOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportAddLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportDonation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportRemoveLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportUnbalancedLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DynamicSwapFeeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ErrorSelectorNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeePrecisionTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedSwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "poolFactory";
        readonly type: "address";
    }];
    readonly name: "HookRegistrationFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAddLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidRemoveLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenConfiguration";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenDecimals";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenType";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "InvalidUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }];
    readonly name: "IssuedSharesBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MinTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughBufferShares";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedUnderlyingAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualUnderlyingAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughUnderlying";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedWrappedAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualWrappedAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughWrapped";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotStaticCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotVaultDelegateCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PauseBufferPeriodDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PercentageAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "PoolTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ProtocolFeesExceedTotalCollected";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabledPermanently";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QuoteResultSpoofed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly name: "Result";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RouterNotTrusted";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintToInt";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "SwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expectedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "actualToken";
        readonly type: "address";
    }];
    readonly name: "TokensMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TokensNotSorted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TradeAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultBuffersArePaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultIsNotUnlocked";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "WrapAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongProtocolFeeControllerDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "underlyingToken";
        readonly type: "address";
    }];
    readonly name: "WrongUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultAdminDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultExtensionDeployment";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateSwapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateSwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateYieldFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "AuthorizerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesBurned";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesMinted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum AddLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsAddedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityAddedToBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum RemoveLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsRemovedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityRemovedFromBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInitialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "PoolPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "recoveryMode";
        readonly type: "bool";
    }];
    readonly name: "PoolRecoveryModeStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "factory";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokenConfig";
        readonly type: "tuple[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint32";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "enableHookAdjustedAmounts";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallComputeDynamicSwapFee";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "hooksContract";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct HooksConfig";
        readonly name: "hooksConfig";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly name: "PoolRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "newProtocolFeeController";
        readonly type: "address";
    }];
    readonly name: "ProtocolFeeControllerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeeAmount";
        readonly type: "uint256";
    }];
    readonly name: "Swap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "SwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "withdrawnUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Unwrap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "eventKey";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "eventData";
        readonly type: "bytes";
    }];
    readonly name: "VaultAuxiliary";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultBuffersPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesEnabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "depositedUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "mintedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Wrap";
    readonly type: "event";
}, {
    readonly stateMutability: "payable";
    readonly type: "fallback";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGivenScaled18";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balancesScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct PoolSwapParams";
        readonly name: "swapParams";
        readonly type: "tuple";
    }];
    readonly name: "computeDynamicSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "dynamicSwapFeePercentage";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "eventKey";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "eventData";
        readonly type: "bytes";
    }];
    readonly name: "emitAuxiliaryEvent";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getAddLiquidityCalledFlag";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getAggregateSwapFeeAmount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getAggregateYieldFeeAmount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getBptRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "rate";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getCurrentLiveBalances";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "getERC4626BufferAsset";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "asset";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getHooksConfig";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "enableHookAdjustedAmounts";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallComputeDynamicSwapFee";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "hooksContract";
            readonly type: "address";
        }];
        readonly internalType: "struct HooksConfig";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNonzeroDeltaCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolConfig";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "disableUnbalancedLiquidity";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "enableAddLiquidityCustom";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "enableRemoveLiquidityCustom";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "enableDonation";
                readonly type: "bool";
            }];
            readonly internalType: "struct LiquidityManagement";
            readonly name: "liquidityManagement";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256";
            readonly name: "staticSwapFeePercentage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "aggregateSwapFeePercentage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "aggregateYieldFeePercentage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint40";
            readonly name: "tokenDecimalDiffs";
            readonly type: "uint40";
        }, {
            readonly internalType: "uint32";
            readonly name: "pauseWindowEndTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolRegistered";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInitialized";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolPaused";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInRecoveryMode";
            readonly type: "bool";
        }];
        readonly internalType: "struct PoolConfig";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolData";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "PoolConfigBits";
            readonly name: "poolConfigBits";
            readonly type: "bytes32";
        }, {
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "enum TokenType";
                readonly name: "tokenType";
                readonly type: "uint8";
            }, {
                readonly internalType: "contract IRateProvider";
                readonly name: "rateProvider";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "paysYieldFees";
                readonly type: "bool";
            }];
            readonly internalType: "struct TokenInfo[]";
            readonly name: "tokenInfo";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balancesRaw";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balancesLiveScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenRates";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "decimalScalingFactors";
            readonly type: "uint256[]";
        }];
        readonly internalType: "struct PoolData";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolPausedState";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }, {
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }, {
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolRoleAccounts";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolTokenInfo";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenInfo[]";
        readonly name: "tokenInfo";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balancesRaw";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "lastBalancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolTokenRates";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "decimalScalingFactors";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "tokenRates";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getPoolTokens";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolFeeController";
    readonly outputs: readonly [{
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getReservesOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "getStaticSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getTokenDelta";
    readonly outputs: readonly [{
        readonly internalType: "int256";
        readonly name: "";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVaultAdmin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "isERC4626BufferInitialized";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolInRecoveryMode";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolInitialized";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolPaused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolRegistered";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isQueryDisabled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isQueryDisabledPermanently";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isUnlocked";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "quote";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "result";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "quoteAndRevert";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reentrancyGuardEntered";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokenConfig";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint32";
    }, {
        readonly internalType: "bool";
        readonly name: "protocolFeeExempt";
        readonly type: "bool";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly name: "registerPool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly name: "removeLiquidityRecovery";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOutRaw";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "vault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const weightedPoolFactoryAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "pauseWindowDuration";
        readonly type: "uint32";
    }, {
        readonly internalType: "string";
        readonly name: "factoryVersion";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "poolVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "Create2EmptyBytecode";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Create2FailedDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "Create2InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Disabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IndexOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PoolPauseWindowDurationOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SenderNotAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "StandardPoolWithCreator";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "FactoryDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolCreated";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokens";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "normalizedWeights";
        readonly type: "uint256[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "enableDonation";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "disableUnbalancedLiquidity";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disable";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDefaultLiquidityManagement";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDefaultPoolHooksContract";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "constructorArgs";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "getDeploymentAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNewPoolPauseWindowEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getOriginalPauseWindowEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPauseWindowDuration";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPools";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "start";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "count";
        readonly type: "uint256";
    }];
    readonly name: "getPoolsInRange";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "pools";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isDisabled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolFromFactory";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const weightedPoolFactoryV4Abi_V2: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IProtocolFeePercentagesProvider";
        readonly name: "protocolFeeProvider";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "factoryVersion";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "poolVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "FactoryDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolCreated";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "normalizedWeights";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "contract IRateProvider[]";
        readonly name: "rateProviders";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disable";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCreationCode";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCreationCodeContracts";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "contractA";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "contractB";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPauseConfiguration";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "pauseWindowDuration";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodDuration";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolFeePercentagesProvider";
    readonly outputs: readonly [{
        readonly internalType: "contract IProtocolFeePercentagesProvider";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isDisabled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolFromFactory";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const weightedPoolV4Abi_V2: readonly [{
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "normalizedWeights";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "contract IRateProvider[]";
            readonly name: "rateProviders";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "assetManagers";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "swapFeePercentage";
            readonly type: "uint256";
        }];
        readonly internalType: "struct WeightedPool.NewPoolParams";
        readonly name: "params";
        readonly type: "tuple";
    }, {
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IProtocolFeePercentagesProvider";
        readonly name: "protocolFeeProvider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "pauseWindowDuration";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodDuration";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "PausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "feeType";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "protocolFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "ProtocolFeePercentageCacheUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "enabled";
        readonly type: "bool";
    }];
    readonly name: "RecoveryModeStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "SwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DELEGATE_PROTOCOL_SWAP_FEES_SENTINEL";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "decreaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disableRecoveryMode";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "enableRecoveryMode";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getATHRateProduct";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getActualSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDomainSeparator";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getInvariant";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getLastPostJoinExitInvariant";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "getNextNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNormalizedWeights";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getOwner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPausedState";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "bufferPeriodEndTime";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "feeType";
        readonly type: "uint256";
    }];
    readonly name: "getProtocolFeePercentageCache";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolFeesCollector";
    readonly outputs: readonly [{
        readonly internalType: "contract IProtocolFeesCollector";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getProtocolSwapFeeDelegation";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRateProviders";
    readonly outputs: readonly [{
        readonly internalType: "contract IRateProvider[]";
        readonly name: "";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getScalingFactors";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "inRecoveryMode";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "addedValue";
        readonly type: "uint256";
    }];
    readonly name: "increaseAllowance";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "protocolSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "onExitPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "protocolSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "onJoinPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum IVault.SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenIn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "tokenOut";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "poolId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastChangeBlock";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IPoolSwapStructs.SwapRequest";
        readonly name: "request";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "balanceTokenIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "balanceTokenOut";
        readonly type: "uint256";
    }];
    readonly name: "onSwap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "protocolSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryExit";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "poolId";
        readonly type: "bytes32";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balances";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChangeBlock";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "protocolSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryJoin";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "amountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "poolConfig";
        readonly type: "bytes";
    }];
    readonly name: "setAssetManagerPoolConfig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "setSwapFeePercentage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpause";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "updateProtocolFeePercentageCache";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const weightedPoolAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "numTokens";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "normalizedWeights";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }];
        readonly internalType: "struct WeightedPool.NewPoolParams";
        readonly name: "params";
        readonly type: "tuple";
    }, {
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "BaseOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "length";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "ERC2612ExpiredSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "ERC2612InvalidSigner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ExponentOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "currentNonce";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidExponent";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxInRatio";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxOutRatio";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MinWeight";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NormalizedWeightInvariant";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ProductOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "str";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WeightedPoolBptRateUnsupported";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroDivision";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroInvariant";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PERMIT_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenInIndex";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "invariantRatio";
        readonly type: "uint256";
    }];
    readonly name: "computeBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newBalance";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "enum Rounding";
        readonly name: "rounding";
        readonly type: "uint8";
    }];
    readonly name: "computeInvariant";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "emitApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "emitTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAggregateFeePercentages";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "aggregateSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "aggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCurrentLiveBalances";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumInvariantRatio";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumInvariantRatio";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNormalizedWeights";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getStaticSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTokenInfo";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenInfo[]";
        readonly name: "tokenInfo";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balancesRaw";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "lastBalancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTokens";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getWeightedPoolDynamicData";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "balancesLiveScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenRates";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "staticSwapFeePercentage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInitialized";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolPaused";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInRecoveryMode";
            readonly type: "bool";
        }];
        readonly internalType: "struct WeightedPoolDynamicData";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getWeightedPoolImmutableData";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "decimalScalingFactors";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "normalizedWeights";
            readonly type: "uint256[]";
        }];
        readonly internalType: "struct WeightedPoolImmutableData";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "incrementNonce";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGivenScaled18";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balancesScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct PoolSwapParams";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "onSwap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const vaultAdminAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "mainVault";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "pauseWindowDuration";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "bufferPeriodDuration";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "minTradeAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minWrapAmount";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AfterSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmountGivenZero";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "AmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "AmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceNotSettled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BalanceOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeAddLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeInitializeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeRemoveLiquidityHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BeforeSwapHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "BptAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "BufferNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "BufferSharesInvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "BufferTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotReceiveEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CannotSwapSameToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CodecOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportAddLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportDonation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportRemoveLiquidityCustom";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DoesNotSupportUnbalancedLiquidity";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "DynamicSwapFeeHookFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "allowance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "approver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "receiver";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FeePrecisionTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedAmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "HookAdjustedSwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "poolFactory";
        readonly type: "address";
    }];
    readonly name: "HookRegistrationFailed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAddLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidRemoveLiquidityKind";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenConfiguration";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenDecimals";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidTokenType";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "InvalidUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }];
    readonly name: "IssuedSharesBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MinTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotEnoughBufferShares";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedUnderlyingAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualUnderlyingAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughUnderlying";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "expectedWrappedAmount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "actualWrappedAmount";
        readonly type: "uint256";
    }];
    readonly name: "NotEnoughWrapped";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotStaticCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotVaultDelegateCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PauseBufferPeriodDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PercentageAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInRecoveryMode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }];
    readonly name: "PoolTotalSupplyTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ProtocolFeesExceedTotalCollected";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QueriesDisabledPermanently";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "QuoteResultSpoofed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "RouterNotTrusted";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintToInt";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SenderNotAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapFeePercentageTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "limit";
        readonly type: "uint256";
    }];
    readonly name: "SwapLimit";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "TokenNotRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "expectedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "actualToken";
        readonly type: "address";
    }];
    readonly name: "TokensMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TradeAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultBuffersArePaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultIsNotUnlocked";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultNotPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowDurationTooLarge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPauseWindowExpired";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VaultPaused";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "WrapAmountTooSmall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongProtocolFeeControllerDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "underlyingToken";
        readonly type: "address";
    }];
    readonly name: "WrongUnderlyingToken";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultAdminDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "WrongVaultExtensionDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroDivision";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateSwapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateSwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "aggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "AggregateYieldFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "AuthorizerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesBurned";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly name: "BufferSharesMinted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum AddLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsAddedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityAdded";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityAddedToBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "liquidityProvider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "enum RemoveLiquidityKind";
        readonly name: "kind";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "totalSupply";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "amountsRemovedRaw";
        readonly type: "uint256[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256[]";
        readonly name: "swapFeeAmountsRaw";
        readonly type: "uint256[]";
    }];
    readonly name: "LiquidityRemoved";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountWrapped";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "LiquidityRemovedFromBuffer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolInitialized";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "PoolPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "recoveryMode";
        readonly type: "bool";
    }];
    readonly name: "PoolRecoveryModeStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "factory";
        readonly type: "address";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokenConfig";
        readonly type: "tuple[]";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint32";
        readonly name: "pauseWindowEndTime";
        readonly type: "uint32";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "enableHookAdjustedAmounts";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterInitialize";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallComputeDynamicSwapFee";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterSwap";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterAddLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallBeforeRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "shouldCallAfterRemoveLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "address";
            readonly name: "hooksContract";
            readonly type: "address";
        }];
        readonly indexed: false;
        readonly internalType: "struct HooksConfig";
        readonly name: "hooksConfig";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly indexed: false;
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly name: "PoolRegistered";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "newProtocolFeeController";
        readonly type: "address";
    }];
    readonly name: "ProtocolFeeControllerChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeeAmount";
        readonly type: "uint256";
    }];
    readonly name: "Swap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "SwapFeePercentageChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "burnedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "withdrawnUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Unwrap";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "eventKey";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "eventData";
        readonly type: "bytes";
    }];
    readonly name: "VaultAuxiliary";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultBuffersPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "paused";
        readonly type: "bool";
    }];
    readonly name: "VaultPausedStateChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "VaultQueriesEnabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "depositedUnderlying";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "mintedShares";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "bufferBalances";
        readonly type: "bytes32";
    }];
    readonly name: "Wrap";
    readonly type: "event";
}, {
    readonly stateMutability: "payable";
    readonly type: "fallback";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountUnderlyingInRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountWrappedInRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactSharesToIssue";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sharesOwner";
        readonly type: "address";
    }];
    readonly name: "addLiquidityToBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedRaw";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "areBuffersPaused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "collectAggregateFees";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "totalSwapFees";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "totalYieldFees";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disableQuery";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disableQueryPermanently";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "disableRecoveryMode";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "enableQuery";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "enableRecoveryMode";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }];
    readonly name: "getBufferAsset";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "underlyingToken";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getBufferBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getBufferMinimumTotalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }];
    readonly name: "getBufferOwnerShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getBufferPeriodDuration";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getBufferPeriodEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "getBufferTotalShares";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "shares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumPoolTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumPoolTokens";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumTradeAmount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumWrapAmount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPauseWindowEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolMinimumTotalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVaultPausedState";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }, {
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountUnderlyingRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountWrappedRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minIssuedShares";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sharesOwner";
        readonly type: "address";
    }];
    readonly name: "initializeBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "issuedShares";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isVaultPaused";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "pausePool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pauseVault";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pauseVaultBuffers";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "reentrancyGuardEntered";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "sharesToRemove";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountUnderlyingOutRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountWrappedOutRaw";
        readonly type: "uint256";
    }];
    readonly name: "removeLiquidityFromBuffer";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "removedUnderlyingBalanceRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "removedWrappedBalanceRaw";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC4626";
        readonly name: "wrappedToken";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "sharesToRemove";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountUnderlyingOutRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountWrappedOutRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sharesOwner";
        readonly type: "address";
    }];
    readonly name: "removeLiquidityFromBufferHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "removedUnderlyingBalanceRaw";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "removedWrappedBalanceRaw";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "newAuthorizer";
        readonly type: "address";
    }];
    readonly name: "setAuthorizer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IProtocolFeeController";
        readonly name: "newProtocolFeeController";
        readonly type: "address";
    }];
    readonly name: "setProtocolFeeController";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "setStaticSwapFeePercentage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "unpausePool";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpauseVault";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "unpauseVaultBuffers";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "newAggregateSwapFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "updateAggregateSwapFeePercentage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "newAggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly name: "updateAggregateYieldFeePercentage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "vault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

declare const stablePoolAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "amplificationParameter";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }];
        readonly internalType: "struct StablePool.NewPoolParams";
        readonly name: "params";
        readonly type: "tuple";
    }, {
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AmpUpdateAlreadyStarted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmpUpdateDurationTooShort";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmpUpdateNotStarted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmpUpdateRateTooFast";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmplificationFactorTooHigh";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "AmplificationFactorTooLow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "length";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }];
    readonly name: "ERC2612ExpiredSignature";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "signer";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "ERC2612InvalidSigner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "currentNonce";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SenderNotAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "StableComputeBalanceDidNotConverge";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "StableInvariantDidNotConverge";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "str";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ZeroDivision";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "startValue";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "endValue";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "startTime";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "AmpUpdateStarted";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "currentValue";
        readonly type: "uint256";
    }];
    readonly name: "AmpUpdateStopped";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Approval";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "Transfer";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "PERMIT_TYPEHASH";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }];
    readonly name: "allowance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "tokenInIndex";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "invariantRatio";
        readonly type: "uint256";
    }];
    readonly name: "computeBalance";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "newBalance";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "enum Rounding";
        readonly name: "rounding";
        readonly type: "uint8";
    }];
    readonly name: "computeInvariant";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "";
        readonly type: "uint8";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly internalType: "bytes1";
        readonly name: "fields";
        readonly type: "bytes1";
    }, {
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "version";
        readonly type: "string";
    }, {
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "verifyingContract";
        readonly type: "address";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "extensions";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "emitApproval";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "emitTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAggregateFeePercentages";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "aggregateSwapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "aggregateYieldFeePercentage";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAmplificationParameter";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isUpdating";
        readonly type: "bool";
    }, {
        readonly internalType: "uint256";
        readonly name: "precision";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAmplificationState";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint64";
            readonly name: "startValue";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "endValue";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "startTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endTime";
            readonly type: "uint32";
        }];
        readonly internalType: "struct AmplificationState";
        readonly name: "amplificationState";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "precision";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getCurrentLiveBalances";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "balancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumInvariantRatio";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMaximumSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumInvariantRatio";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getMinimumSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getRate";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getStablePoolDynamicData";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "balancesLiveScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenRates";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "staticSwapFeePercentage";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bptRate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amplificationParameter";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endValue";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endTime";
            readonly type: "uint32";
        }, {
            readonly internalType: "bool";
            readonly name: "isAmpUpdating";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInitialized";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolPaused";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "isPoolInRecoveryMode";
            readonly type: "bool";
        }];
        readonly internalType: "struct StablePoolDynamicData";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getStablePoolImmutableData";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "decimalScalingFactors";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "amplificationParameterPrecision";
            readonly type: "uint256";
        }];
        readonly internalType: "struct StablePoolImmutableData";
        readonly name: "data";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getStaticSwapFeePercentage";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTokenInfo";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenInfo[]";
        readonly name: "tokenInfo";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "balancesRaw";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "lastBalancesLiveScaled18";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getTokens";
    readonly outputs: readonly [{
        readonly internalType: "contract IERC20[]";
        readonly name: "tokens";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "incrementNonce";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "enum SwapKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountGivenScaled18";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "balancesScaled18";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "indexOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "router";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct PoolSwapParams";
        readonly name: "request";
        readonly type: "tuple";
    }];
    readonly name: "onSwap";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "spender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "deadline";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint8";
        readonly name: "v";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes32";
        readonly name: "r";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "s";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "rawEndValue";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "startAmplificationParameterUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "stopAmplificationParameterUpdate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalSupply";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const stablePoolFactoryAbi_V3: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "uint32";
        readonly name: "pauseWindowDuration";
        readonly type: "uint32";
    }, {
        readonly internalType: "string";
        readonly name: "factoryVersion";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "poolVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "Create2EmptyBytecode";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Create2FailedDeployment";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "balance";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "needed";
        readonly type: "uint256";
    }];
    readonly name: "Create2InsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "Disabled";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "IndexOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "MaxTokens";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "PoolPauseWindowDurationOverflow";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SenderNotAllowed";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "StandardPoolWithCreator";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "FactoryDisabled";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "PoolCreated";
    readonly type: "event";
}, {
    readonly inputs: readonly [{
        readonly internalType: "string";
        readonly name: "name";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "symbol";
        readonly type: "string";
    }, {
        readonly components: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum TokenType";
            readonly name: "tokenType";
            readonly type: "uint8";
        }, {
            readonly internalType: "contract IRateProvider";
            readonly name: "rateProvider";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "paysYieldFees";
            readonly type: "bool";
        }];
        readonly internalType: "struct TokenConfig[]";
        readonly name: "tokens";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "amplificationParameter";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "pauseManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "swapFeeManager";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "poolCreator";
            readonly type: "address";
        }];
        readonly internalType: "struct PoolRoleAccounts";
        readonly name: "roleAccounts";
        readonly type: "tuple";
    }, {
        readonly internalType: "uint256";
        readonly name: "swapFeePercentage";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "poolHooksContract";
        readonly type: "address";
    }, {
        readonly internalType: "bool";
        readonly name: "enableDonation";
        readonly type: "bool";
    }, {
        readonly internalType: "bool";
        readonly name: "disableUnbalancedLiquidity";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "disable";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }];
    readonly name: "getActionId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getAuthorizer";
    readonly outputs: readonly [{
        readonly internalType: "contract IAuthorizer";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDefaultLiquidityManagement";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bool";
            readonly name: "disableUnbalancedLiquidity";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableAddLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableRemoveLiquidityCustom";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "enableDonation";
            readonly type: "bool";
        }];
        readonly internalType: "struct LiquidityManagement";
        readonly name: "liquidityManagement";
        readonly type: "tuple";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getDefaultPoolHooksContract";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "constructorArgs";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes32";
        readonly name: "salt";
        readonly type: "bytes32";
    }];
    readonly name: "getDeploymentAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getNewPoolPauseWindowEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getOriginalPauseWindowEndTime";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPauseWindowDuration";
    readonly outputs: readonly [{
        readonly internalType: "uint32";
        readonly name: "";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolCount";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPoolVersion";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getPools";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "start";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "count";
        readonly type: "uint256";
    }];
    readonly name: "getPoolsInRange";
    readonly outputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "pools";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getVault";
    readonly outputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "isDisabled";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }];
    readonly name: "isPoolFromFactory";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];

declare const balancerCompositeLiquidityRouterAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "contract IVault";
        readonly name: "vault";
        readonly type: "address";
    }, {
        readonly internalType: "contract IWETH";
        readonly name: "weth";
        readonly type: "address";
    }, {
        readonly internalType: "contract IPermit2";
        readonly name: "permit2";
        readonly type: "address";
    }, {
        readonly internalType: "string";
        readonly name: "routerVersion";
        readonly type: "string";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenIn";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "maxAmountIn";
        readonly type: "uint256";
    }];
    readonly name: "AmountInAboveMax";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "contract IERC20";
        readonly name: "tokenOut";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "amountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "minAmountOut";
        readonly type: "uint256";
    }];
    readonly name: "AmountOutBelowMin";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ElementNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ErrorSelectorNotFound";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "EthTransfer";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InputLengthMismatch";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InsufficientEth";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "bits";
        readonly type: "uint8";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }];
    readonly name: "SenderIsNotVault";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SwapDeadline";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "TransientIndexOutOfBounds";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address[]";
        readonly name: "expectedTokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }];
    readonly name: "WrongTokensOut";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.AddLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "addLiquidityERC4626PoolProportionalHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.AddLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "addLiquidityERC4626PoolUnbalancedHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "maxUnderlyingAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityProportionalToERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentPool";
        readonly type: "address";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityUnbalancedNestedPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "maxAmountsIn";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "minBptAmountOut";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum AddLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.AddLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }];
    readonly name: "addLiquidityUnbalancedNestedPoolHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactUnderlyingAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "uint256";
        readonly name: "minBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidityUnbalancedToERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getSender";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "data";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IRouterCommon.PermitApproval[]";
        readonly name: "permitBatch";
        readonly type: "tuple[]";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "permitSignatures";
        readonly type: "bytes[]";
    }, {
        readonly components: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "token";
                readonly type: "address";
            }, {
                readonly internalType: "uint160";
                readonly name: "amount";
                readonly type: "uint160";
            }, {
                readonly internalType: "uint48";
                readonly name: "expiration";
                readonly type: "uint48";
            }, {
                readonly internalType: "uint48";
                readonly name: "nonce";
                readonly type: "uint48";
            }];
            readonly internalType: "struct IAllowanceTransfer.PermitDetails[]";
            readonly name: "details";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "sigDeadline";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IAllowanceTransfer.PermitBatch";
        readonly name: "permit2Batch";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes";
        readonly name: "permit2Signature";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes[]";
        readonly name: "multicallData";
        readonly type: "bytes[]";
    }];
    readonly name: "permitBatchAndCall";
    readonly outputs: readonly [{
        readonly internalType: "bytes[]";
        readonly name: "results";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountOut";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityProportionalToERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsIn";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentPool";
        readonly type: "address";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensIn";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityUnbalancedNestedPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "exactUnderlyingAmountsIn";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryAddLiquidityUnbalancedToERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "bptAmountOut";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquidityProportionalFromERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentPool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "queryRemoveLiquidityProportionalNestedPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxBptAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum RemoveLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.RemoveLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }];
    readonly name: "removeLiquidityERC4626PoolProportionalHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "pool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minUnderlyingAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquidityProportionalFromERC4626Pool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "underlyingAmountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "parentPool";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "exactBptAmountIn";
        readonly type: "uint256";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }, {
        readonly internalType: "uint256[]";
        readonly name: "minAmountsOut";
        readonly type: "uint256[]";
    }, {
        readonly internalType: "bool";
        readonly name: "wethIsEth";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes";
        readonly name: "userData";
        readonly type: "bytes";
    }];
    readonly name: "removeLiquidityProportionalNestedPool";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "payable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "pool";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "minAmountsOut";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxBptAmountIn";
            readonly type: "uint256";
        }, {
            readonly internalType: "enum RemoveLiquidityKind";
            readonly name: "kind";
            readonly type: "uint8";
        }, {
            readonly internalType: "bool";
            readonly name: "wethIsEth";
            readonly type: "bool";
        }, {
            readonly internalType: "bytes";
            readonly name: "userData";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IRouterCommon.RemoveLiquidityHookParams";
        readonly name: "params";
        readonly type: "tuple";
    }, {
        readonly internalType: "address[]";
        readonly name: "tokensOut";
        readonly type: "address[]";
    }];
    readonly name: "removeLiquidityProportionalNestedPoolHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256[]";
        readonly name: "amountsOut";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];

type Address = `0x${string}`;
type Hex = `0x${string}`;
declare enum PoolType {
    AaveLinear = "AaveLinear",
    ComposableStable = "ComposableStable",
    CowAmm = "CowAmm",
    Fx = "FX",
    Gyro2 = "Gyro2",
    Gyro3 = "Gyro3",
    GyroE = "GyroE",
    MetaStable = "MetaStable",
    Stable = "Stable",
    Weighted = "Weighted",
    Boosted = "Boosted"
}
declare enum SwapKind {
    GivenIn = 0,
    GivenOut = 1
}
interface SingleSwap {
    poolId: Hex;
    kind: SwapKind;
    assetIn: Address;
    assetOut: Address;
    amount: bigint;
    userData: Hex;
}
interface BatchSwapStep {
    poolId: Hex;
    assetInIndex: bigint;
    assetOutIndex: bigint;
    amount: bigint;
    userData: Hex;
}
type InputToken = {
    address: Address;
    decimals: number;
};
type InputAmount = InputToken & {
    rawAmount: bigint;
};
declare enum TokenType {
    STANDARD = 0,
    TOKEN_WITH_RATE = 1,
    ERC4626_TOKEN = 2
}

declare class Token$1 {
    readonly chainId: number;
    readonly address: Address$1;
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    readonly wrapped: Address$1;
    constructor(chainId: number, address: Address$1, decimals: number, symbol?: string, name?: string, wrapped?: Address$1);
    isEqual(token: Token$1): boolean;
    isUnderlyingEqual(token: Token$1): boolean;
    isSameAddress(address: Address$1): boolean;
    toInputToken(): InputToken;
}

declare const ZERO_ADDRESS: Address$1;
declare const EMPTY_SENDER: {
    account: `0x${string}`;
};
declare const MAX_UINT112 = 5192296858534827628530496329220095n;
declare const MAX_UINT256 = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;
declare const PREMINTED_STABLE_BPT = 2596148429267413814265248164610048n;
declare const DECIMAL_SCALES: {
    0: bigint;
    1: bigint;
    2: bigint;
    3: bigint;
    4: bigint;
    5: bigint;
    6: bigint;
    7: bigint;
    8: bigint;
    9: bigint;
    10: bigint;
    11: bigint;
    12: bigint;
    13: bigint;
    14: bigint;
    15: bigint;
    16: bigint;
    17: bigint;
    18: bigint;
};
declare const SECONDS_PER_YEAR = 31536000n;
declare enum ChainId {
    MAINNET = 1,
    BERACHAIN = 80094,
    AVALANCHE = 43114,
    BASE_GOERLI = 84531,
    SEPOLIA = 11155111
}
declare const API_CHAIN_NAMES: Record<number, string>;
declare const CHAINS: Record<number, Chain>;
/**
 * Deployment Addresses
 * Source: https://docs.balancer.fi/reference/contracts
 */
declare const BALANCER_RELAYER: Record<number, Address$1>;
declare const VAULT: Record<number, Address$1>;
declare const VAULT_V3: Record<number, Address$1>;
declare const VAULT_ADMIN: Record<number, Address$1>;
declare const BALANCER_QUERIES: Record<number, Address$1>;
declare const WEIGHTED_POOL_FACTORY_BALANCER_V2: Record<number, Address$1>;
declare const COMPOSABLE_STABLE_POOL_FACTORY: Record<number, Address$1>;
declare const WEIGHTED_POOL_FACTORY_BALANCER_V3: Record<number, Address$1>;
declare const STABLE_POOL_FACTORY_BALANCER_V3: Record<number, Address$1>;
declare const BALANCER_ROUTER: Record<number, Address$1>;
declare const BALANCER_BATCH_ROUTER: Record<number, Address$1>;
declare const BALANCER_COMPOSITE_LIQUIDITY_ROUTER: Record<number, Address$1>;
declare const BALANCER_BUFFER_ROUTER: Record<number, Address$1>;
declare const PERMIT2: Record<number, Address$1>;
declare const AUTHORIZER: Record<number, Address$1>;
declare const ADMIN_OF_AUTHORIZER = "0x171C0fF5943CE5f133130436A29bF61E26516003";
/**
 * Native Assets
 */
declare const NATIVE_ASSETS: {
    1: Token$1;
    11155111: Token$1;
    43114: Token$1;
    80094: Token$1;
};
declare const ETH: Token$1;
declare const DEFAULT_FUND_MANAGMENT: {
    sender: `0x${string}`;
    recipient: `0x${string}`;
    fromInternalBalance: boolean;
    toInternalBalance: boolean;
};
declare const DEFAULT_USERDATA = "0x";
declare const API_ENDPOINT = "https://api-v3.balancer.fi";
declare const TEST_API_ENDPOINT = "https://test-api-v3.balancer.fi";

declare const addLiquiditySingleTokenShouldHaveTokenInIndexError: Error;
declare const addLiquidityProportionalUnavailableError: Error;
declare const removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError: Error;
declare const removeLiquidityUnbalancedNotSupportedOnV3: Error;
declare const addLiquidityProportionalNotSupportedOnPoolTypeError: (poolType: string) => Error;
declare const addLiquidityProportionalOnlyError: (kind: AddLiquidityKind, poolType: string) => Error;
declare const removeLiquidityProportionalOnlyError: (kind: RemoveLiquidityKind, poolType: string) => Error;
declare const buildCallWithPermit2ProtocolVersionError: Error;

type BigintIsh = bigint | string | number;
declare class TokenAmount {
    readonly token: Token$1;
    readonly scalar: bigint;
    readonly decimalScale: bigint;
    amount: bigint;
    scale18: bigint;
    static fromRawAmount(token: Token$1, rawAmount: BigintIsh): TokenAmount;
    static fromHumanAmount(token: Token$1, humanAmount: `${number}`): TokenAmount;
    static fromScale18Amount(token: Token$1, scale18Amount: BigintIsh, divUp?: boolean): TokenAmount;
    static fromInputAmount(input: InputAmount, chainId: number): TokenAmount;
    protected constructor(token: Token$1, amount: BigintIsh);
    add(other: TokenAmount): TokenAmount;
    sub(other: TokenAmount): TokenAmount;
    mulUpFixed(other: bigint): TokenAmount;
    mulDownFixed(other: bigint): TokenAmount;
    divUpFixed(other: bigint): TokenAmount;
    divDownFixed(other: bigint): TokenAmount;
    toSignificant(significantDigits?: number): string;
    toInputAmount(): InputAmount;
}

declare function checkInputs(tokenIn: Token$1, tokenOut: Token$1, swapKind: SwapKind, swapAmount: BigintIsh | TokenAmount): TokenAmount;
declare function isSameAddress(address1: Address, address2: Address): boolean;
declare function removeIndex<T>(array: T[], index: number): T[];
declare function insertIndex<T>(array: T[], index: number, value: T): T[];

declare const WAD = 1000000000000000000n;
declare const RAY = 1000000000000000000000000000000000000n;
declare const TWO_WAD = 2000000000000000000n;
declare const FOUR_WAD = 4000000000000000000n;
declare const HUNDRED_WAD = 100000000000000000000n;
declare const abs: (n: bigint) => bigint;
declare const min: (values: bigint[]) => bigint;
declare const max: (values: bigint[]) => bigint;
declare class MathSol {
    static max(a: bigint, b: bigint): bigint;
    static min(a: bigint, b: bigint): bigint;
    static MAX_POW_RELATIVE_ERROR: bigint;
    static mulDownFixed(a: bigint, b: bigint): bigint;
    static mulUpFixed(a: bigint, b: bigint): bigint;
    static divDownFixed(a: bigint, b: bigint): bigint;
    static divUpFixed(a: bigint, b: bigint): bigint;
    static divUp(a: bigint, b: bigint): bigint;
    static powUpFixed(x: bigint, y: bigint, version?: number): bigint;
    static powDownFixed(x: bigint, y: bigint, version?: number): bigint;
    static complementFixed(x: bigint): bigint;
}

/**
 * Extracts a pool's address from its poolId
 * @param poolId - a bytes32 string of the pool's ID
 * @returns the pool's address
 */
declare const getPoolAddress: (poolId: string) => Address;
declare function poolIsLinearPool(poolType: string): boolean;
declare function poolHasVirtualSupply(poolType: string): boolean;
declare function poolHasActualSupply(poolType: string): poolType is "ComposableStable";
declare function poolHasPercentFee(poolType: string): poolType is "Element";

declare const mapPoolType: (type: string) => PoolType;

interface ObjectWithAddress {
    address: Address$1;
}
declare function sortByAddress<T extends ObjectWithAddress>(objectWithAddressArray: T[]): T[];

type PublicWalletClient = WalletClient & PublicActions;

declare class BalancerApiClient {
    apiUrl: string;
    chainId: ChainId;
    constructor(apiUrl: string, chainId: ChainId);
    fetch(requestQuery: {
        operationName?: string;
        query: string;
        variables?: any;
    }): Promise<any>;
}

declare class Slippage {
    amount: bigint;
    decimal: number;
    percentage: number;
    bps: number;
    static fromRawAmount(rawAmount: BigintIsh): Slippage;
    static fromDecimal(decimalAmount: `${number}`): Slippage;
    static fromPercentage(percentageAmount: `${number}`): Slippage;
    static fromBasisPoints(bpsAmount: `${number}`): Slippage;
    /**
     * Creates a new slippage object
     *
     * @param amount amount of slippage, always positive
     */
    protected constructor(amount: BigintIsh);
    /**
     * Applies slippage to an amount in a given direction
     *
     * @param amount amout to apply slippage to
     * @param direction +1 adds the slippage to the amount, and -1 will remove the slippage from the amount
     * @returns
     */
    applyTo(amount: bigint, direction?: 1 | -1): bigint;
}

type PoolState = {
    id: Hex;
    address: Address;
    type: string;
    tokens: MinimalToken[];
    protocolVersion: 1 | 2 | 3;
};
type PoolStateWithBalances = {
    id: Hex;
    address: Address;
    type: string;
    tokens: PoolTokenWithBalance[];
    totalShares: HumanAmount;
    protocolVersion: 1 | 2 | 3;
};
type PoolStateWithBalancesAndDynamicData = PoolStateWithBalances & {
    volume24h: HumanAmount;
    fees24h: HumanAmount;
    aprItems: {
        id: Hex;
        apr: number;
    }[];
};
type PoolTokenWithUnderlying = MinimalToken & {
    underlyingToken: MinimalToken | null;
};
interface PoolTokenWithUnderlyingBalance extends PoolTokenWithBalance {
    underlyingToken: PoolTokenWithBalance | null;
}
type PoolStateWithUnderlyings = {
    id: Hex;
    address: Address;
    type: string;
    tokens: PoolTokenWithUnderlying[];
    protocolVersion: 1 | 2 | 3;
};
type PoolStateWithUnderlyingBalances = {
    id: Hex;
    address: Address;
    type: string;
    tokens: PoolTokenWithUnderlyingBalance[];
    totalShares: HumanAmount;
    protocolVersion: 1 | 2 | 3;
};
type AddLiquidityAmounts = {
    maxAmountsIn: bigint[];
    maxAmountsInWithoutBpt: bigint[];
    tokenInIndex: number | undefined;
    minimumBpt: bigint;
};
type RemoveLiquidityAmounts = {
    minAmountsOut: bigint[];
    tokenOutIndex: number | undefined;
    maxBptAmountIn: bigint;
};
type NestedPoolBase = {
    id: Hex;
    address: Address;
    type: PoolType;
    level: number;
};
type NestedPoolV2 = NestedPoolBase & {
    tokens: MinimalToken[];
};
type NestedPoolV3 = NestedPoolBase & {
    tokens: PoolTokenWithUnderlying[];
};
type NestedPoolStateBase = {
    protocolVersion: 1 | 2 | 3;
    mainTokens: {
        address: Address;
        decimals: number;
    }[];
};
type NestedPoolStateV2 = NestedPoolStateBase & {
    protocolVersion: 1 | 2;
    pools: NestedPoolV2[];
};
type NestedPoolStateV3 = NestedPoolStateBase & {
    protocolVersion: 3;
    pools: NestedPoolV3[];
};
type NestedPoolState = NestedPoolStateV2 | NestedPoolStateV3;
declare enum PoolKind {
    WEIGHTED = 0,
    LEGACY_STABLE = 1,
    COMPOSABLE_STABLE = 2,
    COMPOSABLE_STABLE_V2 = 3
}
type InitPoolAmounts = {
    maxAmountsIn: bigint[];
};
type InitPoolAmountsComposableStable = InitPoolAmounts & {
    amountsIn: bigint[];
};
type BufferState = {
    wrappedToken: {
        address: Address;
        decimals: number;
    };
    underlyingToken: {
        address: Address;
        decimals: number;
    };
};

type AddLiquidityV2ComposableStableQueryOutput = AddLiquidityV2BaseQueryOutput & {
    bptIndex: number;
};
type AddLiquidityV2ComposableStableBuildCallInput = AddLiquidityV2BaseBuildCallInput & AddLiquidityV2ComposableStableQueryOutput;

type AddLiquidityV2BaseBuildCallInput = AddLiquidityBaseBuildCallInput & {
    fromInternalBalance?: boolean;
    sender: Address;
    recipient: Address;
};
type AddLiquidityV2BuildCallInput = AddLiquidityV2BaseBuildCallInput | AddLiquidityV2ComposableStableBuildCallInput;
type AddLiquidityV2BaseQueryOutput = AddLiquidityBaseQueryOutput & {
    protocolVersion: 2;
};
type AddLiquidityV2QueryOutput = AddLiquidityV2BaseQueryOutput | AddLiquidityV2ComposableStableQueryOutput;

interface PermitDetails {
    token: Address$1;
    amount: bigint;
    expiration: number;
    nonce: number;
}
interface PermitSingle {
    details: PermitDetails;
    spender: Address$1;
    sigDeadline: bigint;
}
interface Permit2Batch {
    details: PermitDetails[];
    spender: Address$1;
    sigDeadline: bigint;
}
type PermitSingleData = {
    domain: TypedDataDomain;
    types: TypedData;
    values: PermitSingle;
};
type PermitBatchData = {
    domain: TypedDataDomain;
    types: TypedData;
    values: Permit2Batch;
};
declare abstract class AllowanceTransfer {
    /**
     * Cannot be constructed.
     */
    private constructor();
    static getPermitSingleData(permit: PermitSingle, permit2Address: Address$1, chainId: number): {
        domain: TypedDataDomain;
        values: PermitSingle;
    };
    static getPermitBatchData(permit: Permit2Batch, permit2Address: Address$1, chainId: number): {
        domain: TypedDataDomain;
        values: Permit2Batch;
    };
    static getPermitData(permit: PermitSingle | Permit2Batch, permit2Address: Address$1, chainId: number): PermitSingleData | PermitBatchData;
    static hash(permit: PermitSingle | Permit2Batch, permit2Address: Address$1, chainId: number): string;
}

type TokenApi = Omit<MinimalToken, 'index'>;
type Path = {
    pools: Address$1[] | Hex$1[];
    isBuffer?: boolean[];
    tokens: TokenApi[];
    outputAmountRaw: bigint;
    inputAmountRaw: bigint;
    protocolVersion: 1 | 2 | 3;
};

declare class PathWithAmount {
    readonly pools: Address$1[];
    readonly isBuffer: boolean[];
    readonly tokens: TokenApi[];
    readonly outputAmount: TokenAmount;
    readonly inputAmount: TokenAmount;
    constructor(chainId: number, tokens: TokenApi[], pools: Address$1[], inputAmountRaw: bigint, outputAmountRaw: bigint, isBuffer: boolean[] | undefined);
}

type SwapBuildCallInputBaseV2 = {
    sender: Address$1;
    recipient: Address$1;
};

type SwapInput = {
    chainId: number;
    paths: Path[];
    swapKind: SwapKind;
    userData?: Hex$1;
};
type SwapBuildCallInputBase = {
    deadline?: bigint;
    slippage: Slippage;
    wethIsEth?: boolean;
    queryOutput: ExactInQueryOutput | ExactOutQueryOutput;
};
type SwapBuildCallInput = SwapBuildCallInputBase | (SwapBuildCallInputBase & SwapBuildCallInputBaseV2);
type SwapBuildOutputBase = {
    to: Address$1;
    callData: Hex$1;
    value: bigint;
};
type SwapBuildOutputExactIn = SwapBuildOutputBase & {
    minAmountOut: TokenAmount;
};
type SwapBuildOutputExactOut = SwapBuildOutputBase & {
    maxAmountIn: TokenAmount;
};
type QueryOutputBase = {
    swapKind: SwapKind;
    pathAmounts?: bigint[];
    to: Address$1;
};
type ExactInQueryOutput = QueryOutputBase & {
    swapKind: SwapKind.GivenIn;
    amountIn: TokenAmount;
    expectedAmountOut: TokenAmount;
};
type ExactOutQueryOutput = QueryOutputBase & {
    swapKind: SwapKind.GivenOut;
    amountOut: TokenAmount;
    expectedAmountIn: TokenAmount;
};

declare function getInputAmount(paths: PathWithAmount[]): TokenAmount;
declare function getOutputAmount(paths: PathWithAmount[]): TokenAmount;
declare function validatePaths(paths: Path[]): void;
/**
 * Determines if the given paths represent a batch swap.
 *
 * A batch swap is identified by one of the following conditions:
 * - There is more than one path.
 * - The first path contains more than one pool.
 * - The input token is the same as the first pool in the first path. (a BPT swap)
 * - The output token is the same as the first pool in the first path. (a BPT swap)
 */
declare function isBatchSwap(paths: Path[], inputToken: Address$1, outputToken: Address$1): boolean;

declare class Swap {
    private readonly swap;
    protocolVersion: 2 | 3;
    constructor(swapInput: SwapInput);
    get quote(): TokenAmount;
    get inputAmount(): TokenAmount;
    get outputAmount(): TokenAmount;
    get isBatchSwap(): boolean;
    query(rpcUrl?: string, block?: bigint, sender?: Address$1): Promise<ExactInQueryOutput | ExactOutQueryOutput>;
    queryCallData(): string;
    /**
     * Returns the transaction data to be sent to the vault contract
     *
     * @param input
     * @returns
     */
    buildCall(input: SwapBuildCallInput): SwapBuildOutputExactIn | SwapBuildOutputExactOut;
    buildCallWithPermit2(input: SwapBuildCallInput, permit2: Permit2): SwapBuildOutputExactIn | SwapBuildOutputExactOut;
}

type AddLiquidityBufferInput = {
    chainId: number;
    rpcUrl: string;
    exactSharesToIssue: bigint;
};
type AddLiquidityBufferQueryOutput = {
    exactSharesToIssue: bigint;
    wrappedAmountIn: TokenAmount;
    underlyingAmountIn: TokenAmount;
    chainId: number;
    protocolVersion: 3;
    to: Address$1;
};
type AddLiquidityBufferBuildCallInput = {
    slippage: Slippage;
} & AddLiquidityBufferQueryOutput;
type AddLiquidityBufferBuildCallOutput = {
    callData: Hex$1;
    to: Address$1;
    value: bigint;
    exactSharesToIssue: bigint;
    maxWrappedAmountIn: TokenAmount;
    maxUnderlyingAmountIn: TokenAmount;
};

type InitBufferInput = {
    chainId: number;
    rpcUrl: string;
    wrappedAmountIn: InputAmount;
    underlyingAmountIn: InputAmount;
};
type InitBufferQueryOutput = {
    issuedShares: bigint;
    wrappedAmountIn: TokenAmount;
    underlyingAmountIn: TokenAmount;
    chainId: number;
    protocolVersion: 3;
    to: Address$1;
};
type InitBufferBuildCallInput = {
    slippage: Slippage;
} & InitBufferQueryOutput;
type InitBufferBuildCallOutput = {
    callData: Hex$1;
    to: Address$1;
    value: bigint;
    minIssuedShares: bigint;
};

declare const MaxUint48: bigint;
declare const MaxUint160: bigint;
declare const MaxUint256: bigint;
declare const MaxAllowanceTransferAmount: bigint;
declare const MaxAllowanceExpiration: bigint;
declare const MaxOrderedNonce: bigint;
declare const MaxSignatureTransferAmount: bigint;
declare const MaxUnorderedNonce: bigint;
declare const MaxSigDeadline: bigint;
declare const InstantExpiration: bigint;

type Permit2 = {
    batch: Permit2Batch;
    signature: Hex;
};
declare class Permit2Helper {
    static signAddLiquidityApproval(input: AddLiquidityBaseBuildCallInput & {
        client: PublicWalletClient;
        owner: Address;
        nonces?: number[];
        expirations?: number[];
    }): Promise<Permit2>;
    static signAddLiquidityNestedApproval(input: {
        amountsIn: TokenAmount[];
        chainId: ChainId;
        client: PublicWalletClient;
        owner: Address;
        nonces?: number[];
        expirations?: number[];
    }): Promise<Permit2>;
    static signAddLiquidityBoostedApproval(input: AddLiquidityBaseBuildCallInput & {
        client: PublicWalletClient;
        owner: Address;
        nonces?: number[];
        expirations?: number[];
    }): Promise<Permit2>;
    static signAddLiquidityBufferApproval(input: AddLiquidityBufferBuildCallInput & {
        client: PublicWalletClient;
        owner: Address;
        nonces?: number[];
        expirations?: number[];
    }): Promise<Permit2>;
    static signInitBufferApproval(input: InitBufferBuildCallInput & {
        client: PublicWalletClient;
        owner: Address;
        nonces?: number[];
        expirations?: number[];
    }): Promise<Permit2>;
    static signSwapApproval(input: SwapBuildCallInputBase & {
        client: PublicWalletClient;
        owner: Address;
        nonce?: number;
        expiration?: number;
    }): Promise<Permit2>;
}

declare const getPoolStateWithBalancesCowAmm: (poolState: PoolState, chainId: number, rpcUrl: string) => Promise<PoolStateWithBalances>;
/**
 * For a given pool and reference token amount, calculate all token amounts proportional to their balances within the pool.
 *
 * Note: when using this helper to build an AddLiquidityProportional input,
 * please mind that referenceAmount should be relative to the token that the user
 * has the lowest balance compared to the pool's proportions. Otherwise the transaction
 * may require more balance than the user has.
 * @param pool
 * @param referenceAmount
 * @returns Proportional amounts
 */
declare function calculateProportionalAmountsCowAmm(pool: {
    address: Address;
    totalShares: HumanAmount;
    tokens: {
        address: Address;
        balance: HumanAmount;
        decimals: number;
    }[];
}, referenceAmount: InputAmount): {
    tokenAmounts: InputAmount[];
    bptAmount: InputAmount;
};

declare function doAddLiquidityQuery(rpcUrl: string, chainId: number, args: readonly [Address, Address, Address, JoinPoolRequest]): Promise<{
    bptOut: bigint;
    amountsIn: readonly bigint[];
}>;

/**
 * Get amounts from array of TokenAmounts returning default if not a value for tokens.
 * @param tokens
 * @param amounts
 * @param defaultAmount
 * @returns
 */
declare function getAmounts(tokens: Token$1[], amounts: InputAmount[], defaultAmount?: bigint): bigint[];

declare const getPoolStateWithBalancesV2: (poolState: PoolState, chainId: number, rpcUrl: string) => Promise<PoolStateWithBalances>;

declare const getPoolStateWithBalancesV3: (poolState: PoolState, chainId: number, rpcUrl: string) => Promise<PoolStateWithBalances>;
declare const getBoostedPoolStateWithBalancesV3: (poolState: PoolStateWithUnderlyings, chainId: number, rpcUrl: string) => Promise<PoolStateWithUnderlyingBalances>;

type HumanAmount = `${number}`;
interface MinimalToken {
    address: Address$1;
    decimals: number;
    index: number;
    symbol?: string;
    name?: string;
}
interface PoolTokenWithBalance extends MinimalToken {
    balance: HumanAmount;
}

declare function getSortedTokens(tokens: MinimalToken[], chainId: number): Token$1[];

declare const getValue: (amountsIn: TokenAmount[], wethIsEth: boolean, slippage?: Slippage) => bigint;

declare function parseAddLiquidityArgs({ wethIsEth, chainId, sortedTokens, poolId, sender, recipient, maxAmountsIn, userData, fromInternalBalance, }: {
    chainId?: number;
    wethIsEth?: boolean;
    sortedTokens: Token$1[];
    poolId: Hex;
    sender: Address;
    recipient: Address;
    maxAmountsIn: readonly bigint[];
    userData: Hex;
    fromInternalBalance?: boolean;
}): {
    args: readonly [`0x${string}`, `0x${string}`, `0x${string}`, {
        assets: `0x${string}`[];
        maxAmountsIn: readonly bigint[];
        userData: `0x${string}`;
        fromInternalBalance: boolean;
    }];
    tokensIn: Token$1[];
};

interface CreatePoolBase {
    buildCall(input: CreatePoolInput): CreatePoolBuildCallOutput;
}
type CreatePoolBaseInput = {
    name?: string;
    symbol: string;
    salt?: Hex$1;
    chainId: number;
    protocolVersion: 2 | 3;
};
type CreatePoolV2BaseInput = CreatePoolBaseInput & {
    swapFee: string;
    poolOwnerAddress: Address$1;
    protocolVersion: 2;
};
type CreatePoolV2WeightedInput = CreatePoolV2BaseInput & {
    poolType: PoolType.Weighted;
    tokens: {
        address: Address$1;
        rateProvider: Address$1;
        weight: bigint;
    }[];
};
type CreatePoolV2ComposableStableInput = CreatePoolV2BaseInput & {
    poolType: PoolType.ComposableStable;
    tokens: {
        address: Address$1;
        rateProvider: Address$1;
        tokenRateCacheDuration: bigint;
    }[];
    amplificationParameter: bigint;
    exemptFromYieldProtocolFeeFlag: boolean;
};
type CreatePoolV3BaseInput = CreatePoolBaseInput & {
    protocolVersion: 3;
    pauseManager: Address$1;
    swapFeeManager: Address$1;
    swapFeePercentage: bigint;
    poolHooksContract: Address$1;
    enableDonation: boolean;
    disableUnbalancedLiquidity: boolean;
};
type CreatePoolV3StableInput = CreatePoolV3BaseInput & {
    poolType: PoolType.Stable;
    amplificationParameter: bigint;
    tokens: {
        address: Address$1;
        rateProvider: Address$1;
        tokenType: TokenType;
        paysYieldFees: boolean;
    }[];
};
type CreatePoolV3WeightedInput = CreatePoolV3BaseInput & {
    poolType: PoolType.Weighted;
    tokens: {
        address: Address$1;
        rateProvider: Address$1;
        weight: bigint;
        tokenType: TokenType;
        paysYieldFees?: boolean;
    }[];
};
type CreatePoolInput = CreatePoolV2WeightedInput | CreatePoolV2ComposableStableInput | CreatePoolV3WeightedInput | CreatePoolV3StableInput;
type CreatePoolBuildCallOutput = {
    callData: Hex$1;
    to: Address$1;
};
type CreatePoolV2WeightedArgs = [
    string,
    string,
    Address$1[],
    bigint[],
    Address$1[],
    bigint,
    Address$1,
    Hex$1
];
type CreatePoolV2ComposableStableArgs = [
    string,
    string,
    Address$1[],
    bigint,
    Address$1[],
    bigint[],
    boolean,
    bigint,
    Address$1,
    Hex$1
];
type TokenConfig = {
    token: Address$1;
    tokenType: TokenType;
    rateProvider: Address$1;
    paysYieldFees: boolean;
};
type PoolRoleAccounts = {
    pauseManager: Address$1;
    swapFeeManager: Address$1;
    poolCreator: Address$1;
};

interface InitPoolBase {
    buildCall(input: InitPoolInput, poolState: PoolState): InitPoolBuildOutput;
}
type InitPoolBuildOutput = {
    callData: Hex$1;
    to: Address$1;
    value: bigint;
};
type InitPoolInput = InitPoolInputV2 | InitPoolInputV3;
type InitBaseInput = {
    amountsIn: InputAmount[];
    chainId: number;
    wethIsEth?: boolean;
};
type InitPoolInputV2 = InitBaseInput & {
    sender: Address$1;
    recipient: Address$1;
    fromInternalBalance?: boolean;
};
type InitPoolInputV3 = InitBaseInput & {
    minBptAmountOut: bigint;
};
type InitPoolConfig = {
    initPoolTypes: Record<string, InitPoolBase>;
};
type InitializeArgs = [
    Address$1,
    Address$1[],
    bigint[],
    bigint,
    boolean,
    Hex$1
];

type PermitApproval = {
    /** Address of the token to approve */
    token: Hex;
    /** Owner of the tokens. Usually the currently connected address. */
    owner: Hex;
    /** Address to grant allowance to */
    spender: Hex;
    /** Amount to approve */
    amount: bigint;
    /** Nonce of the permit */
    nonce: bigint;
    /** Expiration of this approval, in SECONDS */
    deadline: bigint;
};
type Permit = {
    batch: PermitApproval[];
    signatures: Hex[];
};
declare class PermitHelper {
    static signRemoveLiquidityApproval: (input: RemoveLiquidityBaseBuildCallInput & {
        client: PublicWalletClient;
        owner: Hex;
        nonce?: bigint;
        deadline?: bigint;
    }) => Promise<Permit>;
    static signRemoveLiquidityNestedApproval: (input: {
        bptAmountIn: TokenAmount;
        chainId: ChainId;
        client: PublicWalletClient;
        owner: Hex;
        nonce?: bigint;
        deadline?: bigint;
    }) => Promise<Permit>;
    static signRemoveLiquidityBoostedApproval: (input: RemoveLiquidityBaseBuildCallInput & {
        client: PublicWalletClient;
        owner: Hex;
        nonce?: bigint;
        deadline?: bigint;
    }) => Promise<Permit>;
}

declare function parseRemoveLiquidityArgs({ chainId, wethIsEth, sortedTokens, poolId, sender, recipient, minAmountsOut, userData, toInternalBalance, }: {
    chainId?: number;
    wethIsEth?: boolean;
    sortedTokens: Token$1[];
    poolId: Address;
    sender: Address;
    recipient: Address;
    minAmountsOut: bigint[];
    userData: Address;
    toInternalBalance?: boolean;
}): {
    args: readonly [`0x${string}`, `0x${string}`, `0x${string}`, ExitPoolRequest];
    tokensOut: Token$1[];
};

type RemoveLiquidityV2ComposableStableQueryOutput = RemoveLiquidityBaseQueryOutput & {
    bptIndex: number;
};
type RemoveLiquidityV2ComposableStableBuildCallInput = RemoveLiquidityV2BaseBuildCallInput & RemoveLiquidityV2ComposableStableQueryOutput;

type RemoveLiquidityV2BaseBuildCallInput = RemoveLiquidityBaseBuildCallInput & {
    sender: Address;
    recipient: Address;
    toInternalBalance?: boolean;
};
type RemoveLiquidityV2BuildCallInput = RemoveLiquidityV2BaseBuildCallInput | RemoveLiquidityV2ComposableStableBuildCallInput;
type RemoveLiquidityV2BaseQueryOutput = RemoveLiquidityBaseQueryOutput & {
    protocolVersion: 2;
};
type RemoveLiquidityV2QueryOutput = RemoveLiquidityV2BaseQueryOutput | RemoveLiquidityV2ComposableStableQueryOutput;

type RemoveLiquidityBoostedProportionalInput = {
    chainId: number;
    rpcUrl: string;
    bptIn: InputAmount;
    kind: RemoveLiquidityKind.Proportional;
    sender?: Address$1;
    userData?: Hex$1;
};
type RemoveLiquidityBoostedQueryOutput = {
    poolType: string;
    poolId: Address$1;
    removeLiquidityKind: RemoveLiquidityKind.Proportional;
    bptIn: TokenAmount;
    amountsOut: TokenAmount[];
    protocolVersion: 3;
    chainId: number;
    userData: Hex$1;
    to: Address$1;
};
type RemoveLiquidityBoostedBuildCallInput = {
    userData: Hex$1;
    poolType: string;
    poolId: Address$1;
    removeLiquidityKind: RemoveLiquidityKind.Proportional;
    bptIn: TokenAmount;
    amountsOut: TokenAmount[];
    protocolVersion: 3;
    chainId: number;
    slippage: Slippage;
    wethIsEth?: boolean;
};

declare enum RemoveLiquidityKind {
    Unbalanced = "Unbalanced",// exact out
    SingleTokenExactOut = "SingleTokenExactOut",// exact out (single token out)
    SingleTokenExactIn = "SingleTokenExactIn",// exact in (single token out)
    Proportional = "Proportional",// exact in (all tokens out)
    Recovery = "Recovery"
}
type RemoveLiquidityBaseInput = {
    chainId: number;
    rpcUrl: string;
    sender?: Address;
    userData?: Hex$1;
};
type RemoveLiquidityUnbalancedInput = RemoveLiquidityBaseInput & {
    amountsOut: InputAmount[];
    kind: RemoveLiquidityKind.Unbalanced;
};
type RemoveLiquiditySingleTokenExactOutInput = RemoveLiquidityBaseInput & {
    amountOut: InputAmount;
    kind: RemoveLiquidityKind.SingleTokenExactOut;
};
type RemoveLiquiditySingleTokenExactInInput = RemoveLiquidityBaseInput & {
    bptIn: InputAmount;
    tokenOut: Address;
    kind: RemoveLiquidityKind.SingleTokenExactIn;
};
type RemoveLiquidityProportionalInput = RemoveLiquidityBaseInput & {
    bptIn: InputAmount;
    kind: RemoveLiquidityKind.Proportional;
};
type RemoveLiquidityRecoveryInput = RemoveLiquidityBaseInput & {
    bptIn: InputAmount;
    kind: RemoveLiquidityKind.Recovery;
};
type RemoveLiquidityInput = RemoveLiquidityUnbalancedInput | RemoveLiquiditySingleTokenExactOutInput | RemoveLiquiditySingleTokenExactInInput | RemoveLiquidityProportionalInput | RemoveLiquidityRecoveryInput;
type RemoveLiquidityBaseQueryOutput = {
    poolType: string;
    poolId: Address;
    removeLiquidityKind: RemoveLiquidityKind;
    bptIn: TokenAmount;
    amountsOut: TokenAmount[];
    tokenOutIndex?: number;
    protocolVersion: 1 | 2 | 3;
    chainId: number;
    to: Address;
};
type RemoveLiquidityQueryOutput = RemoveLiquidityBaseQueryOutput | RemoveLiquidityV2QueryOutput;
type RemoveLiquidityBaseBuildCallInput = {
    slippage: Slippage;
    wethIsEth?: boolean;
} & RemoveLiquidityBaseQueryOutput;
type RemoveLiquidityBuildCallInput = RemoveLiquidityBaseBuildCallInput | RemoveLiquidityV2BuildCallInput | RemoveLiquidityBoostedBuildCallInput;
type RemoveLiquidityBuildCallOutput = {
    callData: Address;
    to: Address;
    value: bigint;
    maxBptIn: TokenAmount;
    minAmountsOut: TokenAmount[];
    args?: ReturnType<typeof parseRemoveLiquidityArgs>['args'];
};
interface RemoveLiquidityBase {
    query(input: RemoveLiquidityInput, poolState: PoolState): Promise<RemoveLiquidityQueryOutput>;
    buildCall(input: RemoveLiquidityBuildCallInput): RemoveLiquidityBuildCallOutput;
    buildCallWithPermit(input: RemoveLiquidityBuildCallInput, permit: Permit): RemoveLiquidityBuildCallOutput;
}
type RemoveLiquidityConfig = {
    customRemoveLiquidityTypes: Record<string, RemoveLiquidityBase>;
};
type ExitPoolRequest = {
    assets: Address[];
    minAmountsOut: bigint[];
    userData: Address;
    toInternalBalance: boolean;
};

declare class InputValidatorBase {
    validateInitPool(initPoolInput: InitPoolInput, poolState: PoolState): void;
    validateCreatePool(input: CreatePoolInput): void;
    validateAddLiquidity(addLiquidityInput: AddLiquidityInput, poolState: PoolState): void;
    validateRemoveLiquidity(input: RemoveLiquidityInput, poolState: PoolState): void;
    validateRemoveLiquidityRecovery(input: RemoveLiquidityRecoveryInput, poolState: PoolState): void;
    validateWethIsEth(initPoolInput: InitPoolInputV3): void;
}

type AddLiquidityBoostedProportionalInput = {
    chainId: number;
    rpcUrl: string;
    referenceAmount: InputAmount;
    kind: AddLiquidityKind.Proportional;
    sender?: Address$1;
    userData?: Hex$1;
};
type AddLiquidityBoostedUnbalancedInput = {
    chainId: number;
    rpcUrl: string;
    amountsIn: InputAmount[];
    kind: AddLiquidityKind.Unbalanced;
    sender?: Address$1;
    userData?: Hex$1;
};
type AddLiquidityBoostedInput = AddLiquidityBoostedUnbalancedInput | AddLiquidityBoostedProportionalInput;
type AddLiquidityBoostedQueryOutput = {
    poolId: Hex$1;
    poolType: string;
    addLiquidityKind: AddLiquidityKind;
    bptOut: TokenAmount;
    amountsIn: TokenAmount[];
    chainId: number;
    protocolVersion: 3;
    userData: Hex$1;
    to: Address$1;
};
type AddLiquidityBoostedBuildCallInput = {
    slippage: Slippage;
    wethIsEth?: boolean;
} & AddLiquidityBoostedQueryOutput;

declare class InputValidator {
    validators: Record<string, InputValidatorBase>;
    constructor();
    getValidator(poolType: string): InputValidatorBase;
    validateInitPool(initPoolInput: InitPoolInput, poolState: PoolState): void;
    validateAddLiquidity(addLiquidityInput: AddLiquidityInput, poolState: PoolState): void;
    validateRemoveLiquidity(removeLiquidityInput: RemoveLiquidityInput, poolState: PoolState): void;
    validateRemoveLiquidityRecovery(removeLiquidityRecoveryInput: RemoveLiquidityRecoveryInput, poolState: PoolState): void;
    validateCreatePool(input: CreatePoolInput): void;
    validateAddLiquidityBoosted(addLiquidityInput: AddLiquidityBoostedInput, poolState: PoolStateWithUnderlyings): void;
    private validateChain;
    static validateBuildCallWithPermit2(input: {
        protocolVersion: number;
    }): void;
}

declare class InitPool {
    config?: InitPoolConfig | undefined;
    inputValidator: InputValidator;
    constructor(config?: InitPoolConfig | undefined);
    buildCall(input: InitPoolInput, poolState: PoolState): InitPoolBuildOutput;
}

declare function parseInitializeArgs({ exactAmountsIn, minBptAmountOut, wethIsEth, poolAddress, sortedTokens, }: {
    exactAmountsIn: bigint[];
    minBptAmountOut: bigint;
    wethIsEth?: boolean;
    chainId: number;
    poolAddress: Address$1;
    sortedTokens: Token$1[];
}): {
    args: InitializeArgs;
};

/**
 * For a given pool and reference token amount, calculate all token amounts proportional to their balances within the pool.
 *
 * @param pool
 * @param referenceAmount
 * @returns Proportional amounts rounded down based on smart contract implementation for calculateProportionalAmountsOut.
 */
declare function calculateProportionalAmounts(pool: {
    address: Address$1;
    totalShares: HumanAmount;
    tokens: {
        address: Address$1;
        balance: HumanAmount;
        decimals: number;
    }[];
}, referenceAmount: InputAmount): {
    tokenAmounts: InputAmount[];
    bptAmount: InputAmount;
};
/**
 * Calculate the BPT amount for a given reference amount in a pool (rounded down).
 *
 * Note: this is used in the AddLiquidityProportional query scenario, where a non-bpt refenceAmount is provided and
 * the SDK needs to infer the corresponding bptOut. Rounding down favors leaving some dust behind instead of returning an amount
 * slightly higher than the referenceAmount provided, in order to prevent a revert in the add liquidity proportional transaction.
 * @param input
 * @param poolState
 * @returns
 */
declare const getBptAmountFromReferenceAmount: (input: AddLiquidityProportionalInput, poolState: PoolState) => Promise<InputAmount>;
/**
 * Calculate the BPT amount for a given reference amount in a boosted pool (rounded down).
 *
 * @param input
 * @param poolState
 * @returns
 */
declare const getBptAmountFromReferenceAmountBoosted: (input: AddLiquidityBoostedProportionalInput, poolStateWithUnderlyings: PoolStateWithUnderlyings) => Promise<InputAmount>;

declare function replaceWrapped(tokens: Token$1[], chainId: number): Token$1[];

declare function validateNestedPoolState(nestedPoolState: NestedPoolState): boolean;

declare enum AddLiquidityKind {
    Unbalanced = "Unbalanced",
    SingleToken = "SingleToken",
    Proportional = "Proportional"
}
type AddLiquidityBaseInput = {
    chainId: number;
    rpcUrl: string;
    sender?: Address;
    userData?: Hex;
};
type AddLiquidityUnbalancedInput = AddLiquidityBaseInput & {
    amountsIn: InputAmount[];
    kind: AddLiquidityKind.Unbalanced;
};
type AddLiquiditySingleTokenInput = AddLiquidityBaseInput & {
    bptOut: InputAmount;
    tokenIn: Address;
    kind: AddLiquidityKind.SingleToken;
};
type AddLiquidityProportionalInput = AddLiquidityBaseInput & {
    referenceAmount: InputAmount;
    kind: AddLiquidityKind.Proportional;
};
type AddLiquidityInput = AddLiquidityUnbalancedInput | AddLiquiditySingleTokenInput | AddLiquidityProportionalInput;
type AddLiquidityBaseQueryOutput = {
    poolType: string;
    poolId: Hex;
    addLiquidityKind: AddLiquidityKind;
    bptOut: TokenAmount;
    amountsIn: TokenAmount[];
    chainId: number;
    tokenInIndex?: number;
    protocolVersion: 1 | 2 | 3;
    to: Address;
};
type AddLiquidityQueryOutput = AddLiquidityBaseQueryOutput | AddLiquidityV2QueryOutput;
type AddLiquidityBaseBuildCallInput = {
    slippage: Slippage;
    wethIsEth?: boolean;
} & AddLiquidityBaseQueryOutput;
type AddLiquidityBuildCallInput = AddLiquidityBaseBuildCallInput | AddLiquidityV2BuildCallInput;
interface AddLiquidityBase {
    query(input: AddLiquidityInput, poolState: PoolState): Promise<AddLiquidityQueryOutput>;
    buildCall(input: AddLiquidityBuildCallInput): AddLiquidityBuildCallOutput;
    buildCallWithPermit2(input: AddLiquidityBuildCallInput, permit2: Permit2): AddLiquidityBuildCallOutput;
}
type AddLiquidityBuildCallOutput = {
    callData: Hex;
    to: Address;
    args: ReturnType<typeof parseAddLiquidityArgs>['args'];
    value: bigint;
    minBptOut: TokenAmount;
    maxAmountsIn: TokenAmount[];
};
type AddLiquidityBoostedV3BuildCallOutput = {
    callData: Hex;
    to: Address;
    args: readonly [Hex, bigint[], bigint, boolean, Hex];
    value: bigint;
    minBptOut: TokenAmount;
    maxAmountsIn: TokenAmount[];
};
type AddLiquidityConfig = {
    customAddLiquidityTypes: Record<string, AddLiquidityBase>;
};
type JoinPoolRequest = {
    assets: Address[];
    maxAmountsIn: readonly bigint[];
    userData: Hex;
    fromInternalBalance: boolean;
};

declare class AddLiquidity implements AddLiquidityBase {
    config?: AddLiquidityConfig | undefined;
    constructor(config?: AddLiquidityConfig | undefined);
    private readonly inputValidator;
    query(input: AddLiquidityInput, poolState: PoolState): Promise<AddLiquidityQueryOutput>;
    buildCall(input: AddLiquidityBuildCallInput | (AddLiquidityBuildCallInput & {
        userData: Hex$1;
    })): AddLiquidityBuildCallOutput;
    buildCallWithPermit2(input: AddLiquidityBuildCallInput | (AddLiquidityBuildCallInput & {
        userData: Hex$1;
    }), permit2: Permit2): AddLiquidityBuildCallOutput;
}

declare class AddLiquidityBoostedV3 {
    private readonly inputValidator;
    query(input: AddLiquidityBoostedInput, poolState: PoolStateWithUnderlyings): Promise<AddLiquidityBoostedQueryOutput>;
    buildCall(input: AddLiquidityBoostedBuildCallInput): AddLiquidityBoostedV3BuildCallOutput;
    buildCallWithPermit2(input: AddLiquidityBoostedBuildCallInput, permit2: Permit2): AddLiquidityBoostedV3BuildCallOutput;
}

declare class AddLiquidityBufferV3 {
    query(input: AddLiquidityBufferInput, bufferState: BufferState): Promise<AddLiquidityBufferQueryOutput>;
    buildCall(input: AddLiquidityBufferBuildCallInput): AddLiquidityBufferBuildCallOutput;
    buildCallWithPermit2(input: AddLiquidityBufferBuildCallInput, permit2: Permit2): AddLiquidityBufferBuildCallOutput;
}

type AddLiquidityNestedInputV2 = {
    amountsIn: InputAmount[];
    chainId: ChainId;
    rpcUrl: string;
    fromInternalBalance?: boolean;
};
type AddLiquidityNestedCallAttributes = {
    chainId: ChainId;
    wethIsEth?: boolean;
    sortedTokens: Token$1[];
    poolId: Hex$1;
    poolAddress: Address$1;
    poolType: PoolType;
    kind: PoolKind;
    sender: Address$1;
    recipient: Address$1;
    maxAmountsIn: {
        amount: bigint;
        isRef: boolean;
    }[];
    minBptOut: bigint;
    fromInternalBalance: boolean;
    outputReference: bigint;
};
type AddLiquidityNestedQueryOutputV2 = {
    to: Address$1;
    callsAttributes: AddLiquidityNestedCallAttributes[];
    amountsIn: TokenAmount[];
    bptOut: TokenAmount;
    protocolVersion: 2;
};
type AddLiquidityNestedCallInputV2 = AddLiquidityNestedQueryOutputV2 & {
    slippage: Slippage;
    accountAddress: Address$1;
    relayerApprovalSignature?: Hex$1;
    wethIsEth?: boolean;
};

type AddLiquidityNestedInputV3 = {
    amountsIn: InputAmount[];
    chainId: ChainId;
    rpcUrl: string;
    sender?: Address$1;
    userData?: Hex$1;
};
type AddLiquidityNestedQueryOutputV3 = {
    to: Address$1;
    amountsIn: TokenAmount[];
    bptOut: TokenAmount;
    protocolVersion: 3;
    parentPool: Address$1;
    userData: Hex$1;
    chainId: ChainId;
};
type AddLiquidityNestedCallInputV3 = AddLiquidityNestedQueryOutputV3 & {
    slippage: Slippage;
    wethIsEth?: boolean;
};

type AddLiquidityNestedInput = AddLiquidityNestedInputV2 | AddLiquidityNestedInputV3;
type AddLiquidityNestedQueryOutput = AddLiquidityNestedQueryOutputV2 | AddLiquidityNestedQueryOutputV3;
type AddLiquidityNestedCallInput = AddLiquidityNestedCallInputV2 | AddLiquidityNestedCallInputV3;
type AddLiquidityNestedBuildCallOutput = {
    callData: Hex$1;
    to: Address$1;
    value: bigint;
    minBptOut: bigint;
};

declare class AddLiquidityNested {
    query(input: AddLiquidityNestedInput, nestedPoolState: NestedPoolState): Promise<AddLiquidityNestedQueryOutput>;
    buildCall(input: AddLiquidityNestedCallInput): AddLiquidityNestedBuildCallOutput;
    buildCallWithPermit2(input: AddLiquidityNestedCallInputV3, permit2: Permit2): AddLiquidityNestedBuildCallOutput;
    /**
     * Helper to construct AddLiquidityNestedCallInput with proper type resolving.
     * @param queryOutput
     * @param params
     * @returns AddLiquidityNestedCallInput
     */
    buildAddLiquidityInput(queryOutput: AddLiquidityNestedQueryOutput, params: {
        slippage: Slippage;
        accountAddress?: Address$1;
        relayerApprovalSignature?: Hex$1;
        wethIsEth?: boolean;
    }): AddLiquidityNestedCallInput;
}

declare class CreatePool implements CreatePoolBase {
    private readonly inputValidator;
    constructor();
    buildCall(input: CreatePoolInput): CreatePoolBuildCallOutput;
}

declare const encodeRemoveLiquidityRecovery: (bptAmountIn: any) => `0x${string}`;

declare enum ComposableStablePoolJoinKind {
    INIT = 0,
    EXACT_TOKENS_IN_FOR_BPT_OUT = 1,
    TOKEN_IN_FOR_EXACT_BPT_OUT = 2,
    ALL_TOKENS_IN_FOR_EXACT_BPT_OUT = 3
}
declare enum ComposableStablePoolExitKind {
    EXACT_BPT_IN_FOR_ONE_TOKEN_OUT = 0,
    BPT_IN_FOR_EXACT_TOKENS_OUT = 1,
    EXACT_BPT_IN_FOR_ALL_TOKENS_OUT = 2
}
declare class ComposableStableEncoder {
    /**
     * Cannot be constructed.
     */
    private constructor();
    /**
     * Encodes the User Data for initializing a WeightedPool
     * @param amounts Amounts of tokens to be added to the pool
     * @returns
     */
    static encodeInitPoolUserData(amounts: InitPoolAmountsComposableStable): `0x${string}`;
    /**
     * Encodes the User Data for adding liquidity to a ComposableStablePool
     * @param kind Kind of the Add Liquidity operation: Init, Unbalanced, SingleToken, Proportional
     * @param amounts Amounts of tokens to be added to the pool
     * @returns
     */
    static encodeAddLiquidityUserData(kind: AddLiquidityKind, amounts: AddLiquidityAmounts & {
        maxAmountsInWithoutBpt: bigint[];
    }): Address;
    /**
     * Encodes the User Data for removing liquidity to a ComposableStablePool
     * @param kind Kind of the Remove Liquidity operation: Unbalanced, SingleTokenExactIn, Proportional
     * @param amounts Amounts of tokens to be removed from the pool
     * @returns
     */
    static encodeRemoveLiquidityUserData(kind: RemoveLiquidityKind, amounts: RemoveLiquidityAmounts): Address;
    /**
     * Encodes the userData parameter for providing the initial liquidity to a ComposableStablePool
     * @param initialBalances - the amounts of tokens to send to the pool to form the initial balances
     */
    static initPool: (amountsIn: bigint[]) => Address;
    /**
     * Encodes the userData parameter for adding liquidity to a ComposableStablePool with exact token inputs
     * @param amountsIn - the amounts each of token to deposit in the pool as liquidity
     * @param minimumBPT - the minimum acceptable BPT to receive in return for deposited tokens
     */
    static addLiquidityUnbalanced: (amountsIn: bigint[], minimumBPT: bigint) => Address;
    /**
     * Encodes the userData parameter for adding liquidity to a ComposableStablePool with a single token to receive an exact amount of BPT
     * @param bptAmountOut - the amount of BPT to be minted
     * @param tokenIndex - the index of the token to be provided as liquidity. This index should consider tokens array without BPT.
     */
    static addLiquiditySingleToken: (bptAmountOut: bigint, tokenIndex: number) => Address;
    /**
     * Encodes the userData parameter for adding liquidity to a ComposableStablePool proportionally to receive an exact amount of BPT
     * @param bptAmountOut - the amount of BPT to be minted
     */
    static addLiquidityProportional: (bptAmountOut: bigint) => Address;
    /**
     * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing tokens in return for an exact amount of BPT
     * @param bptAmountIn - the amount of BPT to be burned
     * @param tokenIndex - the index of the token to be removed from the pool
     */
    static removeLiquiditySingleTokenExactIn: (bptAmountIn: bigint, tokenIndex: number) => Address;
    /**
     * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing tokens in return for an exact amount of BPT
     * @param bptAmountIn - the amount of BPT to be burned
     */
    static removeLiquidityProportional: (bptAmountIn: bigint) => Address;
    /**
     * Encodes the userData parameter for removing liquidity from a ComposableStablePool by removing exact amounts of tokens
     * @param amountsOut - the amounts of each token to be withdrawn from the pool
     * @param maxBPTAmountIn - the minimum acceptable BPT to burn in return for withdrawn tokens
     */
    static removeLiquidityUnbalanced: (amountsOut: bigint[], maxBPTAmountIn: bigint) => Address;
}

declare enum WeightedPoolJoinKind {
    INIT = 0,
    EXACT_TOKENS_IN_FOR_BPT_OUT = 1,
    TOKEN_IN_FOR_EXACT_BPT_OUT = 2,
    ALL_TOKENS_IN_FOR_EXACT_BPT_OUT = 3
}
declare enum WeightedPoolExitKind {
    EXACT_BPT_IN_FOR_ONE_TOKEN_OUT = 0,
    EXACT_BPT_IN_FOR_TOKENS_OUT = 1,
    BPT_IN_FOR_EXACT_TOKENS_OUT = 2,
    MANAGEMENT_FEE_TOKENS_OUT = 3
}
declare class WeightedEncoder {
    /**
     * Cannot be constructed.
     */
    private constructor();
    /**
     * Encodes the User Data for initializing a WeightedPool
     * @param amounts Amounts of tokens to be added to the pool
     * @returns
     */
    static encodeInitPoolUserData(amounts: InitPoolAmounts): `0x${string}`;
    /**
     * Encodes the User Data for adding liquidity to a WeightedPool
     * @param kind Kind of the Add Liquidity operation: Init, Unbalanced, SingleToken, Proportional
     * @param amounts Amounts of tokens to be added to the pool
     * @returns
     */
    static encodeAddLiquidityUserData: (kind: AddLiquidityKind, amounts: AddLiquidityAmounts) => Hex;
    /**
     * Encodes the User Data for removing liquidity from a WeightedPool
     * @param kind Kind of the Remove Liquidity operation: Unbalanced, SingleToken, Proportional
     * @param amounts Amounts of tokens to be removed from the pool
     * @returns
     */
    static encodeRemoveLiquidityUserData: (kind: RemoveLiquidityKind, amounts: RemoveLiquidityAmounts) => Hex;
    /**
     * Encodes the userData parameter for providing the initial liquidity to a WeightedPool
     * @param initialBalances - the amounts of tokens to send to the pool to form the initial balances
     */
    static initPool: (amountsIn: bigint[]) => Hex;
    /**
     * Encodes the userData parameter for adding liquidity to a WeightedPool with exact token inputs
     * @param amountsIn - the amounts each of token to deposit in the pool as liquidity
     * @param minimumBPT - the minimum acceptable BPT to receive in return for deposited tokens
     */
    static addLiquidityUnbalanced: (amountsIn: bigint[], minimumBPT: bigint) => Hex;
    /**
     * Encodes the userData parameter for adding liquidity to a WeightedPool with a single token to receive an exact amount of BPT
     * @param bptAmountOut - the amount of BPT to be minted
     * @param tokenIndex - the index of the token to be provided as liquidity
     */
    static addLiquiditySingleToken: (bptAmountOut: bigint, tokenIndex: number) => Hex;
    /**
     * Encodes the userData parameter for adding liquidity to a WeightedPool proportionally to receive an exact amount of BPT
     * @param bptAmountOut - the amount of BPT to be minted
     */
    static addLiquidityProportional: (bptAmountOut: bigint) => Hex;
    /**
     * Encodes the userData parameter for removing liquidity from a WeightedPool by removing tokens in return for an exact amount of BPT
     * @param bptAmountIn - the amount of BPT to be burned
     * @param tokenIndex - the index of the token to removed from the pool
     */
    static removeLiquiditySingleTokenExactIn: (bptAmountIn: bigint, tokenIndex: number) => Hex;
    /**
     * Encodes the userData parameter for removing liquidity from a WeightedPool by removing tokens in return for an exact amount of BPT
     * @param bptAmountIn - the amount of BPT to be burned
     */
    static removeLiquidityProportional: (bptAmountIn: bigint) => Hex;
    /**
     * Encodes the userData parameter for removing liquidity from a WeightedPool by removing exact amounts of tokens
     * @param amountsOut - the amounts of each token to be withdrawn from the pool
     * @param maxBPTAmountIn - the minimum acceptable BPT to burn in return for withdrawn tokens
     */
    static removeLiquidityUnbalanced: (amountsOut: bigint[], maxBPTAmountIn: bigint) => Hex;
}

declare class InitBufferV3 {
    query(input: InitBufferInput): Promise<InitBufferQueryOutput>;
    buildCall(input: InitBufferBuildCallInput): InitBufferBuildCallOutput;
    buildCallWithPermit2(input: InitBufferBuildCallInput, permit2: Permit2): InitBufferBuildCallOutput;
}

declare class PriceImpactAmount {
    amount: bigint;
    decimal: number;
    percentage: number;
    bps: number;
    static fromRawAmount(rawAmount: BigintIsh): PriceImpactAmount;
    static fromDecimal(decimalAmount: `${number}`): PriceImpactAmount;
    static fromPercentage(percentageAmount: `${number}`): PriceImpactAmount;
    static fromBasisPoints(bpsAmount: `${number}`): PriceImpactAmount;
    protected constructor(amount: BigintIsh);
}

type RemoveLiquidityNestedProportionalInputV2 = {
    bptAmountIn: bigint;
    chainId: ChainId;
    rpcUrl: string;
    toInternalBalance?: boolean;
};
type RemoveLiquidityNestedSingleTokenInputV2 = RemoveLiquidityNestedProportionalInputV2 & {
    tokenOut: Address$1;
};
type RemoveLiquidityNestedCallAttributesV2 = {
    chainId: ChainId;
    sortedTokens: Token$1[];
    poolId: Address$1;
    poolAddress: Address$1;
    poolType: PoolType;
    kind: PoolKind;
    sender: Address$1;
    recipient: Address$1;
    bptAmountIn: {
        amount: bigint;
        isRef: boolean;
    };
    minAmountsOut: bigint[];
    toInternalBalance: boolean;
    outputReferences: {
        key: bigint;
        index: bigint;
    }[];
    tokenOutIndex?: number;
    wethIsEth?: boolean;
};
type RemoveLiquidityNestedQueryOutputV2 = {
    protocolVersion: 2;
    callsAttributes: RemoveLiquidityNestedCallAttributesV2[];
    bptAmountIn: TokenAmount;
    amountsOut: TokenAmount[];
    isProportional: boolean;
    chainId: ChainId;
    to: Address$1;
};
type RemoveLiquidityNestedCallInputV2 = RemoveLiquidityNestedQueryOutputV2 & {
    slippage: Slippage;
    accountAddress: Address$1;
    relayerApprovalSignature?: Hex$1;
    wethIsEth?: boolean;
};

/**
 * Applies the ABA method to calculate the price impact of an operation.
 * @param initialA amount of token A at the begginig of the ABA process, i.e. A -> B amountIn
 * @param finalA amount of token A at the end of the ABA process, i.e. B -> A amountOut
 * @returns
 */
declare const priceImpactABA: (initialA: TokenAmount, finalA: TokenAmount) => PriceImpactAmount;

declare class PriceImpact {
    /**
     * Calculate price impact on add liquidity single token operations
     * @param input same input used in the corresponding add liquidity operation
     * @param poolState same pool state used in the corresponding add liquidity operation
     * @returns price impact amount
     */
    static addLiquiditySingleToken: (input: AddLiquiditySingleTokenInput, poolState: PoolState) => Promise<PriceImpactAmount>;
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
    static addLiquidityUnbalanced: (input: AddLiquidityUnbalancedInput, poolState: PoolState) => Promise<PriceImpactAmount>;
    static addLiquidityUnbalancedBoosted(input: AddLiquidityBoostedUnbalancedInput, poolState: PoolStateWithUnderlyings): Promise<PriceImpactAmount>;
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
    static addLiquidityNested: (input: AddLiquidityNestedInput, nestedPoolState: NestedPoolState) => Promise<PriceImpactAmount>;
    /**
     * Calculate price impact on remove liquidity operations
     * @param input same input used in the corresponding remove liquidity operation
     * @param poolState same pool state used in the corresponding remove liquidity operation
     * @returns price impact amount
     */
    static removeLiquidity: (input: RemoveLiquiditySingleTokenExactInInput | RemoveLiquidityUnbalancedInput, poolState: PoolState) => Promise<PriceImpactAmount>;
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
    static removeLiquidityNested: (input: RemoveLiquidityNestedSingleTokenInputV2, nestedPoolState: NestedPoolState) => Promise<PriceImpactAmount>;
}

declare class Relayer {
    static CHAINED_REFERENCE_TEMP_PREFIX: Hex;
    static CHAINED_REFERENCE_READONLY_PREFIX: Hex;
    static toChainedReference(key: bigint, isTemporary?: boolean): bigint;
    static fromChainedReference(ref: bigint): bigint;
    static encodePeekChainedReferenceValue(reference: bigint): Hex;
    static encodeSetRelayerApproval(relayerAddress: Address, approved: boolean, signature: Hex): Hex;
    static signRelayerApproval: (relayerAddress: Address, signerAddress: Address, client: PublicWalletClient) => Promise<Hex>;
    static encodeApproveVault(tokenAddress: Address, maxAmount: bigint): Hex;
}

declare class RemoveLiquidity implements RemoveLiquidityBase {
    config?: RemoveLiquidityConfig | undefined;
    private readonly inputValidator;
    constructor(config?: RemoveLiquidityConfig | undefined);
    query(input: RemoveLiquidityInput, poolState: PoolState): Promise<RemoveLiquidityQueryOutput>;
    buildCall(input: RemoveLiquidityBaseBuildCallInput | RemoveLiquidityV2BuildCallInput | (RemoveLiquidityBaseBuildCallInput & {
        userData: Hex$1;
    })): RemoveLiquidityBuildCallOutput;
    buildCallWithPermit(input: RemoveLiquidityBaseBuildCallInput | RemoveLiquidityV2BuildCallInput | (RemoveLiquidityBaseBuildCallInput & {
        userData: Hex$1;
    }), permit: Permit): RemoveLiquidityBuildCallOutput;
}

declare class RemoveLiquidityBoostedV3 implements RemoveLiquidityBase {
    private readonly inputValidator;
    query(input: RemoveLiquidityBoostedProportionalInput, poolState: PoolStateWithUnderlyings): Promise<RemoveLiquidityBoostedQueryOutput>;
    buildCall(input: RemoveLiquidityBoostedBuildCallInput): RemoveLiquidityBuildCallOutput;
    buildCallWithPermit(input: RemoveLiquidityBoostedBuildCallInput, permit: Permit): RemoveLiquidityBuildCallOutput;
}

type RemoveLiquidityNestedProportionalInputV3 = {
    bptAmountIn: bigint;
    chainId: ChainId;
    rpcUrl: string;
    sender?: Address$1;
    userData?: Hex$1;
};
type RemoveLiquidityNestedQueryOutputV3 = {
    protocolVersion: 3;
    bptAmountIn: TokenAmount;
    amountsOut: TokenAmount[];
    chainId: ChainId;
    parentPool: Address$1;
    userData: Hex$1;
    to: Address$1;
};
type RemoveLiquidityNestedCallInputV3 = RemoveLiquidityNestedQueryOutputV3 & {
    slippage: Slippage;
    wethIsEth?: boolean;
};

type RemoveLiquidityNestedInput = RemoveLiquidityNestedProportionalInputV2 | RemoveLiquidityNestedSingleTokenInputV2;
type RemoveLiquidityNestedQueryOutput = RemoveLiquidityNestedQueryOutputV2 | RemoveLiquidityNestedQueryOutputV3;
type RemoveLiquidityNestedCallInput = RemoveLiquidityNestedCallInputV2 | RemoveLiquidityNestedCallInputV3;
type RemoveLiquidityNestedBuildCallOutput = {
    callData: Hex$1;
    to: Address$1;
    minAmountsOut: TokenAmount[];
};

declare class RemoveLiquidityNested {
    query(input: RemoveLiquidityNestedInput, nestedPoolState: NestedPoolState): Promise<RemoveLiquidityNestedQueryOutput>;
    buildCall(input: RemoveLiquidityNestedCallInput): RemoveLiquidityNestedBuildCallOutput;
    buildCallWithPermit(input: RemoveLiquidityNestedCallInput, permit: Permit): RemoveLiquidityNestedBuildCallOutput;
    /**
     * Helper to construct RemoveLiquidityNestedCallInput with proper type resolving.
     * @param queryOutput
     * @param params
     * @returns RemoveLiquidityNestedCallInput
     */
    buildRemoveLiquidityInput(queryOutput: RemoveLiquidityNestedQueryOutput, params: {
        slippage: Slippage;
        accountAddress?: Address$1;
        relayerApprovalSignature?: Hex$1;
        wethIsEth?: boolean;
    }): RemoveLiquidityNestedCallInput;
}

declare class RemoveLiquidityNestedV2 {
    query(input: RemoveLiquidityNestedProportionalInputV2 | RemoveLiquidityNestedSingleTokenInputV2, nestedPoolState: NestedPoolState): Promise<RemoveLiquidityNestedQueryOutputV2>;
    buildCall(input: RemoveLiquidityNestedCallInputV2): {
        callData: Hex;
        to: Address;
        minAmountsOut: TokenAmount[];
    };
}

declare class RemoveLiquidityNestedV3 {
    query(input: RemoveLiquidityNestedProportionalInputV3, nestedPoolState: NestedPoolState): Promise<RemoveLiquidityNestedQueryOutputV3>;
    buildCall(input: RemoveLiquidityNestedCallInputV3): RemoveLiquidityNestedBuildCallOutput;
    private doQueryRemoveLiquidityProportionalNestedPool;
}

type SwapQueryInput = {
    tokenIn: Token$1;
    tokenOut: Token$1;
    kind: SwapKind;
    swapAmount: TokenAmount;
};
interface AuraBalSwapQueryInput {
    kind: AuraBalSwapKind;
    swapToken: Token$1;
    inputAmount: TokenAmount;
}
type AuraBalSwapQueryOutput = {
    inputAmount: TokenAmount;
    expectedAmountOut: TokenAmount;
    kind: AuraBalSwapKind;
};
declare enum AuraBalSwapKind {
    FromAuraBal = 0,
    ToAuraBal = 1
}

type AuraBalSwapBuildCallInput = {
    slippage: Slippage;
    wethIsEth: boolean;
    queryOutput: AuraBalSwapQueryOutput;
    user: Address$1;
    relayerApprovalSignature?: Hex;
};
type AuraBalSwapBuildOutput = {
    to: Address$1;
    callData: Hex;
    value: bigint;
    minAmountOut: TokenAmount;
};
declare class AuraBalSwap {
    client: PublicClient;
    constructor(rpcUrl: string);
    isAuraBalSwap(input: SwapQueryInput): boolean;
    query(input: SwapQueryInput): Promise<AuraBalSwapQueryOutput>;
    /**
     * Returns the transaction data to be sent to the relayer contract
     *
     * @param input
     * @returns
     */
    buildCall(input: AuraBalSwapBuildCallInput): AuraBalSwapBuildOutput;
}

declare function isAuraBalSwap(input: SwapQueryInput): boolean;

type PoolGetPool = {
    id: Hex;
    protocolVersion: 1 | 2 | 3;
    address: Address;
    type: string;
    poolTokens: Token[];
};
type UnderlyingToken = {
    address: Address;
    decimals: number;
};
type Token = {
    index: number;
    address: Address;
    decimals: number;
    symbol: string;
    name: string;
    underlyingToken: UnderlyingToken | null;
    nestedPool: {
        id: Hex;
        address: Address;
        type: string;
        tokens: Token[];
    } | null;
};
declare class NestedPools {
    private readonly balancerApiClient;
    readonly nestedPoolStateQuery = "#graphql\n  query GetPool($id: String!, $chain: GqlChain!) {\n    poolGetPool(id: $id, chain: $chain) {\n      id\n      protocolVersion\n      address\n      type\n      poolTokens {\n        index\n        address\n        decimals\n        symbol\n        name\n        nestedPool {\n          id\n          address\n          type\n          tokens {\n            index\n            address\n            decimals\n            underlyingToken {\n              address\n              decimals\n            }\n          }\n        }\n        underlyingToken {\n          address\n          decimals\n        }\n      }\n    }\n  }\n";
    constructor(balancerApiClient: BalancerApiClient);
    fetchNestedPoolState: (id: string) => Promise<NestedPoolState>;
    mapPoolToNestedPoolState: (pool: PoolGetPool) => NestedPoolState;
}
declare function mapPoolToNestedPoolStateV3(pool: PoolGetPool): NestedPoolState;
declare function mapPoolToNestedPoolStateV2(pool: PoolGetPool): NestedPoolState;

declare class Pools$1 {
    private readonly balancerApiClient;
    readonly poolStateQuery = "#graphql\n    query poolGetPool($id: String!, $chain: GqlChain!) {\n      poolGetPool(id: $id, chain:$chain) {\n        id\n        address\n        type\n        protocolVersion\n        poolTokens {\n          index\n          address\n          decimals\n          symbol\n          name\n        }\n      }\n    }";
    readonly poolStateWithRawTokensQuery = "#graphql\n    query GetPool($id: String!, $chain: GqlChain!) {\n      poolGetPool(id:$id, chain:$chain) {\n        id\n        address\n        type\n        protocolVersion\n        poolTokens {\n          index\n          address\n          decimals\n          balance\n          symbol\n          name\n        }\n        dynamicData {\n          totalShares\n          volume24h\n          fees24h\n          aprItems {\n            apr\n            id\n          }\n        }\n      }\n    }";
    constructor(balancerApiClient: BalancerApiClient);
    fetchPoolState(id: string): Promise<PoolState>;
    fetchPoolStateWithBalances(id: string): Promise<PoolStateWithBalancesAndDynamicData>;
}

type SorInput = {
    chainId: ChainId;
    tokenIn: Address$1;
    tokenOut: Address$1;
    swapKind: SwapKind;
    swapAmount: TokenAmount;
    useProtocolVersion?: 2 | 3;
};
type SorSwapResult = {
    paths: Path[];
    routes: SorRoute[];
    priceImpact: {
        error: string | null;
        priceImpact: string;
    };
    /**
     * Total swap fee in percentage
     */
    totalSwapFee: number;
};
type SorHop = {
    poolId: string;
    tokenIn: string;
    tokenInAmount: string;
    tokenOut: string;
    tokenOutAmount: string;
    pool: {
        symbol: string;
    };
};
type SorRoute = {
    share: string;
    tokenInAmount: string;
    tokenOut: string;
    tokenOutAmount: string;
    hops: SorHop[];
};
declare class SorSwapPaths {
    private readonly balancerApiClient;
    readonly sorSwapPathQuery = "#graphql\n  query SorSwapPaths($chain: GqlChain!, $swapType: GqlSorSwapType!, $swapAmount: AmountHumanReadable!, $tokenIn: String!, $tokenOut: String!) {\n    sorGetSwapPaths(\n      swapAmount: $swapAmount\n      chain: $chain\n      swapType: $swapType\n      tokenIn: $tokenIn\n      tokenOut: $tokenOut\n    ) {\n      tokenInAmount\n      tokenOutAmount\n      returnAmount\n      priceImpact {\n        error\n        priceImpact\n      }\n      totalSwapFee\n      swapAmount\n      paths {\n        inputAmountRaw\n        outputAmountRaw\n        pools\n        protocolVersion\n        tokens {\n          address\n          decimals\n        }\n      }\n      routes {\n        share\n        tokenInAmount\n        tokenOut\n        tokenOutAmount\n        hops {\n          poolId\n          tokenIn\n          tokenInAmount\n          tokenOut\n          tokenOutAmount\n          pool {\n            symbol\n          }\n        }\n      }\n    }\n  }\n";
    readonly sorSwapPathQueryWithVersion = "#graphql\n  query SorSwapPaths($chain: GqlChain!, $swapType: GqlSorSwapType!, $swapAmount: AmountHumanReadable!, $tokenIn: String!, $tokenOut: String!, $useProtocolVersion: Int!) {\n    sorGetSwapPaths(\n      swapAmount: $swapAmount\n      chain: $chain\n      swapType: $swapType\n      tokenIn: $tokenIn\n      tokenOut: $tokenOut\n      useProtocolVersion: $useProtocolVersion\n    ) {\n      tokenInAmount\n      tokenOutAmount\n      returnAmount\n      priceImpact {\n        error\n        priceImpact\n      }\n      totalSwapFee\n      swapAmount\n      paths {\n        inputAmountRaw\n        outputAmountRaw\n        pools\n        protocolVersion\n        tokens {\n          address\n          decimals\n        }\n      }\n      routes {\n        share\n        tokenInAmount\n        tokenOut\n        tokenOutAmount\n        hops {\n          poolId\n          tokenIn\n          tokenInAmount\n          tokenOut\n          tokenOutAmount\n          pool {\n            symbol\n          }\n        }\n      }\n    }\n  }\n";
    constructor(balancerApiClient: BalancerApiClient);
    fetchSorSwapPaths(sorInput: SorInput): Promise<SorSwapResult>;
    private mapGqlChain;
}

declare class Buffers {
    private readonly balancerApiClient;
    readonly bufferStateQuery = "\n      query GetBufferState($wrappedTokenAddress: String!, $chain: GqlChain!) {\n        tokenGetTokens(\n        chains: [$chain],\n          where: {tokensIn: [$wrappedTokenAddress]}\n        ) {\n          address\n          decimals\n          isErc4626\n          underlyingTokenAddress\n        }\n      }\n    ";
    constructor(balancerApiClient: BalancerApiClient);
    fetchBufferState(wrappedTokenAddress: string): Promise<BufferState>;
}

declare class BalancerApi {
    balancerApiClient: BalancerApiClient;
    pools: Pools$1;
    nestedPools: NestedPools;
    sorSwapPaths: SorSwapPaths;
    buffers: Buffers;
    constructor(balancerApiUrl: string, chainId: ChainId);
}

declare class InitPoolDataProvider {
    private readonly chainId;
    private readonly rpcUrl;
    private readonly client;
    private readonly simplePoolAbi;
    constructor(chainId: number, rpcUrl: string);
    getInitPoolData(poolAddress: Address$1, poolType: string, protocolVersion: 2 | 3): Promise<PoolState>;
    private getInitPoolDataV2;
    private getInitPoolDataV3;
}

declare class Pools {
    rpcUrl: string;
    chainId: number;
    client: PublicClient;
    constructor(rpcUrl: string, chainId: number);
    fetchPoolState(id: Address$1, poolType: string): Promise<PoolState>;
}
declare class OnChainProvider {
    pools: Pools;
    constructor(rpcUrl: string, chainId: number);
}

export { ADMIN_OF_AUTHORIZER, API_CHAIN_NAMES, API_ENDPOINT, AUTHORIZER, AddLiquidity, type AddLiquidityAmounts, type AddLiquidityBase, type AddLiquidityBaseBuildCallInput, type AddLiquidityBaseInput, type AddLiquidityBaseQueryOutput, type AddLiquidityBoostedBuildCallInput, type AddLiquidityBoostedInput, type AddLiquidityBoostedProportionalInput, type AddLiquidityBoostedQueryOutput, type AddLiquidityBoostedUnbalancedInput, AddLiquidityBoostedV3, type AddLiquidityBoostedV3BuildCallOutput, type AddLiquidityBufferBuildCallInput, type AddLiquidityBufferBuildCallOutput, type AddLiquidityBufferInput, type AddLiquidityBufferQueryOutput, AddLiquidityBufferV3, type AddLiquidityBuildCallInput, type AddLiquidityBuildCallOutput, type AddLiquidityConfig, type AddLiquidityInput, AddLiquidityKind, AddLiquidityNested, type AddLiquidityNestedBuildCallOutput, type AddLiquidityNestedCallAttributes, type AddLiquidityNestedCallInput, type AddLiquidityNestedCallInputV2, type AddLiquidityNestedCallInputV3, type AddLiquidityNestedInput, type AddLiquidityNestedInputV2, type AddLiquidityNestedInputV3, type AddLiquidityNestedQueryOutput, type AddLiquidityNestedQueryOutputV2, type AddLiquidityNestedQueryOutputV3, type AddLiquidityProportionalInput, type AddLiquidityQueryOutput, type AddLiquiditySingleTokenInput, type AddLiquidityUnbalancedInput, type Address, AllowanceTransfer, AuraBalSwap, AuraBalSwapKind, type AuraBalSwapQueryInput, type AuraBalSwapQueryOutput, BALANCER_BATCH_ROUTER, BALANCER_BUFFER_ROUTER, BALANCER_COMPOSITE_LIQUIDITY_ROUTER, BALANCER_QUERIES, BALANCER_RELAYER, BALANCER_ROUTER, BalancerApi, type BatchSwapStep, type BigintIsh, type BufferState, CHAINS, COMPOSABLE_STABLE_POOL_FACTORY, ChainId, ComposableStableEncoder, ComposableStablePoolExitKind, ComposableStablePoolJoinKind, CreatePool, type CreatePoolBase, type CreatePoolBaseInput, type CreatePoolBuildCallOutput, type CreatePoolInput, type CreatePoolV2BaseInput, type CreatePoolV2ComposableStableArgs, type CreatePoolV2ComposableStableInput, type CreatePoolV2WeightedArgs, type CreatePoolV2WeightedInput, type CreatePoolV3BaseInput, type CreatePoolV3StableInput, type CreatePoolV3WeightedInput, DECIMAL_SCALES, DEFAULT_FUND_MANAGMENT, DEFAULT_USERDATA, EMPTY_SENDER, ETH, type ExactInQueryOutput, type ExactOutQueryOutput, type ExitPoolRequest, FOUR_WAD, type SorInput as GetQuoteInput, HUNDRED_WAD, type Hex, type HumanAmount, type InitBufferBuildCallInput, type InitBufferBuildCallOutput, type InitBufferInput, type InitBufferQueryOutput, InitBufferV3, InitPool, type InitPoolAmounts, type InitPoolAmountsComposableStable, type InitPoolBase, type InitPoolBuildOutput, type InitPoolConfig, InitPoolDataProvider, type InitPoolInput, type InitPoolInputV2, type InitPoolInputV3, type InitializeArgs, type InputAmount, type InputToken, InstantExpiration, type JoinPoolRequest, MAX_UINT112, MAX_UINT256, MathSol, MaxAllowanceExpiration, MaxAllowanceTransferAmount, MaxOrderedNonce, MaxSigDeadline, MaxSignatureTransferAmount, MaxUint160, MaxUint256, MaxUint48, MaxUnorderedNonce, type MinimalToken, NATIVE_ASSETS, type NestedPoolState, type NestedPoolStateV2, type NestedPoolStateV3, type NestedPoolV2, type NestedPoolV3, OnChainProvider, PERMIT2, PREMINTED_STABLE_BPT, type Path, PathWithAmount, type Permit, type Permit2, type Permit2Batch, Permit2Helper, type PermitBatchData, type PermitDetails, PermitHelper, type PermitSingle, type PermitSingleData, type PoolGetPool, PoolKind, type PoolRoleAccounts, type PoolState, type PoolStateWithBalances, type PoolStateWithBalancesAndDynamicData, type PoolStateWithUnderlyingBalances, type PoolStateWithUnderlyings, type PoolTokenWithBalance, type PoolTokenWithUnderlying, type PoolTokenWithUnderlyingBalance, PoolType, Pools, PriceImpact, PriceImpactAmount, type PublicWalletClient, type QueryOutputBase, RAY, Relayer, RemoveLiquidity, type RemoveLiquidityAmounts, type RemoveLiquidityBase, type RemoveLiquidityBaseBuildCallInput, type RemoveLiquidityBaseInput, type RemoveLiquidityBaseQueryOutput, type RemoveLiquidityBoostedBuildCallInput, type RemoveLiquidityBoostedProportionalInput, type RemoveLiquidityBoostedQueryOutput, RemoveLiquidityBoostedV3, type RemoveLiquidityBuildCallInput, type RemoveLiquidityBuildCallOutput, type RemoveLiquidityConfig, type RemoveLiquidityInput, RemoveLiquidityKind, RemoveLiquidityNested, type RemoveLiquidityNestedBuildCallOutput, type RemoveLiquidityNestedCallAttributesV2, type RemoveLiquidityNestedCallInput, type RemoveLiquidityNestedCallInputV2, type RemoveLiquidityNestedCallInputV3, type RemoveLiquidityNestedInput, type RemoveLiquidityNestedProportionalInputV2, type RemoveLiquidityNestedProportionalInputV3, type RemoveLiquidityNestedQueryOutput, type RemoveLiquidityNestedQueryOutputV2, type RemoveLiquidityNestedQueryOutputV3, type RemoveLiquidityNestedSingleTokenInputV2, RemoveLiquidityNestedV2, RemoveLiquidityNestedV3, type RemoveLiquidityProportionalInput, type RemoveLiquidityQueryOutput, type RemoveLiquidityRecoveryInput, type RemoveLiquiditySingleTokenExactInInput, type RemoveLiquiditySingleTokenExactOutInput, type RemoveLiquidityUnbalancedInput, SECONDS_PER_YEAR, STABLE_POOL_FACTORY_BALANCER_V3, type SingleSwap, Slippage, type SorHop, type SorRoute, type SorSwapResult, Swap, type SwapBuildCallInput, type SwapBuildCallInputBase, type SwapBuildOutputExactIn, type SwapBuildOutputExactOut, type SwapInput, SwapKind, type SwapQueryInput, TEST_API_ENDPOINT, TWO_WAD, Token$1 as Token, TokenAmount, type TokenApi, type TokenConfig, TokenType, VAULT, VAULT_ADMIN, VAULT_V3, WAD, WEIGHTED_POOL_FACTORY_BALANCER_V2, WEIGHTED_POOL_FACTORY_BALANCER_V3, WeightedEncoder, WeightedPoolExitKind, WeightedPoolJoinKind, ZERO_ADDRESS, abs, addLiquidityProportionalNotSupportedOnPoolTypeError, addLiquidityProportionalOnlyError, addLiquidityProportionalUnavailableError, addLiquiditySingleTokenShouldHaveTokenInIndexError, authorizerAbi, balancerBatchRouterAbi, balancerBufferRouterAbi, balancerCompositeLiquidityRouterAbi, balancerQueriesAbi, balancerRelayerAbi, balancerRouterAbi, batchRelayerLibraryAbi, buildCallWithPermit2ProtocolVersionError, calculateProportionalAmounts, calculateProportionalAmountsCowAmm, checkInputs, composableStableFactoryV6Abi_V2, doAddLiquidityQuery, encodeRemoveLiquidityRecovery, erc20Abi, getAmounts, getBoostedPoolStateWithBalancesV3, getBptAmountFromReferenceAmount, getBptAmountFromReferenceAmountBoosted, getInputAmount, getOutputAmount, getPoolAddress, getPoolStateWithBalancesCowAmm, getPoolStateWithBalancesV2, getPoolStateWithBalancesV3, getSortedTokens, getValue, insertIndex, isAuraBalSwap, isBatchSwap, isSameAddress, mapPoolToNestedPoolStateV2, mapPoolToNestedPoolStateV3, mapPoolType, max, min, parseAddLiquidityArgs, parseInitializeArgs, permit2Abi, poolHasActualSupply, poolHasPercentFee, poolHasVirtualSupply, poolIsLinearPool, priceImpactABA, removeIndex, removeLiquidityProportionalOnlyError, removeLiquiditySingleTokenExactInShouldHaveTokenOutIndexError, removeLiquidityUnbalancedNotSupportedOnV3, replaceWrapped, sortByAddress, stablePoolAbi_V3, stablePoolFactoryAbi_V3, validateNestedPoolState, validatePaths, vaultAdminAbi_V3, vaultExtensionAbi_V3, vaultV2Abi, vaultV3Abi, weightedPoolAbi_V3, weightedPoolFactoryAbi_V3, weightedPoolFactoryV4Abi_V2, weightedPoolV4Abi_V2 };
