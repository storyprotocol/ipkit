import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type TransactionResponse =
  paths["/api/v3/transactions/{trxId}"]["get"]["responses"][200]["content"]["application/json"]
export type TransactionOptions = paths["/api/v3/transactions/{trxId}"]["options"]

export function getTransaction({ trxId, chainName, apiKey }: { trxId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/transactions/{trxId}",
    pathParams: { trxId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<TransactionResponse, TransactionOptions, "application/json">>
}
