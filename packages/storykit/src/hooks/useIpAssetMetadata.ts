import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetMetadataData, getIpAssetMetadata } from "../lib/api/getIpAssetMetadata"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetMetadataQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">
export type UseIpAssetMetadataOptions = {
  ipId: Address
  queryOptions?: UseIpAssetMetadataQueryOptions
}

export type { IpAssetMetadataData }

export function useIpAssetMetadata({ ipId, queryOptions }: UseIpAssetMetadataOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetMetadata", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetMetadata({ ipId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    retry: false,
    ...queryOptions,
  }) as UseQueryResult<IpAssetMetadataData>
}
