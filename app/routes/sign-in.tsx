// João van Gessel – Sign-in pagina
// Beschrijving: Laat de gebruiker inloggen met e-mail en wachtwoord.
// Toegang is nodig om de valuta converter te gebruiken.


import { Form, Link } from "@remix-run/react";
import { users } from "~/PersLib/users";
import { redirect, type ActionFunctionArgs } from "@remix-run/node";


export default function SignIn() 
{
  return (
    <div className="min-h-screen flex flex-col text-white">

      {/* header */}
      <header className="flex justify-between items-center px-6 py-4">

        {/* Logo link */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logoMechhive.png" alt="Mechhive Logo" className="w-14 h-12" />
        </Link>
      </header>

      {/* main */}
      <main className="flex-grow flex items-center justify-center px-4">

        <div className="bg-[#0f172a] rounded-xl p-8 shadow-[0_0_25px_#3b82f6] border border-blue-600 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-2">Inloggen</h1>
          <p className="text-sm mb-6">
            Log in om toegang te krijgen tot de valuta converter
          </p>

          {/* form */}
          <Form method="post" className="space-y-4 text-left">

            {/* e-mail label */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                E-mailadres
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded bg-[#1e293b] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/*  wachtwoord label */}
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
                Wachtwoord
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-4 py-2 rounded bg-[#1e293b] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-[#650AF9] text-[#0F172A] hover:text-white font-semibold py-2 rounded transition"
            >
              Inloggen
            </button>

          </Form>
        </div>
        
      </main>
    </div>
  );
}


//logica 
export async function action({ request }: ActionFunctionArgs) 
{
  //haal formuliergegevens op
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  //controleer of email + wachtwoord klopt met users.ts
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  //als gebruiker bestaat → redirect naar converterpagina
  if (user) {
    return redirect("/currency-converter");
  }
}
