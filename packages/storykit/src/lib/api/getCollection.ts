import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type CollectionResponse =
  paths["/api/v3/collections/{collectionId}"]["get"]["responses"][200]["content"]["application/json"]
export type CollectionOptions = paths["/api/v3/collections/{collectionId}"]["options"]

export type GetCollectionOptions = {
  apiClient: ApiClient
  collectionId: string
  chainName: string
  apiKey: string
}

export function getCollection({ apiClient, collectionId, chainName, apiKey }: GetCollectionOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/collections/{collectionId}",
    pathParams: { collectionId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<CollectionResponse, CollectionOptions, "application/json">>
}
