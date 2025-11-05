"use client"

import { Separator } from "@/components/ui/separator"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

const footerLinks = {
    Company: ["About", "Careers", "Blog", "Press"],
    Product: ["Pricing", "Security", "Enterprise", "Customers"],
    Legal: ["Privacy", "Terms", "Cookie Policy", "Compliance"],
    Resources: ["Documentation", "Help Center", "Changelog", "Status"],
  }

export default function Footer() {

  return (
    <footer className="bg-gray-950 text-white px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-16">
        {/* Top Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg text-white">Wiqi</span>
            </div>
            <p className="text-sm text-gray-400">startupsaveroo@gmail.com</p>
            <p className="text-sm text-gray-400">+1 (888) SAVE-NOW</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}

        {/* Separator */}
        {/* <Separator className="bg-gray-800 my-8" /> */}

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© Copyright 2025 Wiqi. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
