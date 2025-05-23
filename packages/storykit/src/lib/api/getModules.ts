import { paths } from "@/types/schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type ModulesResponse = paths["/api/v3/modules"]["post"]["responses"][200]["content"]["application/json"]
export type ModulesOptions = paths["/api/v3/modules"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetModulesOptions = {
  apiClient: ApiClient
  options?: ModulesOptions
  chainName: string
  apiKey: string
}

export function getModules({ apiClient, options, chainName, apiKey }: GetModulesOptions) {
  return listQuery({
    apiClient,
    path: "/api/v3/modules",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModulesResponse, ModulesOptions, "application/json">>
}
