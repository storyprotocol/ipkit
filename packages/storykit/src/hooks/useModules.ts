import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { ModulesOptions, ModulesResponse, getModules } from "../lib/api/getModules"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseModulesQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseModulesOptions = {
  options?: ModulesOptions
  queryOptions?: UseModulesQueryOptions
}

export function useModules({ options, queryOptions }: UseModulesOptions = {}) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getModules", options, queryOptions],
    queryFn: async () => {
      const { data, error } = await getModules({ options, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<ModulesResponse>
}
