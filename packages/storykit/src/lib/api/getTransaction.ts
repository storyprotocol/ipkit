import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type TransactionResponse =
  paths["/api/v3/transactions/{trxId}"]["get"]["responses"][200]["content"]["application/json"]
export type TransactionOptions = paths["/api/v3/transactions/{trxId}"]["options"]

export type GetTransactionOptions = {
  apiClient: ApiClient
  trxId: string
  chainName: string
  apiKey: string
}

export function getTransaction({ apiClient, trxId, chainName, apiKey }: GetTransactionOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/transactions/{trxId}",
    pathParams: { trxId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionResponse, TransactionOptions, "application/json">>
}
