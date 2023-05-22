import React, { useState } from 'react'
import '../Travel-stories/Travelstories.css'
import NavList from '../../layouts/header/NavList'
import Navbar2 from '../../layouts/header/Navbar2'
import { Container, Row, Col, Card } from 'react-bootstrap'
import img1 from '../../assets/images-B/r1.jpg'
import img2 from '../../assets/images-B/r2.jpg'
import img3 from '../../assets/images-B/r3.jpg'
import img4 from '../../assets/images-B/r4.jpg'
import img5 from '../../assets/images-B/c1.jpg'
import img6 from '../../assets/images-B/c2.jpg'
import img7 from '../../assets/images-B/c3.jpg'
import v1 from '../../assets/images-B/v1.jpg'
import v2 from '../../assets/images-B/v2.jpg'
import v3 from '../../assets/images-B/v4.jpg'
import v4 from '../../assets/images-B/v5.jpg'
import v5 from '../../assets/images-B/v6.jpg'
import v6 from '../../assets/images-B/v7.jpg'
import v7 from '../../assets/images-B/v8.jpg'
import Exampleslider from '../../components/carouselstories/Exampleslider'
import { AiOutlineHeart } from "react-icons/ai";
import Sliderstories from '../../components/carouselstories/Sliderstories'
import Footer from '../../layouts/Footer/Footer'
const Travelstories = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };



  return (
    <>
      <Navbar2 />
      <NavList />
      <section>
        <Container fluid>
          <Row className='justify-content-center py-4'>
            <Col className='main-slider-height' lg={11}>
              <Exampleslider />
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
                <div className='bottom-content p-4 w-100'>
                  <h1><a className='text-white text-decoration-none' href="#">Taste the World in One City: Bangkok</a></h1>
                </div>
              </div>
            </Col>

            <Col className='d-flex flex-column justify-content-between' lg={3}>
              <div className='bg-size box-2'>
                <div className='bottom-content p-3'>
                  <h3><a className='text-white text-decoration-none' href="#">Why Santa Barbara should be your next weekend getaway</a></h3>
                </div>
              </div>
              <div className='bg-size box-3'>
                <div className='bottom-content p-3'>
                  <h3><a className='text-white text-decoration-none' href="#">A Staycation in NYC's secret food neighborhood</a></h3>
                </div>
              </div>
            </Col>

          </Row>
          <Row className='row-img pb-5'>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>
                <div className='col-5'> <a href="#"><img className='img-fluid' src={img1} alt="" /></a> </div>
                <div className='col-7  ps-3 pt-1'><h6><a className='text-decoration-none text-dark' href="#">America’s 8 coolest coastal towns for seafood lovers</a>
                </h6> </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>
                <div className='col-5'> <a href="#"> <img className='img-fluid' src={img2} alt="" /></a> </div>
                <div className='col-7  ps-3 pt-1'><h6><a className='text-decoration-none text-dark' href="#">7 Where to get your soul food fix in D.C.</a></h6></div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='d-flex  justify-content-between hover-style'>

                <div className='col-5'><a href="#"> <img className='img-fluid' src={img3} alt="" /> </a></div>
                <div className='col-7  ps-3 pt-1'>
                  <h6><a className='text-decoration-none text-dark' href="#">How to do D.C. with tweens</a> </h6>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className=' d-flex justify-content-between hover-style'>
                <div className='col-5'><a href="#"><img className='img-fluid' src={img4} alt="" /></a>  </div>
                <div className='col-7 ps-3 pt-1' ><h6><a className='text-decoration-none text-dark' href="#">7 Charleston restaurants to try when the top tables are booked</a></h6> </div>
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
              <p className=''>Hand-picked essentials for your next trip</p>
            </Col>
          </Row>
          <Row className='justify-content-center text-center card-titles'>
            <Col lg={3}>
              <Card className='border-0 rounded-0 three-card'>
                <span><AiOutlineHeart /></span>
                <Card.Img className='rounded-0' variant="" src={img5} />
                <Card.Body className='px-4'>
                  <Card.Title> <a className='text-decoration-none text-dark' href="#">The best carry-on luggage to buy in 2023</a> </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='border-0 rounded-0 three-card'>
                <span><AiOutlineHeart /></span>
                <Card.Img className='rounded-0' variant="" src={img6} />
                <Card.Body className='px-4'>
                  <Card.Title>
                    <a className='text-decoration-none text-dark' href="#"> Baby travel essentials to pack for every vacation</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3}>
              <Card className='border-0 rounded-0 three-card'>
                <span><AiOutlineHeart /></span>
                <Card.Img className='rounded-0' variant="" src={img7} />
                <Card.Body className='px-4'>
                  <Card.Title>
                    <a className='text-decoration-none text-dark' href="#"> The best sun hats for beach days, long hikes, and everything in between</a>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='justify-content-center text-center pt-5'>
            <Col lg={12}>
              <div className='heading-1'>
                <h1 className='fw-bold'>Places to Visit</h1>
                <p>The most exciting destinations, experiences, hidden gems, and traveler faves to check out now.</p>
              </div>
            </Col>
            <Row className='pb-5'>
              <Col className='d-flex' lg={3}>
                <div className='visit-box-1 position-relative my-5 hover-style'>
                  <img className='img-fluid' src={v1} alt="" />
                  <div className='bottom-content p-3'>
                    <h3><a className='text-white text-decoration-none' href="#">Where to whale watch around the world this summer</a></h3>
                  </div>
                </div>
              </Col>
              <Col className='d-flex flex-column' lg={3}>
                <div className='visit-box-2 m-2 position-relative  hover-style' >
                  <img className='img-fluid' src={v7} alt="" />
                  <div className='bottom-content'>
                    <h3><a className='text-white text-decoration-none' href="#">How to see Bavaria a long weekend</a></h3>
                  </div>
                </div>
                <div className='visit-box-2 m-2 position-relative  hover-style'>
                  <img className='img-fluid' src={v3} alt="" />
                  <div className='bottom-content '>
                    <h3><a className='text-white text-decoration-none' href="#">Why Santa  be your weekend getaway</a></h3>
                  </div>
                </div>
              </Col>
              <Col className='d-flex flex-column' lg={3}>
                <div className='visit-box-2 m-2  position-relative  hover-style'>
                  <img className='img-fluid' src={v3} alt="" />
                  <div className='bottom-content'>
                    <h3><a className='text-white text-decoration-none ' href="#">4 epic rond for your next great adventure</a></h3>
                  </div>
                </div>
                <div className='visit-box-2 m-2  position-relative  hover-style'>
                  <img className='img-fluid' src={v5} alt="" />
                  <div className='bottom-content '>
                    <h3><a className='text-white text-decoration-none' href="#">Why Santa your next weekend getaway</a></h3>
                  </div>
                </div>
              </Col>
              <Col className='d-flex' lg={3}>
                <div className='visit-box-1  my-5 position-relative  hover-style'>
                  <img className='img-fluid' src={v6} alt="" />
                  <div className='bottom-content'>
                    <h3><a className='text-white text-decoration-none' href="#">4 epic road trips in Ireland for your next great adventure</a></h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
      <section>
        <Container className='py-5'>
          <Row className='justify-content-center'>
            <Col lg={11}>
              <Sliderstories />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='justify-content-center text-center pt-5'>
            <Col lg={9}>
              <div className='heading-1 pb-3'>
                <h1 className='fw-bold'>Keep exploring</h1>
              </div>
            </Col>
          </Row>

          {
            ["1",
              "2",
              "3",
            ].map((v) => {
              return (
                <>
                  <Row className='justify-content-center'>

                    <Col className='d-flex flex-column justify-content-between' lg={3}>
                      <div className=''>
                        <div className=' bg-size img-box1 my-3 hover-style'>
                          {/* //////////background image 1/////////// */}
                        </div>
                        <h6 className='pb-5 fw-bold' >
                          <a className='text-dark text-decoration-none' href="#">Taste the World in One City: Bangkok</a>
                        </h6>
                        <div className='bg-size img-box2 my-3 hover-style  explore-content'>
                          {/* //////////background image 2/////////// */}
                          <h3 className='p-4'><a className='text-white text-decoration-none' href="#">Two Charleston experts debate your top travel questions</a></h3>
                        </div>
                      </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between' lg={3}>
                      <div className=''>
                        <div className=' bg-size img-box3 explore-content my-3 hover-style'>
                          {/* //////////background image 3/////////// */}
                          <h3 className='p-4'><a className='text-white text-decoration-none' href="#">Why you should absolutely go on a Charleston ghost tour</a></h3>
                        </div>
                        <div className='bg-size img-box4 my-3 hover-style'>
                          {/* //////////background image 4/////////// */}
                        </div>
                        <h6 className='pb-5 fw-bold' >
                          <a className='text-dark text-decoration-none' href="#"> 3 ways to get from Los Angeles to Las Vegas</a>
                        </h6>
                      </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between' lg={3}>
                      <div className=''>
                        <div className=' bg-size img-box5 my-3 hover-style'>
                          {/* //////////background image 5/////////// */}
                        </div>
                        <h6 className='pb-4 fw-bold' >
                          <a className='text-dark text-decoration-none' href="#"> How to beat the crowds at Paris's most popular museums and attractions</a>
                        </h6>
                        <div className='bg-size img-box6 my-3   explore-content hover-style'>
                          {/* //////////background image 6/////////// */}
                          <h3 className='p-4'><a className='text-white text-decoration-none' href="#">We gave unanswered Washington D.C. forum questions a full workup</a></h3>
                        </div>
                      </div>
                    </Col>

                  </Row>

                </>
              )
            })
          }

          <div className='py-5 paginate'><nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
            <div className='text-center'><small>Showing results 1-12 of 168</small></div>
          </nav></div>

        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Travelstories
