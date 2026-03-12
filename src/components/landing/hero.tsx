"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-32 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Build faster with Next.js
      </motion.h1>

      <p className="mt-6 text-lg text-muted-foreground">
        The modern stack to build fast landing pages.
      </p>

      <div className="flex justify-center gap-4 mt-8">
        <Button size="lg">Start Free</Button>
        <Button variant="outline" size="lg">
          Live Demo
        </Button>
      </div>
    </section>
  )
}
