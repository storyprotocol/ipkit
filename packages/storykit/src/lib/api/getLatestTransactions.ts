import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type LatestTransactionsData =
  paths["/api/v3/transactions/latest"]["post"]["responses"][200]["content"]["application/json"]
export type LatestTransactionsOptions =
  paths["/api/v3/transactions/latest"]["post"]["requestBody"]["content"]["application/json"]

export function getLatestTransactions({
  options,
  chainName,
  apiKey,
}: {
  options?: LatestTransactionsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/transactions/latest",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LatestTransactionsData, LatestTransactionsOptions, "application/json">>
}
