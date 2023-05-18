import React from 'react'
import '../Travel-stories/Travelstories.css'
import NavList from '../../layouts/header/NavList'
import Navbar2 from '../../layouts/header/Navbar2'
import Carouselstories from '../../components/carouselstories/Carouselstories'
import { Container, Row, Col, Badge, Card } from 'react-bootstrap'
import img1 from '../../assets/images-B/r1.jpg'
import img2 from '../../assets/images-B/r2.jpg'
import img3 from '../../assets/images-B/r3.jpg'
import img4 from '../../assets/images-B/r4.jpg'
import img5 from '../../assets/images-B/c1.jpg'
import img6 from '../../assets/images-B/c2.jpg'
import img7 from '../../assets/images-B/c3.jpg'
const Travelstories = () => {
  return (
    <>
      <Navbar2 />
      <NavList />
      <section>
        <Container fluid>
          <Row className='justify-content-center py-4'>
            <Col lg={11}>
              <Carouselstories />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='text-center pt-5 justify-content-center'>
            <Col lg={7}>
              <div className='heading-1'>
                <h1>Food and Drink</h1>
                <p>Dig into the best restaurants and bars, street food, and culinary hotspots around the world. Who's hungry?</p>
              </div>

            </Col>
          </Row>
          <Row className='pb-5 pt-4 row-hight'>
            <Col lg={9}>
              <div className='bg-size box-1'>

              </div>
            </Col>

            <Col lg={3}>
              <Row>
                <Col lg={12} >
                  <div className='bg-size box-2'>

                  </div>
                </Col>
                <Col className='' lg={12} >
                  <div className='bg-size box-3'>

                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className='row-img pb-5'>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>
                <div className='col-5'> <img className='img-fluid' src={img1} alt="" /> </div>
                <div className='col-7  ps-3 pt-1'><h6>America’s 8 coolest coastal towns for seafood lovers</h6> </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>
                <div className='col-5'> <img className='img-fluid' src={img2} alt="" /> </div>
                <div className='col-7  ps-3 pt-1'><h6>7 Charleston restaurants to try when the top tables.</h6> </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>

                <div className='col-5'> <img className='img-fluid' src={img3} alt="" /> </div>
                <div className='col-7  ps-3 pt-1'>
                  <Badge className='mb-2' bg="secondary">SPONSORED</Badge>
                  <h6>Visit New Jersey’s Black Heritage sites</h6>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className=' d-flex justify-content-between hover-style'>
                <div className='col-5'> <img className='img-fluid' src={img4} alt="" /> </div>
                <div className='col-7 ps-3 pt-1' ><h6>We gave unanswered Washington D.C....</h6> </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Row className='justify-content-center pt-5'>
            <Col lg={9}>
              <h4>Pack like a pro</h4>
              <p>Hand-picked essentials for your next trip</p>
            </Col>
          </Row>
          <Row className='justify-content-center text-center'>
            <Col lg={3}>
              <Card className='border-0 rounded-0 '>
                <Card.Img className='rounded-0' variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>The best carry-on luggage to buy in 2023</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='border-0 rounded-0 '>
                <Card.Img className='rounded-0' variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>Baby travel essentials to pack for every vacation</Card.Title>


                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='border-0 rounded-0 '>
                <Card.Img className='rounded-0' variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>The best sun hats for beach days, long hikes, and everything in between</Card.Title>


                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Travelstories
