import type { Metadata } from "next"
import VapersClientPage from "./vapers-client"

export const metadata: Metadata = {
    title: "Vapers Desechables",
    description: "Explora nuestra selección premium de vapers desechables de las mejores marcas. Calidad excepcional, sabores frutales, mentolados y más.",
    openGraph: {
        title: "Vapers Desechables | NubePop",
        description: "Descubre nuestra selección premium de vapers. Calidad excepcional y sabores inolvidables.",
        url: "https://nubepop.com/vapers",
    }
}

export default function VapersPage() {
    return <VapersClientPage />
}
