import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Gamepad2, Heart, Target, Compass } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-[#0f0f15] text-gray-100">
      {/* ================= HEADER ================= */}
      <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24 px-6 text-center rounded-b-3xl rounded-t-xl overflow-hidden">
        {/* Floating Shapes Animation */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-purple-400 opacity-30 rounded-full blur-2xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          About Urban Arcade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
        >
          Discover, explore, and support the future of indie gaming through a
          modern, immersive platform built for players and creators.
        </motion.p>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="container mx-auto py-20 px-6 grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-10 bg-[#02182B] border border-gray-700 rounded-2xl shadow-xl"
        >
          <Target className="text-purple-400 w-14 h-14 mb-5" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-relaxed">
            To empower indie developers with a high-visibility platform while
            giving gamers access to unique, creative, and meaningful gaming
            experiences.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-10 bg-[#02182B] border border-gray-700 rounded-2xl shadow-xl"
        >
          <Compass className="text-indigo-400 w-14 h-14 mb-5" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            A globally recognized ecosystem where indie games thrive and
            innovation becomes the heart of gaming culture.
          </p>
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Core Values
        </h2>

        <div className="container mx-auto grid md:grid-cols-3 gap-10">
          {/* Passion */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-[#02182B] rounded-xl shadow-lg text-center border border-gray-700"
          >
            <Heart className="text-red-400 w-14 h-14 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Passion</h3>
            <p className="text-gray-400 mt-2">
              Building games with heart, soul, and unfiltered creativity.
            </p>
          </motion.div>

          {/* Innovation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-[#02182B] rounded-xl shadow-lg text-center border border-gray-700"
          >
            <Rocket className="text-purple-400 w-14 h-14 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-gray-400 mt-2">
              Encouraging bold new concepts that push gaming forward.
            </p>
          </motion.div>

          {/* Community */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-[#02182B] rounded-xl shadow-lg text-center border border-gray-700"
          >
            <Users className="text-blue-400 w-14 h-14 mx-auto mb-5" />
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-gray-400 mt-2">
              Bringing players and developers together in one united platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#15151c] py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Our Journey
        </h2>

        <div className="container mx-auto space-y-12">
          {[
            {
              year: "August-25",
              title: "Idea Born",
              desc: "The Urban Arcade concept was born—focused on giving indie games a global stage.",
            },
            {
              year: "September-25",
              title: "Platform Development",
              desc: "We engineered a fast, modern, user-centric platform from the ground up.",
            },
            {
              year: "November-25",
              title: "Community Expansion",
              desc: "Thousands of developers and gamers joined, forming a thriving ecosystem.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="w-5 h-5 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold">
                  {item.year} — {item.title}
                </h3>
                <p className="text-gray-400 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Urban Arcade in Numbers
        </h2>

        <div className="container mx-auto grid md:grid-cols-4 gap-10 text-center">
          {[
            { num: "1500+", text: "Indie Games", color: "text-purple-400" },
            { num: "400+", text: "Developers", color: "text-indigo-400" },
            { num: "50k+", text: "Active Gamers", color: "text-red-400" },
            { num: "98%", text: "Satisfaction", color: "text-green-400" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              className="p-6 bg-[#02182B] rounded-xl shadow-lg border border-gray-700"
            >
              <h3 className={`text-4xl font-extrabold ${item.color}`}>
                {item.num}
              </h3>
              <p className="text-gray-400 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24 px-6 text-center rounded-t-3xl rounded-b-xl">
        <h2 className="text-4xl font-extrabold mb-4">
          Be a Part of the Future of Gaming
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-10 text-gray-200">
          Whether you’re a game creator or an explorer searching for something
          new— Urban Arcade welcomes you.
        </p>

        <motion.a
          whileHover={{ scale: 1.07 }}
          href="/all-games"
          className="bg-white text-indigo-700 font-semibold px-10 py-4 rounded-xl shadow-lg"
        >
          Explore Games
        </motion.a>
      </section>
    </div>
  );
}
