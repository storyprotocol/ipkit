import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type TransactionsResponse =
  paths["/api/v3/transactions"]["post"]["responses"][200]["content"]["application/json"]

export type TransactionsOptions =
  paths["/api/v3/transactions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetTransactionsOptions = {
  apiClient: ApiClient
  options?: TransactionsOptions
  chainName: string
  apiKey: string
}

export function getTransactions({ apiClient, options, chainName, apiKey }: GetTransactionsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/transactions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionsResponse, TransactionsOptions, "application/json">>
}
