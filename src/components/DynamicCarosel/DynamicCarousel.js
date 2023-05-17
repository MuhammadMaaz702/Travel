import React from 'react'
import './dynamiccarousel.css'
import Slider from "react-slick";
import { TypoGraphy } from '../../assets/fonts/Fonts';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import find1 from '../../assets/images/find1.jpg'
import find2 from '../../assets/images/find2.jpg'
import find3 from '../../assets/images/find3.jpg'
import find4 from '../../assets/images/find4.jpg'
import find5 from '../../assets/images/find5.jpg'
import { TripAdvisor } from '../dummyData.js/Dummy';
import { TbLineDotted } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import brd from '../../assets/images/birdico.svg'


export default function DynamicCarousel() {
    var settings = {
        className: 'advised',
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 4,
        nextArrow: <FaArrowRight className="slick-arrow slick-prev arr-right" />,
        prevArrow: <FaArrowLeft className="slick-arrow slick-next arr-right" />,
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
                    {TripAdvisor.map((n, i) => (
                        <div key={i} className="find-by">
                            <div className='position-relative'>
                                <img src={n.img} alt="" />
                                <div className='heart-icon'>
                                    <AiOutlineHeart />
                                </div>
                                <div className='bird-icon'>
                                    <img src={brd} alt="" />
                                    <span>2023</span>
                                </div>
                            </div>

                            <h4 style={TypoGraphy.heading3}>{n.title}</h4>
                            <span className='dot-svg'><svg class="UctUV d H0 hzzSG" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)"></path></svg></span><span>{n.rating}</span>
                            <p style={TypoGraphy.paragraph}>from {n.price} per/Adult</p>


                        </div>
                    ))}

                </Slider>
            </div>
        </>

    );
}
