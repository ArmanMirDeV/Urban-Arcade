import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {
  FaTwitch,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSpotify,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl">
      {/* Header background */}
      <div className="relative h-72 bg-[url('/images/minecraft-bg.jpg')] bg-cover bg-center rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Profile info overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 flex flex-col md:flex-row items-center gap-6">
          <img
            src={
              user?.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            }
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-xl object-cover"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">
              {user?.displayName || "Your Name"}
            </h2>
            <p className="text-purple-400">@{user?.displayName || "RuxPlay"}</p>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="flex justify-center gap-6 text-purple-400 text-2xl mt-24 mb-10">
        <FaTwitch className="hover:text-purple-300 cursor-pointer" />
        <FaTwitter className="hover:text-purple-300 cursor-pointer" />
        <FaFacebookF className="hover:text-purple-300 cursor-pointer" />
        <FaInstagram className="hover:text-purple-300 cursor-pointer" />
        <FaSpotify className="hover:text-purple-300 cursor-pointer" />
        <FaDribbble className="hover:text-purple-300 cursor-pointer" />
      </div>

      {/* Bio */}
      <div className="max-w-3xl mx-auto text-center text-gray-300 px-4">
        <p className="italic text-lg">
          “Hey there! Welcome to my official gaming profile. Here you'll find
          all the games I love and the adventures I stream daily. Grab your
          snacks and let’s play!”
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 pb-20">
        {[
          { title: "Minecraft", img: "/images/minecraft.jpg" },
          { title: "Forza Horizon 3", img: "/images/forza.jpg" },
          { title: "GTA V", img: "/images/gta.jpg" },
          { title: "Cities Skylines", img: "/images/cities.jpg" },
          { title: "Watch Dogs 2", img: "/images/watchdogs.jpg" },
        ].map((game, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <img
              src={game.img}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 text-center font-semibold">{game.title}</div>
          </div>
        ))}
      </div>

      {/* Update button */}
      <div className="text-center pb-10">
        <Link to="/update-user">
          <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold shadow-md">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
