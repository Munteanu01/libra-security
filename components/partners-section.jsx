"use client"

import Image from "next/image"
import { partners, partnerBenefits } from "@/data/partners"
import { CheckCircle, Shield, Users } from "lucide-react"

export default function PartnersSection() {
  // Funcție pentru a determina layout-ul grid în funcție de numărul de parteneri
  const getPartnersGridLayout = () => {
    // Folosim un grid uniform pentru toate dispozitivele - doar 2 sau 4 pe rând
    return {
      gridClasses: "grid grid-cols-2 lg:grid-cols-4 gap-4",
      itemClasses: () => "flex flex-col items-center justify-center",
    }
  }

  const { gridClasses, itemClasses } = getPartnersGridLayout()

  return (
    <section id="parteneri" className="pt-20 md:py-16 pb-10 bg-black relative overflow-hidden">
      {/* Removed all gradients - pure black background */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Partenerii Noștri</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto font-medium">
            Colaborăm cu parteneri de încredere pentru a oferi servicii complete și de calitate superioară clienților
            noștri.
          </p>
        </div>

        {/* Beneficii parteneriate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-full mr-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-400 font-medium">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Lista parteneri cu logo-uri - doar 2 sau 4 pe rând */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Companii Partenere</h3>

          <div className={gridClasses}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 ${itemClasses(index)}`}
                style={{ height: "180px" }} // Înălțime fixă pentru toate cardurile
              >
                <div className="relative h-16 w-16 mb-3">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="64px"
                  />
                </div>
                <h4 className="font-semibold text-white text-center text-sm line-clamp-2 flex items-center justify-center">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-2 font-medium">Interesați de o colaborare cu noi?</p>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="text-blue-400 font-medium hover:text-blue-500 transition-colors"
          >
            Contactați-ne pentru detalii →
          </button>
        </div>
      </div>
    </section>
  )
}
