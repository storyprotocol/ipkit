import { Address } from "viem"

// Random IP assets from Mainnet Explorer
export const MAINNET_PREVIEW_IP_ASSETS: Address[] = [
  "0x6CF267c5C09F8C10DEf7463c8b83D444a0FCEe45", // Ablo
  "0x3F85e3f767cE8e62A01A48109952e227d349AE10", // Mahojin
  "0x2537Ac30592930B2F46e6ad05fad0D1Fef0626E4", // Mycellium
]

// Random IP assets from Aeneid Explorer
export const AENEID_PREVIEW_IP_ASSETS: Address[] = [
  "0xe488c586b78988e384669C7672DAE7EFFA320EfC",
  "0x1bDadAA83a3489821894f1691eA62F835Ec9C317",
  "0x08aedDC966D196f0201A50c2CB77caBa1C2CFcE4",
]

// Combined IP assets for stories
const STORY_MAINNET_IP_ASSETS_NAME = MAINNET_PREVIEW_IP_ASSETS.map((ip: Address) => `Mainnet: ${ip}`) as Address[]
const STORY_MAINNET_IP_ASSETS_MAP = Object.fromEntries(MAINNET_PREVIEW_IP_ASSETS.map((ip) => [`Mainnet: ${ip}`, ip]))

const STORY_AENEID_IP_ASSETS_NAME = AENEID_PREVIEW_IP_ASSETS.map((ip: Address) => `Aeneid: ${ip}`) as Address[]
const STORY_AENEID_IP_ASSETS_MAP = Object.fromEntries(AENEID_PREVIEW_IP_ASSETS.map((ip) => [`Aeneid: ${ip}`, ip]))

const STORY_IP_ASSETS = [...STORY_MAINNET_IP_ASSETS_NAME, ...STORY_AENEID_IP_ASSETS_NAME]
const STORY_IP_ASSETS_MAP = { ...STORY_MAINNET_IP_ASSETS_MAP, ...STORY_AENEID_IP_ASSETS_MAP }

export { STORY_IP_ASSETS, STORY_IP_ASSETS_MAP }
