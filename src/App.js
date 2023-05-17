import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './layouts/header/Header.js'
import Interests from './components/interests/Interests';
import HomePage from './pages/HomePage/HomePage';
import { Modal } from 'bootstrap';
import CarouselSlider from './components/carousel/CarouselSlider';
import DynamicCarousel from './components/DynamicCarosel/DynamicCarousel';
import FirstTripList from './components/HotelListing/FirstTripList';
import HelpPlanet from './components/PlanetHelp/HelpPlanet';

function App() {
  return (
    <div className="App">
      <Header />
      <Interests />
      <HomePage />
      <CarouselSlider />
      <DynamicCarousel />
      <FirstTripList />
      <HelpPlanet/>
    </div>
  );
}

export default App;
