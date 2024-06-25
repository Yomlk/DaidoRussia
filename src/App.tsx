import "swiper/css";
import "swiper/css/effect-fade";

import "swiper/css/pagination";
import "./styles/null.scss";
import "./styles/fonts.scss";

import {
  Header,
  Slider,
  Video,
  Product,
  Check,
  FormBlk,
  Map,
  Footer,
} from "./components/index";
import LanguageSelector from "./components/languages/languageselector";

const App = () => {
  
  
  const navItems = [
    "О компании",
    "Продукция",
    "Проверка подлинности",
    "Контакты",
  ];

  return (
    <>
    
      
      <Header
        logo="./src/components/Header/img/logo.png"
        nameCompany="ДАЙДО МЕТАЛЛ РУСЬ"
        navItems={navItems}
        button1Image="./src/components/Header/img/rus.svg"
        button2Image="./src/components/Header/img/usa.svg"
        
      />
      
      
        
      
      
    
    
      
      <Slider />
      <div id = "о компании"><Video /></div>
      
      <div id="продукция"></div><Product />
      <div id="проверка подлинности"></div><Check />
      <FormBlk />
      <Map />
      <div id="контакты"></div><Footer />
    </>
  );
}

export default App;
