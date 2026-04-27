"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { MobileMenu } from "@/components/sections/mobileMenu"

export default function Navbar() {
  const { scrollToId } = useSmoothScroll()

  return (
    <header className="fixed top-0 right-0 left-0 z-100 h-16 w-full border-b border-secondary/10 bg-[#F9F7F2]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Icons.Tooth className="h-6 w-6 shrink-0 text-primary" />
          <div className="flex flex-col leading-none">
            <span className="text-heading text-[11px] font-bold tracking-tight whitespace-nowrap md:text-xl">
              Consultorio de
            </span>
            <span className="text-heading text-[11px] font-bold tracking-tight whitespace-nowrap md:text-xl">
              Especialidades Odontológicas
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden gap-6 md:flex md:items-center">
            <Link
              href="#sobre-nosotros"
              onClick={() => scrollToId("#sobre-nosotros")}
              className="text-content text-sm font-medium transition-colors hover:text-primary"
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#servicios"
              onClick={() => scrollToId("#servicios")}
              className="text-content text-sm font-medium transition-colors hover:text-primary"
            >
              Servicios
            </Link>
            <Link
              href="#equipo"
              onClick={() => scrollToId("#equipo")}
              className="text-content text-sm font-medium transition-colors hover:text-primary"
            >
              Equipo
            </Link>
            <Link
              href="#faq"
              onClick={() => scrollToId("#faq")}
              className="text-content text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="text-content hidden items-center gap-2 sm:flex">
              <Link
                href="https://instagram.com/dentalceove"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-instagram"
              >
                <Icons.Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://wa.me/584149225053?text=Hola,%20quisiera%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-whatsapp"
              >
                <Icons.Whatsapp className="h-6 w-6" />
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <div className="hidden md:block">
                <Button
                  className="btn-primary-dental px-6 py-2"
                  onClick={() => scrollToId("#contact")}
                >
                  Contacto
                </Button>
              </div>

              <div className="md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}