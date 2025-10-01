import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const tailwindMergeConfig = {
  prefix: "sk-",
}

const twMerge = extendTailwindMerge(tailwindMergeConfig)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function shortenAddress(address: string, length = 4): string {
  if (!address) {
    return ""
  }
  if (address.length < 2 * length + 2) {
    // Check if the address is too short to be shortened.
    return address
  }

  const start = address.substring(0, length + 2)
  const end = address.substring(address.length - length)
  return `${start}...${end}`
}
