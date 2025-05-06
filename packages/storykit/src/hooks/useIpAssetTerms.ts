import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { IpAssetTermsData, getIpAssetTerms } from "../lib/api/getIpAssetTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpAssetTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpAssetTermsOptions = {
  ipId: Address
  queryOptions?: UseIpAssetTermsQueryOptions
}

export function useIpAssetTerms({ ipId, queryOptions }: UseIpAssetTermsOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpAssetTerms", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpAssetTerms({ ipId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpAssetTermsData>
}
