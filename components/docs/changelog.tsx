import { Tag } from "@/registry/dga/ui/tag"

type ChangeType = "added" | "changed" | "fixed"

const TYPE_LABEL: Record<ChangeType, string> = {
  added: "Added",
  changed: "Changed",
  fixed: "Fixed",
}

const TYPE_VARIANT: Record<ChangeType, "success" | "info" | "error"> = {
  added: "success",
  changed: "info",
  fixed: "error",
}

/**
 * Grid container for a release's entries. `ChangelogEntry` children are
 * Fragments, so their cells become direct grid items here — every row's
 * tag/name/description column lines up automatically.
 */
export function ChangelogSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid grid-cols-1 items-start gap-x-4 gap-y-3 sm:grid-cols-[5.5rem_11rem_1fr] sm:gap-y-2.5">
      {children}
    </div>
  )
}

export function ChangelogEntry({
  type,
  name,
  children,
}: {
  type: ChangeType
  name: string
  children: React.ReactNode
}) {
  return (
    <>
      <Tag variant={TYPE_VARIANT[type]} size="sm" className="w-fit sm:mt-0.5">
        {TYPE_LABEL[type]}
      </Tag>
      <span className="text-foreground text-sm font-semibold sm:mt-0.5">
        {name}
      </span>
      <span className="text-muted-foreground text-sm">{children}</span>
    </>
  )
}
