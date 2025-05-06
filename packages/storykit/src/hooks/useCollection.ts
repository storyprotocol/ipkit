import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { CollectionData, getCollection } from "../lib/api/getCollection"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseCollectionOptions = {
  collectionId: Address
  queryOptions?: UseCollectionQueryOptions
}

export function useCollection({ collectionId, queryOptions }: UseCollectionOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollection", collectionId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getCollection({ collectionId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<CollectionData>
}
