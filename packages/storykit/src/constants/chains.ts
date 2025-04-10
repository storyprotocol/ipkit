import { ChainConfig } from "@/types/chains"
import { zeroAddress } from "viem"

export const STORY_AENEID: ChainConfig = {
  id: 1315,
  name: "story-aeneid",
  simplehashId: "story-aeneid",
  apiVersion: "v3",
  displayName: "Story Aeneid Testnet",
  rpcUrl: "https://aeneid.storyrpc.io/",
  blockExplorerUrl: "https://aeneid.storyscan.io",
  protocolExplorerUrl: "https://aeneid.explorer.story.foundation",
  defaultCurrency: { name: "Wrapped IP", address: zeroAddress, symbol: "WIP" },
}

export const STORY_MAINNET: ChainConfig = {
  id: 1514,
  name: "story",
  simplehashId: "story",
  apiVersion: "v3",
  displayName: "Story Mainnet",
  rpcUrl: "https://mainnet.storyrpc.io",
  blockExplorerUrl: "https://mainnet.storyscan.io",
  protocolExplorerUrl: "https://explorer.story.foundation",
  defaultCurrency: { name: "Wrapped IP", address: zeroAddress, symbol: "WIP" },
}

export const CHAINS = {
  [STORY_AENEID.name]: STORY_AENEID,
  [STORY_MAINNET.name]: STORY_MAINNET,
}

export const CHAINID_TO_CHAINNAME: { [key: number]: string } = {
  1315: "story-aeneid",
  1514: "story",
}
