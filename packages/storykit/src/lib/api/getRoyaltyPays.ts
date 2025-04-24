import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type RoyaltyPaysData =
  paths["/api/v3/royalties/payments"]["post"]["responses"][200]["content"]["application/json"]
export type RoyaltyPaysOptions =
  paths["/api/v3/royalties/payments"]["post"]["requestBody"]["content"]["application/json"]

export function getRoyaltyPays({
  options,
  chainName,
  apiKey,
}: {
  options?: RoyaltyPaysOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/royalties/payments",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<RoyaltyPaysData, RoyaltyPaysOptions, "application/json">>
}
