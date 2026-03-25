"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, ArrowRight, Minus, Plus } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
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
        <main className="site-container">
            <Navbar />
            
            <div className="pt-20 md:pt-32 pb-20 min-h-screen">
                <div className="w-full border-b border-white/10 pb-6 mb-10">
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
                            <ShoppingCart className="w-12 h-12 text-zinc-600" />
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
                    <div className="flex flex-col lg:flex-row gap-12 w-full">
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
                                                    <Trash2 className="w-5 h-5" />
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
                                    className="w-full h-14 rounded-xl text-xs md:text-lg font-black uppercase tracking-widest bg-white text-black hover:bg-zinc-200 shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                                >
                                    <FaWhatsapp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                                    <span>Pedir por WhatsApp</span>
                                </Button>
                                
                                <div className="mt-6 flex flex-col items-center gap-4">
                                    <button 
                                        onClick={clearCart}
                                        className="text-red-500 hover:text-red-400 text-sm hover:underline transition-colors flex items-center gap-2"
                                    >
                                        <Trash2 className="w-4 h-4" />
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
