import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type DisputeData = paths["/api/v3/disputes/{disputeId}"]["get"]["responses"][200]["content"]["application/json"]
export type DisputeOptions = paths["/api/v3/disputes/{disputeId}"]["options"]

export function getDispute({ disputeId, chainName, apiKey }: { disputeId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/disputes/{disputeId}",
    pathParams: { disputeId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputeData, DisputeOptions, "application/json">>
}
