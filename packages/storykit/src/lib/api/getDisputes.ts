import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type DisputesResponse = paths["/disputes"]["post"]["responses"][200]["content"]["application/json"]
export type DisputesOptions = Partial<
  paths["/disputes"]["post"]["requestBody"]["content"]["application/json"]["options"]
>

export type GetDisputesOptions = {
  apiClient: ApiClient
  options?: DisputesOptions
  apiKey: string
  initiator?: Address
  targetIpId?: Address
}

export function getDisputes({ apiClient, initiator, targetIpId, options, apiKey }: GetDisputesOptions) {
  return listQuery({
    apiClient,
    path: "/disputes",
    body: {
      options: {
        orderBy: "blockNumber",
        orderDirection: "desc",
        ...options,
        where: {
          ...options?.where,
          ...(initiator ? { initiator } : {}),
          ...(targetIpId ? { targetIpId } : {}),
        },
      },
    },
    apiKey,
  })
}
