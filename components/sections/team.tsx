import Image from "next/image"

const especialistas = [
  {
    name: "Dr. John Briceño",
    role: "Endodoncista",
    description:
      "Especialista en tratamientos de conducto avanzados con microscopía.",
    image: "/images/dr.john.jpg",
  },
  {
    name: "Dra. Elena Rodríguez",
    role: "Odontología Estética",
    description:
      "Especialista en diseño de sonrisa y carillas con 10 años de trayectoria.",
    image: "/images/dr.john.jpg",
  },
  {
    name: "Dra. Patricia Sosa",
    role: "Ortodoncista",
    description:
      "Experto en sistemas de alineación invisible y ortodoncia interceptiva.",
    image: "/images/dr.john.jpg",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="section-arena scroll-mt-20 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-heading mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestros Especialistas
            </h2>
            <p className="text-content text-lg">
              Un equipo multidisciplinario comprometido con la excelencia y el
              trato humano en cada tratamiento.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {especialistas.map((doctor, index) => (
            <div
              key={index}
              className="card-dental-premium rounded-[--radius] p-6"
            >
              <div className="relative mb-6 aspect-4/5 overflow-hidden rounded-2xl bg-muted">
                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-content flex h-full w-full items-center justify-center italic">
                  <Image src={doctor.image} alt={doctor.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="flex gap-3 text-white">
                    {/* LINKS DE REDES SOCIALES PARA DOCTORES*/}
                  </div>
                </div>
              </div>
              <h3 className="text-heading mb-1 text-xl font-bold">
                {doctor.name}
              </h3>
              <p className="mb-3 text-sm font-medium tracking-wider text-primary uppercase">
                {doctor.role}
              </p>
              <p className="text-sm leading-relaxed">{doctor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}