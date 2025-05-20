/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trait } from "@/types/assets"
import { Term } from "@/types/openapi"

import { camelize } from "../utils"

type LicenseTerms = Partial<Term>

export function convertLicenseTermObject(licenseTerms: Trait[]): LicenseTerms {
  return licenseTerms.reduce((acc: LicenseTerms, option: Trait): LicenseTerms => {
    const key = camelize(option.trait_type) as keyof Term
    acc[key] = option.value === "true" ? true : option.value === "false" ? false : (option.value as any)
    return acc
  }, {})
}
