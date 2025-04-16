import { STORYKIT_SUPPORTED_CHAIN, WRAPPED_IP } from "@/types/chains"
import type { Meta, StoryObj } from "@storybook/react"

import Example from "./Example"

const meta = {
  title: "Providers/StoryKitProvider",
  component: Example,
  parameters: {
    layout: "centered",
    disableStoryProvider: true,
  },
  argTypes: {
    chain: { control: "select", options: Object.values(STORYKIT_SUPPORTED_CHAIN) },
    defaultCurrency: { control: "select", options: [WRAPPED_IP] },
    theme: { control: "select", options: ["default", "story"] },
    mode: { control: "select", options: ["auto", "light", "dark"] },
  },
  args: {
    chain: STORYKIT_SUPPORTED_CHAIN.STORY_MAINNET,
    theme: "default",
    mode: "auto",
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Aeneid: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    chain: STORYKIT_SUPPORTED_CHAIN.AENEID_TESTNET,
    defaultCurrency: WRAPPED_IP,
  },
}

export const Mainnet: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    chain: STORYKIT_SUPPORTED_CHAIN.STORY_MAINNET,
    defaultCurrency: WRAPPED_IP,
  },
}

export const DarkMode: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    mode: "dark",
  },
}

export const Theme: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    theme: "story",
  },
}
