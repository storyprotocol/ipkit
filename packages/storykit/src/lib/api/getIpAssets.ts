import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type IpAssetsData = paths["/api/v3/assets"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetsOptions = paths["/api/v3/assets"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpAssetOptions = {
  ipIds?: Address[] // ipIds from options added here for convenience
  options?: IpAssetsOptions
  chainName: string
  apiKey: string
}

export function getIpAssets({ ipIds, options, chainName, apiKey }: GetIpAssetOptions) {
  return listQuery({
    path: "/api/v3/assets",
    body: { options: { ...options, ...(ipIds ? { ipAssetIds: ipIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetsData, IpAssetsOptions, "application/json">>
}
