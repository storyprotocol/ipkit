import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type IpLicenseTermsData =
  paths["/api/v3/licenses/ip/terms"]["post"]["responses"][200]["content"]["application/json"]
export type IpLicenseTermsOptions =
  paths["/api/v3/licenses/ip/terms"]["post"]["requestBody"]["content"]["application/json"]

export function getIpLicenseTerms({
  options,
  chainName,
  apiKey,
}: {
  options?: IpLicenseTermsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/licenses/ip/terms",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpLicenseTermsData, IpLicenseTermsOptions, "application/json">>
}
