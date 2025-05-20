import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { ApiClient, stagingClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type ModulesResponse = paths["/api/v3/modules"]["post"]["responses"][200]["content"]["application/json"]
export type ModulesOptions = paths["/api/v3/modules"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetModulesOptions = {
  client?: ApiClient
  options?: ModulesOptions
  chainName: string
  apiKey: string
}

export function getModules({ client, options, chainName, apiKey }: GetModulesOptions) {
  return listQuery({
    client: client ?? stagingClient,
    path: "/api/v3/modules",
    body: { options: options || {} },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModulesResponse, ModulesOptions, "application/json">>
}
