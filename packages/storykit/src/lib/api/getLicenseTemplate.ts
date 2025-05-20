import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseTemplateResponse =
  paths["/api/v3/licenses/templates/{licenseTemplateId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTemplateOptions = paths["/api/v3/licenses/templates/{licenseTemplateId}"]["options"]

export type GetLicenseTemplateOptions = {
  apiClient: ApiClient
  licenseTemplateId: string
  chainName: string
  apiKey: string
}

export function getLicenseTemplate({ apiClient, licenseTemplateId, chainName, apiKey }: GetLicenseTemplateOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/licenses/templates/{licenseTemplateId}",
    pathParams: { licenseTemplateId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplateResponse, LicenseTemplateOptions, "application/json">>
}
