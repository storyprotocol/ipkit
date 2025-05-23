import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type DetailedIpLicenseTermsResponse =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["responses"][200]["content"]["application/json"]

export type DetailedIpLicenseTermsOptions =
  paths["/api/v3/detailed-ip-license-terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDetailedIpLicenseTermsOptions = {
  apiClient: ApiClient
  ipIds: string[]
  chainName: string
  apiKey: string
}

export function getDetailedIpLicenseTerms({ apiClient, ipIds, chainName, apiKey }: GetDetailedIpLicenseTermsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/detailed-ip-license-terms",
    body: { options: { where: { ipIds: ipIds } } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DetailedIpLicenseTermsResponse, DetailedIpLicenseTermsOptions, "application/json">>
}
