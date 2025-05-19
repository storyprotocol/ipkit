import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type TransactionsResponse =
  paths["/api/v3/transactions"]["post"]["responses"][200]["content"]["application/json"]

export type TransactionsOptions =
  paths["/api/v3/transactions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetTransactionsOptions = {
  options?: TransactionsOptions
  chainName: string
  apiKey: string
}

export function getTransactions({ options, chainName, apiKey }: GetTransactionsOptions) {
  return listQuery({
    path: "/api/v3/transactions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionsResponse, TransactionsOptions, "application/json">>
}
