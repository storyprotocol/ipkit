import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type CollectionsResponse = paths["/api/v3/collections"]["post"]["responses"][200]["content"]["application/json"]

export type CollectionsOptions =
  paths["/api/v3/collections"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetCollectionsOptions = {
  options?: CollectionsOptions
  chainName: string
  apiKey: string
}

export function getCollections({ options, chainName, apiKey }: GetCollectionsOptions) {
  return listQuery({
    path: "/api/v3/collections",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<CollectionsResponse, CollectionsOptions, "application/json">>
}
