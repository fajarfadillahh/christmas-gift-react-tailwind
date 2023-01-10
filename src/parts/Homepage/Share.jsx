import React from "react";
import { Link } from "react-router-dom";

import ShareImg from "../../assets/images/shared.png";

export default function Share() {
  return (
    <div className="share section">
      <div className="share__container container grid gap-12 sm:grid-cols-2 sm:items-center lg:max-w-4xl">
        <div className="share__data justify-self-center text-center sm:text-left">
          <h1 className="share__title section-title">
            Sharing Is The Best Gift <br />
            Christmas
          </h1>
          <p className="share__text section-text">
            Sharing these holidays is the best gift you can give, give a present
            or share your love with the people you love the most and celebrate
            with great happiness.
          </p>
          <Link to="/" className="share__button button inline-flex">
            Send a gift
          </Link>
        </div>

        <img
          src={ShareImg}
          className="share__img w-72 justify-self-center sm:-order-1 sm:w-auto"
          alt="Share image"
        />
      </div>
    </div>
  );
}
