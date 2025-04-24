"use client"

import Image from "next/image"
import { Shield, Award, CheckCircle } from "lucide-react"

export default function PartnershipsSection() {
  const technologies = [
    {
      name: "Hikvision",
      logo: "/placeholder.svg?height=100&width=200",
      category: "CCTV & Supraveghere Video",
    },
    {
      name: "Dahua",
      logo: "/placeholder.svg?height=100&width=200",
      category: "CCTV & Supraveghere Video",
    },
    {
      name: "Honeywell",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Sisteme de Alarmă & Detecție Incendiu",
    },
    {
      name: "Bosch",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Sisteme de Securitate Integrate",
    },
    {
      name: "Paradox",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Sisteme de Alarmă",
    },
    {
      name: "Axis",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Camere IP & Soluții de Supraveghere",
    },
    {
      name: "HID Global",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Control Acces",
    },
    {
      name: "Legrand",
      logo: "/placeholder.svg?height=100&width=200",
      category: "Soluții Electrice",
    },
  ]

  const benefits = [
    {
      title: "Echipamente Certificate",
      description: "Utilizăm doar echipamente certificate, de la producători de top din industria securității.",
      icon: <Shield className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Garanție Extinsă",
      description: "Oferim garanție extinsă pentru toate echipamentele instalate prin parteneriatele noastre.",
      icon: <Award className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Suport Tehnic Specializat",
      description: "Beneficiați de suport tehnic specializat direct de la producători prin intermediul nostru.",
      icon: <CheckCircle className="h-10 w-10 text-blue-400" />,
    },
  ]

  return (
    <section id="tehnologii" className="py-16 bg-black relative overflow-hidden hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Tehnologii</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-center text-gray-400 max-w-3xl mx-auto">
            Colaborăm cu cei mai buni producători din industrie pentru a vă oferi soluții de securitate de înaltă
            calitate și fiabilitate.
          </p>
        </div>

        {/* Beneficii */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gray-800 p-4 rounded-full shadow-md mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="bg-gray-900 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Tehnologii</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="relative h-16 w-full mb-4 bg-white rounded-md">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h4 className="font-bold text-white text-center mb-1">{tech.name}</h4>
                <p className="text-sm text-gray-400 text-center">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
