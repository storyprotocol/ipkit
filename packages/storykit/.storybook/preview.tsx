import type { Preview } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { useEffect } from "react"

import { API_URL } from "../src/constants/api"
import { STORYKIT_SUPPORTED_CHAIN } from "../src/types/chains"
import StoryProvider from "./directors/StoryProvider"
import "./global.css"
import theme from "./theme"

const API_KEY = process.env.STORYBOOK_STORY_PROTOCOL_X_API_KEY as string

const preview: Preview = {
  parameters: {
    options: {
      theme,
      storySort: {
        order: ["Introduction", "Providers", "Hooks", "Components", "*", "Example", "WIP"],
      },
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    apiBaseUrl: {
      description: "Story API URL",
      toolbar: {
        title: "api url",
        icon: "globe",
        items: [
          { value: API_URL.STAGING, title: "staging" },
          { value: API_URL.PRODUCTION, title: "prod" },
        ],
        defaultValue: API_URL.STAGING,
        dynamicTitle: true,
      },
    },
    chain: {
      description: "Selected Story chain",
      toolbar: {
        title: "Chain",
        icon: "link",
        items: [...Object.values(STORYKIT_SUPPORTED_CHAIN)],
        defaultValue: STORYKIT_SUPPORTED_CHAIN.STORY_MAINNET,
        dynamicTitle: true,
      },
    },
    skTheme: {
      description: "Global theme for components",
      toolbar: {
        title: "StoryKit Theme",
        icon: "paintbrush",
        items: ["default", "story"],
        defaultValue: "default",
        dynamicTitle: true,
      },
    },
    mode: {
      description: "Global theme mode",
      toolbar: {
        title: "Mode",
        icon: "sun",
        items: ["light", "dark"],
        defaultValue: "light",
        dynamicTitle: true,
      },
    },
  },
  globals: {
    chain: STORYKIT_SUPPORTED_CHAIN.STORY_MAINNET,
  },
  decorators: [
    (Story, context) => {
      useEffect(() => {
        document.querySelector("html")?.setAttribute("class", context.globals.mode)
      }, [context.globals.mode])
      return <Story />
    },

    (Story) => {
      const queryClient = new QueryClient()
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      )
    },

    (Story, context) => {
      if (context.parameters.disableStoryProvider) {
        return <Story />
      }
      return (
        <StoryProvider apiBaseUrl={context.globals.apiBaseUrl} apiKey={API_KEY} theme={context.globals.skTheme}>
          <Story />
        </StoryProvider>
      )
    },
  ],
}

export default preview
