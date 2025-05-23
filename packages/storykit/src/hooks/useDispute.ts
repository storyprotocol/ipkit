import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { DisputeResponse, getDispute } from "../lib/api/getDispute"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputeOptions = {
  disputeId: string
  queryOptions?: IpQueryOptions
}

export function useDispute({ disputeId, queryOptions }: UseDisputeOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDispute", disputeId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDispute({ disputeId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DisputeResponse>
}
