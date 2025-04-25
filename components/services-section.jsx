"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { services, serviceCategories } from "@/data/services"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  return (
    <section id="servicii" className="pt-20 md:py-16 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Serviciile Noastre</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-3xl mx-auto mb-6">
            Oferim soluții complete de securitate, adaptate nevoilor dumneavoastră specifice.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === category.id ? "bg-blue-600 text-white" : "bg-gray-900 text-gray-300 hover:bg-gray-950"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg mr-4">
                    <div className="text-blue-500">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>

                <ul className="space-y-2 mt-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
