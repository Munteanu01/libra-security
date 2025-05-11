export default function PoliticaCookie() {
  return (
    <div className="container mx-auto px-4 py-12 mt-20 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6">Politica de Cookie-uri</h1>
      <p>Ultima actualizare: <strong>11.05.2025</strong></p>
      <h2 className="text-2xl font-semibold mt-8">Ce sunt cookie-urile?</h2>
      <p className="mt-4">Fișiere de mici dimensiuni stocate pe dispozitivul dvs. pentru a ajuta site-ul să rețină preferințele și activitatea dvs.</p>
      <h2 className="text-2xl font-semibold mt-8">Tipuri de cookie-uri utilizate:</h2>
      <ul className="list-disc ml-6 mt-4">
        <li>Cookie-uri esențiale (pentru funcționarea site-ului)</li>
        <li>Cookie-uri de analiză (Google Analytics)</li>
        <li>Cookie-uri de marketing (doar cu acordul dvs.)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Cum puteți controla cookie-urile?</h2>
      <p className="mt-4">Prin setările browserului sau din bannerul de consimțământ afișat la prima vizită.</p>
    </div>
  );
}