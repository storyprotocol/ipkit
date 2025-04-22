import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type LicenseTermsData = paths["/api/v3/licenses/terms"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTermsOptions =
  paths["/api/v3/licenses/terms"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTermsOptions = {
  licenseTermIds?: Address[] // licenseTermIds from options added here for convenience
  options?: LicenseTermsOptions
  chainName: string
  apiKey: string
}

export function getLicenseTerms({ licenseTermIds, options, chainName, apiKey }: GetLicenseTermsOptions) {
  return listQuery({
    path: "/api/v3/licenses/terms",
    body: { options: { ...options, ...(licenseTermIds ? { licenseTermIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermsData, LicenseTermsOptions, "application/json">>
}
