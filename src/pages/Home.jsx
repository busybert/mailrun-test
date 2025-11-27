import React from "react";

// Import your section components
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Pricing from "../components/Pricing.jsx";
import Services from "../components/Services.jsx";
import Map from "../components/Map.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <Map />
      <Footer />
    </>
  );
};

export default Home;

