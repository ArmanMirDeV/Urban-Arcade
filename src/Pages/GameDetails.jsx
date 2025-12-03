import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar, FaArrowLeft, FaDownload, FaPlay } from "react-icons/fa";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
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

  const tabs = [
    { id: "info", label: "Info" },
    { id: "system", label: "System Req." },
    { id: "events", label: "Events" },
    { id: "leaderboards", label: "Leaderboards" },
    { id: "awards", label: "Awards & Achievements" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1c1b2f] to-[#0a0a1a] text-white relative overflow-hidden">
      {/* Neon Background Circles */}
      <div className="absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-2xl top-1/3 left-1/2 animate-spin-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto p-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-400 hover:text-white mb-6 transition duration-300"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_#a855f7] mb-10 border border-white/20 backdrop-blur-lg">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-[450px] object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 md:p-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_#ff00ff] animate-text">
              {game.title}
            </h1>
            <div className="flex items-center gap-3 text-yellow-400">
              <FaStar />{" "}
              <span className="font-semibold text-xl">{game.ratings}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_20px_#ff00ff]"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_0_30px_rgba(147,51,234,0.4)] space-y-6 animate-fadeIn">
          {activeTab === "info" && (
            <>
              <p>
                <span className="text-pink-400 font-semibold">Category:</span>{" "}
                {game.category}
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Developer:
                </span>{" "}
                {game.developer}
              </p>
              <p>
                <span className="text-purple-400 font-semibold">
                  Publisher:
                </span>{" "}
                {game.publisher}
              </p>
              <p>
                <span className="text-blue-400 font-semibold">
                  Release Date:
                </span>{" "}
                {game.releaseDate}
              </p>
              <p>
                <span className="text-green-400 font-semibold">Platforms:</span>{" "}
                {game.platforms.join(", ")}
              </p>
              <p>
                <span className="text-yellow-400 font-semibold">
                  Multiplayer:
                </span>{" "}
                {game.multiplayer ? "Yes" : "No"}
              </p>
              <p className="leading-relaxed">{game.description}</p>
              <p>
                <span className="text-pink-400 font-semibold">Tags:</span>{" "}
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-white/20 px-3 py-1 rounded-full mr-2 mb-2 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </p>

              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 px-6 py-2.5 rounded-full font-semibold text-white shadow-[0_0_20px_#ff00ff] transition duration-300"
                >
                  <FaDownload /> Download
                </a>
                {game.trailerLink && (
                  <a
                    href={game.trailerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-full font-semibold transition duration-300"
                  >
                    <FaPlay /> Trailer
                  </a>
                )}
              </div>
            </>
          )}

          {activeTab === "system" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-pink-400 mb-2">Minimum:</h3>
                <ul className="list-disc list-inside">
                  {Object.entries(game.systemRequirements.minimum).map(
                    ([k, v]) => (
                      <li key={k}>
                        <span className="font-semibold">{k}:</span> {v}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-400 mb-2">
                  Recommended:
                </h3>
                <ul className="list-disc list-inside">
                  {Object.entries(game.systemRequirements.recommended).map(
                    ([k, v]) => (
                      <li key={k}>
                        <span className="font-semibold">{k}:</span> {v}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}

          {activeTab === "events" && (
            <ul className="list-disc list-inside space-y-2">
              {game.events.map((ev) => (
                <li key={ev.id}>
                  <span className="font-semibold">{ev.name}:</span>{" "}
                  {ev.description} ({ev.startDate} - {ev.endDate})
                </li>
              ))}
            </ul>
          )}

          {activeTab === "leaderboards" && (
            <ul className="list-disc list-inside">
              {game.leaderboards.map((lb) => (
                <li key={lb.mode}>
                  <span className="font-semibold">{lb.mode}:</span>{" "}
                  {lb.topScore} pts
                </li>
              ))}
            </ul>
          )}

          {activeTab === "awards" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-pink-400 mb-2">Awards:</h3>
                <ul className="list-disc list-inside">
                  {game.awards.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-purple-400 mb-2">
                  Achievements:
                </h3>
                <ul className="list-disc list-inside">
                  {game.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Screenshots */}
        <div className="mt-10 grid md:grid-cols-3 gap-4 animate-fadeIn">
          {game.screenshots.map((shot, idx) => (
            <img
              key={idx}
              src={shot}
              alt={`${game.title}-screenshot-${idx}`}
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
