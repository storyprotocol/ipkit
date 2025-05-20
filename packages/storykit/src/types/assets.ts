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

// export interface LicenseOffChainData {
//   aiLearningModels?: boolean
// }

// export interface PILTermsWithOffChainData extends PILTerms {
//   offChainData: LicenseOffChainData | undefined
// }
