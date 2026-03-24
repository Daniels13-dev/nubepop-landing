import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { AgeVerification } from "@/components/ui/age-verification"
import { BackgroundAura } from "@/components/ui/background-aura"
import { CartProvider } from "@/context/CartContext"
import { Toaster } from "sonner"
import { InfiniteMarquee } from "@/components/ui/infinite-marquee"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const siteUrl = "https://nubepop.com"

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "NubePop | Vapers Desechables, Destilados y Baterías Premium",
        template: "%s | NubePop"
    },
    description: "Tienda líder en vaporizadores desechables, destilados de alta pureza y accesorios para vapeo en Colombia. Calidad garantizada, envíos rápidos y la mejor selección de marcas.",
    keywords: [
        "vape colombia", "vapers bogota", "vapers medellin", "vapes desechables", 
        "destilados thc", "baterias 510", "pod systems colombia", "nubepop", 
        "tienda de vapeo online", "accesorios vape", "compra vapers whatsapp"
    ],
    authors: [{ name: "NubePop", url: siteUrl }],
    creator: "NubePop",
    publisher: "NubePop",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "es_CO",
        url: siteUrl,
        title: "NubePop | Vapers, Destilados y Baterías de Máxima Calidad",
        description: "Eleva tu experiencia con la mejor selección de vapers desechables y destilados. Envío seguro a todo el país.",
        siteName: "NubePop Colombia",
        images: [
            {
                url: "/og-image.png", // Ensure this exists or I'll generate it later
                width: 1200,
                height: 630,
                alt: "NubePop Logo y Productos",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "NubePop | Vapers Premium en Colombia",
        description: "Los mejores vapers y destilados con envío inmediato. Experiencia premium garantizada.",
        creator: "@nubepop",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    verification: {
        google: 'google-site-verification-id', // User should replace this
    },
}

import { JsonLd } from "@/components/seo/json-ld"

import { MetaPixel } from "@/components/analytics/meta-pixel"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
            <head>
                <JsonLd />
                <MetaPixel />
                <GoogleAnalytics />
            </head>
            <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30`}>
                <BackgroundAura />
                <InfiniteMarquee 
                    speed={25}
                    className="top-0 z-[60] fixed bg-white/90 backdrop-blur-md border-b border-black/5"
                    items={[
                        "Envío gratis a todo el país por compras mayores a $200.000",
                        "Productos 100% Originales y Garantizados",
                        "Soporte Personalizado 24/7 vía WhatsApp",
                        "Novedades Semanales en Vapers y Destilados",
                        "NubePop: Elevando tu experiencia el siguiente nivel"
                    ]} 
                />
                <CartProvider>
                    <AgeVerification />
                    {children}
                    <Toaster richColors position="bottom-center" theme="dark" closeButton />
                </CartProvider>
            </body>
        </html>
    )
}
