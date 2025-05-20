import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseTermResponse =
  paths["/api/v3/licenses/terms/{licenseTermId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTermOptions = paths["/api/v3/licenses/terms/{licenseTermId}"]["options"]

export type GetLicenseTermOptions = {
  client?: ApiClient
  licenseTermId: string
  chainName: string
  apiKey: string
}

export function getLicenseTerm({ client, licenseTermId, chainName, apiKey }: GetLicenseTermOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/terms/{licenseTermId}",
    pathParams: { licenseTermId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermResponse, LicenseTermOptions, "application/json">>
}
