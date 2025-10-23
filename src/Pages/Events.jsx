import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Events = () => {
  const [events, setEvents] = useState([]);

  // Sample events data (replace with API or JSON fetch)
  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: "Call of Duty Tournament",
        date: "2025-11-10",
        time: "5:00 PM - 9:00 PM",
        description: "Join the ultimate COD battle and win exclusive prizes!",
        image: "/assets/event1.jpg",
      },
      {
        id: 2,
        title: "Indie Game Spotlight",
        date: "2025-11-15",
        time: "3:00 PM - 6:00 PM",
        description: "Discover amazing indie games and chat with developers.",
        image: "/assets/event2.jpg",
      },
      {
        id: 3,
        title: "Arcade Speedrun Challenge",
        date: "2025-11-20",
        time: "4:00 PM - 8:00 PM",
        description:
          "Compete in classic arcade games for top leaderboard spots!",
        image: "/assets/event3.jpg",
      },
    ];
    setEvents(sampleEvents);
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-12">
        Upcoming Events
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transform transition"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #e100ff" }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">
                {event.title}
              </h3>
              <p className="text-gray-300 mb-1">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="text-gray-200 mb-4">{event.description}</p>
              <button className="px-4 py-2 bg-pink-500 hover:bg-purple-500 text-white rounded-lg font-semibold shadow-lg transition">
                Register
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
