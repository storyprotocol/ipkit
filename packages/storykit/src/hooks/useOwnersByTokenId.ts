import { getOwnersByTokenId } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers/StoryKitProvider"
import { OwnersByTokenIdResponse } from "@/types/alchemy"
import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

export type UseOwnersByTokenIdOptions = {
  contractAddress: Address
  tokenId: string
  queryOptions?: IpQueryOptions
}

export function useOwnersByTokenId({ contractAddress, tokenId, queryOptions }: UseOwnersByTokenIdOptions) {
  const { chain, alchemyApiKey } = useStoryKitContext()

  if (!alchemyApiKey) {
    throw new Error("Alchemy API key is not set. Please set it in the StoryKitProvider")
  }

  return useQuery({
    queryKey: ["getOwnersByTokenId", contractAddress, tokenId, chain.alchemyId],
    queryFn: async () => {
      const data = await getOwnersByTokenId({
        contractAddress,
        tokenId,
        chainName: chain.alchemyId,
        apiKey: alchemyApiKey,
      })
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<OwnersByTokenIdResponse>
}
