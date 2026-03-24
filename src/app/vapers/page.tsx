import type { Metadata } from "next"
import VapersClientPage from "./vapers-client"

import { CATEGORY_CONFIGS, SEO_CONFIG } from "@/config/site-content"

const config = CATEGORY_CONFIGS.vapers

export const metadata: Metadata = {
    title: config.seo.title,
    description: config.seo.description,
    alternates: {
        canonical: `${SEO_CONFIG.baseUrl}/${config.slug}`,
    },
    openGraph: {
        title: config.seo.title,
        description: config.seo.description,
        url: `${SEO_CONFIG.baseUrl}/${config.slug}`,
        siteName: SEO_CONFIG.siteName,
    }
}

export default function VapersPage() {
    return <VapersClientPage />
}
