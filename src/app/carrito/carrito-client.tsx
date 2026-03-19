"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

export default function CarritoClient() {
    const { cartItems, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleWhatsAppOrder = () => {
        const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573000000000"
        
        let message = "Hola NubePop! Quisiera hacer el siguiente pedido:\n\n"
        
        cartItems.forEach(item => {
            const itemTotal = item.price * item.quantity
            message += `- ${item.quantity}x ${item.name} ($${itemTotal.toLocaleString('es-CO')})\n`
        })
        
        message += `\n*Total estimado: $${totalPrice.toLocaleString('es-CO')}*\n\n`
        message += `Quedo atento/a para coordinar el envío y pago. ¡Gracias!`

        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank")
    }

    if (!mounted) return null // Previene errores de hidratación entre server y client (localStorage)

    return (
        <main className="container mx-auto px-6">
            <Navbar />
            
            <div className="pt-32 pb-20 min-h-screen">
                <div className="max-w-5xl mx-auto border-b border-white/10 pb-6 mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 flex items-center gap-4">
                        Tu Carrito
                        <span className="text-xl bg-zinc-800 text-zinc-300 px-4 py-1 rounded-full font-medium">
                            {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
                        </span>
                    </h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-24 h-24 bg-zinc-900/50 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold text-zinc-300 mb-2">Tu carrito está vacío</h2>
                        <p className="text-zinc-500 mb-8 max-w-md">Parece que aún no has agregado productos a tu carrito. Explora nuestras categorías y encuentra tus favoritos.</p>
                        
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/vapers">
                                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl h-12 px-6">Ver Vapers</Button>
                            </Link>
                            <Link href="/destilados">
                                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl h-12 px-6">Ver Destilados</Button>
                            </Link>
                            <Link href="/baterias">
                                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl h-12 px-6">Ver Baterías</Button>
                            </Link>
                            <Link href="/combos">
                                <Button className="bg-[#EA1F78] hover:bg-[#F8499D] text-white rounded-xl h-12 px-6">Ver Combos</Button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                        {/* Items List */}
                        <div className="flex-1 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-6 p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/5 items-center">
                                    <div className="w-24 h-24 bg-zinc-800/50 rounded-2xl overflow-hidden relative flex-shrink-0">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-zinc-600">Sin Foto</div>
                                        )}
                                    </div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1 gap-2">
                                            <h3 className="font-bold text-lg text-zinc-100 truncate pr-4">{item.name}</h3>
                                            <p className="font-bold text-[#c049eb] sm:text-[#EA1F78] whitespace-nowrap">
                                                ${(item.price).toLocaleString('es-CO')} c/u
                                            </p>
                                        </div>
                                        <p className="text-sm text-zinc-500 mb-4">{item.category}</p>
                                        
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex flex-row items-center border border-white/10 rounded-xl bg-zinc-900/50">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-10 text-center font-medium text-zinc-200">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            
                                            <div className="flex items-center gap-6">
                                                <span className="font-bold hidden sm:block text-zinc-300">
                                                    Subtotal: ${(item.price * item.quantity).toLocaleString('es-CO')}
                                                </span>
                                                <button 
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-zinc-500 hover:text-red-400 transition-colors p-2 bg-black/20 rounded-xl"
                                                    title="Eliminar producto"
                                                >
                                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="w-full lg:w-[400px]">
                            <div className="p-8 rounded-3xl bg-zinc-900/60 backdrop-blur-2xl border border-white/10 sticky top-32 shadow-[0_0_40px_-15px_rgba(234,31,120,0.1)]">
                                <h3 className="text-2xl font-bold mb-6 text-zinc-100">Resumen del pedido</h3>
                                
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-zinc-400">
                                        <span>Subtotal ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})</span>
                                        <span>${totalPrice.toLocaleString('es-CO')}</span>
                                    </div>
                                    <div className="flex justify-between text-zinc-400 pb-6 border-b border-white/10">
                                        <span>Envío</span>
                                        <span className="text-zinc-500 text-sm">A convenir en WhatsApp</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-xl text-zinc-100 mt-2">
                                        <span>Total Neto</span>
                                        <span className="text-[#EA1F78]">${totalPrice.toLocaleString('es-CO')}</span>
                                    </div>
                                </div>

                                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                                    Pagarás tu orden después de confirmar los detalles del envío por WhatsApp. No se requieren tarjetas en el sitio.
                                </p>

                                <Button 
                                    onClick={handleWhatsAppOrder}
                                    className="w-full h-14 rounded-xl text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <svg viewBox="0 0 24 24" className="w-10 h-10 scale-[2] fill-current group-hover:rotate-3 transition-transform duration-300">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
                                    </svg>
                                    <span>Pedir por WhatsApp</span>
                                </Button>
                                
                                <div className="mt-6 flex flex-col items-center gap-4">
                                    <button 
                                        onClick={clearCart}
                                        className="text-red-500 hover:text-red-400 text-sm hover:underline transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Vaciar carrito
                                    </button>
                                    
                                    <Link href="/" className="text-zinc-500 hover:text-white text-sm hover:underline transition-colors">
                                        Continuar comprando
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            <Footer />
        </main>
    )
}
