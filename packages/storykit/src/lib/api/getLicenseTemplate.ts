import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type LicenseTemplateData =
  paths["/api/v3/licenses/templates/{licenseTemplateId}"]["get"]["responses"][200]["content"]["application/json"]
export type LicenseTemplateOptions = paths["/api/v3/licenses/templates/{licenseTemplateId}"]["options"]

export function getLicenseTemplate({
  licenseTemplateId,
  chainName,
  apiKey,
}: {
  licenseTemplateId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/licenses/templates/{licenseTemplateId}",
    pathParams: { licenseTemplateId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplateData, LicenseTemplateOptions, "application/json">>
}
