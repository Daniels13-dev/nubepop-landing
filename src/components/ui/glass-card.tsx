"use client"

import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean
    glow?: string
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, hover = true, glow, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-3xl border border-white/5 shadow-2xl transition-all duration-500",
                    hover && "hover:bg-zinc-900/60 hover:border-white/10 hover:-translate-y-1",
                    className
                )}
                {...props}
            >
                {glow && (
                    <div className={cn(
                        "absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 blur-[80px] rounded-full pointer-events-none opacity-0 transition-opacity duration-700",
                        hover && "group-hover:opacity-100",
                        glow
                    )} />
                )}
                <div className="relative z-10">
                    {children}
                </div>
            </div>
        )
    }
)

GlassCard.displayName = "GlassCard"
