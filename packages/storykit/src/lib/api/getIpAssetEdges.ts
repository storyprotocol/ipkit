import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpAssetEdgesResponse =
  paths["/api/v3/assets/edges"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetEdgesOptions =
  paths["/api/v3/assets/edges"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpAssetEdgesOptions = {
  apiClient: ApiClient
  ipId?: Address
  parentIpId?: Address
  options?: IpAssetEdgesOptions
  chainName: string
  apiKey: string
}

export function getIpAssetEdges({ apiClient, ipId, parentIpId, options, chainName, apiKey }: GetIpAssetEdgesOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/assets/edges",
    body: {
      options: {
        ...options,
        where: {
          ...options?.where,
          ...(ipId ? { ipId } : {}),
          ...(parentIpId ? { parentIpId } : {}),
        },
      },
    },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetEdgesResponse, IpAssetEdgesOptions, "application/json">>
}
