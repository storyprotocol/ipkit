import { Dispute, IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { getDispute } from "../lib/api/getDispute"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputeOptions = {
  disputeId: string
  queryOptions?: IpQueryOptions
}

export function useDispute({ disputeId, queryOptions }: UseDisputeOptions) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDispute", disputeId],
    queryFn: async () => {
      const { data, error } = await getDispute({ disputeId, apiKey, apiClient })
      if (error) throw error
      return data?.data || null
    },
    enabled: !!disputeId.length,
    ...queryOptions,
  }) as UseQueryResult<Dispute>
}
