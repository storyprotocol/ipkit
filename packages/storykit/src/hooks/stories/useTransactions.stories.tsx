import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionsOptions, useTransactions } from "../useTransactions"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseTransactionsOptions) => {
  const { isLoading, data } = useTransactions(args)
  const fields = ["txHash", "actionType", "resourceType", "ipId", "createdAt"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={data.data} />
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
