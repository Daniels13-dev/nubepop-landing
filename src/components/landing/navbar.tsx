"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-xl font-bold">MyProduct</div>

      <div className="flex gap-6">
        <Link href="#features">Features</Link>
        <Link href="#pricing">Pricing</Link>
        <Link href="#faq">FAQ</Link>
      </div>

      <Button>Get Started</Button>
    </nav>
  )
}
