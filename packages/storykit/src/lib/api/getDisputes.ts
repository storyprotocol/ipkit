import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type DisputesData = paths["/api/v3/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = paths["/api/v3/disputes"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetDisputesOptions = {
  disputeIds?: Address[] // disputeIds from options added here for convenience
  options?: DisputesOptions
  chainName: string
  apiKey: string
}

export function getDisputes({ disputeIds, options, chainName, apiKey }: GetDisputesOptions) {
  return listQuery({
    path: "/api/v3/disputes",
    body: { options: { ...options, ...(disputeIds ? { id: disputeIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputesData, DisputesOptions, "application/json">>
}
