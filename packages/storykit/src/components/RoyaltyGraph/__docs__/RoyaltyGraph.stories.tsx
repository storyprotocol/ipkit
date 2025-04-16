import { STORY_IP_ASSETS, STORY_IP_ASSETS_MAP } from "@/stories/data"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, waitFor } from "@storybook/test"
import { Address } from "viem"

import Example from "./Example"

const meta = {
  title: "WIP/Royalty Graph",
  component: Example,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
  args: {},
  // tags: ["isHidden"],
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  argTypes: {
    ipIds: {
      options: STORY_IP_ASSETS,
      mapping: STORY_IP_ASSETS_MAP,
    },
  },
  args: {
    ipIds: [STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[0]]] as Address[],
  },
}

export const LiquidAbsolutePercentage: Story = {
  args: {
    ipIds: [STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[1]]] as Address[],
  },
}

export const LiquidRelativePercentage: Story = {
  args: {
    ipIds: [STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[2]]] as Address[],
  },
}

export const Diamond: Story = {
  args: {
    ipIds: [STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[3]]] as Address[],
  },
}
