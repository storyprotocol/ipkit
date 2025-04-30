import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type IpAssetEdgesData = paths["/api/v3/assets/edges"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetEdgesOptions =
  paths["/api/v3/assets/edges"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpAssetEdgesOptions = {
  ipId?: Address
  parentIpId?: Address
  options?: IpAssetEdgesOptions
  chainName: string
  apiKey: string
}

export function getIpAssetEdges({ ipId, parentIpId, options, chainName, apiKey }: GetIpAssetEdgesOptions) {
  return listQuery({
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
  }) as Promise<FetchResponse<IpAssetEdgesData, IpAssetEdgesOptions, "application/json">>
}
