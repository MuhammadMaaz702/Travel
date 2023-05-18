import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.svg'
import '../header/header.css'
import { GoPencil } from "react-icons/go";
import { AiOutlineHeart, AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { TypoGraphy } from '../../assets/fonts/Fonts';
import { Form } from 'react-bootstrap'
import { BiSearch } from "react-icons/bi";
import { Container, Row, Col } from 'react-bootstrap';


const Navbar2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <div className='py-4'>
                    <div className='d-flex px-2 align-items-center'>
                        <Button variant="primary" className="d-lg-none" onClick={handleShow}>
                            Launch
                        </Button>
                        <div className='logo d-flex '><img src={logo} alt="" /></div>

                        <div className='Nav-from-style px-4 col-lg-4'>
                            <Form>
                                <Form.Group className="" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="" />
                                    <span className='icon-postion'><BiSearch className='' /></span>
                                </Form.Group>
                            </Form>
                        </div>

                        <div className='navbar ms-auto'>
                            <ul className='d-none d-lg-flex mb-0 pb-0'>
                                <li>
                                    <a href=""><GoPencil className='me-1' />Reviews</a>
                                </li>
                                <li>
                                    <a href=""><AiOutlineHeart className='me-1' />Trips</a>
                                </li>
                                <li>
                                    <a href=""><AiOutlineBell className='me-1' />Alert</a>
                                </li>
                                <li className='login-btn'>
                                    <a href="">Sign in</a>
                                </li>
                                <li>
                                    <a href=""><AiOutlineShoppingCart className='me-1' /> Cart</a>
                                </li>

                            </ul>
                            <div className='d-none d-sm-flex d-lg-none'>
                                <h2 style={TypoGraphy.heading1}>hassan</h2>
                                <h4>hassan</h4>
                            </div>
                        </div>

                    </div>

                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        {/* <Offcanvas.Body>
      <p className="mb-0">
        hassan sardar
      </p>
    </Offcanvas.Body> */}
                    </Offcanvas>
                </div>


            </Container>

        </>
    )
}

export default Navbar2

