import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Pricing() {
    return (
        <section className="py-24 grid md:grid-cols-3 gap-8">
            <Card>
                <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">Básico</h3>

                    <p className="text-4xl font-bold">$9</p>

                    <Button className="w-full">Elegir plan</Button>
                </CardContent>
            </Card>
        </section>
    )
}
