import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col  text-white">

      {/* header */}
      <header className="flex justify-between items-center px-6 py-4">
        
        {/* Logo link */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logoMechhive.png" alt="Mechhive Logo" className="w-14 h-12" />
        </Link>

        <nav className="flex items-center gap-6">
          <a href="https://skine.com" target="_blank" rel="noreferrer" className="text-sm hover:underline">Skine</a>
          <a href="https://rewarble.com" target="_blank" rel="noreferrer" className="text-sm hover:underline">Rewarble</a>
          <Link
            to="/sign-in"
            className="bg-[#0f172a] px-4 py-2 rounded hover:bg-[#2d0f5c] transition"
          >
            Inloggen
          </Link>
        </nav>
      </header>

      {/* intro */}
      <main className="flex-grow max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text">
          Trusted Global Currency Converter & Money Transfer Solutions
        </h1>

        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Best source for currency conversion, sending money online and tracking exchange rates
        </p>

        {/* info blokken */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Skine */}
          <div className="p-6 rounded-xl bg-[#0f172a] text-white shadow-[inset_0_0_10px_#0ea5e9] border border-sky-500 hover:shadow-blue-500/40 hover:ring-2 hover:ring-blue-400 transition-all">
            <h2 className="text-2xl font-semibold text-sky-400 mb-2">What is Skine?</h2>
            <p className="text-gray-300">
              Skine is a platform where you can purchase digital gift cards for popular services like PlayStation, Google Play, and more. Fast, safe, and discounted.
            </p>
          </div>

          {/* Rewarble */}
          <div className="p-6 rounded-xl bg-[#0f172a] text-white shadow-[inset_0_0_10px_#a855f7] border border-purple-500 hover:shadow-purple-500/40 hover:ring-2 hover:ring-purple-400 transition-all">
            <h2 className="text-2xl font-semibold text-purple-300 mb-2">What is Rewarble?</h2>
            <p className="text-gray-300">
              Rewarble allows you to redeem your credit for hundreds of products, direct PayPal payouts or gift cards of your choice. You decide!
            </p>
          </div>
        </div>

        {/* samenwerking */}
        <h2 className="text-2xl font-bold mb-2">How do Skine & Rewarble work together?</h2>
        <p className="max-w-3xl mx-auto">
          Skine and Rewarble form a complete ecosystem. With Skine you buy a digital gift card. Through Rewarble you redeem it for whatever you want: games, money, or rewards. It’s fast, efficient, and fully digital.
        </p>
      </main>
    </div>
  );
}
