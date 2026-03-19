import { Metadata } from 'next'
import CombosPage from './combos-client'

export const metadata: Metadata = {
    title: 'Combos & Promociones | NubePop',
    description: 'Descubre nuestros paquetes especiales y ahorra con la combinación perfecta para tu experiencia.',
}

export default function Page() {
    return <CombosPage />
}
