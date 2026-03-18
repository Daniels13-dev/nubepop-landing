import type { Metadata } from "next"
import BateriasClientPage from "./baterias-client"

export const metadata: Metadata = {
    title: "Baterías",
    description: "La energía que necesitas. Encuentra la batería perfecta para tus cartuchos, desde sistemas pod hasta mods avanzados de alto rendimiento.",
    openGraph: {
        title: "Baterías y Mods | NubePop",
        description: "La energía que necesitas. Baterías de rosca 510, voltaje variable y mods.",
        url: "https://nubepop.com/baterias",
    }
}

export default function BateriasPage() {
    return <BateriasClientPage />
}
