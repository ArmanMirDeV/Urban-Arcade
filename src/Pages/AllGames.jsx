import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa";

const AllGames = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // asc / desc
  const [filterCategory, setFilterCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  // Handle game click
  const handleClick = (id) => {
    navigate(`/game/${id}`);
  };

  // Handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredGames].sort((a, b) =>
      order === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setFilteredGames(sorted);
  };

  // Handle filtering
  const handleFilter = (category) => {
    setFilterCategory(category);
    const filtered =
      category === "All" ? games : games.filter((g) => g.category === category);
    const sorted = [...filtered].sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
    setFilteredGames(sorted);
  };

  // Get unique categories
  const categories = ["All", ...new Set(games.map((g) => g.category))];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_#a855f7]">
          All Games Library
        </h2>

        <div className="flex-1 md:flex gap-8">
          {/* Sticky Sidebar */}
          <div className="md:w-64 mb-5 flex-shrink-0 sticky md:ml-[-300px]  self-start">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mt-6 mb-4">Sort</h3>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSort("asc")}
                  className={`px-4 py-2 rounded-full font-semibold text-sm text-left ${
                    sortOrder === "asc"
                      ? "bg-pink-500 text-white"
                      : "bg-white/10 text-gray-200 hover:bg-white/20"
                  } transition`}
                >
                  Title A-Z
                </button>
                <button
                  onClick={() => handleSort("desc")}
                  className={`px-4 py-2 rounded-full font-semibold text-sm text-left ${
                    sortOrder === "desc"
                      ? "bg-pink-500 text-white"
                      : "bg-white/10 text-gray-200 hover:bg-white/20"
                  } transition`}
                >
                  Title Z-A
                </button>
              </div>

              <h3 className="text-xl  hidden md:block font-bold mb-4">
                Filter by Category
              </h3>
              <div className="md:flex hidden flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleFilter(cat)}
                    className={`px-4 py-2 rounded-full font-semibold text-sm text-left ${
                      filterCategory === cat
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-gray-200 hover:bg-white/20"
                    } transition`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="flex-1 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center ">
            {filteredGames.length === 0 ? (
              <p className="text-white/70 text-lg col-span-full">
                No games found...
              </p>
            ) : (
              filteredGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => handleClick(game.id)}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-[0_0_25px_#a855f7] hover:-translate-y-2 transform transition-all duration-300 cursor-pointer w-full max-h-96"
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
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllGames;
