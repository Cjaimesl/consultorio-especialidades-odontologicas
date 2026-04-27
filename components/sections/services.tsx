import {
  Stethoscope,
  Sparkles,
  Activity,
  HeartPulse,
  Microscope,
  ShieldCheck,
} from "lucide-react"

const servicios = [
  {
    title: "Odontología General",
    description:
      "Limpiezas, extracciones y restauraciones básicas para mantener tu salud oral.",
    icon: Stethoscope,
  },
  {
    title: "Estética Dental",
    description:
      "Diseño de sonrisa, carillas y blanqueamiento con resultados naturales.",
    icon: Sparkles,
  },
  {
    title: "Ortodoncia",
    description:
      "Alineación dental con brackets tradicionales o sistemas invisibles.",
    icon: Activity,
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conducto avanzados para salvar tus piezas dentales.",
    icon: HeartPulse,
  },
  {
    title: "Cirugía Bucal",
    description:
      "Procedimientos quirúrgicos con tecnología de mínima invasión.",
    icon: Microscope,
  },
  {
    title: "Prevención",
    description:
      "Planes personalizados para evitar problemas antes de que aparezcan.",
    icon: ShieldCheck,
  },
]

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-secondary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-heading mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Nuestros Servicios
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 inline-flex rounded-lg bg-primary/5 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <servicio.icon className="h-6 w-6" />
              </div>
              <h3 className="text-heading mb-3 text-xl font-bold tracking-tight">
                {servicio.title}
              </h3>
              <p className="text-content text-sm leading-relaxed">
                {servicio.description}
              </p>
              <div className="mt-6 h-1 w-8 rounded-full bg-primary/20 transition-all duration-300 group-hover:w-16 group-hover:bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}