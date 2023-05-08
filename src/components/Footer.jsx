import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="bg-[#1B1C31]">
        <div className="relative mx-auto flex max-w-screen-xl justify-between px-4 py-8 lg:py-16 lg:px-6">
          <footer className="flex w-full flex-col bg-[#1B1C31] sm:flex-row sm:justify-between sm:text-base-content ">
            <div className="flex flex-col items-start text-white">
              <Link to="/">
                <img
                  src={Logo}
                  alt="Tunzaa"
                  className=" w-[90px] flex-shrink-0 self-center  bg-cover bg-center "
                />
              </Link>
             {/* <p className="max-w-lg pt-8 font-poppins text-base">
                {t("EnhancingSavingHabits")}
              </p>*/}
              <div className="flex flex-col md:flex-row">
                <p className="max-w-md pt-2">
                <p>USA</p>
                  Tunzaa Fintech Inc.
                  <br /> 256 Chapman Road
                  <br /> STE 105-4 Newark – New Castle, 19702
                  <br /> Delaware – USA
                  
                </p>{" "}
                <p className="max-w-md pt-2 md:pl-5">
                <p>Tanzania</p>
                Tunzaa Holdings Digital Limited
                <br /> GMT 1577 Block No.149 <br />
                Tuamoyo- Kigamboni
                <br /> Dar es salaam – Tanzania.
                </p>
              </div>
            </div>
            <div className="flex flex-col pt-6 font-poppins sm:flex-row sm:pt-0">
              <div className="container mx-auto  flex flex-col pr-24 text-start text-white">
                <span className="footer-title pb-3">Company</span>
                <Link to="/contacts" className="link-hover link py-1">
                  {t("Contact Us")}
                </Link>
                <Link to="/businesses" className="link-hover link py-1">
                  Tunzaa+
                </Link>
                <a
                  href="https://tunzaa.medium.com/"
                  className="link-hover link py-1"
                  target="_blank"
                >
                  Blog
                </a>
              </div>
              <div className="container mx-auto  flex flex-col  pt-4 text-start text-white sm:pt-0">
                <span className="footer-title pb-3">Use Tunzaa</span>
                <a
                  className="link-hover link py-1"
                  href="https://play.google.com/store/apps/details?id=com.tunzaa&hl=en&gl=TZ&pli=1"
                  target="_blank"
                >
                  {t("Download Tunzaa on Android")}
                </a>
                <a
                  className="link-hover link py-1"
                  href="https://apps.apple.com/tz/app/tunzaa/id1578263762"
                  target="_blank"
                >
                  {t("Download Tunzaa on iOS")}
                </a>
                <a
                  className="link-hover link py-1"
                  href="https://shop.tunzaa.co.tz/"
                  target="_blank"
                >
                  {t("Online Shop")}
                </a>
              </div>
              <div className="container mx-auto  flex flex-col pt-4 text-start text-white sm:pt-0 md:ml-4">
                <span className="footer-title pb-3">Help</span>
                <Link to="/faqs" className="link-hover link py-1">
                  FAQs
                </Link>
                <Link to="/privacy-policy" className="link-hover link py-1">
                  {t("Privacy Policy")}
                </Link>
                <Link to="/terms-of-service" className="link-hover link py-1">
                  {t("Terms of Service")}
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
      <footer className="bg-[#1B1C31]">
        <div className="container mx-auto flex flex-col  lg:flex-row">
          <div className="container mx-auto flex flex-col justify-center  pb-4 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <a
                rel="noopener noreferrer"
                title="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer sm:h-10 sm:w-10"
                target="_blank"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/74491911/admin/",
                  )
                }
              >
                <svg
                  height="100%"
                  version="1.1"
                  viewBox="0 0 512 512"
                  fill="#ffffff"
                  className="h-6 w-6"
                  width="100%"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:serif="http://www.serif.com/"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z" />
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                title="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer sm:h-10 sm:w-10"
                target="_blank"
                onClick={() =>
                  window.open("https://www.instagram.com/tunzaahq/")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="#ffffff"
                  className="h-6 w-6"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                title="Twitter"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer   sm:h-10 sm:w-10"
                onClick={() => window.open("https://twitter.com/tunzaaHQ")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                >
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                title="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer   sm:h-10 sm:w-10"
                target="_blank"
                onClick={() =>
                  window.open(
                    "https://web.facebook.com/TunzaaFintech?_rdc=1&_rdr",
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
              rel="noopener noreferrer"
              title="Tik Tok"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:cursor-pointer   sm:h-10 sm:w-10"
              target="_blank"
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@tunzaafintech",
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#ffffff"
                viewBox="0 0 16 16"
                className="h-6 w-6"
              >
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="fixed-bottom h-auto border-t  border-[#404444] bg-[#1B1C31] py-8 text-white">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="mb-4 text-sm font-light leading-normal">
            Copyright &copy; {new Date().getFullYear()} Tunzaa. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
