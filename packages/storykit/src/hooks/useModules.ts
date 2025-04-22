import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { ModulesData, ModulesOptions, getModules } from "../lib/api/getModules"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseModulesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseModulesOptions = {
  moduleIds?: Address[]
  options?: ModulesOptions
  queryOptions?: UseModulesQueryOptions
}

export function useModules({ moduleIds, options, queryOptions }: UseModulesOptions = {}) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getModules", moduleIds, options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getModules({ moduleIds, options, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<ModulesData>
}
