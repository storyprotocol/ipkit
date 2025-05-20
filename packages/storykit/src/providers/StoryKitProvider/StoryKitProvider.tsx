import { STAGING_URL } from "@/constants/api"
import { CHAINS } from "@/constants/chains"
import { cn } from "@/lib"
import { ApiClient, createApiClient } from "@/lib/api/apiClient"
import { ChainConfig, ERC20Token, STORYKIT_SUPPORTED_CHAIN, WRAPPED_IP } from "@/types/chains"
import React, { useMemo } from "react"

export type Mode = "light" | "dark" | undefined
export type Theme = "default" | "story" | string

export interface StoryKitProviderOptions {
  chain?: STORYKIT_SUPPORTED_CHAIN
  defaultCurrency?: ERC20Token
  theme?: Theme
  mode?: Mode
  rpcUrl?: string
  apiKey: string
  appId?: string
  children: React.ReactNode
  apiBaseUrl?: string
}

const StoryKitContext = React.createContext<{
  chain: ChainConfig
  defaultCurrency?: ERC20Token
  theme: Theme
  mode: Mode
  themeClass: string
  apiKey: string
  appId: string | undefined
  apiBaseUrl: string
  apiClient: ApiClient
} | null>(null)

export const StoryKitProvider = ({
  chain = STORYKIT_SUPPORTED_CHAIN.STORY_MAINNET,
  defaultCurrency = WRAPPED_IP,
  theme = "default",
  apiBaseUrl = STAGING_URL,
  mode,
  rpcUrl,
  apiKey,
  appId,
  children,
}: StoryKitProviderOptions) => {
  //
  // get ChainConfig using chain name, replace rpcUrl if alternative provided
  const chainConfig: ChainConfig = useMemo(
    () => ({ ...CHAINS[chain], ...{ rpcUrl: rpcUrl || CHAINS[chain].rpcUrl } }),
    [chain, rpcUrl]
  )

  const apiClient = useMemo(() => createApiClient(apiBaseUrl), [apiBaseUrl])

  return (
    <StoryKitContext.Provider
      value={{
        chain: chainConfig,
        defaultCurrency,
        theme: theme,
        mode: mode,
        themeClass: `${theme}${mode ? `-${mode}` : ""}`,
        apiKey: apiKey,
        appId: appId,
        apiBaseUrl,
        apiClient,
      }}
    >
      <div className={cn(theme)}>{children}</div>
    </StoryKitContext.Provider>
  )
}

export const useStoryKitContext = () => {
  const context = React.useContext(StoryKitContext)
  if (!context) {
    throw new Error("useStoryKitContext must be used within an StoryKitProvider")
  }
  return context
}
