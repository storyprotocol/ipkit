import { IPTransaction, IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getTransactions } from "../lib/api/getTransactions"
import { useIpKit } from "../providers/IpKitProvider"

export type UseTransactionOptions = {
  txHash: Address
  queryOptions?: IpQueryOptions
}

export function useTransaction({ txHash, queryOptions }: UseTransactionOptions): UseQueryResult<IPTransaction | null> {
  const { apiKey, apiClient, chain } = useIpKit()

  return useQuery({
    queryKey: [chain.id, "getTransactions", txHash],
    queryFn: async () => {
      const { data, error } = await getTransactions({ txHashes: [txHash], apiKey, apiClient })
      if (error) throw error
      return data?.data?.[0] || null
    },
    enabled: !!txHash?.length,
    ...queryOptions,
  })
}
