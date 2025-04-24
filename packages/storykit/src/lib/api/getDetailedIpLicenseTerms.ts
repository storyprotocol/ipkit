import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type DetailedIpLicenseTermsData =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["responses"][200]["content"]["application/json"]
export type DetailedIpLicenseTermsOptions =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["requestBody"]["content"]["application/json"]

export function getDetailedIpLicenseTerms({
  options,
  chainName,
  apiKey,
}: {
  options?: DetailedIpLicenseTermsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/detailed-ip-license-terms",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DetailedIpLicenseTermsData, DetailedIpLicenseTermsOptions, "application/json">>
}
