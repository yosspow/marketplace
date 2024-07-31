import React from "react";
import { useState, useEffect } from "react";
const categories = [
  {
    name: "Home Decor",
    slug: "home-decor",
    description:
      "Transform your living space with one-of-a-kind home decor items. Browse through handmade furniture, decorative pillows, wall art, candles, and more to add a personal touch to every room in your home.",
    image: "thumbnail-1.png",
  },
  {
    name: "Clothing and Apparel",
    slug: "clothing-apparel",
    description:
      "Explore a variety of handmade clothing and apparel options, including custom-made dresses, shirts, hats, and more. Each piece is crafted with care and attention to detail, ensuring a unique addition to your wardrobe.",
    image: "thumbnail-2.png",
  },
  {
    name: "Art and Collectibles",
    slug: "art-Collectibles",
    description:
      "Find unique artworks and collectibles created by skilled artisans. Whether you're looking for original paintings, sculptures, prints, or handmade crafts, you'll find something that resonates with your personal taste and aesthetic.",
    image: "thumbnail-3.png",
  },
  {
    name: "Toys and Games",
    slug: "toys-games",
    description:
      "Delight in handmade toys and games that are perfect for children and collectors alike. Discover wooden toys, stuffed animals, puzzles, and educational games that are crafted with love and creativity.",
    image: "thumbnail-5.png",
  },
  {
    name: "Kitchen and Dining",
    slug: "kitchen-dining",
    description:
      "Elevate your culinary experience with handmade kitchen and dining items. Explore a range of unique products including custom pottery, hand-carved cutting boards, artisanal kitchen utensils, and beautifully crafted tableware to enhance your home cooking and dining ambiance.",
    image: "thumbnail-4.png",
  },
  {
    name: "Bags and Purses",
    slug: "bags-purses",
    description:
      "Discover a collection of handmade bags and purses designed with style and practicality in mind. Browse through an array of custom-made handbags, backpacks, totes, and clutches that showcase exceptional craftsmanship and unique designs.",
    image: "thumbnail-6.png",
  },
];

export default function CategoriesSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [category, setCategory] = useState({
    name: "Home Decor",
    slug: "home-decor",
    description:
      "Transform your living space with one-of-a-kind home decor items. Browse through handmade furniture, decorative pillows, wall art, candles, and more to add a personal touch to every room in your home.",
    image: "thumbnail-1.png",
  });

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="text-center">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Explore Our Popular Categories
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            Find the perfect handcrafted items tailored to your taste and needs.
          </p>
        </div>
        <div className="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
          {categories.map((currCategory, indx) => (
            <p
              key={indx}
              className={`${currCategory.slug === category.slug ? "bg-green-900 text-white" : ""} text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]`}
              onClick={() => setCategory(currCategory)}
            >
              {currCategory.name}
            </p>
          ))}
        </div>
        <div className="tab-content lg:gap-[30px] lg:flex bg-bg-2 branding">
          {category && (
            <>
              <div className="p-5 md:p-[60px] lg:w-1/2 relative">
                <p className="text-lg  mb-[40px]">{category.description}</p>
                <button type="button" className="mt-10">
                  {" "}
                  <a
                    className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                    href="#"
                  >
                    <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                      Learn More
                    </span>
                    <i>
                      {" "}
                      <img
                        className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                        src="./assets/images/icons/icon-right.svg"
                        alt="arrow right icon"
                      />
                    </i>
                  </a>
                </button>
              </div>
              <div className="relative lg:w-1/2">
                <img
                  className="h-full w-full object-cover"
                  src={`./assets/images/${category.image}`}
                  alt="Agon"
                />
                <img
                  className="absolute top-0 right-0"
                  src="./assets/images/icons/pattern-3.svg"
                  alt="pattern"
                />
                <button
                  className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"
                  onClick={handlePlayVideo}
                >
                  <img
                    src="./assets/images/icons/icon-play.svg"
                    alt="play button"
                    width="30"
                  />
                </button>
              </div>
              {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                  <div className="relative bg-sky-100 rounded-lg p-8 max-w-4xl w-full h-[500px]">
                    <button
                      className="absolute top-2 right-2 text-gray-600"
                      onClick={handleCloseVideo}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <iframe
                        width="820"
                        height="455"
                        src="https://www.youtube.com/embed/Z5pn9JDO0rk?si=bwdUkHiYSSCYUu6Q"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
