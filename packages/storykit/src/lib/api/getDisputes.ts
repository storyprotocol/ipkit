import { paths } from "@/types/schema"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type DisputesResponse = paths["/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = Partial<paths["/disputes"]["post"]["requestBody"]["content"]["application/json"]>

export type GetDisputesOptions = {
  apiClient: ApiClient
  options?: DisputesOptions
  apiKey: string
}

export function getDisputes({ apiClient, options, apiKey }: GetDisputesOptions) {
  return listQuery({
    apiClient,
    path: "/disputes",
    body: {
      options: {
        orderBy: "blockNumber",
        orderDirection: "desc",
        pagination: {
          limit: 20,
        },
        ...options?.options,
      },
      ...options,
    },
    apiKey,
  })
}
