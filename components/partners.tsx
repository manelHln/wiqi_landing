"use client"

export default function Partners() {
  const logos = ["HubSpot", "Dropbox", "Square", "INTER", "Gommutivity"]

  return (
    <section className="pb-10 px-4 sm:px-6 lg:px-8 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-semibold text-gray-600 mb-6">More than 150+ partner merchants  </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold text-gray-400">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
