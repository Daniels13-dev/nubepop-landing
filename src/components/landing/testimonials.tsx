import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

import { testimonialsData as testimonials } from "@/config/site-content"

const getGradient = (name: string) => {
    const gradients = [
        "from-purple-500 to-indigo-500",
        "from-[#EA1F78] to-rose-400",
        "from-[#38bdf8] to-blue-600",
        "from-orange-400 to-[#EA1F78]",
        "from-emerald-400 to-cyan-500"
    ];
    // Simple hash to predictably pick the same gradient for the same name
    const index = name.charCodeAt(0) % gradients.length;
    return gradients[index];
};

export function Testimonials() {
    return (
        <section className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-[var(--foreground)]">Clientes felices</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    ¿Por qué a todos les encanta NubePop?
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                    <Card key={i} className="h-full flex flex-col bg-zinc-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all rounded-3xl">
                        <CardContent className="p-8 flex flex-col flex-1">
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(t.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            
                            <blockquote className="flex-1 text-lg mb-8 text-zinc-300 italic leading-relaxed">
                                &quot;{t.text}&quot;
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-2xl bg-gradient-to-br ${getGradient(t.name)} shadow-lg ring-2 ring-white/10`}>
                                    {t.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-bold text-zinc-100 text-lg">{t.name}</p>
                                    <p className="text-sm text-zinc-500">Cliente Verificado</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}

