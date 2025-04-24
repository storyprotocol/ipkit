import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { listQuery } from "./listQuery"

export type ModulesData = paths["/api/v3/modules"]["post"]["responses"][200]["content"]["application/json"]
export type ModulesOptions = paths["/api/v3/modules"]["post"]["requestBody"]["content"]["application/json"]

export function getModules({
  options,
  chainName,
  apiKey,
}: {
  options?: ModulesOptions
  chainName: string
  apiKey: string
}) {
  return listQuery({
    path: "/api/v3/modules",
    body: options,
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModulesData, ModulesOptions, "application/json">>
}
