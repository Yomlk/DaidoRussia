import Swiper from './Swiper';


const App: React.FC = () => {
  const slides = [
    {
        image:'src/components/Swiperblk/img/vtulki.png',
        text: 'Втулки верхней головки шатуна для двигателей КАМАЗ'
    },
    {
        image:'https://via.placeholder.com/600x400?text=Slide+2',
        text: 'Втулки верхней головки шатуна для двигателей ММЗ'
    },
    {
        image:'https://via.placeholder.com/600x400?text=Slide+3',
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