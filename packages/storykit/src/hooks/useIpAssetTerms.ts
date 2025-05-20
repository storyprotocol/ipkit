import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetTermsResponse, getIpAssetTerms } from "../lib/api/getIpAssetTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetTermsOptions = {
  ipId: Address
  queryOptions?: IpQueryOptions
}

export function useIpAssetTerms({ ipId, queryOptions }: UseIpAssetTermsOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetTerms", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetTerms({ ipId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetTermsResponse>
}
