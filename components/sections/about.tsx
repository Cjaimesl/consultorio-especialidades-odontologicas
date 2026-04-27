import Image from "next/image"

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="section-arena scroll-mt-20 border-y border-secondary/20 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted lg:aspect-auto lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="text-content flex h-full items-center justify-center">
              <Image
                src="/images/consultorio.jpg"
                alt="Imagen del Consultorio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              [Imagen del Consultorio]
            </div>
          </div>

          <div className="space-y-6">
            <div className="full inline-block rounded bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Sobre Nosotros
            </div>
            <h2 className="text-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Cuidamos tu salud bucal con tecnología de vanguardia
            </h2>
            <p className="text-content text-lg">
              En nuestro consultorio, no solo tratamos dientes; cuidamos
              personas. Con más de [X] años de experiencia en Caracas,
              combinamos la calidez humana con los últimos avances en
              odontología digital.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Especialistas certificados</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Equipos de última generación</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span>Ambiente seguro y confortable</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}