"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { forwardRef } from "react"
import { fadeIn, transitionInstant, transitionSmooth } from "@/lib/animations"

interface HeroCarouselProps {
    promos: string[]
    active: number
    className?: string
    [key: string]: any
}

export const HeroCarousel = forwardRef<HTMLDivElement, HeroCarouselProps>(
    ({ promos, active, className, ...props }, ref) => {
        return (
            <div 
                ref={ref} 
                className={className || "relative w-full max-w-[320px] md:max-w-[420px] aspect-[9/16] overflow-hidden rounded-2xl"} 
                {...props}
            >
                {promos.map((src: string, i: number) => {
                    const isLogo = src.includes("logo-negro") || i === promos.length - 1;
                    
                    return (
                        <motion.div
                            key={src}
                            variants={fadeIn}
                            initial="initial"
                            animate={active === i ? "animate" : "initial"}
                            transition={isLogo ? transitionInstant : transitionSmooth}
                            className="absolute inset-0"
                            aria-hidden={active !== i}
                        >
                            {isLogo ? (
                                <div className="w-full h-full flex items-center justify-center bg-transparent">
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={src}
                                            alt="NubePop Logo"
                                            width={600}
                                            height={600}
                                            className="object-contain"
                                            unoptimized
                                            priority
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative w-full h-full bg-black/10 flex items-center justify-center">
                                    <Image
                                        src={src}
                                        alt={`Promo ${i + 1}`}
                                        fill
                                        className="object-cover object-center"
                                        priority={i === 0}
                                    />
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        )
    }
)

HeroCarousel.displayName = "HeroCarousel"
