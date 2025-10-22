import { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const AllGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  const handleClick = (id) => {
    navigate(`/game/${id}`);
  };

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">All Games</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transform transition duration-300"
            onClick={() => handleClick(game.id)}
          >
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full object-fill h-48 "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
              <p className="text-gray-600 mb-1">Category: {game.category}</p>
              <p className="text-gray-600 mb-1">Developer: {game.developer}</p>
              <p className="text-yellow-500 font-bold mb-2">
                Rating: {game.ratings}
              </p>
              <a
                href={game.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
