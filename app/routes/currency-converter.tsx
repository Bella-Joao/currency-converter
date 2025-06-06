import { Link } from "@remix-run/react";

export default function CurrencyConverter() 
{
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a23] text-white">

      {/* header */}
      <header className="px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold text-blue-500 hover:text-blue-400 cursor-pointer transition"
        >
          Mechhive
        </Link>
      </header>


      {/* main */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-[#0f172a] rounded-xl p-8 shadow-[0_0_25px_#3b82f6] border border-blue-600 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-blue-500 mb-4">Valuta Converter</h1>
          <p className="text-gray-400 text-sm mb-6">
            Vul een bedrag in en kies de valuta die je wilt omrekenen.
          </p>

          <form className="space-y-4 text-left">
            {/* Bedrag invoer */}
            <div>
              <label htmlFor="amount" className="block text-sm text-gray-300 mb-1">
                Bedrag
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                className="w-full px-4 py-2 rounded bg-[#1e293b] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Valuta dropdown */}
            <div>
              <label htmlFor="currency" className="block text-sm text-gray-300 mb-1">
                Valuta
              </label>
              <select
                id="currency"
                name="currency"
                className="w-full px-4 py-2 rounded bg-[#1e293b] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="usd">USD - Amerikaanse Dollar</option>
                <option value="eur">EUR - Euro</option>
                <option value="gbp">GBP - Britse Pond</option>
              </select>
            </div>

            {/* Converteren knop */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
            >
              Converteren
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
