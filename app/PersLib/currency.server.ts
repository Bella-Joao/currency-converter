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


//loader functie (valuta lijst ophalen)
export const currencyLoader: LoaderFunction = async ({ request }) => 
    {

        const url = new URL(request.url);
        const from = url.searchParams.get("from");
        const to = url.searchParams.get("to");
        const amount = url.searchParams.get("amount");

        //verzoek
        const res = await fetch("https://currency-exchange.p.rapidapi.com/listquotes", 
            {
            method: "GET",
            headers: 
            {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": API_HOST
            }
        });

    //data omzetten / returnen
    const data = await res.json();
    return json({ currencies: data, from, to, amount });
};


//convert functie 
export const currencyAction: ActionFunction = async ({ request }) => 
    {
        const formData = await request.formData();

        const amount = formData.get("amount");
        const from = formData.get("from");
        const to = formData.get("to");

        //verzoek
        const response = await fetch(
            `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=${to}&q=${amount}`,
            {
            method: "GET",
            headers: 
            {
                "X-RapidAPI-Key": API_KEY,
                "X-RapidAPI-Host": API_HOST
            }
            }
  );

  //wachten op antwoord en dan omzetten / returnen
  const result = await response.json();
  return json({ result, from, to, amount });
};
