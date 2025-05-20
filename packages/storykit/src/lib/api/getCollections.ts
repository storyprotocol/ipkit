import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type CollectionsResponse = paths["/api/v3/collections"]["post"]["responses"][200]["content"]["application/json"]

export type CollectionsOptions =
  paths["/api/v3/collections"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetCollectionsOptions = {
  client?: ApiClient
  options?: CollectionsOptions
  chainName: string
  apiKey: string
}

export function getCollections({ client, options, chainName, apiKey }: GetCollectionsOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/collections",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<CollectionsResponse, CollectionsOptions, "application/json">>
}
