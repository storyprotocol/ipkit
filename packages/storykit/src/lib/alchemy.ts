import { STORY_AENEID } from "@/constants/chains"
import { CollectionMetadata, NFTMetadata, NFTMetadataBatchResponse, NFTWalletResponse } from "@/types/alchemy"
import { Address } from "viem"

export type NFT = {
  contractAddress: Address
  tokenId: string
}

type GetNFTByTokenIdOptions = {
  contractAddress: Address
  tokenId: string
  chainName: string
  apiKey: string
}

export const getNFTByTokenId = async ({
  contractAddress,
  tokenId,
  chainName = STORY_AENEID.alchemyId,
  apiKey,
}: GetNFTByTokenIdOptions): Promise<NFTMetadata> => {
  const url = `https://${chainName}.g.alchemy.com/nft/v3/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`
  const response = await fetch(url, { method: "GET" })
  const data = await response.json()
  return data
}

type GetNFTByTokenIdsOptions = {
  nfts: NFT[]
  chainName: string
  apiKey: string
}

// Note: This function only takes up to 200 NFTs at a time
export const getNFTByTokenIds = async ({
  nfts,
  chainName = STORY_AENEID.alchemyId,
  apiKey,
}: GetNFTByTokenIdsOptions): Promise<NFTMetadataBatchResponse> => {
  const url = `https://${chainName}.g.alchemy.com/nft/v3/${apiKey}/getNFTMetadataBatch`
  const options = {
    method: "POST",
    body: JSON.stringify({
      tokens: nfts.map((nft) => {
        return {
          ...nft,
          tokenType: "ERC721",
        }
      }),
    }),
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

type GetCollectionByAddressOptions = {
  contractAddress: Address
  chainName: string
  apiKey: string
}

export const getCollectionByAddress = async ({
  contractAddress,
  chainName = STORY_AENEID.alchemyId,
  apiKey,
}: GetCollectionByAddressOptions): Promise<CollectionMetadata> => {
  const url = `https://${chainName}.g.alchemy.com/nft/v3/${apiKey}/getContractMetadata?contractAddress=${contractAddress}`
  const response = await fetch(url, { method: "GET" })
  const data = await response.json()
  return data
}

export enum ExlcludeFilters {
  SPAM = "SPAM",
  AIRDROPS = "AIRDROPS",
}

export enum SpanConfidence {
  VERY_HIGH = "VERY_HIGH",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

export type WalletNFTRequest = {
  owner: Address
  contractAddresses?: Address[]
  withMetadata?: boolean // include metadata, defaults true
  excludeFilters?: ExlcludeFilters[] // exclude spam, airdrops
  includeFilters?: ExlcludeFilters[]
  spamConfidenceLevel?: SpanConfidence
  tokenUriTimeoutInMs?: number // timeout for fetching metadata
  pageKey?: string
  pageSize?: number // default 100, max 100
}

type GetNFTByWalletOptions = {
  options: WalletNFTRequest
  chainName: string
  apiKey: string
}

export const getNFTByWallet = async ({
  options,
  chainName = STORY_AENEID.alchemyId,
  apiKey,
}: GetNFTByWalletOptions): Promise<NFTWalletResponse> => {
  const baseUrl = `https://${chainName}.g.alchemy.com/nft/v3/${apiKey}/getNFTsForOwner`
  const params = new URLSearchParams({ owner: options.owner })

  const {
    contractAddresses,
    withMetadata,
    excludeFilters,
    includeFilters,
    spamConfidenceLevel,
    tokenUriTimeoutInMs,
    pageKey,
    pageSize,
  } = options

  // Handle array parameters
  const arrayParams = {
    "contractAddresses[]": contractAddresses,
    "excludeFilters[]": excludeFilters,
    "includeFilters[]": includeFilters,
  }

  Object.entries(arrayParams).forEach(([key, values]) => {
    values?.forEach((value) => params.append(key, value))
  })

  // Handle scalar parameters
  const scalarParams = {
    withMetadata,
    spamConfidenceLevel,
    tokenUriTimeoutInMs,
    pageKey,
    pageSize,
  }

  Object.entries(scalarParams).forEach(([key, value]) => {
    if (value !== undefined) {
      params.append(key, value.toString())
    }
  })

  const url = `${baseUrl}?${params.toString()}`
  const response = await fetch(url, { method: "GET" })
  const data = await response.json()
  return data
}
