import React, { useState, useRef } from 'react'
import './CS.css'
import Slider from "react-slick";
import img4 from '../../assets/images-B/r4.jpg'
import img5 from '../../assets/images-B/c1.jpg'
import img6 from '../../assets/images-B/c2.jpg'
import img7 from '../../assets/images-B/c3.jpg'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import imgs1 from '../../assets/images-B/p1.jpg'
import imgs2 from '../../assets/images-B/p2.jpg'
import imgs3 from '../../assets/images-B/p3.jpg'
import imgs4 from '../../assets/images-B/p4.jpg'
import imgs5 from '../../assets/images-B/p5.jpg'
import imgs6 from '../../assets/images-B/p6.jpg'
const dummydata = [

    {
        image: imgs1,
        "title": "Experience Aboriginal culture in the Northern Territory",
        "para": "Northern Territory - Australia"
    },
    {
        image: imgs2,
        "title": "Off-Season Travel Perks in the Northern Territory",
        "para": "Northern Territory - Australia"
    },
    {
        image: imgs3,
        "title": "Go Road Trippin’ in the Northern Territory",
        "para": "Northern Territory - Australia"
    },
    {
        image: imgs4,
        "title": "Lavish Escape in the Northern Territory",
        "para": "Northern Territory - Australia"
    },
    {
        image: imgs5,
        "title": "Escape the Ordinary in the Northern Territory",
        "para": "Northern Territory - Australia"
    },
    {
        image: imgs6,
        "title": "How to Spend 5 Nights in the Northern Territory",
        "para": "Northern Territory - Australia"
    },

    
]




const Sliderstories = () => {
    const sliderRef = useRef();
    const [data, setData] = useState(dummydata)
    console.log(data)

    const gotoNext = () => {
        sliderRef.current.slickNext()
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev()
    }


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            <div className='slide-pos'>
                <h4 className='ps-2'>From Our Partners: Explore Australia's Northern Territory</h4>
                <Slider className='btn-hide' ref={sliderRef} {...settings}>
                    {
                        data?.map((item, i) => {
                            return (
                                <>

                                    <div key={i}>
                                        <Card className='border-0 rounded-0 three-card'>
                                            <span><AiOutlineHeart className='ms-2' /></span>
                                            <Card.Img className='rounded-0' variant="" src={item.image} />
                                            <Card.Body className='px-4 text-center'>
                                                <p className='text-bold'>{item.para}</p>
                                                <Card.Title>
                                                    <a className='text-decoration-none text-dark' href="#"> {item.title}</a>
                                                </Card.Title>
                                            </Card.Body>
                                            <div className='text-center'>
                                                <AiFillHeart className='color-sample-1'/>
                                                <p className='color-sample-2'>0 items</p>
                                            </div>
                                        </Card>
                                    </div>
                                </>
                            )
                        })
                    }

                </Slider>
                <div className="text-center btn-back">
                <button className="border-0 bg-transparent bt-set" onClick={gotoPrev}>
                <BsArrowLeft className='btn-2-style' />               
                </button>

                <button className="border-0 bg-transparent bt-set2" onClick={gotoNext}>
                     <BsArrowRight className='btn-2-style' />
                </button>
            </div>
            </div>
           
        </>
    )
}

export default Sliderstories
