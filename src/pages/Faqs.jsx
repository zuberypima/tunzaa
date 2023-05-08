import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Faqs = () => {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const [faqs, setFaqs] = useState();
  async function getFaqs() {
    try {
      const response = await axios.get("https://api.tunzaa.co.tz/api/v1/faq");
      setFaqs(response.data);
    } catch (error) {}
  }
  function stripHtmlTags(string) {
    return string.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, "");
  }
  useEffect(() => {
    getFaqs();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-[#2F56A1]">
        <Navbar />
      </div>
      <div className="mx-auto  max-w-screen-xl  bg-white px-4 pb-8 pt-5 lg:px-6 lg:pb-24">
        {faqs ? (
          faqs
            .sort(function (a, b) {
              return a.display_order - b.display_order;
            })
            .map((faqs) => {
              return (
                <Fragment>
                  <Accordion
                    open={open === faqs.id}
                    animate={customAnimation}
                    className=""
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(faqs.id)}
                      className=" mb-2 rounded-xl  p-2 text-start  font-poppins text-sm font-normal text-gray-800 sm:border-2 sm:p-4 sm:font-medium"
                    >
                      {i18n.language === "en" ? faqs.title.en : faqs.title.sw}
                    </AccordionHeader>
                    <AccordionBody className=" border-2py-2 mb-10 px-4 text-start text-xs sm:text-base">
                      {i18n.language === "en"
                        ? stripHtmlTags(faqs.content.en)
                        : stripHtmlTags(faqs.content.sw)}
                    </AccordionBody>
                  </Accordion>
                </Fragment>
              );
            })
        ) : (
          <>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
            <div className=" mb-2 h-12  animate-pulse rounded-xl  bg-gray-100 p-2 font-poppins text-sm font-normal shadow-sm sm:border-2 sm:p-4 sm:font-medium"></div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
