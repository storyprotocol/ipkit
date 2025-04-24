import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpAssetEdgesData, IpAssetEdgesOptions, getIpAssetEdges } from "../lib/api/getIpAssetEdges"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetEdgesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetEdgesOptions = {
  options?: IpAssetEdgesOptions
  queryOptions?: UseIpAssetEdgesQueryOptions
}

export function useIpAssetEdges({ options, queryOptions }: UseIpAssetEdgesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetEdges", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetEdges({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetEdgesData>
}
