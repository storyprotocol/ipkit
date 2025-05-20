import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { CollectionResponse, getCollection } from "../lib/api/getCollection"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionOptions = {
  collectionId: Address
  queryOptions?: IpQueryOptions
}

export function useCollection({ collectionId, queryOptions }: UseCollectionOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollection", collectionId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getCollection({ collectionId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionResponse>
}
