import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetEdgesOptions, IpAssetEdgesResponse, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetEdgesOptions = {
  ipId?: Address
  parentIpId?: Address
  options?: Partial<IpAssetEdgesOptions>
  queryOptions?: IpQueryOptions
}

export function useIpAssetEdges({ ipId, parentIpId, options, queryOptions }: UseIpAssetEdgesOptions = {}) {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetEdges", ipId, parentIpId, options, queryOptions],
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
  }) as UseQueryResult<IpAssetEdgesResponse>
}
