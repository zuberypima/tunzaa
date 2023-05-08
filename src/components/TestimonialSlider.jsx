import React, { useEffect, useRef } from "react";
import Swiper from "swiper";

import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./carousel.css";
import { T1, T4, T5, T6, T7, T8 } from "../assets/images";

import { useTranslation } from "react-i18next";
const TestimonialSlider = () => {
  const { t } = useTranslation();
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      // Swiper options here
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
    });
  }, []);
  return (
    <section>
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              {t("Don't just take our word for it...")}
              <br className="hidden sm:block lg:hidden" />
              {t("Check out our community work")}
            </h2>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button className="prev-button rounded-full border border-[#2F56A1] p-4 text-[#2F56A1] hover:bg-[#2F56A1] hover:text-white">
                <span className="sr-only">Previous Slide</span>
                <svg
                  className="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>

              <button className="next-button rounded-full border border-[#2F56A1] p-4 text-[#2F56A1] hover:bg-[#2F56A1] hover:text-white">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative -mx-6  lg:col-span-2 lg:mx-0">
            <div className="absolute bottom-0 right-0  z-30 h-full w-[15%] bg-gradient-to-l from-white hidden lg:flex "></div>
            <div className="swiper-container !overflow-hidden" ref={swiperRef}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T1}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t(
                            "We met with our customers, heard their feedback and suggestions.",
                          )}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; November 27, 2021
                    </footer>
                  </blockquote>
                </div>
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T4}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t(
                            "We partnered with Tigo! Our users can now buy Tigo",
                          )}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; November 18, 2021
                    </footer>
                  </blockquote>
                </div>
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T5}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t(
                            "We partnered with Tigo! Our users can now buy Tigo",
                          )}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; November 18, 2021
                    </footer>
                  </blockquote>
                </div>
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T6}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t("We conducted an outreach program to University")}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; January 8,2022
                    </footer>
                  </blockquote>
                </div>
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T7}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t("We conducted an outreach program to University")}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; January 8,2022
                    </footer>
                  </blockquote>
                </div>
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-slate-100 p-8">
                    <div>
                      <div className="mt-4">
                        <img
                          alt=""
                          className="mb-4 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                          src={T8}
                        />

                        <p className="mt-4 leading-relaxed text-gray-500">
                          {t("We conducted a user experience session")}
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm font-bold italic text-gray-500">
                      &mdash; December 12, 2022
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="prev-button rounded-full border border-[#2F56A1] p-4 text-[#2F56A1] hover:bg-[#2F56A1] hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="next-button rounded-full border border-[#2F56A1] p-4 text-[#2F56A1] hover:bg-[#2F56A1] hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="#2F56A1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
