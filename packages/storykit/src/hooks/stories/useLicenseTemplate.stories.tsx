import { shortenAddress } from "@/lib"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTemplateOptions, useLicenseTemplate } from "../useLicenseTemplate"
import { CopyText } from "./(components)/CopyText"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseTemplateOptions) => {
  const { isLoading, data } = useLicenseTemplate(args)
  const fields = ["id", "name", "metadataUri"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return (
    <DataTable
      fields={fields}
      data={[
        {
          ...data.data,
          metadataUri: (
            <CopyText label={shortenAddress(data.data.metadataUri || "", 20)} value={data.data.metadataUri || ""} />
          ),
        },
      ]}
    />
  )
}

const meta = {
  title: "Hooks/useLicenseTemplate",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTemplateId: "0x2E896b0b2Fdb7457499B56AAaA4AE55BCB4Cd316",
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
