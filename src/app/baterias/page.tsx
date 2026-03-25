import type { Metadata } from "next"
import BateriasClientPage from "./baterias-client"

export const metadata: Metadata = {
    title: "Baterías 510 y Mods Premium | NubePop Colombia",
    description:
        "Encuentra baterías de voltaje variable y rosca 510 universal para tus cartuchos. Máximo rendimiento, carga rápida y duración garantizada en NubePop Colombia.",
    alternates: {
        canonical: "/baterias",
    },
    openGraph: {
        title: "Baterías 510 y Mods de Alto Rendimiento | NubePop",
        description:
            "La energía perfecta para tu experiencia. Tenemos baterías de voltaje variable, discretas y potentes.",
        url: "https://nubepop.com/baterias",
    },
}

export default function BateriasPage() {
    return <BateriasClientPage />
}
