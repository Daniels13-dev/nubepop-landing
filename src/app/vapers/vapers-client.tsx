"use client"

import ProductCatalog, { Product } from "@/components/landing/product-catalog"

const fallbackProducts: Product[] = [
  { id: 1, name: "Lost Mary 5000 Mexican Mango", flavor: "Fruity", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777389/lost_mary_mexican_mango_iagyxb.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764777/IMG_0319_wzi3qw.jpg"], stock: 2 },
  { id: 2, name: "Mtrx 25000 Miami Mint", flavor: "Ice", price: 35000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777452/mtrx_25_miami_mint_u6gbrh.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764774/IMG_0315_cukpoa.jpg"], stock: 3 },
  { id: 3, name: "Mtrx 12000 Grape Lemon", flavor: "Fruity", price: 24000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777413/mtrx_12_grape_lemon_vzbreb.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764767/IMG_0304_al8txf.jpg"], stock: 5 },
  { id: 4, name: "Lost Mary 5000 Blackberry Cherry Lemon", flavor: "Fruity", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777376/lost_mary_blackberry_cherry_lemon_rfhxaj.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764761/IMG_0294_fk7dbw.jpg"], stock: 10 },
  { id: 5, name: "Lost Mary 5000 Forest Mint", flavor: "Ice", price: 15000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777389/lost_mary_forest_mint_hd4ylz.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764776/IMG_0316_d0pexs.jpg"], stock: 10 },
]

export default function VapersPage() {
    return (
        <ProductCatalog 
            title="Vapers"
            titleGradientClass="from-zinc-100 to-zinc-500"
            description="Descubre nuestra selección premium de vapers. Calidad excepcional y sabores inolvidables."
            sheetUrl={process.env.NEXT_PUBLIC_GOOGLE_SHEETS_VAPERS_URL}
            fallbackData={fallbackProducts}
            cartCategory="Vaper"
            filterProperty="flavor"
            defaultFilterLabel="Todos los Sabores"
            filterOptions={[
                { label: "Frutales", value: "fruity", mappedValue: "Fruity" },
                { label: "Fríos (Ice)", value: "ice", mappedValue: "Ice" },
                { label: "Cítricos", value: "citrus", mappedValue: "Citrus" }
            ]}
            themeClasses={{
                text: "text-[#c049eb]",
                border: "border-[#c049eb]/50",
                borderHover: "group-hover:border-[#c049eb]/50",
                bgFocus: "focus:ring-[#c049eb]/50",
                bgHover: "hover:bg-[#c049eb]",
                shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(192,73,235,0.3)]",
                glowBg: "bg-[#c049eb]/20",
                priceGradient: "from-[#c049eb] to-pink-200",
                activePageBg: "bg-[#c049eb] text-white shadow-[0_0_15px_-3px_rgba(192,73,235,0.5)]",
                loaderBorder: "border-[#c049eb]"
            }}
            renderBadge={(product) => (
                <span className="bg-zinc-900/80 backdrop-blur-md text-[#c049eb] text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium">
                    {product.flavor}
                </span>
            )}
        />
    )
}
