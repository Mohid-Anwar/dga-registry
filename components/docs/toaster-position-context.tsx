"use client"

import { createContext, useContext, useState } from "react"

import type { Position } from "@/registry/dga/ui/sonner"

const ToasterPositionContext = createContext<{
  position: Position
  setPosition: (p: Position) => void
}>({
  position: "top-right",
  setPosition: () => {},
})

export function ToasterPositionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [position, setPosition] = useState<Position>("top-right")
  return (
    <ToasterPositionContext.Provider value={{ position, setPosition }}>
      {children}
    </ToasterPositionContext.Provider>
  )
}

export function useToasterPosition() {
  return useContext(ToasterPositionContext)
}
