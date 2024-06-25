import { useTranslation } from "react-i18next";
import './lang.scss'

 const languages = [
    {code:"en", lang: "English",Image: "./src/components/Header/img/usa.svg"},
    {code:"ru", lang: "Russia",Image: "./src/components/Header/img/rus.svg"}
 ];

 const LanguageSelector = () => {
   const {i18n} = useTranslation()
   const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
   };
    return (
    <div className="btn-container">
        {languages.map((lng) => {
                return <button className={ lng.code === i18n.language ? "selected" : "current"} 
                
                key={lng.code} 
                
                onClick={()=>changeLanguage(lng.code)}><img src={lng.Image} /></button>
            })
        }
    </div>
 )}

 export default LanguageSelector;