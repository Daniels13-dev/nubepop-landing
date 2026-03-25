import {
    NavLink,
    Testimonial,
    FAQItem,
    HeroSlide,
    ThemeClasses,
    Product,
    FilterOption,
} from "@/types"
import {
    VAPERS_FALLBACK,
    DESTILADOS_FALLBACK,
    BATERIAS_FALLBACK,
    COMBOS_FALLBACK,
} from "./products-fallback"

// 1. Interfaces
export interface CategoryConfig {
    id: string
    slug: string
    title: string
    description: string
    sheetUrl: string | undefined
    fallbackData: Product[]
    cartCategory: string
    filterProperty: string
    defaultFilterLabel: string
    filterOptions: FilterOption[]
    theme: ThemeClasses
    seo: {
        title: string
        description: string
    }
}

// 2. Global SEO & Constants
export const WHATSAPP_NUMBER = "573126928258"

export const BRAND_COLORS = {
    primary: "#8925d3", // Púrpura NubePop
    secondary: "#EA1F78", // Rosa NubePop
    accent: "#c049eb", // Acento
    dark: "#0c001a", // Fondo profundo
}

export const SEO_CONFIG = {
    baseUrl: "https://nubepop.com",
    siteName: "NubePop",
    defaultTitle: "NubePop | Vapers y Destilados Premium Colombia",
    defaultDescription:
        "La mejor selección de vapers desechables, destilados de alta pureza y baterías en Colombia. Calidad garantizada y envío rápido.",
}

// 3. Theme Presets
export const THEME_PRESETS: Record<string, ThemeClasses> = {
    PURPLE: {
        text: "text-[#c049eb]",
        border: "border-[#c049eb]/50",
        borderHover: "group-hover:border-[#c049eb]/50",
        bgFocus: "focus:ring-[#c049eb]/50",
        bgHover: "hover:bg-[#c049eb]",
        shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(192,73,235,0.3)]",
        glowBg: "bg-[#c049eb]/20",
        priceGradient: "from-[#c049eb] to-pink-200",
        activePageBg: "bg-[#c049eb] text-white shadow-[0_0_15px_-3px_rgba(192,73,235,0.5)]",
        loaderBorder: "border-[#c049eb]",
    },
    BLUE: {
        text: "text-[#38bdf8]",
        border: "border-[#38bdf8]/50",
        borderHover: "group-hover:border-[#38bdf8]/50",
        bgFocus: "focus:ring-[#38bdf8]/50",
        bgHover: "hover:bg-[#38bdf8]",
        shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)]",
        glowBg: "bg-[#38bdf8]/20",
        priceGradient: "from-blue-400 to-cyan-300",
        activePageBg: "bg-[#38bdf8] text-white shadow-[0_0_15px_-3px_rgba(56,189,248,0.5)]",
        loaderBorder: "border-[#38bdf8]",
    },
    GREEN: {
        text: "text-emerald-400",
        border: "border-emerald-400/50",
        borderHover: "group-hover:border-emerald-400/50",
        bgFocus: "focus:ring-emerald-400/50",
        bgHover: "hover:bg-emerald-400",
        shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(52,211,153,0.3)]",
        glowBg: "bg-emerald-400/20",
        priceGradient: "from-emerald-400 to-cyan-300",
        activePageBg: "bg-emerald-400 text-white shadow-[0_0_15px_-3px_rgba(52,211,153,0.5)]",
        loaderBorder: "border-emerald-400",
    },
    PINK: {
        text: "text-secondary",
        border: "border-secondary/50",
        borderHover: "group-hover:border-secondary/50",
        bgFocus: "focus:ring-secondary/50",
        bgHover: "hover:bg-secondary",
        shadowHover: "group-hover:shadow-[0_0_20px_-5px_rgba(234,31,120,0.3)]",
        glowBg: "bg-secondary/20",
        priceGradient: "from-secondary to-accent",
        activePageBg: "bg-secondary text-white shadow-[0_0_15px_-3px_rgba(234,31,120,0.5)]",
        loaderBorder: "border-secondary",
    },
}

// 4. Category Configs
export const CATEGORY_CONFIGS: Record<string, CategoryConfig> = {
    vapers: {
        id: "vapers",
        slug: "vapers",
        title: "Vapers",
        description:
            "Descubre nuestra selección premium de vapers. Calidad excepcional y sabores inolvidables.",
        sheetUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_VAPERS_URL,
        fallbackData: VAPERS_FALLBACK,
        cartCategory: "Vaper",
        filterProperty: "flavor",
        defaultFilterLabel: "Todos los Sabores",
        filterOptions: [
            { label: "Frutales", value: "fruity", mappedValue: "Fruity" },
            { label: "Fríos (Ice)", value: "ice", mappedValue: "Ice" },
            { label: "Cítricos", value: "citrus", mappedValue: "Citrus" },
        ],
        theme: THEME_PRESETS.PURPLE,
        seo: {
            title: "Vapers Desechables Premium | NubePop Colombia",
            description:
                "Compra vapers desechables de larga duración (5000+ puffs) en Colombia. Las mejores marcas con sabores intensos y envío rápido.",
        },
    },
    destilados: {
        id: "destilados",
        slug: "destilados",
        title: "Destilados",
        description:
            "Explora nuestra exclusiva selección de destilados de alta pureza. Sativas energizantes, Indicas relajantes y los mejores Híbridos.",
        sheetUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_DESTILADOS_URL,
        fallbackData: DESTILADOS_FALLBACK,
        cartCategory: "Destilado",
        filterProperty: "type",
        defaultFilterLabel: "Todas las Cepas",
        filterOptions: [
            { label: "Indica", value: "indica", mappedValue: "Indica" },
            { label: "Sativa", value: "sativa", mappedValue: "Sativa" },
            { label: "Híbrida", value: "hybrid", mappedValue: "Hibrida" },
        ],
        theme: THEME_PRESETS.PURPLE,
        seo: {
            title: "Destilados de Alta Pureza | NubePop Colombia",
            description:
                "Encuentra destilados de la mejor calidad. Sativa, Indica e Híbrida para la mejor experiencia. Envío discreto a todo el país.",
        },
    },
    baterias: {
        id: "baterias",
        slug: "baterias",
        title: "Baterías",
        description:
            "La energía que necesitas. Encuentra la batería perfecta para tus cartuchos, desde sistemas pod hasta mods avanzados.",
        sheetUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_BATERIAS_URL,
        fallbackData: BATERIAS_FALLBACK,
        cartCategory: "Batería",
        filterProperty: "type",
        defaultFilterLabel: "Tipos de Batería",
        filterOptions: [
            { label: "Rosca 510", value: "510", mappedValue: "510 Thread" },
            { label: "Voltaje Variable", value: "variable", mappedValue: "Variable Voltage" },
            { label: "Sistema Pod", value: "pod", mappedValue: "Pod System" },
            { label: "Mods Avanzados", value: "mod", mappedValue: "Mod" },
        ],
        theme: THEME_PRESETS.BLUE,
        seo: {
            title: "Baterías 510 para Vapes | NubePop Colombia",
            description:
                "Baterías de alta calidad para tus destilados. Voltaje variable y compatibilidad universal 510. Envío inmediato.",
        },
    },
    combos: {
        id: "combos",
        slug: "combos",
        title: "Combos & Promociones",
        description:
            "Combina y ahorra. Descubre nuestros paquetes especiales diseñados para ofrecerte la mejor experiencia al mejor precio.",
        sheetUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_COMBOS_URL,
        fallbackData: COMBOS_FALLBACK,
        cartCategory: "Combo",
        filterProperty: "category",
        defaultFilterLabel: "Ver Todas",
        filterOptions: [
            { label: "Kits Iniciales", value: "starter", mappedValue: "Kits Iniciales" },
            { label: "Vaper + Destilado", value: "vape-extract", mappedValue: "Vaper + Destilado" },
            {
                label: "Destilado + Batería",
                value: "extract-battery",
                mappedValue: "Destilado + Batería",
            },
            { label: "Packs Múltiples", value: "multi-pack", mappedValue: "Packs Múltiples" },
        ],
        theme: THEME_PRESETS.PINK,
        seo: {
            title: "Combos y Ahorro en Vapes | NubePop Colombia",
            description:
                "Lleva más por menos con los combos NubePop. Incluye envío rápido y los mejores kits de Colombia.",
        },
    },
}

// 5. Navigation & Social
export const navLinks: NavLink[] = [
    { label: "Inicio", path: "/" },
    { label: "Vapers", path: "/vapers" },
    { label: "Destilados", path: "/destilados" },
    { label: "Baterías", path: "/baterias" },
    { label: "Combos", path: "/combos" },
]

export const socialLinks = [
    {
        name: "WhatsApp",
        url: `https://wa.me/${WHATSAPP_NUMBER}`,
        icon: "whatsapp",
        color: "#25D366",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/nubepoptd/",
        icon: "instagram",
        color: "#E1306C",
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/share/1Dyyc3VPqJ/?mibextid=wwXIfr",
        icon: "facebook",
        color: "#1877F2",
    },
]

// 6. Marketing Data
export const promosData = [
    "/promos/promo1.JPG",
    "/promos/promo2.JPG",
    "/promos/promo5.JPG",
    "/logo-negro.png",
]

export const heroSlides: HeroSlide[] = [
    {
        title: "Promo semanal: 20% OFF",
        bullets: ["Descuento especial", "Hasta agotar stock", "Solo en productos seleccionados"],
        primary: "Ver oferta",
        secondary: "Más info",
        message: "Hola, quiero la promo semanal",
    },
    {
        title: "Promo: Combo NubePop",
        bullets: ["Ahorra comprando en combo", "Envío rápido", "Regalo sorpresa"],
        primary: "Ver combo",
        secondary: "Detalles",
        message: "Hola, estoy interesado en el Combo NubePop",
    },
    {
        title: "Promo: Estrena sabor",
        bullets: ["Nuevos sabores cada semana", "Edición limitada", "Calidad garantizada"],
        primary: "Probar ahora",
        secondary: "Saber más",
        message: "Hola, quiero probar el nuevo sabor de esta semana",
    },
    {
        title: "Sabor que acompaña ☁️",
        bullets: ["🔥 Novedades cada semana", "⚡ Entregas rápidas", "💬 Atención todos los días"],
        primary: "Ver productos",
        secondary: "Contactar",
        message: "Hola, quiero saber más sobre los productos",
    },
]

// 7. Popular Products (Home)
export const popularProducts: Product[] = [
    {
        id: "p-vapers",
        name: "Vapers Desechables",
        description: "Listos para usar, sabores variados",
        price: 15000,
        images: ["/productos/vapers.png"],
        isPrimary: true,
    },
    {
        id: "p-destilados",
        name: "Destilados",
        description: "Selección nacional e importada",
        price: 40000,
        images: ["/productos/destilados.png"],
        isPrimary: true,
    },
    {
        id: "p-baterias",
        name: "Baterías",
        description: "Alto rendimiento para tus dispositivos",
        price: 30000,
        images: ["/productos/baterias.PNG"],
        isPrimary: true,
    },
    {
        id: "p-mtrx25",
        name: "MTRX 25000",
        description:
            "Vape desechable de 25000 puffs con batería recargable, sabores intensos y gran producción de vapor, ideal para quienes buscan máxima duración.",
        price: 35000,
        images: ["/productos/todos-productos/Mtrx25.PNG"],
        isPrimary: false,
    },
    {
        id: "p-mtrx12",
        name: "MTRX 12000",
        description:
            "Vape desechable de 12000 puffs con sabores premium y vapor suave, perfecto para una experiencia de vapeo duradera y práctica.",
        price: 24000,
        images: ["/productos/todos-productos/Mtrx12.PNG"],
        isPrimary: false,
    },
    {
        id: "p-snoopysmoke",
        name: "Snoopy Smoke",
        description:
            "Vape desechable compacto con sabores intensos y vapor suave, ideal para quienes buscan un dispositivo práctico y portátil.",
        price: 25000,
        images: ["/productos/todos-productos/SnoopySmoke.PNG"],
        isPrimary: false,
    },
    {
        id: "p-lostmary",
        name: "Lost Mary",
        description:
            "Vape desechable de 5000 puffs con sabores premium y diseño compacto, perfecto para una experiencia de vapeo cómoda y portátil.",
        price: 15000,
        images: ["/productos/todos-productos/LostMary.PNG"],
        isPrimary: false,
    },
]

// 8. Testimonials & FAQs
export const testimonialsData: Testimonial[] = [
    {
        name: "Carlos Mendoza",
        text: "Los mejores vapes desechables que he probado. La calidad del sabor se mantiene hasta la última gota y la batería dura toda la semana sin problema. Totalmente recomendados para uso diario.",
        rating: 5,
    },
    {
        name: "Laura Gómez",
        text: "Increíble la pureza de sus destilados. He probado muchas marcas pero ninguna con este nivel de limpieza en el sabor. Además las baterías tienen excelente estabilidad para sacar el mayor provecho.",
        rating: 5,
    },
    {
        name: "Andrés Silva",
        text: "Por fin encuentro baterías que no se dañan a las dos semanas. La de voltaje variable me funciona perfecto para distintos tipos de cartuchos. El diseño también está muy elegante y son fáciles de cargar.",
        rating: 5,
    },
    {
        name: "María Fernández",
        text: "Los destilados son de otro nivel. Tienen una variedad de perfiles que no se encuentra en cualquier lado y el efecto es súper limpio. Definitivamente me quedo con NubePop para mis compras.",
        rating: 5,
    },
]

export const faqsData: FAQItem[] = [
    {
        question: "¿Cuánto dura un vaper desechable?",
        answer: "La duración depende de tu uso y de la cantidad de inhalaciones (puffs) del modelo. En promedio, un vaper de 5000 puffs dura entre 1 a 2 semanas para un usuario frecuente.",
    },
    {
        question: "¿Qué voltaje se recomienda para los destilados?",
        answer: "Para la mayoría de destilados y cartuchos (carts), se recomienda usar una batería entre 2.4V y 2.8V. Empezar con un voltaje bajo e ir subiéndolo gradualmente te permite disfrutar mejor el sabor y evitar quemar el líquido.",
    },
    {
        question: "¿Puedo comprar si soy menor de edad?",
        answer: "No. De acuerdo con la ley, la venta de todos nuestros productos (incluyendo vapers, destilados y baterías) está estrictamente prohibida a menores de 18 años. Requerimos verificación de edad obligatoria al ingresar al sitio y al momento de la entrega.",
    },
    {
        question: "¿Qué diferencia hay entre destilado puro y Live Resin?",
        answer: "El destilado puro ofrece un efecto muy fuerte y concentrado sin alterar tanto el olor tradicional de la resina, mientras que la Live Resin está hecha con plantas congeladas frescas y mantiene muchos más terpenos, generando un sabor y aroma sumamente parecidos a la flor natural.",
    },
    {
        question: "¿Cómo sé si la batería de mi vaper ya está baja?",
        answer: "La mayoría de nuestros vapers y baterías tienen indicadores de luz LED en la base o un costado. Cuando la luz parpadee al momento de inhalar, significa que es hora de recargarlo. Si el modelo no es recargable y parpadea, indica el fin de la vida útil del producto.",
    },
]
