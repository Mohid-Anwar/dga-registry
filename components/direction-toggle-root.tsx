import * as React from "react"

export function DirectionToggleRoot({
  value,
  onChange,
}: {
  value: "ltr" | "rtl"
  onChange: (dir: "ltr" | "rtl") => void
}) {
  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 1000 }}>
      <button
        type="button"
        style={{
          padding: "8px 16px",
          marginRight: 8,
          background: value === "ltr" ? "#e5e7eb" : "#fff",
          border: "1px solid #d1d5db",
          borderRadius: 4,
          cursor: "pointer",
        }}
        onClick={() => onChange("ltr")}
        aria-pressed={value === "ltr"}
      >
        LTR
      </button>
      <button
        type="button"
        style={{
          padding: "8px 16px",
          background: value === "rtl" ? "#e5e7eb" : "#fff",
          border: "1px solid #d1d5db",
          borderRadius: 4,
          cursor: "pointer",
        }}
        onClick={() => onChange("rtl")}
        aria-pressed={value === "rtl"}
      >
        RTL
      </button>
    </div>
  )
}
