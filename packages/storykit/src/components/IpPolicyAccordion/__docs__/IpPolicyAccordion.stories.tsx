import { PREVIEW_IP_ASSETS } from "@/stories/data"
import { POLICY_TYPE } from "@/types/assets"
import type { Meta, StoryObj } from "@storybook/react"
import { expect, userEvent, waitFor, within } from "@storybook/test"

import Example from "./Example"

const meta = {
  title: "IP Assets/IpPolicyAccordion",
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
    ipId: {
      options: PREVIEW_IP_ASSETS,
    },
  },
  args: {
    ipId: PREVIEW_IP_ASSETS[0] as `0x${string}`,
    size: "medium",
  },
}
export const Input: Story = {
  argTypes: {
    ipId: { control: "text" },
  },
  args: {
    ipId: PREVIEW_IP_ASSETS[0] as `0x${string}`,
    size: "medium",
  },
}
export const IpNoPolicy: Story = {
  argTypes: {
    ipId: {
      options: ["0x0aEcA721aDceb65fbE81F450a1C59978fF903124"],
    },
  },
  args: {
    ipId: "0x0aEcA721aDceb65fbE81F450a1C59978fF903124",
    size: "medium",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(() => {
      expect(canvas.getByText("No Policy")).toBeInTheDocument()
    })
  },
}
export const IpOfCommercialRemix: Story = {
  argTypes: {
    ipId: {
      options: ["0x9344852e16A4aCC2592FDeD4301eDcC58E8E0128"],
    },
  },
  args: {
    ipId: "0x9344852e16A4aCC2592FDeD4301eDcC58E8E0128",
    size: "large",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX)).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX).nextElementSibling?.classList).not.toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )
  },
}
export const IpOfCommercialUse: Story = {
  argTypes: {
    ipId: {
      options: ["0x86Fd9B1abbF0BeCBdA6F50e39dEfb5D4b50392D7"],
    },
  },
  args: {
    ipId: "0x86Fd9B1abbF0BeCBdA6F50e39dEfb5D4b50392D7",
    size: "small",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE)).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE).nextElementSibling?.classList).not.toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )
  },
}
export const IpOfNonCommercialSocialRemixing: Story = {
  argTypes: {
    ipId: {
      options: ["0x2cd96d28842e2445c6A1378A07F1FBD788Ee074F"],
    },
  },
  args: {
    ipId: "0x2cd96d28842e2445c6A1378A07F1FBD788Ee074F",
    size: "large",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING)).toBeInTheDocument()
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING))
    await waitFor(
      () => {
        expect(
          canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING).nextElementSibling?.classList
        ).not.toContain("skIpPolicyAccordion__item-list--expanded")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )
  },
}
export const IpOfMultiplePolicies: Story = {
  argTypes: {
    ipId: {
      options: ["0x2CFc4F2F086cf9a859d87119dA0d54bB88173516"],
    },
  },
  args: {
    ipId: "0x2CFc4F2F086cf9a859d87119dA0d54bB88173516",
    size: "medium",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX)).toBeInTheDocument()
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE)).toBeInTheDocument()
        expect(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING)).toBeInTheDocument()
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE).nextElementSibling?.classList).not.toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
        expect(
          canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING).nextElementSibling?.classList
        ).not.toContain("skIpPolicyAccordion__item-list--expanded")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_REMIX).nextElementSibling?.classList).not.toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING))
    await waitFor(
      () => {
        expect(
          canvas.getByText(POLICY_TYPE.NON_COMMERCIAL_SOCIAL_REMIXING).nextElementSibling?.classList
        ).not.toContain("skIpPolicyAccordion__item-list--expanded")
      },
      { timeout: 10000 }
    )

    await userEvent.click(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE))
    await waitFor(
      () => {
        expect(canvas.getByText(POLICY_TYPE.COMMERCIAL_USE).nextElementSibling?.classList).toContain(
          "skIpPolicyAccordion__item-list--expanded"
        )
      },
      { timeout: 10000 }
    )
  },
}
