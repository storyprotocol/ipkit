import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import {
  LatestTransactionsData,
  LatestTransactionsOptions,
  getLatestTransactions,
} from "../lib/api/getLatestTransactions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLatestTransactionsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLatestTransactionsOptions = {
  options?: LatestTransactionsOptions
  queryOptions?: UseLatestTransactionsQueryOptions
}

export function useLatestTransactions({ options, queryOptions }: UseLatestTransactionsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLatestTransactions", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLatestTransactions({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LatestTransactionsData>
}
