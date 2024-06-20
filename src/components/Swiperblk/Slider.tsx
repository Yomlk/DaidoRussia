import Swiper from './Swiper';


const App: React.FC = () => {
  const slides = [
    {
        image:'src/components/Swiperblk/img/slide1.png',
        text: 'Втулки верхней головки шатуна для двигателей КАМАЗ'
    },
    {
        image:'src/components/Swiperblk/img/slide2.png',
        text: 'Втулки верхней головки шатуна для двигателей ММЗ'
    },
    {
        image:'src/components/Swiperblk/img/slide3.png',
        text: 'Коренные и шатунные вкладыши для двигаталей КАМАЗ'
    }
    
    
    
  ];
 
   
   
   
 

  return (
    <div className="App">
      
      <Swiper slides={slides}/>
      
    </div>
  );
};

export default App;