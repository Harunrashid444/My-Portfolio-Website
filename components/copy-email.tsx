'use client'

import { useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        <Mail className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
      >
        {copied ? (
          <Check className="size-4 animate-in zoom-in text-accent" />
        ) : (
          <Copy className="size-4" />
        )}
        <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
      </button>
    </div>
  )
}
