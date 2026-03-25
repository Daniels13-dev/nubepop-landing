"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductCarouselProps {
    images: string[]
    name: string
}

export function ProductCarousel({ images, name }: ProductCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    // Si no hay imágenes o solo hay una, simplemente mostramos la primera (fallback)
    if (!images || images.length === 0) {
        images = [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=400&h=400",
        ]
    }

    const isSingleImage = images.length === 1

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number, e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault()
            e.stopPropagation()
        }
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection
            if (nextIndex < 0) nextIndex = images.length - 1
            if (nextIndex >= images.length) nextIndex = 0
            return nextIndex
        })
    }

    const goToSlide = (index: number, e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    return (
        <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center bg-zinc-900/40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag={!isSingleImage ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x)
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1)
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1)
                        }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${name} - Vista ${currentIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        draggable={false}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Controles del Carrusel (Flechas) */}
            {!isSingleImage && (
                <>
                    <button
                        onClick={(e) => paginate(-1, e)}
                        className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#c049eb]/80 hover:scale-110 transition-all z-10 ${
                            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        }`}
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={(e) => paginate(1, e)}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#c049eb]/80 hover:scale-110 transition-all z-10 ${
                            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Indicadores (Puntos) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={(e) => goToSlide(index, e)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentIndex
                                        ? "w-4 h-1.5 bg-[#c049eb] shadow-[0_0_8px_rgba(192,73,235,0.6)]"
                                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
                                }`}
                                aria-label={`Ir a imagen ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
