"use client"

import { ReactNode, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Navbar from "./navbar"
import { Footer } from "./footer"
import { Button } from "@/components/ui/button"
import { Product, FilterOption, ThemeClasses } from "@/types"
import { useCatalog } from "@/hooks/useCatalog"
import { ProductCard } from "@/components/catalog/product-card"
import { CatalogFilters } from "@/components/catalog/catalog-filters"
import { CatalogPagination } from "@/components/catalog/catalog-pagination"
import { motion } from "framer-motion"
import { containerVariants, fadeInUp } from "@/lib/animations"
import { ProductGridSkeleton } from "@/components/catalog/product-skeleton"

export interface ProductCatalogProps {
    title: string
    titleGradientClass: string
    description: string
    sheetUrl: string | undefined
    fallbackData: Product[]
    themeClasses: ThemeClasses
    cartCategory: string
    filterOptions: FilterOption[]
    defaultFilterLabel: string
    filterProperty: string
    renderBadge: (product: Product) => ReactNode
    mapSheetData?: (item: any, index: number) => Product
}

export default function ProductCatalog({
    title,
    titleGradientClass,
    description,
    sheetUrl,
    fallbackData,
    themeClasses,
    cartCategory,
    filterOptions,
    defaultFilterLabel,
    filterProperty,
    renderBadge,
    mapSheetData,
}: ProductCatalogProps) {
    const [pageSize, setPageSize] = useState(9)

    useEffect(() => {
        const checkTablet = () => {
            const width = window.innerWidth
            // md breakpoint is 768, lg is 1024
            if (width >= 768 && width < 1024) {
                setPageSize(10)
            } else {
                setPageSize(9)
            }
        }

        checkTablet()
        window.addEventListener("resize", checkTablet)
        return () => window.removeEventListener("resize", checkTablet)
    }, [])

    const {
        products,
        isLoading,
        filterValue,
        setFilterValue,
        sortOrder,
        setSortOrder,
        currentPage,
        setCurrentPage,
        totalPages,
        totalResults,
    } = useCatalog({
        sheetUrl,
        fallbackData,
        title,
        cartCategory,
        filterProperty,
        filterOptions,
        mapSheetData,
        productsPerPage: pageSize,
    })

    return (
        <main className="relative min-h-screen bg-black overflow-x-hidden">
            <Navbar />

            {/* Immersive Category Header (Optimized for Mobile) */}
            <div className="relative pt-24 lg:pt-36 pb-12 overflow-hidden">
                {/* Visual Glow Effect behind Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={cn(
                        "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full blur-[120px] lg:blur-[180px] pointer-events-none -z-10 opacity-30",
                        themeClasses.glowBg
                    )}
                />

                <div className="site-container relative z-10">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-12 items-center lg:items-end">
                        <div className="lg:col-span-12 xl:col-span-7 text-center lg:text-left mb-8 lg:mb-0">
                            <h1
                                className={cn(
                                    "text-6xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] lg:leading-[0.8] uppercase mb-4 bg-clip-text text-transparent bg-gradient-to-r",
                                    titleGradientClass
                                )}
                            >
                                {title}
                            </h1>
                            <p className="text-zinc-500 lg:text-zinc-400 max-w-lg lg:max-w-xl text-sm lg:text-lg lg:mx-0 mx-auto px-4 lg:px-0">
                                {description}
                            </p>
                        </div>

                        {/* Filters Container */}
                        <div className="lg:col-span-12 xl:col-span-5 w-full flex flex-col items-center lg:items-end gap-6 mt-8 lg:mt-0">
                            <CatalogFilters
                                filterValue={filterValue}
                                setFilterValue={setFilterValue}
                                sortOrder={sortOrder}
                                setSortOrder={setSortOrder}
                                filterOptions={filterOptions}
                                defaultFilterLabel={defaultFilterLabel}
                                themeClasses={themeClasses}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="site-container pb-24 lg:pb-32">
                {isLoading ? (
                    <ProductGridSkeleton count={8} />
                ) : (
                    <>
                        {totalResults === 0 && (
                            <div className="text-center py-20 min-h-[40vh]">
                                <h3 className="text-2xl font-semibold text-zinc-300 mb-2 font-black uppercase tracking-tighter">
                                    Sin Resultados
                                </h3>
                                <p className="text-zinc-500 text-sm max-w-xs mx-auto mb-8">
                                    No encontramos vapers o destilados con esos filtros. Prueba con
                                    otro estilo.
                                </p>
                                <Button
                                    variant="outline"
                                    className="rounded-full border-zinc-800 text-zinc-300 hover:bg-zinc-800 font-black uppercase tracking-widest text-xs px-8 h-12"
                                    onClick={() => setFilterValue("all")}
                                >
                                    Limpiar filtros
                                </Button>
                            </div>
                        )}

                        <motion.div
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                        >
                            {products.map((product) => (
                                <motion.div key={product.id} variants={fadeInUp}>
                                    <ProductCard
                                        product={product}
                                        themeClasses={themeClasses}
                                        renderBadge={renderBadge}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="flex justify-center mt-12 mb-20 lg:mb-0">
                            <CatalogPagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                setCurrentPage={setCurrentPage}
                                themeClasses={themeClasses}
                            />
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </main>
    )
}
