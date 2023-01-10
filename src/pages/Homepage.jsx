import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import Share from "../parts/Homepage/Share";
import Decorations from "../parts/Homepage/Decorations";
import Accessory from "../parts/Homepage/Accessory";
import Send from "../components/Send";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Share />
      <Decorations />
      <Accessory />
      <Send />
    </>
  );
};
