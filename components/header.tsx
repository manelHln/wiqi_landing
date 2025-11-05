"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center shrink-0">
              <Image src="/shopping-bag.png" alt="Wiqi Logo" width={26} height={26} />
            <span className="ml-1 font-bold text-2xl text-secondary">Wi</span><span className="font-bold text-2xl text-primary">qi</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors">
              How It Works
            </a>
            <a href="#integrations" className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors">
              Supported Stores
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-secondary transition-colors">
              FAQ
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-gray-700 cursor-pointer hover:bg-secondary hover:text-white">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary text-white hover:opacity-90 cursor-pointer">
              Add to Chrome
            </Button>
            <Menu className="md:hidden w-5 h-5 cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <a href="#" className="block text-sm font-medium text-gray-600 hover:text-secondary">
              How It Works
            </a>
            <a href="#" className="block text-sm font-medium text-gray-600 hover:text-secondary">
              Supported Stores
            </a>
            <a href="#" className="block text-sm font-medium text-gray-600 hover:text-secondary">
              FAQ
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
