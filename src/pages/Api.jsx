import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Api = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full bg-white">
      <header className="w-full bg-[#2F56A1]">
        <Navbar />
      </header>
      <section className="bg-slate-100 font-poppins">
        <div className="mx-auto px-4 py-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
            <h2 className="mb-6 max-w-lg  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="#2F56A1"
                  className="text-blue-gray-100 absolute top-0 left-0 z-0 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
                >
                  <defs>
                    <pattern
                      id="07690130-d013-42bc-83f4-90de7ac68f76"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              {t("EarlyAdopters")}...
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              {t("Level up your project with our state-of-the-art APIs")}
            </p>
          </div>
        </div>
      </section>
      <div className="flex  items-center justify-center py-4">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSetG0pj7Gp00hcDYkB7HRq45Brn2l58AZvBSAFym7Atv6gKrQ/viewform?embedded=true"
          width="640"
          height="701"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </section>
  );
};

export default Api;
