import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpAssetsTermsResponse =
  paths["/api/v3/licenses/ip/terms"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetsTermsOptions =
  paths["/api/v3/licenses/ip/terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpAssetsTermsOptions = {
  apiClient: ApiClient
  ipIds?: Address[] // ipIds from options added here for convenience
  options?: IpAssetsTermsOptions
  chainName: string
  apiKey: string
}

export function getIpAssetsTerms({ apiClient, ipIds, options, chainName, apiKey }: GetIpAssetsTermsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/licenses/ip/terms",
    body: { options: { ...options, ...(ipIds ? { ipAssetIds: ipIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetsTermsResponse, IpAssetsTermsOptions, "application/json">>
}
