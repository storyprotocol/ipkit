import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetEdgesOptions, IpAssetEdgesResponse, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useIpKit } from "../providers/StoryKitProvider"

export type UseIpAssetParentsOptions = {
  ipId?: Address
  options?: IpAssetEdgesOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetParents({
  ipId,
  options,
  queryOptions,
}: UseIpAssetParentsOptions = {}): UseQueryResult<IpAssetEdgesResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getIpAssetEdges", ipId, undefined, options],
    queryFn: async () => {
      const { data, error } = await getIpAssetEdges({
        ipId,
        options,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  })
}
