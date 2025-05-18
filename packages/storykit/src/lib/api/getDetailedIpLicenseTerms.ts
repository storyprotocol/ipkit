import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type DetailedIpLicenseTermsData =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["responses"][200]["content"]["application/json"]

export type DetailedIpLicenseTermsOptions =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDetailedIpLicenseTermsOptions = {
  ipIds: string[]
  chainName: string
  apiKey: string
}

export function getDetailedIpLicenseTerms({ ipIds, chainName, apiKey }: GetDetailedIpLicenseTermsOptions) {
  return listQuery({
    path: "/api/v3/detailed-ip-license-terms",
    body: { options: { where: { ipIds: ipIds } } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DetailedIpLicenseTermsData, DetailedIpLicenseTermsOptions, "application/json">>
}
