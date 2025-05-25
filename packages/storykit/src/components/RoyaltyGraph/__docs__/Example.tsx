import { getCollectionByAddress, getNFTByWallet } from "@/lib/alchemy"
import { useStoryKitContext } from "@/providers"
import { RoyaltyGraphProvider } from "@/providers/RoyaltyGraphProvider/RoyaltyGraphProvider"
import { STORY_IP_ASSETS } from "@/stories/data"
import React, { FC, useEffect, useState } from "react"
import { Address } from "viem"

// import { IpProvider } from "../../../providers"
import RoyaltyGraph from "../RoyaltyGraph"

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string

const Example: FC<{
  ipIds: Address[]
  width?: number
  height?: number
  darkMode?: boolean
  isAnimated?: boolean
}> = ({
  ipIds = [STORY_IP_ASSETS[0]] as Address[],
  width = 400,
  height = 300,
  darkMode = false,
  isAnimated = false,
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
      <RoyaltyGraphProvider ipIds={ipIds}>
        <RoyaltyGraph width={width} height={height} darkMode={darkMode} isAnimated={isAnimated} />
      </RoyaltyGraphProvider>

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
