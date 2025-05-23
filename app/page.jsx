"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import HeroSection from "../components/hero-slideshow"
import ServicesSection from "../components/services-section"
import TimelineSection from "../components/timeline-section"
import ProjectsSection from "../components/projects-section"
import GallerySection from "../components/gallery-section"
import PartnershipsSection from "../components/technologii"
import ContactSection from "../components/contact-section"
import FaqSection from "../components/faq-section"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef({})
  const router = useRouter()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      Object.keys(sectionsRef.current).forEach((sectionId) => {
        const section = sectionsRef.current[sectionId]
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const setSectionRef = (id, element) => {
    sectionsRef.current[id] = element
  }

  return (
    <div className="relative">
      <main>
        <div ref={(el) => setSectionRef("hero", el)}>
          <HeroSection scrollToSection={scrollToSection} />
        </div>

        <div id="servicii" ref={(el) => setSectionRef("servicii", el)}>
          <ServicesSection />
        </div>

        <div id="evolutie" ref={(el) => setSectionRef("evolutie", el)}>
          <TimelineSection />
        </div>

        <div id="lucrari" ref={(el) => setSectionRef("lucrari", el)}>
          <ProjectsSection />
        </div>

        <div id="galerie" ref={(el) => setSectionRef("galerie", el)}>
          <GallerySection />
        </div>

        <div id="tehnologii" ref={(el) => setSectionRef("tehnologii", el)}>
          <PartnershipsSection />
        </div>

        {/* Eliminat: Secțiunea Contact */}
        {/* <div id="contact" ref={(el) => setSectionRef("contact", el)}>
  <ContactSection />
</div> */}

        <FaqSection />
      </main>
    </div>
  )
}
