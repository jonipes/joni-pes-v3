import React from "react";

export default function Efootball() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-purple-300 glow">
        eFootball Mobile
      </h1>
      <p className="max-w-2xl text-center text-gray-300 mb-6">
        Selamat datang di halaman <span className="text-yellow-400">eFootball</span> 🎮  
        Di sini kamu akan menemukan update, event, dan mod eFootball eksklusif dari <b>JONI PES</b>.
      </p>

      <div className="bg-purple-700 bg-opacity-20 p-4 rounded-2xl shadow-lg border border-purple-400 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2 text-purple-200">Fitur eFootball:</h2>
        <ul className="list-disc list-inside text-gray-300 text-left">
          <li>Event mingguan & tantangan baru</li>
          <li>Patch & mod JONI PES</li>
          <li>Custom jersey dan stadion</li>
          <li>Support untuk HP & PC</li>
        </ul>
      </div>

      <a
        href="/"
        className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-full text-white shadow-lg transition-all"
      >
        🔙 Kembali ke Beranda
      </a>
    </div>
  );
}