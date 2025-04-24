import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type IpGroupsData = paths["/api/v3/ip_groups"]["post"]["responses"][200]["content"]["application/json"]
export type IpGroupsOptions = paths["/api/v3/ip_groups"]["post"]["requestBody"]["content"]["application/json"]

export function getIpGroups({
  options,
  chainName,
  apiKey,
}: {
  options?: IpGroupsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/ip_groups",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpGroupsData, IpGroupsOptions, "application/json">>
}
