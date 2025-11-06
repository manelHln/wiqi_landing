"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { createClient } from "@supabase/supabase-js";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (email) {
      supabase.functions
        .invoke("early-access", {
          body: { email, tags: ["Early Access, Wiqi"] },
        })
        .then((response) => {
          if (response.response?.ok) {
            setSubmitted(true);
          } else {
            setError("Subscription failed");
          }
        })
        .catch((error) => {
          setError("An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section className="relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left avatar - Floating animation */}
          <motion.div
            className="absolute left-4 top-12 sm:left-12 sm:top-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <motion.div className="w-16 h-16 rounded-full bg-pink-300 border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white text-sm font-bold">
                +3$
              </div>
            </motion.div>
          </motion.div>

          {/* Top right avatar */}
          <motion.div
            className="absolute right-4 top-24 sm:right-12 sm:top-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <motion.div className="w-20 h-20 rounded-full bg-blue-300 border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white text-sm font-bold">
                +10$
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom left avatar */}
          <motion.div
            className="absolute left-6 bottom-24 sm:left-20 sm:bottom-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
          >
            <motion.div className="w-14 h-14 rounded-full bg-amber-300 border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-white text-xs font-bold">
                +5$
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom right avatar */}
          <motion.div
            className="absolute right-8 bottom-28 sm:right-16 sm:bottom-36"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
          >
            <motion.div className="w-16 h-16 rounded-full bg-orange-300 border-4 border-white shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-sm font-bold">
                -30%
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              SMART SHOPPING
            </span>
          </motion.div>

          {/* Heading and description */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary leading-tight">
              Save effortlessly on every
              <br />
              online purchase
            </h1>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Our Chrome extension automatically finds cashback, coupons, and
              exclusive deals at checkout. Earn rewards while you shop without
              lifting a finger.
            </motion.p>
          </motion.div>

          <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex mb-2 flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-sm border border-primary focus:outline-none focus:ring-1"
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
                Thanks for subscribing!
              </p>
            )}
            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}
          </motion.div>

          {/* <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary text-white cursor-pointer"
              >
                Add to Chrome
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-secondary cursor-pointer hover:bg-secondary hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
