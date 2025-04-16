import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type IpAssetData = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetOptions = paths["/api/v3/assets/{assetId}"]["options"]

export function getIpAsset({ ipId, chainName, apiKey }: { ipId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetData, IpAssetOptions, "application/json">>
}
