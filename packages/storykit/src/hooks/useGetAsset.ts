import { UseQueryResult } from "@tanstack/react-query"

import { type IPAssetResponse } from "../types/openapi"
import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

export function useGetAsset(ipId: string, queryOptions?: UseGetQueryOptions) {
  return useGetQuery({
    path: "/api/v3/assets/{assetId}",
    pathParams: { assetId: ipId },
    additionalHeaders: { "X-Extend-Asset": "true" },
    queryOptions,
  }) as UseQueryResult<IPAssetResponse>
}
