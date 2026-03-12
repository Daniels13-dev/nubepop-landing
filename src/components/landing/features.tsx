import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Fast performance",
    description: "Optimized for speed and SEO.",
  },
  {
    icon: Zap,
    title: "Developer experience",
    description: "Modern tools for faster development.",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Production ready infrastructure.",
  },
]

export function Features() {
  return (
    <section className="py-24 grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <Card key={i}>
          <CardContent className="p-6 space-y-4">
            <f.icon className="w-8 h-8" />

            <h3 className="text-xl font-semibold">{f.title}</h3>

            <p className="text-muted-foreground">{f.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
