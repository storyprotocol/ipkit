import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionOptions, useTransaction } from "../useTransaction"

const Example = (args: UseTransactionOptions) => {
  const { isLoading, data } = useTransaction(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-p-4">
      <table className="sk-border-spacing-4">
        <tbody>
          <tr className="sk-py-0.5">
            <td className="sk-px-2 sk-font-medium">Transaction Hash</td>
            <td className="sk-px-2">{shortenAddress(data?.data?.[0]?.txHash || "")}</td>
          </tr>
          <tr className="sk-py-0.5">
            <td className="sk-px-2 sk-font-medium">Action Type</td>
            <td className="sk-px-2">{data?.data?.[0]?.actionType || ""}</td>
          </tr>
          <tr className="sk-py-0.5">
            <td className="sk-px-2 sk-font-medium">Block Number</td>
            <td className="sk-px-2">{data?.data?.[0]?.blockNumber || ""}</td>
          </tr>
          <tr className="sk-py-0.5">
            <td className="sk-px-2 sk-font-medium">Resource Type</td>
            <td className="sk-px-2">{data?.data?.[0]?.resourceType || ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useTransaction",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    trxId: "0x70045880a7f7db3b43de738c24f00c5b1cef48d5f95bc633d4df7002dfffbc95",
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
