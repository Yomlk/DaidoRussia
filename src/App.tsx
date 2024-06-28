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
        logo="./public/img/Header/logo.png"
        navItems={navItems} 
      />

      <Slider />
      <section id="о компании">
        <Video />
      </section>

      <section id="продукция"><Product /></section>
      
      <section id="проверка подлинности"><Check /></section>
      
      <FormBlk />
      <Map />
      <footer id="контакты"><Footer /></footer>
      
    </>
  );
};

export default App;
