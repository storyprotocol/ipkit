import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type ModuleResponse = paths["/api/v3/modules/{moduleId}"]["get"]["responses"][200]["content"]["application/json"]
export type ModuleOptions = paths["/api/v3/modules/{moduleId}"]["options"]

export type GetModuleOptions = {
  client?: ApiClient
  moduleId: string
  chainName: string
  apiKey: string
}

export function getModule({ client, moduleId, chainName, apiKey }: GetModuleOptions) {
  return getQuery({
    client: client ?? stagingClient,
    path: "/api/v3/modules/{moduleId}",
    pathParams: { moduleId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModuleResponse, ModuleOptions, "application/json">>
}
