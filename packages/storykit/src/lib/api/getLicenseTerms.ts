import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseTermsResponse =
  paths["/api/v3/licenses/terms/{licenseTermId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTermsOptions = paths["/api/v3/licenses/terms/{licenseTermId}"]["options"]

export type GetLicenseTermsOptions = {
  apiClient: ApiClient
  licenseTermId: string
  chainName: string
  apiKey: string
}

export function getLicenseTerms({ apiClient, licenseTermId, chainName, apiKey }: GetLicenseTermsOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/licenses/terms/{licenseTermId}",
    pathParams: { licenseTermId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermsResponse, LicenseTermsOptions, "application/json">>
}
