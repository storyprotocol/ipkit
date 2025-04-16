import { paths } from "@storykit/api-schema"
import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { getIpAsset } from "../lib/openAPI/getIpAsset"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">
export type UseIpAssetOptions = {
  ipId: Address
  queryOptions?: UseIpAssetQueryOptions
}
export type UseIpAssetData = paths["/api/v3/assets/{assetId}"]["get"]["responses"][200]["content"]["application/json"]

export function useIpAsset({ ipId, queryOptions }: UseIpAssetOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAsset", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAsset({ ipId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<UseIpAssetData>
}
