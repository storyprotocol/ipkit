import type { paths } from "@/types/schema"
import { FetchOptions } from "openapi-fetch"
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers"

import { ApiClient } from "./apiClient"

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never

export type GetQueryParams<P extends Paths<"get">> = {
  apiClient: ApiClient
  path: P
  apiKey: string
  pathParams?: Params<"get", P>["params"] extends { path: any } ? Params<"get", P>["params"]["path"] : never // eslint-disable-line @typescript-eslint/no-explicit-any
  additionalHeaders?: Record<string, string>
}

export function getQuery<P extends Paths<"get">>({
  apiClient,
  path,
  apiKey,
  pathParams,
  additionalHeaders,
}: GetQueryParams<P>) {
  const requestParams = {
    params: {
      path: pathParams,
      header: {
        "X-Api-Key": apiKey,
        ...additionalHeaders,
      },
    },
  } as Params<"get", P>

  return apiClient.GET(path, requestParams)
}
