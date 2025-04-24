import { type UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query"

import { LicenseMintingFeePaidData, getLicenseMintingFeePaid } from "../lib/api/getLicenseMintingFeePaid"
import { useStoryKitContext } from "../providers/StoryKitProvider"

export type UseLicenseMintingFeePaidQueryOptions = Omit<UseQueryOptions, "queryFn" | "queryKey">

export type UseLicenseMintingFeePaidOptions = {
  licenseMintingFeePaidId: string
  queryOptions?: UseLicenseMintingFeePaidQueryOptions
}

export function useLicenseMintingFeePaid({ licenseMintingFeePaidId, queryOptions }: UseLicenseMintingFeePaidOptions) {
  const { chain, apiKey } = useStoryKitContext()

  return useQuery({
    queryKey: ["getLicenseMintingFeePaid", licenseMintingFeePaidId, queryOptions],
    queryFn: async () => {
      const { data, error } = await getLicenseMintingFeePaid({ licenseMintingFeePaidId, chainName: chain.name, apiKey })
      if (error) throw error
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<LicenseMintingFeePaidData>
}
