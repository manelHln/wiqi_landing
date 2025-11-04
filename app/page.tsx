import Header from "@/components/header"
import Hero from "@/components/hero"
import Partners from "@/components/partners"
import Features from "@/components/features"
import Integrations from "@/components/integrations"
import Newsletter from "@/components/newsletter"
import Testimonial from "@/components/testimonial"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Integrations />
      <Newsletter />
      <Testimonial />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
