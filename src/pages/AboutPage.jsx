import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Anthonia,
  David,
  Finyah,
  Guiem,
  Mapcon,
  Mision,
  Nk,
  Pt,
  Queen,
  Swg,
  T1,
  TunzaaShop,
  Vision,
} from "../assets/images";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      <section className="bg-[#2F56A1]">
        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <div className=" flex justify-center px-3 sm:px-4">
            <div className="pt-6 text-white lg:container lg:max-w-5xl">
              <div href="#" className="flex">
                <div className="flex w-full flex-col items-center justify-center  px-6 py-4">
                  <p className="max-w-xs  pt-1  text-center font-poppins text-2xl font-bold">
                    {t("WeworkwithThebestInvestors")}
                  </p>
                  <p className="text-bse  max-w-sm  py-4 text-center  font-poppins">
                    {t("Leading industry investors trust and support")}
                  </p>
                  <a
                    href="mailto:mambo@tunzaa.co.tz?subject=Invest%20With%20Us"
                    className="inline-flex   items-center justify-center rounded-xl bg-[#1ebf1e] px-5 py-3 text-center font-poppins text-sm font-medium text-white hover:bg-yellow-200 focus:ring-4 focus:ring-[#1ebf1e] sm:w-auto"
                  >
                    {t("InvestinUs")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="lg:pb-13 mx-auto max-w-screen-xl px-4 pb-8 lg:flex lg:flex-col">
          <p className="mx-2 pt-6 text-center font-poppins text-xl font-bold  tracking-wide  text-black sm:mx-auto sm:text-3xl">
            {t("MissionVision")}
          </p>
          <p className=" px-2 pb-3 text-center  font-poppins text-base text-gray-500 sm:mx-auto sm:max-w-2xl sm:text-lg  lg:max-w-5xl">
            {t("Here’swhatYouNeed")}
          </p>
          <div className=" flex justify-center px-3 sm:px-4">
            <div className="grid grid-cols-1 gap-8  pt-6 text-gray-500  sm:grid-cols-2 lg:container lg:max-w-5xl">
              {/*
            <div href="#" className="flex">
                <img src={Mision} alt="hero image -2" className="h-20 pr-4" />
                <div>
                  <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                    {t("Mission")}
                  </p>
                  <p className="pt-1  font-poppins  text-base text-gray-500   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique obcaecati est neque itaque consequuntur dolores
                  </p>
                </div>
              </div>
              <div href="#" className="flex">
                <img src={Vision} alt="hero image -2" className="h-20 pr-4" />
                <div>
                  <p className="pt-3  font-poppins  text-xl font-bold text-[#2F56A1]   ">
                    {t("Vission")}
                  </p>
                  <p className="pt-1  font-poppins  text-base text-gray-500   ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique obcaecati est neque itaque consequuntur dolores
                  </p>
                </div>
              </div>
            */}
              
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-6 font-poppins">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 sm:p-10">
          <h1 className="text-center text-4xl font-bold leading-none text-[#2F56A1] sm:text-5xl  ">
            {t("OURTeam")}
          </h1>
          <p className="max-w-2xl text-center text-black">{t("TheTeam")}</p>
          {/* <div className="flex flex-row flex-wrap-reverse justify-center text-black border-2 "> */}
          <div className="grid grid-cols-1  justify-center text-black sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-6 ">
            <div className="m-8 flex flex-col  justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                src={Nk}
              />
              <p className="text-xl font-semibold leading-tight">
                Ng’winula Kingamkono
              </p>
              <p className="text-gray-700">CEO</p>
            </div>
            {/*
             <div className="m-8 flex flex-col justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center"
                src={Guiem}
              />
              <p className="text-xl font-semibold leading-tight">Guillem Poy</p>
              <p className="text-gray-700">CTO</p>
            </div>
          <div className="m-8 flex flex-col justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                src={Queen}
              />
              <p className="text-xl font-semibold leading-tight">
                Queenlisa Olan’g
              </p>
              <p className="text-gray-700">CX (Businesses)</p>
            </div>{" "}
             <div className="m-8 flex flex-col justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                src={David}
              />
              <p className="text-xl font-semibold leading-tight">
                David Robert
              </p>
              <p className="text-gray-700">CX (Consumers)</p>
            </div>
            <div className="m-8 flex flex-col justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                src={Anthonia}
              />
              <p className="text-xl font-semibold leading-tight">
                Antonia Koba
              </p>
              <p className="text-gray-700">CX (Consumers)</p>
            </div>{" "}
            <div className="m-8 flex flex-col justify-center text-center">
              <img
                alt=""
                className="mb-4 h-36 w-36 flex-shrink-0 self-center rounded-xl bg-cover bg-center "
                src={Finyah}
              />
              <p className="text-xl font-semibold leading-tight">
                Finyarua John
              </p>
              <p className="text-gray-700">Software Engineer</p>
            </div>
          */} 
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <h2 className=" container  mx-auto self-center py-6 text-center font-poppins text-xl font-bold tracking-tight  text-[#2F56A1] md:text-2xl">
          {t("Visit our Office in Kigamboni today")}
        </h2>
        <div className="mx-auto  max-w-screen-xl grid-cols-1 justify-between gap-4 px-4 py-3 grid md:grid-cols-2">
          <div className="flex h-full w-full flex-col">
            <iframe
              src={`https://maps.google.com/maps?q=Tunzaa+Fintech+Inc.&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              className="h-full w-full  rounded-xl"
              title="Google Map"
            />
          </div>
          <div className="h-full w-full">
            <img
              alt=""
              className="h-full w-full self-center rounded-xl  bg-cover bg-center object-cover "
              src={TunzaaShop}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
