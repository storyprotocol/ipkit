import { Address } from "viem"

import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

export function useGetAsset(ipId: Address, queryOptions?: UseGetQueryOptions) {
  return useGetQuery({
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    queryOptions,
  })
}
