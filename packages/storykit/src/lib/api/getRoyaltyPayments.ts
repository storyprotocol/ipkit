import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type RoyaltyPaymentsResponse =
  paths["/api/v3/royalties/payments"]["post"]["responses"][200]["content"]["application/json"]

export type RoyaltyPaymentsOptions =
  paths["/api/v3/royalties/payments"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetRoyaltyPaymentsOptions = {
  apiClient: ApiClient
  options?: RoyaltyPaymentsOptions
  chainName: string
  apiKey: string
}

export function getRoyaltyPayments({ apiClient, options, chainName, apiKey }: GetRoyaltyPaymentsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/royalties/payments",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<RoyaltyPaymentsResponse, RoyaltyPaymentsOptions, "application/json">>
}
