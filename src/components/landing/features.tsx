"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight, Star, TrendingUp } from "lucide-react"
import { popularProducts as products, THEME_PRESETS } from "@/config/site-content"
import { containerVariants, fadeInUp } from "@/lib/animations"
import { Product } from "@/types"

function FeatureCard({ product, className = "" }: { product: Product; className?: string }) {
    const theme = THEME_PRESETS.PINK

    return (
        <motion.div
            variants={fadeInUp}
            className={cn(
                "group relative rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur-xl transition-all duration-700 hover:bg-zinc-900/60 hover:border-white/10",
                className
            )}
        >
            {/* Background Image / Product Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={product.images[0] || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end gap-2">
                <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase font-black tracking-widest text-[#c049eb] border border-white/5 font-mono">
                        {product.isPrimary ? "Colección" : "Tendencia"}
                    </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white leading-none tracking-tighter uppercase mb-2">
                    {product.name}
                </h3>

                <p className="text-zinc-400 text-xs md:text-sm line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-mono font-black text-white tracking-tighter">
                        Desde ${String(product.price).replace(/\d(?=(\d{3})+$)/g, "$&.")}
                    </span>
                    <Link
                        href={
                            product.isPrimary
                                ? `/${String(product.id).split("-")[1] || product.id}`
                                : "/vapers"
                        }
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-xl"
                    >
                        <ChevronRight className="w-5 h-5 stroke-[3]" />
                    </Link>
                </div>
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    )
}

export function Features() {
    const categories = products.filter((p) => p.isPrimary)
    const featured = products.filter((p) => !p.isPrimary)

    return (
        <section id="features" className="py-12 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 -right-20 w-[40rem] h-[40rem] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[40rem] h-[40rem] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="site-container relative z-10">
                {/* --- SECCIÓN 1: COLECCIONES (BENTO 1) --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-4 animate-in fade-in slide-in-from-left-4 duration-700">
                            <span className="h-px w-8 bg-secondary" />
                            <span className="text-secondary uppercase text-[10px] font-black tracking-[0.2em] font-mono">
                                Nuestras Categorías
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] uppercase tracking-tighter">
                            Explora las <br />{" "}
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "1px white" }}
                            >
                                Colecciones
                            </span>
                        </h2>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[250px] gap-6 mb-12"
                >
                    {/* Item 1: Vapers (Mega Highlight) */}
                    {categories[0] && (
                        <FeatureCard
                            product={categories[0]}
                            className="md:col-span-2 lg:col-span-4 lg:row-span-2"
                        />
                    )}

                    {/* Item 2: Destilados (Tall) */}
                    {categories[1] && (
                        <FeatureCard
                            product={categories[1]}
                            className="md:col-span-2 lg:col-span-2 lg:row-span-1"
                        />
                    )}

                    {/* Item 3: Baterías (Wide) */}
                    {categories[2] && (
                        <FeatureCard
                            product={categories[2]}
                            className="md:col-span-2 lg:col-span-2 lg:row-span-1"
                        />
                    )}
                </motion.div>

                {/* --- SECCIÓN 2: TENDENCIAS (BENTO 2) --- */}
                <div className="mb-12 border-t border-white/5 pt-24">
                    <div className="flex items-center gap-4 mb-4">
                        <TrendingUp className="w-8 h-8 text-secondary" />
                        <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                            Tendencias Actuales
                        </h3>
                    </div>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest max-w-md">
                        Los productos más deseados de esta semana seleccionados para ti.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6"
                >
                    {/* Featured Tendencia - Item 1 (Big) */}
                    {featured[0] && (
                        <FeatureCard
                            product={featured[0]}
                            className="sm:col-span-2 sm:row-span-2"
                        />
                    )}

                    {/* Item 2 */}
                    {featured[1] && (
                        <FeatureCard
                            product={featured[1]}
                            className="sm:col-span-1 sm:row-span-1"
                        />
                    )}

                    {/* Item 3 */}
                    {featured[2] && (
                        <FeatureCard
                            product={featured[2]}
                            className="sm:col-span-1 sm:row-span-1"
                        />
                    )}

                    {/* Item 4 - Wide Banner at bottom of trending */}
                    {featured[3] && (
                        <FeatureCard
                            product={featured[3]}
                            className="sm:col-span-2 sm:row-span-1"
                        />
                    )}
                </motion.div>

                {/* CTA Final */}
                <div className="mt-24 flex flex-col items-center">
                    <Link
                        href="/vapers"
                        className="group flex items-center gap-4 px-12 py-6 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 text-white font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_rgba(137,37,211,0.2)] hover:shadow-[0_30px_60px_rgba(234,31,120,0.3)] backdrop-blur-md border border-white/10"
                    >
                        Ver Catálogo Completo
                        <ChevronRight className="w-5 h-5 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
