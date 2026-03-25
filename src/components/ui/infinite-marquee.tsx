"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InfiniteMarqueeProps {
    items: string[]
    className?: string
    speed?: number
}

export function InfiniteMarquee({ items, className, speed = 20 }: InfiniteMarqueeProps) {
    // Duplicate items to ensure infinite feel
    const duplicatedItems = [...items, ...items, ...items, ...items]

    return (
        <div className={cn("relative w-full overflow-hidden bg-white py-2 select-none", className)}>
            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: [0, -1035], // Initial guess, logic below is better
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    display: "flex",
                    width: "fit-content",
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <div key={idx} className="flex items-center mx-10">
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black">
                            {item}
                        </span>
                        <div className="mx-8 h-1 w-1 rounded-full bg-black/20" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
