import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <section className="min-h-screen rounded-2xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#a855f7]">
          All Games Library
        </h2>

        {games.length === 0 ? (
          <p className="text-center text-white/70 text-lg">Loading games...</p>
        ) : (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                onClick={() => handleClick(game.id)}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_#a855f7] hover:-translate-y-2 transform transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={game.coverPhoto}
                    alt={game.title}
                    loading="lazy"
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 px-2 py-1 rounded-md flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                    <FaStar className="text-yellow-400" /> {game.ratings}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-white truncate">
                    {game.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-1">
                    <span className="font-semibold text-pink-400">
                      Category:
                    </span>{" "}
                    {game.category}
                  </p>
                  <p className="text-sm text-gray-300 mb-3">
                    <span className="font-semibold text-purple-400">
                      Developer:
                    </span>{" "}
                    {game.developer}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <a
                      href={game.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-semibold px-4 py-1.5 rounded-full shadow-[0_0_10px_#e100ff] transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Download
                    </a>
                    <button
                      className="text-sm text-blue-400 underline hover:text-blue-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(game.id);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllGames;
