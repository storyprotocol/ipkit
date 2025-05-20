import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseTemplateResponse =
  paths["/api/v3/licenses/templates/{licenseTemplateId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTemplateOptions = paths["/api/v3/licenses/templates/{licenseTemplateId}"]["options"]

export type GetLicenseTemplateOptions = {
  client?: ApiClient
  licenseTemplateId: string
  chainName: string
  apiKey: string
}

export function getLicenseTemplate({ client, licenseTemplateId, chainName, apiKey }: GetLicenseTemplateOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/templates/{licenseTemplateId}",
    pathParams: { licenseTemplateId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplateResponse, LicenseTemplateOptions, "application/json">>
}
