import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Carlos Mendoza",
        text: "Los mejores vapes desechables que he probado. La calidad del sabor se mantiene hasta la última gota y la batería dura toda la semana sin problema. Totalmente recomendados para uso diario.",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Carlos",
        rating: 5,
    },
    {
        name: "Laura Gómez",
        text: "Increíble la pureza de sus destilados. He probado muchas marcas pero ninguna con este nivel de limpieza en el sabor. Además las baterías tienen excelente estabilidad para sacar el mayor provecho.",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Laura",
        rating: 5,
    },
    {
        name: "Andrés Silva",
        text: "Por fin encuentro baterías que no se dañan a las dos semanas. La de voltaje variable me funciona perfecto para distintos tipos de cartuchos. El diseño también está muy elegante y son fáciles de cargar.",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Andres",
        rating: 5,
    },
    {
        name: "María Fernández",
        text: "Los destilados son de otro nivel. Tienen una variedad de perfiles que no se encuentra en cualquier lado y el efecto es súper limpio. Definitivamente me quedo con NubePop para mis compras.",
        avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Maria",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Clientes felices</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    ¿Por qué a todos les encanta NubePop?
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} className="h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex gap-1 text-yellow-500 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            
                            <blockquote className="flex-1 text-lg mb-6 text-foreground/90">
                                &quot;{t.text}&quot;
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto">
                                <Image 
                                    src={t.avatar} 
                                    alt={t.name}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover bg-muted"
                                />
                                <div>
                                    <p className="font-semibold">{t.name}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
