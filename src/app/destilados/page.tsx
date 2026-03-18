import type { Metadata } from "next"
import DestiladosClientPage from "./destilados-client"

export const metadata: Metadata = {
    title: "Destilados",
    description: "Explora nuestra exclusiva selección de destilados de alta pureza. Sativas energizantes, Indicas relajantes y los mejores Híbridos.",
    openGraph: {
        title: "Destilados Premium | NubePop",
        description: "Encuentra destilados de alta pureza. Sativas, Indicas e Híbridas para la mejor experiencia.",
        url: "https://nubepop.com/destilados",
    }
}

export default function DestiladosPage() {
    return <DestiladosClientPage />
}
