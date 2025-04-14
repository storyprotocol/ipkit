import { Address } from "viem"

import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

export type UseIpAssetOptions = {
  ipId: Address
  queryOptions?: UseGetQueryOptions
}

export function useIpAsset({ ipId, queryOptions }: UseIpAssetOptions) {
  return useGetQuery({
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    queryOptions,
  })
}
