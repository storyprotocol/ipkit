import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type TransactionsResponse = paths["/transactions"]["post"]["responses"][200]["content"]["application/json"]

export type TransactionsOptions = Partial<paths["/transactions"]["post"]["requestBody"]["content"]["application/json"]>

export type GetTransactionsOptions = {
  apiClient: ApiClient
  txHashes?: Address[]
  ipIds?: Address[]
  initiators?: Address[]
  eventTypes?: string[]
  options?: TransactionsOptions
  apiKey: string
}

export function getTransactions({
  apiClient,
  txHashes,
  ipIds,
  initiators,
  eventTypes,
  options,
  apiKey,
}: GetTransactionsOptions) {
  return listQuery({
    apiClient,
    path: "/transactions",
    body: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      ...options,
      where: {
        ...options?.where,
        ...(txHashes ? { txHashes } : {}),
        ...(ipIds ? { ipIds } : {}),
        ...(initiators ? { initiators } : {}),
        ...(eventTypes ? { eventTypes } : {}),
      },
    },
    apiKey,
  })
}
