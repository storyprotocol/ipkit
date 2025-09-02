import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsOptions, IpAssetsResponse, getIpAssets } from "../lib/api/getIpAssets"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetsOptions = {
  ipIds?: Address[]
  includeLicenses?: boolean
  moderated?: boolean
  options?: IpAssetsOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssets({
  ipIds,
  includeLicenses,
  moderated,
  options,
  queryOptions,
}: UseIpAssetsOptions = {}): UseQueryResult<IpAssetsResponse> {
  const { apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssets", ipIds, includeLicenses, moderated, options],
    queryFn: async () => {
      const { data, error } = await getIpAssets({ ipIds, includeLicenses, moderated, options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  })
}
