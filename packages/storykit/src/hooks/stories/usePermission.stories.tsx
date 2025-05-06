import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UsePermissionOptions, usePermission } from "../usePermission"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UsePermissionOptions) => {
  const { isLoading, data } = usePermission(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "permission", "func", "signer", "to", "uuid"]} data={[data.data]} />
}

const meta = {
  title: "Hooks/usePermission",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    permissionId: "0xa3a6b74f2b1770x0",
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
