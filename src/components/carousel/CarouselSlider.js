import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import './caroselslider.css'
import { TypoGraphy } from '../../assets/fonts/Fonts';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import find1 from '../../assets/images/find1.jpg'
import find2 from '../../assets/images/find2.jpg'
import find3 from '../../assets/images/find3.jpg'
import find4 from '../../assets/images/find4.jpg'
import find5 from '../../assets/images/find5.jpg'

export default function CarouselSlider()  {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      nextArrow: <FaArrowRight className="slick-arrow slick-prev" />,
      prevArrow: <FaArrowLeft className="slick-arrow slick-next" />,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <>
         
      <div className="carousel-wraper">
      <h3 className="find-sec-head" style={TypoGraphy.heading2}>Find Things to Do by Interests</h3>
      <p style={TypoGraphy.paragraph}>Collections of our best bookable experiences</p>
        <Slider {...settings}>
          <div className="find-by">
            <img src={find1} alt="" />
            <h3 style={TypoGraphy.heading2} className="find-heading">OutDoors</h3>
          </div>
          <div className="find-by">
          <img src={find2} alt="" />
            <h3 style={TypoGraphy.heading2} className="find-heading">Food and Drink</h3>
          </div>
          <div className="find-by">
          <img src={find3} alt="" />
            <h3 style={TypoGraphy.heading2} className="find-heading">Arts and Culture</h3>
          </div>
          <div className="find-by">
          <h3 style={TypoGraphy.heading2} className="find-heading">By the Water</h3>
          <img src={find4} alt="" />
            
          </div>
          <div className="find-by">
          <img src={find5} alt="" />
            <h3 style={TypoGraphy.heading2} className="find-heading">Browes All</h3>
          </div>
        </Slider>
      </div>
        </>
     
    );
  }
