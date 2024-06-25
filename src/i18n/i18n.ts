import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  
  .init({
    debug: true,
    lng: "ru",
   resources:{
    en:{
          translation:{
             namecompany:"DAIDO METALL RUSSIA"
           } 
    },
    ru:{
        translation:{
            namecompany:"ДАЙДО МЕТАЛЛ РУСЬ"
          } 
    }
   }
  });

export default i18n;