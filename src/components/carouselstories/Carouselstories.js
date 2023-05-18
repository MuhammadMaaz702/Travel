import React from 'react'
import '../carouselstories/CS.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images-B/caption.jpg'
import img2 from '../../assets/images-B/caption (1).jpg'
import img3 from '../../assets/images-B/caption (2).jpg'
const Carouselstories = () => {
    return (
        <>
            <Carousel className='img-sider'>
                <Carousel.Item className=''>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='c-content w-75 px-5 mx-5'>
                        <h1>Where to ditch the crowds for a peaceful Memorial Day Weekend</h1>
                        <p>From coastal Canada to the Midwest, these spots are ideal for a laid-back long weekend.</p>
                        <button className='btn-1' > Read More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className='c-content w-75 px-5 mx-5'>
                        <h1>Where to ditch the crowds for a peaceful Memorial Day Weekend</h1>
                        <p>From coastal Canada to the Midwest, these spots are ideal for a laid-back long weekend.</p>
                        <button className='btn-1' > Read More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className='c-content w-75 px-5 mx-5'>
                        <h1>Where to ditch the crowds for a peaceful Memorial Day Weekend</h1>
                        <p>From coastal Canada to the Midwest, these spots are ideal for a laid-back long weekend.</p>
                        <button className='btn-1' > Read More</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Carouselstories


