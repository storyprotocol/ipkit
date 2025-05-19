import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { DisputeResponse, getDispute } from "../lib/api/getDispute"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputeQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseDisputeOptions = {
  disputeId: string
  queryOptions?: UseDisputeQueryOptions
}

export function useDispute({ disputeId, queryOptions }: UseDisputeOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDispute", disputeId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDispute({ disputeId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DisputeResponse>
}
