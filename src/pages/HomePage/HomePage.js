import React from 'react'
import './homepage.css'
import { AiOutlineSearch } from 'react-icons/ai';
import Header from '../../layouts/header/Header';
import Interests from '../../components/interests/Interests';
import CarouselSlider from '../../components/carousel/CarouselSlider';
import DynamicCarousel from '../../components/DynamicCarosel/DynamicCarousel';
import FirstTripList from '../../components/HotelListing/FirstTripList';
import HelpPlanet from '../../components/PlanetHelp/HelpPlanet';
export default function HomePage() {
  return (
    <div className='container'>
      <Header />
      <Interests />
      <div className='home-page'>
        <div className='home-search'>
          <form action="" className='position-relative'>
            <div>
              <input type="text" placeholder='Where to Go?' />
              <span className='search-icon' type='submit'><AiOutlineSearch /></span>
            </div>
          </form>
        </div>
      </div>
      <CarouselSlider />
      <DynamicCarousel />
      <FirstTripList />
      <HelpPlanet />
    </div>
  )
}
