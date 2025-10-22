import { useEffect, useState } from "react";
import { useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedGame = data.find((g) => g.id === id);
        setGame(selectedGame);
      });
  }, [id]);

  if (!game) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-96 object-contain rounded-lg mb-6"
      />
      <h1 className="text-4xl text-purple-500 font-bold mb-4">{game.title}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Category:</strong> {game.category}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Developer:</strong> {game.developer}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Rating:</strong> {game.ratings}
      </p>
      <p className="text-gray-800 mb-4">{game.description}</p>
      <a
        href={game.downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Download Now
      </a>
    </div>
  );
};

export default GameDetails;
