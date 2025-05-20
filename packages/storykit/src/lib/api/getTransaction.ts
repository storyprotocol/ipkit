import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type TransactionResponse =
  paths["/api/v3/transactions/{trxId}"]["get"]["responses"][200]["content"]["application/json"]
export type TransactionOptions = paths["/api/v3/transactions/{trxId}"]["options"]

export type GetTransactionOptions = {
  client?: ApiClient
  trxId: string
  chainName: string
  apiKey: string
}

export function getTransaction({ client, trxId, chainName, apiKey }: GetTransactionOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/transactions/{trxId}",
    pathParams: { trxId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionResponse, TransactionOptions, "application/json">>
}
