import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { ModuleData, getModule } from "../lib/api/getModule"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseModuleQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseModuleOptions = {
  moduleId: string
  queryOptions?: UseModuleQueryOptions
}

export function useModule({ moduleId, queryOptions }: UseModuleOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getModule", moduleId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getModule({ moduleId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<ModuleData>
}
