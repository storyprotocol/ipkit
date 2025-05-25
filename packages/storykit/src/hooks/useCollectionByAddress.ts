import { getCollectionByAddress } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers/StoryKitProvider"
import { CollectionMetadata } from "@/types/alchemy"
import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

export type UseCollectionByAddressOptions = {
  contractAddress: Address
  queryOptions?: IpQueryOptions
}

export function useCollectionByAddress({ contractAddress, queryOptions }: UseCollectionByAddressOptions) {
  const { chain, alchemyApiKey } = useStoryKitContext()

  if (!alchemyApiKey) {
    throw new Error("Alchemy API key is not set. Please set it in the StoryKitProvider")
  }

  return useQuery({
    queryKey: ["getCollectionByAddress", contractAddress, chain.alchemyId],
    queryFn: async () => {
      const data = await getCollectionByAddress({
        contractAddress,
        chainName: chain.alchemyId,
        apiKey: alchemyApiKey,
      })
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionMetadata>
}
