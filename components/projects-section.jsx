"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, X, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { projects, projectCategories } from "@/data/projects"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageInfo, setShowImageInfo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const mobileCarouselRef = useRef(null)
  const thumbnailsRef = useRef([])

  // Adaug un stil global pentru a ascunde scrollbar-ul
  useEffect(() => {
    // Adaugă un stil pentru a ascunde scrollbar-ul
    const style = document.createElement("style")
    style.textContent = `
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  // Verificăm dacă suntem pe mobil când componenta se montează
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768)

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  // Funcții pentru prezentare
  const openPresentation = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"

    // Reset thumbnail refs
    thumbnailsRef.current = project.images.map(() => React.createRef())

    // Force scroll after a short delay to ensure DOM is ready
    setTimeout(() => {
      centerActiveThumbnail(0)
    }, 100)
  }

  const closePresentation = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setShowImageInfo(false)
    document.body.style.overflow = "auto"
  }

  // Navigare circulară între imagini
  const nextImage = (e) => {
    e && e.stopPropagation()
    if (!selectedProject) return
    const newIndex = (currentImageIndex + 1) % selectedProject.images.length
    setCurrentImageIndex(newIndex)
    centerActiveThumbnail(newIndex)
  }

  const prevImage = (e) => {
    e && e.stopPropagation()
    if (!selectedProject) return
    const newIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    setCurrentImageIndex(newIndex)
    centerActiveThumbnail(newIndex)
  }

  // Improved function to center the active thumbnail
  const centerActiveThumbnail = (index) => {
    if (!selectedProject) return

    // For mobile view
    const mobileContainer = document.getElementById("mobile-thumbnails-container")
    if (mobileContainer) {
      // Get all thumbnails
      const thumbnails = mobileContainer.querySelectorAll("[data-index]")
      if (thumbnails && thumbnails.length > 0) {
        const activeThumb = thumbnails[index]
        if (activeThumb) {
          // Calculate position to center the active thumbnail
          const containerWidth = mobileContainer.offsetWidth
          const thumbLeft = activeThumb.offsetLeft
          const thumbWidth = activeThumb.offsetWidth

          // Center the thumbnail
          mobileContainer.scrollTo({
            left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
            behavior: "smooth",
          })
        }
      }
    }

    // For desktop view
    const desktopContainer = document.getElementById("thumbnails-container")
    if (desktopContainer) {
      const thumbnails = desktopContainer.querySelectorAll("[data-index]")
      if (thumbnails && thumbnails.length > 0) {
        const activeThumb = thumbnails[index]
        if (activeThumb) {
          const containerWidth = desktopContainer.offsetWidth
          const thumbLeft = activeThumb.offsetLeft
          const thumbWidth = activeThumb.offsetWidth

          desktopContainer.scrollTo({
            left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
            behavior: "smooth",
          })
        }
      }
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
    centerActiveThumbnail(index)
  }

  const toggleImageInfo = () => {
    setShowImageInfo(!showImageInfo)
  }

  // Auto-advance slides in presentation mode
  useEffect(() => {
    let timer
    if (selectedProject) {
      timer = setTimeout(() => {
        nextImage()
      }, 5000) // Change slide every 5 seconds
    }
    return () => clearTimeout(timer)
  }, [selectedProject, currentImageIndex])

  // Effect to ensure carousel moves when image changes
  useEffect(() => {
    if (selectedProject) {
      // Force the carousel to center on the current image
      centerActiveThumbnail(currentImageIndex)

      // Try multiple times to ensure it works
      setTimeout(() => centerActiveThumbnail(currentImageIndex), 50)
      setTimeout(() => centerActiveThumbnail(currentImageIndex), 150)
      setTimeout(() => centerActiveThumbnail(currentImageIndex), 300)
    }
  }, [currentImageIndex, selectedProject])

  // Get visible thumbnails for mobile (only 3 at a time)
  const getVisibleThumbnails = () => {
    if (!selectedProject) return []

    const totalImages = selectedProject.images.length
    if (totalImages <= 3) return selectedProject.images

    // Calculate which 3 images to show based on current index
    let startIdx = currentImageIndex - 1
    if (startIdx < 0) startIdx = totalImages - 1

    const visibleImages = []
    for (let i = 0; i < 3; i++) {
      const idx = (startIdx + i) % totalImages
      visibleImages.push({
        image: selectedProject.images[idx],
        index: idx,
      })
    }

    return visibleImages
  }

  return (
    <section id="lucrari" className="pt-20 md:py-16 bg-black relative overflow-hidden">
      {/* Simple black background for Projects section - no gradients */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Lucrările Noastre</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto font-medium">
            Explorați portofoliul nostru de proiecte finalizate cu succes pentru diverși clienți
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {projectCategories.map((category) => (
            <button
              key={category.value}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === category.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-950 flex flex-col h-full"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full mb-2">
                    {project.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center px-4 py-2 text-sm rounded-md w-full justify-center mt-auto"
                  onClick={() => openPresentation(project)}
                >
                  Află mai multe
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prezentare Fullscreen */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex"
          >
            {/* Layout pentru desktop - info în stânga, carousel în dreapta */}
            <div className="hidden md:flex w-full h-full">
              {/* Buton X în dreapta sus */}
              <button
                onClick={closePresentation}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
              {/* Panou informații - stânga */}
              <div
                className="w-1/3 lg:w-1/4 bg-gradient-to-br from-gray-900 to-gray-950 p-6 overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{selectedProject.title}</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">An finalizare</p>
                    <p className="text-white">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Locație</p>
                    <p className="text-white">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Client</p>
                    <p className="text-white">{selectedProject.client}</p>
                  </div>
                </div>

                <p className="text-white text-sm mb-6">{selectedProject.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-2">Detalii Proiect</h4>
                  <ul className="text-white text-sm space-y-2">
                    {selectedProject.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Carousel - dreapta */}
              <div className="flex-1 relative">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedProject.title} - Imagine ${currentImageIndex + 1}`}
                    fill
                    className="object-contain max-h-[calc(100vh-120px)]"
                    priority
                  />
                </div>

                {/* Miniaturi jos între săgeți */}
                <div className="absolute bottom-0 left-0 right-0 bg-black py-4 px-2 z-10">
                  <div className="flex items-center justify-center max-w-2xl mx-auto relative">
                    {/* Săgeata stânga */}
                    <button
                      className="bg-black hover:bg-gray-900 p-2 rounded-full text-white flex-shrink-0 mx-2"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {/* Container cu miniaturi între săgeți */}
                    <div
                      id="thumbnails-container"
                      className="flex overflow-x-auto hide-scrollbar max-w-full mx-auto"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {selectedProject.images.slice(0, 5).map((image, index) => (
                        <div
                          key={index}
                          data-index={index}
                          className={`relative h-16 w-24 mx-1 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${
                            currentImageIndex === index ? "ring-2 ring-blue-500 scale-105" : "opacity-70"
                          }`}
                          onClick={() => goToImage(index)}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Miniatură ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                      {selectedProject.images.length > 5 && (
                        <div className="flex items-center justify-center px-2 text-white text-sm">
                          +{selectedProject.images.length - 5}
                        </div>
                      )}
                    </div>

                    {/* Săgeata dreapta */}
                    <button
                      className="bg-black hover:bg-gray-900 p-2 rounded-full text-white flex-shrink-0 mx-2"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout pentru mobile */}
            <div className="flex flex-col md:hidden w-full h-full bg-black">
              {/* Carousel */}
              {!showImageInfo && (
                <div className="flex-1 relative">
                  {/* Fixed controls at top */}
                  <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-30 bg-black">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleImageInfo}
                        className="bg-black hover:bg-gray-900 p-2 rounded-full text-white"
                      >
                        <Info className="h-5 w-5" />
                      </button>
                      <div className="bg-black text-white px-2 py-1 rounded text-sm">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </div>
                    <button onClick={closePresentation} className="text-white hover:text-gray-300">
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Image container with padding to avoid overlap with controls */}
                  <div
                    className="relative w-full h-full pt-16 flex items-center justify-center"
                    onTouchStart={(e) => {
                      if (typeof document !== "undefined") {
                        const touchDown = e.touches[0].clientX
                        document.documentElement.dataset.touchStartX = touchDown.toString()
                      }
                    }}
                    onTouchMove={(e) => {
                      if (typeof document === "undefined" || !document.documentElement.dataset.touchStartX) return

                      const touchDown = Number.parseFloat(document.documentElement.dataset.touchStartX)
                      const currentTouch = e.touches[0].clientX
                      const diff = touchDown - currentTouch

                      if (diff > 50) {
                        nextImage()
                        delete document.documentElement.dataset.touchStartX
                      } else if (diff < -50) {
                        prevImage()
                        delete document.documentElement.dataset.touchStartX
                      }
                    }}
                    onTouchEnd={() => {
                      if (typeof document !== "undefined") {
                        delete document.documentElement.dataset.touchStartX
                      }
                    }}
                  >
                    <div className="relative w-full h-[calc(100vh-160px)] flex items-center justify-center">
                      <Image
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Imagine ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  {/* Mobile thumbnails - only show 3 at a time */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black py-4 px-2 z-10">
                    <div className="flex items-center justify-center relative">
                      {/* Săgeata stânga */}
                      <button
                        className="bg-black hover:bg-gray-900 p-2 rounded-full text-white flex-shrink-0 mx-1"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>

                      {/* Container cu miniaturi între săgeți - doar 3 imagini vizibile */}
                      <div
                        id="mobile-thumbnails-container"
                        ref={mobileCarouselRef}
                        className="flex overflow-x-auto hide-scrollbar max-w-full"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                      >
                        {/* Show all thumbnails but make them scrollable */}
                        {selectedProject.images.map((image, index) => (
                          <div
                            key={index}
                            data-index={index}
                            className={`relative h-14 w-20 mx-1 flex-shrink-0 rounded overflow-hidden cursor-pointer transition-all ${
                              currentImageIndex === index ? "ring-2 ring-blue-500 scale-105" : "opacity-70"
                            }`}
                            onClick={() => goToImage(index)}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Miniatură ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Săgeata dreapta */}
                      <button
                        className="bg-black hover:bg-gray-900 p-2 rounded-full text-white flex-shrink-0 mx-1"
                        onClick={nextImage}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Panou informații pentru mobile - ocupă tot ecranul când este deschis */}
              {showImageInfo && (
                <div
                  className="fixed inset-0 bg-gradient-to-br from-gray-900 to-gray-950 h-screen w-screen overflow-y-auto"
                  style={{ scrollbarWidth: "none" }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white pr-10">{selectedProject.title}</h3>
                      <button
                        onClick={toggleImageInfo}
                        className="text-white hover:text-gray-300 absolute top-6 right-5"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-gray-400 text-sm">An finalizare</p>
                        <p className="text-white">{selectedProject.year}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Locație</p>
                        <p className="text-white">{selectedProject.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Client</p>
                        <p className="text-white">{selectedProject.client}</p>
                      </div>
                    </div>

                    <p className="text-white text-sm mb-6">{selectedProject.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Detalii Proiect</h4>
                      <ul className="text-white text-sm space-y-2">
                        {selectedProject.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
