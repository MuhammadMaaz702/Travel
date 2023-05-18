import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Dropdown, Container } from 'react-bootstrap';
import {BsThreeDots} from 'react-icons/bs';
const NavList = () => {
    return (
        <>
            <div className='border-line'>
                <Container>
                    <Nav className="Nav-link-style" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Hotels</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Things to Do</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Restaurants</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Flights</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Vacation Rentals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Shopping</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Cruises</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Rental Cars</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <div class="dropdown">                           
                                <BsThreeDots class="dropbtn text-dark"/>
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
                </Container>
            </div >

        </>
    )
}

export default NavList
