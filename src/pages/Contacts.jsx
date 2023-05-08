import React, { useEffect } from "react";
import { Contactus, Phone, Whatsapp } from "../assets/images";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-[#2F56A1]">
      <Navbar />
      <section className="bg-white">
        <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
          <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
            <img
              src={Contactus}
              alt=""
              className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
            />
          </div>
          <div className="flex w-full flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
            <a
              className="mb-4 inline-flex items-center rounded border-2 border-[#25D366] bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#25D366] focus:outline-none focus:ring active:opacity-75"
              href="/twitter"
              target="_blank"
              onClick={() => window.open("https://wa.me/+255673755217")}
            >
              Whatsapp
              <img src={Whatsapp} alt="" className="ml-2 h-5 w-5" />
            </a>
            <a
              className="mb-4 inline-flex items-center rounded border-2 border-gray-500 bg-gray-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-gray-500 focus:outline-none focus:ring active:opacity-75"
              href="tel:+255673755217"
              target="_blank"
              onClick={() => (window.location.href = "tel:+255673755217")}
            >
              Call
              <img src={Phone} alt="" className="mx-2 h-5 w-5" />{" "}
              (+255673755217)
            </a>
            <a
              className="mb-4 inline-flex items-center rounded border-2 border-[#55acee] bg-[#55acee] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#55acee] focus:outline-none focus:ring active:opacity-75"
              href="/twitter"
              target="_blank"
              onClick={() => window.open("https://twitter.com/tunzaaHQ")}
            >
              Twitter
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              className="mb-4 inline-flex items-center rounded border-2 border-[#3b5998] bg-[#3b5998] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#3b5998] focus:outline-none focus:ring active:opacity-75"
              href="/facebook"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://web.facebook.com/TunzaaFintech?_rdc=1&_rdr",
                )
              }
            >
              Facebook
              <svg
                className="ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
