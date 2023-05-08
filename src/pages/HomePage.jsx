import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import {
  // Hero,
  Samsung,
  Jbl,
  Discover,
  Download,
  Dots,
  Art1,
  Art2,
  Dots2,
  Appstore,
  Playstore,
  Tigo,
  Hisense,
  Gamefication,
  Notification,
  Apis,
  von,
  Xiaomi,
  westpoint,
  HeroCo,
} from "../assets/images";
import CarouselSlider from "../components/Carousel";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TunzaaVideo } from "../assets/video";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scaleRef = useRef(null);
  const discoverImageRef = useRef(null);

  const { t } = useTranslation();
  const [iframeVisible, setIframeVisible] = useState(false);
  const iframeRef = useRef(null);

  const handlePlayButtonClick = () => {
    setIframeVisible(true);
  };
  const handleCloseButtonClick = () => {
    setIframeVisible(false);
    iframeRef.current.contentWindow.postMessage(
      '{"event":"command","func":"stopVideo","args":""}',
      "*",
    );
  };
  useEffect(() => {
    const scaleObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          scaleRef.current.classList.replace("scale-50", "scale-100");
          scaleRef.current.classList.replace("translate-x-40", "translate-x-0");
          scaleObserver.disconnect();
        }
      });
    });
    scaleObserver.observe(scaleRef.current);
    const discImageref = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          discoverImageRef.current.classList.replace(
            "translate-y-60",
            "translate-y-0",
          );

          discImageref.disconnect();
        }
      });
    });
    discImageref.observe(discoverImageRef.current);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2F56A1]">
      <Navbar />
      <section className="relative   bg-[#2F56A1]">
        <video
          className="absolute right-0 h-full w-full object-cover object-center opacity-20"
          autoPlay
          loop
          muted
          src={TunzaaVideo}
          loading="lazy"
        ></video>
        <div className="container z-20 mx-auto flex max-w-screen-xl flex-col   px-4 pt-4  sm:pt-8 md:grid md:grid-cols-12 md:pt-10  lg:grid-cols-12 lg:gap-8 lg:pt-[200px] xl:gap-0  ">
          <div className="flex flex-col justify-center sm:mr-7 md:col-span-6 md:mr-0 lg:col-span-7 ">
            <h1 className="mb-4 font-poppins text-4xl font-semibold  leading-none  tracking-tight text-white  sm:max-w-2xl  xl:text-5xl">
              {t("TUNZAASASA")} <br />
            {/*
            {t("PAYLATER")} .
          */}
            </h1>
            <p className="mb-6 max-w-md font-poppins font-normal text-white   md:max-w-2xl md:text-sm lg:mb-8 lg:text-2xl">
              {t("SafeWayToBuyAndSell")} <br className="hidden md:flex" />
              {/*
            {t("ForEveryDayAfricans")}.
            */}
            </p>
            <div className="flex items-center space-x-4 pb-5 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="https://shop.tunzaa.co.tz/"
                className="z-40  inline-flex h-[50%] items-center justify-center rounded-xl bg-[#1ebf1e]  px-5 py-3 text-center font-poppins text-sm font-medium text-white hover:bg-yellow-200 focus:ring-4 focus:ring-gray-100 sm:h-full sm:w-auto"
                target="_blank"
              >
                {t("TryTunzaa")}
              </a>
              <a
                className="z-40  mr-2  inline-flex items-center justify-center rounded-full border border-gray-200  bg-white p-2 text-sm font-medium text-gray-900 hover:cursor-pointer hover:bg-gray-400 hover:text-blue-700 focus:z-10  focus:outline-none focus:ring-4 focus:ring-gray-200 sm:w-auto sm:p-3"
                onClick={handlePlayButtonClick}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F8] md:pt-8">
        <div className="lg:pb-13 mx-auto flex max-w-screen-xl flex-col px-4 pb-8 lg:flex lg:flex-col">
          <p className="py-5 text-center font-poppins text-2xl text-black">
            {t("Over30BrandsWorkingwithTunzaa")}
          </p>
          <div className="mb-2 grid grid-cols-2 gap-8  text-gray-500 sm:grid-cols-3 sm:gap-12 lg:container lg:mx-auto  lg:flex lg:grid-cols-6 lg:justify-center">
            <a href="#" className="flex items-center justify-center">
              <img
                src={von}
                alt="hero image"
                loading="lazy"
                className="h-[50px] w-[300px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={Xiaomi}
                alt="hero image"
                loading="lazy"
                className="h-[50px]  w-[150px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={westpoint}
                alt="hero image"
                loading="lazy"
                className="h-[50px]  w-[200px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={HeroCo}
                alt="hero image"
                loading="lazy"
                className="h-[50px]  w-[300px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>{" "}
            <a href="#" className="flex items-center justify-center">
              <img
                src={Samsung}
                alt="hero image"
                loading="lazy"
                className="h-[50px] w-[300px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={Tigo}
                alt="hero image"
                loading="lazy"
                className="h-[50px]  w-[200px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={Jbl}
                alt="hero image"
                loading="lazy"
                className="h-[50px] w-[300px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
            <a href="#" className="flex items-center justify-center">
              <img
                src={Hisense}
                alt="hero image"
                loading="lazy"
                className="h-[50px]  w-[300px] flex-shrink-0 self-center  bg-cover bg-center"
              />
            </a>
          </div>
          <Link
            to="/businesses"
            className="mt-2  self-center rounded bg-[#1ebf1e] px-4  py-4 text-center font-poppins text-lg font-medium text-white  hover:bg-blue-300 focus:ring-4 focus:ring-gray-100 lg:w-[14rem]"
          >
            {t("AddYourBrand")}
          </Link>
        </div>
      </section>
      {iframeVisible && (
        <>
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/HXMg9GpZodc?enablejsapi=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => {
              iframeRef.current.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*",
              );
            }}
            className="fixed top-0 left-0 z-[90] h-full w-full"
          />
          <button
            className="fixed top-5 right-5 z-[99] rounded bg-[#2F56A1] py-3 px-6 text-white sm:py-4 sm:px-9"
            onClick={() => setIframeVisible(false)}
          >
            Close
          </button>
        </>
      )}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col justify-between lg:flex-row  lg:px-[20px]">
          <img
            className="mb-4 w-[70%] translate-y-60  self-center  rounded-xl  transition-transform duration-[1800ms]  sm:flex sm:pr-12 md:h-full lg:mb-0 "
            src={Discover}
            alt="feature image 2"
            ref={discoverImageRef}
          />
          <div className="flex flex-col items-center justify-center px-4 lg:items-start lg:px-0">
            <h2 className="mb-4 text-center font-poppins text-xl font-extrabold tracking-wide text-[#2F56A1]   sm:text-2xl sm:font-extrabold md:text-5xl lg:text-left">
              {t("WelcomeTunzaa")}
            </h2>
            <p className=" mb-8   text-center font-poppins font-normal text-[#2F56A1] md:mx-0 lg:text-start lg:text-2xl">
              {t("TunzaaDescription")}
            </p>
            <div className="row-gap-5 md:row-gap-8 mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <img
                  alt=""
                  className="h-20 w-20 flex-shrink-0 self-center rounded-xl bg-cover bg-center sm:self-start "
                  src={Gamefication}
                />
                <div className="h-full rounded-r py-5 font-poppins">
                  <h6 className="mb-2 text-center text-xl font-semibold uppercase leading-5 text-[#2F56A1] sm:text-start">
                    {t("GAMIFICATION")}
                  </h6>
                  <p className="text-center text-sm text-gray-900 sm:text-start md:text-lg ">
                    {t(
                      "Enhancing financial habits based on data and proven behavioural design techniques",
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  alt=""
                  className="h-20 w-20 flex-shrink-0 self-center rounded-xl bg-cover bg-center sm:self-start "
                  src={Notification}
                />
                <div className="h-full rounded-r py-5">
                  <h6 className="mb-2 text-center text-xl font-semibold uppercase leading-5 text-[#2F56A1] sm:text-start">
                    {t("NOTIFICATIONS")}
                  </h6>
                  <p className="text-center font-poppins text-sm text-gray-900 sm:text-start md:text-lg">
                    {t(
                      "Custom prompts to fit each one’s personal financial journey",
                    )}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <img
                  alt=""
                  className="h-20 w-20 flex-shrink-0 self-center rounded-xl bg-cover bg-center sm:self-start "
                  src={Apis}
                />
                <div className="h-full rounded-r py-5">
                  <h6 className="mb-2 text-center text-xl font-semibold leading-5 text-[#2F56A1] sm:text-start">
                    APIs
                  </h6>
                  <p className="text-center font-poppins text-sm text-gray-900 sm:text-start md:text-lg">
                    {t(
                      "Plug & Play APIs ready to scale with retailers, developers & partners.",
                    )}
                  </p>
                </div>
              </div>
            </div>{" "}
            <Link
              to="/about"
              className="inline-flex w-full items-center justify-center   bg-[#1ebf1e] px-5 py-3 text-center font-poppins text-sm font-medium text-white hover:bg-blue-300 focus:ring-4  focus:ring-gray-100 lg:w-[10rem]"
            >
              {t("ReadMore")}
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto flex justify-center text-white">
          <div>
            <h1 className="mx-2 pt-6 text-center font-poppins text-lg font-bold uppercase sm:mx-auto sm:pt-12 sm:text-xl">
              {t("CheckoutOurScreens")}
            </h1>
          </div>
        </div>
        <CarouselSlider />
      </section>
      <section className="bg-gray-50 ">
        <div className="container mx-auto max-w-screen-lg space-y-12 px-4 py-8 sm:px-6 lg:space-y-20 lg:py-24 lg:px-6 ">
          <div className="relative flex items-center justify-center rounded-3xl  bg-[#2F56A1]  py-2 md:px-10 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-10 lg:px-20 xl:gap-16 ">
            <div className=" text-gray-500  sm:text-lg">
              <div className="relative flex">
                <h2 className="pt-5 pb-4 font-poppins font-extrabold tracking-tight  text-white sm:text-3xl md:mb-2 lg:mb-4">
                  {t("DownloadTunzaa")}
                  <br className="hidden md:flex" /> {t("Now")}
                </h2>
                <img
                  className="absolute  top-0  left-[2rem]  hidden h-[6rem] w-[rem] rounded-xl lg:mb-0 lg:flex lg:pr-10 "
                  src={Dots}
                  alt="feature image 2"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center  pb-4 sm:flex-row">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tunzaa&hl=en&gl=TZ&pli=1"
                  className="z-20 flex items-center justify-center "
                  target="_blank"
                >
                  <img
                    className=" pb-4 sm:pr-4 sm:pb-0 lg:mb-0 lg:flex"
                    src={Playstore}
                    alt="feature image 2"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://apps.apple.com/tz/app/tunzaa/id1578263762"
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <img
                    className=" lg:mb-0 lg:flex "
                    src={Appstore}
                    alt="feature image 2"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <img
              className=" absolute hidden  translate-x-40  scale-50   rounded-xl transition-transform duration-[2000ms] lg:right-0 lg:flex lg:h-[30rem] lg:pr-24 "
              src={Download}
              alt="feature image 2"
              loading="lazy"
              ref={scaleRef}
            />
            <img
              className="hidden h-[20rem] rounded-xl md:flex lg:hidden"
              src={Download}
              alt="feature image 2"
              loading="lazy"
            />
            <img
              className="absolute left-0 bottom-20 hidden h-20 lg:mb-0 lg:flex lg:pr-24"
              src={Art1}
              alt="feature image 2"
              loading="lazy"
            />
            <img
              className="-z-1 absolute -right-5 bottom-20 hidden h-28 lg:mb-0 lg:flex lg:pr-24"
              src={Art2}
              alt="feature image 2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 ">
        <div className="container mx-auto max-w-screen-lg space-y-12 px-8 py-8 md:px-10 lg:space-y-20  lg:py-8 lg:px-6">
          <div className="text-center md:text-start">
            <h2 className="mb-4 text-center font-poppins text-lg font-medium tracking-widest text-[#2F56A1]  md:text-start">
              {t("TESTIMONIALS")}
            </h2>
            <h2 className="pb-8 font-poppins text-2xl font-bold tracking-tight text-black  sm:pb-12">
              {t("WhatOurCostumers")}
              <br className="hidden md:flex" /> {t("Saying")}
            </h2>
            {/*  */}
            <section className="body-font" loading="lazy">
              <div className="container mx-auto px-5 ">
                <div className="-m-4 flex flex-wrap">
                  <div className="w-full p-4 md:w-1/2">
                    <div className="h-full rounded">
                      <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">
                          This is another endorsement Tweet for
                          <a href="https://twitter.com/tunzaaHQ?ref_src=twsrc%5Etfw">
                            @tunzaaHQ
                          </a>{" "}
                          <a href="https://twitter.com/hashtag/BuyOnTunzaa?src=hash&amp;ref_src=twsrc%5Etfw">
                            #BuyOnTunzaa
                          </a>{" "}
                          <br />
                          <br />
                          Nilitaka kubadilisha makochi lakini haikuwa priorityto
                          be honest - started in December 🙌🏾🙌🏾 nilikuanikipata
                          tu hela haina kazi nalipa and now they arehere
                          <br />
                          <br />I love them!! Thank you
                          <a href="https://twitter.com/KneeNjure?ref_src=twsrc%5Etfw">
                            @KneeNjure
                          </a>{" "}
                          <a href="https://twitter.com/MaryamBaba_?ref_src=twsrc%5Etfw">
                            @MaryamBaba_
                          </a>{" "}
                          <a href="https://t.co/rElIdHytqX">
                            pic.twitter.com/rElIdHytqX
                          </a>
                        </p>
                        &mdash; Ndosi (@CarolNdosi)
                        <a href="https://twitter.com/CarolNdosi/status/1507995735731720192?ref_src=twsrc%5Etfw">
                          March 27, 2022
                        </a>
                      </blockquote>
                    </div>
                  </div>

                  <div className="w-full p-4 md:w-1/2">
                    <div className="h-full rounded">
                      <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">
                          Tunzaa
                          <a href="https://twitter.com/tunzaaHQ?ref_src=twsrc%5Etfw">
                            @tunzaaHQ
                          </a>{" "}
                          Mzigo wenyewe sana, good customer service 🙏🏽
                          <a href="https://t.co/J4rjtfzC2K">
                            pic.twitter.com/J4rjtfzC2K
                          </a>
                        </p>
                        &mdash; ramah mtitima (@chance2_7)
                        <a href="https://twitter.com/chance2_7/status/1554513565545029634?ref_src=twsrc%5Etfw">
                          August 2, 2022
                        </a>
                      </blockquote>{" "}
                    </div>
                  </div>

                  <div className="w-full p-4 md:w-1/2">
                    <div className="h-full rounded">
                      <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">
                          Received My Appliance From Tunzaa 😎 <br />
                          <br />
                          🙏🏾
                          <a href="https://twitter.com/tunzaaHQ?ref_src=twsrc%5Etfw">
                            @tunzaaHQ
                          </a>{" "}
                          👏
                          <a href="https://t.co/4fPejJcMiB">
                            pic.twitter.com/4fPejJcMiB
                          </a>
                        </p>
                        &mdash; I.ᴍ.ᴍ.ᴏ.#77 (@_ImrKil)
                        <a href="https://twitter.com/_ImrKil/status/1441028119582945280?ref_src=twsrc%5Etfw">
                          September 23, 2021
                        </a>
                      </blockquote>
                    </div>
                  </div>

                  <div className="w-full p-4 md:w-1/2">
                    <div className="h-full rounded">
                      <blockquote class="twitter-tweet">
                        <p lang="en" dir="ltr">
                          Finally at home
                          <a href="https://twitter.com/tunzaaHQ?ref_src=twsrc%5Etfw">
                            @tunzaaHQ
                          </a>{" "}
                          <a href="https://t.co/vHciUfTVJw">
                            pic.twitter.com/vHciUfTVJw
                          </a>
                        </p>
                        &mdash; Muuza vyakula vya mifugo (@JacksonNoah6)
                        <a href="https://twitter.com/JacksonNoah6/status/1560276637245063171?ref_src=twsrc%5Etfw">
                          August 18, 2022
                        </a>
                      </blockquote>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Faqs />
      <section className="bg-[#2F56A1] ">
        <div className="relative mx-auto flex max-w-screen-xl flex-col px-4 sm:flex-row  sm:justify-between md:py-8 lg:py-16 lg:px-6">
          <div className="relative  py-4 lg:py-12">
            <img
              className="absolute top-3 right-[135px]  hidden w-[12rem] opacity-50 lg:flex"
              src={Dots2}
              alt="feature image 2"
              loading="lazy"
            />
            <img
              className="absolute bottom-0 left-4  hidden h-24 lg:flex"
              src={Art1}
              alt="art1"
              loading="lazy"
            />
            <h2 className="font-poppins text-xl font-semibold text-white sm:text-2xl md:text-4xl">
              {t("DontMissOurUpdate.")}
              <br />
              {t("SubscribeUsForMoreInfo")}
            </h2>
          </div>
          <div className="w-full pb-4 sm:w-1/2 sm:pb-0 sm:pt-4 md:pt-0">
            <form
              action="https://tunzaa.us1.list-manage.com/subscribe/post?u=335c7d434c78850a27cfd054f&amp;id=d2bac4dce3&amp;f_id=00dee3e5f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div className="relative">
                <input
                  className="focus: w-full appearance-none rounded border border-gray-200 bg-gray-200 py-4 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:outline-none"
                  placeholder="abc@mail.com"
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 my-2 mr-2 rounded bg-[#1ebf1e] px-4  py-2 text-sm font-bold text-white hover:bg-yellow-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
