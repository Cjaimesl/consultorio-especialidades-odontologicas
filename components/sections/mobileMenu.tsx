"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { createPortal } from "react-dom"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { scrollToId } = useSmoothScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  const menuLinks = [
    { name: "Sobre Nosotros", id: "#sobre-nosotros" },
    { name: "Servicios", id: "#servicios" },
    { name: "Equipo", id: "#equipo" },
    { name: "FAQ", id: "#faq" },
  ]

  const handleNavigation = (id: string) => {
    setIsOpen(false)
    setTimeout(() => scrollToId(id), 300)
  }

  if (!mounted) return <Menu className="h-8 w-8" />

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2">
        <Menu className="h-8 w-8" />
      </button>

      {createPortal(
      <div
        className={`fixed inset-0 z-200 ${isOpen ? "visible" : "invisible"}`}
      >
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute right-0 h-full w-[85%] max-w-[320px] bg-[#F9F7F2] shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b bg-[#F9F7F2] p-6">
              <Icons.Tooth className="h-7 w-7 text-primary" />
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-secondary/10 p-2"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-10 bg-[#F9F7F2] px-8 py-12">
              {menuLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className="text-heading border-b-2 border-secondary/5 pb-2 text-left text-3xl font-black"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="space-y-8 border-t bg-[#F9F7F2] p-8">
              <div className="flex justify-center gap-10">
                <a
                  href="https://instagram.com/dentalceove"
                  target="_blank"
                  className="social-icon-instagram"
                >
                  <Icons.Instagram className="h-9 w-9" />
                </a>
                <a
                  href="https://wa.me/584149225053"
                  target="_blank"
                  className="social-icon-whatsapp"
                >
                  <Icons.Whatsapp className="h-9 w-9" />
                </a>
              </div>

              <Button
                className="btn-primary-dental w-full py-8 text-2xl font-bold shadow-lg"
                onClick={() => handleNavigation("#contact")}
              >
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>,
        document.body
      )}
    </>
  )
}
