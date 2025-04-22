import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseMintingFeePaysOptions, useLicenseMintingFeePays } from "../useLicenseMintingFeePays"

const Example = (args: UseLicenseMintingFeePaysOptions) => {
  const { isLoading, data } = useLicenseMintingFeePays(args)
  if (isLoading) return <>loading...</>
  return (
    <table className="sk-border-spacing-4">
      <tr className="sk-bg-slate-100 sk-py-0.5">
        <th className="sk-px-2" align="left">
          ID
        </th>
        <th className="sk-px-2" align="left">
          Amount
        </th>
        <th className="sk-px-2" align="left">
          Payer
        </th>
        <th className="sk-px-2" align="left">
          Receiver IP ID
        </th>
        <th className="sk-px-2" align="left">
          Token
        </th>
        <th className="sk-px-2" align="left">
          Block Number
        </th>
        <th className="sk-px-2" align="left">
          Block Timestamp
        </th>
      </tr>
      {data?.data?.map((fee) => (
        <tr key={fee.id} className="sk-py-0.5">
          <td className="sk-px-2">{fee.id || ""}</td>
          <td className="sk-px-2">{fee.amount || ""}</td>
          <td className="sk-px-2">{shortenAddress(fee.payer || "")}</td>
          <td className="sk-px-2">{shortenAddress(fee.receiverIpId || "")}</td>
          <td className="sk-px-2">{shortenAddress(fee.token || "")}</td>
          <td className="sk-px-2">{fee.blockNumber || ""}</td>
          <td className="sk-px-2">{fee.blockTimestamp || ""}</td>
        </tr>
      ))}
    </table>
  )
}

const meta = {
  title: "Hooks/useLicenseMintingFeePays",
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
