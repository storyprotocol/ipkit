import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type TransactionsData = paths["/api/v3/transactions"]["post"]["responses"][200]["content"]["application/json"]
export type TransactionsOptions = paths["/api/v3/transactions"]["post"]["requestBody"]["content"]["application/json"]

export function getTransactions({
  options,
  chainName,
  apiKey,
}: {
  options?: TransactionsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/transactions",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionsData, TransactionsOptions, "application/json">>
}
