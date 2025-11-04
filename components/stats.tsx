"use client"

import { Card } from "@/components/ui/card"
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react"
import { useEffect, useRef } from "react"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut"
      })
      return controls.stop
    }
  }, [isInView, count, value])

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

export default function Stats() {
  const stats = [
    { number: 2025, label: "Year Launched", suffix: "" },
    { number: 100, label: "Active Users", suffix: "K+" },
    { number: 2, label: "Partner Stores", suffix: "K+" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="p-8 text-center border-gray-200 hover:shadow-md transition-shadow bg-white">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.2 + 0.3,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <p className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
                      <Counter value={stat.number} suffix={stat.suffix} />
                    </p>
                  </motion.div>
                  {stat.label && (
                    <motion.p 
                      className="text-gray-600 font-medium text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.5, duration: 0.4 }}
                    >
                      {stat.label}
                    </motion.p>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}