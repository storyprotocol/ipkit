import React, { FC } from "react"

import "../../../global.css"
import { IpKitProvider, useIpKit } from "../IpKitProvider"

const TESTNET_API_KEY = process.env.STORYBOOK_STORY_PROTOCOL_X_TESTNET_API_KEY as string
const API_KEY = process.env.STORYBOOK_STORY_PROTOCOL_X_API_KEY as string

const Example: FC<{
  isTestnet: boolean

  children?: React.ReactNode
}> = ({ isTestnet, children = <ExampleComponent /> }) => {
  return (
    <IpKitProvider apiKey={isTestnet ? TESTNET_API_KEY : API_KEY} isTestnet={isTestnet}>
      {children}
    </IpKitProvider>
  )
}

const ExampleComponent = () => {
  const { chain, apiBaseUrl } = useIpKit()
  return (
    <div className={"flex flex-col h-full bg-background p-8 font-sans text-primary"}>
      <div className="text-sm text-foreground">
        <i>id:</i> <strong>{chain.id}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>url:</i> <strong>{apiBaseUrl}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>name:</i> <strong>{chain.name}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>displayName:</i> <strong>{chain.displayName}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>rpcUrl:</i> <strong>{chain.rpcUrl}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>blockExplorerUrl:</i> <strong>{chain.blockExplorerUrl}</strong>
      </div>
      <div className="text-sm text-foreground">
        <i>protocolExplorerUrl:</i> <strong>{chain.protocolExplorerUrl}</strong>
      </div>
    </div>
  )
}

export default Example
