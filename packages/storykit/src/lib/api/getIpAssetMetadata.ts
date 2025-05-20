import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type IpAssetMetadataResponse =
  paths["/api/v3/assets/{assetId}/metadata"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetMetadataOptions = paths["/api/v3/assets/{assetId}/metadata"]["options"]

export type GetIpAssetMetadataOptions = {
  client?: ApiClient
  ipId: string
  chainName: string
  apiKey: string
}

export function getIpAssetMetadata({ client, ipId, chainName, apiKey }: GetIpAssetMetadataOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/assets/{assetId}/metadata",
    pathParams: { assetId: ipId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetMetadataResponse, IpAssetMetadataOptions, "application/json">>
}
