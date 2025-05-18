import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type IpAssetTermsData =
  paths["/api/v3/licenses/ip/terms/{ipId}"]["get"]["responses"][200]["content"]["application/json"]
export type IpAssetTermsOptions = paths["/api/v3/licenses/ip/terms/{ipId}"]["options"]

export function getIpAssetTerms({ ipId, chainName, apiKey }: { ipId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/licenses/ip/terms/{ipId}",
    pathParams: { ipId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<IpAssetTermsData, IpAssetTermsOptions, "application/json">>
}
