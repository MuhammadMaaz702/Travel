import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/images/logo.svg'
import './header.css'
import { GoPencil } from "react-icons/go";
import {Link} from 'react-router-dom'

import { AiOutlineHeart, AiOutlineBell, AiOutlineShoppingCart } from "react-icons/ai";
import { TypoGraphy } from '../../assets/fonts/Fonts';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='py-4'>
      <div className='d-flex justify-content-between align-items-center'>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>
      <div className='logo'><Link to="/"><img src={logo} alt="" /></Link></div>

      <div className='navbar'>
      <ul className='d-none d-lg-flex'>
        <li>
            <a href=""><GoPencil className='me-1'/>Reviews</a>
        </li>
        <li>
            <a href=""><AiOutlineHeart className='me-1'/>Trips</a>
        </li>
        <li>
            <a href=""><AiOutlineBell className='me-1'/>Alert</a>
        </li>
        <li className='login-btn'>
            <a href="">Login</a>
        </li>
        <li>
            <a href=""><AiOutlineShoppingCart className='me-1'/> Cart</a>
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
  );
}


export default Header;
