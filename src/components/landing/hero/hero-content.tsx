"use client"

import { motion } from "framer-motion"
import { cn, getWhatsAppUrl } from "@/lib/utils"
import { WHATSAPP_NUMBER } from "@/config/site-content"

interface HeroContentProps {
    slide: {
        title: string
        bullets: string[]
        primary: string
        secondary: string
        message?: string
    }
    active: boolean
    idx: number
}

export function HeroContent({ slide, active, idx }: HeroContentProps) {
    const whatsappUrl = getWhatsAppUrl(WHATSAPP_NUMBER, slide.message)

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "flex flex-col",
                active ? "relative" : "absolute inset-0 pointer-events-none opacity-0"
            )}
        >
            <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-secondary font-mono text-xs font-black tracking-[0.4em] uppercase mb-6"
            >
                {idx === 0 ? "Exclusividad NubePop" : idx === 1 ? "Potencia & Pureza" : "Kit Completo"}
            </motion.span>

            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter uppercase mb-8">
                {slide.title.split(' ').map((word, i) => (
                    <span 
                        key={i} 
                        className={i === 1 ? "text-transparent stroke-white" : ""} 
                        style={i === 1 ? { WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' } : {}}
                    >
                        {word}{" "}
                    </span>
                ))}
            </h1>

            <div className="space-y-4 mb-10 max-w-lg mx-auto lg:mx-0">
                {slide.bullets.map((bullet, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex items-center gap-4 text-zinc-400 font-medium md:text-lg"
                    >
                        <div className="w-10 h-px bg-white/20" />
                        {bullet}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    className="h-16 px-10 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm flex items-center justify-center hover:scale-105 transition-all shadow-xl shadow-white/10"
                >
                    {slide.primary}
                </a>
                <button className="h-16 px-10 rounded-2xl border border-white/10 backdrop-blur-md text-white font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all">
                    {slide.secondary}
                </button>
            </div>
        </motion.div>
    )
}
