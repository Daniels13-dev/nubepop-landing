"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useLayoutEffect, useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/CartContext"
import { navLinks } from "@/config/site-content"
import { ShoppingCart, Home, Wind, Zap, Battery } from "lucide-react"

export default function Navbar() {
    const headerRef = useRef<HTMLElement | null>(null)
    const pathname = usePathname()
    const { totalItems } = useCart()
    const [mounted, setMounted] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useLayoutEffect(() => {
        const el = headerRef.current
        if (!el) return
        const setHeight = () => {
            const h = el.offsetHeight
            document.documentElement.style.setProperty("--navbar-height", `${h + 24}px`)
        }
        setHeight()
        const ro = new ResizeObserver(setHeight)
        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    const mobileNavLinks = [
        { label: "Home", path: "/", icon: Home },
        { label: "Vapers", path: "/vapers", icon: Wind },
        { label: "Destilados", path: "/destilados", icon: Zap },
        { label: "Baterías", path: "/baterias", icon: Battery },
    ]

    return (
        <>
            {/* 💻 VERSIÓN ESCRITORIO (LG+) */}
            <header 
                ref={headerRef} 
                className={cn(
                    "hidden lg:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1200px] transition-all duration-500",
                    scrolled ? "top-4 scale-95 opacity-90" : "top-6 opacity-100"
                )}
            >
                <div className="relative w-full group px-4">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-full blur-[2px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="relative flex items-center justify-between px-10 py-3 bg-zinc-900/60 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl">
                        <Link href="/" className="group/logo">
                            <div className="relative w-32 h-10 rounded-lg overflow-hidden flex items-center justify-start transition-transform duration-500 group-hover/logo:scale-105">
                                <Image src="/logo-negro.png" alt="NubePop" width={65} height={40} className="object-contain" />
                            </div>
                        </Link>
                        <nav className="flex items-center gap-2 p-1 bg-white/[0.03] rounded-full border border-white/5">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.path
                                return (
                                    <Link key={link.path} href={link.path} className={cn("px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 relative", isActive ? "text-white" : "text-zinc-500 hover:text-white")}>
                                        {isActive && <motion.div layoutId="nav-pill" className="absolute inset-0 bg-primary/20 border border-primary/20 rounded-full -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />}
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </nav>
                        <Link href="/carrito" className="relative group/cart">
                            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover/cart:bg-secondary/10 transition-all duration-300">
                                <ShoppingCart className="w-5 h-5 text-white group-hover/cart:text-secondary transition-colors" />
                            </div>
                            {mounted && totalItems > 0 && <span className="absolute -top-1 -right-1 bg-secondary text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center border border-black/20">{totalItems}</span>}
                        </Link>
                    </div>
                </div>
            </header>

            {/* 📱 VERSIÓN MÓVIL (ABAJO DE LG) */}
            <div className="lg:hidden">
                {/* Dock Inferior Móvil - Única Navegación */}
                <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-[450px]">
                    <div className="flex items-center justify-around bg-zinc-950/80 backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-white/5">
                        {[...mobileNavLinks, { label: "Carrito", path: "/carrito", icon: ShoppingCart }].map((item) => {
                            const isActive = pathname === item.path
                            const Icon = item.icon
                            const isCart = item.label === "Carrito"
                            
                            return (
                                <Link 
                                    key={item.path} 
                                    href={item.path}
                                    className="relative flex flex-col items-center justify-center w-14 h-14 transition-all active:scale-95"
                                >
                                    {isActive && (
                                        <motion.div 
                                            layoutId="mobile-nav-active"
                                            className="absolute inset-0 bg-primary/10 blur-xl rounded-full"
                                        />
                                    )}
                                    <div className="relative">
                                        <Icon className={cn(
                                            "w-6 h-6 transition-colors duration-300",
                                            isActive ? "text-primary" : "text-zinc-500"
                                        )} />
                                        {isCart && mounted && totalItems > 0 && (
                                            <span className="absolute -top-2 -right-2 bg-secondary text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center border border-black/20">
                                                {totalItems}
                                            </span>
                                        )}
                                    </div>
                                    {isActive && (
                                        <motion.div 
                                            layoutId="mobile-nav-dot"
                                            className="absolute -bottom-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </>
    )
}
