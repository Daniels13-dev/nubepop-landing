"use client"

import Link from "next/link"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const headerRef = useRef<HTMLElement | null>(null)
    const pathname = usePathname()


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
                    <Link 
                        href="/" 
                        className={`transition ${pathname === "/" ? "text-[#c049eb] font-bold" : "text-white hover:text-pink-200"}`}
                    >
                        Inicio
                    </Link>

                    <Link 
                        href="/vapers" 
                        className={`transition ${pathname === "/vapers" ? "text-[#c049eb] font-bold" : "text-white hover:text-pink-200"}`}
                    >
                        Vapers
                    </Link>

                    <Link 
                        href="/destilados" 
                        className={`transition ${pathname === "/destilados" ? "text-[#c049eb] font-bold" : "text-white hover:text-pink-200"}`}
                    >
                        Destilados
                    </Link>

                    <Link 
                        href="/baterias" 
                        className={`transition ${pathname === "/baterias" ? "text-[#c049eb] font-bold" : "text-white hover:text-pink-200"}`}
                    >
                        Baterías
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/tienda"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-[#EA1F78] to-[#F8499D] text-white font-semibold shadow-lg hover:scale-105 transition"
                    >
                        Comprar ahora
                    </Link>
                </div>
            </div>
        </header>
    )
}
