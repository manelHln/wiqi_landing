"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from '@supabase/supabase-js'
import { set } from "react-hook-form"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    if (email) {
      supabase.functions.invoke("early-access", {
        body: { email, tags: ["Early Access, Wiqi"] },
      }).then(response => {
        if (response.response?.ok) {
          setSubmitted(true)
        } else {
          setError("Subscription failed")
        }
      }).catch(error => {
        setError("An error occurred")
      }).finally(()=> {
        setLoading(false)
      })
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

          <form onSubmit={handleSubmit} className="flex mb-2 flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
              disabled={submitted || loading}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          {submitted && (
            <p className="text-sm text-emerald-600 font-medium">
              Thanks for subscribing! Check your email for confirmation.
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600 font-medium">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
