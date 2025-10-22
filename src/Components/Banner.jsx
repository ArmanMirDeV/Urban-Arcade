import React from 'react';
import Slider from './Slider';
import PopularGames from './PopularGames';

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl md:text-6xl font-bold  mb-4 flex-row font-mono text-center">
          <span>"Discover,</span> <br /> Play, Support{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Indie Games
          </span>
          ."
        </h1>
        <p>
          <span className="font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-mono text-xl">
            Urban_Arcade –
          </span>{" "}
          Your ultimate game hub. Explore, discover, and support indie games
          with detailed info and easy access to play or install your favorites.
        </p>
      </div>
      <Slider />
      <PopularGames />
    </div>
  );
};

export default Banner;