import React from "react";
import { Link } from "react-router-dom";

import DecorImg1 from "../../assets/images/decoration1.png";
import DecorImg2 from "../../assets/images/decoration2.png";
import DecorImg3 from "../../assets/images/decoration3.png";

export default function Decorations() {
  return (
    <div className="decorations section">
      <div className="decorations__container container grid gap-8">
        <div className="decorations__data justify-self-center text-center">
          <h1 className="decorations__title section-title">
            Give Christmas Decorations <br />
            For Your Home
          </h1>
        </div>

        <div className="decorations__group grid grid-cols-[repeat(auto-fit,minmax(280px,0.9fr))] justify-center gap-12">
          <div className="decorations__content grid gap-8 rounded-xl border-2 border-gray-100 p-8 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={DecorImg1}
              className="decorations__content-img w-[230px] justify-self-center"
              alt="Decoration product img"
            />

            <div className="decorations__content-data justify-self-center text-center">
              <h3 className="decorations__content-title from-gray-900 pb-4 text-xl font-semibold">
                Christmas Bells
              </h3>
              <Link
                to="/"
                className="decorations__content-button inline-flex text-[15px] font-medium text-red-600 hover:underline"
              >
                Go Shopping
              </Link>
            </div>
          </div>

          <div className="decorations__content grid gap-8 rounded-xl border-2 border-gray-100 p-8 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={DecorImg2}
              className="decorations__content-img w-[230px] justify-self-center"
              alt="Decoration product img"
            />

            <div className="decorations__content-data justify-self-center text-center">
              <h3 className="decorations__content-title from-gray-900 pb-4 text-xl font-semibold">
                Christmas Candies
              </h3>
              <Link
                to="/"
                className="decorations__content-button inline-flex text-[15px] font-medium text-red-600 hover:underline"
              >
                Go Shopping
              </Link>
            </div>
          </div>

          <div className="decorations__content grid gap-8 rounded-xl border-2 border-gray-100 p-8 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={DecorImg3}
              className="decorations__content-img w-[230px] justify-self-center"
              alt="Decoration product img"
            />

            <div className="decorations__content-data justify-self-center text-center">
              <h3 className="decorations__content-title from-gray-900 pb-4 text-xl font-semibold">
                Christmas Trees
              </h3>
              <Link
                to="/"
                className="decorations__content-button inline-flex text-[15px] font-medium text-red-600 hover:underline"
              >
                Go Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
