import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpAssetEdgesResponse = paths["/assets/edges"]["post"]["responses"][200]["content"]["application/json"]

export type IpAssetEdgesOptions = paths["/assets/edges"]["post"]["requestBody"]["content"]["application/json"]

export type GetIpAssetEdgesOptions = {
  apiClient: ApiClient
  ipId?: Address
  parentIpId?: Address
  options?: Partial<IpAssetEdgesOptions>
  apiKey: string
}

export function getIpAssetEdges({ apiClient, ipId, parentIpId, options, apiKey }: GetIpAssetEdgesOptions) {
  return listQuery({
    apiClient,
    path: "/assets/edges",
    body: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      ...options,
      where: {
        ...options?.where,
        ...(ipId ? { childIpId: ipId } : {}),
        ...(parentIpId ? { parentIpId } : {}),
      },
    },
    apiKey,
  })
}
