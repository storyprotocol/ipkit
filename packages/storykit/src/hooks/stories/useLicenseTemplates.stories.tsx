import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTemplatesOptions, useLicenseTemplates } from "../useLicenseTemplates"
import { CopyText } from "./(components)/CopyText"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseTemplatesOptions) => {
  const { isLoading, data } = useLicenseTemplates(args)
  const fields = ["id", "name", "metadataUri"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={data.data.map((template) => ({
        ...template,
        metadataUri: (
          <CopyText label={shortenAddress(template.metadataUri || "", 20)} value={template.metadataUri || ""} />
        ),
      }))}
    />
  )
}

const meta = {
  title: "Hooks/useLicenseTemplates",
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
