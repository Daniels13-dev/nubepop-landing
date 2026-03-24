"use client"

import ProductCatalog from "@/components/landing/product-catalog"
import { CATEGORY_CONFIGS } from "@/config/site-content"

export default function DestiladosPage() {
    const config = CATEGORY_CONFIGS.destilados
    
    return (
        <ProductCatalog 
            title={config.title}
            titleGradientClass="from-purple-400 to-indigo-500"
            description={config.description}
            sheetUrl={config.sheetUrl}
            fallbackData={config.fallbackData}
            cartCategory={config.cartCategory}
            filterProperty={config.filterProperty}
            defaultFilterLabel={config.defaultFilterLabel}
            filterOptions={config.filterOptions}
            themeClasses={config.theme}
            renderBadge={(product) => (
                <span className={`text-xs px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md font-medium ${
                    product.type === "Indica" ? "bg-indigo-900/80 text-indigo-400 border-indigo-500/30" :
                    product.type === "Sativa" ? "bg-amber-900/80 text-amber-400 border-amber-500/30" :
                    `bg-[rgba(192,73,235,0.1)] ${config.theme.text} border-[#c049eb]/30`
                }`}>
                    {product.type}
                </span>
            )}
        />
    )
}
