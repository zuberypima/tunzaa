import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Bell,
  Goal,
  Grow,
  Jbl,
  Samsung,
  Value,
  Search,
  Rewards,
  Team2,
  Team1,
  Dots,
  Playstore,
  Appstore,
  Art1,
  Art2,
  Tigo,
  Hisense,
  HeroCo,
  westpoint,
  Xiaomi,
  von,
} from "../assets/images";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MerchantsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const calendlyScript = document.createElement("script");
    calendlyScript.src =
      "https://assets.calendly.com/assets/external/widget.js";
    calendlyScript.async = true;

    document.body.appendChild(calendlyScript);
    return () => {
      document.body.removeChild(calendlyScript);
    };
  }, []);

  function handleCustomButtonClick() {
    Calendly.showPopupWidget(
      "https://calendly.com/queenlisa/appointment-with-potential-tunzaa-clients",
    );
  }
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      <section>
        <div className="mx-auto flex justify-center bg-white text-black">
          <div>
            <h1 className="mx-2 pt-6 pb-5 text-center font-poppins text-xl font-bold  tracking-wide  sm:mx-auto sm:text-3xl">
              {t("TunzaaForBusinesses")}
            </h1>
            {/*
          <p className=" px-2 pb-3 text-center font-poppins text-base tracking-widest text-gray-500 sm:mx-auto sm:max-w-2xl sm:text-lg  lg:max-w-5xl">
              {t("IncreasesalesWithTunzaa +")}
            </p>
          */}
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F8] ">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div className="row-gap-8 grid lg:grid-cols-5 lg:gap-24">
            <div className="grid gap-8 lg:col-span-2">
              <div className="flex flex-col justify-center">
                <p className="font-poppins text-gray-700">
                  <br />
                  <p className="mb-3 pt-3 font-poppins text-xl font-bold  tracking-wide  sm:mx-auto sm:text-2xl">
                    {" "}
                    <span className="font-extrabold text-[#2F56A1]">
                    {" "}360,000 TZS
                    </span>{"  "}
                    {t("Ave.Spending Per Paying User")}
                  </p>
                </p>
              </div>
            </div>
            <div className="grid  rounded pt-4 font-poppins sm:grid-cols-2 lg:col-span-3 lg:pt-0">
              <div className="flex flex-col justify-between pb-4 sm:py-4 sm:pb-0 lg:py-10">
                <div className="flex flex-row-reverse justify-end sm:flex-col">
                <p className="font-poppins text-gray-700">
                  <br />
                  <p className="mb-3 pt-3 font-poppins text-xl font-bold  tracking-wide  sm:mx-auto sm:text-2xl">
                    {" "}
                    <span className="font-extrabold text-[#2F56A1]">
                    {" "}+7M TZS
                    </span>{"  "}
                    {t("Ave.Paid to Vendors")}
                  </p>
                </p>
                </div>
                <div className="flex flex-row-reverse justify-end sm:flex-col">
                
                </div>
              </div>
              <div className="flex flex-col justify-between sm:py-4 lg:py-10 ">
                <div className="flex flex-row-reverse justify-end sm:flex-col">
                <p className="font-poppins text-gray-700">
                <br />
                <p className="mb-3 pt-3 font-poppins text-xl font-bold  tracking-wide  sm:mx-auto sm:text-2xl">
                  {" "}
                  <span className="font-extrabold text-[#2F56A1]">
                  {" "}Up to 25%
                  </span>{"  "}
                  {t("Commissions")}
                </p>
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F8]">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-1 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="flex flex-col justify-center sm:flex-row">
              <div
                className="calendly-inline-widget invisible h-0 w-0"
                data-url="https://calendly.com/queenlisa/appointment-with-potential-tunzaa-clients"
              ></div>
              <a
                onClick={handleCustomButtonClick}
                className="mb-1 rounded-xl border-2 border-[#1ebf1e] bg-[#1ebf1e] py-4 font-poppins text-lg font-medium text-white hover:cursor-pointer hover:bg-white hover:text-[#2F56A1] focus:outline-none focus:ring-4 focus:ring-[#668CD4] md:w-1/4"
              >
                {t("Chat with Us")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F8] ">

        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <p className="mx-2 py-6 text-center font-poppins text-xl font-bold  tracking-wide  text-black sm:mx-auto sm:text-3xl">
            {t("BrandsPartners")}
          </p>
          <div className="lg:pb-13 mx-auto flex max-w-screen-xl flex-col px-4 pb-8 lg:flex lg:flex-col pt-4">
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
          </div>
        </div>
      </section>


      

      <section className="bg-white ">
        <div className="container mx-auto max-w-screen-lg space-y-6 px-4 py-8 sm:px-6 lg:px-6 ">
          <div className="relative flex items-center rounded-xl bg-[#2F56A1] px-8 py-2 md:px-10  lg:gap-8 lg:py-10 lg:px-20 xl:gap-16 justify-center">
            <div className="text-gray-500  sm:text-lg ">
              <div className="relative flex justify-center">
                <h2 className=" font-poppins font-extrabold tracking-tight text-white  sm:text-3xl md:mb-2 lg:mb-4 ">
                  {t("Sell online safely to buyers via Tunzaa+ app")}
                </h2>
                <img
                  className="absolute  top-0  left-[2rem]  hidden h-[6rem] w-[rem] rounded-xl lg:mb-0 lg:flex lg:pr-10 "
                  src={Dots}
                  alt="feature image 2"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col items-center justify-center pb-4 pt-6 sm:flex-row ">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tunzaaapp&hl=en&gl=US"
                  className="z-20"
                  target="_blank"
                >
                  <img
                    className="pb-4 sm:pr-4 sm:pb-0 lg:mb-0 lg:flex "
                    src={Playstore}
                    alt="feature image 2"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/tunzaa-plus/id1596907284"
                  target="_blank"
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
      <section className="bg-[#F5F6F8]">
        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <p className="mx-2 pt-6 text-center font-poppins text-xl font-bold  tracking-wide  text-black sm:mx-auto sm:text-3xl">
            {t("Why Sell on Tunzaa")}
          </p>
          <p className=" px-2 pb-3 text-center  font-poppins text-base text-gray-500 sm:mx-auto sm:max-w-2xl sm:text-lg  lg:max-w-5xl">
            {t("Here’s what you need to know to get started")}
          </p>
          <div className=" flex justify-center px-3 sm:px-4">
            <div className="grid grid-cols-1 gap-8  pt-6 text-gray-500  sm:grid-cols-2 lg:container lg:max-w-5xl">
              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img
                  src={Value}
                  alt="hero image -2"
                  className="flex-shrink-0 self-center rounded-xl bg-cover bg-center sm:self-start"
                />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("Add Value")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base  text-gray-500 sm:text-start ">
                  {t("Easy & safe. Payments are directly deposited to your")}
                </p>
              </div>
              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img src={Grow} alt="hero image" />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("Grow your Business")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base  text-gray-500 sm:text-start ">
                  {t("Increase your sales by discovering a network of buyers")}
                </p>
              </div>
              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img src={Rewards} alt="hero image" />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("List your Business for Free")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base  text-gray-500 sm:text-start ">
                  {t("List all your products and services for free")}
                </p>
              </div>

              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img src={Bell} alt="hero image" />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("You're in Control")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base  text-gray-500 sm:text-start ">
                  {t(
                    "Through Tunzaa you can track your customers' orders, manage",
                  )}
                </p>
              </div>
              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img src={Search} alt="hero image" />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("Safe & Secure Payments")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base text-gray-500 sm:text-start  ">
                  {t("Tunzaa guarantees secure payment")}
                </p>
              </div>
              <div
                href="#"
                className="flex flex-col items-center sm:items-start"
              >
                <img src={Goal} alt="hero image" />
                <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                  {t("Help and Advice")}
                </p>
                <p className="pt-1  text-center  font-poppins text-base text-gray-500 sm:text-start  ">
                  {t(
                    "We are committed to helping all business partners succeed",
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-wide text-gray-900 ">
              {t("Ready to Grow Your Business?")}
            </h2>
            <div className="flex flex-col justify-center sm:flex-row">
              <div
                className="calendly-inline-widget invisible h-0 w-0"
                data-url="https://calendly.com/queenlisa/appointment-with-potential-tunzaa-clients"
              ></div>
              <a
                onClick={handleCustomButtonClick}
                className="mb-2 rounded-xl border-2 border-[#1ebf1e] bg-[#1ebf1e] py-4 font-poppins text-lg font-medium text-white hover:cursor-pointer hover:bg-white hover:text-[#2F56A1] focus:outline-none focus:ring-4 focus:ring-[#668CD4] md:w-1/4"
              >
                {t("Chat with Us")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F6F8]">
        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <p className="mx-2 pt-6 text-center font-poppins text-xl font-bold  tracking-wide  text-black sm:mx-auto sm:text-3xl">
            {t("How to Start Selling on Tunzaa")}
          </p>
          <p className=" px-2 pb-3 text-center  font-poppins text-base text-gray-500 sm:mx-auto sm:max-w-2xl sm:text-lg  lg:max-w-5xl">
            {t("It’s simple: register your business")}
          </p>
          <div className=" flex justify-center px-3 sm:px-4">
            <div className="grid grid-cols-1 gap-8  pt-6 text-gray-500  sm:grid-cols-2 lg:container lg:max-w-5xl">
              <div href="#" className="">
                <img src={Team2} alt="hero image -2" loading="lazy" />
              </div>
              <div className="flex flex-col">
                <ul className="list-decimal">
                  <li>
                    <p className="pb-2 font-poppins  text-lg font-bold text-black  md:text-xl  lg:max-w-5xl">
                      {t("Sign Up & Get Verified")}
                    </p>
                    <p className="pb-3 font-poppins text-sm font-light text-gray-500   lg:max-w-5xl">
                      {t("Download and install Tunzaa+ for Businesses mobile")}
                    </p>
                  </li>
                  <li>
                    <p className="pb-2 font-poppins  text-lg font-bold text-black  md:text-xl  lg:max-w-5xl">
                      {t("Add your Goods or Services")}
                    </p>
                    <p className="pb-3 font-poppins text-sm font-light text-gray-500  lg:max-w-5xl">
                      {t("Build your catalogue, start listing your products")}
                    </p>
                  </li>
                  <li>
                    <p className="pb-2 font-poppins  text-lg font-bold text-black  md:text-xl  lg:max-w-5xl">
                      {t("Start Selling and Get Paid")}
                    </p>
                    <p className="pb-3 font-poppins  text-sm font-light text-gray-500   lg:max-w-5xl">
                      {t(
                        "We will do a final review of your products or services",
                      )}
                    </p>
                  </li>
                </ul>
                <a
                  onClick={handleCustomButtonClick}
                  className="mb-2 mt-4 items-center rounded-xl border-2 border-[#1ebf1e] bg-[#1ebf1e] py-4 px-4 text-center font-poppins text-lg font-medium text-white hover:cursor-pointer hover:bg-white hover:text-[#2F56A1] focus:outline-none focus:ring-4 focus:ring-[#668CD4] md:w-[50%]"
                >
                  {t("Start selling")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MerchantsPage;
