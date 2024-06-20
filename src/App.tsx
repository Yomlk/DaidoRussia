import "../node_modules/bootstrap/scss/bootstrap.scss";
import 'swiper/css';
import 'swiper/css/effect-fade';

import 'swiper/css/pagination';
import './styles/null.scss'
import './styles/fonts.scss'


import {Header, Slider, Video, Product, Check} from './components/index'

export default function App() {
  const navItems = ['О компании','Продукция','Проверка подлинности','Контакты']

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
    <Video />
    <Product />
    <Check />
    </>
  );
}


