import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type LicenseMintingFeeResponse =
  paths["/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseMintingFeeOptions = paths["/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}"]["options"]

export function getLicenseMintingFee({
  licenseMintingFeePaidId,
  chainName,
  apiKey,
}: {
  licenseMintingFeePaidId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/licenses/mintingfees/{licenseMintingFeePaidId}",
    pathParams: { licenseMintingFeePaidId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseMintingFeeResponse, LicenseMintingFeeOptions, "application/json">>
}
