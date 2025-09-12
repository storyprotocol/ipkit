import { paths } from "@/types/schema"
import { Address } from "viem"

import { ApiClient } from "./apiClient"
import { listQuery } from "./listQuery"

export type CollectionsResponse = paths["/collections"]["post"]["responses"][200]["content"]["application/json"]
export type CollectionsOptions = Partial<paths["/collections"]["post"]["requestBody"]["content"]["application/json"]>

export type GetCollectionsOptions = {
  apiClient: ApiClient
  collectionAddresses?: Address[]
  options?: CollectionsOptions
  apiKey: string
}

export function getCollections({ collectionAddresses, apiClient, options, apiKey }: GetCollectionsOptions) {
  return listQuery({
    apiClient,
    path: "/collections",
    body: {
      orderBy: "updatedAt",
      orderDirection: "desc",
      ...options,
      where: {
        ...options?.where,
        ...(collectionAddresses ? { collectionAddresses } : {}),
      },
    },
    apiKey,
  })
}
