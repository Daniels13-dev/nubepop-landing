import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24">
      <div className="site-container max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Preguntas frecuentes</h2>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is there a free trial?</AccordionTrigger>
            <AccordionContent>
              Yes, you can try it for 14 days.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Shipping usually takes 3-7 business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
