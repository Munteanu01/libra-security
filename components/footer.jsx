"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  const quickLinks = [
    { path: "/#servicii", label: "Servicii" },
    { path: "/#lucrari", label: "Lucrări" },
    { path: "/despre", label: "Despre Noi" },
    { path: "/despre#parteneri", label: "Parteneri" },
    { path: "/contact", label: "Contact" },
  ]

  const legalLinks = [
    { path: "/legal/politica-confidentialitate", label: "Politica de Confidențialitate" },
    { path: "/legal/termeni-conditii", label: "Termeni și Condiții" },
    { path: "/legal/politica-cookie", label: "Politica de Cookie-uri" },
  ]

  const handleFooterNavigation = (e, link) => {
    e.preventDefault()

    if (link.path.startsWith("/#")) {
      const sectionId = link.path.replace("/#", "")
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      } else {
        router.push(link.path)
      }
    } else {
      router.push(link.path)
    }
  }

  return (
    <footer className="bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Link-uri rapide</h3>
            <ul className="space-y-2 text-center sm:text-left">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={(e) => handleFooterNavigation(e, link)}
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
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Documente Legale</h3>
            <ul className="space-y-2 text-center sm:text-left">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-center sm:text-left text-white">Autorizații</h3>
            <ul className="space-y-2 text-center sm:text-left text-sm text-gray-400">
              <li>
                <a href="/pdf/autorizatie-igsu.pdf" target="_blank" className="hover:text-blue-400">
                  Autorizație IGSU – nr. 12345 / 01.03.2024
                </a>
              </li>
              <li>
                <a href="/pdf/aviz-igpr.pdf" target="_blank" className="hover:text-blue-400">
                  Aviz IGPR – nr. 67890 / 15.04.2023
                </a>
              </li>
              <li>Certificat ISO 9001 – emis 2023</li>
              <li>Certificat ISO 14001 – emis 2023</li>
            </ul>
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
