import React from "react"

import "../../src/global.css"
import { IpKitProvider, IpKitProviderOptions } from "../../src/providers/IpKitProvider"

interface IpKitProviderProps extends IpKitProviderOptions {
  children: React.ReactNode
}

export default function StoryProvider({ children, ...props }: IpKitProviderProps) {
  return <IpKitProvider {...props}>{children}</IpKitProvider>
}
