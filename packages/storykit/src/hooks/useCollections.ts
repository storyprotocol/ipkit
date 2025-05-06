import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { CollectionsData, CollectionsOptions, getCollections } from "../lib/api/getCollections"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseCollectionsOptions = {
  options?: CollectionsOptions
  queryOptions?: UseCollectionsQueryOptions
}

export function useCollections({ options, queryOptions }: UseCollectionsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollections", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getCollections({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionsData>
}
