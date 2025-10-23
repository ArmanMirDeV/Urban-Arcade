import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar, FaArrowLeft, FaDownload, FaPlay } from "react-icons/fa";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedGame = data.find((g) => g.id === id);
        setGame(selectedGame);
      })
      .catch((err) => console.error("Error loading game:", err));
  }, [id]);

  if (!game)
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading game details...
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden rounded-2xl">
      {/* Neon glows */}
      <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Back Button */}
      <div className="relative z-10 max-w-6xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-300 hover:text-white mb-6 transition"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_30px_#a855f7] mb-10">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-[450px] object-fit opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#e100ff]">
              {game.title}
            </h1>
            <div className="flex items-center gap-3 text-yellow-400">
              <FaStar /> <span className="font-semibold">{game.ratings}</span>
            </div>
          </div>
        </div>

        {/* Game Info */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-[0_0_20px_rgba(147,51,234,0.4)]">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-2">
                <span className="text-pink-400 font-semibold">Category:</span>{" "}
                {game.category}
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-purple-400 font-semibold">
                  Developer:
                </span>{" "}
                {game.developer}
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {game.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 px-6 py-2.5 rounded-full font-semibold text-white shadow-[0_0_15px_#e100ff] transition duration-300"
                >
                  <FaDownload /> Download Now
                </a>

                {game.trailerLink && (
                  <a
                    href={game.trailerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-full font-semibold transition duration-300"
                  >
                    <FaPlay /> Watch Trailer
                  </a>
                )}
              </div>
            </div>

            {/* Extra Image or Screenshot */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={game.extraImage || game.coverPhoto}
                alt={game.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
