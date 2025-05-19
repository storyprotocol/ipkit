import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type IpAssetMetadataResponse =
  paths["/api/v3/assets/{assetId}/metadata"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetMetadataOptions = paths["/api/v3/assets/{assetId}/metadata"]["options"]

export function getIpAssetMetadata({ ipId, chainName, apiKey }: { ipId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/assets/{assetId}/metadata",
    pathParams: { assetId: ipId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetMetadataResponse, IpAssetMetadataOptions, "application/json">>
}
