"use client"

import ProductCatalog from "@/components/landing/product-catalog"
import { CATEGORY_CONFIGS } from "@/config/site-content"

export default function VapersPage() {
    const config = CATEGORY_CONFIGS.vapers

    return (
        <ProductCatalog
            title={config.title}
            titleGradientClass="from-zinc-100 to-zinc-500"
            description={config.description}
            sheetUrl={config.sheetUrl}
            fallbackData={config.fallbackData}
            cartCategory={config.cartCategory}
            filterProperty={config.filterProperty}
            defaultFilterLabel={config.defaultFilterLabel}
            filterOptions={config.filterOptions}
            themeClasses={config.theme}
            renderBadge={(product) => (
                <span
                    className={`bg-zinc-900/80 backdrop-blur-md ${config.theme.text} text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium`}
                >
                    {product.flavor}
                </span>
            )}
        />
    )
}
