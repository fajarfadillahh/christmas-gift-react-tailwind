import React from "react";
import { RiHeartLine } from "react-icons/ri";

import AccessoryImg1 from "../../assets/images/accessory1.png";
import AccessoryImg2 from "../../assets/images/accessory2.png";
import AccessoryImg3 from "../../assets/images/accessory3.png";
import AccessoryImg4 from "../../assets/images/accessory4.png";
import AccessoryImg5 from "../../assets/images/accessory5.png";

export default function Accessory() {
  return (
    <div className="accessory section">
      <div className="accessory__container container grid gap-12">
        <div className="decorations__data justify-self-center text-center">
          <h1 className="decorations__title section-title">
            New Christmas <br />
            Accessory
          </h1>
        </div>

        <div className="accessory__group grid grid-cols-[repeat(auto-fit,minmax(240px,0.9fr))] justify-center gap-12 lg:max-w-4xl lg:grid-cols-3 lg:justify-self-center">
          <div className="accessory__content relative grid gap-8 overflow-hidden rounded-3xl border-2 border-gray-100 px-8 pt-4 pb-20 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={AccessoryImg1}
              className="accessory__content-img justify-self-center drop-shadow-lg"
              alt="Accessory image"
            />

            <div className="accessory__content-data justify-self-center text-center">
              <h3 className="accessory__content-title pb-2 text-2xl font-semibold text-gray-900">
                Snow Globe
              </h3>
              <p className="accessory__content-category text-[15px] text-gray-600">
                Accessory
              </p>
              <h3 className="accessory__content-price absolute left-6 bottom-6 text-2xl font-semibold text-gray-900">
                $2.99
              </h3>
              <button className="accessory__content-button absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl bg-red-600 p-4 text-[1.8rem] text-white">
                <RiHeartLine />
              </button>
            </div>
          </div>

          <div className="accessory__content relative grid gap-8 overflow-hidden rounded-3xl border-2 border-gray-100 px-8 pt-4 pb-20 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={AccessoryImg2}
              className="accessory__content-img justify-self-center drop-shadow-lg"
              alt="Accessory image"
            />

            <div className="accessory__content-data justify-self-center text-center">
              <h3 className="accessory__content-title pb-2 text-2xl font-semibold text-gray-900">
                Candy
              </h3>
              <p className="accessory__content-category text-[15px] text-gray-600">
                Accessory
              </p>
              <h3 className="accessory__content-price absolute left-6 bottom-6 text-2xl font-semibold text-gray-900">
                $1.99
              </h3>
              <button className="accessory__content-button absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl bg-red-600 p-4 text-[1.8rem] text-white">
                <RiHeartLine />
              </button>
            </div>
          </div>

          <div className="accessory__content relative grid gap-8 overflow-hidden rounded-3xl border-2 border-gray-100 px-8 pt-4 pb-20 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={AccessoryImg3}
              className="accessory__content-img justify-self-center drop-shadow-lg"
              alt="Accessory image"
            />

            <div className="accessory__content-data justify-self-center text-center">
              <h3 className="accessory__content-title pb-2 text-2xl font-semibold text-gray-900">
                Angel
              </h3>
              <p className="accessory__content-category text-[15px] text-gray-600">
                Accessory
              </p>
              <h3 className="accessory__content-price absolute left-6 bottom-6 text-2xl font-semibold text-gray-900">
                $3.99
              </h3>
              <button className="accessory__content-button absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl bg-red-600 p-4 text-[1.8rem] text-white">
                <RiHeartLine />
              </button>
            </div>
          </div>

          <div className="accessory__content relative grid gap-8 overflow-hidden rounded-3xl border-2 border-gray-100 px-8 pt-4 pb-20 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={AccessoryImg4}
              className="accessory__content-img justify-self-center drop-shadow-lg"
              alt="Accessory image"
            />

            <div className="accessory__content-data justify-self-center text-center">
              <h3 className="accessory__content-title pb-2 text-2xl font-semibold text-gray-900">
                Sphere
              </h3>
              <p className="accessory__content-category text-[15px] text-gray-600">
                Accessory
              </p>
              <h3 className="accessory__content-price absolute left-6 bottom-6 text-2xl font-semibold text-gray-900">
                $1.99
              </h3>
              <button className="accessory__content-button absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl bg-red-600 p-4 text-[1.8rem] text-white">
                <RiHeartLine />
              </button>
            </div>
          </div>

          <div className="accessory__content relative grid gap-8 overflow-hidden rounded-3xl border-2 border-gray-100 px-8 pt-4 pb-20 transition-all duration-300 hover:border-white hover:bg-white hover:shadow-lg">
            <img
              src={AccessoryImg5}
              className="accessory__content-img justify-self-center drop-shadow-lg"
              alt="Accessory image"
            />

            <div className="accessory__content-data justify-self-center text-center">
              <h3 className="accessory__content-title pb-2 text-2xl font-semibold text-gray-900">
                Surprise Gift
              </h3>
              <p className="accessory__content-category text-[15px] text-gray-600">
                Accessory
              </p>
              <h3 className="accessory__content-price absolute left-6 bottom-6 text-2xl font-semibold text-gray-900">
                $6.99
              </h3>
              <button className="accessory__content-button absolute right-0 bottom-0 rounded-tl-3xl rounded-br-3xl bg-red-600 p-4 text-[1.8rem] text-white">
                <RiHeartLine />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
