"use client"

import * as React from "react"
import { ArrowRight, Filter } from "lucide-react"

import { useAppDirection } from "@/components/direction-context"
import { Badge } from "@/registry/dga/ui/badge"
import { Button } from "@/registry/dga/ui/button"
import { Checkbox } from "@/registry/dga/ui/checkbox"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/dga/ui/table"

/* ─── Types ─── */
type Status = "active" | "inactive" | "pending" | "completed"
type TagVariant = "info" | "success" | "warning" | "error" | "neutral"

interface RowData {
  id: string
  link: string
  col1: string
  col2: string
  col3: string
  tag: string
  tagVariant: TagVariant
  status: Status
  statusLabel: string
  col4: string
}

/* ─── Dummy data generator ─── */
const TAG_OPTIONS: { label: string; variant: TagVariant }[] = [
  { label: "Finance", variant: "info" },
  { label: "HR", variant: "success" },
  { label: "Legal", variant: "warning" },
  { label: "IT", variant: "neutral" },
  { label: "Operations", variant: "error" },
]

const STATUS_OPTIONS: { status: Status; label: string }[] = [
  { status: "active", label: "Active" },
  { status: "inactive", label: "Inactive" },
  { status: "pending", label: "Pending" },
  { status: "completed", label: "Completed" },
]

const NAMES = [
  "Ahmed Al-Farsi",
  "Sara Al-Dosari",
  "Mohammed Al-Qahtani",
  "Fatima Al-Harbi",
  "Khalid Al-Ghamdi",
  "Nora Al-Shehri",
  "Abdullah Al-Otaibi",
  "Maha Al-Zahrani",
  "Omar Al-Rashidi",
  "Layla Al-Mutairi",
  "Youssef Al-Enazi",
  "Huda Al-Tamimi",
  "Faisal Al-Subaie",
  "Reem Al-Khaldi",
  "Sultan Al-Ajmi",
  "Dina Al-Shamrani",
  "Hassan Al-Bloushi",
  "Nouf Al-Dawsari",
]

const DEPARTMENTS = [
  "Digital Transformation",
  "Data Governance",
  "Compliance",
  "Technology",
  "Strategy",
  "Innovation",
]

const LOCATIONS = ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah", "Tabuk"]

function generateRows(count: number): RowData[] {
  return Array.from({ length: count }, (_, i) => {
    const tag = TAG_OPTIONS[i % TAG_OPTIONS.length]
    const statusOption = STATUS_OPTIONS[i % STATUS_OPTIONS.length]
    return {
      id: `row-${i + 1}`,
      link: NAMES[i % NAMES.length],
      col1: DEPARTMENTS[i % DEPARTMENTS.length],
      col2: LOCATIONS[i % LOCATIONS.length],
      col3: `REF-${String(1000 + i).padStart(4, "0")}`,
      tag: tag.label,
      tagVariant: tag.variant,
      status: statusOption.status,
      statusLabel: statusOption.label,
      col4: `${(i + 1) * 12}.5K SAR`,
    }
  })
}

/* ─── Status dot component ─── */
function StatusDot({ status }: { status: Status }) {
  const colorMap: Record<Status, string> = {
    active: "bg-green-500",
    completed: "bg-blue-500",
    pending: "bg-yellow-500",
    inactive: "bg-neutral-400",
  }
  return (
    <span
      className={`inline-block size-2 rounded-full ${colorMap[status]}`}
      aria-hidden="true"
    />
  )
}

/* ─── Tag color mapping ─── */
function tagClasses(variant: TagVariant): string {
  const map: Record<TagVariant, string> = {
    info: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
    success:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-300",
    warning:
      "border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
    error:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
    neutral:
      "border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300",
  }
  return map[variant]
}

/* ─── Page ─── */
const rows = generateRows(18)

/* ─── RCRC table rows (Figma 97-19346) ─── */
interface RcrcRow {
  id: number
  link: string
  cell1: string
  cell2: string
  cell3: string
  tag: string
  tagVariant: TagVariant
  status: Status
  statusLabel: string
  cell4: string
}

const rcrcLtrRows: RcrcRow[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  link: "Link",
  cell1: "Cell",
  cell2: "Cell",
  cell3: "Cell",
  tag: "Tag",
  tagVariant: "neutral" as TagVariant,
  status: (["active", "pending", "completed", "inactive"] as Status[])[i % 4],
  statusLabel: "Status",
  cell4: "Cell",
}))

const rcrcRtlRows: RcrcRow[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  link: "رابط",
  cell1: "خلية",
  cell2: "خلية",
  cell3: "خلية",
  tag: "وسم",
  tagVariant: "neutral" as TagVariant,
  status: (["active", "pending", "completed", "inactive"] as Status[])[i % 4],
  statusLabel: "حالة",
  cell4: "خلية",
}))

export default function TableDemo() {
  const { direction, setDirection } = useAppDirection()
  const [selected, setSelected] = React.useState<Set<string>>(new Set())

  const allSelected = selected.size === rows.length
  const someSelected = selected.size > 0 && !allSelected

  function toggleAll() {
    if (allSelected) {
      setSelected(new Set())
    } else {
      setSelected(new Set(rows.map((r) => r.id)))
    }
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center px-4 py-12">
      {/* RTL / LTR Toggle */}
      <div className="mb-6 flex gap-4">
        <Button
          variant={direction === "rtl" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("rtl")}
        >
          RTL
        </Button>
        <Button
          variant={direction === "ltr" ? "default" : "outline"}
          size="sm"
          onClick={() => setDirection("ltr")}
        >
          LTR
        </Button>
      </div>

      <h1 className="mb-2 text-3xl font-bold">Table Component Demo</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl text-center">
        DGA-aligned <strong>Table</strong> component with selection, tags,
        status indicators, links, and action buttons.
      </p>

      {/* ── Full featured table ── */}
      <section className="mb-16 w-full max-w-7xl">
        <h2 className="mb-4 text-xl font-semibold">Data Table</h2>
        <div className="overflow-hidden rounded-md">
          <Table>
            <TableHeader className="bg-[var(--colors-primary-s-a-flag200)]">
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox
                    checked={allSelected || (someSelected && "indeterminate")}
                    onCheckedChange={toggleAll}
                    aria-label="Select all"
                  />
                </TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead>Header</TableHead>
                <TableHead className="w-12">
                  <Filter className="text-muted-foreground size-4" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={selected.has(row.id) ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={selected.has(row.id)}
                      onCheckedChange={() => toggleRow(row.id)}
                      aria-label={`Select ${row.link}`}
                    />
                  </TableCell>
                  <TableCell>
                    <span className="text-primary cursor-pointer font-medium hover:underline">
                      {row.link}
                    </span>
                  </TableCell>
                  <TableCell>{row.col1}</TableCell>
                  <TableCell>{row.col2}</TableCell>
                  <TableCell>{row.col3}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`rounded-full text-xs ${tagClasses(row.tagVariant)}`}
                    >
                      {row.tag}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1.5">
                      <StatusDot status={row.status} />
                      {row.statusLabel}
                    </span>
                  </TableCell>
                  <TableCell>{row.col4}</TableCell>
                  <TableCell>
                    <button
                      className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded p-1 transition-colors"
                      aria-label="Go to details"
                    >
                      <ArrowRight className="size-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {selected.size > 0 && (
          <p className="text-muted-foreground mt-3 text-sm">
            {selected.size} of {rows.length} row(s) selected.
          </p>
        )}
      </section>

      {/* ── RCRC Main Design Table (Figma 97-19346) ── */}
      <section className="mb-16 w-full max-w-7xl">
        <h2 className="mb-1 text-xl font-semibold">RCRC Table — LTR</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Full-featured data table matching the RCRC Main Design File component.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox aria-label="Select all" />
              </TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead>Header</TableHead>
              <TableHead className="w-12">
                <Filter className="text-muted-foreground size-4" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rcrcLtrRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Checkbox aria-label={`Select row ${row.id}`} />
                </TableCell>
                <TableCell>
                  <span className="text-primary cursor-pointer font-medium hover:underline">
                    {row.link}
                  </span>
                </TableCell>
                <TableCell>{row.cell1}</TableCell>
                <TableCell>{row.cell2}</TableCell>
                <TableCell>{row.cell3}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`rounded-full text-xs ${tagClasses(row.tagVariant)}`}
                  >
                    {row.tag}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusDot status={row.status} />
                    {row.statusLabel}
                  </span>
                </TableCell>
                <TableCell>{row.cell4}</TableCell>
                <TableCell>
                  <button
                    className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded p-1 transition-colors"
                    aria-label="Go to details"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* ── RCRC Table — RTL ── */}
      <section className="mb-16 w-full max-w-7xl" dir="rtl">
        <h2 className="mb-1 text-xl font-semibold">RCRC Table — RTL</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          نفس الجدول بالتخطيط العربي — يعكس ترتيب الأعمدة والمحاذاة تلقائيًّا.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Filter className="text-muted-foreground size-4" />
              </TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead className="w-12">
                <Checkbox aria-label="تحديد الكل" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rcrcRtlRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <button
                    className="text-muted-foreground hover:text-foreground inline-flex items-center justify-center rounded p-1 transition-colors"
                    aria-label="الانتقال للتفاصيل"
                  >
                    <ArrowRight className="size-4 rotate-180" />
                  </button>
                </TableCell>
                <TableCell>{row.cell4}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5">
                    <StatusDot status={row.status} />
                    {row.statusLabel}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`rounded-full text-xs ${tagClasses(row.tagVariant)}`}
                  >
                    {row.tag}
                  </Badge>
                </TableCell>
                <TableCell>{row.cell3}</TableCell>
                <TableCell>{row.cell2}</TableCell>
                <TableCell>{row.cell1}</TableCell>
                <TableCell>
                  <span className="text-primary cursor-pointer font-medium hover:underline">
                    {row.link}
                  </span>
                </TableCell>
                <TableCell>
                  <Checkbox aria-label={`تحديد الصف ${row.id}`} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* ── Simple table ── */}
      <section className="mb-16 w-full max-w-4xl">
        <h2 className="mb-4 text-xl font-semibold">Simple Table</h2>
        <Table>
          <TableCaption>A list of recent transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-end">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                invoice: "INV-0001",
                status: "Paid",
                method: "Bank Transfer",
                amount: "12,500.00 SAR",
              },
              {
                invoice: "INV-0002",
                status: "Pending",
                method: "Credit Card",
                amount: "3,200.00 SAR",
              },
              {
                invoice: "INV-0003",
                status: "Overdue",
                method: "SADAD",
                amount: "8,750.00 SAR",
              },
              {
                invoice: "INV-0004",
                status: "Paid",
                method: "Bank Transfer",
                amount: "1,100.00 SAR",
              },
              {
                invoice: "INV-0005",
                status: "Paid",
                method: "Credit Card",
                amount: "22,000.00 SAR",
              },
            ].map((row) => (
              <TableRow key={row.invoice}>
                <TableCell className="font-medium">{row.invoice}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell className="text-end">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-end">47,550.00 SAR</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      {/* ── RTL preview ── */}
      <section className="mb-16 w-full max-w-4xl" dir="rtl">
        <h2 className="mb-4 text-xl font-semibold">RTL Table Preview</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead>عنوان العمود</TableHead>
              <TableHead className="text-end">المبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                name: "أحمد الفارسي",
                dept: "التحول الرقمي",
                ref: "REF-1001",
                amount: "١٢,٥٠٠ ر.س",
              },
              {
                name: "سارة الدوسري",
                dept: "حوكمة البيانات",
                ref: "REF-1002",
                amount: "٣,٢٠٠ ر.س",
              },
              {
                name: "محمد القحطاني",
                dept: "الامتثال",
                ref: "REF-1003",
                amount: "٨,٧٥٠ ر.س",
              },
              {
                name: "فاطمة الحربي",
                dept: "التقنية",
                ref: "REF-1004",
                amount: "١,١٠٠ ر.س",
              },
            ].map((row) => (
              <TableRow key={row.ref}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>{row.dept}</TableCell>
                <TableCell>{row.ref}</TableCell>
                <TableCell className="text-end">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* ── AQ Related table ── */}
        <section className="mb-16 w-full max-w-4xl">
          <h2 className="mb-4 text-xl font-semibold">AQ Table</h2>
          <div className="!rounded-[0px]">
            <Table
              style={{
                borderRadius: "0 !important",
                backgroundColor: "turquoise",
              }}
              className="!rounded-none !rounded-b-none"
            >
              <TableCaption>A list of recent transactions.</TableCaption>
              <TableHeader className="!rounded-none bg-[var(--colors-primary-s-a-flag200)]">
                <TableRow>
                  <TableHead className="w-[120px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-end">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    invoice: "INV-0001",
                    status: "Paid",
                    method: "Bank Transfer",
                    amount: "12,500.00 SAR",
                  },
                  {
                    invoice: "INV-0002",
                    status: "Pending",
                    method: "Credit Card",
                    amount: "3,200.00 SAR",
                  },
                  {
                    invoice: "INV-0003",
                    status: "Overdue",
                    method: "SADAD",
                    amount: "8,750.00 SAR",
                  },
                  {
                    invoice: "INV-0004",
                    status: "Paid",
                    method: "Bank Transfer",
                    amount: "1,100.00 SAR",
                  },
                  {
                    invoice: "INV-0005",
                    status: "Paid",
                    method: "Credit Card",
                    amount: "22,000.00 SAR",
                  },
                ].map((row) => (
                  <TableRow key={row.invoice}>
                    <TableCell className="font-medium">{row.invoice}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.method}</TableCell>
                    <TableCell className="text-end">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-end">47,550.00 SAR</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </section>
      </section>
    </div>
  )
}
