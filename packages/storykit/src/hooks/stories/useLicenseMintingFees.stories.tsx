import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { formatEther } from "viem"

import { UseLicenseMintingFeesOptions, useLicenseMintingFees } from "../useLicenseMintingFees"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseMintingFeesOptions) => {
  const { isLoading, data } = useLicenseMintingFees(args)
  const fields = ["id", "amount", "payer", "receiverIpId", "token"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={data.data.map((fee) => ({
        ...fee,
        amount: `${Number(formatEther(BigInt(fee.amount || 0))).toFixed(3)} IP`,
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useLicenseMintingFees",
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
