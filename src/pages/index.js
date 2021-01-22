import React from 'react'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Tab from 'react-bootstrap/Tab'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHandshake, faLightbulb } from '@fortawesome/free-regular-svg-icons'

import { InlineNewsletterSignUp } from '../components/inline-newsletter-sign-up.js'
import { Page } from '../components/page.js'
import { Parallax } from '../components/parallax.js'

import firstLikeAGirl from '../images/FIRST_LikeaGirl.png'
import alienLogo from '../images/Logo-Alien-Only.svg'
import alienated_no_flamethrowers_by_wildfirewhim_d8nm05k from '../images/alienated/no_flamethrowers_by_wildfirewhim_d8nm05k.png'
import flickr_25232354778_e3c92780a8_k from '../images/flickr/25232354778_e3c92780a8_k.jpg'
import flickr_33584110061_6099022bb6_h from '../images/flickr/33584110061_6099022bb6_h.jpg'
import flickr_33682601574_0574678c36_h from '../images/flickr/33682601574_0574678c36_h.jpg'
import flickr_33682750284_a97cb6862b_k from '../images/flickr/33682750284_a97cb6862b_k.jpg'
import flickr_33682936464_fed8e392c8_b from '../images/flickr/33682936464_fed8e392c8_b.jpg'
import flickr_34484137066_dbfe878a0b_k from '../images/flickr/34484137066_dbfe878a0b_k.jpg'
import flickr_35692617622_36c937a3c2_k from '../images/flickr/35692617622_36c937a3c2_k.jpg'
import flickr_38610809881_b793ec939b_b from '../images/flickr/38610809881_b793ec939b_b.jpg'

const HomePage = () => {
  return (
    <Page activePage='home' title='FRC Team 4604'>
      <Jumbotron fluid={true} className='mb-0 py-0'>
        <Container fluid={true}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={9} xl={9} className='p-0'>
              <div
                className='hero'
                style={{
                  backgroundImage: `url(${flickr_33682601574_0574678c36_h})`,
                }}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
              className='px-0 hero-sidebar'
            >
              <img
                className='animate__animated animate__zoomIn'
                width='200'
                height='200'
                src={alienLogo}
              />
              <div className='hero-sidebar-text'>
                <h1 className='pt-5 pb-2'>4604</h1>
                <h2 className='pt-0'>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className='animate__animated animate__pulse animate__infinite'
                    style={{ fontSize: '32px' }}
                  />
                </h2>
                <h2>robots</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid={true} className='trons-green-bkgnd hero-banner'>
        <Row className='align-items-center pl-4 pt-5 pb-3'>
          <Col xs={12} sm={6} md={6} lg={9} xl={9}>
            <h2>The Intimitrons from AREA 51</h2>
            <h5>Western Canada&apos;s First All-Girls FRC Robotics Team</h5>
          </Col>
          <Col xs={12} sm={6} md={6} lg={3} xl={3} className='text-center'>
            <Button
              href='/contact'
              className='trons-medium-button trons-purple-button'
            >
              BECOME A TRON
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='pt-3'>
        <Row className='mx-auto pl-xl-5 pl-lg-5 pl-md-3 pl-sm-3 pl-xs-3 pr-xl-5 pr-lg-5 pr-md-3 pr-sm-0 pr-xs-0 pt-5 pb-5'>
          <Col xs={12} sm={12} md={12} lg={8} xl={4} className='pb-5'>
            <h1>5 Years of STEM</h1>
            <p className='trons-intro'>
              The Intimitrons From Area 51 is one of the few all girls FIRST
              Robotics teams in Canada. We are the first all-female team in
              Western Canada! Our objective is to encourage female participation
              in technical vocations- fields that are currently male dominated.
              By creating robots to compete in FIRST competitions, we are able
              to accomplish this. The Intimitrons team was established in 2012,
              and this 2017 season was our fifth!
            </p>
            <img src={firstLikeAGirl} width='80%' />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={8}>
            <Container fluid={true}>
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={flickr_33682750284_a97cb6862b_k}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={flickr_34484137066_dbfe878a0b_k}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className='d-block w-100'
                    src={flickr_35692617622_36c937a3c2_k}
                  />
                </Carousel.Item>
              </Carousel>
            </Container>
          </Col>
        </Row>

        <Row className='mx-auto pl-xl-5 pl-lg-5 pl-md-3 pl-sm-3 pl-xs-3 pr-xl-5 pr-lg-5 pr-md-3 pr-sm-0 pr-xs-0 pt-3 pb-5'>
          <Col xs={12} sm={12} md={12} lg={3} xl={3} className='text-center'>
            <a href='/alienated'>
              <img
                src={alienated_no_flamethrowers_by_wildfirewhim_d8nm05k}
                className='w-100'
              />
            </a>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={9}
            xl={9}
            className='justify-content-between'
          >
            <Tab.Container defaultActiveKey='experience'>
              <Nav variant='pills' justify='true'>
                <Nav.Item>
                  <Nav.Link eventKey='experience'>
                    <FontAwesomeIcon icon={faBook} size='3x' />
                    <br />
                    Experience
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='teamwork'>
                    <FontAwesomeIcon icon={faHandshake} size='3x' />
                    <br />
                    Teamwork
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='opportunities'>
                    <FontAwesomeIcon icon={faLightbulb} size='3x' />
                    <br />
                    Opportunities
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content
                className='px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pt-5'
                style={{ minHeight: '400px' }}
              >
                <Tab.Pane eventKey='experience' className='h-100'>
                  <img
                    src={flickr_25232354778_e3c92780a8_k}
                    className='w-100'
                  />
                  <div className='trons-intro pt-5'>
                    Intimitrons learn fabrication skills such as{' '}
                    <span className='trons-bold-purple'>
                      welding, soldering and machining
                    </span>
                    . We also learn how to program our robot and our website in
                    a variety of{' '}
                    <span className='trons-bold-purple'>coding languages</span>.
                    To bring our robot to life, we wire electronics such as{' '}
                    <span className='trons-bold-purple'>
                      motor controllers, power distribution board sand
                      microcontrollers
                    </span>
                    . In the off-season we practice our electronics skills with{' '}
                    <span className='trons-bold-purple'>
                      Aurduino and Raspberry Pi
                    </span>{' '}
                    prototyping. Our robot designs are created in{' '}
                    <span className='trons-bold-purple'>Fusion 360</span>, an
                    3-D Autodesk CAD tool.
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='teamwork' className='h-100'>
                  <img src={flickr_38610809881_b793ec939b_b} width='100%' />
                  <div className='trons-intro pt-5'>
                    In order to meet our 6-week build schedule, we create
                    detailed{' '}
                    <span className='trons-bold-purple'>
                      project management
                    </span>{' '}
                    plans in Basecamp and stick to our schedules and
                    assignments. Intimitrons attend meetings and build sessions
                    3 times a week during the season.{' '}
                    <span className='trons-bold-purple'>
                      Working together as a team
                    </span>{' '}
                    is a great way to build confidence and make{' '}
                    <span className='trons-bold-purple'>new friends</span>.
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='opportunities' className='h-100'>
                  <img src={flickr_33584110061_6099022bb6_h} width='100%' />
                  <div className='trons-intro pt-5'>
                    FIRST participants have opportunities to practice public
                    speaking, as well as learn about{' '}
                    <span className='trons-bold-purple'>
                      marketing and business skills
                    </span>
                    . We also have access to{' '}
                    <span className='trons-bold-purple'>scholarships</span> and
                    make <span className='trons-bold-purple'>connections</span>{' '}
                    with professionals in STEM industries. We enjoy the chance
                    to introduce other girls to{' '}
                    <span className='trons-bold-purple'>STEM</span> and show
                    them that they can do it too.
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <div className='px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pt-5'>
              <h5>What&apos;s It Really Like to Be a Tron?</h5>
              <Button
                href='/alienated'
                className='mt-3 trons-medium-button trons-purple-button'
              >
                Read Alienated Comics
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='trons-purple-bkgnd'>
        <InlineNewsletterSignUp />
      </Container>

      <Parallax img={flickr_33682936464_fed8e392c8_b} />
    </Page>
  )
}

export default HomePage
