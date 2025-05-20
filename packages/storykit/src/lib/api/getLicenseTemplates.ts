import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseTemplatesResponse =
  paths["/api/v3/licenses/templates"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTemplatesOptions =
  paths["/api/v3/licenses/templates"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTemplatesOptions = {
  apiClient: ApiClient
  options?: LicenseTemplatesOptions
  chainName: string
  apiKey: string
}

export function getLicenseTemplates({ apiClient, options, chainName, apiKey }: GetLicenseTemplatesOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/licenses/templates",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplatesResponse, LicenseTemplatesOptions, "application/json">>
}
