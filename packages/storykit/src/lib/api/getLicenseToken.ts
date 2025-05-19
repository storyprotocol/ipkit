import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type LicenseTokenResponse =
  paths["/api/v3/licenses/tokens/{licenseTokenId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTokenOptions = paths["/api/v3/licenses/tokens/{licenseTokenId}"]["options"]

export function getLicenseToken({
  licenseTokenId,
  chainName,
  apiKey,
}: {
  licenseTokenId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/licenses/tokens/{licenseTokenId}",
    pathParams: { licenseTokenId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTokenResponse, LicenseTokenOptions, "application/json">>
}
