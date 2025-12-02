import React from "react";
import logo from "../assets/arcade-machine.png";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#02182B] max-w-7xl mx-auto rounded-2xl m-4 text-gray-300 px-8 py-6">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Logo + Name */}
        <Logo />

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
