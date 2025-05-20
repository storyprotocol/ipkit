import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type RoyaltyPaymentResponse =
  paths["/api/v3/royalties/payments/{royaltyPayId}"]["get"]["responses"][200]["content"]["application/json"]

export type GetRoyaltyPaymentOptions = {
  client?: ApiClient
  royaltyPayId: Address
  chainName: string
  apiKey: string
}

export function getRoyaltyPayment({ client, royaltyPayId, chainName, apiKey }: GetRoyaltyPaymentOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/royalties/payments/{royaltyPayId}",
    pathParams: { royaltyPayId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<RoyaltyPaymentResponse, never, "application/json">>
}
