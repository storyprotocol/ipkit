import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type DisputesResponse = paths["/api/v3/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = paths["/api/v3/disputes"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDisputesOptions = {
  client?: ApiClient
  options?: DisputesOptions
  chainName: string
  apiKey: string
}

export function getDisputes({ client, options, chainName, apiKey }: GetDisputesOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/disputes",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputesResponse, DisputesOptions, "application/json">>
}
