import { IPTransaction, IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getTransactions } from "../lib/api/getTransactions"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseTransactionOptions = {
  txHash: Address
  queryOptions?: IpQueryOptions
}

export function useTransaction({ txHash, queryOptions }: UseTransactionOptions) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getTransactions", txHash],
    queryFn: async () => {
      const { data, error } = await getTransactions({ txHashes: [txHash], apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0] || null
    },
    enabled: !!txHash.length,
    ...queryOptions,
  }) as UseQueryResult<IPTransaction>
}
