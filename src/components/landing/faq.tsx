import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

import { faqsData as faqs } from "@/config/site-content"

export function FAQ() {
    return (
        <section id="faq" className="py-24">
            <div className="site-container max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                            Preguntas frecuentes
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">Todo lo que necesitas saber acerca de nuestros vapers, destilados y baterías.</p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger className="text-left text-[1.05rem]">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-[1rem] leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
