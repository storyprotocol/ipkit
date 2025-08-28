import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpAssetsResponse = paths["/assets"]["post"]["responses"][200]["content"]["application/json"]
export type IpAssetsOptions = Partial<paths["/assets"]["post"]["requestBody"]["content"]["application/json"]>

export type GetIpAssetsOptions = {
  apiClient: ApiClient
  includeLicenses?: boolean
  moderated?: boolean
  ipIds?: Address[] // ipIds from options added here for convenience
  options?: IpAssetsOptions
  apiKey: string
}

export function getIpAssets({ apiClient, includeLicenses, moderated, ipIds, options, apiKey }: GetIpAssetsOptions) {
  return listQuery({
    apiClient,
    path: "/assets",
    body: {
      orderBy: "blockNumber",
      orderDirection: "desc",
      includeLicenses: includeLicenses ?? false,
      moderated: moderated ?? false,
      ...options,
      where: {
        ...options?.where,
        ...(ipIds ? { ipIds } : {}),
      },
    },
    apiKey,
  })
}
