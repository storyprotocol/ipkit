import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseOwnersByTokenIdOptions, useOwnersByTokenId } from "../useOwnersByTokenId"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseOwnersByTokenIdOptions) => {
  const { isLoading, data } = useOwnersByTokenId(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <>
      {data.owners.map((owner, index) => (
        <DataTable key={index} fields={["owner"]} data={[{ owner }]} />
      ))}
    </>
  )
}

const meta = {
  title: "Hooks/useOwnersByTokenId",
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
