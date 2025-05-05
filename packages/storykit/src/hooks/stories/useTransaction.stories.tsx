import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionOptions, useTransaction } from "../useTransaction"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseTransactionOptions) => {
  const { isLoading, data } = useTransaction(args)
  const fields = ["txHash", "actionType", "resourceType", "ipId", "createdAt"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={data.data} />
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
