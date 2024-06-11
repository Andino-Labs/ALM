import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "ClaimFees" event.
 */
export type ClaimFeesEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
}>;

/**
 * Creates an event object for the ClaimFees event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { claimFeesEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  claimFeesEvent({
 *  from: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function claimFeesEvent(filters: ClaimFeesEventFilters = {}) {
  return prepareEvent({
    signature: "event ClaimFees(address indexed from, uint256 claimed0, uint256 claimed1)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ClaimRewards" event.
 */
export type ClaimRewardsEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
}>;

/**
 * Creates an event object for the ClaimRewards event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { claimRewardsEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  claimRewardsEvent({
 *  from: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function claimRewardsEvent(filters: ClaimRewardsEventFilters = {}) {
  return prepareEvent({
    signature: "event ClaimRewards(address indexed from, uint256 amount)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Deposit" event.
 */
export type DepositEventFilters = Partial<{
  user: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"user","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
liquidityToStake: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint128","name":"liquidityToStake","type":"uint128"}>
}>;

/**
 * Creates an event object for the Deposit event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { depositEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  depositEvent({
 *  user: ...,
 *  tokenId: ...,
 *  liquidityToStake: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function depositEvent(filters: DepositEventFilters = {}) {
  return prepareEvent({
    signature: "event Deposit(address indexed user, uint256 indexed tokenId, uint128 indexed liquidityToStake)",
    filters,
  });
};
  

/**
 * Represents the filters for the "NotifyReward" event.
 */
export type NotifyRewardEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
}>;

/**
 * Creates an event object for the NotifyReward event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { notifyRewardEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  notifyRewardEvent({
 *  from: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function notifyRewardEvent(filters: NotifyRewardEventFilters = {}) {
  return prepareEvent({
    signature: "event NotifyReward(address indexed from, uint256 amount)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Withdraw" event.
 */
export type WithdrawEventFilters = Partial<{
  user: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"user","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
liquidityToStake: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint128","name":"liquidityToStake","type":"uint128"}>
}>;

/**
 * Creates an event object for the Withdraw event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { withdrawEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  withdrawEvent({
 *  user: ...,
 *  tokenId: ...,
 *  liquidityToStake: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function withdrawEvent(filters: WithdrawEventFilters = {}) {
  return prepareEvent({
    signature: "event Withdraw(address indexed user, uint256 indexed tokenId, uint128 indexed liquidityToStake)",
    filters,
  });
};
  

/**
* Contract read functions
*/

/**
 * Represents the parameters for the "earned" function.
 */
export type EarnedParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "earned" function on the contract.
 * @param options - The options for the earned function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { earned } from "TODO";
 * 
 * const result = await earned({
 *  account: ...,
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function earned(
  options: BaseTransactionOptions<EarnedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3e491d47",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account, options.tokenId]
  });
};




/**
 * Calls the "fees0" function on the contract.
 * @param options - The options for the fees0 function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { fees0 } from "TODO";
 * 
 * const result = await fees0();
 * 
 * ```
 */
export async function fees0(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x93f1c442",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "fees1" function on the contract.
 * @param options - The options for the fees1 function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { fees1 } from "TODO";
 * 
 * const result = await fees1();
 * 
 * ```
 */
export async function fees1(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4c02a21c",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "feesVotingReward" function on the contract.
 * @param options - The options for the feesVotingReward function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { feesVotingReward } from "TODO";
 * 
 * const result = await feesVotingReward();
 * 
 * ```
 */
export async function feesVotingReward(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x0fe2f711",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "gaugeFactory" function on the contract.
 * @param options - The options for the gaugeFactory function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { gaugeFactory } from "TODO";
 * 
 * const result = await gaugeFactory();
 * 
 * ```
 */
export async function gaugeFactory(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x0d52333c",
  [],
  [
    {
      "internalType": "contract ICLGaugeFactory",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "isPool" function on the contract.
 * @param options - The options for the isPool function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isPool } from "TODO";
 * 
 * const result = await isPool();
 * 
 * ```
 */
export async function isPool(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe2e1c6db",
  [],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "lastUpdateTime" function.
 */
export type LastUpdateTimeParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "lastUpdateTime" function on the contract.
 * @param options - The options for the lastUpdateTime function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { lastUpdateTime } from "TODO";
 * 
 * const result = await lastUpdateTime({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function lastUpdateTime(
  options: BaseTransactionOptions<LastUpdateTimeParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4bcddb1f",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "left" function on the contract.
 * @param options - The options for the left function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { left } from "TODO";
 * 
 * const result = await left();
 * 
 * ```
 */
export async function left(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x16e64048",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "nft" function on the contract.
 * @param options - The options for the nft function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { nft } from "TODO";
 * 
 * const result = await nft();
 * 
 * ```
 */
export async function nft(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x47ccca02",
  [],
  [
    {
      "internalType": "contract INonfungiblePositionManager",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "periodFinish" function on the contract.
 * @param options - The options for the periodFinish function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { periodFinish } from "TODO";
 * 
 * const result = await periodFinish();
 * 
 * ```
 */
export async function periodFinish(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xebe2b12b",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "pool" function on the contract.
 * @param options - The options for the pool function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { pool } from "TODO";
 * 
 * const result = await pool();
 * 
 * ```
 */
export async function pool(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x16f0115b",
  [],
  [
    {
      "internalType": "contract ICLPool",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "rewardGrowthInside" function.
 */
export type RewardGrowthInsideParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "rewardGrowthInside" function on the contract.
 * @param options - The options for the rewardGrowthInside function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { rewardGrowthInside } from "TODO";
 * 
 * const result = await rewardGrowthInside({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function rewardGrowthInside(
  options: BaseTransactionOptions<RewardGrowthInsideParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xac789c08",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "rewardRate" function on the contract.
 * @param options - The options for the rewardRate function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { rewardRate } from "TODO";
 * 
 * const result = await rewardRate();
 * 
 * ```
 */
export async function rewardRate(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x7b0a47ee",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "rewardRateByEpoch" function.
 */
export type RewardRateByEpochParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "rewardRateByEpoch" function on the contract.
 * @param options - The options for the rewardRateByEpoch function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { rewardRateByEpoch } from "TODO";
 * 
 * const result = await rewardRateByEpoch({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function rewardRateByEpoch(
  options: BaseTransactionOptions<RewardRateByEpochParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x94af5b63",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "rewardToken" function on the contract.
 * @param options - The options for the rewardToken function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { rewardToken } from "TODO";
 * 
 * const result = await rewardToken();
 * 
 * ```
 */
export async function rewardToken(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf7c618c1",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "rewards" function.
 */
export type RewardsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "rewards" function on the contract.
 * @param options - The options for the rewards function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { rewards } from "TODO";
 * 
 * const result = await rewards({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function rewards(
  options: BaseTransactionOptions<RewardsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xf301af42",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "stakedByIndex" function.
 */
export type StakedByIndexParams = {
  depositor: AbiParameterToPrimitiveType<{"internalType":"address","name":"depositor","type":"address"}>
index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"index","type":"uint256"}>
};

/**
 * Calls the "stakedByIndex" function on the contract.
 * @param options - The options for the stakedByIndex function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { stakedByIndex } from "TODO";
 * 
 * const result = await stakedByIndex({
 *  depositor: ...,
 *  index: ...,
 * });
 * 
 * ```
 */
export async function stakedByIndex(
  options: BaseTransactionOptions<StakedByIndexParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x38463937",
  [
    {
      "internalType": "address",
      "name": "depositor",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "index",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.depositor, options.index]
  });
};


/**
 * Represents the parameters for the "stakedContains" function.
 */
export type StakedContainsParams = {
  depositor: AbiParameterToPrimitiveType<{"internalType":"address","name":"depositor","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "stakedContains" function on the contract.
 * @param options - The options for the stakedContains function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { stakedContains } from "TODO";
 * 
 * const result = await stakedContains({
 *  depositor: ...,
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function stakedContains(
  options: BaseTransactionOptions<StakedContainsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc69deec5",
  [
    {
      "internalType": "address",
      "name": "depositor",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.depositor, options.tokenId]
  });
};


/**
 * Represents the parameters for the "stakedLength" function.
 */
export type StakedLengthParams = {
  depositor: AbiParameterToPrimitiveType<{"internalType":"address","name":"depositor","type":"address"}>
};

/**
 * Calls the "stakedLength" function on the contract.
 * @param options - The options for the stakedLength function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { stakedLength } from "TODO";
 * 
 * const result = await stakedLength({
 *  depositor: ...,
 * });
 * 
 * ```
 */
export async function stakedLength(
  options: BaseTransactionOptions<StakedLengthParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xae775c32",
  [
    {
      "internalType": "address",
      "name": "depositor",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.depositor]
  });
};


/**
 * Represents the parameters for the "stakedValues" function.
 */
export type StakedValuesParams = {
  depositor: AbiParameterToPrimitiveType<{"internalType":"address","name":"depositor","type":"address"}>
};

/**
 * Calls the "stakedValues" function on the contract.
 * @param options - The options for the stakedValues function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { stakedValues } from "TODO";
 * 
 * const result = await stakedValues({
 *  depositor: ...,
 * });
 * 
 * ```
 */
export async function stakedValues(
  options: BaseTransactionOptions<StakedValuesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4b937763",
  [
    {
      "internalType": "address",
      "name": "depositor",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256[]",
      "name": "staked",
      "type": "uint256[]"
    }
  ]
],
    params: [options.depositor]
  });
};




/**
 * Calls the "tickSpacing" function on the contract.
 * @param options - The options for the tickSpacing function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tickSpacing } from "TODO";
 * 
 * const result = await tickSpacing();
 * 
 * ```
 */
export async function tickSpacing(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd0c93a7c",
  [],
  [
    {
      "internalType": "int24",
      "name": "",
      "type": "int24"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "token0" function on the contract.
 * @param options - The options for the token0 function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { token0 } from "TODO";
 * 
 * const result = await token0();
 * 
 * ```
 */
export async function token0(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x0dfe1681",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "token1" function on the contract.
 * @param options - The options for the token1 function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { token1 } from "TODO";
 * 
 * const result = await token1();
 * 
 * ```
 */
export async function token1(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xd21220a7",
  [],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "voter" function on the contract.
 * @param options - The options for the voter function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { voter } from "TODO";
 * 
 * const result = await voter();
 * 
 * ```
 */
export async function voter(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x46c96aac",
  [],
  [
    {
      "internalType": "contract IVoter",
      "name": "",
      "type": "address"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "decreaseStakedLiquidity" function.
 */
export type DecreaseStakedLiquidityParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
liquidity: AbiParameterToPrimitiveType<{"internalType":"uint128","name":"liquidity","type":"uint128"}>
amount0Min: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount0Min","type":"uint256"}>
amount1Min: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount1Min","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
};

/**
 * Calls the "decreaseStakedLiquidity" function on the contract.
 * @param options - The options for the "decreaseStakedLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { decreaseStakedLiquidity } from "TODO";
 * 
 * const transaction = decreaseStakedLiquidity({
 *  tokenId: ...,
 *  liquidity: ...,
 *  amount0Min: ...,
 *  amount1Min: ...,
 *  deadline: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function decreaseStakedLiquidity(
  options: BaseTransactionOptions<DecreaseStakedLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xdd4997ee",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    },
    {
      "internalType": "uint128",
      "name": "liquidity",
      "type": "uint128"
    },
    {
      "internalType": "uint256",
      "name": "amount0Min",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1Min",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "amount0",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId, options.liquidity, options.amount0Min, options.amount1Min, options.deadline]
  });
};


/**
 * Represents the parameters for the "deposit" function.
 */
export type DepositParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "deposit" function on the contract.
 * @param options - The options for the "deposit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { deposit } from "TODO";
 * 
 * const transaction = deposit({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function deposit(
  options: BaseTransactionOptions<DepositParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb6b55f25",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "getReward" function.
 */
export type GetRewardParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getReward" function on the contract.
 * @param options - The options for the "getReward" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { getReward } from "TODO";
 * 
 * const transaction = getReward({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function getReward(
  options: BaseTransactionOptions<GetRewardParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x1c4b774b",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "increaseStakedLiquidity" function.
 */
export type IncreaseStakedLiquidityParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
amount0Desired: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount0Desired","type":"uint256"}>
amount1Desired: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount1Desired","type":"uint256"}>
amount0Min: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount0Min","type":"uint256"}>
amount1Min: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount1Min","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
};

/**
 * Calls the "increaseStakedLiquidity" function on the contract.
 * @param options - The options for the "increaseStakedLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increaseStakedLiquidity } from "TODO";
 * 
 * const transaction = increaseStakedLiquidity({
 *  tokenId: ...,
 *  amount0Desired: ...,
 *  amount1Desired: ...,
 *  amount0Min: ...,
 *  amount1Min: ...,
 *  deadline: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function increaseStakedLiquidity(
  options: BaseTransactionOptions<IncreaseStakedLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb06fcac3",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount0Desired",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1Desired",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount0Min",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1Min",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint128",
      "name": "liquidity",
      "type": "uint128"
    },
    {
      "internalType": "uint256",
      "name": "amount0",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1",
      "type": "uint256"
    }
  ]
],
    params: [options.tokenId, options.amount0Desired, options.amount1Desired, options.amount0Min, options.amount1Min, options.deadline]
  });
};


/**
 * Represents the parameters for the "initialize" function.
 */
export type InitializeParams = {
  pool: AbiParameterToPrimitiveType<{"internalType":"address","name":"_pool","type":"address"}>
feesVotingReward: AbiParameterToPrimitiveType<{"internalType":"address","name":"_feesVotingReward","type":"address"}>
rewardToken: AbiParameterToPrimitiveType<{"internalType":"address","name":"_rewardToken","type":"address"}>
voter: AbiParameterToPrimitiveType<{"internalType":"address","name":"_voter","type":"address"}>
nft: AbiParameterToPrimitiveType<{"internalType":"address","name":"_nft","type":"address"}>
token0: AbiParameterToPrimitiveType<{"internalType":"address","name":"_token0","type":"address"}>
token1: AbiParameterToPrimitiveType<{"internalType":"address","name":"_token1","type":"address"}>
tickSpacing: AbiParameterToPrimitiveType<{"internalType":"int24","name":"_tickSpacing","type":"int24"}>
isPool: AbiParameterToPrimitiveType<{"internalType":"bool","name":"_isPool","type":"bool"}>
};

/**
 * Calls the "initialize" function on the contract.
 * @param options - The options for the "initialize" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { initialize } from "TODO";
 * 
 * const transaction = initialize({
 *  pool: ...,
 *  feesVotingReward: ...,
 *  rewardToken: ...,
 *  voter: ...,
 *  nft: ...,
 *  token0: ...,
 *  token1: ...,
 *  tickSpacing: ...,
 *  isPool: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function initialize(
  options: BaseTransactionOptions<InitializeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x391ffff8",
  [
    {
      "internalType": "address",
      "name": "_pool",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_feesVotingReward",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_rewardToken",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_voter",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_nft",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_token0",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "_token1",
      "type": "address"
    },
    {
      "internalType": "int24",
      "name": "_tickSpacing",
      "type": "int24"
    },
    {
      "internalType": "bool",
      "name": "_isPool",
      "type": "bool"
    }
  ],
  []
],
    params: [options.pool, options.feesVotingReward, options.rewardToken, options.voter, options.nft, options.token0, options.token1, options.tickSpacing, options.isPool]
  });
};


/**
 * Represents the parameters for the "notifyRewardAmount" function.
 */
export type NotifyRewardAmountParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "notifyRewardAmount" function on the contract.
 * @param options - The options for the "notifyRewardAmount" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { notifyRewardAmount } from "TODO";
 * 
 * const transaction = notifyRewardAmount({
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function notifyRewardAmount(
  options: BaseTransactionOptions<NotifyRewardAmountParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3c6b16ab",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "notifyRewardWithoutClaim" function.
 */
export type NotifyRewardWithoutClaimParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"_amount","type":"uint256"}>
};

/**
 * Calls the "notifyRewardWithoutClaim" function on the contract.
 * @param options - The options for the "notifyRewardWithoutClaim" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { notifyRewardWithoutClaim } from "TODO";
 * 
 * const transaction = notifyRewardWithoutClaim({
 *  amount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function notifyRewardWithoutClaim(
  options: BaseTransactionOptions<NotifyRewardWithoutClaimParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xdcdc18dc",
  [
    {
      "internalType": "uint256",
      "name": "_amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "onERC721Received" function.
 */
export type OnERC721ReceivedParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_2: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
arg_3: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"","type":"bytes"}>
};

/**
 * Calls the "onERC721Received" function on the contract.
 * @param options - The options for the "onERC721Received" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { onERC721Received } from "TODO";
 * 
 * const transaction = onERC721Received({
 *  arg_0: ...,
 *  arg_1: ...,
 *  arg_2: ...,
 *  arg_3: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function onERC721Received(
  options: BaseTransactionOptions<OnERC721ReceivedParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x150b7a02",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "",
      "type": "bytes"
    }
  ],
  [
    {
      "internalType": "bytes4",
      "name": "",
      "type": "bytes4"
    }
  ]
],
    params: [options.arg_0, options.arg_1, options.arg_2, options.arg_3]
  });
};


/**
 * Represents the parameters for the "withdraw" function.
 */
export type WithdrawParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "withdraw" function on the contract.
 * @param options - The options for the "withdraw" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { withdraw } from "TODO";
 * 
 * const transaction = withdraw({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function withdraw(
  options: BaseTransactionOptions<WithdrawParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2e1a7d4d",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.tokenId]
  });
};


