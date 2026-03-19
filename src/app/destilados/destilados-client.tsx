"use client"

import ProductCatalog, { Product } from "@/components/landing/product-catalog"

const fallbackProducts: Product[] = [
  { id: 1, name: "Destilado Nacional", type: "Hibrida", price: 40000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777494/destilado_nacional_fh1npx.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777503/destilados_nacionales_nixlbr.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764878/IMG_0339_or7mxu.jpg", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764878/IMG_0338_mffpqs.jpg"], stock: 6 },
  { id: 2, name: "KRT Berry Frosted", type: "Indica", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777498/krt_berry_froasted_indica_o7kizq.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764875/IMG_0333_ssexzf.jpg"], stock: 2 },
  { id: 3, name: "Lemon Skunk", type: "Hibrida", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777508/lemon_skunk_hibrida_k6xwjs.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764876/IMG_0334_md0gz7.jpg"], stock: 1 },
  { id: 4, name: "Mad Labs", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777503/mad_labs_sativa_uexu4r.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764877/IMG_0336_eyr1wq.jpg"], stock: 1 },
  { id: 5, name: "Muha Meds Gelato", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777506/muha_meds_gelato_n9h10f.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764853/IMG_0331_gdn9af.jpg"], stock: 1 },
  { id: 6, name: "Rove Haze", type: "Sativa", price: 60000, images: ["https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773777501/rove_haze_sativa_nfejwj.png", "https://res.cloudinary.com/dsbm1aj9x/image/upload/v1773764877/IMG_0337_zdkxof.jpg"], stock: 1 },
]

export default function DestiladosPage() {
    return (
        <ProductCatalog 
            title="Destilados"
            titleGradientClass="from-purple-400 to-indigo-500"
            description="Explora nuestra exclusiva selección de destilados de alta pureza. Sativas energizantes, Indicas relajantes y los mejores Híbridos."
            sheetUrl={process.env.NEXT_PUBLIC_GOOGLE_SHEETS_DESTILADOS_URL}
            fallbackData={fallbackProducts}
            cartCategory="Destilado"
            filterProperty="type"
            defaultFilterLabel="Todas las Cepas"
            filterOptions={[
                { label: "Indica", value: "indica", mappedValue: "Indica" },
                { label: "Sativa", value: "sativa", mappedValue: "Sativa" },
                { label: "Híbrida", value: "hybrid", mappedValue: "Hibrida" }
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
                <span className={`text-xs px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md font-medium ${
                    product.type === "Indica" ? "bg-indigo-900/80 text-indigo-400 border-indigo-500/30" :
                    product.type === "Sativa" ? "bg-amber-900/80 text-amber-400 border-amber-500/30" :
                    "bg-[rgba(192,73,235,0.1)] text-[#c049eb] border-[#c049eb]/30"
                }`}>
                    {product.type}
                </span>
            )}
        />
    )
}
