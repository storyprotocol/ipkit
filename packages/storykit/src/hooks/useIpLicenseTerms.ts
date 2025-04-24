import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpLicenseTermsData, IpLicenseTermsOptions, getIpLicenseTerms } from "../lib/api/getIpLicenseTerms"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpLicenseTermsQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpLicenseTermsOptions = {
  options?: IpLicenseTermsOptions
  queryOptions?: UseIpLicenseTermsQueryOptions
}

export function useIpLicenseTerms({ options, queryOptions }: UseIpLicenseTermsOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpLicenseTerms", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpLicenseTerms({ options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpLicenseTermsData>
}
