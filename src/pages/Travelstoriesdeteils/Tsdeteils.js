import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar2 from '../../layouts/header/Navbar2'
import Footer from '../../layouts/Footer/Footer'
import { Container, Row, Col } from 'react-bootstrap'

const Tsdeteils = () => {
    const location = useLocation()
    const item = location
    console.log('data', item)

    return (
        <div>
            <Navbar2 />
            <Container>
                <Row className="justify-content-center py-5">
                    <Col lg={10}>
                        <h1>{item?.state?.data?.title}</h1>
                        <img className='img-fluid' src={item?.state?.data?.images} alt="" />
                        <p>{item?.state?.data?.para}</p>
                    </Col>
                    <Col lg={10}>
                        <div>
                            <p>Memorial Day marks the unofficial start of summer. But, in many places, this long weekend in late May has also become synonymous with teeming beaches, cramped parking lots, long lines, gridlocked traffic, overflowing restaurants, and jam-packed hiking trails.</p>
                            <p>
                                It doesn’t have to be this way. Whether you’re fed up with the crowds or just burned out from visiting the same beach year after year, know that it is still possible to have a fun, relaxing Memorial Day Weekend getaway—if you head off the beaten path a bit. Mix it up this year by visiting one of these laid-back North American destinations</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />

        </div>
    )
}

export default Tsdeteils
