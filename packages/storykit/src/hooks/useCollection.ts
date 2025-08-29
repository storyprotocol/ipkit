import { IpQueryOptions } from "@/types/openapi"
import { Collection } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getCollections } from "../lib/api/getCollections"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseCollectionOptions = {
  collectionAddress: Address
  queryOptions?: IpQueryOptions
}

export function useCollection({ collectionAddress, queryOptions }: UseCollectionOptions) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getCollection", collectionAddress],
    queryFn: async () => {
      const { data, error } = await getCollections({ collectionAddresses: [collectionAddress], apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0] || null
    },
    enabled: !!collectionAddress.length,
    ...queryOptions,
  }) as UseQueryResult<Collection>
}
