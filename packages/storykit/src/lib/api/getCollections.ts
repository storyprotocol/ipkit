import { paths } from "@/types/schema"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type CollectionsResponse = paths["/collections"]["post"]["responses"][200]["content"]["application/json"]
export type CollectionsOptions = Partial<paths["/collections"]["post"]["requestBody"]["content"]["application/json"]>

export type GetCollectionsOptions = {
  apiClient: ApiClient
  options?: CollectionsOptions
  apiKey: string
}

export function getCollections({ apiClient, options, apiKey }: GetCollectionsOptions) {
  return listQuery({
    apiClient,
    path: "/collections",
    body: {
      orderBy: "updatedAt",
      orderDirection: "desc",
      ...options,
    },
    apiKey,
  })
}
