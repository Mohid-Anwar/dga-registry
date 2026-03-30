/**
 * Migration script: Replace all Lucide React icons with Hugeicons
 *
 * Lucide pattern:  import { IconName } from "lucide-react"  →  <IconName className="..." />
 * Hugeicons pattern: import { HugeiconsIcon } from "@hugeicons/react"
 *                    import { IconName } from "@hugeicons/core-free-icons"
 *                    →  <HugeiconsIcon icon={IconName} className="..." />
 */

import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ── Lucide name → Hugeicons name mapping ──
const ICON_MAP = {
  // Checks
  Check: "Tick02Icon",
  CheckIcon: "Tick02Icon",
  CheckCircle2: "CheckmarkCircle02Icon",
  CircleCheckIcon: "CheckmarkCircle02Icon",

  // Chevrons (arrows in Hugeicons)
  ChevronDown: "ArrowDown01Icon",
  ChevronDownIcon: "ArrowDown01Icon",
  ChevronUp: "ArrowUp01Icon",
  ChevronUpIcon: "ArrowUp01Icon",
  ChevronRight: "ArrowRight01Icon",
  ChevronRightIcon: "ArrowRight01Icon",
  ChevronLeft: "ArrowLeft01Icon",
  ChevronLeftIcon: "ArrowLeft01Icon",

  // Arrows
  ArrowLeft: "ArrowLeft02Icon",
  ArrowRight: "ArrowRight02Icon",
  ArrowDownFromLine: "ArrowDown02Icon",
  ArrowUpFromLine: "ArrowUp02Icon",

  // Search
  Search: "Search01Icon",
  SearchIcon: "Search01Icon",

  // Copy
  Copy: "Copy01Icon",
  CopyIcon: "Copy01Icon",

  // Close/X
  X: "Cancel01Icon",
  XIcon: "Cancel01Icon",

  // Circle (for radio, etc.)
  CircleIcon: "RadioButtonIcon",

  // Trending
  TrendingUp: "ChartIncreaseIcon",
  TrendingDown: "AnalyticsDownIcon",

  // Plus/Minus
  Plus: "PlusSignIcon",
  PlusIcon: "PlusSignIcon",
  MinusIcon: "MinusSignIcon",
  Minus: "MinusSignIcon",

  // Theme
  Moon: "Moon02Icon",
  Sun: "Sun03Icon",

  // Mail
  Mail: "Mail01Icon",

  // Lock
  Lock: "SquareLock02Icon",

  // Users
  User: "UserIcon",
  Users: "UserMultipleIcon",

  // Globe
  Globe: "GlobeIcon",

  // Location
  MapPin: "MapPinIcon",

  // Building
  Building2: "Building02Icon",

  // Activity
  Activity: "ActivityIcon",

  // Filter
  Filter: "FilterIcon",

  // Loading
  Loader2: "Loading03Icon",
  Loader2Icon: "Loading03Icon",

  // Panel/Sidebar
  PanelLeftIcon: "SidebarLeftIcon",
  PanelLeftCloseIcon: "SidebarLeft01Icon",
  PanelLeftOpenIcon: "SidebarLeftIcon",

  // Grip
  GripVerticalIcon: "DragDropVerticalIcon",

  // More
  MoreHorizontal: "MoreHorizontalIcon",
  MoreHorizontalIcon: "MoreHorizontalIcon",

  // Send
  SendIcon: "SentIcon",
  Send: "SentIcon",

  // Lifebuoy
  LifeBuoyIcon: "LifebuoyIcon",
  LifeBuoy: "LifebuoyIcon",

  // Frame → Artboard
  FrameIcon: "ArtboardIcon",
  Frame: "ArtboardIcon",

  // Map → Compass
  MapIcon: "Compass01Icon",
  Map: "Compass01Icon",

  // PieChart
  PieChartIcon: "PieChartIcon",
  PieChart: "PieChartIcon",

  // Git
  GitCommitVertical: "GitCommitIcon",

  // Misc
  Footprints: "RunningShoesIcon",
  Waves: "WaveIcon",

  // Home
  HomeIcon: "Home01Icon",
  Home: "Home01Icon",

  // Inbox
  InboxIcon: "InboxIcon",
  Inbox: "InboxIcon",

  // Calendar
  CalendarIcon: "Calendar01Icon",
  Calendar: "Calendar01Icon",

  // Settings
  SettingsIcon: "Settings01Icon",
  Settings: "Settings01Icon",

  // Download
  Download: "Download04Icon",

  // Heart
  Heart: "FavouriteIcon",

  // Pencil/Edit
  Pencil: "PencilEdit01Icon",

  // Share
  Share2: "Share01Icon",

  // Trash/Delete
  Trash2: "Delete02Icon",

  // Upload
  Upload: "Upload04Icon",

  // Info
  InfoIcon: "InformationCircleIcon",
  Info: "InformationCircleIcon",

  // Octagon alert
  OctagonXIcon: "AlertDiamondIcon",
  OctagonX: "AlertDiamondIcon",

  // Triangle alert
  TriangleAlertIcon: "Alert02Icon",
  TriangleAlert: "Alert02Icon",
}

function findFiles(dir, extensions = [".tsx", ".ts"]) {
  const results = []
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (
      item.isDirectory() &&
      !item.name.startsWith(".") &&
      item.name !== "node_modules" &&
      item.name !== ".next"
    ) {
      results.push(...findFiles(fullPath, extensions))
    } else if (
      item.isFile() &&
      extensions.some((ext) => item.name.endsWith(ext))
    ) {
      results.push(fullPath)
    }
  }
  return results
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8")

  // Check if file imports from lucide-react
  const lucideImportRegex =
    /import\s*\{([^}]+)\}\s*from\s*["']lucide-react["'];?\s*\n/
  const match = content.match(lucideImportRegex)

  if (!match) return false

  console.log(`\nProcessing: ${path.relative(__dirname, filePath)}`)

  // Extract imported icon names
  const importedNames = match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  console.log(`  Lucide imports: ${importedNames.join(", ")}`)

  // Map to Hugeicons names
  const hugeIconNames = []
  const unmapped = []

  for (const name of importedNames) {
    const mapped = ICON_MAP[name]
    if (mapped) {
      if (!hugeIconNames.includes(mapped)) {
        hugeIconNames.push(mapped)
      }
    } else {
      unmapped.push(name)
      console.log(`  ⚠ UNMAPPED: ${name}`)
    }
  }

  if (unmapped.length > 0) {
    console.log(`  SKIPPING due to unmapped icons`)
    return false
  }

  // Build new import statements
  const hugeiconsReactImport = `import { HugeiconsIcon } from "@hugeicons/react"`
  const coreImport = `import { ${hugeIconNames.join(", ")} } from "@hugeicons/core-free-icons"`
  const newImports = `${hugeiconsReactImport}\nimport {\n  ${hugeIconNames.join(",\n  ")},\n} from "@hugeicons/core-free-icons"`

  // Replace the lucide import
  content = content.replace(lucideImportRegex, newImports + "\n")

  // Now replace JSX usage for each icon
  // For each original Lucide name, we need to replace its JSX usage
  for (const originalName of importedNames) {
    const hugeIconName = ICON_MAP[originalName]
    if (!hugeIconName) continue

    // Pattern 1: Self-closing tag <IconName ... />
    // e.g., <CheckIcon className="size-4" /> → <HugeiconsIcon icon={Tick02Icon} className="size-4" />
    const selfClosingRegex = new RegExp(`<${originalName}(\\s[^>]*)\\s*/>`, "g")
    content = content.replace(selfClosingRegex, (match, attrs) => {
      return `<HugeiconsIcon icon={${hugeIconName}}${attrs} />`
    })

    // Pattern 1b: Self-closing with no attributes <IconName />
    const selfClosingNoAttrsRegex = new RegExp(`<${originalName}\\s*/>`, "g")
    content = content.replace(
      selfClosingNoAttrsRegex,
      `<HugeiconsIcon icon={${hugeIconName}} />`
    )

    // Pattern 2: Icon used as a value/prop (e.g., icon: HomeIcon, or icon={HomeIcon})
    // These cases: the icon data is passed as a reference
    // In object literals: `icon: OriginalName` → `icon: HugeIconName`
    const propValueRegex = new RegExp(`(icon:\\s*)${originalName}\\b`, "g")
    content = content.replace(propValueRegex, `$1${hugeIconName}`)

    // In JSX props: `icon={OriginalName}` → `icon={HugeIconName}` (unlikely in current code but safe)
    const jsxPropRegex = new RegExp(`icon=\\{${originalName}\\}`, "g")
    content = content.replace(jsxPropRegex, `icon={${hugeIconName}}`)
  }

  // Pattern 3: Dynamic icon rendering <item.icon /> or <project.icon />
  // These need to become <HugeiconsIcon icon={item.icon} /> or <HugeiconsIcon icon={project.icon} />
  const dynamicIconRegex = /<(\w+\.\w+)\s*\/>/g
  content = content.replace(dynamicIconRegex, (match, expr) => {
    // Only replace if it looks like an icon property reference
    if (expr.endsWith(".icon")) {
      return `<HugeiconsIcon icon={${expr}} />`
    }
    return match
  })

  console.log(`  → Mapped to: ${hugeIconNames.join(", ")}`)

  fs.writeFileSync(filePath, content, "utf-8")
  return true
}

// ── Main ──
const projectRoot = __dirname
const dirs = [
  path.join(projectRoot, "registry", "dga", "ui"),
  path.join(projectRoot, "registry", "dga", "charts"),
  path.join(projectRoot, "registry", "dga", "internal"),
  path.join(projectRoot, "app"),
  path.join(projectRoot, "components"),
]

let totalProcessed = 0
let totalModified = 0

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`)
    continue
  }
  const files = findFiles(dir)
  for (const file of files) {
    totalProcessed++
    if (processFile(file)) {
      totalModified++
    }
  }
}

console.log(
  `\n\nDone! Processed ${totalProcessed} files, modified ${totalModified}.`
)
