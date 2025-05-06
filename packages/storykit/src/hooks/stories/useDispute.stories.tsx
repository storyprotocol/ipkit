import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseDisputeOptions, useDispute } from "../useDispute"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseDisputeOptions) => {
  const { isLoading, data } = useDispute(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "status", "initiator", "targetIpId", "arbitrationPolicy"]} data={[data.data]} />
}

const meta = {
  title: "Hooks/useDispute",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    disputeId: "1",
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
