import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type RoyaltyPayData =
  paths["/api/v3/royalties/payments/{royaltyPayId}"]["get"]["responses"][200]["content"]["application/json"]
export type RoyaltyPayOptions = paths["/api/v3/royalties/payments/{royaltyPayId}"]["options"]

export function getRoyaltyPay({
  royaltyPayId,
  chainName,
  apiKey,
}: {
  royaltyPayId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/royalties/payments/{royaltyPayId}",
    pathParams: { royaltyPayId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<RoyaltyPayData, RoyaltyPayOptions, "application/json">>
}
