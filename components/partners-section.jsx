"use client"

import Image from "next/image"
import { partners, partnerBenefits } from "@/data/partners"

export default function PartnersSection() {
  // Funcție pentru a determina layout-ul grid în funcție de numărul de parteneri
  const getPartnersGridLayout = () => {
    // Folosim un grid uniform pentru toate dispozitivele
    return {
      gridClasses: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4",
      itemClasses: () => "flex flex-col items-center justify-center",
    }
  }

  const { gridClasses, itemClasses } = getPartnersGridLayout()

  return (
    <section id="parteneri" className="py-12 bg-site-bg-main relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-site-text-primary">Partenerii Noștri</h2>
          <div className="w-20 h-1 bg-site-primary mx-auto mb-4"></div>
          <p className="text-site-text-secondary max-w-3xl mx-auto">
            Colaborăm cu parteneri de încredere pentru a oferi servicii complete și de calitate superioară clienților
            noștri.
          </p>
        </div>

        {/* Beneficii parteneriate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {partnerBenefits.map((benefit, index) => (
            <div key={index} className="bg-site-bg-card p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-site-bg-card-alt p-2 rounded-full mr-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-site-text-primary">{benefit.title}</h3>
              </div>
              <p className="text-site-text-secondary">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Lista parteneri cu logo-uri mai mici - acum cu carduri de dimensiuni egale */}
        <div className="bg-site-bg-card rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-bold mb-6 text-center text-site-text-primary">Companii Partenere</h3>

          <div className={gridClasses}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`bg-site-bg-card-alt rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 ${itemClasses(index)}`}
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
                <h4 className="font-semibold text-site-text-primary text-center text-sm line-clamp-2 flex items-center justify-center">
                  {partner.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-site-text-secondary mb-2">Interesați de o colaborare cu noi?</p>
          <button
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
            className="text-site-text-accent font-medium hover:text-site-primary transition-colors"
          >
            Contactați-ne pentru detalii →
          </button>
        </div>
      </div>
    </section>
  )
}
