"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { StoryKitProvider } from "@storyprotocol/storykit"

const API_KEY = process.env.NEXT_PUBLIC_STORY_PROTOCOL_X_API_KEY as string

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <StoryKitProvider apiKey={API_KEY} theme="my-theme">
        {children}
      </StoryKitProvider>
    </QueryClientProvider>
  )
}
