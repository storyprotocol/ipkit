import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { formatEther } from "viem"

import { UseLicenseMintingFeeOptions, useLicenseMintingFee } from "../useLicenseMintingFee"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseMintingFeeOptions) => {
  const { isLoading, data } = useLicenseMintingFee(args)
  const fields = ["id", "amount", "payer", "receiverIpId", "token"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={[
        {
          ...data.data,
          amount: `${Number(formatEther(BigInt(data.data.amount || 0))).toFixed(3)} IP`,
        },
      ]}
    />
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
