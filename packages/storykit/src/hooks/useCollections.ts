import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { CollectionsOptions, CollectionsResponse, getCollections } from "../lib/api/getCollections"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionsOptions = {
  collectionAddresses?: Address[]
  options?: CollectionsOptions
  queryOptions?: IpQueryOptions
}

export function useCollections({ collectionAddresses, options, queryOptions }: UseCollectionsOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollections", collectionAddresses, options],
    queryFn: async () => {
      const { data, error } = await getCollections({ collectionAddresses, options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionsResponse>
}
