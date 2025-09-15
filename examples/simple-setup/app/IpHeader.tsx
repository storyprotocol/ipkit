
import { useIpAsset } from "@story-protocol/ipkit"

export default function IpHeader() {
  const { data, isLoading } = useIpAsset({ ipId: "0xB1D831271A68Db5c18c8F0B69327446f7C8D0A42" })

  if (isLoading) return <div>Loading...</div>
  if (!data) return <div>Not found</div>

  return (
    <div className="flex w-full flex-col gap-1">
      <h1 className="text-2xl font-sans font-bold text-foreground">{data.title}</h1>
      <h2 className="text-xs text-gray-500">By {data.ownerAddress}</h2>
      {data.nftMetadata?.image.cachedUrl || data.nftMetadata?.image.pngUrl ? 
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          src={data.nftMetadata.image.cachedUrl || data.nftMetadata.image.pngUrl} 
          alt={data?.title || "No image available"} 
          className="w-full aspect-video object-contain border border-gray-200 rounded-md my-2" 
        /> 
      : null}
    </div>
  )
}
