import React from "react";
import { GrUserWorker } from "react-icons/gr";
import { MdConnectWithoutContact } from "react-icons/md";
export default function WhyChooseUs() {
  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[100px]">
        <div className="text-center mb-[70px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            We Facilitate Seamless Connections with Top Artisans and Influencers
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            Our platform streamlines your experience, making it easy to discover
            and interact with talented creators quickly and efficiently.
          </p>
        </div>
        <div className="lg:flex lg:gap-5 xl:gap-[30px]">
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
            <div>
              <GrUserWorker className="text-[80px] text-gray-900 mb-8" />
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Artisan Connection
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Explore the profiles of skilled artisans and engage with their
                unique creations. Our platform ensures a smooth interaction and
                purchasing process.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Learn More
                </span>
                <i>
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="/assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-flower-white.svg"
              alt="icon"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]">
            <div>
              <MdConnectWithoutContact className="text-[80px] text-gray-900 mb-8" />

              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Influencer Discovery
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Quickly find influencers who align with your brand and connect
                with them to enhance your marketing strategies. Our marketplace
                brings together a community of influencers for you to choose
                from.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Learn More
                </span>
                <i>
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="/assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-map-white.svg"
              alt="icon"
            />
          </div>
          <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]">
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
                src="/assets/images/icons/icon-pine.svg"
                alt="icon"
              />
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                Social Engagement
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px]">
                Engage with influencers and artisans directly on our platform.
                Share, like, and comment on their work to build strong
                connections and foster community growth.
              </p>
            </div>
            <button type="button">
              <a
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Learn More
                </span>
                <i>
                  <img
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="/assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </a>
            </button>
            <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src="/assets/images/icons/icon-pine-white.svg"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
}
