import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseTokenResponse =
  paths["/api/v3/licenses/tokens/{licenseTokenId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTokenOptions = paths["/api/v3/licenses/tokens/{licenseTokenId}"]["options"]

export type GetLicenseTokenOptions = {
  apiClient: ApiClient
  licenseTokenId: string
  chainName: string
  apiKey: string
}

export function getLicenseToken({ apiClient, licenseTokenId, chainName, apiKey }: GetLicenseTokenOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/licenses/tokens/{licenseTokenId}",
    pathParams: { licenseTokenId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokenResponse, LicenseTokenOptions, "application/json">>
}
