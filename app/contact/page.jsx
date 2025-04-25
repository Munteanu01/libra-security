"use client"

import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import ContactSection from "../../components/contact-section"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}