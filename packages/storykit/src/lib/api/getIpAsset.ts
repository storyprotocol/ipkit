import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type IpAssetResponse = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetOptions = paths["/api/v3/assets/{assetId}"]["options"]

export type GetIpAssetOptions = {
  client?: ApiClient
  ipId: string
  chainName: string
  apiKey: string
}

export function getIpAsset({ client, ipId, chainName, apiKey }: GetIpAssetOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetResponse, IpAssetOptions, "application/json">>
}
