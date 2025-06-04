import { Form, Link } from "@remix-run/react";

export default function SignIn() 
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
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Inloggen</h1>
          <p className="text-gray-400 text-sm mb-6">
            Log in om toegang te krijgen tot de valuta converter
          </p>

          {/* form */}
          <Form method="post" className="space-y-4 text-left">
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

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
            >
              Inloggen
            </button>

          </Form>
        </div>
        
      </main>
    </div>
  );
}
