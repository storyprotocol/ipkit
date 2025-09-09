import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionsOptions, useTransactions } from "../useTransactions"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseTransactionsOptions) => {
  const { isLoading, data } = useTransactions(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["txHash", "eventType", "ipId", "createdAt"]} data={data.data} />
}

const meta = {
  title: "Hooks/useTransactions",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    eventTypes: {
      control: "check",
      options: [
        "IPRegistered",
        "LicenseTermsAttached",
        "DerivativeRegistered",
        "DisputeRaised",
        "DisputeResolved",
        "DisputeCancelled",
        "DisputeJudgementSet",
        "RoyaltyPaid",
      ],
    },
  },
  args: {
    txHashes: [],
    ipIds: [],
    initiators: [],
    eventTypes: [],
    options: {},
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
