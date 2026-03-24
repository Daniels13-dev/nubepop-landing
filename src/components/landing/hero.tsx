"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { promosData, heroSlides } from "@/config/site-content"
import { cn } from "@/lib/utils"
import { HeroContent } from "./hero/hero-content"
import { HeroVisuals } from "./hero/hero-visuals"

export default function Hero() {
    const totalSlides = promosData.length
    const [active, setActive] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return
        const iv = setInterval(() => setActive((s) => (s + 1) % totalSlides), 6000)
        return () => clearInterval(iv)
    }, [totalSlides, isPaused])

    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[var(--navbar-height)] lg:pt-0"
        >
            {/* Dynamic Background Glow */}
            <motion.div 
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1.5 }}
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] blur-[180px] rounded-full pointer-events-none z-0",
                    active === 0 ? "bg-primary" : active === 1 ? "bg-secondary" : "bg-blue-500"
                )}
            />

            <div className="relative site-container z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-12 xl:col-span-7 text-center lg:text-left">
                        {heroSlides.map((slide, idx) => (
                            <HeroContent 
                                key={idx}
                                slide={slide}
                                active={active === idx}
                                idx={idx}
                            />
                        ))}
                    </div>

                    {/* Right: Floating Visuals */}
                    <div className="lg:col-span-12 xl:col-span-5 relative">
                        <HeroVisuals 
                            active={active}
                            onHover={setIsPaused}
                        />
                    </div>
                </div>
            </div>

            {/* Pagination / Progress Bar */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
                {promosData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className="group relative px-2 py-4 shadow-none border-none bg-transparent"
                    >
                        <div className={cn(
                            "h-1 rounded-full transition-all duration-500",
                            active === idx ? "w-12 bg-white" : "w-4 bg-white/20 group-hover:bg-white/40"
                        )} />
                    </button>
                ))}
            </div>
        </section>
    )
}
