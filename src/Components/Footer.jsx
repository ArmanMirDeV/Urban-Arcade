import React from "react";
import logo from "../assets/arcade-machine.png";
import { FaFacebook, FaGamepad, FaLinkedin, FaUser, FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";
import { FcAbout } from "react-icons/fc";
import { MdEmojiEvents } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" max-w-7xl mx-auto rounded-2xl m-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-white/10 px-8 py-6">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo + Name */}
        <Logo />

        <div className=" text-white p-4 flex justify-center gap-6">
          <a
            href="/all-games"
            className=" flex gap-2 justify-center items-center hover:underline"
          >
            <FaGamepad className="text-lg" /> All Games
          </a>
          <a
            href="/my-profile"
            className="flex gap-2 justify-center items-center hover:underline"
          >
            <FaUser className="text-lg" /> Profile
          </a>
          <a
            href="/events"
            className="flex gap-2 justify-center items-center hover:underline"
          >
            <MdEmojiEvents className="text-lg"></MdEmojiEvents> Events
          </a>
          <a
            href="/about-us"
            className="flex gap-2 justify-center items-center hover:underline"
          >
            <FcAbout className="text-lg "></FcAbout> About Us
          </a>
        </div>
        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="text-sm font-medium mb-2">Social Links</h3>

          <div className="flex justify-center md:justify-end gap-4 text-xl">
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <hr className="border-[#e5e7eb] border-dotted my-4" />

      {/* Copyright */}
      <p className="text-center text-sm text-gray-400">
        Copyright © 2025 – All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
