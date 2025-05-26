import { getCollectionByAddress, getNFTByWallet } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers"
import { AENEID_PREVIEW_IP_ASSETS } from "@/stories/data"
import { STORYKIT_SUPPORTED_CHAIN } from "@/types/chains"
import React, { FC, useEffect, useState } from "react"
import { Address } from "viem"

import CollectionGraph, { CollectionGraphProps } from "../CollectionGraph"

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string

const Example: FC<CollectionGraphProps> = ({
  collectionAddress = AENEID_PREVIEW_IP_ASSETS[0] as Address,
  width = 2000,
  height = 1000,
  showName = false,
  showRelationship = false,
  darkMode = false,
}) => {
  const { chain } = useStoryKitContext()
  const [collections, setCollections] = useState<any>(null)
  const [nfts, setNfts] = useState<any>(null)

  useEffect(() => {
    const fetch = async () => {
      const collectionMetadata = await getCollectionByAddress({
        contractAddress: "0x7ee32b8B515dEE0Ba2F25f612A04a731eEc24F49",
        chainName: chain.alchemyId,
        apiKey: ALCHEMY_API_KEY,
      })
      setCollections(collectionMetadata)
      const nftWalletResponse = await getNFTByWallet({
        options: {
          owner: "0xB1918E7d6CB67d027F6aBc66DC3273D6ECAD6dE5",
        },
        chainName: chain.alchemyId,
        apiKey: ALCHEMY_API_KEY,
      })
      setNfts(nftWalletResponse)
    }
    fetch()
  }, [chain])

  return (
    <>
      <CollectionGraph
        collectionAddress={collectionAddress}
        width={width}
        height={height}
        showName={showName}
        showRelationship={showRelationship}
        darkMode={darkMode}
      />

      {collections && (
        <div id="collections" style={{ visibility: "hidden", position: "fixed" }}>
          {JSON.stringify(collections)}
        </div>
      )}
      {nfts && (
        <div id="nfts" style={{ visibility: "hidden", position: "fixed" }}>
          {JSON.stringify(nfts)}
        </div>
      )}
    </>
  )
}

export default Example
