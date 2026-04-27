"use client"
import { useLenis } from "@studio-freight/react-lenis"

export const useSmoothScroll = () => {
  const lenis = useLenis()

  const scrollToId = (id: string, offset: number = -80) => {
    if (lenis) {
      lenis.scrollTo(id, {
        offset: offset,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  return { scrollToId }
}
