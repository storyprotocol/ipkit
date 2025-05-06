import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type PermissionData =
  paths["/api/v3/permissions/{permissionId}"]["get"]["responses"][200]["content"]["application/json"]
export type PermissionOptions = paths["/api/v3/permissions/{permissionId}"]["options"]

export function getPermission({
  permissionId,
  chainName,
  apiKey,
}: {
  permissionId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/permissions/{permissionId}",
    pathParams: { permissionId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<PermissionData, PermissionOptions, "application/json">>
}
