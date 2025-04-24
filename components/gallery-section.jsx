"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Gallery images with different aspect ratios
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Sistem de securitate instalat în Mall Veranda",
      width: 800,
      height: 600,
      category: "commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Cameră de supraveghere instalată în spațiu rezidențial",
      width: 600,
      height: 800,
      category: "residential",
    },
    {
      src: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Panou de control pentru sistem de alarmă",
      width: 800,
      height: 500,
      category: "equipment",
    },
    {
      src: "https://images.unsplash.com/photo-1551703599-6b3e8379cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Sistem de control acces pentru clădire de birouri",
      width: 600,
      height: 600,
      category: "commercial",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Sistem complex de securitate pentru spațiu industrial",
      width: 1200,
      height: 800,
      category: "industrial",
    },
    {
      src: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Instalare sistem de detecție incendiu",
      width: 500,
      height: 700,
      category: "installation",
    },
    {
      src: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Echipă tehnică în timpul instalării",
      width: 900,
      height: 600,
      category: "team",
    },
    {
      src: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      alt: "Sistem de supraveghere video pentru parcare",
      width: 800,
      height: 800,
      category: "commercial",
    },
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="galerie" className="py-20 bg-gray-900 relative overflow-hidden hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Galerie Proiecte</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 max-w-3xl mx-auto">
            Explorați imagini din proiectele noastre finalizate și soluțiile de securitate implementate
          </p>
        </div>

        {/* Responsive Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg ${
                // Make some images span multiple columns or rows based on their aspect ratio
                image.width > image.height * 1.5 ? "sm:col-span-2" : ""
              } ${image.height > image.width * 1.2 ? "row-span-2" : ""}`}
              onClick={() => openLightbox(image)}
            >
              <div className="relative h-64 sm:h-auto aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white bg-opacity-80 rounded-full p-2">
                    <ZoomIn className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="mx-auto max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 text-center">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
