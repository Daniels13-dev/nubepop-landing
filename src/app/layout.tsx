import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { AgeVerification } from "@/components/ui/age-verification"
import { CartProvider } from "@/context/CartContext"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: {
        default: "NubePop | Vapers, Destilados y Baterías Premium",
        template: "%s | NubePop"
    },
    description: "Eleva tu experiencia con la mejor selección de vapers desechables, destilados de alta pureza y baterías de máximo rendimiento. Calidad y sabor garantizados.",
    keywords: ["vapes", "vapers", "vapers desechables", "destilados", "baterías 510", "pod systems", "vape shop", "NubePop"],
    authors: [{ name: "NubePop" }],
    creator: "NubePop",
    openGraph: {
        type: "website",
        locale: "es_CO", // Ajusta el locale según tu país (ej. mx, es)
        url: "https://nubepop.com",
        title: "NubePop | Vapers, Destilados y Baterías Premium",
        description: "Eleva tu experiencia con la mejor selección de vapers desechables, destilados de alta pureza y baterías de máximo rendimiento.",
        siteName: "NubePop",
        images: [
            {
                url: "/logo-negro.png", // Preferiblemente aquí colocar un banner 1200x630
                width: 800,
                height: 600,
                alt: "NubePop Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "NubePop | Vapers, Destilados y Baterías Premium",
        description: "Eleva tu experiencia con la mejor selección de vapers desechables, destilados de alta pureza y baterías de máximo rendimiento.",
        creator: "@nubepoptd", // Reemplazar con tu handle real
        images: ["/logo-negro.png"],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
            <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <CartProvider>
                    <AgeVerification />
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}
