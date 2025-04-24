import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type LicenseTokensData =
  paths["/api/v3/licenses/tokens"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTokensOptions =
  paths["/api/v3/licenses/tokens"]["post"]["requestBody"]["content"]["application/json"]

export function getLicenseTokens({
  options,
  chainName,
  apiKey,
}: {
  options?: LicenseTokensOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/licenses/tokens",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokensData, LicenseTokensOptions, "application/json">>
}
