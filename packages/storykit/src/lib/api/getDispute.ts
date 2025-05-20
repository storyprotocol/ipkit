import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type DisputeResponse =
  paths["/api/v3/disputes/{disputeId}"]["get"]["responses"][200]["content"]["application/json"]
export type DisputeOptions = paths["/api/v3/disputes/{disputeId}"]["options"]

export type GetDisputeOptions = {
  client?: ApiClient
  disputeId: string
  chainName: string
  apiKey: string
}

export function getDispute({ client, disputeId, chainName, apiKey }: GetDisputeOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/disputes/{disputeId}",
    pathParams: { disputeId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputeResponse, DisputeOptions, "application/json">>
}
