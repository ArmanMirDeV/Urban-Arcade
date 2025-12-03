import React from "react";
import Banner from "../Components/Banner";
import NewsLetter from "../Components/NewsLetter";
import Testimonials from "../Components/Testimonials";
import PlayNow from "../Components/PlayNow";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <NewsLetter />
      <PlayNow />
      <Testimonials />
    </div>
  );
};

export default HomePage;
