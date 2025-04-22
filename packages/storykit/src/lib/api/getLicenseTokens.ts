import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type LicenseTokensData =
  paths["/api/v3/licenses/tokens"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTokensOptions =
  paths["/api/v3/licenses/tokens"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTokensOptions = {
  licenseTokenIds?: Address[] // licenseTokenIds from options added here for convenience
  options?: LicenseTokensOptions
  chainName: string
  apiKey: string
}

export function getLicenseTokens({ licenseTokenIds, options, chainName, apiKey }: GetLicenseTokensOptions) {
  return listQuery({
    path: "/api/v3/licenses/tokens",
    body: { options: { ...options, ...(licenseTokenIds ? { licenseTokenIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokensData, LicenseTokensOptions, "application/json">>
}
