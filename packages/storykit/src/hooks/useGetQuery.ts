import type { paths } from "@storykit/api-schema"
import { type UseQueryOptions, useQuery } from "@tanstack/react-query"
import { FetchOptions } from "openapi-fetch"
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers"

import { apiClient } from "../lib/apiClient"

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never
export type UseGetQueryOptions = Partial<Pick<UseQueryOptions, "queryKey">> &
  Omit<UseQueryOptions, "queryFn" | "queryKey">

export function useGetQuery<P extends Paths<"get">>(
  path: P,
  params: Params<"get", P>,
  queryOptions?: UseGetQueryOptions
) {
  const { queryKey, ...restQueryOptions } = queryOptions ?? {}

  return useQuery({
    queryKey: [path, params, ...(queryKey || [])],
    queryFn: async () => {
      const { data, error } = await apiClient.GET(path, params)
      if (error) throw error
      return data
    },
    ...restQueryOptions,
  })
}
