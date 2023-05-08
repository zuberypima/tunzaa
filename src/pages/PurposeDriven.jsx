import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Background, Debt, LowIncome, Skull } from "../assets/images";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestimonialSlider from "../components/TestimonialSlider";

const PurposeDriven = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      <section className="relative">
        <img
          alt=""
          className="absolute mb-4 h-full w-full self-center bg-center object-cover"
          src={Background}
        />
        <div className="absolute h-full w-full bg-black opacity-50"></div>
        <div className="lg:pb-13 relative z-20 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="mb-10 max-w-xl font-poppins sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl">
              <h2 className="mb-6 max-w-lg  text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto ">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="#494444"
                    className="text-blue-gray-100 absolute top-0 left-0 -z-10 -mt-8 -ml-20 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
                  >
                    <defs>
                      <pattern
                        id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                {t("Problem")}
              </h2>
              <p className="text-xl text-white md:text-4xl">
                {t(
                  "More than a half of the 80% of working Africans struggle to",
                )}
              </p>
            </div>
            <div className="row-gap-5 md:row-gap-8 mb-8 grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
              <div className="transform duration-300 hover:-translate-y-2 ">
                <a
                  href="https://blogs.worldbank.org/opendata/april-2022-global-poverty-update-world-bank#:~:text=This%20revision%20is%20largely%20driven,from%2036.7%20percent%20to%2033.2"
                  target="_blank"
                >
                  <div className="flex h-full flex-col justify-between rounded-r p-5 shadow-sm">
                    <img
                      alt=""
                      className="w-h-24 mb-5 h-24 flex-shrink-0 self-center bg-cover bg-center "
                      src={LowIncome}
                    />
                    <h6 className="mb-2 text-2xl font-semibold leading-5 text-white ">
                      {t("LOW INCOMES")}
                    </h6>
                    <p className="font-poppins text-sm text-white">
                      {t("Over 50% of Sub-Saharans earn below $100 per month")}
                    </p>
                    <p className="font-poppins text-sm text-white underline opacity-60">
                      {t("Learn more")}
                    </p>
                  </div>
                </a>
              </div>
              <div className="transform duration-300 hover:-translate-y-2 ">
                <a
                  href="https://data.worldbank.org/indicator/NY.GNS.ICTR.ZS?locations=ZG"
                  target="_blank"
                >
                  <div className="flex h-full flex-col justify-between rounded-r p-5 shadow-sm">
                    <img
                      alt=""
                      className=" w-h-24 mb-5 h-24 flex-shrink-0 self-center bg-cover bg-center "
                      src={Skull}
                    />
                    <h6 className="mb-2 text-2xl font-semibold leading-5 text-white">
                      {t("UNHEALTHY FINANCIAL HABITS")}
                    </h6>
                    <p className="font-poppins text-sm text-white ">
                      {t("Saving among Sub-Saharan Africans is the")}
                    </p>
                    <p className="font-poppins text-sm text-white underline opacity-60">
                      {t("Learn more")}
                    </p>
                  </div>
                </a>
              </div>
              <div className="transform duration-300 hover:-translate-y-2">
                <a
                  href="https://www.cgap.org/blog/social-impact-credit-trap-asset-finance"
                  target="_blank"
                >
                  <div className="flex  h-full flex-col justify-between p-5 shadow-sm">
                    <img
                      alt=""
                      className=" w-h-24 mb-5 h-24 flex-shrink-0 self-center bg-cover bg-center  "
                      src={Debt}
                    />
                    <h6 className="mb-2 text-2xl font-semibold leading-5 text-white">
                      {t("RISING PERSONAL DEBT")}
                    </h6>
                    <p className="font-poppins text-sm text-white">
                      {t(
                        "One in five borrowers reported reducing food purchases",
                      )}
                    </p>
                    <p className="font-poppins text-sm text-white underline opacity-60">
                      {t("Learn more")}
                    </p>
                  </div>
                </a>
              </div>
            </div>
            {/* <div className="text-center">
              <a
                href="https://thedocs.worldbank.org/en/doc/9f7e7ddcd0f3e06076bbafbcaa31c36e-0050062022/original/IFC088-FINDEX-Note-2.pdf"
                className="hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 w-full items-center justify-center rounded bg-[#2F56A1] px-6 font-medium tracking-wide text-white shadow-md transition duration-200 focus:outline-none md:w-auto"
                target="_blank"
              >
                {t("Read more")}
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="bg-slate-100 font-poppins">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
          <div className="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-6xl">
            <p className="text-base text-gray-900 md:text-4xl">
              {t(
                "Unlocking the power of savings with the revolutionary Saving",
              )}
            </p>
            <p className="pt-4 text-base text-gray-800 md:text-xl">
              {t("Try out this revolutionary Saving-As-A-Service")}
            </p>
          </div>
          <section className="py-16">
            <div className="container mx-auto grid grid-cols-1 gap-8 md:px-10 md:pb-10 lg:grid-cols-3 lg:gap-20">
              <div className="flex max-w-lg flex-col items-center px-4 sm:mx-12 lg:mx-0">
                <div className="relative text-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg ">
                    {t("ENHANCE POSITIVE SAVING HABITS WITH DATA")}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-center px-4 sm:mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg ">
                    {t("WE MADE IT EXTREMELY EASY FOR YOU TO START SAVING")}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="flex max-w-lg flex-col items-center px-4 sm:mx-12 lg:mx-0">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute top-0 left-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                    ></path>
                  </svg>
                  <p className="px-6 py-1 text-lg ">
                    {t("DESIGNED TO HELP YOU REDUCE YOUR DEPENDENCY ON LOANS")}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="absolute bottom-0 right-0 h-4 w-4 sm:h-6 sm:w-6"
                  >
                    <path
                      fill="#2F56A1"
                      d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                    ></path>
                    <path
                      fill="#2F56A1"
                      d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-white font-poppins">
        <div className="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <TestimonialSlider />
        </div>
      </section>
      <Footer />{" "}
    </div>
  );
};

export default PurposeDriven;
