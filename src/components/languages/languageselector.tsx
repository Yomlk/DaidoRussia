import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './lang.scss';

const languages = [
  { code: "en", lang: "English", Image: "./src/components/Header/img/usa.svg" },
  { code: "ru", lang: "Russia", Image: "./src/components/Header/img/rus.svg" },
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ru" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <div className="btn-container">
      {isSmallScreen ? (
        <button className="current" onClick={toggleLanguage}>
          <img
            src={languages.find((lng) => lng.code === currentLanguage)?.Image}
            alt={currentLanguage}
          />
        </button>
      ) : (
        languages.map((lng) => (
          <button
            className={currentLanguage === lng.code ? 'selected' : 'current'}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <img src={lng.Image} alt={lng.lang} />
          </button>
        ))
      )}
    </div>
  );
};

export default LanguageSelector;
