import { ReactNode } from "react"

export interface Product {
    id: string | number
    name: string
    price: number
    images: string[]
    stock?: number
    [key: string]: any
}

export interface CartItem {
    id: string | number
    name: string
    price: number
    image: string
    category: string
    quantity: number
}

export interface CartContextType {
    cartItems: CartItem[]
    addToCart: (item: Omit<CartItem, "quantity">) => void
    removeFromCart: (id: string | number) => void
    updateQuantity: (id: string | number, delta: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}

export interface FilterOption {
    label: string
    value: string
    mappedValue: string
}

export interface ThemeClasses {
    text: string
    border: string
    borderHover: string
    bgFocus: string
    bgHover: string
    shadowHover: string
    glowBg: string
    priceGradient: string
    activePageBg: string
    loaderBorder: string
}

export interface NavLink {
    label: string
    path: string
}

export interface Testimonial {
    name: string
    text: string
    rating: number
}

export interface FAQItem {
    question: string
    answer: string
}

export interface HeroSlide {
    title: string
    bullets: string[]
    primary: string
    secondary: string
    message?: string
}

export interface SocialLink {
    name: string
    url: string
    icon: string
    color: string
}
