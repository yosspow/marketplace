import React from "react";

export default function WhatWeOffer() {
  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="bg-bg-2 relative px-[8px] py-[70px] rounded-[50px]">
          <img
            className="absolute top-0 left-0 z-0 -translate-x-1/4"
            src="./assets/images/icons/pattern-4.svg"
            alt="pattern icon"
          />
          <div className="text-center relative mb-[70px] md:mb-[90px]">
            <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
              What We Offer
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
              Our marketplace connects customers with influencers quickly and
              effortlessly, providing a seamless and engaging experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
            <div className="rounded-2xl my-5 py-[20px] px-[24px] md:py-[43px] md:px-[63px] transition-all duration-300 hover:translate-y-[-3px] bg-white">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Comprehensive Listings
              </h3>
              <p className="text-text text-gray-600">
                Browse a wide range of influencers across various niches and
                platforms.
              </p>
            </div>
            <div className="rounded-2xl my-5 py-[20px] px-[24px] md:py-[43px] md:px-[63px] transition-all duration-300 hover:translate-y-[-3px] bg-white">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-sun.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Influencer Insights
              </h3>
              <p className="text-text text-gray-600">
                Get detailed information and performance metrics to make
                informed decisions.
              </p>
            </div>

            <div className="rounded-2xl my-5 py-[20px] px-[24px] md:py-[43px] md:px-[63px] transition-all duration-300 hover:translate-y-[-3px] bg-white">
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src="./assets/images/icons/icon-trees.svg"
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                Streamlined Communication
              </h3>
              <p className="text-text text-gray-600">
                Easily connect and collaborate with influencers through our
                platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
