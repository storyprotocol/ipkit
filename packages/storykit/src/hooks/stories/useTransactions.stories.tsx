import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionsOptions, useTransactions } from "../useTransactions"

const Example = (args: UseTransactionsOptions) => {
  const { isLoading, data } = useTransactions(args)
  if (isLoading) return <>loading...</>
  return (
    <div className="sk-p-4">
      <table className="sk-border-spacing-4">
        <thead>
          <tr className="sk-bg-slate-100 sk-py-0.5">
            <td className="sk-px-2" align="left">
              Transaction Hash
            </td>
            <td className="sk-px-2" align="left">
              Action Type
            </td>
            <td className="sk-px-2" align="left">
              Block Number
            </td>
            <td className="sk-px-2" align="left">
              Resource Type
            </td>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((transaction) => (
            <React.Fragment key={transaction.id}>
              <tr className="sk-py-0.5">
                <td className="sk-px-2">{shortenAddress(transaction.txHash || "")}</td>
                <td className="sk-px-2">{transaction.actionType || ""}</td>
                <td className="sk-px-2">{transaction.blockNumber || ""}</td>
                <td className="sk-px-2">{transaction.resourceType || ""}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const meta = {
  title: "Hooks/useTransactions",
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
