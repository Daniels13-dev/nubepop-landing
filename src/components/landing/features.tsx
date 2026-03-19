"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Product = {
    id: string
    name: string
    description: string
    price?: string
    image?: string
    isPrimary?: boolean
}

import { popularProducts as products } from "@/config/site-content"

function ProductCard({ p }: { p: Product }) {
    return (
        <Card className="ring-1 ring-[var(--foreground)] bg-transparent text-[var(--foreground)]">
            <CardContent className="p-6 space-y-4 text-[var(--foreground)]">
                {/* Imagen: si NO es primary la mostramos más grande con aspecto 9:16 (vertical) */}
                <div
                    className={
                        `rounded-md border border-[var(--foreground)] flex items-center justify-center overflow-hidden ` +
                        (p.isPrimary ? `h-40` : `w-full`)
                    }
                    // usamos style inline para forzar aspect-ratio 9/16 en navegadores compatibles
                    style={p.isPrimary ? undefined : { aspectRatio: "9/16" }}
                >
                    {p.image ? (
                        <Image src={p.image} alt={p.name} width={400} height={400} className="w-full h-full object-cover" />
                    ) : (
                        <div className="text-sm text-[var(--foreground)]">Imagen</div>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {!p.isPrimary && (
                        <Tag className="w-6 h-6 text-[var(--color-secondary)]" />
                    )}
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{p.name}</h3>
                </div>

                <p className="text-[var(--foreground)]">{p.description}</p>

                {!p.isPrimary && (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                            <DollarSign className="w-4 h-4 text-[var(--foreground)]" />
                            <span className="font-medium text-[var(--foreground)]">{p.price}</span>
                        </div>

                        <Link href="/vapers">
                            <Button size="sm">Ver</Button>
                        </Link>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}

export function Features() {
    return (
        <section id="features" className="py-24">
            <h2 className="text-2xl font-semibold mb-6 text-center text-[var(--foreground)]">
                Productos
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {products.slice(0, 3).map((p) => (
                    <ProductCard key={p.id} p={p} />
                ))}
            </div>

            <div className="mt-16">
                <PopularFeatures products={products} />
            </div>
        </section>
    )
}



function PopularFeatures({ products }: { products: Product[] }) {
    // Static popular products grid (no accordion)
    // Solo renderizamos productos que NO sean `isPrimary`.
    const nonPrimary = products.filter((p) => !p.isPrimary)

    // Si no hay productos no-principales, no renderizamos la sección
    if (nonPrimary.length === 0) return null

    // Queremos hasta 4 productos populares; si hay menos de 4, repetimos los no-principales
    const popular: Product[] = []
    for (let i = 0; popular.length < 4; i++) {
        popular.push(nonPrimary[i % nonPrimary.length])
    }

    return (
        <section>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-[var(--foreground)]">Populares</h3>
                <div className="text-sm text-muted-foreground">Los productos más populares</div>
            </div>

            <div className="grid grid-cols-4 gap-8">
                {popular.map((p, idx) => (
                    // key usa índice si repetimos IDs para evitar duplicados en el map
                    <ProductCard key={`${p.id}-${idx}`} p={p} />
                ))}
            </div>
        </section>
    )
}
