import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { TransactionsOptions, TransactionsResponse, getTransactions } from "../lib/api/getTransactions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionsOptions = {
  txHashes?: Address[]
  ipIds?: Address[]
  initiators?: Address[]
  options?: TransactionsOptions
  queryOptions?: IpQueryOptions
}

export function useTransactions({ txHashes, ipIds, initiators, options, queryOptions }: UseTransactionsOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransactions", txHashes, ipIds, initiators, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getTransactions({ txHashes, ipIds, initiators, options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<TransactionsResponse>
}
