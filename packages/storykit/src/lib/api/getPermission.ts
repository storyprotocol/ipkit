import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type PermissionResponse =
  paths["/api/v3/permissions/{permissionId}"]["get"]["responses"][200]["content"]["application/json"]
export type PermissionOptions = paths["/api/v3/permissions/{permissionId}"]["options"]

export type GetPermissionOptions = {
  client?: ApiClient
  permissionId: string
  chainName: string
  apiKey: string
}

export function getPermission({ client, permissionId, chainName, apiKey }: GetPermissionOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/permissions/{permissionId}",
    pathParams: { permissionId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionResponse, PermissionOptions, "application/json">>
}
