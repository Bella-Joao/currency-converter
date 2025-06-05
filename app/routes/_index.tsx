import { Link } from "@remix-run/react";

export default function Index() 
{
  return (
   <div className="min-h-screen flex flex-col bg-[#05051F] text-white">

      {/* header */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#111827]shadow">
        <div className="text-xl font-bold text-blue-600">Mechhive</div>
        <nav className="flex items-center gap-6">

          <a href="https://skine.com" target="_blank" rel="noreferrer" className="text-sm hover:underline">Skine</a>
          <a href="https://rewarble.com" target="_blank" rel="noreferrer" className="text-sm hover:underline">Rewarble</a>
          
          <Link
            to="/sign-in"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Inloggen
          </Link>
        </nav>
      </header>


      {/* intro */}
     <main className="flex-grow max-w-4xl mx-auto p-8 text-center">

        <h1 className="text-4xl font-bold mb-4 text-blue-700">Welkom bij de Currency Converter</h1>
        <p className="text-lg mb-10 text-gray-600">
          Reken razendsnel bedragen om naar andere valuta met actuele wisselkoersen. Toegang tot de converter is alleen mogelijk na inloggen.
        </p>


        {/* skine / rewarble */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {/* skine */}
        <div className="p-6 rounded-xl bg-[#0f172a] text-white shadow-[inset_0_0_10px_#0ea5e9] border border-sky-500 hover:shadow-blue-500/40 hover:ring-2 hover:ring-blue-400 transition-all">
          <h2 className="text-2xl font-semibold text-sky-400 mb-2">Wat is Skine?</h2>
          <p className="text-gray-300">
            Skine is een platform waar je digitale cadeaubonnen kunt kopen voor populaire diensten zoals PlayStation, Google Play en meer. Alles snel, veilig en met korting.
          </p>
        </div>


        {/* rewarble */}
        <div className="p-6 rounded-xl bg-[#0f172a] text-white shadow-[inset_0_0_10px_#a855f7] border border-purple-500  hover:shadow-purple-500/40 hover:ring-2 hover:ring-purple-400 transition-all">
          <h2 className="text-2xl font-semibold text-purple-300 mb-2">Wat is Rewarble?</h2>
          <p className="text-gray-300">
            Rewarble laat je jouw tegoed verzilveren voor honderden producten, directe uitbetalingen naar PayPal of cadeaubonnen naar keuze. Jij bepaalt!
          </p>
        </div>
      </div>


        {/* samenwerking */}
        <h2 className="text-2xl font-bold mb-2 text-blue-700 ">Hoe werken Skine & Rewarble samen?</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Skine en Rewarble vormen samen een ecosysteem. Bij Skine koop je een digitale giftcard. Via Rewarble verzilver je dat tegoed voor wat jij wilt:
          games, geld, of cadeaus. Het is snel, efficiënt en helemaal digitaal.
        </p>
      </main>


      {/* footer */}
      <footer className="bg-[#05051F] text-gray-500 text-center text-sm py-6">
        © {new Date().getFullYear()} Mechhive - by João Gessel
      </footer>

    </div>
  );
}
