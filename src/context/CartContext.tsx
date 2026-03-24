"use client"

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";
import { CartItem, CartContextType } from "@/types";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    // Persistence key
    const STORAGE_KEY = "nubepop_cart";

    // Initialize from localStorage on mount
    useEffect(() => {
        setIsMounted(true);
        const storedCart = localStorage.getItem(STORAGE_KEY);
        if (storedCart) {
            try {
                setCartItems(JSON.parse(storedCart));
            } catch (err) {
                console.error("Cart hydration failed:", err);
            }
        }
    }, []);

    // Save to localStorage when cart changes
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
        }
    }, [cartItems, isMounted]);

    const showCartToast = useCallback((productName: string) => {
        const toastId = "cart-toast";
        
        toast.custom((t) => (
            <div className="w-full max-w-[min(90vw,400px)] bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-4 flex items-center gap-4 shadow-[0_20px_40px_-15px_rgba(192,73,235,0.4)] animate-in fade-in slide-in-from-bottom-5 duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#c049eb] to-pink-500 flex items-center justify-center shadow-lg shadow-[#c049eb]/20">
                    <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-grow min-w-0">
                    <h4 className="text-white font-black text-sm truncate uppercase tracking-tight">
                        {productName}
                    </h4>
                    <p className="text-zinc-400 text-xs font-medium">
                        Agregado al carrito
                    </p>
                </div>

                <button 
                    onClick={() => {
                        window.location.href = "/carrito";
                        toast.dismiss(t);
                    }}
                    className="flex-shrink-0 bg-white text-black text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-1 group"
                >
                    Finalizar
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>
        ), {
            id: toastId,
            duration: 3000
        });
    }, []);

    const addToCart = useCallback((product: Omit<CartItem, "quantity">) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        
        showCartToast(product.name);
    }, [showCartToast]);

    const removeFromCart = useCallback((id: string | number) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string | number, delta: number) => {
        setCartItems((prev) => {
            const itemToUpdate = prev.find(i => i.id === id);
            
            // Only show toast if increasing quantity
            if (delta > 0 && itemToUpdate) {
                showCartToast(itemToUpdate.name);
            }

            return prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    }, [showCartToast]);

    const clearCart = useCallback(() => setCartItems([]), []);

    const totalItems = useMemo(() => 
        cartItems.reduce((acc, item) => acc + item.quantity, 0), 
    [cartItems]);
    
    const totalPrice = useMemo(() => 
        cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0), 
    [cartItems]);

    const contextValue = useMemo(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice
    }), [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice]);

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
