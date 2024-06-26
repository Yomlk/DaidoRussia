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
             namecompany:"DAIDO METALL RUSSIA",
             nav: {
                "о компании": "About Us",
                "продукция": "Products",
                "проверка подлинности": "Authenticity Check",
                "контакты": "Contacts",
              },
           } 
    },
    ru:{
        translation:{
            namecompany:"ДАЙДО МЕТАЛЛ РУСЬ",
            nav: {
                "о компании": "О компании",
                "продукция": "Продукция",
                "проверка подлинности": "Проверка подлинности",
                "контакты": "Контакты",
              },
            
          } 
    }
   }
  });

export default i18n;