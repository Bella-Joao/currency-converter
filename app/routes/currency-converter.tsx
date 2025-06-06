  import { Link, Form } from "@remix-run/react";

export default function CurrencyConverter() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-6 text-white">

      {/* Header */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center gap-2 -mt-6 -ml-4">
          <img src="/logoMechhive.png" alt="Logo" className="w-14 h-12" />
        </Link>
      </header>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-1">Currency Converter</h1>
      <p className="text-sm text-white mb-6">Check live foreign currency exchange rates</p>

      {/* Form Container */}
      <Form method="post" className="flex flex-wrap justify-center items-start gap-4 px-4 py-9 bg-gradient-to-b from-[#6203FD] via-[#783FDB] to-[#8D76BD] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-w-6xl w-full">

        {/* Amount */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-base text-white font-bold mb-1">Amount</label>
          <input
            type="number"
            step="0.01"
            defaultValue="1.00"
            className="rounded-2xl px-4 py-3 text-lg bg-[#ecd9ff] text-black font-bold shadow-[0_8px_24px_rgba(0,0,0,0.25)] focus:outline-none"
          />
        </div>

        {/* From */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-base text-white font-bold mb-1">From</label>
          <select className=" rounded-2xl px-4 py-3 text-lg bg-[#ecd9ff] text-black font-bold shadow-[0_8px_24px_rgba(0,0,0,0.25)] focus:outline-none">
            <option value="USD">🇺🇸 USD - US Dollar</option>
          </select>
        </div>

        {/* Arrow */}
        <div className="flex items-end sm:mt-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white text-white text-2xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-gradient-to-br from-white/10 to-white/5 hover:scale-105 transition-transform duration-200 translate-y-[7.5px]">
            &#8646;
          </div>
        </div>

        {/* To + Button */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-base text-white font-bold mb-1">To</label>
          <select className="rounded-2xl px-4 py-3 text-lg bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none">
            <option value="EUR">🇪🇺 EUR - Euro</option>
          </select>

         <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="mt-6 mb-5 bg-[#ecd9ff] text-black font-bold px-6 py-3 rounded-2xl shadow-md hover:bg-opacity-90 transition sm:w-[140px]"
          >
            Convert
          </button>
        </div>
        </div>
      </Form>

      {/* test resultaat */}
      <div className="mt-8 text-white text-lg w-full max-w-4xl">
        <p>
          <strong>1.00 US Dollar =</strong>{" "}
          <span className="text-2xl font-bold">0.91494421 Euros</span>
        </p>
        <p className="text-sm text-gray-100 mt-1">
          1 EUR = 1.09296 USD
        </p>
      </div>
    </div>
  );
}
