"use client"

import { Users, Award, Target, CheckCircle2 } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="despre" className="py-14 bg-site-bg-main relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-site-text-primary">Despre Noi</h2>
          <div className="w-20 h-1 bg-site-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Prima coloană - Prezentare Generală */}
          <div className="bg-site-bg-card p-8 rounded-lg shadow-xl h-full">
            <h3 className="text-2xl font-bold text-site-text-accent mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6" /> PREZENTARE GENERALĂ
            </h3>
            <p className="text-site-text-primary leading-relaxed mb-6">
              C&G LIBRA SECURITY SRL este o companie înființată în 2015. Autorizată IGSU și IGPR pentru efectuarea
              lucrărilor de instalare a sistemelor de securitate și a sistemelor de detecție și semnalizare la incendiu.
            </p>
            <p className="text-site-text-primary leading-relaxed mb-8">
              Suntem o echipă specializată și dedicată, cu experiență în furnizarea de soluții tehnice avansate pentru
              protejarea activelor și informațiilor valoroase ale organizației dumneavoastră.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-site-bg-card-alt p-4 rounded-lg">
                <div className="text-3xl font-bold text-site-text-accent mb-1">7+</div>
                <div className="text-sm text-site-text-secondary">Ani de experiență</div>
              </div>
              <div className="bg-site-bg-card-alt p-4 rounded-lg">
                <div className="text-3xl font-bold text-site-text-accent mb-1">100+</div>
                <div className="text-sm text-site-text-secondary">Proiecte finalizate</div>
              </div>
              <div className="bg-site-bg-card-alt p-4 rounded-lg">
                <div className="text-3xl font-bold text-site-text-accent mb-1">50+</div>
                <div className="text-sm text-site-text-secondary">Clienți mulțumiți</div>
              </div>
              <div className="bg-site-bg-card-alt p-4 rounded-lg">
                <div className="text-3xl font-bold text-site-text-accent mb-1">15+</div>
                <div className="text-sm text-site-text-secondary">Specialiști</div>
              </div>
            </div>
          </div>

          {/* A doua coloană - Misiune, Valori, Certificări */}
          <div className="grid grid-cols-1 gap-6 h-full">
            <div className="bg-site-bg-card p-6 rounded-lg shadow-lg border-l-4 border-site-primary hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-xl font-bold text-site-text-accent mb-4 flex items-center">
                <Target className="mr-3 h-6 w-6" /> MISIUNE
              </h3>
              <p className="text-site-text-primary leading-relaxed flex-grow">
                Ne dorim ca această firmă să fie iubită de clienți și furnizori! Noi suntem soluția pe care o caută
                clienții noștri!
              </p>
            </div>

            <div className="bg-site-bg-card p-6 rounded-lg shadow-lg border-l-4 border-site-primary hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-xl font-bold text-site-text-accent mb-4 flex items-center">
                <Award className="mr-3 h-6 w-6" /> VALORI
              </h3>
              <p className="text-site-text-primary leading-relaxed flex-grow">
                Tot ceea ce ne dorim este să facem clientul nostru să se simtă în "casa" lui "acasă".
              </p>
            </div>

            <div className="bg-site-bg-card p-6 rounded-lg shadow-lg border-l-4 border-site-primary hover:shadow-xl transition-shadow h-full flex flex-col">
              <h3 className="text-xl font-bold text-site-text-accent mb-4 flex items-center">
                <CheckCircle2 className="mr-3 h-6 w-6" /> CERTIFICĂRI
              </h3>
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-site-primary rounded-full mr-2"></div>
                  <span className="text-site-text-primary">Autorizare IGSU</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-site-primary rounded-full mr-2"></div>
                  <span className="text-site-text-primary">Autorizare IGPR</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-site-primary rounded-full mr-2"></div>
                  <span className="text-site-text-primary">ISO 9001</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-site-primary rounded-full mr-2"></div>
                  <span className="text-site-text-primary">ISO 14001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
