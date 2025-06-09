// João van Gessel – currency.server.ts
// Beschrijving: Serverbestand met API-logica voor de valuta converter.
// Bevat de loader om valutalijst op te halen en de action om bedragen om te rekenen.
// Beide functies gebruiken fetch met RapidAPI sleutel en host.


// json functie importeren om data terug te sturen naar de browser
import { json } from "@remix-run/node";

//2 types importen voor de aankomende functies (loader & action)
import type { LoaderFunction, ActionFunction } from "@remix-run/node";

//connectie maken met de API (key en host)
const API_KEY = "4c85a9f7camshf7c311beb85501cp15658bjsn398af9a73188";
const API_HOST = "currency-exchange.p.rapidapi.com";

import { redirect } from "@remix-run/node"; 

//loader functie (valuta lijst ophalen)
export const currencyLoader: LoaderFunction = async ({ request }) => 
    {

        const url = new URL(request.url);
        const from = url.searchParams.get("from");
        const to = url.searchParams.get("to");
        const amount = url.searchParams.get("amount");

        const res = await fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
            method: "GET",
            headers: 
            {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST
            }
    });

  const currencies = await res.json();

  // berekening opnieuw uitvoeren als params aanwezig zijn
  let result = null;
  if (from && to && amount) {
    const response = await fetch(
      `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=${amount}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST
        }
      }
    );
    result = await response.text();
  }

  return json({ currencies, from, to, amount, result });
};



//convert functie 
// action → verwerkt formulier en redirect naar loader-URL
export const currencyAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const amount = formData.get("amount");
  const from = formData.get("from");
  const to = formData.get("to");

  // redirect met params naar loader
  return redirect(`/currency-converter?from=${from}&to=${to}&amount=${amount}`);
};
