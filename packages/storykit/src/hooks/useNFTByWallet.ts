import { WalletNFTRequest, getNFTByWallet } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers/StoryKitProvider"
import { NFTWalletResponse } from "@/types/alchemy"
import { IpQueryOptions } from "@/types/openapi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

export type UseNFTByWalletOptions = {
  options: WalletNFTRequest
  queryOptions?: IpQueryOptions
}

export function useNFTByWallet({ options, queryOptions }: UseNFTByWalletOptions) {
  const { chain, alchemyApiKey } = useStoryKitContext()

  if (!alchemyApiKey) {
    throw new Error("Alchemy API key is not set. Please set it in the StoryKitProvider")
  }

  return useQuery({
    queryKey: ["getNFTByWallet", options, chain.alchemyId],
    queryFn: async () => {
      const data = await getNFTByWallet({
        options,
        chainName: chain.alchemyId,
        apiKey: alchemyApiKey,
      })
      return data
    },
    ...queryOptions,
  }) as UseQueryResult<NFTWalletResponse>
}
