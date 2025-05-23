import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UsePermissionsOptions, usePermissions } from "../usePermissions"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UsePermissionsOptions) => {
  const { isLoading, data } = usePermissions(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "permission", "func", "signer", "to"]} data={data.data} />
}

const meta = {
  title: "Hooks/usePermissions",
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
