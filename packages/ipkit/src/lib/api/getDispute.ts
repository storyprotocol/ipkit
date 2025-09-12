import { paths } from "@/types/schema"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type DisputeResponse = paths["/disputes/{disputeId}"]["get"]["responses"][200]["content"]["application/json"]

export type GetDisputeOptions = {
  apiClient: ApiClient
  disputeId: string
  apiKey: string
}

export function getDispute({ apiClient, disputeId, apiKey }: GetDisputeOptions) {
  return getQuery({
    apiClient,
    path: "/disputes/{disputeId}",
    pathParams: { disputeId },
    apiKey,
  })
}
