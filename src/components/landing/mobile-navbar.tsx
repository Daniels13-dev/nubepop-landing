"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingCart } from "lucide-react"
import { navLinks } from "@/config/site-content"
import { fadeInUp, containerVariants } from "@/lib/animations"

export function MobileNavbar({ totalItems }: { totalItems: number }) {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <div className="md:hidden flex items-center gap-4">
            <Link href="/carrito" className="relative p-2 text-zinc-300">
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                    <span className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </Link>
            
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-white hover:text-secondary transition-colors z-[60]"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[50]"
                        />

                        {/* Menu Panel */}
                        <motion.nav 
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed inset-0 flex flex-col items-center justify-center gap-8 z-[55] p-6"
                        >
                            {navLinks.map((link) => (
                                <motion.div key={link.path} variants={fadeInUp}>
                                    <Link 
                                        href={link.path}
                                        className={`text-3xl font-bold transition-all ${
                                            pathname === link.path 
                                            ? "text-primary scale-110" 
                                            : "text-white hover:text-secondary"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div variants={fadeInUp} className="mt-8">
                                <Link
                                    href="/vapers"
                                    className="px-10 py-4 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-bold text-xl shadow-xl active:scale-95 transition"
                                >
                                    Comprar ahora
                                </Link>
                            </motion.div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
