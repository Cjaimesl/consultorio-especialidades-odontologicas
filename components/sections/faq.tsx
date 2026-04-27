import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-24">
      <div className="container mx-auto max-w-3xl py-4">
        <div className="mb-16 text-center">
          <h2 className="text-heading text-3xl font-bold tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-content mt-4">
            Todo lo que necesitas saber antes de tu primera visita.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Aceptan seguros médicos?</AccordionTrigger>
            <AccordionContent>
              Trabajamos con las principales aseguradoras del país. Te
              recomendamos contactarnos con los datos de tu póliza para
              verificar la cobertura exacta.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Tienen atención de urgencias?</AccordionTrigger>
            <AccordionContent>
              Sí, contamos con un protocolo de atención prioritaria para casos
              de dolor agudo o traumatismos dentales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              ¿Cuáles son sus métodos de pago?
            </AccordionTrigger>
            <AccordionContent>
              Aceptamos transferencias nacionales, Pago movil, Zelle, efectivo y
              tarjetas de débito/crédito.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}