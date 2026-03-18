import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "¿Cuánto dura un vaper desechable?",
        answer: "La duración depende de tu uso y de la cantidad de inhalaciones (puffs) del modelo. En promedio, un vaper de 5000 puffs dura entre 1 a 2 semanas para un usuario frecuente.",
    },
    {
        question: "¿Qué voltaje se recomienda para los destilados?",
        answer: "Para la mayoría de destilados y cartuchos (carts), se recomienda usar una batería entre 2.4V y 2.8V. Empezar con un voltaje bajo e ir subiéndolo gradualmente te permite disfrutar mejor el sabor y evitar quemar el líquido.",
    },
    {
        question: "¿Puedo comprar si soy menor de edad?",
        answer: "No. De acuerdo con la ley, la venta de todos nuestros productos (incluyendo vapers, destilados y baterías) está estrictamente prohibida a menores de 18 años. Requerimos verificación de edad obligatoria al ingresar al sitio y al momento de la entrega.",
    },
    {
        question: "¿Qué diferencia hay entre destilado puro y Live Resin?",
        answer: "El destilado puro ofrece un efecto muy fuerte y concentrado sin alterar tanto el olor tradicional de la resina, mientras que la Live Resin está hecha con plantas congeladas frescas y mantiene muchos más terpenos, generando un sabor y aroma sumamente parecidos a la flor natural.",
    },
    {
        question: "¿Cómo sé si la batería de mi vaper ya está baja?",
        answer: "La mayoría de nuestros vapers y baterías tienen indicadores de luz LED en la base o un costado. Cuando la luz parpadee al momento de inhalar, significa que es hora de recargarlo. Si el modelo no es recargable y parpadea, indica el fin de la vida útil del producto.",
    },
]

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
