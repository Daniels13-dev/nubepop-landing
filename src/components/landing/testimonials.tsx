import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Chen",
    text: "This product saved us weeks of development.",
  },
  {
    name: "David Kim",
    text: "The best stack for modern web apps.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 grid md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <p className="text-lg">
              <q>{t.text}</q>
            </p>

            <p className="mt-4 font-semibold">{t.name}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
