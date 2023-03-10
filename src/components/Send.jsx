import React from "react";

import SendImg from "../assets/images/send.png";

export default function Send() {
  return (
    <div className="send section">
      <div className="send__bg bg-red-600 py-12 md:bg-transparent md:py-0">
        <div className="send__container container grid gap-12 sm:grid-cols-2 sm:items-center md:rounded-3xl md:bg-red-600 md:py-24 md:px-16 lg:max-w-4xl lg:grid-cols-[.8fr,1fr]">
          <div className="send__data justify-self-center text-center sm:text-left">
            <h1 className="send__title section-title text-white">
              Send Gift Now
            </h1>
            <p className="send__text section-text text-white">
              Start giving away before the holidays are over. Write the home of
              the person who will send the gift.
            </p>
            <form
              action=""
              className="send__form flex items-center justify-between gap-2 rounded-lg bg-white p-2"
            >
              <input
                type="email"
                className="send__input h-[52px] w-full pl-2 text-[15px] font-semibold text-gray-900 outline-none placeholder:font-normal placeholder:text-gray-600"
                placeholder="Email address"
              />
              <button className="send__button button">Send</button>
            </form>
          </div>

          <img src={SendImg} className="send__img" alt="Share image" />
        </div>
      </div>
    </div>
  );
}
