import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDisputesOptions, useDisputes } from "../useDisputes"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseDisputesOptions) => {
  const { isLoading, data } = useDisputes(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "targetIpId", "initiator", "status", "currentTag"]} data={data.data} />
}

const meta = {
  title: "Hooks/useDisputes",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      options: {
        pagination: { limit: 5 },
        orderBy: "blockNumber",
        orderDirection: "desc",
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
