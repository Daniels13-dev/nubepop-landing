"use client"

import ProductCatalog from "@/components/landing/product-catalog"
import { CATEGORY_CONFIGS } from "@/config/site-content"

export default function CombosPage() {
    const config = CATEGORY_CONFIGS.combos

    return (
        <ProductCatalog
            title={config.title}
            titleGradientClass="from-orange-400 to-rose-500"
            description={config.description}
            sheetUrl={config.sheetUrl}
            fallbackData={config.fallbackData}
            cartCategory={config.cartCategory}
            filterProperty={config.filterProperty}
            defaultFilterLabel={config.defaultFilterLabel}
            filterOptions={config.filterOptions}
            themeClasses={config.theme}
            renderBadge={(product) => (
                <span className="bg-orange-500/10 backdrop-blur-md text-orange-400 text-xs px-3 py-1.5 rounded-full border border-orange-500/30 font-medium">
                    {product.category}
                </span>
            )}
        />
    )
}
