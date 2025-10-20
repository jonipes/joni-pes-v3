import React from "react";

export default function Efootball(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">⚽ EFOOTBALL ZONE</h1>
        <p className="text-gray-300 mb-6">
          Selamat datang di halaman custom khusus <span className="text-pink-400">EFOOTBALL Mobile</span> by <b>JONI PES</b>.
        </p>
        <div className="bg-purple-800/50 border border-purple-500 rounded-2xl p-6 mb-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-3">Update & Patch</h2>
          <p className="text-gray-200">Semua file custom pack dirancang untuk kompatibilitas versi terbaru.</p>
        </div>
        <a href="https://t.me/jonipesstore" target="_blank" className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full shadow-lg">
          🔗 Hubungi Kami di Telegram
        </a>
      </div>
    </div>
  );
}
