import type { paths } from "@storykit/api-schema"
import { type UseQueryOptions, type UseQueryResult, useQuery } from "@tanstack/react-query"
import { FetchOptions } from "openapi-fetch"
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers"

import { apiClient } from "../lib/apiClient"
import { useStoryKitContext } from "../providers/StoryKitProvider"

const API_KEY =
  process.env.STORYBOOK_STORY_PROTOCOL_X_API_KEY ||
  process.env.NEXT_PUBLIC_STORY_PROTOCOL_X_API_KEY ||
  process.env.STORY_PROTOCOL_X_API_KEY ||
  ""

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never

export type UseListQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseListQueryParams<P extends Paths<"post">> = {
  path: P
  body?: Params<"post", P>["body"]
  additionalHeaders?: Record<string, string>
  queryOptions?: UseListQueryOptions
}

export function useListQuery<P extends Paths<"post">>({
  path,
  body,
  additionalHeaders,
  queryOptions,
}: UseListQueryParams<P>) {
  const { chain } = useStoryKitContext()

  const requestParams = {
    params: {
      header: {
        "X-Chain": chain.name,
        "X-Api-Key": API_KEY,
        ...additionalHeaders,
      },
    },
  } as Params<"post", P>

  const requestBody = {
    body: body || {},
  } as Params<"post", P>["body"]

  return useQuery({
    queryKey: [path, requestParams],
    queryFn: async () => {
      const { data, error } = await apiClient.POST(path, { ...requestParams, ...requestBody })
      if (error) throw error
      return data
    },
    retry: false,
    ...queryOptions,
  }) as UseQueryResult<paths[P]["post"]["responses"][200]["content"]["application/json"]>
}
