import "./globals.css"

export const metadata = {
  title: "C&G LIBRA SECURITY - Soluții de securitate",
  description: "Soluții de securitate de încredere pentru casa și afacerea dumneavoastră",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
