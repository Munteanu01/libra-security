"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Presentation,
  X,
  Info,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"

const projects = {
  "mall-veranda": {
    id: "mall-veranda",
    title: "MALL VERANDA",
    description: "Proiect complex de instalații electrice și sisteme de securitate pentru Mall Veranda.",
    details: [
      "Instalațiile de curenți tari",
      "Tablourile electrice de comandă pentru instalația de climatizare/desfumare",
      "Tablourile electrice pentru instalația de iluminat normal și de siguranță",
      "Instalație detecție incendiu parter",
      "Sisteme de degivrare rampe și țevi",
    ],
    images: [
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551703599-6b3e8379cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    location: "București, România",
    year: "2019",
    category: "Spații Comerciale",
    client: "Veranda Mall",
  },
  kaufland: {
    id: "kaufland",
    title: "KAUFLAND ROMÂNIA",
    description: "Proiect de înlocuire și instalare a sistemelor CCTV pentru magazinele Kaufland din România.",
    details: [
      "Înlocuire și instalare Sistem CCTV",
      "Configurare și testare echipamente",
      "Instruire personal pentru utilizarea sistemului",
      "Mentenanță periodică",
    ],
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551703599-6b3e8379cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    location: "Multiple locații, România",
    year: "2020",
    category: "Spații Comerciale",
    client: "Kaufland România",
  },
  "valletta-residence": {
    id: "valletta-residence",
    title: "VALLETTA RESIDENCE",
    description:
      "Proiect complex de instalații electrice și sisteme de securitate pentru complexul rezidențial Valletta Residence.",
    details: [
      "Instalațiile electrice de curenți tari",
      "Tablourile electrice, instalații de iluminat și prize, automatizări desfumare",
      "Sistemul de desfumare și evacuare a gazelor din parcarea subterană",
      "Structuri cablate sisteme: detecție incendiu, video interfonie, bariere auto, control acces",
    ],
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551703599-6b3e8379cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    location: "București, România",
    year: "2021",
    category: "Rezidențial",
    client: "Valletta Development",
  },
  timken: {
    id: "timken",
    title: "TIMKEN",
    description: "Proiect de instalații electrice pentru hala de producție rulmenți TIMKEN din West Park Ploiești.",
    details: ["Instalații electrice curenți tari", "Tablouri electrice", "Sisteme de iluminat industrial"],
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    ],
    location: "Ploiești, România",
    year: "2018",
    category: "Industrial",
    client: "TIMKEN",
  },
  prysmian: {
    id: "prysmian",
    title: "PRYSMIAN",
    description: "Proiect de instalații electrice pentru hala de producție fibră optică PRYSMIAN din Slatina.",
    details: ["Instalații electrice curenți tari", "Sisteme de iluminat industrial"],
    images: [
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    location: "Slatina, România",
    year: "2019",
    category: "Industrial",
    client: "PRYSMIAN",
  },
  michelin: {
    id: "michelin",
    title: "MICHELIN",
    description: "Proiect de instalații electrice pentru depozitul de cauciucuri MICHELIN din Florești.",
    details: ["Instalații electrice curenți tari", "Sisteme de iluminat industrial"],
    images: [
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    location: "Florești, România",
    year: "2018",
    category: "Industrial",
    client: "MICHELIN",
  },
}

export default function ProjectPageClient({ params }) {
  const router = useRouter()
  const [project, setProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreenPresentation, setIsFullscreenPresentation] = useState(false)
  const [showImageInfo, setShowImageInfo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const id = params.id
    if (projects[id]) {
      setProject(projects[id])
    } else {
      router.push("/#lucrari")
    }
  }, [params.id, router])

  useEffect(() => {
    // Disable scrolling when in fullscreen presentation mode
    if (isFullscreenPresentation) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isFullscreenPresentation])

  const nextImage = (e) => {
    e && e.stopPropagation()
    if (!project) return
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = (e) => {
    e && e.stopPropagation()
    if (!project) return
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const startPresentation = (startIndex = 0) => {
    setIsFullscreenPresentation(true)
    setCurrentImageIndex(startIndex)
  }

  const exitPresentation = () => {
    setIsFullscreenPresentation(false)
    setShowImageInfo(false)
  }

  const toggleImageInfo = () => {
    setShowImageInfo(!showImageInfo)
  }

  // Auto-advance slides in presentation mode
  useEffect(() => {
    let timer
    if (isFullscreenPresentation) {
      timer = setTimeout(() => {
        nextImage()
      }, 5000) // Change slide every 5 seconds
    }
    return () => clearTimeout(timer)
  }, [isFullscreenPresentation, currentImageIndex])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Se încarcă...</p>
      </div>
    )
  }

  return (
    <>
      <Navbar isProjectPage={true} activeSection="" scrollToSection={() => {}} />

      {/* Redesign complet al paginii de proiect */}
      <div className="min-h-screen bg-gray-900">
        {/* Header cu imagine de fundal și overlay */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-4xl px-4">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 text-sm rounded-md mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">{project.description}</p>
            </div>
          </div>
        </div>

        {/* Conținut principal */}
        <div className="container mx-auto px-4 py-12">
          {/* Informații proiect */}
          <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col items-center md:items-start">
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">An finalizare</h3>
                </div>
                <p className="text-2xl font-bold text-blue-400">{project.year}</p>
              </div>

              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700 flex flex-col items-center md:items-start">
                <div className="flex items-center mb-2">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Locație</h3>
                </div>
                <p className="text-2xl font-bold text-blue-400">{project.location}</p>
              </div>

              <div className="p-8 flex flex-col items-center md:items-start">
                <div className="flex items-center mb-2">
                  <Building className="h-6 w-6 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Client</h3>
                </div>
                <p className="text-2xl font-bold text-blue-400">{project.client}</p>
              </div>
            </div>
          </div>

          {/* Galerie și detalii */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* Galerie - Stânga */}
            <div className="lg:col-span-8">
              <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Galerie Proiect</h2>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-5 py-2"
                    onClick={() => startPresentation(0)}
                  >
                    <Presentation className="h-5 w-5" />
                    Prezentare
                  </Button>
                </div>

                {/* Imagine principală */}
                <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg"}
                    alt={`${project.title} - Imagine principală`}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => startPresentation(0)}>
                      Vezi toate imaginile
                    </Button>
                  </div>
                </div>

                {/* Miniaturi */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                  {project.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-md overflow-hidden cursor-pointer"
                      onClick={() => startPresentation(index + 1)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Imagine ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-black/50 text-white text-xs px-2 py-1 rounded">
                          {index + 2}/{project.images.length}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detalii - Dreapta */}
            <div className="lg:col-span-4">
              <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden p-6 h-full">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-1 h-8 bg-blue-600 mr-3"></div>
                  Detalii Proiect
                </h2>

                <div className="space-y-4 mb-8">
                  {project.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-700/50 p-4 rounded-lg mb-6">
                  <p className="text-gray-300 text-sm">
                    Proiect realizat pentru {project.client} în {project.location}, finalizat în anul {project.year}.
                    Toate lucrările au fost executate conform standardelor de calitate și siguranță.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>Website client</span>
                  </a>
                  <span className="text-gray-500 text-sm">Cod proiect: #{project.id}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buton înapoi */}
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-white py-5 px-8"
              onClick={() => router.push("/#lucrari")}
            >
              <ArrowLeft className="h-4 w-4" />
              Înapoi la Lucrări
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Presentation Mode */}
      <AnimatePresence>
        {isFullscreenPresentation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            {/* Main image */}
            <div className="relative w-full h-full">
              {/* Image */}
              <div
                className="relative w-full h-full"
                onTouchStart={(e) => {
                  const touchDown = e.touches[0].clientX
                  document.documentElement.dataset.touchStartX = touchDown.toString()
                }}
                onTouchMove={(e) => {
                  if (!document.documentElement.dataset.touchStartX) return

                  const touchDown = Number.parseFloat(document.documentElement.dataset.touchStartX)
                  const currentTouch = e.touches[0].clientX
                  const diff = touchDown - currentTouch

                  // If swipe is significant enough (more than 50px)
                  if (diff > 50) {
                    // Swipe left - next image
                    nextImage()
                    delete document.documentElement.dataset.touchStartX
                  } else if (diff < -50) {
                    // Swipe right - previous image
                    prevImage()
                    delete document.documentElement.dataset.touchStartX
                  }
                }}
                onTouchEnd={() => {
                  delete document.documentElement.dataset.touchStartX
                }}
              >
                <Image
                  src={project.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${project.title} - Imagine ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation controls */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <button className="bg-black/50 hover:bg-black/70 p-3 rounded-full text-white" onClick={prevImage}>
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="bg-black/50 hover:bg-black/70 p-3 rounded-full text-white" onClick={nextImage}>
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Controls overlay - ALWAYS VISIBLE */}
              <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleImageInfo}
                    className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                  >
                    <Info className="h-5 w-5" />
                  </button>
                  <div className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {project.images.length}
                  </div>
                </div>
                <button
                  onClick={exitPresentation}
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile swipe instruction */}
              {isMobile && (
                <div className="absolute bottom-20 left-0 right-0 flex justify-center">
                  <div className="bg-black/50 text-white text-xs px-3 py-2 rounded-full animate-pulse">
                    Glisați pentru a naviga între imagini
                  </div>
                </div>
              )}

              {/* Image info panel - visibility controlled by state but always rendered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: showImageInfo ? 1 : 0, y: showImageInfo ? 0 : 20 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 md:p-6"
                style={{ display: showImageInfo ? "block" : "none" }}
              >
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
                <div className="mt-2 md:mt-4 grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Client</p>
                    <p className="text-white text-sm md:text-base">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Locație</p>
                    <p className="text-white text-sm md:text-base">{project.location}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer scrollToSection={() => {}} />
    </>
  )
}
