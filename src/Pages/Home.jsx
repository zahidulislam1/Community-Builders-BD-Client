import React from "react";
import Banner from "../Component/Banner";
import GalleryCard from "../Component/GalleryCard";
import NewsletterCard from "../Component/NewsletterCard";
import FeaturesCard from "../Component/FeaturesCard";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturesCard></FeaturesCard>
      <GalleryCard></GalleryCard>
      <NewsletterCard></NewsletterCard>
    </div>
  );
};

export default Home;
