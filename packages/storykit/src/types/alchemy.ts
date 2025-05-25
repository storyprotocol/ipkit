export type NFTWalletResponse = {
  ownedNfts?: NFTMetadata[]
  totalCount?: number
  pageKey?: string
  validAt?: {
    blockNumber?: number
    blockHash?: string
    blockTimestamp?: string
  }
}

export type CollectionMetadata = {
  address: string
  name: string
  symbol: string
  totalSupply: string
  tokenType: string
  contractDeployer: string
  deployedBlockNumber: number
  openSeaMetadata: {
    floorPrice: number
    collectionName: string
    collectionSlug: string
    safelistRequestStatus: string
    imageUrl: string
    description: string
    externalUrl: string | null
    twitterUsername: string
    discordUrl: string
    bannerImageUrl: string
    lastIngestedAt: string
  }
}

export type NFTMetadata = {
  contract: CollectionMetadata
  tokenId: string
  tokenType: string
  name: string
  description: string | null
  tokenUri: string
  image: {
    cachedUrl: string
    thumbnailUrl: string | null
    pngUrl: string | null
    contentType: string | null
    size: number | null
    originalUrl: string
  }
  animation: {
    cachedUrl: string | null
    contentType: string | null
    size: number | null
    originalUrl: string | null
  }
  raw: {
    tokenUri: string
    metadata: {
      name: string
      image: string
      attributes: {
        value: string
        trait_type: string
      }[]
    }
  }
  collection: {
    name: string
    slug: string
    externalUrl: string | null
    bannerImageUrl: string
  }
  mint: {
    mintAddress: string | null
    blockNumber: number | null
    timestamp: string | null
    transactionHash: string | null
  }
  timeLastUpdated: string
}
