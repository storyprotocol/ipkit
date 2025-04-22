import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"
import { Address } from "viem"

import { listQuery } from "./listQuery"

export type ModulesData = paths["/api/v3/modules"]["post"]["responses"][200]["content"]["application/json"]
export type ModulesOptions = paths["/api/v3/modules"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type GetModulesOptions = {
  moduleIds?: Address[] // moduleIds from options added here for convenience
  options?: ModulesOptions
  chainName: string
  apiKey: string
}

export function getModules({ moduleIds, options, chainName, apiKey }: GetModulesOptions) {
  return listQuery({
    path: "/api/v3/modules",
    body: { options: { ...options, ...(moduleIds ? { moduleIds } : {}) } },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModulesData, ModulesOptions, "application/json">>
}
