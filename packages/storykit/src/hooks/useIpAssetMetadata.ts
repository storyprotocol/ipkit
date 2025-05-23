import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetMetadataResponse, getIpAssetMetadata } from "../lib/api/getIpAssetMetadata"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetMetadataOptions = {
  ipId: Address
  queryOptions?: IpQueryOptions
}

export function useIpAssetMetadata({ ipId, queryOptions }: UseIpAssetMetadataOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetMetadata", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetMetadata({ ipId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    retry: false,
    ...queryOptions,
  }) as UseQueryResult<IpAssetMetadataResponse>
}
