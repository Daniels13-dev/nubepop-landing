"use client"

import ProductCatalog, { Product } from "@/components/landing/product-catalog"

const fallbackProducts: Product[] = [
  { id: 1, name: "Nexus + Destilado Nacional", category: "Kits Iniciales", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777513/nexus_destilado_nacional_shgdsq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764919/IMG_0342_gmzs45.jpg"], stock: 1 },
  { id: 2, name: "Mini + Destilado Nacional", category: "Kits Iniciales", price: 75000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777512/mini_destilado_nacional_ttqmuy.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764918/IMG_0341_g5mxkj.jpg"], stock: 1 },
  { id: 3, name: "Nova + Destilado Nacional", category: "Kits Iniciales", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777511/nova_destilado_nacional_qtih8v.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764916/IMG_0340_lf9ykw.jpg"], stock: 1 },
  { id: 4, name: "All In Vape + Destilado Nacional", category: "Kits Iniciales", price: 70000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/combo_destilado_all_in_vape_nyzxum.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764920/IMG_0344_h3m6z2.jpg"], stock: 1 },
]

export default function CombosPage() {
    return (
        <ProductCatalog 
            title="Combos & Promociones"
            titleGradientClass="from-orange-400 to-rose-500"
            description="Combina y ahorra. Descubre nuestros paquetes especiales diseñados para ofrecerte la mejor experiencia al mejor precio."
            sheetUrl={process.env.NEXT_PUBLIC_GOOGLE_SHEETS_COMBOS_URL}
            fallbackData={fallbackProducts}
            cartCategory="Combo"
            filterProperty="category"
            defaultFilterLabel="Ver Todas"
            filterOptions={[
                { label: "Kits Iniciales", value: "starter", mappedValue: "Kits Iniciales" },
                { label: "Vaper + Destilado", value: "vape-extract", mappedValue: "Vaper + Destilado" },
                { label: "Destilado + Batería", value: "extract-battery", mappedValue: "Destilado + Batería" },
                { label: "Packs Múltiples", value: "multi-pack", mappedValue: "Packs Múltiples" }
            ]}
            themeClasses={{
                text: "text-[#EA1F78]",
                border: "border-[#EA1F78]/50",
                borderHover: "group-hover:border-[#EA1F78]/50",
                bgFocus: "focus:ring-[#EA1F78]/50",
                bgHover: "hover:bg-[#EA1F78]",
                shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(234,31,120,0.3)]",
                glowBg: "bg-[#EA1F78]/20",
                priceGradient: "from-orange-400 to-rose-400",
                activePageBg: "bg-[#EA1F78] text-white shadow-[0_0_15px_-3px_rgba(234,31,120,0.5)]",
                loaderBorder: "border-[#EA1F78]"
            }}
            renderBadge={(product) => (
                <span className="bg-orange-500/10 backdrop-blur-md text-orange-400 text-xs px-3 py-1.5 rounded-full border border-orange-500/30 font-medium">
                    {product.category}
                </span>
            )}
        />
    )
}
