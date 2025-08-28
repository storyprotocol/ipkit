import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type TransactionsResponse = paths["/transactions"]["post"]["responses"][200]["content"]["application/json"]

export type TransactionsOptions = paths["/transactions"]["post"]["requestBody"]["content"]["application/json"]

export type GetTransactionsOptions = {
  apiClient: ApiClient
  txHashes?: Address[]
  options?: Partial<TransactionsOptions>
  apiKey: string
}

export function getTransactions({ apiClient, txHashes, options, apiKey }: GetTransactionsOptions) {
  return listQuery({
    apiClient,
    path: "/transactions",
    body: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      pagination: {
        limit: 10,
        offset: 0,
      },
      ...options,
      where: {
        ...options?.where,
        ...(txHashes ? { txHashes } : {}),
      },
    },
    apiKey,
  })
}
