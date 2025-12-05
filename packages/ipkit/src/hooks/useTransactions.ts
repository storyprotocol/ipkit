import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { TransactionsOptions, TransactionsResponse, getTransactions } from "../lib/api/getTransactions"
import { useIpKit } from "../providers/IpKitProvider"

export type UseTransactionsOptions = {
  txHashes?: Address[]
  ipIds?: Address[]
  initiators?: Address[]
  eventTypes?: string[]
  options?: TransactionsOptions
  queryOptions?: IpQueryOptions
}

// List of event types to filter by. Available event types:
// - "IPRegistered": When an IP asset is registered
// - "LicenseTermsAttached": When license terms are attached to an IP asset
// - "DerivativeRegistered": When a derivative IP asset is registered
// - "DisputeRaised": When a dispute is raised against an IP asset
// - "DisputeResolved": When a dispute is resolved
// - "DisputeCancelled": When a dispute is cancelled
// - "DisputeJudgementSet": When a judgement is set for a dispute
// - "RoyaltyPaid": When royalty payments are made

export function useTransactions({
  txHashes,
  ipIds,
  initiators,
  eventTypes,
  options,
  queryOptions,
}: UseTransactionsOptions = {}): UseQueryResult<TransactionsResponse> {
  const { apiKey, apiClient, chain } = useIpKit()

  return useQuery({
    queryKey: [chain.id, "getTransactions", txHashes, ipIds, initiators, eventTypes, options],
    queryFn: async () => {
      const { data, error } = await getTransactions({
        txHashes,
        ipIds,
        initiators,
        eventTypes,
        options,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  })
}
