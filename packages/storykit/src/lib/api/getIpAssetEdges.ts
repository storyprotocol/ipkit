import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type IpAssetEdgesData = paths["/api/v3/assets/edges"]["post"]["responses"][200]["content"]["application/json"]
export type IpAssetEdgesOptions = paths["/api/v3/assets/edges"]["post"]["requestBody"]["content"]["application/json"]

export function getIpAssetEdges({
  options,
  chainName,
  apiKey,
}: {
  options?: IpAssetEdgesOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/assets/edges",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetEdgesData, IpAssetEdgesOptions, "application/json">>
}
