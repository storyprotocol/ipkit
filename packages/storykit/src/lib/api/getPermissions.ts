import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type PermissionsResponse = paths["/api/v3/permissions"]["post"]["responses"][200]["content"]["application/json"]

export type PermissionsOptions =
  paths["/api/v3/permissions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetPermissionsOptions = {
  client?: ApiClient
  options?: PermissionsOptions
  chainName: string
  apiKey: string
}

export function getPermissions({ client, options, chainName, apiKey }: GetPermissionsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/permissions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionsResponse, PermissionsOptions, "application/json">>
}
