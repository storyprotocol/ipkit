import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { LicenseTemplatesData, LicenseTemplatesOptions, getLicenseTemplates } from "../lib/api/getLicenseTemplates"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseTemplatesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseTemplatesOptions = {
  licenseTemplateIds?: Address[]
  options?: LicenseTemplatesOptions
  queryOptions?: UseLicenseTemplatesQueryOptions
}

export function useLicenseTemplates({ licenseTemplateIds, options, queryOptions }: UseLicenseTemplatesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseTemplates", licenseTemplateIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseTemplates({ licenseTemplateIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseTemplatesData>
}
