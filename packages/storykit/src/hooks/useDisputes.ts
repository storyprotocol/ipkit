import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { DisputesData, DisputesOptions, getDisputes } from "../lib/api/getDisputes"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDisputesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseDisputesOptions = {
  disputeIds?: Address[]
  options?: DisputesOptions
  queryOptions?: UseDisputesQueryOptions
}

export function useDisputes({ disputeIds, options, queryOptions }: UseDisputesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDisputes", disputeIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDisputes({ disputeIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DisputesData>
}
