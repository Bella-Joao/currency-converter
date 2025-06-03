//link functie importeren (beter als href)
import { Link } from "@remix-run/react";

//react component aanmaken "Index"
export default function Index() 
{
  return (
    <main className="p-8 text-center">

      <div className="flex justify-end space-x-4 text-sm text-gray-600">
        <a href="https://skine.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Skine
        </a>
        <a href="https://rewarble.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Rewarble
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-4">Welkom bij de Currency Converter</h1>
      <p className="text-lg mb-6">Log in om bedragen om te rekenen naar andere valuta.</p>

      <Link
        to="/sign-in"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Inloggen
      </Link>
    </main>
  );
}
