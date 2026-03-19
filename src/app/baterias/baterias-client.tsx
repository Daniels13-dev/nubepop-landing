"use client"

import ProductCatalog, { Product } from "@/components/landing/product-catalog"

const fallbackProducts: Product[] = [
  { id: 1, name: "Nexus", type: "510 Thread", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777513/nexus_destilado_nacional_shgdsq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764919/IMG_0342_gmzs45.jpg"], stock: 1 },
  { id: 2, name: "Mini", type: "510 Thread", price: 75000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777512/mini_destilado_nacional_ttqmuy.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764918/IMG_0341_g5mxkj.jpg"], stock: 1 },
  { id: 3, name: "Nova", type: "510 Thread", price: 115000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777511/nova_destilado_nacional_qtih8v.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764916/IMG_0340_lf9ykw.jpg"], stock: 1 },
  { id: 4, name: "All In Vape", type: "510 Thread", price: 70000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/combo_destilado_all_in_vape_nyzxum.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764920/IMG_0344_h3m6z2.jpg"], stock: 1 },
]

export default function BateriasPage() {
    return (
        <ProductCatalog 
            title="Baterías"
            titleGradientClass="from-blue-400 to-cyan-500"
            description="La energía que necesitas. Encuentra la batería perfecta para tus cartuchos, desde sistemas pod hasta mods avanzados."
            sheetUrl={process.env.NEXT_PUBLIC_GOOGLE_SHEETS_BATERIAS_URL}
            fallbackData={fallbackProducts}
            cartCategory="Batería"
            filterProperty="type"
            defaultFilterLabel="Tipos de Batería"
            filterOptions={[
                { label: "Rosca 510", value: "510", mappedValue: "510 Thread" },
                { label: "Voltaje Variable", value: "variable", mappedValue: "Variable Voltage" },
                { label: "Sistema Pod", value: "pod", mappedValue: "Pod System" },
                { label: "Mods Avanzados", value: "mod", mappedValue: "Mod" }
            ]}
            themeClasses={{
                text: "text-[#38bdf8]",
                border: "border-[#38bdf8]/50",
                borderHover: "group-hover:border-[#38bdf8]/50",
                bgFocus: "focus:ring-[#38bdf8]/50",
                bgHover: "hover:bg-[#38bdf8]",
                shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)]",
                glowBg: "bg-[#38bdf8]/20",
                priceGradient: "from-blue-400 to-cyan-300",
                activePageBg: "bg-[#38bdf8] text-white shadow-[0_0_15px_-3px_rgba(56,189,248,0.5)]",
                loaderBorder: "border-[#38bdf8]"
            }}
            renderBadge={(product) => (
                <span className="bg-zinc-900/80 backdrop-blur-md text-[#38bdf8] text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium">
                    {product.type}
                </span>
            )}
        />
    )
}
