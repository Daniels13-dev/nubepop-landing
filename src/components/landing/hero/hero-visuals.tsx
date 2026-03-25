"use client"

import { motion } from "framer-motion"
import { HeroCarousel } from "../hero-carousel"
import { promosData } from "@/config/site-content"

interface HeroVisualsProps {
    active: number
    onHover: (isPaused: boolean) => void
}

export function HeroVisuals({ active, onHover }: HeroVisualsProps) {
    return (
        <div className="lg:col-span-5 relative flex justify-center">
            {/* Rotating Aura behind product */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border-t-2 border-primary/20 rounded-full blur-sm"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square border-b-2 border-secondary/20 rounded-full blur-sm"
            />

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[400px] drop-shadow-[0_0_80px_rgba(137,37,211,0.3)]"
            >
                <HeroCarousel
                    promos={promosData}
                    active={active}
                    onMouseEnter={() => onHover(true)}
                    onMouseLeave={() => onHover(false)}
                    className="w-full aspect-[9/16] lg:aspect-[5/7] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl"
                />
            </motion.div>
        </div>
    )
}
