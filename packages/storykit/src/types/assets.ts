import { Address } from "viem"

export enum PIL_FLAVOR {
  NON_COMMERCIAL_SOCIAL_REMIXING = "Non-Commercial Social Remixing",
  COMMERCIAL_USE = "Commercial Use",
  COMMERCIAL_REMIX = "Commercial Remix",
  CUSTOM = "Custom",
  // OPEN_DOMAIN = "Open Domain",
  // NO_DERIVATIVE = "No Derivative",
}

export type PilFlavor =
  | PIL_FLAVOR.NON_COMMERCIAL_SOCIAL_REMIXING
  | PIL_FLAVOR.COMMERCIAL_USE
  | PIL_FLAVOR.COMMERCIAL_REMIX
  | PIL_FLAVOR.CUSTOM

export type Asset = {
  id: Address
  ancestorCount: number
  descendantCount: number
  parentCount?: number
  childrenCount?: number
  rootCount?: number
  parentIpIds: Address[] | null
  childIpIds: Address[] | null
  rootIpIds: Address[] | null
  parentIps?: Asset[] | null
  rootIps?: Asset[] | null
  childIps?: Asset[] | null
  nftMetadata: {
    name: string
    chainId: string
    tokenContract: Address
    tokenId: string
    tokenUri: string
    imageUrl: string
  }
  blockNumber: string
  blockTimestamp: string
}

export type AssetEdges = {
  ipId: Address
  parentIpId: Address
  blockNumber: string
  blockTime: string
  licenseTemplate: Address
  licenseTermsId: string
  licenseTokenId: string
  transactionHash: string
  transactionIndex: string
}

export type License = {
  id: string
  licensorIpId: Address
  licenseTemplate: string
  licenseTermsId: string
  transferable: boolean
  owner: Address
  mintedAt: string
  expiresAt: string
  burntAt: string
  blockNumber: string
  blockTime: string
}

export type PILTerms = {
  commercialAttribution: boolean
  commercialRevenueCelling: number
  commercialRevenueShare: number
  commercialUse: boolean
  commercializerCheck: Address
  currency: Address
  derivativesAllowed: boolean
  derivativesApproval: boolean
  derivativesAttribution: boolean
  derivativesReciprocal: boolean
  derivativesRevenueCelling: number
  expiration: string
  uRI: string
}

export type IPLicenseTerms = {
  id: string
  ipId: Address
  licenseTemplate: string
  licenseTermsId: string
  blockNumber: string
  blockTime: string
}

export type RoyaltyPolicy = {
  id: Address
  ipRoyaltyVault: Address
  splitClone: Address
  royaltyStack: string
  targetAncestors: Address[]
  targetRoyaltyAmount: string[]
  blockNumber: string
  blockTimestamp: string
}

export interface Trait {
  trait_type: string
  value: string | number
  max_value?: number
}

export type LicenseTerms = {
  id: string
  // json: string
  licenseTerms: Trait[]
  licenseTemplate: Address
  blockNumber: string
  blockTime: string
}

export type LicenseToken = {
  id: string
  licensorIpId: Address
  licenseTemplate: Address
  licenseTermsId: string
  transferable: boolean
  owner: Address
  mintedAt: string
  expiresAt: string
  burntAt: string
  blockNumber: string
  blockTime: string
}

export type LicenseTemplate = {
  id: string
  name: string
  metadataUri: string
  blockNumber: string
  blockTime: string
}

export type SocialMedia = {
  platform?: string
  url?: string
}

export type Creator = {
  name?: string
  address?: Address
  description?: string
  contributionPercent?: number
  socialMedia?: SocialMedia[]
}

export interface IPMetadata {
  title?: string
  description?: string
  ipType?: string
  creators?: Creator[]
  appInfo?: {
    id?: string
    name?: string
    website?: string
  }[]
  relationships?: {
    parentIpId?: Address
    type?: string
  }[]
  robotTerms?: {
    userAgent?: string
    allow?: string
  }
  [key: string]: any
}

export interface AssetMetadata {
  id: Address
  metadataHash: string
  metadataUri: string
  metadataJson: IPMetadata
  nftMetadataHash: string
  nftTokenUri: string
  registrationDate: string
}

// TODO: PILTerms is pending an api update
// on-chain PIL terms, for reference
// PILTerms({
//   transferable: true,
//   royaltyPolicy: zeroAddress,
//   mintingFee: 0,
//   expiration: 0,
//   commercialUse: false,
//   commercialAttribution: false,
//   commercializerChecker: zeroAddress,
//   commercializerCheckerData: EMPTY_BYTES,
//   commercialRevShare: 0,
//   commercialRevCelling: 0,
//   derivativesAllowed: true,
//   derivativesAttribution: true,
//   derivativesApproval: false,
//   derivativesReciprocal: true,
//   derivativeRevCelling: 0,
//   currency: zeroAddress,
//   uri: ''
// })

/*
 ** the following types are not used in the current codebase (v0) so
 ** have been commented out to avoid cluttering autocompleted imports
 ** for storykit users
 */

// export type LicenseTermsFramework = {
//   id: string
//   name: string
//   metadataUri: string
//   blockNumber: string
//   blockTime: string
// }

// export type Module = {
//   id: string
//   name: string
//   module: string
//   blockNumber: string
//   blockTimestamp: string
//   deletedAt: string
// }

// export type Transaction = {
//   id: string
//   createdAt: string
//   actionType: string
//   initiator: Address
//   ipId: Address
//   resourceId: Address
//   resourceType: string
// }

// export type Permission = {
//   id: string
//   permission: string
//   signer: Address
//   to: Address
//   func: string
//   blockNumber: string
//   blockTimestamp: string
// }

// export type Tag = {
//   id: string
//   uuid: string
//   ipId: Address
//   tag: string
//   deletedAt: string
//   blockNumber: string
//   blockTimestamp: string
// }

// export type RoyaltyPay = {
//   id: string
//   receiverIpId: Address
//   payerIpId: Address
//   sender: Address
//   token: Address
//   amount: string
//   blockNumber: string
//   blockTimestamp: string
// }

// export type Royalty = {
//   id: string
//   ipId: Address
//   data: string
//   royaltyPolicy: Address
//   blockNumber: string
//   blockTimestamp: string
// }

// export type Dispute = {
//   id: string
//   targetIpId: Address
//   targetTag: Address
//   currentTag: Address
//   arbitrationPolicy: Address
//   evidenceLink: string
//   initiator: Address
//   data: string
//   blockNumber: string
//   blockTimestamp: string
// }

// export type Collection = {
//   id: string
//   assetCount: string
//   licensesCount: string
//   resolvedDisputeCount: string
//   cancelledDisputeCount: string
//   raisedDisputeCount: string
//   judgedDisputeCount: string
//   blockNumber: string
//   blockTimestamp: string
// }

// export type RoyaltySplit = {
//   id: Address
//   holders: RoyaltyHolder[]
//   claimFromIPPoolArg: string
// }

// export type RoyaltyHolder = {
//   id: Address
//   ownership: string
// }
