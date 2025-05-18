import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { formatEther } from "viem"

import { UseRoyaltyPaymentsOptions, useRoyaltyPayments } from "../useRoyaltyPayments"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseRoyaltyPaymentsOptions) => {
  const { isLoading, data } = useRoyaltyPayments(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={["id", "amount", "sender", "payerIpId", "receiverIpId"]}
      data={data.data.map((payment) => ({
        ...payment,
        amount: `${Number(formatEther(BigInt(payment.amount || 0))).toFixed(3)}IP`,
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useRoyaltyPayments",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: {
        limit: 10,
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
