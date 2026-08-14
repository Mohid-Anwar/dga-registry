import { buildAskAiPrompt } from "@/lib/ask-ai-prompt"
import { REGISTRY_BASE } from "@/lib/registry-config"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/dga/ui/button"

import { V0Icon } from "./docs/v0-icon"

export function OpenInV0Button({
  name,
  className,
}: { name: string } & React.ComponentProps<typeof Button>) {
  return (
    <Button
      aria-label="Open in v0"
      size="sm"
      className={cn(
        "bg-black text-white shadow-none hover:bg-black hover:text-white dark:bg-white dark:text-black",
        className
      )}
      asChild
    >
      <a
        // href={`https://v0.dev/chat/api/open?url=${REGISTRY_BASE}/${name}.json`}
        href={`https://v0.dev?q=${encodeURIComponent(
          buildAskAiPrompt(`${REGISTRY_BASE}/${name}.json`)
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        Open in <V0Icon className="h-5 w-5 text-current" />
      </a>
    </Button>
  )
}
