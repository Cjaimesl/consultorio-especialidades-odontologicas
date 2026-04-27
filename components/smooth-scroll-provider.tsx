"use client"
import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import { useEffect } from "react"

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenis = useLenis()

  useEffect(() => {
    lenis?.resize()
  }, [lenis])

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.5 }}>
      <>{children}</>
    </ReactLenis>
  )
}
