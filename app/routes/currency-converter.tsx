  import { Link, Form } from "@remix-run/react";

export default function CurrencyConverter() 
{
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-6 text-white">

      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2 -mt-6 -ml-4">
          <img src="/logoMechhive.png" alt="Logo" className="w-14 h-12" />
        </Link>
      </header>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-1">Currency Converter</h1>
      <p className="text-sm text-white mb-6">Check live foreign currency exchange rates</p>


     <div className="bg-gradient-to-b from-[#6203FD] via-[#783FDB] to-[#8D76BD] rounded-3xl shadow-xl px-6 py-20 w-full max-w-[1200px] mx-auto">

      <Form method="post" className="flex flex-col gap-6 w-full">

        {/* Rij 1: Amount, From, Arrow, To */}
        <div className="flex flex-wrap justify-between gap-2 w-full">

        {/* Amount */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">Amount</label>
          <input
            type="text"
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
            defaultValue="1,00"
          />
        </div>

        {/* From */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">From</label>
          <select
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
          >
            <option value="USD">🇺🇸 USD - US Dollar</option>
          </select>
        </div>

        {/* Arrow */}
        <div className="flex items-end pb-1">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white text-3xl shadow bg-white/10">
            &#8646;
          </div>
        </div>

        {/* To */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">To</label>
          <select
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
          >
            <option value="EUR">🇪🇺 EUR - Euro</option>
          </select>
        </div>
      </div>


        {/* Rij 2: Resultaattekst + Convert-knop */}
        <div className="flex flex-col sm:flex-row justify-between items-end w-full">

          {/* Resultaattekst */}
          <div className="text-white text-left">
            <p>
              <strong>1.00 US Dollar =</strong>{" "}
              <span className="text-2xl font-bold">0.91494421 Euros</span>
            </p>
            <p className="text-sm text-gray-100 mt-1">
              1 EUR = 1.09296 USD
            </p>
          </div>

          {/* Convert button */}
          <div className="mt-4 sm:mt-0 ">
            <button
              type="submit"
              className="bg-[#ecd9ff] text-black font-bold px-10 py-3 rounded-2xl shadow-md hover:bg-opacity-90 transition"
            >
              Convert
            </button>
          </div>
        </div>

      </Form>
    </div>

    </div>
  );
}
