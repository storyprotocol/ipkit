import { STORY_AENEID, STORY_MAINNET } from "@/constants/chains"
import { Address, zeroAddress } from "viem"

export type ERC20Token = {
  name: string
  address: Address
  symbol: string
  decimals?: number
}

export type ChainConfig = {
  id: number
  name: string
  displayName: string
  rpcUrl: string
  blockExplorerUrl: string
  protocolExplorerUrl: string
  simplehashId: string
  apiVersion: string
  defaultCurrency?: ERC20Token
}

export type SupportedChainConfig = typeof STORY_AENEID | typeof STORY_MAINNET

export enum STORYKIT_SUPPORTED_CHAIN {
  AENEID_TESTNET = "story-aeneid",
  STORY_MAINNET = "story",
}

export const WRAPPED_IP: ERC20Token = {
  name: "Wrapped IP",
  address: "0x1514000000000000000000000000000000000000", // Same for all chains
  symbol: "WIP",
}
