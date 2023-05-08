import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import { useTranslation } from "react-i18next";
import "../translations";
import { t } from "i18next";
import { useLanguageContext } from "../LanguageContext";
const Navbar = () => {
  const { i18n } = useTranslation();
  const { setLang, lang } = useLanguageContext();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <nav className="container mx-auto  bg-[#2F56A1] py-2.5  ">
      <div className="navbar xl:container xl:mx-auto xl:px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2  shadow"
            >
              <li>
                <Link to="/purpose-driven">{t("PurposeDriven")}</Link>
              </li>
              <li>
                <Link to="/about">{t("About")}</Link>
              </li>
              <li>
                <Link to="/api">APIs</Link>
              </li>
              <li>
                <Link to="/businesses">{t("Businesses")}</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  {t("Safety")}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="z-[999] bg-white p-2 text-black">
                  <li>
                    <Link to="/terms-of-service"> {t("Terms of Service")}</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
                  </li>
                  <li>
                    <Link to="/faqs"> {t("Frequent Asked Questions")}</Link>
                  </li>
                  <li>
                    <Link to="/return-policy"> {t("Return Policy")}</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div href="#" className="flex items-center">
              <img
                src={Logo}
                className="h-3 sm:h-6 flex-shrink-0 self-center  bg-cover bg-center "
                alt="Tunzaa"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-medium text-white" to="/purpose-driven">
                {t("PurposeDriven")}
              </Link>
            </li>

            <li>
              <Link to="/about" className="font-medium text-white">
                {t("About")}
              </Link>
            </li>
            <li>
              <Link to="/api" className="font-medium text-white">
                APIs
              </Link>
            </li>
            <li>
              <Link to="/businesses" className="font-medium text-white">
                {t("Sale on Tunzaa")}
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="font-medium text-white">
                {t("Safety")}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="z-[999] bg-white p-2 text-black">
                <li>
                  <Link to="/terms-of-service"> {t("Terms of Service")}</Link>
                </li>
                <li>
                  <Link to="/privacy-policy"> {t("Privacy Policy")}</Link>
                </li>
                <li>
                  <Link to="/faqs"> {t("Frequent Asked Questions")}</Link>
                </li>
                <li>
                  <Link to="/return-policy"> {t("Return Policy")}</Link>
                </li>
                
              </ul>
            </li>
            <li>
            <Link to="/blog" className="font-medium text-white">
              {t("Blog")}
            </Link>
          </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal sm:px-8 px-2">
            <li tabIndex={0}>
              <a className="sm:font-medium text-white font-xs">
                {i18n.t("Language")}
                <svg
                  className="sm:h-6 sm:w-6 w-4 h-4"
                  x="0"
                  y="0"
                  // width="19px"
                  // height="19px"
                  viewBox="0 0 19 19"
                  role="img"
                  space="preserve"
                >
                  <path
                    d="M9.5,2C5.4,2,2,5.4,2,9.5S5.4,17,9.5,17c4.1,0,7.5-3.4,
              7.5-7.5S13.6,2,9.5,2z M14.7,6.5h-2.2c-0.2-1-0.6-1.8-1.1-2.7C12.8,
              4.3,14,
              5.2,14.7,
              6.5z M9.5,3.5c0.6,0.9,1.1,1.9,1.4,3H8.1C8.4,
              5.4,8.9,4.4,9.5,3.5z M3.7,
              11c-0.2-0.5-0.2-1-0.2-1.5C3.5,9,3.5,8.4,3.7,8h2.6C6.2,8.5,
              6.2,9,6.2,9.5c0,0.5,
              0.1,1,0.1,1.5H3.7z M4.3,12.5h2.2c0.2,1,0.6,1.8,
              1.1,2.7C6.2,14.7,5,13.8,4.3,
              12.5z M6.5,6.5H4.3c0.8-1.3,1.9-2.2,3.2-2.7C7.1,
              4.7,6.7,5.5,6.5,6.5z M9.5,
              15.5c-0.6-0.9-1.1-1.9-1.4-3h2.9C10.6,13.6,10.1,
              14.6,9.5,15.5z M11.2,
              11H7.8c-0.1-0.5-0.2-1-0.2-1.5c0-0.5,0.1-1,
              0.2-1.5h3.5c0.1,0.5,0.2,1,0.2,
              1.5C11.5,10,
              11.3,10.5,11.2,11z M11.5,15.2c0.5-0.8,0.8-1.7,1.1-2.7h2.2C14,
              13.8,12.8,14.7,11.5,
              15.2z M12.8,11c0.1-0.5,0.1-1,0.1-1.5c0-0.5-0.1-1-0.1-1.5h2.6c0.2,
              0.5,0.2,1,0.2,
              1.5c0,0.5-0.1,1.1-0.2,1.5H12.8z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <ul className="z-[999] bg-white p-2 text-black">
                <li onClick={() => setLang("en")}>
                  <a>English</a>
                </li>
                <li onClick={() => setLang("sw")}>
                  <a>Kiswahili</a>
                </li>
              </ul>
            </li>
          </ul>
          <a
            className="btn border-none bg-[#1ebf1e] text-white btn-sm"
            href="https://shop.tunzaa.co.tz/"
            target="_blank"
          >
            {t("Get-started")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
