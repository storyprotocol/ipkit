import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { RoyaltyPaymentData, getRoyaltyPayment } from "../lib/api/getRoyaltyPayment"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPaymentQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseRoyaltyPaymentOptions = {
  royaltyPayId: Address
  queryOptions?: UseRoyaltyPaymentQueryOptions
}

export function useRoyaltyPayment({ royaltyPayId, queryOptions }: UseRoyaltyPaymentOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPayment", royaltyPayId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPayment({ royaltyPayId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPaymentData>
}
