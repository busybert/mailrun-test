import React from "react";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Services from "../components/Services.jsx";
import Pricing from "../components/Pricing.jsx";
import Map from "../components/Map.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MailRun - Helping You Save Time!</title>
        <meta name="description" content="MailRun Orlando – Fast Courier & Pickup Service." />
      </Helmet>
      <Hero />
      <Features />
      <Pricing />
      {/* <About /> */} {/* Removed About component */}
      <Contact />
    </>
  );
};

export default Home;
