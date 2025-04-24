import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { IpLicenseTermsByIpIdData, getIpLicenseTermsByIpId } from "../lib/api/getIpLicenseTermsByIpId"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseIpLicenseTermsByIpIdQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseIpLicenseTermsByIpIdOptions = {
  ipId: string
  queryOptions?: UseIpLicenseTermsByIpIdQueryOptions
}

export function useIpLicenseTermsByIpId({ ipId, queryOptions }: UseIpLicenseTermsByIpIdOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getIpLicenseTermsByIpId", ipId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getIpLicenseTermsByIpId({ ipId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<IpLicenseTermsByIpIdData>
}
