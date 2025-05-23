import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { getQuery } from "./getQuery"

export type ModuleResponse = paths["/api/v3/modules/{moduleId}"]["get"]["responses"][200]["content"]["application/json"]
export type ModuleOptions = paths["/api/v3/modules/{moduleId}"]["options"]

export type GetModuleOptions = {
  apiClient: ApiClient
  moduleId: string
  chainName: string
  apiKey: string
}

export function getModule({ apiClient, moduleId, chainName, apiKey }: GetModuleOptions) {
  return getQuery({
    apiClient,
    path: "/api/v3/modules/{moduleId}",
    pathParams: { moduleId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModuleResponse, ModuleOptions, "application/json">>
}
