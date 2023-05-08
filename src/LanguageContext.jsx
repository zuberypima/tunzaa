import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  lang: "en",
});

export const LanguageContextProvider = ({ children }) => {
  const [lang, _setLang] = useState("en");
  const setLang = (language) => {
    _setLang(language);
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguageContext = () => useContext(LanguageContext);
