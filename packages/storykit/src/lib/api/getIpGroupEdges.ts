import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpGroupEdgesResponse =
  paths["/api/v3/ip-group-edges"]["post"]["responses"][200]["content"]["application/json"]

export type IpGroupEdgesOptions =
  paths["/api/v3/ip-group-edges"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpGroupEdgesOptions = {
  client?: ApiClient
  groupId?: Address
  ipAssetIds?: Address[]
  options?: IpGroupEdgesOptions
  chainName: string
  apiKey: string
}

export function getIpGroupEdges({ client, groupId, ipAssetIds, options, chainName, apiKey }: GetIpGroupEdgesOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/ip-group-edges",
    body: {
      options: {
        ...options,
        ipAssetIds,
        where: {
          ...options?.where,
          ...(groupId ? { groupId } : {}),
        },
      },
    },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpGroupEdgesResponse, IpGroupEdgesOptions, "application/json">>
}
