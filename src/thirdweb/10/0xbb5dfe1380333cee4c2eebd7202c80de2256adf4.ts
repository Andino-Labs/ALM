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
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
approved: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"approved","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  approved: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature: "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ApprovalForAll" event.
 */
export type ApprovalForAllEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
operator: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"operator","type":"address"}>
}>;

/**
 * Creates an event object for the ApprovalForAll event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalForAllEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalForAllEvent({
 *  owner: ...,
 *  operator: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function approvalForAllEvent(filters: ApprovalForAllEventFilters = {}) {
  return prepareEvent({
    signature: "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
    filters,
  });
};
  



/**
 * Creates an event object for the BatchMetadataUpdate event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { batchMetadataUpdateEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  batchMetadataUpdateEvent()
 * ],
 * });
 * ```
 */ 
export function batchMetadataUpdateEvent() {
  return prepareEvent({
    signature: "event BatchMetadataUpdate(uint256 _fromTokenId, uint256 _toTokenId)",
  });
};
  

/**
 * Represents the filters for the "Collect" event.
 */
export type CollectEventFilters = Partial<{
  tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the Collect event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { collectEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  collectEvent({
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function collectEvent(filters: CollectEventFilters = {}) {
  return prepareEvent({
    signature: "event Collect(uint256 indexed tokenId, address recipient, uint256 amount0, uint256 amount1)",
    filters,
  });
};
  

/**
 * Represents the filters for the "DecreaseLiquidity" event.
 */
export type DecreaseLiquidityEventFilters = Partial<{
  tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the DecreaseLiquidity event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { decreaseLiquidityEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  decreaseLiquidityEvent({
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function decreaseLiquidityEvent(filters: DecreaseLiquidityEventFilters = {}) {
  return prepareEvent({
    signature: "event DecreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)",
    filters,
  });
};
  

/**
 * Represents the filters for the "IncreaseLiquidity" event.
 */
export type IncreaseLiquidityEventFilters = Partial<{
  tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the IncreaseLiquidity event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { increaseLiquidityEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  increaseLiquidityEvent({
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function increaseLiquidityEvent(filters: IncreaseLiquidityEventFilters = {}) {
  return prepareEvent({
    signature: "event IncreaseLiquidity(uint256 indexed tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)",
    filters,
  });
};
  



/**
 * Creates an event object for the MetadataUpdate event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { metadataUpdateEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  metadataUpdateEvent()
 * ],
 * });
 * ```
 */ 
export function metadataUpdateEvent() {
  return prepareEvent({
    signature: "event MetadataUpdate(uint256 _tokenId)",
  });
};
  

/**
 * Represents the filters for the "TokenDescriptorChanged" event.
 */
export type TokenDescriptorChangedEventFilters = Partial<{
  tokenDescriptor: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"tokenDescriptor","type":"address"}>
}>;

/**
 * Creates an event object for the TokenDescriptorChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { tokenDescriptorChangedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  tokenDescriptorChangedEvent({
 *  tokenDescriptor: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function tokenDescriptorChangedEvent(filters: TokenDescriptorChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event TokenDescriptorChanged(address indexed tokenDescriptor)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}>
}>;

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
    filters,
  });
};
  

/**
 * Represents the filters for the "TransferOwnership" event.
 */
export type TransferOwnershipEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
}>;

/**
 * Creates an event object for the TransferOwnership event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferOwnershipEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferOwnershipEvent({
 *  owner: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function transferOwnershipEvent(filters: TransferOwnershipEventFilters = {}) {
  return prepareEvent({
    signature: "event TransferOwnership(address indexed owner)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "DOMAIN_SEPARATOR" function on the contract.
 * @param options - The options for the DOMAIN_SEPARATOR function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DOMAIN_SEPARATOR } from "TODO";
 * 
 * const result = await DOMAIN_SEPARATOR();
 * 
 * ```
 */
export async function DOMAIN_SEPARATOR(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3644e515",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "PERMIT_TYPEHASH" function on the contract.
 * @param options - The options for the PERMIT_TYPEHASH function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { PERMIT_TYPEHASH } from "TODO";
 * 
 * const result = await PERMIT_TYPEHASH();
 * 
 * ```
 */
export async function PERMIT_TYPEHASH(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x30adf81f",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "WETH9" function on the contract.
 * @param options - The options for the WETH9 function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { WETH9 } from "TODO";
 * 
 * const result = await WETH9();
 * 
 * ```
 */
export async function WETH9(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4aa4a4fc",
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
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 * 
 * const result = await balanceOf({
 *  owner: ...,
 * });
 * 
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x70a08231",
  [
    {
      "internalType": "address",
      "name": "owner",
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
    params: [options.owner]
  });
};




/**
 * Calls the "baseURI" function on the contract.
 * @param options - The options for the baseURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { baseURI } from "TODO";
 * 
 * const result = await baseURI();
 * 
 * ```
 */
export async function baseURI(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6c0360eb",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "factory" function on the contract.
 * @param options - The options for the factory function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { factory } from "TODO";
 * 
 * const result = await factory();
 * 
 * ```
 */
export async function factory(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc45a0155",
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
 * Represents the parameters for the "getApproved" function.
 */
export type GetApprovedParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "getApproved" function on the contract.
 * @param options - The options for the getApproved function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getApproved } from "TODO";
 * 
 * const result = await getApproved({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function getApproved(
  options: BaseTransactionOptions<GetApprovedParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x081812fc",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "isApprovedForAll" function.
 */
export type IsApprovedForAllParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
operator: AbiParameterToPrimitiveType<{"internalType":"address","name":"operator","type":"address"}>
};

/**
 * Calls the "isApprovedForAll" function on the contract.
 * @param options - The options for the isApprovedForAll function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { isApprovedForAll } from "TODO";
 * 
 * const result = await isApprovedForAll({
 *  owner: ...,
 *  operator: ...,
 * });
 * 
 * ```
 */
export async function isApprovedForAll(
  options: BaseTransactionOptions<IsApprovedForAllParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xe985e9c5",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
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
    params: [options.owner, options.operator]
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 * 
 * const result = await name();
 * 
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "owner" function on the contract.
 * @param options - The options for the owner function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { owner } from "TODO";
 * 
 * const result = await owner();
 * 
 * ```
 */
export async function owner(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8da5cb5b",
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
 * Represents the parameters for the "ownerOf" function.
 */
export type OwnerOfParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "ownerOf" function on the contract.
 * @param options - The options for the ownerOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { ownerOf } from "TODO";
 * 
 * const result = await ownerOf({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function ownerOf(
  options: BaseTransactionOptions<OwnerOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6352211e",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "positions" function.
 */
export type PositionsParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "positions" function on the contract.
 * @param options - The options for the positions function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { positions } from "TODO";
 * 
 * const result = await positions({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function positions(
  options: BaseTransactionOptions<PositionsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x99fbab88",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint96",
      "name": "nonce",
      "type": "uint96"
    },
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "token0",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "token1",
      "type": "address"
    },
    {
      "internalType": "int24",
      "name": "tickSpacing",
      "type": "int24"
    },
    {
      "internalType": "int24",
      "name": "tickLower",
      "type": "int24"
    },
    {
      "internalType": "int24",
      "name": "tickUpper",
      "type": "int24"
    },
    {
      "internalType": "uint128",
      "name": "liquidity",
      "type": "uint128"
    },
    {
      "internalType": "uint256",
      "name": "feeGrowthInside0LastX128",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "feeGrowthInside1LastX128",
      "type": "uint256"
    },
    {
      "internalType": "uint128",
      "name": "tokensOwed0",
      "type": "uint128"
    },
    {
      "internalType": "uint128",
      "name": "tokensOwed1",
      "type": "uint128"
    }
  ]
],
    params: [options.tokenId]
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 * 
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 * 
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
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
    params: [options.interfaceId]
  });
};




/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 * 
 * const result = await symbol();
 * 
 * ```
 */
export async function symbol(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x95d89b41",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "tokenByIndex" function.
 */
export type TokenByIndexParams = {
  index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"index","type":"uint256"}>
};

/**
 * Calls the "tokenByIndex" function on the contract.
 * @param options - The options for the tokenByIndex function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenByIndex } from "TODO";
 * 
 * const result = await tokenByIndex({
 *  index: ...,
 * });
 * 
 * ```
 */
export async function tokenByIndex(
  options: BaseTransactionOptions<TokenByIndexParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x4f6ccce7",
  [
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
    params: [options.index]
  });
};




/**
 * Calls the "tokenDescriptor" function on the contract.
 * @param options - The options for the tokenDescriptor function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenDescriptor } from "TODO";
 * 
 * const result = await tokenDescriptor();
 * 
 * ```
 */
export async function tokenDescriptor(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x5a9d7a68",
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
 * Represents the parameters for the "tokenOfOwnerByIndex" function.
 */
export type TokenOfOwnerByIndexParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
index: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"index","type":"uint256"}>
};

/**
 * Calls the "tokenOfOwnerByIndex" function on the contract.
 * @param options - The options for the tokenOfOwnerByIndex function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenOfOwnerByIndex } from "TODO";
 * 
 * const result = await tokenOfOwnerByIndex({
 *  owner: ...,
 *  index: ...,
 * });
 * 
 * ```
 */
export async function tokenOfOwnerByIndex(
  options: BaseTransactionOptions<TokenOfOwnerByIndexParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x2f745c59",
  [
    {
      "internalType": "address",
      "name": "owner",
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
    params: [options.owner, options.index]
  });
};


/**
 * Represents the parameters for the "tokenURI" function.
 */
export type TokenURIParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "tokenURI" function on the contract.
 * @param options - The options for the tokenURI function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { tokenURI } from "TODO";
 * 
 * const result = await tokenURI({
 *  tokenId: ...,
 * });
 * 
 * ```
 */
export async function tokenURI(
  options: BaseTransactionOptions<TokenURIParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc87b56dd",
  [
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: [options.tokenId]
  });
};




/**
 * Calls the "totalSupply" function on the contract.
 * @param options - The options for the totalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalSupply } from "TODO";
 * 
 * const result = await totalSupply();
 * 
 * ```
 */
export async function totalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x18160ddd",
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
* Contract write functions
*/

/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 * 
 * const transaction = approve({
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function approve(
  options: BaseTransactionOptions<ApproveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x095ea7b3",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "burn" function.
 */
export type BurnParams = {
  tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "burn" function on the contract.
 * @param options - The options for the "burn" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { burn } from "TODO";
 * 
 * const transaction = burn({
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function burn(
  options: BaseTransactionOptions<BurnParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42966c68",
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
 * Represents the parameters for the "collect" function.
 */
export type CollectParams = {
  params: AbiParameterToPrimitiveType<{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint128","name":"amount0Max","type":"uint128"},{"internalType":"uint128","name":"amount1Max","type":"uint128"}],"internalType":"struct INonfungiblePositionManager.CollectParams","name":"params","type":"tuple"}>
};

/**
 * Calls the "collect" function on the contract.
 * @param options - The options for the "collect" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { collect } from "TODO";
 * 
 * const transaction = collect({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function collect(
  options: BaseTransactionOptions<CollectParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xfc6f7865",
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint128",
          "name": "amount0Max",
          "type": "uint128"
        },
        {
          "internalType": "uint128",
          "name": "amount1Max",
          "type": "uint128"
        }
      ],
      "internalType": "struct INonfungiblePositionManager.CollectParams",
      "name": "params",
      "type": "tuple"
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
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "decreaseLiquidity" function.
 */
export type DecreaseLiquidityParams = {
  params: AbiParameterToPrimitiveType<{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"amount0Min","type":"uint256"},{"internalType":"uint256","name":"amount1Min","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct INonfungiblePositionManager.DecreaseLiquidityParams","name":"params","type":"tuple"}>
};

/**
 * Calls the "decreaseLiquidity" function on the contract.
 * @param options - The options for the "decreaseLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { decreaseLiquidity } from "TODO";
 * 
 * const transaction = decreaseLiquidity({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function decreaseLiquidity(
  options: BaseTransactionOptions<DecreaseLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0c49ccbe",
  [
    {
      "components": [
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
      "internalType": "struct INonfungiblePositionManager.DecreaseLiquidityParams",
      "name": "params",
      "type": "tuple"
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
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "increaseLiquidity" function.
 */
export type IncreaseLiquidityParams = {
  params: AbiParameterToPrimitiveType<{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount0Desired","type":"uint256"},{"internalType":"uint256","name":"amount1Desired","type":"uint256"},{"internalType":"uint256","name":"amount0Min","type":"uint256"},{"internalType":"uint256","name":"amount1Min","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"internalType":"struct INonfungiblePositionManager.IncreaseLiquidityParams","name":"params","type":"tuple"}>
};

/**
 * Calls the "increaseLiquidity" function on the contract.
 * @param options - The options for the "increaseLiquidity" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increaseLiquidity } from "TODO";
 * 
 * const transaction = increaseLiquidity({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function increaseLiquidity(
  options: BaseTransactionOptions<IncreaseLiquidityParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x219f5d17",
  [
    {
      "components": [
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
      "internalType": "struct INonfungiblePositionManager.IncreaseLiquidityParams",
      "name": "params",
      "type": "tuple"
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
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "mint" function.
 */
export type MintParams = {
  params: AbiParameterToPrimitiveType<{"components":[{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"int24","name":"tickSpacing","type":"int24"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"uint256","name":"amount0Desired","type":"uint256"},{"internalType":"uint256","name":"amount1Desired","type":"uint256"},{"internalType":"uint256","name":"amount0Min","type":"uint256"},{"internalType":"uint256","name":"amount1Min","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"}],"internalType":"struct INonfungiblePositionManager.MintParams","name":"params","type":"tuple"}>
};

/**
 * Calls the "mint" function on the contract.
 * @param options - The options for the "mint" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { mint } from "TODO";
 * 
 * const transaction = mint({
 *  params: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function mint(
  options: BaseTransactionOptions<MintParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb5007d1f",
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "token0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "token1",
          "type": "address"
        },
        {
          "internalType": "int24",
          "name": "tickSpacing",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickLower",
          "type": "int24"
        },
        {
          "internalType": "int24",
          "name": "tickUpper",
          "type": "int24"
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
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint160",
          "name": "sqrtPriceX96",
          "type": "uint160"
        }
      ],
      "internalType": "struct INonfungiblePositionManager.MintParams",
      "name": "params",
      "type": "tuple"
    }
  ],
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
    params: [options.params]
  });
};


/**
 * Represents the parameters for the "multicall" function.
 */
export type MulticallParams = {
  data: AbiParameterToPrimitiveType<{"internalType":"bytes[]","name":"data","type":"bytes[]"}>
};

/**
 * Calls the "multicall" function on the contract.
 * @param options - The options for the "multicall" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { multicall } from "TODO";
 * 
 * const transaction = multicall({
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function multicall(
  options: BaseTransactionOptions<MulticallParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xac9650d8",
  [
    {
      "internalType": "bytes[]",
      "name": "data",
      "type": "bytes[]"
    }
  ],
  [
    {
      "internalType": "bytes[]",
      "name": "results",
      "type": "bytes[]"
    }
  ]
],
    params: [options.data]
  });
};


/**
 * Represents the parameters for the "permit" function.
 */
export type PermitParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "permit" function on the contract.
 * @param options - The options for the "permit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { permit } from "TODO";
 * 
 * const transaction = permit({
 *  spender: ...,
 *  tokenId: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function permit(
  options: BaseTransactionOptions<PermitParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x7ac2ff7b",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.spender, options.tokenId, options.deadline, options.v, options.r, options.s]
  });
};




/**
 * Calls the "refundETH" function on the contract.
 * @param options - The options for the "refundETH" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { refundETH } from "TODO";
 * 
 * const transaction = refundETH();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function refundETH(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x12210e8a",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "safeTransferFrom" function.
 */
export type SafeTransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "safeTransferFrom" function on the contract.
 * @param options - The options for the "safeTransferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { safeTransferFrom } from "TODO";
 * 
 * const transaction = safeTransferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function safeTransferFrom(
  options: BaseTransactionOptions<SafeTransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42842e0e",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.from, options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "selfPermit" function.
 */
export type SelfPermitParams = {
  token: AbiParameterToPrimitiveType<{"internalType":"address","name":"token","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "selfPermit" function on the contract.
 * @param options - The options for the "selfPermit" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { selfPermit } from "TODO";
 * 
 * const transaction = selfPermit({
 *  token: ...,
 *  value: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function selfPermit(
  options: BaseTransactionOptions<SelfPermitParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xf3995c67",
  [
    {
      "internalType": "address",
      "name": "token",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.token, options.value, options.deadline, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "selfPermitAllowed" function.
 */
export type SelfPermitAllowedParams = {
  token: AbiParameterToPrimitiveType<{"internalType":"address","name":"token","type":"address"}>
nonce: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"nonce","type":"uint256"}>
expiry: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"expiry","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "selfPermitAllowed" function on the contract.
 * @param options - The options for the "selfPermitAllowed" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { selfPermitAllowed } from "TODO";
 * 
 * const transaction = selfPermitAllowed({
 *  token: ...,
 *  nonce: ...,
 *  expiry: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function selfPermitAllowed(
  options: BaseTransactionOptions<SelfPermitAllowedParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x4659a494",
  [
    {
      "internalType": "address",
      "name": "token",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "nonce",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "expiry",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.token, options.nonce, options.expiry, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "selfPermitAllowedIfNecessary" function.
 */
export type SelfPermitAllowedIfNecessaryParams = {
  token: AbiParameterToPrimitiveType<{"internalType":"address","name":"token","type":"address"}>
nonce: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"nonce","type":"uint256"}>
expiry: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"expiry","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "selfPermitAllowedIfNecessary" function on the contract.
 * @param options - The options for the "selfPermitAllowedIfNecessary" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { selfPermitAllowedIfNecessary } from "TODO";
 * 
 * const transaction = selfPermitAllowedIfNecessary({
 *  token: ...,
 *  nonce: ...,
 *  expiry: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function selfPermitAllowedIfNecessary(
  options: BaseTransactionOptions<SelfPermitAllowedIfNecessaryParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa4a78f0c",
  [
    {
      "internalType": "address",
      "name": "token",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "nonce",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "expiry",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.token, options.nonce, options.expiry, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "selfPermitIfNecessary" function.
 */
export type SelfPermitIfNecessaryParams = {
  token: AbiParameterToPrimitiveType<{"internalType":"address","name":"token","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
deadline: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"deadline","type":"uint256"}>
v: AbiParameterToPrimitiveType<{"internalType":"uint8","name":"v","type":"uint8"}>
r: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"r","type":"bytes32"}>
s: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"s","type":"bytes32"}>
};

/**
 * Calls the "selfPermitIfNecessary" function on the contract.
 * @param options - The options for the "selfPermitIfNecessary" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { selfPermitIfNecessary } from "TODO";
 * 
 * const transaction = selfPermitIfNecessary({
 *  token: ...,
 *  value: ...,
 *  deadline: ...,
 *  v: ...,
 *  r: ...,
 *  s: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function selfPermitIfNecessary(
  options: BaseTransactionOptions<SelfPermitIfNecessaryParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xc2e3140a",
  [
    {
      "internalType": "address",
      "name": "token",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "deadline",
      "type": "uint256"
    },
    {
      "internalType": "uint8",
      "name": "v",
      "type": "uint8"
    },
    {
      "internalType": "bytes32",
      "name": "r",
      "type": "bytes32"
    },
    {
      "internalType": "bytes32",
      "name": "s",
      "type": "bytes32"
    }
  ],
  []
],
    params: [options.token, options.value, options.deadline, options.v, options.r, options.s]
  });
};


/**
 * Represents the parameters for the "setApprovalForAll" function.
 */
export type SetApprovalForAllParams = {
  operator: AbiParameterToPrimitiveType<{"internalType":"address","name":"operator","type":"address"}>
approved: AbiParameterToPrimitiveType<{"internalType":"bool","name":"approved","type":"bool"}>
};

/**
 * Calls the "setApprovalForAll" function on the contract.
 * @param options - The options for the "setApprovalForAll" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setApprovalForAll } from "TODO";
 * 
 * const transaction = setApprovalForAll({
 *  operator: ...,
 *  approved: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setApprovalForAll(
  options: BaseTransactionOptions<SetApprovalForAllParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa22cb465",
  [
    {
      "internalType": "address",
      "name": "operator",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "approved",
      "type": "bool"
    }
  ],
  []
],
    params: [options.operator, options.approved]
  });
};


/**
 * Represents the parameters for the "setOwner" function.
 */
export type SetOwnerParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"_owner","type":"address"}>
};

/**
 * Calls the "setOwner" function on the contract.
 * @param options - The options for the "setOwner" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setOwner } from "TODO";
 * 
 * const transaction = setOwner({
 *  owner: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setOwner(
  options: BaseTransactionOptions<SetOwnerParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x13af4035",
  [
    {
      "internalType": "address",
      "name": "_owner",
      "type": "address"
    }
  ],
  []
],
    params: [options.owner]
  });
};


/**
 * Represents the parameters for the "setTokenDescriptor" function.
 */
export type SetTokenDescriptorParams = {
  tokenDescriptor: AbiParameterToPrimitiveType<{"internalType":"address","name":"_tokenDescriptor","type":"address"}>
};

/**
 * Calls the "setTokenDescriptor" function on the contract.
 * @param options - The options for the "setTokenDescriptor" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setTokenDescriptor } from "TODO";
 * 
 * const transaction = setTokenDescriptor({
 *  tokenDescriptor: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setTokenDescriptor(
  options: BaseTransactionOptions<SetTokenDescriptorParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xb6dc7ea3",
  [
    {
      "internalType": "address",
      "name": "_tokenDescriptor",
      "type": "address"
    }
  ],
  []
],
    params: [options.tokenDescriptor]
  });
};


/**
 * Represents the parameters for the "sweepToken" function.
 */
export type SweepTokenParams = {
  token: AbiParameterToPrimitiveType<{"internalType":"address","name":"token","type":"address"}>
amountMinimum: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amountMinimum","type":"uint256"}>
recipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"recipient","type":"address"}>
};

/**
 * Calls the "sweepToken" function on the contract.
 * @param options - The options for the "sweepToken" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { sweepToken } from "TODO";
 * 
 * const transaction = sweepToken({
 *  token: ...,
 *  amountMinimum: ...,
 *  recipient: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function sweepToken(
  options: BaseTransactionOptions<SweepTokenParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xdf2ab5bb",
  [
    {
      "internalType": "address",
      "name": "token",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amountMinimum",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "recipient",
      "type": "address"
    }
  ],
  []
],
    params: [options.token, options.amountMinimum, options.recipient]
  });
};


/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
tokenId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"tokenId","type":"uint256"}>
};

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 * 
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  tokenId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function transferFrom(
  options: BaseTransactionOptions<TransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x23b872dd",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.from, options.to, options.tokenId]
  });
};


/**
 * Represents the parameters for the "uniswapV3MintCallback" function.
 */
export type UniswapV3MintCallbackParams = {
  amount0Owed: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount0Owed","type":"uint256"}>
amount1Owed: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount1Owed","type":"uint256"}>
data: AbiParameterToPrimitiveType<{"internalType":"bytes","name":"data","type":"bytes"}>
};

/**
 * Calls the "uniswapV3MintCallback" function on the contract.
 * @param options - The options for the "uniswapV3MintCallback" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { uniswapV3MintCallback } from "TODO";
 * 
 * const transaction = uniswapV3MintCallback({
 *  amount0Owed: ...,
 *  amount1Owed: ...,
 *  data: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function uniswapV3MintCallback(
  options: BaseTransactionOptions<UniswapV3MintCallbackParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd3487997",
  [
    {
      "internalType": "uint256",
      "name": "amount0Owed",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount1Owed",
      "type": "uint256"
    },
    {
      "internalType": "bytes",
      "name": "data",
      "type": "bytes"
    }
  ],
  []
],
    params: [options.amount0Owed, options.amount1Owed, options.data]
  });
};


/**
 * Represents the parameters for the "unwrapWETH9" function.
 */
export type UnwrapWETH9Params = {
  amountMinimum: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amountMinimum","type":"uint256"}>
recipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"recipient","type":"address"}>
};

/**
 * Calls the "unwrapWETH9" function on the contract.
 * @param options - The options for the "unwrapWETH9" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { unwrapWETH9 } from "TODO";
 * 
 * const transaction = unwrapWETH9({
 *  amountMinimum: ...,
 *  recipient: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function unwrapWETH9(
  options: BaseTransactionOptions<UnwrapWETH9Params>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x49404b7c",
  [
    {
      "internalType": "uint256",
      "name": "amountMinimum",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "recipient",
      "type": "address"
    }
  ],
  []
],
    params: [options.amountMinimum, options.recipient]
  });
};


