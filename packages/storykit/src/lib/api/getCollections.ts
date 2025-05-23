import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type CollectionsResponse = paths["/api/v3/collections"]["post"]["responses"][200]["content"]["application/json"]

export type CollectionsOptions =
  paths["/api/v3/collections"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetCollectionsOptions = {
  apiClient: ApiClient
  options?: CollectionsOptions
  chainName: string
  apiKey: string
}

export function getCollections({ apiClient, options, chainName, apiKey }: GetCollectionsOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/collections",
    body: { options },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<CollectionsResponse, CollectionsOptions, "application/json">>
}
