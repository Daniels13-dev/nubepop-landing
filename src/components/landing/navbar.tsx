"use client"

import Link from "next/link"
import Image from "next/image"
import { useLayoutEffect, useRef, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useCart } from "@/context/CartContext"

import { navLinks } from "@/config/site-content"

export default function Navbar() {
    const headerRef = useRef<HTMLElement | null>(null)
    const pathname = usePathname()
    const { totalItems } = useCart()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useLayoutEffect(() => {
        const el = headerRef.current
        if (!el) return

        const setHeight = () => {
            const h = el.offsetHeight
            document.documentElement.style.setProperty("--navbar-height", `${h}px`)
        }

        setHeight()

        if (typeof ResizeObserver !== "undefined") {
            const ro = new ResizeObserver(setHeight)
            ro.observe(el)
            return () => ro.disconnect()
        }

        window.addEventListener("resize", setHeight)
        return () => window.removeEventListener("resize", setHeight)
    }, [])

    return (
        <header ref={headerRef} className="fixed top-0 z-50 left-1/2 -translate-x-1/2 w-full">
            <div className="w-full px-6 py-1 flex items-center justify-between bg-black/20 rounded-b-3xl shadow-sm backdrop-blur-lg border border-white/5">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo-negro.png"
                        alt="NubePop"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                </div>

                {/* Links */}
                <nav className="hidden md:flex items-center gap-10 font-medium">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path}
                            href={link.path} 
                            className={`transition ${pathname === link.path ? "text-[#c049eb] font-bold" : "text-white hover:text-pink-200"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button & Cart */}
                <div className="flex items-center gap-4">
                    <Link href="/carrito" className="relative p-2 text-zinc-300 hover:text-[#EA1F78] transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {mounted && totalItems > 0 && (
                            <span className="absolute top-0 right-0 bg-[#EA1F78] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                    <Link
                        href="/vapers"
                        className="hidden sm:flex px-6 py-2 rounded-full bg-gradient-to-r from-[#EA1F78] to-[#F8499D] text-white font-semibold shadow-lg hover:scale-105 transition"
                    >
                        Comprar ahora
                    </Link>
                </div>
            </div>
        </header>
    )
}
