"use client"

export default function TimelineSection() {
  const timelineItems = [
    {
      year: "2015",
      title: "Înființarea companiei",
      description:
        "C&G LIBRA SECURITY SRL a fost fondată cu scopul de a oferi servicii de securitate de înaltă calitate.",
      icon: "🏢",
    },
    {
      year: "2016",
      title: "Primele proiecte majore",
      description: "Am început colaborarea cu primii clienți importanți și am finalizat cu succes proiecte complexe.",
      icon: "🚀",
    },
    {
      year: "2018",
      title: "Extinderea serviciilor",
      description: "Am adăugat noi servicii în portofoliul nostru și am extins echipa cu specialiști experimentați.",
      icon: "📈",
    },
    {
      year: "2020",
      title: "Certificări și autorizații",
      description:
        "Am obținut toate certificările și autorizațiile necesare pentru a oferi servicii complete de securitate.",
      icon: "🏆",
    },
    {
      year: "2022",
      title: "Proiecte de anvergură",
      description: "Am implementat soluții de securitate pentru clienți mari din diverse industrii.",
      icon: "🔒",
    },
    {
      year: "Prezent",
      title: "Inovație continuă",
      description: "Continuăm să inovăm și să oferim cele mai avansate soluții de securitate pentru clienții noștri.",
      icon: "💡",
    },
  ]

  return (
    <section id="evolutie" className="py-12 bg-black relative overflow-hidden hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Evoluția Noastră</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative">
          {/* Linia centrală pentru mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-900"></div>

          {timelineItems.map((item, index) => (
            <div key={index} className="mb-6 relative">
              <div className="flex items-center mb-2">
                <div className="bg-blue-600 text-white text-base font-bold rounded-lg px-2 py-1 shadow-md z-10">
                  {item.year}
                </div>
                <div className="ml-2 text-2xl">{item.icon}</div>
              </div>
              <div className="bg-gray-800 rounded-lg shadow-md p-3 ml-8 border-l-4 border-blue-600">
                <h3 className="text-base font-bold text-blue-400 mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              {/* Bullet point pentru fiecare item */}
              <div className="absolute left-4 top-3 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900 transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Linia centrală care se extinde până la secțiunea următoare */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-900 transform -translate-x-1/2"
            style={{ height: "calc(100% + 10px)" }}
          ></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              style={{ marginBottom: index === timelineItems.length - 1 ? "0" : "80px" }}
            >
              {/* Bullet point exact în dreptul divului */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-gray-900 shadow-md z-10"
                style={{ top: index % 2 === 0 ? "20px" : "20px" }}
              ></div>

              {/* Content - alternând stânga-dreapta și decalate vertical */}
              <div className="flex items-stretch">
                {index % 2 === 0 ? (
                  <>
                    {/* Conținut stânga */}
                    <div className="w-1/2 pr-12 text-right">
                      <div className="bg-gray-800 rounded-lg shadow-md p-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ml-auto mr-0 max-w-md">
                        <div className="flex items-center justify-end mb-2">
                          <div className="text-2xl mr-3">{item.icon}</div>
                          <div className="bg-blue-600 text-white text-base font-bold rounded-lg px-3 py-1 shadow-md">
                            {item.year}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                    {/* Spațiu dreapta */}
                    <div className="w-1/2"></div>
                  </>
                ) : (
                  <>
                    {/* Spațiu stânga */}
                    <div className="w-1/2"></div>
                    {/* Conținut dreapta */}
                    <div className="w-1/2 pl-12">
                      <div className="bg-gray-800 rounded-lg shadow-md p-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg mr-auto ml-0 max-w-md">
                        <div className="flex items-center mb-2">
                          <div className="bg-blue-600 text-white text-base font-bold rounded-lg px-3 py-1 shadow-md">
                            {item.year}
                          </div>
                          <div className="text-2xl ml-3">{item.icon}</div>
                        </div>
                        <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Punct final pentru desktop - mai aproape de secțiunea următoare */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[30px] w-6 h-6 bg-blue-600 rounded-full border-4 border-gray-900 shadow-md z-10"></div>
        </div>
      </div>
    </section>
  )
}
