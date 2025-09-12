import { API_URL } from "@/constants/api"
import { CHAINS } from "@/constants/chains"
import { cn } from "@/lib"
import { ApiClient, createApiClient } from "@/lib/api/apiClient"
import { ChainConfig, IPKIT_SUPPORTED_CHAIN } from "@/types/chains"
import React, { useMemo } from "react"

export type Mode = "light" | "dark" | undefined
export type Theme = "default" | "story" | string

export interface IpKitProviderOptions {
  apiKey: string
  appId?: string
  children: React.ReactNode
  isTestnet?: boolean
  mode?: Mode
  theme?: Theme
  //
  // chain?: IPKIT_SUPPORTED_CHAIN
  // defaultCurrency?: ERC20Token
  // rpcUrl?: string
}

const IpKitContext = React.createContext<{
  apiBaseUrl: string
  apiClient: ApiClient
  apiKey: string
  appId: string | undefined
  chain: ChainConfig
  mode: Mode
  theme: Theme
  themeClass: string
} | null>(null)

export const IpKitProvider = ({
  apiKey,
  appId,
  children,
  isTestnet,
  mode,
  theme = "default",
}: IpKitProviderOptions) => {
  //
  // get ChainConfig using chain name, replace rpcUrl if alternative provided
  const chainConfig: ChainConfig = useMemo(
    // () => ({ ...CHAINS[IPKIT_SUPPORTED_CHAIN], ...{ rpcUrl: rpcUrl || CHAINS[chain].rpcUrl } }),
    () => CHAINS[isTestnet ? IPKIT_SUPPORTED_CHAIN.AENEID_TESTNET : IPKIT_SUPPORTED_CHAIN.STORY_MAINNET],
    [isTestnet]
  )

  const apiBaseUrl = useMemo(() => (isTestnet ? API_URL.STAGING : API_URL.PRODUCTION), [isTestnet])
  const apiClient = useMemo(() => createApiClient(apiBaseUrl), [apiBaseUrl])

  return (
    <IpKitContext.Provider
      value={{
        apiBaseUrl,
        apiClient,
        apiKey: apiKey,
        appId: appId,
        chain: chainConfig,
        mode: mode,
        theme: theme,
        themeClass: `${theme}${mode ? `-${mode}` : ""}`,
      }}
    >
      <div className={cn(theme)}>{children}</div>
    </IpKitContext.Provider>
  )
}

export const useIpKit = () => {
  const context = React.useContext(IpKitContext)
  if (!context) {
    throw new Error("useIpKit must be used within an IpKitProvider")
  }
  return context
}
