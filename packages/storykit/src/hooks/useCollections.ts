import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { CollectionsOptions, CollectionsResponse, getCollections } from "../lib/api/getCollections"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionsOptions = {
  options?: Partial<CollectionsOptions>
  queryOptions?: IpQueryOptions
}

export function useCollections({ options, queryOptions }: UseCollectionsOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollections", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getCollections({ options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionsResponse>
}
