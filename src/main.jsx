import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LanguageContextProvider } from "./LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageContextProvider>
  </React.StrictMode>,
);
