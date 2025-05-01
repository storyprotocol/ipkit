import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetsTermsData, IpAssetsTermsOptions, getIpAssetsTerms } from "../lib/api/getIpAssetsTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetsTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetsTermsOptions = {
  ipIds?: Address[]
  options?: IpAssetsTermsOptions
  queryOptions?: UseIpAssetsTermsQueryOptions
}

export function useIpAssetsTerms({ ipIds, options, queryOptions }: UseIpAssetsTermsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetsTerms", ipIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetsTerms({ ipIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetsTermsData>
}
