import React from 'react'
import '../Hotels/Hotel.css'
import Navbar2 from '../../layouts/header/Navbar2'
import Footer from '../../layouts/Footer/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BiSearch } from "react-icons/bi";
import Dropdown from 'react-bootstrap/Dropdown';
import NavList from '../../layouts/header/NavList'
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { Restaurant } from '../../components/dummyData.js/Api-data'
const Hotel = () => {
    return (
        <>
            <Navbar2 />
            <NavList />
            <section>
                <Container className='main-hotel-bg py-5' fluid>
                    <Container>
                        <Row className='text-center text-white py-5 my-5 justify-content-center'>
                            <Col lg={12}>
                                <h2>Latest reviews. Lowest prices.</h2>
                                <Row className='bg-white div-round align-items-center my-5'>
                                    <Col className='px-0' lg={6}>
                                        <div class="form-group has-search">
                                            <span className='form-control-feedback'><BiSearch className='mt-3 fs-3 ms-2' /></span>
                                            <input type="text" class="form-control" placeholder="Hotel name or destination" />
                                        </div>
                                    </Col>
                                    <Col className='d-flex border-start border-end' lg={2}>
                                        <input className='border-0 me-auto px-2' type="date" id="birthday" name="birthday" />
                                        <input className='border-0 px-2' type="date" id="birthday" name="birthday" />
                                    </Col>

                                    <Col className='drop-btn drop-hotels' lg={2}>
                                        <Dropdown className='pt-0'>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                               <span className='fw-normal'>1 room, 1 guest</span>  <BsFillCaretDownFill className='mt-1 ms-1'/>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">1 room </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">4 Adults </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">0 children </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Col>
                                    <Col className='px-0 ms-auto' lg={2}>
                                        <button className='hotel-btn ms-auto'>Find hotels</button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='pt-5 py-4'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <div> <h4>Top hotels in Rahimyar Khan</h4></div>
                            <div><h6> See all</h6></div>
                        </Col>
                    </Row>
                    <Row className='pb-5'>
                        {
                            Restaurant?.map((item, i) => {
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
                                                <small className='text-muted'>{item.location}</small>
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

export default Hotel
