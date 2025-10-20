import React from "react";

const games = [
  { id: "efootball", title: "eFootball Mobile", studio: "Konami", img: "/assets/efootball.png", link: "/efootball" },
  { id: "pubg", title: "PUBG Mobile", studio: "Tencent", img: "/assets/pubg.png", link: "#" },
  { id: "mlbb", title: "Mobile Legends", studio: "Moonton", img: "/assets/ml.png", link: "#" },
  { id: "ff", title: "Free Fire", studio: "Garena", img: "/assets/ff.png", link: "#" }
];

export default function Home(){
  return (
    <div className="min-h-screen p-4">
      <header className="flex items-center gap-3 mb-8">
        <img src="/assets/logo.png" alt="JONI PES" className="w-12 h-12 rounded-full glow" />
        <div>
          <h1 className="font-bold text-xl">JONI PES Store</h1>
          <p className="text-sm opacity-70">Game vibe — cepat, aman, support HP & PC</p>
        </div>
      </header>

      <h2 className="text-2xl font-bold mb-4">Populer Game</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map(g => (
          <a key={g.id} href={g.link} target="_blank" rel="noopener noreferrer"
             className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all">
            <img src={g.img} alt={g.title} className="w-full h-28 object-cover rounded-lg mb-3" />
            <div className="font-semibold text-yellow-300">{g.title}</div>
            <div className="text-xs opacity-70">{g.studio}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
