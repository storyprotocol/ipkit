import { Address } from "viem"

export enum PIL_FLAVOR {
  NON_COMMERCIAL_SOCIAL_REMIXING = "Non-Commercial Social Remixing",
  COMMERCIAL_USE = "Commercial Use",
  COMMERCIAL_REMIX = "Commercial Remix",
  CUSTOM = "Custom",
  OPEN_USE = "Open Use",
  // NO_DERIVATIVE = "No Derivative",
}

export type PilFlavor =
  | PIL_FLAVOR.NON_COMMERCIAL_SOCIAL_REMIXING
  | PIL_FLAVOR.COMMERCIAL_USE
  | PIL_FLAVOR.COMMERCIAL_REMIX
  | PIL_FLAVOR.CUSTOM
  | PIL_FLAVOR.OPEN_USE

export interface Trait {
  trait_type: string
  value: string | number
  max_value?: number
}

// TODO: add offchain data

export interface LicenseOffChainData {
  aiLearningModels?: boolean
}

// export interface PILTermsWithOffChainData extends PILTerms {
//   offChainData: LicenseOffChainData | undefined
// }

export type SocialMedia = {
  platform?: string
  url?: string
}

export type Creator = {
  name?: string
  address?: Address
  description?: string
  contributionPercent?: number
  socialMedia?: SocialMedia[]
}

export interface IPMetadata {
  title?: string
  description?: string
  ipType?: string
  creators?: Creator[]
  appInfo?: {
    id?: string
    name?: string
    website?: string
  }[]
  relationships?: {
    parentIpId?: Address
    type?: string
  }[]
  robotTerms?: {
    userAgent?: string
    allow?: string
  }
  [key: string]: any
}
