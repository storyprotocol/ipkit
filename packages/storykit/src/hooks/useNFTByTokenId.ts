import { getNFTByTokenId } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers/StoryKitProvider"
import { NFTMetadata } from "@/types/alchemy"
import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

export type UseNFTByTokenIdOptions = {
  contractAddress: Address
  tokenId: string
  queryOptions?: IpQueryOptions
}

export function useNFTByTokenId({ contractAddress, tokenId, queryOptions }: UseNFTByTokenIdOptions) {
  const { chain, alchemyApiKey } = useStoryKitContext()

  if (!alchemyApiKey) {
    throw new Error("Alchemy API key is not set. Please set it in the StoryKitProvider")
  }

  return useQuery({
    queryKey: ["getNFTByTokenId", contractAddress, tokenId, chain.alchemyId],
    queryFn: async () => {
      const data = await getNFTByTokenId({
        contractAddress,
        tokenId,
        chainName: chain.alchemyId,
        apiKey: alchemyApiKey,
      })
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<NFTMetadata>
}
