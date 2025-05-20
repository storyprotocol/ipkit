import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type LicenseMintingFeesResponse =
  paths["/api/v3/licenses/mintingfees"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseMintingFeesOptions =
  paths["/api/v3/licenses/mintingfees"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseMintingFeesOptions = {
  client?: ApiClient
  options?: LicenseMintingFeesOptions
  chainName: string
  apiKey: string
}

export function getLicenseMintingFees({ client, options, chainName, apiKey }: GetLicenseMintingFeesOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/mintingfees",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseMintingFeesResponse, LicenseMintingFeesOptions, "application/json">>
}
