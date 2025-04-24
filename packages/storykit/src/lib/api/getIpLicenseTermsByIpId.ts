import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type IpLicenseTermsByIpIdData =
  paths["/api/v3/licenses/ip/terms/{ipId}"]["get"]["responses"][200]["content"]["application/json"]
export type IpLicenseTermsByIpIdOptions = paths["/api/v3/licenses/ip/terms/{ipId}"]["options"]

export function getIpLicenseTermsByIpId({
  ipId,
  chainName,
  apiKey,
}: {
  ipId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/licenses/ip/terms/{ipId}",
    pathParams: { ipId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpLicenseTermsByIpIdData, IpLicenseTermsByIpIdOptions, "application/json">>
}
