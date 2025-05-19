import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type LicenseTokensResponse =
  paths["/api/v3/licenses/tokens"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTokensOptions =
  paths["/api/v3/licenses/tokens"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTokensOptions = {
  options?: LicenseTokensOptions
  chainName: string
  apiKey: string
}

export function getLicenseTokens({ options, chainName, apiKey }: GetLicenseTokensOptions) {
  return listQuery({
    path: "/api/v3/licenses/tokens",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokensResponse, LicenseTokensOptions, "application/json">>
}
