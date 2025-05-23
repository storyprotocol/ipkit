import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { ModuleResponse, getModule } from "../lib/api/getModule"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseModuleOptions = {
  moduleId: Address
  queryOptions?: IpQueryOptions
}

export function useModule({ moduleId, queryOptions }: UseModuleOptions) {
  const { chain, apiKey, apiClient } = useStoryKitContext()

  return useQuery({
    queryKey: ["getModule", moduleId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getModule({ moduleId, chainName: chain.name, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<ModuleResponse>
}
