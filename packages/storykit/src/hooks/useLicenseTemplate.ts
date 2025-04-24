import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseTemplateData, getLicenseTemplate } from "../lib/api/getLicenseTemplate"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTemplateQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTemplateOptions = {
  licenseTemplateId: string
  queryOptions?: UseLicenseTemplateQueryOptions
}

export function useLicenseTemplate({ licenseTemplateId, queryOptions }: UseLicenseTemplateOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTemplate", licenseTemplateId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTemplate({ licenseTemplateId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTemplateData>
}
