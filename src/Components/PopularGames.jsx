import { useState, useEffect } from "react";
import { PiGameControllerFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router";

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch("/games.json");
        const data = await res.json();

        // Sort by rating (desc) and take top 12
        const sorted = data
          .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
          .slice(0, 12);

        setGames(sorted);
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleClick = (id) => navigate(`/game/${id}`);

  return (
    <section className="px-6 py-12 text-white">
      <h2 className="text-4xl  text-pink-300  flex font-bold justify-center items-center mb-10 font-mono gap-10 tracking-wide">
        Popular Games <PiGameControllerFill />
      </h2>

      {games.length === 0 ? (
        <p className="text-center text-gray-300">Loading popular games...</p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => handleClick(game.id)}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300"
            >
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 text-purple-400 font-mono">
                  {game.title}
                </h3>
                <p className="text-gray-300 mb-1">
                  <span className="font-semibold text-gray-400">Category:</span>{" "}
                  {game.category}
                </p>
                <p className="text-blue-400 font-bold mt-2">
                  ⭐ Rating: {game.ratings}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/all-games" className=" flex items-center justify-center mt-10">
        <button
          className="  btn m-2 p-2 bg-purple-400  text-3xl text-center cursor-pointer hover:scale-105 hover:shadow-purple-500/40 transition-transform duration-300
      "
        >
          Explore More
        </button>
      </Link>
    </section>
  );
};

export default PopularGames;
