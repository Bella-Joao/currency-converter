// João van Gessel – Currency Converter pagina
// Beschrijving: Toont een formulier waarmee gebruikers valuta kunnen omrekenen.
// Haalt valutalijst op via de loader en voert omrekening uit via action.
// Alleen toegankelijk na succesvolle login.


//haal tools van remix op voor navigatie, formulier en API-data
import { Link, Form, useLoaderData, useActionData } from "@remix-run/react";

//logica importeren van perslib
import { currencyLoader, currencyAction } from "~/PersLib/currency.server";


//koppelen van loader en action van deze pagina aan de externe logica
export const loader = currencyLoader;
export const action = currencyAction;


//pagina + convert functie
export default function CurrencyConverter() {

  //currencies uit de loader halen en in currencies zetten / resultaat van de conversie ophalen uit action
  const { currencies } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  //Kijken of de API nog werkt
  console.log("Currencies uit loader:", currencies);

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
        <div className="flex flex-wrap justify-between gap-2 w-full text-center sm:text-left sm:items-start sm:justify-between">


        {/* Amount */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">Amount</label>
          <input
            name="amount"
            type="number"
            step="0.01"
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
            defaultValue={1.00}
            required
          />
        </div>

        {/* From */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">From</label>
          <select
            name="from"
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
          >
            {/*loop door elke valuta en maak er een <option> van voor de dropdown*/}
            {Array.isArray(currencies) &&
              currencies.map((currency: string) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
      ))}

          </select>
        </div>

        {/* Arrow */}
       <div className="flex justify-center w-full sm:w-auto sm:self-end pb-1">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white text-3xl shadow bg-white/10">
            &#8646;
          </div>
        </div>

        {/* To */}
        <div className="flex flex-col w-full sm:w-[320px]">
          <label className="text-white font-bold mb-1">To</label>
          <select
            name="to"
            className="rounded-2xl px-6 py-4 text-xl bg-[#ecd9ff] text-black font-bold shadow-md focus:outline-none w-full"
          >
             {/*loop door elke valuta en maak er een <option> van voor de dropdown*/}
            {Array.isArray(currencies) &&
              currencies.map((currency: string) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
            ))}

          </select>
        </div>
      </div>


        {/* Rij 2: Resultaattekst + Convert-knop */}
        <div className="flex flex-col items-center sm:items-end sm:flex-row sm:justify-between w-full text-center sm:text-left">
          {/* Resultaattekst */}
          <div className="text-white text-left">
            {actionData && (
            <div className="text-white text-left">
              <p>
                <strong>{actionData.amount} {actionData.from} =</strong>{" "}
                <span className="text-2xl font-bold">
                  {actionData.result} {actionData.to}
                </span>
              </p>
            </div>
          )}
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
