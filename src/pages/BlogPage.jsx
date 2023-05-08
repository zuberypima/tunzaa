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

const BlogPage = () => {
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
      <section className="bg-[#F5F6F8]">
        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <div className=" flex justify-center px-3 sm:px-4">
            <div className="grid grid-cols-1 gap-8  pt-6 text-gray-500  sm:grid-cols-2 lg:container lg:max-w-5xl">
              <div href="#" className="">
                <img src={'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QygJmSZC4fvwgCnPB9nwIA.png'} alt="hero image -2" loading="lazy" />
              </div>
              <div className="flex flex-col">
                <ul className="">
                  <li>
                    <p className="pb-2 font-poppins  text-lg font-bold text-black  md:text-xl  lg:max-w-5xl">
                      {t("BloadHeading")}
                    </p>
                    <p className="pb-3 font-poppins text-sm font-light text-gray-500   lg:max-w-5xl">
                      {t("BloadParagraph")}
                    </p>
                    <a href="" className="text-[#1ebf1e]">Read more</a>
                  </li>
                </ul>
               {/*
               <a
                  onClick={handleCustomButtonClick}
                  className="mb-2 mt-4 items-center rounded-xl border-1 border-[#1ebf1e] bg-[#1ebf1e] py-4 px-4 text-center font-poppins text-sm font-medium text-white hover:cursor-pointer hover:bg-white hover:text-[#2F56A1] focus:outline-none focus:ring-4 focus:ring-[#668CD4] md:w-[50%]"
                >
                  {t("Read more")}
                </a>
              */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
