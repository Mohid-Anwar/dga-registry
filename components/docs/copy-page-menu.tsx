"use client"

import { useState } from "react"
import {
  ArrowDown01Icon,
  ChatGptIcon,
  ClaudeIcon,
  Copy01Icon,
  SourceCodeIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { buildAskAiPrompt } from "@/lib/ask-ai-prompt"
import { SITE_URL } from "@/lib/registry-config"
import { Button } from "@/registry/dga/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/dga/ui/dropdown-menu"
import { showToast } from "@/registry/dga/ui/sonner"

import { V0Icon } from "./v0-icon"

export function CopyPageMenu({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)

  const pageUrl = `${SITE_URL}/${slug}`
  const prompt = encodeURIComponent(buildAskAiPrompt(pageUrl))

  const copyPage = async () => {
    try {
      const res = await fetch(`/api/docs/${slug}`)
      if (!res.ok) throw new Error("Failed to fetch page content")
      const text = await res.text()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      showToast.success("Page copied to clipboard")
      setTimeout(() => setCopied(false), 1500)
    } catch {
      showToast.error("Couldn't copy this page")
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1.5">
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className="size-4"
          />
          Copy Page
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            className="size-3.5 opacity-60"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onSelect={copyPage}>
          <HugeiconsIcon icon={Copy01Icon} className="size-4" />
          Copy page
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a href={`/api/docs/${slug}`} target="_blank" rel="noreferrer">
            <HugeiconsIcon icon={SourceCodeIcon} className="size-4" />
            View as Markdown
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`https://v0.dev?q=${prompt}`}
            target="_blank"
            rel="noreferrer"
          >
            <V0Icon className="size-4" />
            Open in v0
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`https://chatgpt.com/?q=${prompt}`}
            target="_blank"
            rel="noreferrer"
          >
            <HugeiconsIcon icon={ChatGptIcon} className="size-4" />
            Open in ChatGPT
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`https://claude.ai/new?q=${prompt}`}
            target="_blank"
            rel="noreferrer"
          >
            <HugeiconsIcon icon={ClaudeIcon} className="size-4" />
            Open in Claude
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
