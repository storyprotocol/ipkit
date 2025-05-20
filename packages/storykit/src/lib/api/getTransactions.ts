import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type TransactionsResponse =
  paths["/api/v3/transactions"]["post"]["responses"][200]["content"]["application/json"]

export type TransactionsOptions =
  paths["/api/v3/transactions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetTransactionsOptions = {
  client?: ApiClient
  options?: TransactionsOptions
  chainName: string
  apiKey: string
}

export function getTransactions({ client, options, chainName, apiKey }: GetTransactionsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/transactions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionsResponse, TransactionsOptions, "application/json">>
}
