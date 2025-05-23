import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type PermissionResponse =
  paths["/api/v3/permissions/{permissionId}"]["get"]["responses"][200]["content"]["application/json"]
export type PermissionOptions = paths["/api/v3/permissions/{permissionId}"]["options"]

export type GetPermissionOptions = {
  apiClient: ApiClient
  permissionId: string
  chainName: string
  apiKey: string
}

export function getPermission({ apiClient, permissionId, chainName, apiKey }: GetPermissionOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/permissions/{permissionId}",
    pathParams: { permissionId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionResponse, PermissionOptions, "application/json">>
}
