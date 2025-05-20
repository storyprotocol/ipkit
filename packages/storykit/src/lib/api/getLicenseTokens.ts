import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseTokensResponse =
  paths["/api/v3/licenses/tokens"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTokensOptions =
  paths["/api/v3/licenses/tokens"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTokensOptions = {
  client?: ApiClient
  options?: LicenseTokensOptions
  chainName: string
  apiKey: string
}

export function getLicenseTokens({ client, options, chainName, apiKey }: GetLicenseTokensOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/tokens",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokensResponse, LicenseTokensOptions, "application/json">>
}
