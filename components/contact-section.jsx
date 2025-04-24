"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, User, FileText } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Trimite-ne un mesaj</h3>
            <p className="text-gray-400 mb-4">Completați formularul și vă vom contacta în cel mai scurt timp.</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nume
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                      placeholder="Numele dvs."
                    />
                  </div>
                </div>
                <div className="relative">
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
                      className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
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
                    className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
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
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white"
                  placeholder="Scrieți mesajul dvs. aici..."
                ></textarea>
              </div>

              <Button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Trimite Mesaj
              </Button>
            </form>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Informații de contact</h3>
            <div className="space-y-4">
              <div className="border border-gray-700 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1 text-white text-lg">Adresă</h4>
                  <p className="text-gray-400 text-base">Strada Exemplu, Nr. 123, București</p>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1 text-white text-lg">Telefon</h4>
                  <p className="text-gray-400 text-base">
                    <a href="tel:+40123456789" className="hover:text-blue-400 transition-colors">
                      +40 123 456 789
                    </a>
                  </p>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1 text-white text-lg">Email</h4>
                  <p className="text-gray-400 text-base">
                    <a href="mailto:contact@libra.ro" className="hover:text-blue-400 transition-colors">
                      contact@libra.ro
                    </a>
                  </p>
                </div>
              </div>

              <div className="border border-gray-700 rounded-lg p-4 flex items-start">
                <div className="flex-shrink-0 bg-gray-800 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold mb-1 text-white text-lg">Program</h4>
                  <p className="text-gray-400 text-base">Luni - Vineri: 9:00 - 18:00</p>
                  <p className="text-gray-400 text-base">Sâmbătă - Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
