import {
  commercialRemixingLicenseTerms,
  commercialUseLicenseTerms,
  nonCommercialSocialRemixingLicenseTerms,
} from "@/constants/pil-flavors"
import { cn } from "@/lib/utils"
import { PIL_FLAVOR } from "@/types/assets"
import { cva } from "class-variance-authority"
import * as React from "react"

import LicenseTermsList, { LicenseTermsListProps } from "../LicenseTermsList/LicenseTermsList"

interface LicenseFlavorSelectorTermsProps
  extends Omit<LicenseTermsListProps, "selectedLicenseTerms" | "selectedLicenseTermsId"> {}

export interface LicenseFlavorSelectorProps extends LicenseFlavorSelectorTermsProps {
  value?: PIL_FLAVOR
  onValueChange?: (value: PIL_FLAVOR) => void
  className?: string
}

export const licenseFlavorOptions = [
  {
    label: "Non-Commercial social remixing",
    description:
      "This license allows for endless free remixing while tracking all uses of your work while giving you full credit",
    value: PIL_FLAVOR.NON_COMMERCIAL_SOCIAL_REMIXING,
    terms: nonCommercialSocialRemixingLicenseTerms,
  },
  {
    label: "Commercial Use",
    description:
      "Retain control over reuse of your work, while allowing anyone to use the work in exchange for the economic terms you set.",
    value: PIL_FLAVOR.COMMERCIAL_USE,
    terms: commercialUseLicenseTerms,
  },
  {
    label: "Commercial remix",
    description: `Endless free remixing while tracking all uses of your work while giving you full credit, with each derivative paying a percentage of revenue to its "parent" IP.`,
    value: PIL_FLAVOR.COMMERCIAL_REMIX,
    terms: commercialRemixingLicenseTerms,
  },
]

const titleStyles = cva("sk-text-foreground sk-font-sans sk-font-bold", {
  variants: {
    size: {
      small: "sk-text-sm",
      medium: "sk-text-base",
      large: "sk-text-lg",
    },
  },
})

const descriptionStyles = cva("sk-font-medium sk-text-muted-foreground sk-font-sans", {
  variants: {
    size: {
      small: "sk-text-xs",
      medium: "sk-text-sm",
      large: "sk-text-base",
    },
  },
})

export default function LicenseFlavorSelector({
  value = PIL_FLAVOR.NON_COMMERCIAL_SOCIAL_REMIXING,
  onValueChange,
  className,
  size,
  ...rest
}: LicenseFlavorSelectorProps) {
  const titleId = React.useId()
  const descriptionId = React.useId()

  return (
    <div className={cn("sk-grid sk-gap-4", className)} role="radiogroup">
      {licenseFlavorOptions.map((flavor) => (
        <label className="group" key={flavor.value}>
          <input
            type="radio"
            name="pil-flavor"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            value={flavor.value}
            checked={value === flavor.value}
            onChange={(e) => onValueChange?.(e.target.value as PIL_FLAVOR)}
            className="sk-sr-only"
          />
          <div
            className={cn(
              "sk-flex sk-flex-col sk-w-full sk-cursor-pointer sk-items-start sk-text-left sk-rounded-lg sk-border-2 sk-bg-popover sk-p-4",
              "sk-peer-focus-visible:ring-2 sk-peer-focus-visible:ring-offset-2 sk-peer-focus-visible:ring-foreground/40",
              "sk-group-focus-visible:ring-2 sk-group-focus-visible:ring-offset-2 sk-group-focus-visible:ring-foreground/40",
              value === flavor.value ? "sk-border-foreground" : "sk-border-border hover:sk-border-foreground"
            )}
          >
            <div id={titleId} className={titleStyles({ size })}>
              {flavor.label}
            </div>
            <div id={descriptionId} className={descriptionStyles({ size })}>
              {flavor.description}
            </div>
            {rest.showCannots || rest.showCans || rest.showExtras ? (
              <div
                className={cn(
                  value === flavor.value ? "sk-block" : "sk-hidden",
                  size === "small" ? "sk-mt-4" : "sk-mt-6"
                )}
              >
                <LicenseTermsList {...rest} size={size} selectedLicenseTerms={flavor.terms} />
              </div>
            ) : null}
          </div>
        </label>
      ))}
    </div>
  )
}
