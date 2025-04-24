import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type LicenseTemplatesData =
  paths["/api/v3/licenses/templates"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTemplatesOptions =
  paths["/api/v3/licenses/templates"]["post"]["requestBody"]["content"]["application/json"]

export function getLicenseTemplates({
  options,
  chainName,
  apiKey,
}: {
  options?: LicenseTemplatesOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/licenses/templates",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplatesData, LicenseTemplatesOptions, "application/json">>
}
