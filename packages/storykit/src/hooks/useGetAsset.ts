import { UseQueryResult } from "@tanstack/react-query"

import { useStoryKitContext } from "../providers/StoryKitProvider"
import { type Asset } from "../types/openapi"
import { type UseGetQueryOptions, useGetQuery } from "./useGetQuery"

const API_KEY = process.env.STORYBOOK_STORY_PROTOCOL_X_API_KEY || process.env.NEXT_PUBLIC_STORY_PROTOCOL_X_API_KEY || ``
process.env.STORY_PROTOCOL_X_API_KEY || ""

export function useGetAsset(ipId: string, queryOptions?: UseGetQueryOptions) {
  const { chain } = useStoryKitContext()

  return useGetQuery(
    "/api/v3/assets/{assetId}",
    {
      params: {
        path: { assetId: ipId },
        header: {
          "X-Chain": chain.name,
          "X-Api-Key": API_KEY,
        },
      },
      headers: {
        "X-Extend-Asset": "true",
      },
    },
    {
      retry: false,
      ...queryOptions,
    }
  ) as UseQueryResult<{ data: Asset }>
}
