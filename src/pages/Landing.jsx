import React from "react";
import CategoriesSection from "../components/CategoriesSection";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChooseUs from "../components/WhyChooseUs";
import Hero from "../components/Hero";
import { FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
      <a name="top"> </a>
      <div className="absolute top-0 left-0 w-screen h-full bg-opacity-80 hidden video-iframe bg-[#0b0b0b] z-[999999]">
        <div className="mx-auto video w-1/2">
          <div className="flex justify-end">
            <button
              className="text-white close-video text-[20px]"
              type="button"
              title="Close (Esc)"
            >
              x
            </button>
          </div>

          <iframe
            className="aspect-video w-full"
            src="https://www.youtube.com/embed/oRI37cOPBQQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="overlay"></div>
      <header className="h-auto full-width relative py-[15px] first-letter:lg:py-[26px] mb-3">
        <div className="px-[12px] md:px-[36px] my-auto xl:px-0 flex items-center justify-between mx-auto relative  max-w-[1320px]">
          <a className="flex font-bold text-4xl uppercase" href="/">
            marketplace
          </a>
          <nav className="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block"></nav>
          <div className="hidden xl:block">
            <button type="button">
              {" "}
              <a
                className="flex items-center gap-2  z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-[#14532D] text-white hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] hidden lg:flex"
                href="#"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                  Learn more
                </span>
                <i>
                  {" "}
                  <FaAngleRight />
                </i>
              </a>
            </button>
          </div>
        </div>
      </header>

      {/* Hero section  */}

      <Hero />

      {/* companies section  */}

      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-1.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-2.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-3.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"
            href="/"
          >
            <img src="./assets/images/partner-logo-4.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto"
            href="/"
          >
            <img src="./assets/images/partner-logo-5.svg" alt="partner logo" />
          </a>
          <a
            className="transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto"
            href="/"
          >
            <img src="./assets/images/partner-logo-6.svg" alt="partner logo" />
          </a>
        </div>
      </div>

      {/* Category section  */}
      <CategoriesSection />

      {/* Why choose us   section  */}

      <WhyChooseUs />

      {/* what we offer  section  */}

      <WhatWeOffer />

      {/* News  section  */}

      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
          <div>
            <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
              Marketplace News
            </h2>
            <p className="text-quote md:text-lead-lg text-gray-600">
              Stay updated with the latest news and events from our handcraft
              marketplace.
            </p>
          </div>
          <button type="button">
            <a
              className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] bg-black text-white w-fit"
              href="#"
            >
              <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                View More
              </span>
              <i>
                <img
                  className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                  src="./assets/images/icons/icon-right.svg"
                  alt="arrow right icon"
                />
              </i>
            </a>
          </button>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
          <a className="block group" href="#">
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              New Artisans Joining Our Marketplace
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative "
                    src="./assets/images/news-1.jpg"
                    alt="New Artisans"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="#">
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              Upcoming Handcraft Fairs and Exhibitions
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative "
                    src="./assets/images/news-2.jpg"
                    alt="Handcraft Fairs"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
              </div>
            </div>
          </a>
          <a className="block group" href="#">
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              Inspiring Journeys of Our Top Sellers
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative object-cover"
                    src="./assets/images/news-3.jpg"
                    alt="Top Sellers"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/*   section  */}

      <div className="full-width bg-green-900 relative">
        <img
          className="absolute right-0 opacity-30 top-[-150px]"
          src="./assets/images/icons/pattern-2.svg"
          alt=""
        />
        <img
          className="absolute opacity-30 bottom-[-90px] left-[-15px]"
          src="./assets/images/icons/pattern-1.svg"
          alt=""
        />
      </div>

      {/* News letter  section  */}

      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0  md:mt-[150px]">
        <div className="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 px-[15px] py-[50px] md:flex  lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]">
          <div className="flex-1 mb-[30px]">
            <p className="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">
              newsletter
            </p>
            <h4 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">
              Subscribe our newsletter
            </h4>
            <p className="text-text text-gray-500">
              By clicking the button, you are agreeing with our
            </p>
            <a className="text-green-900" href="/">
              Term & Conditions
            </a>
            <form className="mt-[30px]" action="/">
              <div className="bg-white flex items-center justify-between p-3 rounded-[55px] shadow-md">
                <input
                  className="ml-[25px] w-full px-4 py-2 bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                  type="text"
                  placeholder="Enter your mail ..."
                />
                <button
                  className="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px] hover:bg-green-700 transition-colors duration-300"
                  type="submit"
                >
                  <img
                    className="filter-white"
                    src="./assets/images/icons/icon-right.svg"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
          <div className="relative flex-1">
            {" "}
            <img
              className="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"
              src="./assets/images/newslater.jpg"
              alt="Agon"
            />
          </div>
        </div>
      </div>
      <div
        className="bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]"
        id="backToTop"
      >
        <a
          className="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]"
          href="#top"
        >
          <img src="./assets/images/icons/icon-up.svg" alt="to top icon" />
        </a>
      </div>
      <Footer />
    </div>
  );
}
