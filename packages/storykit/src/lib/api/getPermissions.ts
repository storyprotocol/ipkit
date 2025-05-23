import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type PermissionsResponse = paths["/api/v3/permissions"]["post"]["responses"][200]["content"]["application/json"]

export type PermissionsOptions =
  paths["/api/v3/permissions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetPermissionsOptions = {
  apiClient: ApiClient
  options?: PermissionsOptions
  chainName: string
  apiKey: string
}

export function getPermissions({ apiClient, options, chainName, apiKey }: GetPermissionsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/permissions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionsResponse, PermissionsOptions, "application/json">>
}
