"use client"

import { motion } from "framer-motion"

export function BackgroundAura() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
            {/* Blob 1: Purple */}
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, 50, 100, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] w-[60%] aspect-square bg-[#c049eb]/15 blur-[120px] rounded-full"
            />

            {/* Blob 2: Pink */}
            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, -80, -40, 0],
                    scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square bg-secondary/10 blur-[140px] rounded-full"
            />

            {/* Blob 3: Blue Accent */}
            <motion.div
                animate={{
                    x: [0, 50, -50, 0],
                    y: [0, 100, -100, 0],
                    opacity: [0.05, 0.15, 0.05],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square bg-[#38bdf8]/10 blur-[130px] rounded-full"
            />

            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}
