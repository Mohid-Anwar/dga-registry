import * as icons from "@hugeicons/core-free-icons"

const names = Object.keys(icons).filter((n) => n.endsWith("Icon"))

// Check remaining icons we need
const checks = [
  "Download01",
  "Download02",
  "Download03",
  "Download04",
  "Download05",
  "HeartCheck",
  "FavouriteIcon",
  "Favourite",
  "PencilEdit01",
  "PencilEdit02",
  "Edit01",
  "Edit02",
  "Share01",
  "Share02",
  "Share03",
  "Share04",
  "Share05",
  "Delete01",
  "Delete02",
  "Delete03",
  "Delete04",
  "Upload01",
  "Upload02",
  "Upload03",
  "Upload04",
  "InformationCircle",
  "InformationSquare",
  "Alert01",
  "Alert02",
  "AlertCircle",
  "AlertDiamond",
  "AlertSquare",
  "Home01",
  "Home02",
  "Home03",
  "Inbox",
  "Inbox01",
  "Inbox02",
  "MailOpen01",
  "MailOpen02",
  "Calendar01",
  "Calendar02",
  "Calendar03",
  "Settings01",
  "Settings02",
  "ChartIncrease",
  "AnalyticsUp",
  "AnalyticsDown",
  "Artboard",
  "ArtboardTool",
  "Compass",
  "Compass01",
  "UserMultiple",
  "UserMultiple02",
  "UserGroup",
  "SquareLock01",
  "SquareLock02",
  "LockKey",
  "Copy01",
  "Copy02",
  "RacingFlag",
  "Flag01",
  "Flag02",
  "Trash",
  "Pencil01",
  "Pencil02",
  "PencilEdit",
]

for (const name of checks) {
  const iconName = name + "Icon"
  console.log(
    `${iconName}: ${names.includes(iconName) ? "EXISTS" : "NOT FOUND"}`
  )
}

// Also search specific patterns
const patterns = [
  "Heart",
  "Trash",
  "Delete",
  "Pencil",
  "Edit",
  "Info",
  "Alert",
  "Warning",
  "Octagon",
  "Inbox",
]
console.log("\nPattern matches:")
for (const p of patterns) {
  const m = names.filter((n) => n.startsWith(p))
  console.log(`${p}*: ${m.slice(0, 8).join(", ")}`)
}

for (const term of searches) {
  const matches = names.filter((n) =>
    n.toLowerCase().includes(term.toLowerCase())
  )
  console.log(`${term} (${matches.length}): ${matches.slice(0, 8).join(", ")}`)
}

// Exact searches for the Lucide icons we need
const exactSearches = [
  "Tick02",
  "Tick01",
  "CheckmarkCircle02",
  "ArrowDown01",
  "ArrowUp01",
  "ArrowRight01",
  "ArrowLeft01",
  "ArrowRight02",
  "ArrowLeft02",
  "Search01",
  "Search02",
  "Copy01",
  "Copy02",
  "Cancel01",
  "Cancel02",
  "MultiplicationSign",
  "RecordCircle",
  "RadioButton",
  "TrendUp01",
  "TrendUp02",
  "TrendDown01",
  "TrendDown02",
  "Add01",
  "PlusSign",
  "MinusSign",
  "Remove01",
  "Moon02",
  "Sun01",
  "Sun02",
  "Sun03",
  "Mail01",
  "Mail02",
  "LockKey",
  "Lock01",
  "SquareLock01",
  "SquareLock02",
  "User01",
  "User02",
  "UserMultiple",
  "Globe",
  "Globe02",
  "Location01",
  "Location02",
  "LocationPin",
  "MapPin",
  "Building01",
  "Building02",
  "Building03",
  "Activity01",
  "Activity02",
  "Filter",
  "FilterHorizontal",
  "Loading01",
  "Loading02",
  "Loading03",
  "Loading04",
  "LeftToRightListDash",
  "SidebarLeft",
  "SidebarRight",
  "SidebarLeft01",
  "LayoutLeft",
  "DragDrop",
  "DragDropVertical",
  "MoreVertical",
  "Menu01",
  "SentFast",
  "Sent",
  "SendToMobile",
  "Lifebuoy",
  "ImageComposition",
  "Image01",
  "Map01",
  "Compass",
  "PieChart",
  "PieChart01",
  "PieChart02",
  "GitCommit",
  "GitBranch",
  "Ocean",
  "Wave",
  "MoreHorizontal",
  "MoreHorizontalCircle01",
  "ArrowDown01",
  "ArrowUp01",
  "ChartLineData02",
  "ChartLineData01",
  "Tick02",
  "ArrowMoveDownRight",
  "ArrowMoveUpRight",
  "ArrowShrink01",
  "ArrowExpand01",
  "Mail01",
  "MailOpen",
]

console.log("Exact icon lookups:")
for (const term of exactSearches) {
  const iconName = term + "Icon"
  console.log(
    `  ${term}Icon: ${names.includes(iconName) ? "EXISTS" : "NOT FOUND"}`
  )
}

// Also search for specific patterns
const patternSearches = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowDown",
  "ArrowUp",
  "Tick",
  "Loading",
  "Sidebar",
  "Drag",
  "Sent",
  "Send",
  "Compass",
  "ChartLine",
]
console.log("\nPattern matches:")
for (const term of patternSearches) {
  const matches = names.filter((n) => n.startsWith(term))
  console.log(`  ${term}*: ${matches.slice(0, 8).join(", ")}`)
}
