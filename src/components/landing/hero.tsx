"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState, useRef, useLayoutEffect } from "react"

export default function Hero() {
    const promos = [
        "/promos/promo1.JPG",
        "/promos/promo2.JPG",
        "/promos/promo5.JPG",
        "/logo-negro.png",
    ]
    const totalSlides = promos.length

    type Slide = {
        title: string
        bullets: string[]
        primary: string
        secondary: string
        // mensaje opcional que se enviará por WhatsApp cuando esté presente
        message?: string
    }

    const slidesText: Slide[] = [
        {
            title: "Promo semanal: 20% OFF",
            bullets: [
                "Descuento especial",
                "Hasta agotar stock",
                "Solo en productos seleccionados",
            ],
            primary: "Ver oferta",
            secondary: "Más info",
            message: "Hola, quiero la promo semanal",
        },
        {
            title: "Promo: Combo NubePop",
            bullets: ["Ahorra comprando en combo", "Envío rápido", "Regalo sorpresa"],
            primary: "Ver combo",
            secondary: "Detalles",
            message: "Hola, estoy interesado en el Combo NubePop",
        },
        {
            title: "Promo: Estrena sabor",
            bullets: ["Nuevos sabores cada semana", "Edición limitada", "Calidad garantizada"],
            primary: "Probar ahora",
            secondary: "Saber más",
            message: "Hola, quiero probar el nuevo sabor de esta semana",
        },
        {
            title: "Sabor que acompaña ☁️",
            bullets: [
                "🔥 Novedades cada semana",
                "⚡ Entregas rápidas",
                "💬 Atención todos los días",
            ],
            primary: "Ver productos",
            secondary: "Contactar",
            message: "Hola, quiero saber más sobre los productos",
        },
    ]

    // Número de WhatsApp (proporcionado por el usuario)
    const WHATSAPP_NUMBER = "573126928258"

    // Active slide and autoplay
    const [active, setActive] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (isPaused) return
        const iv = setInterval(() => setActive((s) => (s + 1) % totalSlides), 5000)
        return () => clearInterval(iv)
    }, [totalSlides, isPaused])

    // Measure carousel height so text area keeps same vertical size and doesn't shift
    const carouselRef = useRef<HTMLDivElement | null>(null)
    const [carouselHeight, setCarouselHeight] = useState<number | null>(null)

    useLayoutEffect(() => {
        const el = carouselRef.current
        if (!el) return
        const setH = () => setCarouselHeight(el.offsetHeight)
        setH()
        if (typeof ResizeObserver !== "undefined") {
            const ro = new ResizeObserver(setH)
            ro.observe(el)
            return () => ro.disconnect()
        }
        window.addEventListener("resize", setH)
        return () => window.removeEventListener("resize", setH)
    }, [])

    // Track whether viewport is md+ (Tailwind's md breakpoint ≈ 768px)
    const [isMd, setIsMd] = useState(false)
    useEffect(() => {
        if (typeof window === "undefined") return
        const mq = window.matchMedia("(min-width: 768px)")
        const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMd((e as any).matches)
        handler(mq)
        if (mq.addEventListener) mq.addEventListener("change", handler)
        else mq.addListener(handler)
        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handler)
            else mq.removeListener(handler)
        }
    }, [])

    return (
        <section
            style={{ marginTop: "var(--navbar-height)" }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c001a] via-[#25003f] to-[#0c001a]" />

            <div className="absolute w-[800px] h-[800px] bg-purple-600 opacity-30 blur-[200px] rounded-full top-[-200px] left-[-200px]" />
            <div className="absolute w-[700px] h-[700px] bg-pink-500 opacity-30 blur-[200px] rounded-full bottom-[-200px] right-[-200px]" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 w-full">
                <div className="flex justify-center md:justify-center">
                    <div
                        ref={carouselRef}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                        className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[9/16]"
                    >
                        {promos.map((src, i) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={
                                    active === i
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.98 }
                                }
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                                aria-hidden={active !== i}
                            >
                                {src.includes("logo-negro") || i === promos.length - 1 ? (
                                    <div className="w-full h-full flex items-center justify-center bg-transparent">
                                        <div className="p-4 rounded-md flex items-center justify-center">
                                            <Image
                                                src={src}
                                                alt={`Promo ${i + 1}`}
                                                width={500}
                                                height={500}
                                                className="object-contain drop-shadow-[0_0_24px_rgba(0,0,0,0.4)]"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full rounded-md overflow-hidden bg-black/10 flex items-center justify-center">
                                        <Image
                                            src={src}
                                            alt={`Promo ${i + 1}`}
                                            fill
                                            className="object-cover object-center"
                                        />
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {/* Indicators removed from image box; they will be rendered under the whole carousel */}
                    </div>
                </div>

                {/* Right: text column — fixed height matching carousel to avoid shifts */}
                <div className="relative w-full md:pl-6">
                    <div
                        className="mx-auto max-w-2xl"
                        style={
                            isMd && carouselHeight ? { height: `${carouselHeight}px` } : undefined
                        }
                    >
                        {slidesText.map((t, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 16 }}
                                animate={
                                    active === idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                                }
                                transition={{ duration: 0.5 }}
                                className={`absolute inset-0 text-center md:text-left text-white flex flex-col justify-center px-4 ${active === idx ? "block pointer-events-auto" : "hidden md:block pointer-events-none"}`}
                                aria-hidden={active !== idx}
                            >
                                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
                                <div className="space-y-3 text-lg md:text-xl mb-6">
                                    {t.bullets.map((b, i) => (
                                        <p
                                            key={i}
                                            className="flex items-center gap-3 justify-center md:justify-start"
                                        >
                                            {b}
                                        </p>
                                    ))}
                                </div>

                                <div className="flex justify-center md:justify-start gap-4">
                                    <a
                                        href={
                                            t.message
                                                ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                                      t.message
                                                  )}`
                                                : `https://wa.me/${WHATSAPP_NUMBER}`
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#EA1F78] to-[#F8499D] text-white font-semibold shadow-xl hover:scale-105 transition"
                                    >
                                        {t.primary}
                                    </a>

                                    <button className="px-6 py-3 rounded-full border border-white/40 backdrop-blur-lg hover:bg-white/10 transition">
                                        {t.secondary}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Indicators centered with respect to the whole carousel (overlay) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2">
                {promos.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActive(idx)}
                        className={`w-3 h-3 rounded-full ${active === idx ? "bg-white" : "bg-white/30"}`}
                        aria-label={`Slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
