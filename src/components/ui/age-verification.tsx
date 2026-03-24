"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShieldAlert } from "lucide-react"
import { Button } from "./button"
import { scaleIn, fadeIn, transitionSmooth } from "@/lib/animations"

export function AgeVerification() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        const hasVerified = localStorage.getItem("nubepop_age_verified")
        if (!hasVerified) {
            const timer = setTimeout(() => setIsVisible(true), 800)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleVerify = () => {
        localStorage.setItem("nubepop_age_verified", "true")
        setIsVisible(false)
    }

    const handleDeny = () => {
        window.location.href = "https://www.google.com"
    }

    if (!isMounted) return null

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        onClick={handleVerify} // Clicking outside can verify too for convenience? Or not. Better not.
                        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                    />

                    {/* Modal */}
                    <motion.div
                        variants={scaleIn}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transitionSmooth}
                        className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/40 p-10 shadow-3xl backdrop-blur-3xl ring-1 ring-white/10"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-full bg-primary/10 blur-[100px] pointer-events-none" />

                        <div className="relative flex flex-col items-center text-center">
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-500 shadow-[0_0_50px_rgba(239,68,68,0.3)]"
                            >
                                <ShieldAlert className="h-12 w-12" />
                            </motion.div>

                            <h2 className="mb-3 text-4xl font-black tracking-tight text-white leading-tight">
                                ¿Eres mayor<br />de edad?
                            </h2>
                            
                            <p className="mb-10 text-zinc-400 text-lg">
                                Estás ingresando a un sitio con productos regulados. 
                                Debes tener al menos <strong className="text-white">18 años</strong> para acceder a NubePop.
                            </p>

                            <div className="flex w-full flex-col gap-4 sm:flex-row">
                                <Button 
                                    onClick={handleDeny}
                                    variant="outline" 
                                    className="flex-1 rounded-2xl border-white/10 hover:bg-white/5 h-14 text-zinc-400 font-bold"
                                >
                                    Soy menor
                                </Button>
                                <Button 
                                    onClick={handleVerify}
                                    className="flex-1 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all h-14 font-black text-lg shadow-[0_0_30px_rgba(192,73,235,0.4)] hover:shadow-[0_0_50px_rgba(192,73,235,0.6)]"
                                >
                                    Sí, tengo 18+
                                </Button>
                            </div>

                            <p className="mt-8 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                                Venta exclusiva para mayores de edad
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
