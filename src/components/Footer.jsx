import React from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer pt-32 pb-8">
      <div className="footer__container container grid gap-24">
        <div className="footer__group grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-start gap-16 lg:justify-items-center">
          <div className="footer__data">
            <Link
              to="/"
              className="footer__data-logo text-md font-bold text-gray-900 hover:text-red-600"
            >
              Christmas Gift
            </Link>
            <p className="footer__data-text pt-2 text-[15px] text-gray-600">
              I sent a gift and it <br /> gives happiness
            </p>
          </div>

          <div className="footer__content">
            <h1 className="footer__content-title pb-6 text-[18px] font-semibold text-gray-900">
              Our Services
            </h1>

            <ul className="footer__content-list flex flex-col gap-2">
              <li>
                <Link
                  to="/pricing"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/discounts"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  Discounts
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-mode"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  Shipping Mode
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h1 className="footer__content-title pb-6 text-[18px] font-semibold text-gray-900">
              Our Company
            </h1>

            <ul className="footer__content-list flex flex-col gap-2">
              <li>
                <Link
                  to="/blog"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/our-mission"
                  className="footer__content-link text-[15px] text-gray-600 hover:text-red-600 hover:underline"
                >
                  Our Mission
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h1 className="footer__content-title pb-6 text-[18px] font-semibold text-gray-900">
              Social Media
            </h1>

            <ul className="footer__content-list flex items-center gap-4">
              <Link
                to="/blog"
                className="footer__content-social text-[1.7rem] text-gray-900 hover:text-red-600"
              >
                <RiFacebookBoxFill />
              </Link>
              <Link
                to="/blog"
                className="footer__content-social text-[1.7rem] text-gray-900 hover:text-red-600"
              >
                <RiInstagramFill />
              </Link>
              <Link
                to="/blog"
                className="footer__content-social text-[1.7rem] text-gray-900 hover:text-red-600"
              >
                <RiTwitterFill />
              </Link>
            </ul>
          </div>
        </div>

        <p className="footer__copy border-t-2 border-gray-200 pt-8 text-center text-[15px] text-gray-600">
          &copy;Copyrights 2023 - all righrs reserved | Made with ❤️
        </p>
      </div>
    </footer>
  );
}
