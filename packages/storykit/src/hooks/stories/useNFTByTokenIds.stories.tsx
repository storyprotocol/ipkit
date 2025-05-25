import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

import { UseNFTByTokenIdsOptions, useNFTByTokenIds } from "../useNFTByTokenIds"
import { DataTable } from "./(components)/DataTable"

const Example = (args: UseNFTByTokenIdsOptions) => {
  const { isLoading, data } = useNFTByTokenIds(args)

  if (isLoading) return <>loading...</>
  if (!data) return <>none found</>

  return (
    <>
      {data.nfts.map((nft, index) => (
        <DataTable
          key={index}
          fields={["name", "description", "contract.name"]}
          data={[
            {
              ...nft,
              "contract.name": nft.contract?.name || "",
            },
          ]}
        />
      ))}
    </>
  )
}

const meta = {
  title: "Hooks/useNFTByTokenIds",
  component: Example,
  parameters: {
    layout: "centered",
  },
  args: {
    nfts: [
      {
        contractAddress: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
        tokenId: "1",
      },
      {
        contractAddress: "0x47191BCaa3D7c2730dDAf71ce589b6Dc992cC55f",
        tokenId: "2",
      },
    ],
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
