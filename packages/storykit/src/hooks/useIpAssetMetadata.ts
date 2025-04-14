import { Address } from "viem"

import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

export type UseIpAssetMetadataOptions = {
  ipId: Address
  queryOptions?: UseGetQueryOptions
}

export function useIpAssetMetadata({ ipId, queryOptions }: UseIpAssetMetadataOptions) {
  return useGetQuery({
    path: "/api/v3/assets/{assetId}/metadata",
    pathParams: { assetId: ipId },
    queryOptions,
  })
}
