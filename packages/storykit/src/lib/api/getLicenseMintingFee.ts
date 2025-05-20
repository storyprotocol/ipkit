import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type LicenseMintingFeeResponse =
  paths["/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseMintingFeeOptions = paths["/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}"]["options"]

export type GetLicenseMintingFeeOptions = {
  client?: ApiClient
  licenseMintingFeePaidId: string
  chainName: string
  apiKey: string
}

export function getLicenseMintingFee({
  client,
  licenseMintingFeePaidId,
  chainName,
  apiKey,
}: GetLicenseMintingFeeOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}",
    pathParams: { licenseMintingFeePaidId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseMintingFeeResponse, LicenseMintingFeeOptions, "application/json">>
}
