import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type IpAssetTermsResponse =
  paths["/api/v3/licenses/ip/terms/{ipId}"]["get"]["responses"][200]["content"]["application/json"]

export type IpAssetTermsOptions = paths["/api/v3/licenses/ip/terms/{ipId}"]["options"]

export type GetIpAssetTermsOptions = {
  client?: ApiClient
  ipId: string
  chainName: string
  apiKey: string
}

export function getIpAssetTerms({ client, ipId, chainName, apiKey }: GetIpAssetTermsOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/ip/terms/{ipId}",
    pathParams: { ipId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetTermsResponse, IpAssetTermsOptions, "application/json">>
}
