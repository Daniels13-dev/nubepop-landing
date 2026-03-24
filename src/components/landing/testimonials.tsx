"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonialsData as testimonials } from "@/config/site-content"
import { containerVariants, fadeInUp } from "@/lib/animations"
import { GlassCard } from "@/components/ui/glass-card"

export function Testimonials() {
    return (
        <section id="testimonials" className="py-16 relative overflow-hidden bg-transparent">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="site-container relative z-10">
                {/* Header */}
                <div className="text-left mb-12 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Comunidad NubePop</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        Clientes <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Satisfechos</span>
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        Lo que dicen quienes ya elevaron su experiencia con nuestros productos premium.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {testimonials.map((t, idx) => (
                        <motion.div 
                            key={idx}
                            variants={fadeInUp}
                        >
                            <GlassCard
                                glow="bg-primary/5"
                                className="p-8 md:p-10 group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                                    <Quote className="w-32 h-32 text-white" />
                                </div>

                                <div className="relative z-10">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8 italic">
                                        "{t.text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center text-white font-bold text-lg">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white group-hover:text-primary transition-colors">{t.name}</h4>
                                            <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Cliente Verificado</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-zinc-500 mb-2">Únete a cientos de clientes que confían en nosotros</p>
                    <div className="flex items-center justify-center gap-4 text-white font-black text-2xl">
                        <span>4.9/5</span>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
