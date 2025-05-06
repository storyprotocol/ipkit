import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type PermissionsData = paths["/api/v3/permissions"]["post"]["responses"][200]["content"]["application/json"]

export type PermissionsOptions =
  paths["/api/v3/permissions"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetPermissionsOptions = {
  options?: PermissionsOptions
  chainName: string
  apiKey: string
}

export function getPermissions({ options, chainName, apiKey }: GetPermissionsOptions) {
  return listQuery({
    path: "/api/v3/permissions",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionsData, PermissionsOptions, "application/json">>
}
