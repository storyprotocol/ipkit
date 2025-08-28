import type { paths } from "@/types/schema"
import { FetchOptions } from "openapi-fetch"
import { HttpMethod, PathsWithMethod } from "openapi-typescript-helpers"

import { ApiClient } from "./apiClient"

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never

export type ListQueryParams<P extends Paths<"post">> = {
  apiClient: ApiClient
  path: P
  apiKey: string
  body?: Params<"post", P>["body"]
  additionalHeaders?: Record<string, string>
}

export function listQuery<P extends Paths<"post">>({
  apiClient,
  path,
  apiKey,
  body,
  additionalHeaders,
}: ListQueryParams<P>) {
  const requestParams = {
    params: {
      header: {
        "X-Api-Key": apiKey,
        ...additionalHeaders,
      },
    },
  } as Params<"post", P>

  const requestBody = {
    body: body || {},
  } as Params<"post", P>["body"]

  return apiClient.POST(path, { ...requestParams, ...requestBody })
}
