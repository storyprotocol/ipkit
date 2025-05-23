import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicensesTermsResponse =
  paths["/api/v3/licenses/terms"]["post"]["responses"][200]["content"]["application/json"]
export type LicensesTermsOptions =
  paths["/api/v3/licenses/terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicensesTermsOptions = {
  apiClient: ApiClient
  options?: LicensesTermsOptions
  chainName: string
  apiKey: string
}

export function getLicensesTerms({ apiClient, options, chainName, apiKey }: GetLicensesTermsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/licenses/terms",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicensesTermsResponse, LicensesTermsOptions, "application/json">>
}
