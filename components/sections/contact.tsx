"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="section-arena py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ponte en Contacto
          </h2>
          <p className="text-content mx-auto max-w-2xl text-lg">
            Estamos aquí para cuidar tu sonrisa. Escríbenos o visítanos en
            nuestra sede en Caracas.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h3 className="text-heading mb-8 text-2xl font-bold">
                Información de Contacto
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-content font-semibold">Ubicación</p>
                    <p className="text-content">Caracas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-content font-semibold">Teléfono</p>
                    <p className="text-content">0424-1234567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-content font-semibold">Email</p>
                    <p className="text-content">contacto@dentalceove.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-content font-semibold">
                      Horario de Atención
                    </p>
                    <p className="text-content">Lun - Vie: 9:00am - 7:00pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-content mb-4 text-sm font-bold tracking-widest uppercase">
                Síguenos
              </h4>
              <div className="flex gap-6">
                <Link
                  href="https://instagram.com/dentalceove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-instagram"
                >
                  <Icons.Instagram className="h-7 w-7" />
                </Link>
                <Link
                  href="https://wa.me/584149225053?text=Hola,%20quisiera%20agendar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-whatsapp"
                >
                  <Icons.Whatsapp className="h-7 w-7" />
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-secondary/50 bg-white p-8 shadow-sm lg:p-12">
            <h3 className="text-heading mb-8 text-2xl font-bold">
              Envíanos un Mensaje
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-700">
                    Nombre
                  </label>
                  <Input
                    placeholder="Tu nombre"
                    className="h-12 rounded-xl border-secondary bg-background/50 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="h-12 rounded-xl border-secondary bg-background/50 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium text-slate-700">
                  Asunto
                </label>
                <Input
                  placeholder="¿En qué podemos ayudarte?"
                  className="h-12 rounded-xl border-secondary bg-background/50 focus-visible:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-sm font-medium text-slate-700">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  className="min-h-37.5 resize-none rounded-xl border-secondary bg-background/50 focus-visible:ring-primary"
                />
              </div>

              <Button className="btn-primary-dental w-full py-7 text-lg">
                Enviar Mensaje
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
