import { paths } from "@storykit/api-schema"
import { Address } from "viem"

import { type UseListQueryOptions, useListQuery } from "./useListQuery"

// This extracts the options type from the OpenAPI schema for the /api/v3/assets POST endpoint
type Options = paths["/api/v3/assets"]["post"]["requestBody"]["content"]["application/json"]["options"]

export type UseIpAssetOptions = {
  ipIds?: Address[] // ipIds from options added here for convenience
  options?: Options
  queryOptions?: UseListQueryOptions
}

export function useIpAssets({ ipIds, options, queryOptions }: UseIpAssetOptions = {}) {
  return useListQuery({
    path: "/api/v3/assets",
    body: { options: { ...options, ...(ipIds ? { ipAssetIds: ipIds } : {}) } },
    queryOptions,
  })
}
