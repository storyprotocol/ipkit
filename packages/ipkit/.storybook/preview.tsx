import type { Preview } from "@storybook/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"
import { useEffect } from "react"

import { API_URL } from "../src/constants/api"
import { IPKIT_SUPPORTED_CHAIN } from "../src/types/chains"
import StoryProvider from "./directors/StoryProvider"
import "./global.css"
import theme from "./theme"

const TESTNET_API_KEY = process.env.STORYBOOK_STORY_PROTOCOL_X_TESTNET_API_KEY as string
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
    isTestnet: {
      description: "Selected Story chain",
      toolbar: {
        title: "Chain",
        icon: "link",
        items: [
          { value: true, title: "Testnet" },
          { value: false, title: "Mainnet" },
        ],
        defaultValue: true,
        dynamicTitle: true,
      },
    },
    skTheme: {
      description: "Global theme for components",
      toolbar: {
        title: "IpKit Theme",
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
    chain: IPKIT_SUPPORTED_CHAIN.AENEID_TESTNET,
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
      const testnet = context.globals.isTestnet !== undefined ? context.globals.isTestnet : true
      return (
        <StoryProvider apiKey={testnet ? TESTNET_API_KEY : API_KEY} isTestnet={testnet} theme={context.globals.skTheme}>
          <Story />
        </StoryProvider>
      )
    },
  ],
}

export default preview
