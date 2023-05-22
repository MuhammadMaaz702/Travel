import '../carouselstories/CS.css'
import React, { useRef, useState } from 'react'
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Slider from "react-slick";
import img1 from '../../assets/images-B/caption.jpg'
import img2 from '../../assets/images-B/caption (1).jpg'
import img3 from '../../assets/images-B/caption (2).jpg'
import { Link, useNavigate } from 'react-router-dom';

const Exampleslider = () => {
    const sliderRef = useRef();
    const history = useNavigate()
    const [data, setData] = useState([
        {
            id: 1,
            images: img1,
            title: "Where to ditch the crowds for a peaceful Memorial Day Weekend",
            para: "From coastal Canada to the Midwest, these spots are ideal for a laid-back long weekend"
        },
        {
            id: 2,
            images: img2,
            title: "Going beyond the mega-resorts in Mexico's Riviera Maya",
            para: "Elise Osafo gets off the tourist track for delicious food, cenote adventures, and more"
        },
        {
            id: 3,
            images: img3,
            title: "A Type A person’s guide to being spontaneous this summer",
            para: "Take deep breaths and ditch your Google Sheet"
        },
    ]);
    const gotoNext = () => {
        sliderRef.current.slickNext()
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev()
    }

    const hendleMap = (item) => {
        history('/travelstoriesdetails', { state: { data: item } })
    }


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
            <div className='img-sider slide-pos'>
                <Slider ref={sliderRef} {...settings}>
                    {
                        data?.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className='overlay'>
                                        <div className='mytext text-white'>
                                            <div className='c-content w-75 px-5 mx-5 '>
                                                <h1>  <a href="#">{item.title}</a></h1>
                                                <p>  <a href="#">{item.para}</a></p>
                                                <button onClick={() => hendleMap(item)} className='btn-1' > Read More</button>
                                            </div>
                                        </div>
                                        <img className='img-fluid mx-auto w-100 main-slider-height' src={item.images} alt="" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
                <div className="text-center btn-back">
                    <button className="border-0 bg-transparent bt-set-main1" onClick={gotoPrev}>
                        <BsArrowLeft className='btn-2-style' />
                    </button>

                    <button className="border-0 bg-transparent bt-set-main2" onClick={gotoNext}>
                        <BsArrowRight className='btn-2-style' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Exampleslider
