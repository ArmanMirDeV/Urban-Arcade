import React from "react";
import { motion } from "framer-motion";
import { Gamepad2, ExternalLink } from "lucide-react";

const games = [
  {
    name: "Run 3",
    genre: "Platform / Runner",
    link: "https://poki.com/en/g/run-3",
    img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/d3c19e9b-9b7b-4a54-9cb5-6188a5bd7d3b/run-3.png",
  },
  {
    name: "Shell Shockers",
    genre: "Shooter / Multiplayer",
    link: "https://poki.com/en/g/shell-shockers",
    img: "https://m.media-amazon.com/images/M/MV5BZmI3ZmUwMzYtYjlkMC00NTA5LTgwMzUtZjc0MDBhNjYyMDZhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    name: "Moto X3M",
    genre: "Racing / Bike",
    link: "https://poki.com/en/g/moto-x3m",
    img: "https://imgs.crazygames.com/moto-x3m_1x1/20231122033955/moto-x3m_1x1-cover?format=auto&quality=100&metadata=none&width=1200",
  },
  {
    name: "Paper.io 2",
    genre: "Arcade / .io",
    link: "https://paper-io.com/",
    img: "https://paperiogame.io/data/image/game/paper-io-game.jpg",
  },
  {
    name: "Fireboy and Watergirl",
    genre: "Puzzle / Co‑op",
    link: "https://poki.com/en/g/fireboy-and-watergirl-the-forest-temple",
    img: "https://thiefpuzzle.io/data/image/game/fireboy-and-watergirl.jpg",
  },
  {
    name: "Bad Ice‑Cream",
    genre: "Arcade",
    link: "https://poki.com/en/g/bad-ice-cream",
    img: "https://i.ytimg.com/vi/ZBnvIxf74cU/hqdefault.jpg",
  },
  {
    name: "Red Ball 4",
    genre: "Platform",
    link: "https://poki.com/en/g/red-ball-4",
    img: "https://www.fdg-entertainment.com/wp-content/uploads/2017/07/red-ball-4-tile-1920x0-c-default.jpg",
  },
  {
    name: "Venge.io",
    genre: "Shooter / .io",
    link: "https://poki.com/en/g/venge-io",
    img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/a2ddd7d16a599f8f01b65a3bc453e698/venge-io.png",
  },
];

export default function PlayNow() {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-white/10 mt-12 rounded-2xl  py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-pink-300 font-bold"
        >
          Play Now
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-400 mt-4 max-w-2xl mx-auto"
        >
          Discover and play some of the most exciting online games instantly!
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {games.map((game, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={game.img}
              alt={game.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-1">{game.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{game.genre}</p>
              <p className="text-yellow-400 font-semibold mb-3">
                ⭐ {game.rating}
              </p>
              <a
                href={game.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-500 transition"
              >
                <Gamepad2 size={18} /> Play Now <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
