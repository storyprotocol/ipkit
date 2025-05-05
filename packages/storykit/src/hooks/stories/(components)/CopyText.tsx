import { Check, ClipboardCopy } from "lucide-react"
import React, { useState } from "react"

interface CopyTextProps {
  label: string
  value: string
}

export const CopyText = ({ label, value }: CopyTextProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div
      className="sk-flex sk-w-full sk-items-center sk-justify-between sk-gap-1 sk-cursor-pointer hover:sk-opacity-60"
      onClick={handleCopy}
    >
      <span className="sk-text-sm">{label}</span>
      {copied ? <Check className="sk-w-4 sk-h-4 " /> : <ClipboardCopy className="sk-w-4 sk-h-4 " />}
    </div>
  )
}
