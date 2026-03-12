import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-32 text-center bg-muted rounded-xl">
      <h2 className="text-4xl font-bold">Ready to get started?</h2>

      <p className="mt-4 text-muted-foreground">
        Start building your landing today.
      </p>

      <Button size="lg" className="mt-8">
        Start Free
      </Button>
    </section>
  )
}
