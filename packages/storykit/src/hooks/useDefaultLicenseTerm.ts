import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { DefaultLicenseTermData, getDefaultLicenseTerm } from "../lib/api/getDefaultLicenseTerm"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseDefaultLicenseTermQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseDefaultLicenseTermOptions = {
  queryOptions?: UseDefaultLicenseTermQueryOptions
}

export function useDefaultLicenseTerm({ queryOptions }: UseDefaultLicenseTermOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getDefaultLicenseTerm", queryOptions],
    queryFn: async () => {
      const { data, error } = await getDefaultLicenseTerm({ chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<DefaultLicenseTermData>
}
