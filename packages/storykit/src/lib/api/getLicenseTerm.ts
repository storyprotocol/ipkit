import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type LicenseTermResponse =
  paths["/api/v3/licenses/terms/{licenseTermId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTermOptions = paths["/api/v3/licenses/terms/{licenseTermId}"]["options"]

export function getLicenseTerm({
  licenseTermId,
  chainName,
  apiKey,
}: {
  licenseTermId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/licenses/terms/{licenseTermId}",
    pathParams: { licenseTermId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTermResponse, LicenseTermOptions, "application/json">>
}
