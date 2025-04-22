import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDisputesOptions, useDisputes } from "../useDisputes"

const Example = (args: UseDisputesOptions) => {
  const { isLoading, data } = useDisputes(args)
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
      {data?.data?.map((dispute) => (
        <tr key={dispute.id?.toString()} className="sk-py-0.5">
          <td className="sk-px-2">{dispute.id?.toString() || ""}</td>
          <td className="sk-px-2">{dispute.status || ""}</td>
          <td className="sk-px-2">{shortenAddress(dispute.initiator || "")}</td>
          <td className="sk-px-2">{shortenAddress(dispute.targetIpId || "")}</td>
          <td className="sk-px-2">{shortenAddress(dispute.currentTag || "")}</td>
          <td className="sk-px-2">{shortenAddress(dispute.targetTag || "")}</td>
        </tr>
      ))}
    </table>
  )
}

const meta = {
  title: "Hooks/useDisputes",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: {
        limit: 5,
      },
    },
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
