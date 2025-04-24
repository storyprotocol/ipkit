import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { RoyaltyPaysData, RoyaltyPaysOptions, getRoyaltyPays } from "../lib/api/getRoyaltyPays"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseRoyaltyPaysQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseRoyaltyPaysOptions = {
  options?: RoyaltyPaysOptions
  queryOptions?: UseRoyaltyPaysQueryOptions
}

export function useRoyaltyPays({ options, queryOptions }: UseRoyaltyPaysOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getRoyaltyPays", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getRoyaltyPays({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<RoyaltyPaysData>
}
