import React from 'react'
import '../Footer/footer.css';
import { Container, Row, Col,Form } from 'react-bootstrap'
//  import logo from '../../assets/images/Tripadvisor.svg'

const Footer = () => {
  return (
    <>
      <section className='footer-bg py-4'>
        <Container>
          <Row className='justify-content-center footer-style'>
            <Col lg={11}>
              <Row>
                <Col lg={2}>
                  <ul className='list-unstyled'>
                    <h6 className='f-color1 fw-normal'>About Tripadvisor</h6>
                    <li><a href="#"> About Us</a></li>
                    <li><a href="#"> Press</a></li>
                    <li><a href="#"> Resources and Policies</a></li>
                    <li><a href="#"> Trust & Safety</a></li>
                    <li><a href="#"> Contact us</a></li>
                    <li><a href="#"> Accessibility Statement</a></li>
                  </ul>
                </Col>
                <Col lg={2}>
                  <ul className='list-unstyled'>
                    <h6 className='f-color1 fw-normal'>Explore</h6>
                    <li><a href="#"> About Us</a></li>
                    <li><a href="#"> Help Center</a></li>
                    <li><a href="#"> Tripadvisor Plus</a></li>
                  </ul>
                </Col>
                <Col lg={2}>
                  <ul className='list-unstyled'>
                    <h6 className='f-color1 fw-normal'>Do Business With Us</h6>
                    <li><a href="#"> Owners</a></li>
                    <li><a href="#"> Business Advantage</a></li>
                    <li><a href="#"> Sponsored Placements</a></li>
                    <li><a href="#"> Advertise with Us</a></li>
                    <li><a href="#"> Access our Content API</a></li>
                    <li><a href="#"> Become an Affiliate</a></li>
                  </ul>
                  <ul className='list-unstyled'>
                    <h6 className='f-color1 fw-normal'>Get The App</h6>
                    <li><a href="#">iPhone App</a></li>
                    <li><a href="#">Android App</a></li>
                  </ul>
                </Col>
                <Col className='ms-auto' lg={4}>
                  <h6 className='f-color1 fw-normal '>Tripadvisor Sites</h6>
                  <div className='line-high pt-'>
                    <small className='d-block'>Discover your dream destination with <span className='fw-bold'>Jetsetter</span> </small>
                    <small className='d-block'>Book the best restaurants with <span className='fw-bold'>TheFork</span> </small>
                    <small className='d-block'>Book tours and attraction tickets on <span className='fw-bold'> Viator</span></small>
                    <small className='d-block'>Read cruise reviews on <span className='fw-bold'>Cruise Critic</span> </small>
                    <small className='d-block'> Get airline seating charts on <span className='fw-bold'> Seat Guru</span></small>
                    <small className='d-block'>Find vacation rentals on <span className='fw-bold'> FlipKey</span></small>
                    <small className='d-block'>Search for holiday rentals on <span className='fw-bold'> Holiday Lettings</span></small>
                    <small className='d-block'>Plan and book your next trip with <span className='fw-bold'> Reco Trip Designers</span></small>
                  </div>
                </Col>
                <Col className='row' lg={12}>
                  <div className='col-8'>
                    <div className='d-flex'>
                      <div><a href="#">LOGO</a></div>
                      <div className='ps-4'>
                        <small className='d-block'>© 2023 Tripadvisor LLC All rights reserved.</small>
                        <ul className='d-flex list-unstyled'>
                          <li className='mx-2'><a href="#">Terms of Use</a></li>
                          <li className='mx-2'><a href="#">Privacy and Cookies Statement</a></li>
                          <li className='mx-2'><a href="#">Cookie consent</a></li>
                          <li className='mx-2'><a href="#">Site Map</a></li>
                        </ul>
                        <ul className='d-flex list-unstyled'>
                          <li className='mx-2'><a href="#">How the site works</a></li>
                          <li className='mx-2'><a href="#">Contact us</a></li>
                        </ul>
                      </div>
                    </div>
                    <small>This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</small>
                  </div>
                  <div className='col-4 d-flex grid gap-3'>
                    <div>
                      <Form.Select aria-label="Default select example">
                        <option>PKR</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div>
                      <Form.Select aria-label="Default select example">
                        <option>United States</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">United States</option>
                      </Form.Select>
                      <ul className='d-flex list-unstyled mt-3'> 
                        <li className='mx-2'><a href="#"> fb</a></li>
                        <li className='mx-2'><a href="#"> twittet</a></li>
                        <li className='mx-2'><a href="#"> insta</a></li>
                        <li className='mx-2'><a href="#"> youtube</a></li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>


      </section>
    </>
  )
}

export default Footer
