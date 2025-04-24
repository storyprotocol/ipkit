import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type IpGroupEdgesData = paths["/api/v3/ip_group_edges"]["post"]["responses"][200]["content"]["application/json"]
export type IpGroupEdgesOptions = paths["/api/v3/ip_group_edges"]["post"]["requestBody"]["content"]["application/json"]

export function getIpGroupEdges({
  options,
  chainName,
  apiKey,
}: {
  options?: IpGroupEdgesOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/ip_group_edges",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpGroupEdgesData, IpGroupEdgesOptions, "application/json">>
}
