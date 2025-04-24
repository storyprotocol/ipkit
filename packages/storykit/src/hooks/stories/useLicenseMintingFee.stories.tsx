import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseMintingFeeOptions, useLicenseMintingFee } from "../useLicenseMintingFee"

const Example = (args: UseLicenseMintingFeeOptions) => {
  const { isLoading, data } = useLicenseMintingFee(args)
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
      <tr className="sk-py-0.5">
        <td className="sk-px-2">{data?.data?.id || ""}</td>
        <td className="sk-px-2">{data?.data?.amount || ""}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.payer || "")}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.receiverIpId || "")}</td>
        <td className="sk-px-2">{shortenAddress(data?.data?.token || "")}</td>
        <td className="sk-px-2">{data?.data?.blockNumber || ""}</td>
        <td className="sk-px-2">{data?.data?.blockTimestamp || ""}</td>
      </tr>
    </table>
  )
}

const meta = {
  title: "Hooks/useLicenseMintingFee",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseMintingFeePaidId: "0x030842d26e948d4a436088a16a914a4b6e2c0ca23445d68360249d508c5080bc14",
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
