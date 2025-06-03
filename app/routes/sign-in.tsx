//react component aanmaken "SignIn"
export default function SignIn() {
  return (
    <main className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Inloggen</h1>

      <form method="post" className="w-full max-w-sm bg-white p-6 rounded shadow-md">

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mailadres
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Wachtwoord
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Inloggen
        </button>
        
      </form>
    </main>
  );
}
