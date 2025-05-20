import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type IpGroupsResponse = paths["/api/v3/ip-groups"]["post"]["responses"][200]["content"]["application/json"]

export type IpGroupsOptions =
  paths["/api/v3/ip-groups"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetIpGroupsOptions = {
  client?: ApiClient
  groupId?: string // Single groupId as per API schema
  options?: IpGroupsOptions
  chainName: string
  apiKey: string
}

export function getIpGroups({ client, groupId, options, chainName, apiKey }: GetIpGroupsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/ip-groups",
    body: {
      options: {
        ...options,
        where: {
          ...options?.where,
          ...(groupId ? { groupId } : {}),
        },
      },
    },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpGroupsResponse, IpGroupsOptions, "application/json">>
}
