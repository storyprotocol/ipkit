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

export type UseGetQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseGetQueryParams<P extends Paths<"get">> = {
  path: P
  pathParams: Params<"get", P>["params"]["path"]
  additionalHeaders?: Record<string, string>
  queryOptions?: UseGetQueryOptions
}

export function useGetQuery<P extends Paths<"get">>({
  path,
  pathParams,
  additionalHeaders,
  queryOptions,
}: UseGetQueryParams<P>) {
  const { chain } = useStoryKitContext()

  // this method assumes that each request has path params
  // not the case for /api/v3/licenses/terms/default
  // assumes each request needs these headers, currently true

  const requestParams = {
    params: {
      path: pathParams,
      header: {
        "X-Chain": chain.name,
        "X-Api-Key": API_KEY,
        ...additionalHeaders,
      },
    },
  } as Params<"get", P>

  return useQuery({
    queryKey: [path, requestParams],
    queryFn: async () => {
      const { data, error } = await apiClient.GET(path, requestParams)
      if (error) throw error
      return data
    },
    retry: false,
    ...queryOptions,
  }) as UseQueryResult<paths[P]["get"]["responses"][200]["content"]["application/json"]>
  // ☝️ this assumes response is always 200 or error, all that is currently supported
}
