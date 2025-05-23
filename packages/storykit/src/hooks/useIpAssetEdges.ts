import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetEdgesOptions, IpAssetEdgesResponse, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetEdgesOptions = {
  ipId?: Address
  parentIpId?: Address
  options?: IpAssetEdgesOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetEdges({ ipId, parentIpId, options, queryOptions }: UseIpAssetEdgesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetEdges", ipId, parentIpId, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetEdges({
        ipId,
        parentIpId,
        options,
        chainName: chain.name,
        apiKey,
        apiClient,
      })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetEdgesResponse>
}
