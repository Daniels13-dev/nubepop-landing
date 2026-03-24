import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="py-32 text-center bg-muted rounded-xl">
            <h2 className="text-4xl font-bold">¿Listo para comenzar?</h2>

            <p className="mt-4 text-muted-foreground">Comienza a crear tu landing hoy mismo.</p>

            <Button size="lg" className="mt-8">
                Comenzar gratis
            </Button>
        </section>
    )
}
