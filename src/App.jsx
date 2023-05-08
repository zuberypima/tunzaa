import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MerchantsPage from "./pages/MerchantsPage";
import BlogPage from "./pages/BlogPage"
import Api from "./pages/Api";
import TermsOfService from "./pages/TermsOfService";
import Privacypolicy from "./pages/Privacypolicy";
import Faqs from "./pages/Faqs";
import PurposeDriven from "./pages/PurposeDriven";
import Contacts from "./pages/Contacts";
import ReturnPolicy from "./pages/ReturnPolicy";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/api" element={<Api />} />
      <Route path="/businesses" element={<MerchantsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<Privacypolicy />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/purpose-driven" element={<PurposeDriven />} />
      <Route path="/return-policy" element={<ReturnPolicy />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
