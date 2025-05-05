import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { formatEther } from "viem"

import { UseRoyaltyPaymentOptions, useRoyaltyPayment } from "../useRoyaltyPayment"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseRoyaltyPaymentOptions) => {
  const { isLoading, data } = useRoyaltyPayment(args)
  const fields = ["id", "amount", "sender", "payerIpId", "receiverIpId"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={[
        {
          ...data.data,
          amount: `${Number(formatEther(BigInt(data.data.amount || 0))).toFixed(3)}IP`,
        },
      ]}
    />
  )
}

const meta = {
  title: "Hooks/useRoyaltyPayment",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    royaltyPayId: "0x9e3a1f325519871f4db66b7e3b6ae4c9734e82bc641d2a6189ec9c0d963923ea7",
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
