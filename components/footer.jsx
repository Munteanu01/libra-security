"use client"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Footer({ scrollToSection }) {
  const router = useRouter()

  // Definim secțiunile disponibile pentru navigare în footer (fără cele ascunse)
  const footerLinks = [
    { id: "despre", label: "Despre noi", path: "/#despre" },
    { id: "servicii", label: "Servicii", path: "/#servicii" },
    { id: "lucrari", label: "Lucrări", path: "/#lucrari" },
    { id: "parteneri", label: "Parteneri", path: "/#parteneri" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ]

  const handleNavigation = (link) => {
    if (typeof window !== "undefined") {
      const section = document.getElementById(link.id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      } else {
        router.push(link.path)
      }
    }
  }

  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo-white.png"
                alt="Libra Security Logo"
                width={180}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-center sm:text-left text-sm">
              Soluții de securitate de încredere pentru casa și afacerea dumneavoastră
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Link-uri rapide</h3>
            <ul className="space-y-2 text-center sm:text-left">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Contact</h3>
            <address className="not-italic text-gray-400 text-center sm:text-left text-sm">
              <p className="mb-2">
                <a href="tel:+40123456789" className="hover:text-blue-400">
                  +40 123 456 789
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:contact@libra.ro" className="hover:text-blue-400">
                  contact@libra.ro
                </a>
              </p>
              <p>
                <a
                  href="https://www.librasecurity.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  www.librasecurity.ro
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Program</h3>
            <div className="text-gray-400 text-center sm:text-left text-sm">
              <p className="mb-2">Luni - Vineri: 9:00 - 18:00</p>
              <p>Sâmbătă - Duminică: Închis</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} S.C. C&G LIBRA SECURITY S.R.L. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
