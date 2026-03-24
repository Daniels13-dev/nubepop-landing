"use client"

import { ReactNode } from "react"
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

export interface ProductCatalogProps {
    title: string;
    titleGradientClass: string;
    description: string;
    sheetUrl: string | undefined;
    fallbackData: Product[];
    themeClasses: ThemeClasses;
    cartCategory: string;
    filterOptions: FilterOption[];
    defaultFilterLabel: string;
    filterProperty: string;
    renderBadge: (product: Product) => ReactNode;
    mapSheetData?: (item: any, index: number) => Product;
}

import { ProductGridSkeleton } from "@/components/catalog/product-skeleton"

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
    mapSheetData
}: ProductCatalogProps) {
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
        totalResults
    } = useCatalog({
        sheetUrl,
        fallbackData,
        title,
        cartCategory,
        filterProperty,
        filterOptions,
        mapSheetData
    })

    return (
        <main className="site-container">
            <Navbar />
            
            <div className="pt-32 pb-8 min-h-[60vh]">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h1 className={`text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r ${titleGradientClass} mb-4 tracking-tighter leading-none uppercase`}>
                            {title}
                        </h1>
                        <p className="text-zinc-400 max-w-xl text-lg">
                            {description}
                        </p>
                    </div>
                    
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

                {isLoading ? (
                    <ProductGridSkeleton count={6} />
                ) : (
                    <>
                        {totalResults === 0 && (
                            <div className="text-center py-20 min-h-[40vh]">
                                <h3 className="text-2xl font-semibold text-zinc-300 mb-2">No se encontraron productos</h3>
                                <p className="text-zinc-500">Intenta probar con otros filtros o revisa la conexión con Google Sheets.</p>
                                <Button 
                                    variant="outline" 
                                    className="mt-6 border-zinc-800 text-zinc-300 hover:bg-zinc-800 cursor-pointer"
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
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
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

                        <CatalogPagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                            themeClasses={themeClasses}
                        />
                    </>
                )}
            </div>

            <Footer />
        </main>
    )
}
