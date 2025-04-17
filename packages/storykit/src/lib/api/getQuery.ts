import type { paths } from "@storykit/api-schema"
import { FetchOptions } from "openapi-fetch"
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers"

import { apiClient } from "./apiClient"

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never

export type GetQueryParams<P extends Paths<"get">> = {
  path: P
  chainName: string
  apiKey: string
  pathParams: Params<"get", P>["params"]["path"]
  additionalHeaders?: Record<string, string>
}

export function getQuery<P extends Paths<"get">>({
  path,
  chainName,
  apiKey,
  pathParams,
  additionalHeaders,
}: GetQueryParams<P>) {
  const requestParams = {
    params: {
      path: pathParams,
      header: {
        "X-Chain": chainName,
        "X-Api-Key": apiKey,
        ...additionalHeaders,
      },
    },
  } as Params<"get", P>

  return apiClient.GET(path, requestParams)
}
