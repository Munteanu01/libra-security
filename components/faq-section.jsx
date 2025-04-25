"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { faqs } from "@/data/faq"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-12 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Întrebări Frecvente</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            Găsiți răspunsuri la cele mai frecvente întrebări despre serviciile și soluțiile noastre de securitate
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-6 shadow-lg border-t border-gray-800">
            {faqs.map((faq, index) => (
              <div key={index} className={`mb-4 ${index !== faqs.length - 1 ? "border-b border-gray-800 pb-4" : ""}`}>
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-1.5 rounded-full text-blue-500 ml-4 flex-shrink-0">
                    {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>
                <div
                  className={`mt-2 text-gray-400 transition-all duration-300 overflow-hidden ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-2 font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4 font-medium">Nu ați găsit răspunsul la întrebarea dumneavoastră?</p>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Contactați-ne direct
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
