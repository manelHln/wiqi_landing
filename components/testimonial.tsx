"use client"

export default function Testimonial() {
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="sm:p-12 text-center space-y-6">
          {/* Quote Mark */}
          <div className="text-6xl text-gray-400 font-serif">"</div>

          {/* Testimonial */}
          <blockquote className="text-2xl sm:text-3xl text-secondary  leading-snug">
            "Wiqi has made my online shopping effortless. I earn cashback automatically without lifting a finger, and
            the coupon finder saves me hundreds every month. It's become my must-have shopping companion."
          </blockquote>

          {/* Author */}
          <div className="flex flex-col items-center justify-center gap-2 pt-4">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-300 to-emerald-300 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">EM</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-secondary text-sm">Emily Martinez</p>
              <p className="text-sm text-gray-600">Verified Wiqi User</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
