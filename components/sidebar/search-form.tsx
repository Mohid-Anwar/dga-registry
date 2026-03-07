import { Search } from "lucide-react"

import { Label } from "@/registry/dga/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/registry/dga/ui/sidebar"

export function SearchForm({  onSearch ,...props}: React.ComponentProps<"form"> & { onSearch: (value: string) => void }) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0 ">
              <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            placeholder="Search components..."
            className="pl-8 rounded-full"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}

