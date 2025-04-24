"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar({ activeSection, scrollToSection, isProjectPage = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavigation = (sectionId) => {
    setIsMenuOpen(false)

    if (isProjectPage) {
      router.push(`/#${sectionId}`)
    } else {
      // Scroll to section on the same page
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu") && !event.target.closest("button")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  // Definim secțiunile disponibile pentru navigare (fără cele ascunse)
  const navItems = [
    { id: "despre", label: "Despre Noi" },
    { id: "servicii", label: "Servicii" },
    { id: "lucrari", label: "Lucrări" },
    { id: "parteneri", label: "Parteneri" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Regular navbar for smaller screens */}
      <div className="xl:hidden container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-white.png"
              alt="Libra Security Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={cn(
                "text-lg font-semibold transition-colors",
                activeSection === item.id ? "text-blue-400" : "text-white hover:text-blue-400",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="lg:hidden text-gray-300 hover:text-blue-400" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Special design for XL screens */}
      <div className="hidden xl:block">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-white.png"
                alt="Libra Security Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <nav className="flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={cn(
                    "text-lg font-medium transition-colors mx-4",
                    activeSection === item.id ? "text-blue-400" : "text-white hover:text-blue-400",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Slide-in from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[250px] bg-black shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-lg font-bold text-white">Meniu</h3>
          <button className="text-gray-300 hover:text-blue-400" onClick={toggleMenu} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`w-full text-left px-6 py-4 text-base font-medium transition-colors border-b border-gray-800 ${
                activeSection === item.id
                  ? "text-blue-400 bg-gray-900"
                  : "text-white hover:bg-gray-900 hover:text-blue-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-40" onClick={toggleMenu} style={{ opacity: 0.7 }}></div>
      )}
    </header>
  )
}
