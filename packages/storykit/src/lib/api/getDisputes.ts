import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type DisputesData = paths["/api/v3/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = paths["/api/v3/disputes"]["post"]["requestBody"]["content"]["application/json"]

export function getDisputes({
  options,
  chainName,
  apiKey,
}: {
  options?: DisputesOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/disputes",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<DisputesData, DisputesOptions, "application/json">>
}
