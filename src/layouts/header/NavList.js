import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Dropdown, Container,Row,Col } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const NavList = () => {
    return (
        <>
            <div className='border-line'>
                <Container>
                    <Row className="justify-content-center">
                        <Col className='' lg={11}>
                            <Nav className="Nav-link-style px-2" activeKey="/home">
                                <Nav.Item>
                                    <Nav.Link><Link className='text-decoration-none' to="/">Home</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/hotels">Hotels</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/thingstodo">Things to Do</Link></Nav.Link>                          
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/restaurants">Restaurants</Link></Nav.Link>                      
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/">Flights</Link></Nav.Link>                                
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/">Vacation Rentals</Link></Nav.Link>                                  
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/">Shopping</Link></Nav.Link>                                  
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/">Cruises</Link></Nav.Link>                                   
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link><Link className='text-decoration-none' to="/">Rental Cars</Link></Nav.Link>                                 
                                </Nav.Item>
                                <Nav.Item>
                                    <div class="dropdown">
                                        <BsThreeDots class="dropbtn text-dark" />
                                        <div className="dropdown-content">
                                            <a href="#">Add a place</a>
                                            <a href="#">Travel From</a>
                                            <a href="#">Airlines</a>
                                            <a href="#">Travelers' Choices</a>
                                            <a href="#">Road Trips</a>
                                            <a href="#">Help Center</a>
                                            <a href="#">Travel stories</a>
                                        </div>
                                    </div>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>

                </Container>
            </div >

        </>
    )
}

export default NavList
