import React from 'react';
import logo from "../assets/arcade-machine.png";
import { motion } from "framer-motion";
import { NavLink } from 'react-router';


const Logo = () => {
    return (
      <div>
        {/* Logo */}
        <div className="flex items-center justify-start w-full lg:w-auto">
          <NavLink to="/" className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="logo"
              className="rounded-full border border-pink-400 drop-shadow-[0_0_10px_#8b5cf6] h-10 w-10 sm:h-12 sm:w-12"
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1, 1.1] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-lg sm:text-xl">
                URBAN_ARCADE
              </div>
            </motion.div>
          </NavLink>
        </div>
      </div>
    );
};

export default Logo;