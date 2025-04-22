import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type LicenseMintingFeePaysData =
  paths["/api/v3/licenses/mintingfees"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseMintingFeePaysOptions =
  paths["/api/v3/licenses/mintingfees"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseMintingFeePaysOptions = {
  licenseMintingFeePaidIds?: Address[] // licenseMintingFeePaidIds from options added here for convenience
  options?: LicenseMintingFeePaysOptions
  chainName: string
  apiKey: string
}

export function getLicenseMintingFeePays({
  licenseMintingFeePaidIds,
  options,
  chainName,
  apiKey,
}: GetLicenseMintingFeePaysOptions) {
  return listQuery({
    path: "/api/v3/licenses/mintingfees",
    body: { options: { ...options, ...(licenseMintingFeePaidIds ? { id: licenseMintingFeePaidIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseMintingFeePaysData, LicenseMintingFeePaysOptions, "application/json">>
}
