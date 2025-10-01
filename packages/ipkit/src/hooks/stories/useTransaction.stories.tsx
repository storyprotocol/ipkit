import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseTransactionOptions, useTransaction } from "../useTransaction"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseTransactionOptions) => {
  const { isLoading, data } = useTransaction(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return <DataTable fields={["txHash", "eventType", "ipId", "createdAt"]} data={[data]} />
}

const meta = {
  title: "Hooks/useTransaction",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    txHash: "0x74ee6618188a165611e1e19d48f9342039aaf58ab8ebf2295fa3b92c39aecbaf",
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
