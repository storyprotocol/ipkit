import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetEdgesOptions, IpAssetEdgesResponse, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useIpKit } from "../providers/StoryKitProvider"

export type UseIpAssetEdgesOptions = {
  ipId?: Address
  parentIpId?: Address
  options?: IpAssetEdgesOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetEdges({
  ipId,
  parentIpId,
  options,
  queryOptions,
}: UseIpAssetEdgesOptions = {}): UseQueryResult<IpAssetEdgesResponse> {
  const { apiKey, apiClient } = useIpKit()

  return useQuery({
    queryKey: ["getIpAssetEdges", ipId, parentIpId, options],
    queryFn: async () => {
      const { data, error } = await getIpAssetEdges({
        ipId,
        parentIpId,
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
