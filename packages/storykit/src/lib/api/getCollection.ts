import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type CollectionData =
  paths["/api/v3/collections/{collectionId}"]["get"]["responses"][200]["content"]["application/json"]
export type CollectionOptions = paths["/api/v3/collections/{collectionId}"]["options"]

export function getCollection({
  collectionId,
  chainName,
  apiKey,
}: {
  collectionId: string
  chainName: string
  apiKey: string
}) {
  return getQuery({
    path: "/api/v3/collections/{collectionId}",
    pathParams: { collectionId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<CollectionData, CollectionOptions, "application/json">>
}
