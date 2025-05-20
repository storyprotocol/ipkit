import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { TransactionResponse, getTransaction } from "../lib/api/getTransaction"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseTransactionOptions = {
  trxId: Address
  queryOptions?: UseTransactionQueryOptions
}

export function useTransaction({ trxId, queryOptions }: UseTransactionOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransaction", trxId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getTransaction({ trxId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<TransactionResponse>
}
