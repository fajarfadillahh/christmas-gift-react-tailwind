import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenuHandler = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <div className="header fixed top-0 left-0 z-20 w-full bg-white transition-all duration-300">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__logo text-md font-bold text-gray-900 hover:text-red-600"
        >
          Christmas Gift
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-16 text-center shadow-lg transition-all duration-300 md:static md:top-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none ${
            menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
            {[
              ["About", "/about"],
              ["Share", "/share"],
              ["Decorations", "/decorations"],
              ["Accessory", "/acccessory"],
            ].map(([title, url]) => (
              <li>
                <Link
                  key={url}
                  to={url}
                  className="header__link text-[15px] font-medium text-gray-900 hover:text-red-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/sign-in" className="header__button button mt-6 md:mt-0">
            Register
          </Link>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer text-[1.3rem] text-gray-900 md:hidden"
          onClick={setMenuHandler}
        >
          {!menuOpen ? <RiMenu2Line /> : <RiCloseLine />}
        </div>
      </div>
    </div>
  );
}
