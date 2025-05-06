import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseModulesOptions, useModules } from "../useModules"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseModulesOptions) => {
  const { isLoading, data } = useModules(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "name", "module", "moduleTypeInterfaceId", "transactionHash"]} data={data.data} />
}

const meta = {
  title: "Hooks/useModules",
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
