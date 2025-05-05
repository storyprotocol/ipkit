import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLatestTransactionsOptions, useLatestTransactions } from "../useLatestTransactions"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLatestTransactionsOptions) => {
  const { isLoading, data } = useLatestTransactions(args)
  const fields = ["txHash", "actionType", "resourceType", "ipId", "createdAt"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={data.data} />
}

const meta = {
  title: "Hooks/useLatestTransactions",
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
