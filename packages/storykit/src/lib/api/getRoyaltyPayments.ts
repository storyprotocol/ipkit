import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type RoyaltyPaymentsResponse =
  paths["/api/v3/royalties/payments"]["post"]["responses"][200]["content"]["application/json"]

export type RoyaltyPaymentsOptions =
  paths["/api/v3/royalties/payments"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetRoyaltyPaymentsOptions = {
  options?: RoyaltyPaymentsOptions
  chainName: string
  apiKey: string
}

export function getRoyaltyPayments({ options, chainName, apiKey }: GetRoyaltyPaymentsOptions) {
  return listQuery({
    path: "/api/v3/royalties/payments",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<RoyaltyPaymentsResponse, RoyaltyPaymentsOptions, "application/json">>
}
