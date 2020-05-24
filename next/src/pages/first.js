import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { PageLayout } from '../components/page-layout.js'

import firstRoboticsCompetitionMini from '../files/first-robotics-competition-mini.pdf'

import firstLogo from '../images/FIRST_logo.png'
import firstRoboticsProgramsCalgary from '../images/first-robotics-programs-calgary.png'

const FirstRoboticsPage = () => {
  return (
    <PageLayout currentPage={'first'}>
      <Container className='mt-5'>
        <Row>
          <Col>
            <h1 className='text-center'>FIRST Robotics + GIRLS IN STEM</h1>
            <h3 className='text-center'>
              Where kids walk in and innovators walk out
            </h3>
          </Col>
        </Row>
        <Row className='mt-5 mb-5 pb-5'>
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className='my-auto text-center'
          >
            <img
              src={firstLogo}
              width='60%'
              className='animate__animated animate__flip'
            />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8} className='mt-3'>
            <p className='trons-intro mt-0 mb-0 pt-0 pb-0'>
              Combining the excitement of sport with the rigors of science and
              technology. We call FIRST Robotics Competition the ultimate Sport
              for the Mind. High-school student participants call it “the
              hardest fun you’ll ever have.”
            </p>
            <Button
              href={firstRoboticsCompetitionMini}
              className='mt-3 trons-medium-button trons-purple-button'
            >
              DOWNLOAD FIRST BROCHURE
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='p-0 m-0'>
        <Row className='p-0 m-0'>
          <Col className='p-0 m-0'>
            <img src={firstRoboticsProgramsCalgary} width='100%' />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className='my-auto'>
            <h3
              className='animate__animated animate__slideInLeft wow'
              data-wow-delay='0.1s'
            >
              Impact
            </h3>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <p className='trons-intro'>
              The positive impact on FIRST Robotics Competition participants is
              gratifying and well documented. Over 88% have more interest in
              doing well in school and 92% are more interested in attending
              college.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className='my-auto'>
            <h3
              className='animate__animated animate__slideInLeft wow'
              data-wow-delay='0.2s'
            >
              Teamwork
            </h3>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <p className='trons-intro'>
              The really cool thing about FIRST Robotics Competition is…all
              skill levels are welcomed and needed, technical or non-technical.
              Read more about team basics, time frame, commitment, and skills
              required.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className='my-auto'>
            <h3
              className='animate__animated animate__slideInLeft wow'
              data-wow-delay='0.3s'
            >
              Competition
            </h3>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <p className='trons-intro'>
              Hard work pays off! Each FIRST Robotics Competition season
              culminates with district and regional events where qualifying
              teams compete for awards and a spot at the FIRST Championship.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className='my-auto'>
            <h3
              className='animate__animated animate__slideInLeft wow'
              data-wow-delay='0.4s'
            >
              Scholarships
            </h3>
          </Col>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <p className='trons-intro'>
              A big advantage to participating in FIRST is gaining access to
              millions in college scholarships made available by colleges,
              universities, and corporations who support FIRST. This is
              exclusive financial help open only to FIRST team members, giving
              them a competitive leg up on other students seeking educational
              funds.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 mb-5'>
        <Row>
          <Col className='mx-auto' style={{ minHeight: '300px' }}>
            <div className='video-responsive'>
              <iframe
                title='2019 FIRST Robotics Competition Destination: Deep Space Game Animation'
                src='https://www.youtube.com/embed/Mew6G_og-PI'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                gesture='media'
                allowFullScreen={true}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  )
}

export default FirstRoboticsPage
