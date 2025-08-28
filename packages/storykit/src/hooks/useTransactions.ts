import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

import { TransactionsOptions, TransactionsResponse, getTransactions } from "../lib/api/getTransactions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionsOptions = {
  options?: Partial<TransactionsOptions>
  queryOptions?: IpQueryOptions
}

export function useTransactions({ options, queryOptions }: UseTransactionsOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransactions", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getTransactions({ options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<TransactionsResponse>
}
