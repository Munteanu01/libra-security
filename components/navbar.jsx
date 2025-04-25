'use client'
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add("overflow-hidden")
  } else {
    document.body.classList.remove("overflow-hidden")
  }

  return () => {
    document.body.classList.remove("overflow-hidden")
  }
}, [isMenuOpen])

  const router = useRouter()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavigation = (e, item) => {
    e.preventDefault()
    router.push(item.href)
    setIsMenuOpen(false)
  }

  // Actualizarea item-urilor de navigare
  const navItems = [
    { href: "/#servicii", label: "Servicii", id: "servicii" },
    { href: "/#lucrari", label: "Lucrări", id: "lucrari" },
    { href: "/despre", label: "Despre Noi", id: "despre" },
    { href: "/despre#parteneri", label: "Parteneri", id: "parteneri" },
    { href: "/contact", label: "Contact", id: "contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Desktop */}
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
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item)}
                  className="text-lg font-semibold transition-colors mx-4 text-white hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="xl:hidden container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-white.png"
            alt="Libra Security Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <button className="text-gray-300 hover:text-blue-400" onClick={toggleMenu} aria-label="Toggle Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed top-0 right-0 bottom-0 w-[250px] bg-black shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h3 className="text-lg font-bold text-white">Meniu</h3>
          <button className="text-gray-300 hover:text-blue-400" onClick={toggleMenu} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col py-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavigation(e, item)}
              className="w-full text-left px-6 py-4 text-base font-semibold transition-colors border-b border-gray-800 text-white hover:bg-gray-900 hover:text-blue-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="xl:hidden fixed inset-0 bg-black z-40 opacity-70" onClick={toggleMenu}></div>}
    </header>
  )
}
