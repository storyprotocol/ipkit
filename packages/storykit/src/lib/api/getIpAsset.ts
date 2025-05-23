import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type IpAssetResponse = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetOptions = paths["/api/v3/assets/{assetId}"]["options"]

export type GetIpAssetOptions = {
  apiClient: ApiClient
  ipId: string
  chainName: string
  apiKey: string
}

export function getIpAsset({ apiClient, ipId, chainName, apiKey }: GetIpAssetOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetResponse, IpAssetOptions, "application/json">>
}
