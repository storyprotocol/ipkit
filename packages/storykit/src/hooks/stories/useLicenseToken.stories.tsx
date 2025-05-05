import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseLicenseTokenOptions, useLicenseToken } from "../useLicenseToken"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseLicenseTokenOptions) => {
  const { isLoading, data } = useLicenseToken(args)
  const fields = ["id", "licenseTemplate", "licenseTermsId", "licensorIpId", "owner", "transferable", "burntAt"]

  if (isLoading) return <>loading...</>
  if (!data?.data) return <>none found</>

  return <DataTable fields={fields} data={[data.data]} />
}

const meta = {
  title: "Hooks/useLicenseToken",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    licenseTokenId: "11264",
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
