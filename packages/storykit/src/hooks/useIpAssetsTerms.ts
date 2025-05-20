import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsTermsOptions, IpAssetsTermsResponse, getIpAssetsTerms } from "../lib/api/getIpAssetsTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetsTermsOptions = {
  ipIds?: Address[]
  options?: IpAssetsTermsOptions
  queryOptions?: IpQueryOptions
}

export function useIpAssetsTerms({ ipIds, options, queryOptions }: UseIpAssetsTermsOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetsTerms", ipIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetsTerms({ ipIds, options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetsTermsResponse>
}
