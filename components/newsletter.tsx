"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-secondary">Stay Updated on Savings</h2>
            <p className="text-lg text-gray-600">
              Get notified about the best cashback offers, exclusive deals, and money-saving tips delivered to your
              inbox weekly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:ring-1"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary text-white cursor-pointer hover:scale-105 transition-transform"
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {submitted && (
            <p className="text-sm text-emerald-600 font-medium">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
