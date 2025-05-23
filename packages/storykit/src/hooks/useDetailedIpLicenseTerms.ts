import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { DetailedIpLicenseTermsResponse, getDetailedIpLicenseTerms } from "../lib/api/getDetailedIpLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDetailedIpLicenseTermsOptions = {
  ipIds: Address[]
  queryOptions?: IpQueryOptions
}

export function useDetailedIpLicenseTerms({ ipIds, queryOptions }: UseDetailedIpLicenseTermsOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()
  return useQuery({
    queryKey: ["getDetailedIpLicenseTerms", ipIds, queryOptions],
    queryFn: async () => {
      const { data, error } = await getDetailedIpLicenseTerms({ ipIds, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DetailedIpLicenseTermsResponse>
}
