import React from 'react'
import '../Restaurant/Restaurant.css'
import Navbar2 from '../../layouts/header/Navbar2'
import NavList from '../../layouts/header/NavList'
import Footer from '../../layouts/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BiSearch } from "react-icons/bi";
import icon1 from '../../assets/images-B/res1.png'
import icon2 from '../../assets/images-B/res2.png'
import icon3 from '../../assets/images-B/res3.png'
import { AiOutlineHeart } from 'react-icons/ai';
import { ResApi} from '../../components/dummyData.js/Api-data'
const Restaurant = () => {
    return (
        <>
            <Navbar2 />
            <NavList />
            <section>
                <Container className='restaurant-hotel-bg py-5' fluid>
                    <Container>
                        <Row className='text-center text-white py-5 my-3 justify-content-center'>
                            <Col lg={11}>
                                <h2 className='py-4'>Find your perfect restaurant</h2>
                                <div class="form-group has-search rounded-form">
                                    <span className='form-control-feedback'><BiSearch className='mt-3 fs-3 ms-2' /></span>
                                    <input type="text" class="form-control mb-5" placeholder="City or restaurant name" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='justify-content-center text-center py-5'>
                        <Col lg={4}>
                            <div className='text-center border res-img'>
                                <div><img className='img-fluid minis-top' src={icon1} alt="" /></div>
                                <div className='px-5 mt-5'>
                                    <h5>Find the best place to eat</h5>
                                    <p> 4.3 million restaurants — everything from street food to fine dining</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center border  res-img'>
                                <div><img className='img-fluid minis-top ' src={icon2} alt="" /></div>
                                <div className='px-5 mt-5'>
                                    <h5> See the latest reviews</h5>
                                    <p>  Millions of restaurant reviews and photos from our global travel community</p>
                                </div>

                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='text-center border res-img'>
                                <div><img className='img-fluid minis-top' src={icon3} alt="" /></div>
                                <div className='px-5 mt-5'>
                                    <h5> Reserve a table</h5>
                                    <p>   Make online reservations at restaurants worldwide</p>
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
                            <div> <h4>New and trending restaurants in Amsterdam</h4></div>
                            <div><h6> See all</h6></div>
                        </Col>
                    </Row>
                    <Row className='pb-5'>

                        {
                            ResApi?.map((item, i) => {
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

export default Restaurant
