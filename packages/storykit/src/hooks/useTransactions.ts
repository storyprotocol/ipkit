import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { TransactionsOptions, TransactionsResponse, getTransactions } from "../lib/api/getTransactions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseTransactionsOptions = {
  options?: TransactionsOptions
  queryOptions?: UseTransactionsQueryOptions
}

export function useTransactions({ options, queryOptions }: UseTransactionsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransactions", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getTransactions({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<TransactionsResponse>
}
