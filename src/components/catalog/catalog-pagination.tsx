"use client"

import { Button } from "@/components/ui/button"
import { ThemeClasses } from "@/types"

interface CatalogPaginationProps {
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number) => void
    themeClasses: ThemeClasses
}

export function CatalogPagination({
    currentPage,
    totalPages,
    setCurrentPage,
    themeClasses,
}: CatalogPaginationProps) {
    if (totalPages <= 1) return null

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 mb-8">
            <Button
                variant="outline"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className={`border-zinc-800 transition-all ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "text-zinc-300 hover:bg-zinc-800"}`}
            >
                Anterior
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`w-10 h-10 flex items-center justify-center rounded-xl font-medium transition-all ${
                            currentPage === i + 1
                                ? themeClasses.activePageBg
                                : "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-white/5"
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            <Button
                variant="outline"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`border-zinc-800 transition-all ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "text-zinc-300 hover:bg-zinc-800"}`}
            >
                Siguiente
            </Button>
        </div>
    )
}
