'use client'

import { useRef, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import { Expand, X } from 'lucide-react'

export type Certificate = {
  title: string
  issuer: string
  date: string | null
  href?: string
  image?: StaticImageData
}

export function CertificateCard({ cert }: { cert: Certificate }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  function show() {
    setOpen(true)
    dialogRef.current?.showModal()
  }

  function close() {
    dialogRef.current?.close()
  }

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50 has-[button:focus-visible]:border-accent">
      <p className="text-pretty font-serif text-xl leading-snug tracking-tight">
        {cert.image ? (
          <button
            type="button"
            onClick={show}
            className="text-left outline-none after:absolute after:inset-0 after:rounded-2xl"
            aria-label={`View certificate: ${cert.title}`}
          >
            {cert.title}
          </button>
        ) : (
          cert.title
        )}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">{cert.issuer}</p>
      <div className="mt-auto flex items-center justify-between gap-3 pt-5 font-mono text-xs text-muted-foreground">
        <span>{cert.date}</span>
        <span className="flex items-center gap-4">
          {cert.href && (
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-accent underline-offset-4 hover:underline"
            >
              Verify ↗
            </a>
          )}
          {cert.image && (
            <span className="flex items-center gap-1.5 transition-colors group-hover:text-accent">
              <Expand aria-hidden="true" className="size-3.5" />
              View
            </span>
          )}
        </span>
      </div>

      {cert.image && (
        <dialog
          ref={dialogRef}
          onClose={() => setOpen(false)}
          onClick={(e) => {
            if (e.target === e.currentTarget) close()
          }}
          aria-label={cert.title}
          className="m-auto overflow-visible bg-transparent p-0 backdrop:bg-black/75 backdrop:backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close certificate"
            className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-card/90 text-foreground shadow-md backdrop-blur transition-transform hover:scale-105"
          >
            <X className="size-5" />
          </button>
          {open && (
            <Image
              src={cert.image}
              alt={`Certificate: ${cert.title}, issued to Harun Rashid Ansari by ${cert.issuer}`}
              sizes="(min-width: 1200px) 1100px, 92vw"
              className="block h-auto max-h-[88vh] w-auto max-w-[92vw] rounded-xl shadow-2xl"
            />
          )}
        </dialog>
      )}
    </div>
  )
}
