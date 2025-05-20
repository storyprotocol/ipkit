import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseTermsResponse =
  paths["/api/v3/licenses/terms"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTermsOptions =
  paths["/api/v3/licenses/terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTermsOptions = {
  client?: ApiClient
  options?: LicenseTermsOptions
  chainName: string
  apiKey: string
}

export function getLicenseTerms({ client, options, chainName, apiKey }: GetLicenseTermsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/terms",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermsResponse, LicenseTermsOptions, "application/json">>
}
