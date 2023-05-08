import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <section className="flex h-screen flex-col items-center bg-[#2F56A1]  font-poppins text-gray-100">
      <Navbar />
      <div className="container mx-auto my-8 flex flex-col items-center justify-center self-center p-16 px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold text-white">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            {t("Sorry, we couldn't find this page.")}
          </p>
          <p className="mt-4 mb-8 text-white">
            {t(
              "But dont worry, you can find plenty of other things on our homepage.",
            )}
          </p>
          <Link
            to="/"
            className="rounded bg-[#FB9D33] px-8 py-3 font-semibold text-white"
          >
            {t("Back to homepage")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
