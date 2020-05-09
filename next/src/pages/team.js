import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { InlineContactForm } from '../components/contact-form'
import { PageLayout } from '../components/page-layout'
import { Parallax } from '../components/parallax'

import { team, mentors, alumni } from '../data/team.js'

import { sortBy, isInt } from '../util/legacy-util'

import alienLogo from '../images/Logo-Alien-Only.svg'
import huggingRobot from '../images/hugging.robot.jpg'
import flickr_34364767932_ea2fa26df3_h from '../images/flickr/34364767932_ea2fa26df3_h.jpg'
import flickr_34484143016_f1faef45e0_h from '../images/flickr/34484143016_f1faef45e0_h.jpg'
import flickr_37996293252_3f5fcab7d4_h from '../images/flickr/37996293252_3f5fcab7d4_h.jpg'

const TeamGrid = ({ team, groupName }) => {
  return team.sort(sortBy('Name')).map((person, index) => {
    return (
      <Col
        key={index}
        xs={12}
        sm={12}
        md={6}
        lg={3}
        xl={3}
        className='center-block text-center'
      >
        <div
          className='circle-img animated fadeInUp wow'
          data-wow-delay={`${0.1 * (index % 4)}s`}
          style={{
            backgroundImage: `url(${
              person.Photo
                ? require(`../images/team/${groupName}/${person.Photo}`)
                : alienLogo
            })`,
          }}
        />
        <h4>{person.Name}</h4>
        <h5 className='heading-separator'>
          {isInt(person.Year) ? `Since ${person.Year}` : person.Year}
        </h5>
        <p>{person.Tagline}</p>
      </Col>
    )
  })
}

const TeamPage = () => {
  return (
    <PageLayout currentPage={'team'}>
      <Jumbotron fluid={true} className='remove-padding'>
        <Container fluid={true} className='remove-padding'>
          <Row>
            <Col className='remove-padding'>
              <div
                className='hero-team'
                style={{ backgroundImage: `url(${huggingRobot})` }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container fluid={true} className='mt-5'>
        <Row className='p-xl-5 p-lg-5 p-md-5 p-sm-1 p-xs-1'>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} className='pb-5'>
            <div className='text-box trons-purple-bkgnd p-3'>
              <img src={alienLogo} width='60%' className='center-block mb-2' />
              <h6>Team number:</h6>
              <h5>4604</h5>
              <div className='text-box-separator'></div>
              <h6>Started:</h6>
              <h5>2012-2013 Season</h5>
              <div className='text-box-separator'></div>
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
            <ButtonGroup
              id='trons-vert-team-menu'
              vertical={true}
              size={'lg'}
              aria-label='Meet the Team'
            >
              <Button
                variant={'secondary'}
                onClick={() => {
                  window.location.href = '#trons'
                }}
                className='trons-green-button'
              >
                Roster
              </Button>
              <Button
                variant={'secondary'}
                onClick={() => {
                  window.location.href = '#mentors'
                }}
                className='trons-green-button'
              >
                Mentors
              </Button>
              <Button
                variant={'secondary'}
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

      <InlineContactForm
        headline={
          'Learn STEM, design thinking, business skills, and build confidence - become a Tron!'
        }
      />

      <Parallax img={flickr_34364767932_ea2fa26df3_h} />

      <Container className='mt-5'>
        <Row id='trons'>
          <Col>
            <h1 className='text-center'>Meet the Trons</h1>
          </Col>
        </Row>
        <Row>
          <TeamGrid team={team} groupName={'team'} />
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
          <TeamGrid team={mentors} groupName={'mentors'} />
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
          <TeamGrid team={alumni} groupName={'alumni'} />
        </Row>
      </Container>
    </PageLayout>
  )
}

export default TeamPage
