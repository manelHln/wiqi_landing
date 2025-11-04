"use client"
import { Button } from "@/components/ui/button"
import { Workflow } from "lucide-react"

export default function Integrations() {
  const integrations = [
    { name: "Amazon", color: "bg-yellow-400" },
    { name: "eBay", color: "bg-red-500" },
    { name: "Target", color: "bg-red-600" },
    { name: "Walmart", color: "bg-blue-600" },
    { name: "Nike", color: "bg-black" },
    { name: "Sephora", color: "bg-pink-600" },
    { name: "Best Buy", color: "bg-yellow-400" },
    { name: "ASOS", color: "bg-black" },
    { name: "H&M", color: "bg-red-600" },
    { name: "Zara", color: "bg-black" },
    { name: "Booking", color: "bg-blue-600" },
    { name: "Airbnb", color: "bg-pink-400" },
    { name: "Uber", color: "bg-black" },
    { name: "DoorDash", color: "bg-red-600" },
    { name: "Expedia", color: "bg-yellow-500" },
    { name: "Hotels", color: "bg-blue-500" },
    { name: "Etsy", color: "bg-yellow-600" },
    { name: "Shein", color: "bg-black" },
    { name: "AliExpress", color: "bg-orange-600" },
    { name: "Gap", color: "bg-blue-900" },
  ]

  const tripleIntegrations = [...integrations, ...integrations, ...integrations]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20">
            <Workflow className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold uppercase tracking-wider">INTEGRATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">Works Everywhere You Shop</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Wiqi integrates seamlessly with 2,000+ partner stores and shopping platforms, automatically earning
              cashback wherever you shop online.
            </p>
          </div>

          <Button variant='link' className="text-white underline">All Integrations →</Button>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-lg">
              <style>{`
                @keyframes scrollRight {
                  0% {
                    transform: translateX(-33.333%);
                  }
                  100% {
                    transform: translateX(0);
                  }
                }
                .carousel-right {
                  display: flex;
                  gap: 1rem;
                  animation: scrollRight 60s linear infinite;
                  width: max-content;
                }
              `}</style>
              <div className="carousel-right">
                {tripleIntegrations.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} w-24 h-24 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group shrink-0 shadow-md`}
                  >
                    <span className="text-xs font-bold text-white text-center px-1 group-hover:scale-110 transition-transform">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg">
              <style>{`
                @keyframes scrollLeft {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-33.333%);
                  }
                }
                .carousel-left {
                  display: flex;
                  gap: 1rem;
                  animation: scrollLeft 60s linear infinite;
                  width: max-content;
                }
              `}</style>
              <div className="carousel-left">
                {tripleIntegrations.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.color} w-24 h-24 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer group shrink-0 shadow-md`}
                  >
                    <span className="text-xs font-bold text-white text-center px-1 group-hover:scale-110 transition-transform">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
