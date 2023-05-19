import '../carouselstories/CS.css'
import React from 'react'
import Slider from "react-slick";
import img1 from '../../assets/images-B/caption.jpg'
import img2 from '../../assets/images-B/caption (1).jpg'
import img3 from '../../assets/images-B/caption (2).jpg'
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
const Exampleslider = () => {
    const settings = {
        dots: false,
        infinite: true,
        fade: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
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
            <div className='img-sider'>
                <Slider {...settings}>
                    <div className='overlay'>
                        <div className='mytext text-white'>
                            <div className='c-content w-75 px-5 mx-5 '>
                                <h1>  <a href="#">Where to ditch the crowds for a peaceful Memorial Day Weekend</a></h1>
                                <p>  <a href="#">From coastal Canada to the Midwest, these spots are ideal for a laid-back long weekend</a></p>
                                <button className='btn-1' > Read More</button>
                            </div>
                        </div>
                        <img className='img-fluid mx-auto w-100' src={img1} alt="" />
                    </div>
                    <div className='overlay'>
                        <div className='mytext text-white'>
                            <div className='c-content w-75 px-5 mx-5 '>
                                <h1>  <a href="#">Going beyond the mega-resorts in Mexico's Riviera Maya</a></h1>
                                <p> <a href="#">Elise Osafo gets off the tourist track for delicious food, cenote adventures, and more</a></p>
                                <button className='btn-1' > Read More</button>
                            </div>
                        </div>
                        <img className='img-fluid mx-auto w-100' src={img2} alt="" />
                    </div>
                    <div className='overlay'>
                        <div className='mytext text-white'>
                            <div className='c-content w-75 px-5 mx-5 '>
                                <Badge className='color-1 text-dark fw-normal' variant="">SPONSORED</Badge>
                                <h1><a href="#">A Type A person’s guide to being spontaneous this summer</a></h1>
                                <p> <a href="#">Take deep breaths and ditch your Google Sheet</a></p>
                                <button className='btn-1' > Read More</button>
                            </div>
                        </div>
                        <img className='img-fluid mx-auto w-100' src={img3} alt="" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Exampleslider
