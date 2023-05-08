import { useState, Fragment, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Chat, Whatsapp } from "../assets/images";

import { useTranslation } from "react-i18next";
import axios from "axios";

export default function Faqs() {
  const { t, i18n } = useTranslation();
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
      setFaqs(response.data.splice(4, 3));
    } catch (error) {
      console.error(error);
    }
  }
  function stripHtmlTags(string) {
    return string.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, "");
  }
  useEffect(() => {
    getFaqs();
  }, []);
  return (
    <section className="bg-white">
      <div className="mx-auto  max-w-screen-xl  px-4 pb-8 pt-5 lg:px-6 lg:pb-24 ">
        <h2 className="pb-5 font-extrabold text-black  first:font-poppins  sm:pb-10 sm:text-2xl xl:text-4xl">
          {/* Fequently
          <br /> asked questions */}
          {t("FrequentlyAskedQuestions")}
        </h2>
        <div className="flex flex-col  sm:items-start sm:justify-between md:flex-row">
          <div className="pb-5 md:pb-0">
            {faqs
              ? faqs
                  .sort(function (a, b) {
                    return a.display_order - b.display_order;
                  })
                  .map((faqs) => {
                    return (
                      <Fragment key={faqs.id}>
                        <Accordion
                          open={open === faqs.id}
                          animate={customAnimation}
                          className="max-w-2xl pb-4 md:max-w-lg lg:max-w-2xl"
                        >
                          <AccordionHeader
                            onClick={() => handleOpen(faqs.id)}
                            className="rounded-xl border p-2 font-poppins text-sm font-normal sm:border-2  sm:p-4 sm:font-medium"
                          >
                            {i18n.language === "en"
                              ? faqs.title.en
                              : faqs.title.sw}
                          </AccordionHeader>
                          <AccordionBody className="py-2 text-xs sm:text-base">
                            {i18n.language === "en"
                              ? stripHtmlTags(faqs.content.en)
                              : stripHtmlTags(faqs.content.sw)}
                          </AccordionBody>
                        </Accordion>
                      </Fragment>
                    );
                  })
              : null}
          </div>

          <div className="flex flex-col items-center rounded-xl border-2 py-5 px-2  sm:py-10 sm:px-5">
            <img
              className="mb-2 w-[14%]  lg:mb-10 lg:flex "
              src={Chat}
              alt="chat"
            />
            <h2 className="pb-2 text-center font-poppins text-lg font-bold tracking-tight text-black  sm:pb-4 sm:text-xl">
              {t("DoYouHaveMoreQuestion")}
            </h2>
            {/* <h2 className="max-w-xs pb-5 text-center font-poppins text-sm font-normal tracking-tight text-black  sm:pb-10 sm:font-semibold">
              {t("ChatWithUs")}
            </h2> */}
            <button
              className="mx-10 inline-flex w-full items-center   justify-center rounded border-[#25D366] bg-[#25D366] py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#25D366]  focus:ring-4 focus:ring-gray-100 sm:w-auto sm:px-5 lg:w-full lg:py-4"
              onClick={() => window.open("https://wa.me/+255673755217")}
            >
              <img src={Whatsapp} alt="" className="mr-2 h-5 w-5" />{" "}
              {t("OpenWhatsapp")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
