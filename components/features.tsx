"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QrCode } from "lucide-react"
import { motion } from "motion/react"

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full border border-gray-200 bg-white"
            variants={itemVariants}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <QrCode className="w-4 h-4 text-emerald-700" />
            </motion.div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">KEY FEATURES</span>
          </motion.div>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
            variants={itemVariants}
          >
            Smart savings tools that
            <br />
            earn you rewards
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Maximize your savings across all your favorite stores with automatic cashback, coupon matching, and
            real-time deal alerts.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Feature Card - Smart Notifications */}
          <motion.div variants={cardVariants}>
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-8 border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                <div className="space-y-4">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Automatic Coupon Finder
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    Our AI instantly finds and applies the best available coupons at checkout. Get instant notifications
                    when new deals match your shopping preferences.
                  </motion.p>

                  <motion.div 
                    className="space-y-3 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {["Coupon alerts", "Auto-apply best offers", "Savings notifications"].map((label, index) => (
                      <motion.div
                        key={label}
                        className="flex items-center justify-between text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <span className="text-gray-700 font-medium">{label}</span>
                        <motion.div 
                          className="w-8 h-5 bg-emerald-600 rounded-full relative cursor-pointer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div 
                            className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"
                            initial={{ x: 0 }}
                            whileHover={{ x: -1 }}
                          ></motion.div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Feature Card - Shopping Insights */}
          <motion.div variants={cardVariants}>
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-8 border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white h-full">
                <div className="space-y-4">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    Shopping Insights
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    See detailed insights about your shopping patterns, total savings, and top earning categories. Track
                    your rewards progress across thousands of partner stores.
                  </motion.p>

                  <motion.div 
                    className="space-y-3 pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-700 uppercase">Monthly Savings</span>
                      <motion.span 
                        className="text-xs text-gray-500 cursor-pointer"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        View Breakdown →
                      </motion.span>
                    </div>
                    <motion.div 
                      className="bg-gray-100 p-3 rounded-lg border border-gray-200 space-y-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <motion.p 
                        className="text-xs text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                      >
                        You earned <motion.span 
                          className="font-bold"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, type: "spring" }}
                        >$247.32</motion.span> in cashback this month
                      </motion.p>
                      <motion.p 
                        className="text-xs text-gray-500"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 }}
                      >
                        across 23 purchases
                      </motion.p>
                    </motion.div>
                    <motion.div 
                      className="pt-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      <div className="flex items-center gap-2">
                        <motion.div 
                          className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-xs font-bold text-emerald-700">📊</span>
                        </motion.div>
                        <span className="text-xs font-semibold text-gray-700">Top Category: Fashion</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-8">$89.50 earned</p>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}