import "./globals.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata = {
  title: "C&G LIBRA SECURITY - Soluții de securitate",
  description: "Soluții de securitate de încredere pentru casa și afacerea dumneavoastră",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
