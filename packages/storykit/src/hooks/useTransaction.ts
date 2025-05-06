import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { TransactionData, getTransaction } from "../lib/api/getTransaction"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseTransactionOptions = {
  trxId: Address
  queryOptions?: UseTransactionQueryOptions
}

export function useTransaction({ trxId, queryOptions }: UseTransactionOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransaction", trxId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getTransaction({ trxId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<TransactionData>
}
