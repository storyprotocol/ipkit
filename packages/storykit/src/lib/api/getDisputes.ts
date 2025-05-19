import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type DisputesResponse = paths["/api/v3/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = paths["/api/v3/disputes"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDisputesOptions = {
  options?: DisputesOptions
  chainName: string
  apiKey: string
}

export function getDisputes({ options, chainName, apiKey }: GetDisputesOptions) {
  return listQuery({
    path: "/api/v3/disputes",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputesResponse, DisputesOptions, "application/json">>
}
