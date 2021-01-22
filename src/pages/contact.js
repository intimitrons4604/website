import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { Page } from '../components/page.js'
import { ContactForm } from '../components/contact/contact-form.js'

import alienLogo from '../images/Logo-Alien-Only.svg'
import talkToTrons from '../images/talk-to-trons.jpg'

const ContactPage = () => {
  return (
    <Page activePage='contact' title='Contact Us'>
      <Jumbotron fluid={true} className='py-0'>
        <div
          className='trons-hero'
          style={{ backgroundImage: `url(${talkToTrons})` }}
        />
      </Jumbotron>

      <Container className='my-5'>
        <Row className='pb-3'>
          <Col>
            <h1>The Trons Want to Hear from You</h1>
            <p className='trons-intro'>
              Are you looking for an after school activity that&apos;s different
              from the rest? FRC isn&apos;t just about robots. It&apos;s also
              about project management, leadership, building business skills,
              and design. Make new friends and build the confidence you&apos;ll
              need to meet the world on your terms.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={9} lg={6} xl={6} className='mr-5'>
            <h2>Send Us a Message</h2>
            <ContactForm />
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} className='pb-5'>
            <div className='text-box trons-purple-bkgnd p-3'>
              <img
                src={alienLogo}
                width='60%'
                className='d-block mx-auto mb-2'
              />
              <h6>Email:</h6>
              <h5>info@intimitrons.ca</h5>
              <div className='text-box-separator' />
              <h6>Location:</h6>
              <h5>University of Calgary</h5>
              <div className='text-box-separator' />
              <h6>Schedule:</h6>
              <h5>Tues/Thurs 6pm-8pm + Sat 10am-4pm</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

export default ContactPage
