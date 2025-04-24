import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type LicenseTermsData = paths["/api/v3/licenses/terms"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTermsOptions = paths["/api/v3/licenses/terms"]["post"]["requestBody"]["content"]["application/json"]

export function getLicenseTerms({
  options,
  chainName,
  apiKey,
}: {
  options?: LicenseTermsOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/licenses/terms",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermsData, LicenseTermsOptions, "application/json">>
}
