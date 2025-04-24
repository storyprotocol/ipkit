import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type LicenseMintingFeesData =
  paths["/api/v3/licenses/mintingfees"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseMintingFeesOptions =
  paths["/api/v3/licenses/mintingfees"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseMintingFeesOptions = {
  licenseMintingFeePaidIds?: Address[] // licenseMintingFeePaidIds from options added here for convenience
  options?: LicenseMintingFeesOptions
  chainName: string
  apiKey: string
}

export function getLicenseMintingFees({
  licenseMintingFeePaidIds,
  options,
  chainName,
  apiKey,
}: GetLicenseMintingFeesOptions) {
  return listQuery({
    path: "/api/v3/licenses/mintingfees",
    body: { options: { ...options, ...(licenseMintingFeePaidIds ? { id: licenseMintingFeePaidIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseMintingFeesData, LicenseMintingFeesOptions, "application/json">>
}
