import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { SearchResponse, getSearch } from "../lib/api/getSearch"
import { useIpKit } from "../providers/IpKitProvider"

export type UseSearchOptions = {
  query: string
  mediaType?: "audio" | "video" | "image"
  queryOptions?: IpQueryOptions
}

export function useSearch({ query, mediaType, queryOptions }: UseSearchOptions): UseQueryResult<SearchResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getSearch", query, mediaType],
    queryFn: async () => {
      const { data, error } = await getSearch({
        query,
        mediaType,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    enabled: !!query?.length,
    ...queryOptions,
  })
}
