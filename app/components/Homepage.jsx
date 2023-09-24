import React from "react";

import BookinUIComponent from "./BookingUIComponent.jsx";

import { Element } from "react-scroll";

const Homepage = () => {
  return (
    <Element name="homepage" className="mt-[4.5rem]">
      <div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="homepage h-[30rem] w-[75.75rem] rounded-xl p-[3.5rem]">
            <div className="flex flex-row justify-center h-full space-x-[14rem] text-white">
              <div className="space-y-3 flex flex-col mt-[0.85rem]">
                <h1 className="text-5xl font-inter-600 leading-normal">
                  Best Place to Find Comfortable Hotel and Resort
                </h1>
                <p className="leading-normal">
                  Have you ever come across a hotel that feels like home? If
                  not, you can find the hotel here.
                </p>
              </div>
              <div>
                <BookinUIComponent />
              </div>
            </div>
          </div>
          <div className="flex mt-11 justify-between">
            <div>
              <h2 className="text-3xl font-inter-600">Partner with</h2>
              <p className="text-lg font-inter-200">
                We partner with many wallets, to make your transactions easier.
              </p>
            </div>
            <div className="flex flex-row space-x-4 ml-10">
                <img src="./visaelectron.svg" alt="visa" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./paypal.svg" alt="paypal" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./mastercard.svg" alt="mastercard" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./discover.svg" alt="discover" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./stripe.svg" alt="stripe" className="w-[6.5rem] h-[3.5rem]"/>
                <img src="./lemonsqueezy.svg" alt="lemonsqueezy" className="w-[6.5rem] h-[3.5rem] "/>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Homepage;
