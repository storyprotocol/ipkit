import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpAssetsResponse = paths["/api/v3/assets"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetsOptions = paths["/api/v3/assets"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpAssetsOptions = {
  apiClient: ApiClient
  ipIds?: Address[] // ipIds from options added here for convenience
  options?: IpAssetsOptions
  chainName: string
  apiKey: string
}

export function getIpAssets({ apiClient, ipIds, options, chainName, apiKey }: GetIpAssetsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/assets",
    body: { options: { ...options, ...(ipIds ? { ipAssetIds: ipIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetsResponse, IpAssetsOptions, "application/json">>
}
