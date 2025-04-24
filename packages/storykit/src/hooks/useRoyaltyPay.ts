import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { RoyaltyPayData, getRoyaltyPay } from "../lib/api/getRoyaltyPay"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPayQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseRoyaltyPayOptions = {
  royaltyPayId: string
  queryOptions?: UseRoyaltyPayQueryOptions
}

export function useRoyaltyPay({ royaltyPayId, queryOptions }: UseRoyaltyPayOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPay", royaltyPayId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPay({ royaltyPayId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPayData>
}
