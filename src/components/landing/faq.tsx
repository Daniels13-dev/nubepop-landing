"use client"

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle, ChevronRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { faqsData as faqs, WHATSAPP_NUMBER } from "@/config/site-content"
import { fadeInUp } from "@/lib/animations"
import { GlassCard } from "@/components/ui/glass-card"
import { getWhatsAppUrl } from "@/lib/utils"

export function FAQ() {
    const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBER, "Hola NubePop! Tengo una duda sobre...")

    return (
        <section id="faq" className="py-12 relative overflow-hidden bg-transparent border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="site-container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Side: Header & CTA */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                                <HelpCircle className="w-4 h-4 text-primary" />
                                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Centro de Ayuda</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
                                Resolvamos tus <br />
                                <span className="text-secondary">Dudas</span>
                            </h2>
                            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                                ¿Tienes alguna pregunta sobre nuestros productos, envíos o legalidad? Aquí encontrarás las respuestas más comunes.
                            </p>
                        </motion.div>

                        {/* New CTA Card: Support Support Block */}
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <GlassCard glow="bg-primary/10" className="p-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                            <FaWhatsapp className="w-6 h-6" />
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white border-2 border-black animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Soporte en vivo</span>
                                </div>
                                
                                <h3 className="text-2xl font-black text-white mb-4">¿No encuentras lo que buscas?</h3>
                                <p className="text-zinc-500 text-base mb-8 leading-relaxed">
                                    Nuestros expertos están listos para ayudarte a elegir el vaper o destilado ideal para ti. 
                                    <span className="block mt-2 text-zinc-400 font-bold italic">Respuesta inmediata.</span>
                                </p>
                                
                                <a 
                                    href={whatsappUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-black flex items-center justify-center gap-3 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(137,37,211,0.4)] active:scale-95 group/btn"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    Chatear con un experto
                                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* Right Side: Accordion */}
                    <motion.div 
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-7"
                    >
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, i) => (
                                <AccordionItem 
                                    key={i} 
                                    value={`item-${i + 1}`}
                                    className="border border-white/5 bg-zinc-900/40 backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/30 transition-colors"
                                >
                                    <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group">
                                        <span className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors pr-4">
                                            {faq.question}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-6 text-zinc-400 text-base md:text-lg leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
