import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { DisputesOptions, DisputesResponse, getDisputes } from "../lib/api/getDisputes"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputesOptions = {
  options?: DisputesOptions
  queryOptions?: IpQueryOptions
}

export function useDisputes({ options, queryOptions }: UseDisputesOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDisputes", options],
    queryFn: async () => {
      const { data, error } = await getDisputes({ options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DisputesResponse>
}
