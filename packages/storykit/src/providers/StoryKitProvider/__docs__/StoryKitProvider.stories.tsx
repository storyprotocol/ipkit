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
    isTestnet: { control: "boolean" },
    theme: { control: "select", options: ["default", "story"] },
    mode: { control: "select", options: ["auto", "light", "dark"] },
  },
  args: {
    isTestnet: true,
    theme: "default",
    mode: "auto",
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {
    children: { control: false },
  },
  args: {
    isTestnet: true,
  },
}
