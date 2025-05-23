import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type IpAssetMetadataResponse =
  paths["/api/v3/assets/{assetId}/metadata"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetMetadataOptions = paths["/api/v3/assets/{assetId}/metadata"]["options"]

export type GetIpAssetMetadataOptions = {
  apiClient: ApiClient
  ipId: string
  chainName: string
  apiKey: string
}

export function getIpAssetMetadata({ apiClient, ipId, chainName, apiKey }: GetIpAssetMetadataOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/assets/{assetId}/metadata",
    pathParams: { assetId: ipId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetMetadataResponse, IpAssetMetadataOptions, "application/json">>
}
