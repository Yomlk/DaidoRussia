import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./lang.scss";

const languages = [
  { code: "en", lang: "English", image: "./public/img/Header/usa.svg" },
  { code: "ru", lang: "Russia", image: "./public/img/Header/rus.svg" },
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

  const getOppositeLanguageImage = () => {
    const oppositeLanguage = currentLanguage === "en" ? "ru" : "en";
    return languages.find((lng) => lng.code === oppositeLanguage)?.image;
  };

  return (
    <div className="btn-container">
      {isSmallScreen ? (
        <button className="current" onClick={toggleLanguage}>
          <img
            src={getOppositeLanguageImage()}
            alt={currentLanguage === "en" ? "Russian" : "English"}
          />
        </button>
      ) : (
        languages.map((lng) => (
          <button
            className={currentLanguage === lng.code ? "selected" : "current"}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            <img src={lng.image} alt={lng.lang} />
          </button>
        ))
      )}
    </div>
  );
};

export default LanguageSelector;
