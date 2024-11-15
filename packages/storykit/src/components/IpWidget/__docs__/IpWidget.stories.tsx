import { STORY_IP_ASSETS, STORY_IP_ASSETS_MAP } from "@/stories/data"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within } from "@storybook/test"

import Example from "./Example"

const meta = {
  title: "WIP/IpWidget",
  component: Example,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    isBottomNav: { control: "boolean", defaultValue: true },
    ipId: {
      control: {
        type: "select",
      },
      options: STORY_IP_ASSETS,
      mapping: STORY_IP_ASSETS_MAP,
    },
  },
  args: {
    ipId: STORY_IP_ASSETS[0] as `0x${string}`,
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
  argTypes: {
    ipId: {},
  },
  args: {
    isBottomNav: true,
  },
}
export const Input: Story = {
  argTypes: {
    ipId: { control: "text" },
  },
  args: {
    ipId: STORY_IP_ASSETS_MAP[STORY_IP_ASSETS[0]] as `0x${string}`,
    isBottomNav: true,
  },
}
// export const IliadTestnetMint: Story = {
//   argTypes: {
//     ipId: { control: "text" },
//   },
//   args: {
//     ipId: ILIAD_TESTNET_ROOT,
//     isBottomNav: true,
//   },
// }

export const TopNavigation: Story = {
  argTypes: {
    ipId: { options: ["0x22Fe8C376919586F344fED952A9448df442b10f2"] },
    isBottomNav: { control: false },
  },
  args: {
    ipId: "0x22Fe8C376919586F344fED952A9448df442b10f2",
    isBottomNav: false,
  },
  play: async ({ canvasElement }) => {
    const wait = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout))
    await wait(10000)

    const canvas = within(canvasElement)

    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
        expect(canvas.getByText("11155111: Example NFT #4367")).toBeInTheDocument()
        expect(canvas.getByText("Owned by")).toBeInTheDocument()
        expect(canvas.getByText("0x3679...12E1")).toBeInTheDocument()
        expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Licensing"))
    await waitFor(
      () => {
        expect(canvas.getByText("Licensing").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("IP Graph"))
    await waitFor(
      () => {
        expect(canvas.getByText("IP Graph").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Royalty"))
    await waitFor(
      () => {
        expect(canvas.getByText("Royalty").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Overview"))
    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )
  },
}
export const BottomNavigation: Story = {
  argTypes: {
    ipId: { options: ["0x22Fe8C376919586F344fED952A9448df442b10f2"] },
    isBottomNav: { control: false },
  },
  args: {
    ipId: "0x22Fe8C376919586F344fED952A9448df442b10f2",
    isBottomNav: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
        expect(canvas.getByText("11155111: Example NFT #4367")).toBeInTheDocument()
        expect(canvas.getByText("Owned by")).toBeInTheDocument()
        expect(canvas.getByText("0x3679...12E1")).toBeInTheDocument()
        expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Licensing"))
    await waitFor(
      () => {
        expect(canvas.getByText("Licensing").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("IP Graph"))
    await waitFor(
      () => {
        expect(canvas.getByText("IP Graph").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Royalty"))
    await waitFor(
      () => {
        expect(canvas.getByText("Royalty").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText("Overview"))
    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
      },
      { timeout: 10000 }
    )
  },
}
export const IpFoundOverview: Story = {
  argTypes: {
    ipId: { options: ["0x22Fe8C376919586F344fED952A9448df442b10f2"] },
  },
  args: {
    ipId: "0x22Fe8C376919586F344fED952A9448df442b10f2",
    isBottomNav: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
        expect(canvas.getByText("11155111: Example NFT #4367")).toBeInTheDocument()
        expect(canvas.getByText("Owned by")).toBeInTheDocument()
        expect(canvas.getByText("0x3679...12E1")).toBeInTheDocument()
        expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument()
        expect(canvas.getByRole("img").getAttribute("src")).toBe(
          "https://cdn.simplehash.com/assets/69ac28cb44bcf041b5d103706c80cad6b6207ced313c7d768f7875d448ea07e5.jpg"
        )
      },
      { timeout: 10000 }
    )
  },
}
export const IpNotFoundOverview: Story = {
  argTypes: {
    ipId: { options: ["0x22Fe8C376919586F344fED952A9448df442b1999"] },
  },
  args: {
    ipId: "0x22Fe8C376919586F344fED952A9448df442b1999",
    isBottomNav: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("Overview").classList).not.toContain("skIpWidget__tab--active")
        expect(canvas.getByText("Untitled")).toBeInTheDocument()
        expect(canvas.getByText("Owned by")).toBeInTheDocument()
        expect(canvas.getByRole("button", { expanded: false })).toBeInTheDocument()
        expect(canvas.getByRole("img").getAttribute("src")).toBeNull()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByRole("button", { expanded: false }))
  },
}
export const MenuOpenAndClose: Story = {
  argTypes: {
    ipId: { options: ["0x22Fe8C376919586F344fED952A9448df442b10f2"] },
  },
  args: {
    ipId: "0x22Fe8C376919586F344fED952A9448df442b10f2",
    isBottomNav: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText("11155111: Example NFT #4367")).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByRole("button", { expanded: false }))
    await waitFor(
      () => {
        expect(canvas.getByRole("menu").getAttribute("data-headlessui-state")).toBe("open")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByRole("button", { expanded: true }))
    await waitFor(
      () => {
        expect(canvas.queryByRole("menu")).toBeNull()
      },
      { timeout: 10000 }
    )
  },
}
