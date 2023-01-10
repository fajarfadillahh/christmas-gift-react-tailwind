import React from "react";
import { Link } from "react-router-dom";

import HeroImg from "../../assets/images/home.png";

export default function Hero() {
  return (
    <div className="hero section">
      <div className="hero__container container grid gap-12 sm:grid-cols-2 sm:items-center lg:max-w-4xl">
        <img
          src={HeroImg}
          className="hero__img w-72 justify-self-center sm:order-2 sm:w-auto"
          alt="Hero image"
        />

        <div className="hero__data justify-self-center">
          <h1 className="hero__title section-title text-[36px] md:text-[52px]">
            Send A Gift For Christmas
          </h1>
          <p className="hero__text section-text md:w-[320px]">
            In these of the year holidays send a gift to your loved one and
            share the happiness at Christmas.
          </p>
          <Link to="/" className="hero__button button inline-flex">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
