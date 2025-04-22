import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDisputeOptions, useDispute } from "../useDispute"

const Example = (args: UseDisputeOptions) => {
  const { isLoading, data } = useDispute(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          ID
        </th>
        <th className="sk-px-2" align="left">
          Status
        </th>
        <th className="sk-px-2" align="left">
          Initiator
        </th>
        <th className="sk-px-2" align="left">
          Target IP ID
        </th>
        <th className="sk-px-2" align="left">
          Current Tag
        </th>
        <th className="sk-px-2" align="left">
          Target Tag
        </th>
      </tr>
      <tr className="sk-py-0.5">
        <td className="sk-px-2">{data?.data?.id?.toString() || ""}</td>
        <td className="sk-px-2">{data?.data?.status || ""}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.initiator || "")}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.targetIpId || "")}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.currentTag || "")}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.targetTag || "")}</td>
      </tr>
    </table>
  )
}

const meta = {
  title: "Hooks/useDispute",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    disputeId: "1",
    queryOptions: {
      enabled: true,
    },
  },
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
