import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDisputesOptions, useDisputes } from "../useDisputes"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseDisputesOptions) => {
  const { isLoading, data } = useDisputes(args)
  const fields = ["id", "status", "initiator", "targetIpId", "arbitrationPolicy"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={data.data} />
}

const meta = {
  title: "Hooks/useDisputes",
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
