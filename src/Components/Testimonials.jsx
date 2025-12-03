import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Pro Gamer",
    comment:
      "Urban Arcade completely changed how I discover indie games. The UI is clean, fast, and exciting!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Riya Verma",
    role: "Content Creator",
    comment:
      "The game library is insane. So many underrated gems! And the community events are super fun.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Daniel Smith",
    role: "Indie Game Developer",
    comment:
      "Best platform to showcase my indie games. Great visibility, smooth uploads, and supportive players.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Sophia Lee",
    role: "Game Reviewer",
    comment:
      "A refreshing platform! Urban Arcade highlights creativity over hype. I discover quality games every week.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Ethan Carter",
    role: "Casual Gamer",
    comment:
      "Such a smooth experience. Everything loads fast, and recommendations feel super accurate!",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=18",
  },
  {
    name: "Mina Patel",
    role: "Twitch Streamer",
    comment:
      "Perfect for finding unique games to stream. My audience loves the indie picks from Urban Arcade!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=56",
  },
  {
    name: "James Walker",
    role: "Game Designer",
    comment:
      "The platform truly supports indie creators. Great visibility and a growing, passionate community.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=14",
  },
  {
    name: "Yuki Nakamura",
    role: "Competitive Player",
    comment:
      "Urban Arcade has some of the most unique mechanics-driven games I’ve ever played. Highly recommended!",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=22",
  },
  {
    name: "Carlos Hernandez",
    role: "Tech Student",
    comment:
      "The UI feels futuristic and smooth. I love how easy it is to bookmark and track games.",
    rating: 4,
    avatar: "https://i.pravatar.cc/100?img=29",
  },
  {
    name: "Emily Green",
    role: "Gaming Blogger",
    comment:
      "A must-have platform for anyone interested in indie gaming. The community engagement is next-level.",
    rating: 5,
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];


export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 mt-12 rounded-2xl bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] border border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl  text-pink-300 font-extrabold mb-4">
          What Players Are Saying
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Real feedback from our growing gaming community.
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900/65 p-8 rounded-3xl shadow-lg mx-4"
            >
              <Quote className="mx-auto opacity-30 mb-4" size={40} />

              <p className="text-lg text-gray-300 mb-6 italic">{t.comment}</p>

              <div className="flex justify-center mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    size={22}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-3 ring-2 ring-purple-500"
                />
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
