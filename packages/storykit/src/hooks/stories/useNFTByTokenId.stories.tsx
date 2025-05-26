import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseNFTByTokenIdOptions, useNFTByTokenId } from "../useNFTByTokenId"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseNFTByTokenIdOptions) => {
  const { isLoading, data } = useNFTByTokenId(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <DataTable
      fields={["name", "description", "contract.name"]}
      data={[
        {
          ...data,
          "contract.name": data.contract?.name || "",
        },
      ]}
    />
  )
}

const meta = {
  title: "Hooks/useNFTByTokenId",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    contractAddress: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
    tokenId: "1",
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
