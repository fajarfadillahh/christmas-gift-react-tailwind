import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import Share from "../parts/Homepage/Share";
import Decorations from "../parts/Homepage/Decorations";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Share />
      <Decorations />
    </>
  );
};
