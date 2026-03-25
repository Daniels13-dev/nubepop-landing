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
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-12 lg:pt-0">
            {/* Dynamic Background Glow - Optimized for mobile */}
            <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5 }}
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] lg:w-[60rem] h-[30rem] lg:h-[60rem] blur-[100px] lg:blur-[180px] rounded-full pointer-events-none z-0 opacity-20",
                    active === 0 ? "bg-primary" : active === 1 ? "bg-secondary" : "bg-[#c049eb]"
                )}
            />

            <div className="relative site-container z-10 w-full pb-28 lg:pb-0 mb-10 lg:mb-0">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visuals - High Priority on Mobile (Stacked on top) */}
                    <div className="order-1 lg:order-2 lg:col-span-12 xl:col-span-5 relative w-full mb-8 lg:mb-0">
                        <HeroVisuals active={active} onHover={setIsPaused} />
                    </div>

                    {/* Content - Below Visuals on Mobile */}
                    <div className="order-2 lg:order-1 lg:col-span-12 xl:col-span-7 text-center lg:text-left px-4">
                        {heroSlides.map((slide, idx) => (
                            <HeroContent
                                key={idx}
                                slide={slide}
                                active={active === idx}
                                idx={idx}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination / Progress Bar - Adjusted for mobile position */}
            <div className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 z-20">
                {promosData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className="group relative px-2 py-4 shadow-none border-none bg-transparent"
                    >
                        <div
                            className={cn(
                                "h-1 rounded-full transition-all duration-500",
                                active === idx
                                    ? "w-10 md:w-12 bg-white"
                                    : "w-3 md:w-4 bg-white/20 group-hover:bg-white/40"
                            )}
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}
