import { convertIpfsUriToUrl } from "./utils"

export async function getMetadataFromIpfs(ipfsUrl: string) {
  const metadata = await fetch(convertIpfsUriToUrl(ipfsUrl)).then((res) => res.json())
  return metadata
}
