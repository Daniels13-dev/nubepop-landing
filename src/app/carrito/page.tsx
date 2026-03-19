import { Metadata } from 'next'
import CarritoClient from './carrito-client'

export const metadata: Metadata = {
    title: 'Tu Carrito | NubePop',
    description: 'Revisa tu pedido y finaliza tu compra enviando la orden por WhatsApp.',
}

export default function Page() {
    return <CarritoClient />
}
