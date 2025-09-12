import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetEdgesOptions, IpAssetEdgesResponse, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useIpKit } from "../providers/StoryKitProvider"

export type UseIpAssetChildrenOptions = {
  ipId?: Address
  options?: IpAssetEdgesOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetChildren({
  ipId,
  options,
  queryOptions,
}: UseIpAssetChildrenOptions = {}): UseQueryResult<IpAssetEdgesResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getIpAssetEdges", undefined, ipId, options],
    queryFn: async () => {
      const { data, error } = await getIpAssetEdges({
        parentIpId: ipId,
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
