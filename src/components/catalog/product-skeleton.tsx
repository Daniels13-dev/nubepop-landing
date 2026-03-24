"use client"

import { motion } from "framer-motion"

export function ProductSkeleton() {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-3xl bg-zinc-900/40 border border-white/5 animate-pulse">
            {/* Image Placeholder */}
            <div className="aspect-square w-full rounded-2xl bg-zinc-800/60" />
            
            <div className="space-y-3 px-2 pb-2">
                {/* Header: Title + Button mockup */}
                <div className="flex justify-between items-center gap-4">
                    <div className="h-6 bg-zinc-800 rounded-md w-2/3" />
                    <div className="h-10 w-10 bg-zinc-800 rounded-xl flex-shrink-0" />
                </div>
                
                {/* Info mockups */}
                <div className="h-4 bg-zinc-800/50 rounded-md w-1/3" />
                
                {/* Footer mockup */}
                <div className="pt-2 flex justify-between items-center">
                    <div className="h-6 bg-zinc-800/80 rounded-md w-1/4" />
                    <div className="h-4 bg-zinc-800/30 rounded-md w-1/5" />
                </div>
            </div>
        </div>
    )
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(count)].map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
        </div>
    )
}
