import { NFT, getNFTByTokenIds } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers/StoryKitProvider"
import { NFTMetadata, NFTMetadataBatchResponse } from "@/types/alchemy"
import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

export type UseNFTByTokenIdsOptions = {
  nfts: NFT[]
  queryOptions?: IpQueryOptions
}

export function useNFTByTokenIds({ nfts, queryOptions }: UseNFTByTokenIdsOptions) {
  const { chain, alchemyApiKey } = useStoryKitContext()

  if (!alchemyApiKey) {
    throw new Error("Alchemy API key is not set. Please set it in the StoryKitProvider")
  }

  return useQuery({
    queryKey: ["getNFTByTokenIds", nfts, chain.alchemyId],
    queryFn: async () => {
      const data = await getNFTByTokenIds({
        nfts,
        chainName: chain.alchemyId,
        apiKey: alchemyApiKey,
      })
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<NFTMetadataBatchResponse>
}
