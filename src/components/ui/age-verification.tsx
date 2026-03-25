"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert } from "lucide-react"
import { Button } from "./button"

export function AgeVerification() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        // Check if user has already verified their age
        const hasVerified = localStorage.getItem("nubepop_age_verified")
        if (!hasVerified) {
            // Add a small delay for smoother initial load
            const timer = setTimeout(() => setIsVisible(true), 1000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleVerify = () => {
        localStorage.setItem("nubepop_age_verified", "true")
        setIsVisible(false)
    }

    const handleDeny = () => {
        // Redirect to google or a safe page if under 18
        window.location.href = "https://www.google.com"
    }

    // Prevents hydration mismatch
    if (!isMounted) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-8 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-full bg-[#c049eb]/20 blur-[60px] pointer-events-none" />

                        <div className="relative flex flex-col items-center text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                                <ShieldAlert className="h-10 w-10" />
                            </div>

                            <h2 className="mb-2 text-3xl font-bold tracking-tight text-white">
                                ¿Eres mayor de edad?
                            </h2>
                            
                            <p className="mb-8 text-zinc-400">
                                Los productos vendidos en este sitio contienen nicotina y otras sustancias reguladas. 
                                Debes tener al menos <strong>18 años</strong> para acceder a NubePop.
                            </p>

                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <Button 
                                    onClick={handleDeny}
                                    variant="outline" 
                                    className="flex-1 rounded-2xl border-white/10 hover:bg-white/5 h-16 md:h-14 py-4 text-lg font-bold uppercase tracking-tight"
                                >
                                    Soy menor de 18
                                </Button>
                                <Button 
                                    onClick={handleVerify}
                                    className="flex-1 rounded-2xl bg-gradient-to-r from-[#c049eb] to-[#ea1f78] text-white hover:opacity-90 transition-opacity h-16 md:h-14 py-4 text-lg font-black uppercase tracking-tight shadow-[0_0_30px_rgba(192,73,235,0.3)]"
                                >
                                    Sí, tengo 18+
                                </Button>
                            </div>

                            <p className="mt-6 text-xs text-zinc-600">
                                Al ingresar, confirmas que tienes edad legal para comprar productos de vapeo en tu jurisdicción y aceptas nuestros términos de servicio.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
