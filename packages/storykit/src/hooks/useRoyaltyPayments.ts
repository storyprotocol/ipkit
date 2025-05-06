import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { RoyaltyPaymentsData, RoyaltyPaymentsOptions, getRoyaltyPayments } from "../lib/api/getRoyaltyPayments"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPaymentsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseRoyaltyPaymentsOptions = {
  options?: RoyaltyPaymentsOptions
  queryOptions?: UseRoyaltyPaymentsQueryOptions
}

export function useRoyaltyPayments({ options, queryOptions }: UseRoyaltyPaymentsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPayments", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPayments({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPaymentsData>
}
