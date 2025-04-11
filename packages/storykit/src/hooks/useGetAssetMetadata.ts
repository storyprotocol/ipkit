import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

export function useGetAssetMetadata(ipId: string, queryOptions?: UseGetQueryOptions) {
  return useGetQuery({
    path: "/api/v3/assets/{assetId}/metadata",
    pathParams: { assetId: ipId },
    queryOptions,
  })
}
