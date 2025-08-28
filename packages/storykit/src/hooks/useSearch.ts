import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { SearchResponse, getSearch } from "../lib/api/getSearch"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseSearchOptions = {
  query: string
  mediaType?: "audio" | "video" | "image"
  queryOptions?: IpQueryOptions
}

export function useSearch({ query, mediaType, queryOptions }: UseSearchOptions) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getSearch", query, mediaType, queryOptions],
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
    enabled: !!query.length,
    ...queryOptions,
  }) as UseQueryResult<SearchResponse>
}
