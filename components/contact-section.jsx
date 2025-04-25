"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, User, FileText, MessageSquare, Info } from "lucide-react"

export default function ContactDesign4() {
  const [activeTab, setActiveTab] = useState("form")

  return (
    <section id="contact-4" className=" pt-20 pb-10 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contactați-ne</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Suntem aici pentru a vă ajuta cu orice întrebări sau solicitări aveți.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-1 rounded-lg inline-flex">
              <button
  onClick={() => setActiveTab("form")}
  className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${
    activeTab === "form" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
  }`}
>
  <MessageSquare className="h-4 w-4" />
  Formular de contact
</button>
<button
  onClick={() => setActiveTab("info")}
  className={`flex items-center justify-center gap-2 px-6 py-2 rounded-md text-sm font-medium transition-all ${
    activeTab === "info" ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
  }`}
>
  <Info className="h-4 w-4" />
  Informații de contact
</button>

            </div>
          </div>

          {/* Tab content */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl shadow-xl border-t border-gray-800 overflow-hidden">
            {/* Formular de contact */}
            {activeTab === "form" && (
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Trimite-ne un mesaj</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nume complet
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                          placeholder="Numele dvs."
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                          placeholder="email@exemplu.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Telefon
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="+40 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subiect
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FileText className="h-5 w-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        className="w-full pl-10 px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                        placeholder="Subiectul mesajului"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                      placeholder="Scrieți mesajul dvs. aici..."
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                      Sunt de acord cu{" "}
                      <a href="#" className="text-blue-500 hover:underline">
                        termenii și condițiile
                      </a>
                    </label>
                  </div>

                  <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Trimite Mesaj
                  </Button>
                </form>
              </div>
            )}

            {/* Informații de contact */}
            {activeTab === "info" && (
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Informații de contact</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {/* Telefon */}
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Telefon</h4>
                        <p className="text-gray-400">
                          <a href="tel:+40123456789" className="hover:text-blue-400 transition-colors">
                            +40 123 456 789
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-gray-400">
                          <a href="mailto:contact@libra.ro" className="hover:text-blue-400 transition-colors">
                            contact@libra.ro
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* Program */}
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Program</h4>
                        <p className="text-gray-400">Luni - Vineri: 09:00 - 18:00</p>
                        <p className="text-gray-400">Sâmbătă - Duminică: Închis</p>
                      </div>
                    </div>

                    {/* Adresă */}
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Adresă</h4>
                        <p className="text-gray-400">Strada Exemplu, Nr. 123</p>
                        <p className="text-gray-400">București, România</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
