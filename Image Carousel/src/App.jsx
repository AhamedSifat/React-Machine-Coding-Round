import Carousel from './components/Carousel';
// import CarouselV2 from './components/Carousel_V2';
import './App.css';
// import './style.css';
import One from './assets/1.jpg';
import Two from './assets/2.jpg';
import Three from './assets/3.jpg';
import Four from './assets/4.jpg';
import Five from './assets/5.jpg';

const App = () => {
  return (
    <div className='app'>
      <Carousel>
        <img src={One} alt='One' />
        <img src={Two} alt='Two' />
        <img src={Three} alt='Three' />
        <img src={Four} alt='Four' />
        <img src={Five} alt='Five' />
      </Carousel>
    </div>
  );
};

export default App;
