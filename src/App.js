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
import Navbar2 from './layouts/header/Navbar2';
import Travelstories from './pages/Travel-stories/Travelstories';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/travelstories" element={<Travelstories />} />
      </Routes>
    
    </>
  );
}

export default App;
