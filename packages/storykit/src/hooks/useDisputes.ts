import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { DisputesOptions, DisputesResponse, getDisputes } from "../lib/api/getDisputes"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputesOptions = {
  options?: DisputesOptions
  queryOptions?: IpQueryOptions
}

export function useDisputes({ options, queryOptions }: UseDisputesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDisputes", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDisputes({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DisputesResponse>
}
