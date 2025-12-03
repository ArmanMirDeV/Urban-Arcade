import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaHome, FaGamepad, FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { motion } from "framer-motion";
import { MdEmojiEvents } from "react-icons/md";
import Logo from "./Logo";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged Out"))
      .catch((error) => toast.error(error.message));
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 text-pink-400 border-b-2 border-pink-500 pb-1 drop-shadow-[0_0_10px_#e100ff]"
      : "flex items-center gap-2 text-gray-300 hover:text-pink-400 transition";

  const links = (
    <>
      <li>
        <NavLink className={linkClasses} to="/">
          <FaHome className="text-lg" /> Home
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClasses} to="/all-games">
          <FaGamepad className="text-lg" /> All Games
        </NavLink>
      </li>

      <li>
        <NavLink className={linkClasses} to="/events">
          <MdEmojiEvents className="text-lg"></MdEmojiEvents>Events
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClasses} to="/about-us">
          <FcAbout className="text-lg "></FcAbout>About Us
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className={linkClasses} to="/my-profile">
            <FaUser className="text-lg" /> Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="relative max-w-7xl mx-auto  z-50">
      <div className="navbar bg-gradient-to-r rounded-3xl m-2 from-[#0f0c29] via-[#302b63] to-[#24243e] shadow-[0_0_20px_#7f00ff,0_0_40px_#e100ff] border-b border-purple-500/20 px-4">
         
        <Logo />

        {/* Desktop Menu on Right */}
        <div className="navbar-end hidden lg:flex flex-1 justify-end">
          <ul className="menu menu-horizontal px-1 flex items-center gap-6">
            {links}
            {user ? (
              <div className="flex items-center gap-4 ml-6">
                <Link to="/my-profile">
                  <img
                    className="h-10 w-10 rounded-full border-2 border-pink-500 shadow-[0_0_10px_#e100ff]"
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="user"
                  />
                </Link>
                <button
                  onClick={handleLogOut}
                  className="px-3 py-1.5 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-sm font-bold shadow-[0_0_10px_#e100ff] transition"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="flex gap-4 ml-6">
                <NavLink className={linkClasses} to="/login">
                  <CiLogin className="text-lg" /> Login
                </NavLink>
                <NavLink className={linkClasses} to="/registration">
                  <SiGnuprivacyguard className="text-lg" /> Register
                </NavLink>
              </div>
            )}
          </ul>
        </div>

        {/* Mobile Dropdown Button */}
        <div className="lg:hidden ml-auto">
          <button
            className="btn btn-ghost text-white"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownOpen && (
        <div className="lg:hidden absolute bg-[#1a1a2e] w-full shadow-lg z-50 py-4 border-t border-purple-500/20">
          <ul className="flex flex-col gap-2 px-4">
            {links}
            {user ? (
              <div className="mt-4 border-t border-purple-500/30 pt-3">
                <Link to="/my-profile">
                  <img
                    className="h-10 m-2 w-10 rounded-full border-2 border-pink-500 shadow-[0_0_10px_#e100ff]"
                    src={
                      user?.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                    }
                    alt="user"
                  />
                </Link>
                <li
                  className="btn bg-pink-500  hover:bg-pink-600 text-white"
                  onClick={handleLogOut}
                >
                  Log Out
                </li>
              </div>
            ) : (
              <>
                <li>
                  <NavLink className={linkClasses} to="/login">
                    <CiLogin className="text-lg" /> Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className={linkClasses} to="/registration">
                    <SiGnuprivacyguard className="text-lg" /> Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}

      {/* Neon glow layer */}
      <div className="absolute top-0 left-0 w-full h-full blur-3xl opacity-30 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 -z-10 animate-pulse"></div>
    </header>
  );
};

export default Navbar;
