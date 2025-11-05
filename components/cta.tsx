"use client"

import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            With the Wiqi extension,
            <br />
            earn <span className="underline decoration-yellow-400">cashback</span> in just one click.
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 cursor-pointer">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent cursor-pointer">
            Try for Free
          </Button>
        </div>
      </div>
    </section>
  )
}
