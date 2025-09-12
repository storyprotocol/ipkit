"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { IpKitProvider } from "@story-protocol/ipkit"

const API_KEY = process.env.NEXT_PUBLIC_STORY_PROTOCOL_X_API_KEY as string

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <IpKitProvider apiKey={API_KEY} >
        {children}
      </IpKitProvider>
    </QueryClientProvider>
  )
}
