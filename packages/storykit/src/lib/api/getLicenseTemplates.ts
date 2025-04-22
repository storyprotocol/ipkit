import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type LicenseTemplatesData =
  paths["/api/v3/licenses/templates"]["post"]["responses"][200]["content"]["application/json"]
export type LicenseTemplatesOptions =
  paths["/api/v3/licenses/templates"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetLicenseTemplatesOptions = {
  licenseTemplateIds?: Address[] // licenseTemplateIds from options added here for convenience
  options?: LicenseTemplatesOptions
  chainName: string
  apiKey: string
}

export function getLicenseTemplates({ licenseTemplateIds, options, chainName, apiKey }: GetLicenseTemplatesOptions) {
  return listQuery({
    path: "/api/v3/licenses/templates",
    body: { options: { ...options, ...(licenseTemplateIds ? { id: licenseTemplateIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<LicenseTemplatesData, LicenseTemplatesOptions, "application/json">>
}
