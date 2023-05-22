import React from 'react'
import '../../pages/things-to-do/things.css'
import Navbar2 from '../../layouts/header/Navbar2'
import Footer from '../../layouts/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BiSearch } from "react-icons/bi";
import NavList from '../../layouts/header/NavList'
import dots from '../../assets/images-B/dotsss.svg'
import free from '../../assets/images-B/free_cancel.svg'
import carcal from '../../assets/images-B/low_prices.svg'
import { AiOutlineHeart } from 'react-icons/ai';
import { blogs } from '../../components/dummyData.js/Api-data'
const ThingsToDo = () => {
    return (
        <>
            <Navbar2 />
            <NavList />
            <section>
                <Container className='thinks-hotel-bg py-5' fluid>
                    <Container>
                        <Row className='text-center text-white py-5 my-5 justify-content-center'>
                            <Col lg={11}>
                                <h2 className='py-4'>Find tours, activities, and more</h2>
                                <div class="form-group has-search rounded-form">
                                    <span className='form-control-feedback'><BiSearch className='mt-3 fs-3 ms-2' /></span>
                                    <input type="text" class="form-control" placeholder="Search destination, attraction, or activily" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
            <section>
                <Container className='py-5'>
                    <Row className='text-center justify-content-center'>
                        <Col>
                            <h5 className='fw-bold'>Why Book on Tripadvisor?</h5>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className='text-center dots-img-size'>
                                <div className='mb-3'><img className='img-fluid' src={dots} alt="" /></div>
                                <div className='text-body px-5'>
                                    <h6>Trusted Reviews and Ratings</h6>
                                    <small>Know you're booking the best thanks to our helpful global traveler community</small>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center dots-img-size2'>
                                <div className='mb-3'><img className='img-fluid' src={free} alt="" /></div>
                                <div className='text-body px-5'>
                                    <h6>Free 24-hour Cancellations</h6>
                                    <small>Plans changed? No problem. Change or cancel up to 24 hours before your experience</small>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center dots-img-size2'>
                                <div className='mb-3'><img className='img-fluid' src={carcal} alt="" /></div>
                                <div className='text-body px-5'>
                                    <h6>Low-price Guarantee</h6>
                                    <small>Enjoy the best experiences at the best price, every time</small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                <Row className='pt-5 py-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <div> <h4>Good for a rainy day in Amsterdam</h4></div> 
                             <div><h6> See all</h6></div>
                        </Col>
                    </Row>
                    <Row className='pb-5'>
                        
                            {
                                blogs?.map((item, i) => {
                                    return (
                                            <Col key={i} lg={3}>
                                            <Card className='border-0 rounded-0 three-card thing-card-img'>
                                                <span><AiOutlineHeart className='ms-2' /></span>
                                                <Card.Img className='rounded-0' variant="" src={item.Images} />
                                                <Card.Body className='px-0  dot-svg2'>
                                                    <Card.Text className='fw-normal mb-0'>
                                                        {item.title}
                                                    </Card.Text>
                                                    <ul className='list-unstyled d-flex align-items-center mb-0'>
                                                        <li className='text-success'>  <svg class="UctUV d H0 hzzSG" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)"></path></svg></li>
                                                        <li className='ms-2'><small className='text-muted'>{item.review} Reviews</small></li>
                                                    </ul>
                                                    <small className='text-muted'>Amsterdam, The Netherlands</small>
                                                </Card.Body>
                                            </Card>
                                            </Col>
                            
                                    )
                                })
                            }
                      
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default ThingsToDo
