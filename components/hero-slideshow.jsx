"use client"
import { useState, useEffect, useRef } from "react"
import { Mail, Phone, Shield, Award } from "lucide-react"

export default function HeroSection({ scrollToSection }) {
  const [isMounted, setIsMounted] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    setIsMounted(true)
    const videoTimer = setTimeout(() => {
      setVideoVisible(true)
    }, 500) // Poți ajusta această valoare dacă vrei o întârziere minimă

    return () => {
      clearTimeout(videoTimer)
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.oncanplaythrough = () => {
        videoRef.current.playbackRate = 0.5
      }
    }
  }, [isMounted])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background video with fade-in animation */}
      {isMounted && (
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: videoVisible ? 1 : 0 }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{
              objectFit: "cover",
              filter: "brightness(0.6)",
            }}
          >
            <source src="/videos/video-hero.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Overlay with diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent z-5"></div>

      {/* Mobile & tablet & small desktop layout - clean with no background panel */}
      <div className="xl:hidden relative z-10 h-screen">
        <div className="h-full px-6 sm:px-12 py-16 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Soluții de Securitate Profesionale
            </h1>
            <p className="text-lg sm:text-xl text-white/90">Protejăm ce contează pentru dumneavoastră</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 transition-all duration-300"
              onClick={() => (window.location.href = "mailto:contact@libra.ro")}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">contact@libra.ro</span>
            </button>

            <button
              className="flex items-center justify-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md border border-white/20 transition-all duration-300"
              onClick={() => (window.location.href = "tel:+40123456789")}
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm sm:text-base">+40 123 456 789</span>
            </button>
          </div>
        </div>
      </div>

      {/* XL screen layout - with full-height background panel */}
      <div className="hidden xl:block relative z-10 h-screen">
        {/* Left content panel - full height, only visible on xl */}
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-black/50 backdrop-blur-sm">
          {/* Custom divider that fades out from middle in both directions */}
          <div className="absolute top-0 right-0 bottom-0 w-px">
            {/* Middle section - most visible part */}
            <div className="absolute top-1/2 h-[10%] w-full bg-white/20 transform -translate-y-1/2"></div>

            {/* Top half with upward fade - no glow */}
            <div
              className="absolute top-0 h-[45%] w-full"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0.2), transparent)",
              }}
            ></div>

            {/* Bottom half with downward fade - no glow */}
            <div
              className="absolute bottom-0 h-[45%] w-full"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
              }}
            ></div>
          </div>

          {/* Content container - vertically centered but slightly above exact center */}
          <div className="h-full flex flex-col justify-center" style={{ paddingTop: "0", paddingBottom: "10vh" }}>
            <div className="px-12 max-w-xl mx-auto">
              <div className="mb-16">
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">Soluții de Securitate Profesionale</h1>
                <p className="text-2xl text-white/90">Protejăm ce contează pentru dumneavoastră</p>
              </div>

              <div className="flex flex-row gap-4">
                <button
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-md border border-white/20 transition-all duration-300"
                  onClick={() => (window.location.href = "mailto:contact@libra.ro")}
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-base">contact@libra.ro</span>
                </button>

                <button
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-md border border-white/20 transition-all duration-300"
                  onClick={() => (window.location.href = "tel:+40123456789")}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-base">+40 123 456 789</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications block - bottom right, only visible on md screens and up */}
      <div className="hidden md:block absolute bottom-6 right-6 z-20">
        <div className="p-4 bg-black/60 backdrop-blur-sm rounded-lg border border-white/15 flex flex-row gap-3 items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white">Autorizare IGSU</span>
          </div>
          <div className="w-px h-6 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white">Autorizare IGPR</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">ISO 9001</span>
          </div>
          <div className="w-px h-6 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">ISO 14001</span>
          </div>
        </div>
      </div>

      {/* Enhanced bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent z-5 pointer-events-none"></div>
    </section>
  )
}
