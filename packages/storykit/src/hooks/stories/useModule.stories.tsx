import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseModuleOptions, useModule } from "../useModule"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseModuleOptions) => {
  const { isLoading, data } = useModule(args)

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={["id", "name", "module", "moduleTypeInterfaceId", "transactionHash"]} data={[data.data]} />
}

const meta = {
  title: "Hooks/useModule",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    moduleId: "0x69D3a7aa9edb72Bc226E745A7cCdd50D947b69Ac",
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
