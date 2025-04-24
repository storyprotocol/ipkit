import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type DefaultLicenseTermData =
  paths["/api/v3/licenses/terms/default"]["get"]["responses"][200]["content"]["application/json"]
export type DefaultLicenseTermOptions = paths["/api/v3/licenses/terms/default"]["options"]

export function getDefaultLicenseTerm({ chainName, apiKey }: { chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/licenses/terms/default",
    pathParams: undefined,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DefaultLicenseTermData, DefaultLicenseTermOptions, "application/json">>
}
