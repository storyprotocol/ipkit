import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { RoyaltyPaymentResponse, getRoyaltyPayment } from "../lib/api/getRoyaltyPayment"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPaymentOptions = {
  royaltyPayId: Address
  queryOptions?: IpQueryOptions
}

export function useRoyaltyPayment({ royaltyPayId, queryOptions }: UseRoyaltyPaymentOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPayment", royaltyPayId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPayment({ royaltyPayId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPaymentResponse>
}
