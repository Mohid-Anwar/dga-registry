"use client"

import { createContext, useContext, useState } from "react"

import type { MobilePosition, Position } from "@/registry/dga/ui/sonner"

const ToasterPositionContext = createContext<{
  position: Position
  setPosition: (p: Position) => void
  mobilePosition: MobilePosition
  setMobilePosition: (p: MobilePosition) => void
}>({
  position: "top-right",
  setPosition: () => {},
  mobilePosition: "top",
  setMobilePosition: () => {},
})

export function ToasterPositionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [position, setPosition] = useState<Position>("top-right")
  const [mobilePosition, setMobilePosition] = useState<MobilePosition>("top")
  return (
    <ToasterPositionContext.Provider
      value={{ position, setPosition, mobilePosition, setMobilePosition }}
    >
      {children}
    </ToasterPositionContext.Provider>
  )
}

export function useToasterPosition() {
  return useContext(ToasterPositionContext)
}
