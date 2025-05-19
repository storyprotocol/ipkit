import { paths } from "@storykit/api-schema"
import { FetchResponse } from "openapi-fetch"

import { getQuery } from "./getQuery"

export type ModuleResponse = paths["/api/v3/modules/{moduleId}"]["get"]["responses"][200]["content"]["application/json"]
export type ModuleOptions = paths["/api/v3/modules/{moduleId}"]["options"]

export function getModule({ moduleId, chainName, apiKey }: { moduleId: string; chainName: string; apiKey: string }) {
  return getQuery({
    path: "/api/v3/modules/{moduleId}",
    pathParams: { moduleId },
    chainName,
    apiKey,
  }) as Promise<FetchResponse<ModuleResponse, ModuleOptions, "application/json">>
}
