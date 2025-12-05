import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { Address } from "viem"

import { DisputesOptions, DisputesResponse, getDisputes } from "../lib/api/getDisputes"
import { useIpKit } from "../providers/IpKitProvider"

export type UseDisputesOptions = {
  options?: DisputesOptions
  queryOptions?: IpQueryOptions
  initiator?: Address
  targetIpId?: Address
}

export function useDisputes({
  initiator,
  targetIpId,
  options,
  queryOptions,
}: UseDisputesOptions = {}): UseQueryResult<DisputesResponse> {
  const { apiKey, apiClient, chain } = useIpKit()

  return useQuery({
    queryKey: [chain.id, "getDisputes", options, initiator, targetIpId],
    queryFn: async () => {
      const { data, error } = await getDisputes({ initiator, targetIpId, options, apiKey, apiClient })
      if (error) throw error
      return data
    },
    ...queryOptions,
  })
}
