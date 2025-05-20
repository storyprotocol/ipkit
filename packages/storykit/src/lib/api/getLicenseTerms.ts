import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseTermsResponse =
  paths["/api/v3/licenses/terms"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTermsOptions =
  paths["/api/v3/licenses/terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTermsOptions = {
  apiClient: ApiClient
  options?: LicenseTermsOptions
  chainName: string
  apiKey: string
}

export function getLicenseTerms({ apiClient, options, chainName, apiKey }: GetLicenseTermsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/licenses/terms",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermsResponse, LicenseTermsOptions, "application/json">>
}
