import { paths } from "@/types/schema"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type SearchResponse = paths["/search"]["post"]["responses"][200]["content"]["application/json"]

export type SearchOptions = paths["/search"]["post"]["requestBody"]["content"]["application/json"]

export type GetSearchOptions = {
  apiClient: ApiClient
  query: string
  mediaType?: "audio" | "video" | "image"
  options?: SearchOptions
  apiKey: string
}

export function getSearch({ apiClient, query, mediaType, options, apiKey }: GetSearchOptions) {
  return listQuery({
    apiClient,
    path: "/search",
    body: {
      query,
      ...(mediaType ? { mediaType } : {}),
      ...options,
    },
    apiKey,
  })
}
