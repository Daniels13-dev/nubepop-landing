"use client"

import { Product, ThemeClasses } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"

interface CartActionsProps {
    product: Product
    themeClasses: ThemeClasses
}

export function CartActions({ product, themeClasses }: CartActionsProps) {
    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart()

    const getQuantity = (id: string | number) => {
        const item = cartItems.find((item) => item.id === id)
        return item ? item.quantity : 0
    }

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0] || "",
            category: product.category || "",
        })
    }

    const currentQuantity = getQuantity(product.id)

    if (product.stock === 0) {
        return (
            <Button
                disabled
                className="w-full transition-all duration-300 rounded-xl h-12 bg-zinc-800 text-zinc-500 border-zinc-700 cursor-not-allowed opacity-70"
            >
                Agotado
            </Button>
        )
    }

    if (currentQuantity > 0) {
        return (
            <div
                className={`flex items-center justify-between w-full h-12 bg-zinc-900/50 rounded-xl border ${themeClasses.border} overflow-hidden`}
            >
                <button
                    onClick={() => {
                        if (currentQuantity === 1) {
                            removeFromCart(product.id)
                        } else {
                            updateQuantity(product.id, -1)
                        }
                    }}
                    className="w-12 h-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M20 12H4"
                        />
                    </svg>
                </button>
                <span className="flex-1 text-center font-bold text-white">
                    {currentQuantity} en el carrito
                </span>
                <button
                    onClick={() => {
                        if (product.stock === undefined || currentQuantity < product.stock) {
                            updateQuantity(product.id, 1)
                        }
                    }}
                    className={`w-12 h-full flex items-center justify-center transition-colors ${
                        product.stock !== undefined && currentQuantity >= product.stock
                            ? "text-zinc-600 cursor-not-allowed bg-zinc-900/50"
                            : `${themeClasses.text} hover:text-white ${themeClasses.bgHover}`
                    }`}
                    disabled={product.stock !== undefined && currentQuantity >= product.stock}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>
        )
    }

    return (
        <Button
            onClick={handleAddToCart}
            className={`w-full transition-all duration-300 rounded-xl h-12 bg-transparent ${themeClasses.bgHover} ${themeClasses.text} hover:text-white border ${themeClasses.border}`}
        >
            Agregar al carrito
        </Button>
    )
}
