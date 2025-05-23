import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type DisputesResponse = paths["/api/v3/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = paths["/api/v3/disputes"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDisputesOptions = {
  apiClient: ApiClient
  options?: DisputesOptions
  chainName: string
  apiKey: string
}

export function getDisputes({ apiClient, options, chainName, apiKey }: GetDisputesOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/disputes",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputesResponse, DisputesOptions, "application/json">>
}
