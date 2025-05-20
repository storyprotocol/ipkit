import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { RoyaltyPaymentsOptions, RoyaltyPaymentsResponse, getRoyaltyPayments } from "../lib/api/getRoyaltyPayments"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPaymentsOptions = {
  options?: RoyaltyPaymentsOptions
  queryOptions?: IpQueryOptions
}

export function useRoyaltyPayments({ options, queryOptions }: UseRoyaltyPaymentsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPayments", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPayments({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPaymentsResponse>
}
