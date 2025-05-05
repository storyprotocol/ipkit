import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseIpGroupsOptions, useIpGroups } from "../useIpGroups"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseIpGroupsOptions) => {
  const { isLoading, data } = useIpGroups(args)
  const fields = ["group_id", "ip_count"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={data.data} />
}

const meta = {
  title: "Hooks/useIpGroups",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    options: {
      pagination: { limit: 5 },
      orderBy: "groupId",
      orderDirection: "desc",
    },
    queryOptions: {
      enabled: true,
    },
  },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {},
}
