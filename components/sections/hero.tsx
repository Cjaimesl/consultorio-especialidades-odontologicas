"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Hero() {
  const { scrollToId } = useSmoothScroll()

  return (
    <section className="relative flex min-h-[85vh] items-center bg-[linear-gradient(to_bottom,#F1EFE9,var(--background))] pt-32 pb-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            Atención Odontológica Integral
          </div>

          <h1 className="text-heading text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Sonrisas saludables, <br />
            <span className="text-primary">pacientes felices.</span>
          </h1>

          <p className="text-contentmx-auto max-w-175 text-muted-foreground md:text-xl">
            Expertos en ortodoncia, estética y salud dental. Tecnología avanzada
            para el cuidado de toda tu familia en un ambiente cómodo.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="btn-primary-dental rounded-full px-8 text-lg font-bold"
              onClick={() =>
                window.open(
                  "https://wa.me/584149225053?text=Hola,%20quisiera%20agendar%20una%20cita",
                  "_blank"
                )
              }
            >
              Agendar Cita
            </Button>
            <Button
              size="lg"
              className="btn-secondary-dental rounded-full px-8 text-lg font-bold"
              onClick={() => scrollToId("#servicios")}
            >
              Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-secondary)_0%,transparent_25%)] opacity-30" />
    </section>
  )
}