"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Compass, Search } from "lucide-react"
export default function NotFound() {
    return (
        <main className="min-h-screen bg-transparent flex flex-col items-center justify-center relative overflow-hidden">
            <div className="relative site-container text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* 404 Indicator */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="inline-flex p-4 rounded-[2rem] bg-zinc-900/50 backdrop-blur-3xl border border-white/5 mb-8 shadow-2xl"
                    >
                        <Compass className="w-16 h-16 text-primary" />
                    </motion.div>

                    <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter">
                        4<span className="text-secondary">0</span>4
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-black text-white/90 mb-6">
                        Página no encontrada
                    </h2>

                    <p className="max-w-md mx-auto text-zinc-400 text-lg mb-12">
                        Parece que te has perdido entre las nubes. La página que buscas ya no está
                        aquí o nunca existió.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-black flex items-center gap-3 transition-transform hover:scale-[1.05] active:scale-95 shadow-[0_0_40px_-5px_rgba(234,31,120,0.3)]"
                        >
                            <Home className="w-5 h-5" />
                            Volver al Inicio
                        </Link>

                        <Link
                            href="/vapers"
                            className="h-14 px-8 rounded-full bg-zinc-900/50 backdrop-blur-md text-white font-black border border-white/10 flex items-center gap-3 transition-all hover:bg-zinc-800"
                        >
                            <Search className="w-5 h-5" />
                            Ver Vapers
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
