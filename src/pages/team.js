import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { Page } from '../components/page.js'
import { Parallax } from '../components/parallax.js'
import { TeamGrid } from '../components/team-grid.js'
import { InlineContactForm } from '../components/contact/inline-contact-form.js'

import { team, mentors, alumni } from '../data/team.js'

import alienLogo from '../images/Logo-Alien-Only.svg'
import huggingRobot from '../images/hugging.robot.jpg'
import flickr_34364767932_ea2fa26df3_h from '../images/flickr/34364767932_ea2fa26df3_h.jpg'
import flickr_34484143016_f1faef45e0_h from '../images/flickr/34484143016_f1faef45e0_h.jpg'
import flickr_37996293252_3f5fcab7d4_h from '../images/flickr/37996293252_3f5fcab7d4_h.jpg'

const TeamPage = () => {
  return (
    <Page activePage='team' title='Meet the Team'>
      <Jumbotron fluid={true} className='py-0'>
        <div
          style={{
            backgroundImage: `url(${huggingRobot})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            height: '500px',
          }}
        />
      </Jumbotron>

      <Container fluid={true} className='mt-5'>
        <Row className='p-xl-5 p-lg-5 p-md-5 p-sm-1 p-xs-1'>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} className='pb-5'>
            <div className='text-box trons-purple-bkgnd p-3'>
              <img
                src={alienLogo}
                width='60%'
                className='d-block mx-auto mb-2'
              />
              <h6>Team number:</h6>
              <h5>4604</h5>
              <div className='text-box-separator' />
              <h6>Started:</h6>
              <h5>2012-2013 Season</h5>
              <div className='text-box-separator' />
              <h6>From:</h6>
              <h5>
                Calgary, Alberta
                <br />
                Canada
              </h5>
            </div>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={5}
            xl={5}
            className='pl-xl-5 pl-lg-5 pl-md-5 pb-5'
          >
            <h2>Mission</h2>
            <p className='trons-intro'>
              Our objective is to encourage female participation in technical
              vocations- fields that are currently male dominated. We do this by
              making robots that compete in FIRST Robotics Competitions, which
              is super fun!
            </p>
            <h2>Vision</h2>
            <p className='trons-intro'>
              The team Intimitrons from Area 51, was founded in hopes to inspire
              and encourage the participation of young women in engineering,
              science, and technical vocations. In a male dominated field, we
              see this as an important endeavor. Our team sees it important to
              uphold the values of FIRST and to continue to help others along
              our path as competitors. We would also like to reach out to the
              community and encourage participation in the fascinating and
              rewarding experience of robotics and these professions.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className='pl-xl-5 pl-lg-5 pb-5'
          >
            <ButtonGroup vertical={true} size='lg' className='w-100'>
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = '#trons'
                }}
                className='trons-green-button'
              >
                Roster
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = '#mentors'
                }}
                className='trons-green-button'
              >
                Mentors
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = '#alumni'
                }}
                className='trons-green-button'
              >
                Alumni
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <InlineContactForm headline='Learn STEM, design thinking, business skills, and build confidence - become a Tron!' />

      <Parallax img={flickr_34364767932_ea2fa26df3_h} />

      <Container className='mt-5'>
        <Row id='trons'>
          <Col>
            <h1 className='text-center'>Meet the Trons</h1>
          </Col>
        </Row>
        <Row>
          <TeamGrid members={team} groupName='team' />
        </Row>
      </Container>

      <Parallax img={flickr_34484143016_f1faef45e0_h} />

      <Container className='mt-5'>
        <Row id='mentors'>
          <Col>
            <h1 className='text-center'>Meet the Mentors</h1>
          </Col>
        </Row>
        <Row>
          <TeamGrid members={mentors} groupName='mentors' />
        </Row>
      </Container>

      <Parallax img={flickr_37996293252_3f5fcab7d4_h} />

      <Container className='mt-5'>
        <Row id='alumni'>
          <Col>
            <h1 className='text-center'>Trons, Where Are They Now?</h1>
          </Col>
        </Row>
        <Row>
          <TeamGrid members={alumni} groupName='alumni' />
        </Row>
      </Container>
    </Page>
  )
}

export default TeamPage
