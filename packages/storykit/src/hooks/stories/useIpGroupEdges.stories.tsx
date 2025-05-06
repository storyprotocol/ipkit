import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpGroupEdgesOptions, useIpGroupEdges } from "../useIpGroupEdges"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpGroupEdgesOptions) => {
  const { isLoading, data } = useIpGroupEdges(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["group_id", "ip_id", "transaction_hash"]} data={data.data} />
}

const meta = {
  title: "Hooks/useIpGroupEdges",
  component: Example,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    groupId: {
      control: "text",
    },
  },
  args: {
    options: {
      pagination: { limit: 5 },
      orderBy: "blockNumber",
      orderDirection: "desc",
    },
    queryOptions: {
      enabled: true,
    },
    groupId: undefined,
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
