"use client"

import {
  Users,
  Award,
  Target,
  CheckCircle2,
  Clock,
  Briefcase,
  UserCheck,
  UserCog,
  Shield,
  BadgeCheck,
} from "lucide-react"

export default function AboutSection() {
  return (
    <section id="despre" className="pb-12 pt-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
     
       
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white">Despre Noi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main content with improved layout */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {/* Prezentare Generală with statistics inside */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-xl border-t border-gray-800">
            {/* Mobile: Icon on top, text below; Desktop: Icon on left, text on right */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6">
              <div className="bg-blue-600/20 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-white mb-3">PREZENTARE GENERALĂ</h3>
                <p className="text-white leading-relaxed text-lg font-medium">
                  C&G LIBRA SECURITY SRL este o companie înființată în 2015. Autorizată IGSU și IGPR pentru efectuarea
                  lucrărilor de instalare a sistemelor de securitate și a sistemelor de detecție și semnalizare la
                  incendiu.
                </p>
                <p className="text-white leading-relaxed mt-3 text-lg font-medium">
                  Suntem o echipă specializată și dedicată, cu experiență în furnizarea de soluții tehnice avansate
                  pentru protejarea activelor și informațiilor valoroase ale organizației dumneavoastră.
                </p>
              </div>
            </div>

            {/* Statistics section moved inside Prezentare Generală */}
            <div className="border-t border-gray-800 pt-6 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg flex items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Clock className="h-10 w-10 text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">7+</div>
                    <div className="text-base text-gray-300 font-medium">Ani de experiență</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg flex items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Briefcase className="h-10 w-10 text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-base text-gray-300 font-medium">Proiecte finalizate</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg flex items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <UserCheck className="h-10 w-10 text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">50+</div>
                    <div className="text-base text-gray-300 font-medium">Clienți mulțumiți</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-xl shadow-lg flex items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <UserCog className="h-10 w-10 text-blue-500 mr-4" />
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                    <div className="text-base text-gray-300 font-medium">Specialiști</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Misiune și Valori - side by side on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Misiune */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-xl border-t border-gray-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">MISIUNE</h3>
                  <p className="text-white leading-relaxed text-lg font-medium">
                    Ne dorim ca această firmă să fie iubită de clienți și furnizori! Noi suntem soluția pe care o caută
                    clienții noștri!
                  </p>
                </div>
              </div>
            </div>

            {/* Valori */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-xl border-t border-gray-800">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">VALORI</h3>
                  <p className="text-white leading-relaxed text-lg font-medium">
                    Tot ceea ce ne dorim este să facem clientul nostru să se simtă în "casa" lui "acasă".
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificări - with centered heading and line separator */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-xl border-t border-gray-800">
            <div className="lg:flex lg:items-center lg:gap-8">
              {/* Heading and icon - vertically centered */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center md:justify-center lg:justify-start lg:w-1/4 gap-4 mb-6 lg:mb-0">
                <div className="bg-blue-600/20 p-3 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">CERTIFICĂRI</h3>
              </div>

              {/* Line separator */}
              <div className="hidden lg:block lg:h-24 lg:min-h-full">
                <div className="h-full w-[3px] bg-blue-600/30 rounded-full"></div>
              </div>

              {/* Certifications grid */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
                    <Shield className="w-8 h-8 text-blue-500 mr-3" />
                    <span className="text-white font-medium text-lg">Autorizare IGSU</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
                    <Shield className="w-8 h-8 text-blue-500 mr-3" />
                    <span className="text-white font-medium text-lg">Autorizare IGPR</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
                    <BadgeCheck className="w-8 h-8 text-blue-500 mr-3" />
                    <span className="text-white font-medium text-lg">ISO 9001</span>
                  </div>
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg border border-gray-700 flex items-center">
                    <BadgeCheck className="w-8 h-8 text-blue-500 mr-3" />
                    <span className="text-white font-medium text-lg">ISO 14001</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}