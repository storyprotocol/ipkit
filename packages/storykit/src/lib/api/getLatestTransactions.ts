import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LatestTransactionsResponse =
  paths["/api/v3/transactions/latest"]["post"]["responses"][200]["content"]["application/json"]

export type LatestTransactionsOptions =
  paths["/api/v3/transactions/latest"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLatestTransactionsOptions = {
  client?: ApiClient
  options?: LatestTransactionsOptions
  chainName: string
  apiKey: string
}

export function getLatestTransactions({ client, options, chainName, apiKey }: GetLatestTransactionsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/transactions/latest",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LatestTransactionsResponse, LatestTransactionsOptions, "application/json">>
}
