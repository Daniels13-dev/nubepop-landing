import { Metadata } from 'next'
import CombosPage from './combos-client'

export const metadata: Metadata = {
    title: 'Combos y Promociones Exclusivas | NubePop Colombia',
    description: 'Ahorra con nuestros combos especiales. Encuentra la combinación perfecta de vapers, destilados y baterías con descuentos exclusivos en NubePop.',
    alternates: {
        canonical: "/combos",
    },
    openGraph: {
        title: "Combos y Ahorro en Vapeo | NubePop",
        description: "Las mejores promociones en vapers y destilados. Compra más por menos con nuestros paquetes diseñados para ti.",
        url: "https://nubepop.com/combos",
    }
}

export default function Page() {
    return <CombosPage />
}
