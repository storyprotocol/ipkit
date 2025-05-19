import { STORYKIT_SUPPORTED_CHAIN } from "@/types/chains"
import { Address, Hash } from "viem"

export enum RESOURCE_TYPE {
  LICENSE = "licenses/tokens",
  ROYALTY = "royalties",
  ROYALTY_POLICY = "royalties/policies",
}

export type ResourceType = RESOURCE_TYPE.LICENSE | RESOURCE_TYPE.ROYALTY | RESOURCE_TYPE.ROYALTY_POLICY

export type PaginationOptions = {
  limit?: number
  offset?: number
}

export type AssetFilterOptions = {
  chainId?: string
  metadataResolverAddress?: string
  tokenContract?: string
  tokenId?: string
}

export type AssetEdgesFilterOptions = {
  ipId?: string
  parentIpId?: string
}

export type LicenseTermsFilterOptions = {
  licenseTemplate?: string
}

export type RoyaltyFilterOptions = {
  ipId?: string | null
  royaltyPolicy?: string | null
}

export type LicenseFilterOptions = {
  licensorIpId?: Address
  policyId?: string
  transferable?: boolean
}

export type IPLicenseTermsFilterOptions = {
  ipId: string
  licenseTemplate: string
  licenseTermsID: string
}

export type FilterOptions =
  | AssetFilterOptions
  | AssetEdgesFilterOptions
  | LicenseTermsFilterOptions
  | RoyaltyFilterOptions
  | LicenseFilterOptions
  | IPLicenseTermsFilterOptions

export type QueryOptions = {
  chain?: STORYKIT_SUPPORTED_CHAIN
  pagination?: PaginationOptions
  where?: FilterOptions
  ipAssetIds?: Hash[]
  orderBy?: "blockNumber" | "blockTimestamp"
  orderDirection?: "desc" | "asc"
}
