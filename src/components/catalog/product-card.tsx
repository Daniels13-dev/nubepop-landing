"use client"

import { Product, ThemeClasses } from "@/types"
import { ProductCarousel } from "@/components/ui/product-carousel"
import { ReactNode } from "react"
import { CartActions } from "./cart-actions"

interface ProductCardProps {
    product: Product
    themeClasses: ThemeClasses
    renderBadge: (product: Product) => ReactNode
}

export function ProductCard({ product, themeClasses, renderBadge }: ProductCardProps) {
    return (
        <div
            className={`group relative flex flex-col bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 transition-all duration-500 ${product.stock === 0 ? "opacity-80" : `${themeClasses.borderHover} ${themeClasses.shadowHover}`}`}
        >
            {/* Glow background behind image */}
            {product.stock !== 0 && (
                <div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 ${themeClasses.glowBg} blur-[60px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
            )}

            <div className="relative aspect-[4/3] overflow-hidden p-6 pb-0 flex items-center justify-center">
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                    {renderBadge(product)}
                    {product.stock === 0 && (
                        <span className="bg-red-500/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-red-400/50 font-bold shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                            AGOTADO
                        </span>
                    )}
                    {product.stock !== undefined && product.stock > 0 && product.stock <= 5 && (
                        <span className="bg-orange-500/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-orange-400/50 font-bold shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-pulse">
                            ¡Solo {product.stock} disponibles!
                        </span>
                    )}
                </div>
                <div
                    className={`w-full h-full transition-all duration-500 ${product.stock === 0 ? "grayscale opacity-60" : ""}`}
                >
                    <ProductCarousel images={product.images} name={product.name} />
                </div>
            </div>

            <div className="relative z-10 p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4 mb-4 font-sans">
                    <div className="min-h-[3.5rem] flex items-start flex-grow">
                        <h3
                            className={`text-[1.35rem] font-black tracking-tight line-clamp-2 leading-[1.1] ${product.stock === 0 ? "text-zinc-400" : "text-zinc-100"}`}
                        >
                            {product.name}
                        </h3>
                    </div>
                    <div className="flex flex-col items-end">
                        <span
                            className={`text-xl font-mono font-bold tracking-tighter ${product.stock === 0 ? "text-zinc-500" : `bg-clip-text text-transparent bg-gradient-to-r ${themeClasses.priceGradient}`}`}
                        >
                            ${String(product.price).replace(/\d(?=(\d{3})+$)/g, "$&.")}
                        </span>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mb-6 mt-1" />

                <div className="mt-auto pt-2">
                    <CartActions product={product} themeClasses={themeClasses} />
                </div>
            </div>
        </div>
    )
}
