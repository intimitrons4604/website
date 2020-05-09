import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { PageLayout } from '../components/page-layout'

import alienLogo from '../images/Logo-Alien-Only.svg'
import talkToTrons from '../images/talk-to-trons.jpg'

const ContactPage = () => {
  return (
    <PageLayout currentPage={'contact'}>
      <Jumbotron fluid={true} className='remove-padding'>
        <Container fluid={true} className='remove-padding'>
          <Row>
            <Col>
              <div
                className='trons-hero'
                style={{ backgroundImage: `url(${talkToTrons})` }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className='mt-5 mb-5'>
        <Row>
          <Col>
            <h1>The Trons Want to Hear from You</h1>
            <p className='trons-intro'>
              Are you looking for an after school activity that's different from
              the rest? FRC isn't just about robots. It's also about project
              management, leadership, building business skills, and design. Make
              new friends and build the confidence you'll need to meet the world
              on your terms.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div id='contact-message' className='alert mb-5 hidden' />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={9} lg={6} xl={6} className='mr-5'>
            <h2>Send Us a Message</h2>
            <Form
              method='post'
              id='contact-form'
              name='contact-form'
              className='validate'
            >
              <Form.Row className='pb-3'>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Form.Group controlId={'firstName'}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type={'text'}
                      className='mb-2 mb-sm-0 required'
                      placeholder='Jane'
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Form.Group controlId={'lastName'}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type={'text'}
                      className='mb-2 mb-sm-0'
                      placeholder='Doe'
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='pb-3'>
                <Col>
                  <Form.Group controlId={'email'}>
                    <Form.Label>Email Address</Form.Label>
                    <InputGroup className='mb-2 mb-sm-0'>
                      <InputGroup.Prepend>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type={'email'}
                        className='required rounded-right'
                        placeholder='jane@example.org'
                        required
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='pb-5'>
                <Col>
                  <Form.Group controlId={'message'}>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as={'textarea'}
                      className='mb-2 mb-sm-0 required'
                      rows='5'
                      placeholder='The Trons are wicked cool... where do I sign up?'
                      required
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className='pb-5'>
                <Col>
                  <button
                    type='submit'
                    name='submit'
                    id='submit'
                    className='btn trons-green-button'
                  >
                    Send
                  </button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4} className='pb-5'>
            <div className='text-box trons-purple-bkgnd p-3 tex-center'>
              <img src={alienLogo} width='60%' className='center-block mb-2' />
              <h6>Email:</h6>
              <h5>info@intimitrons.ca</h5>
              <div className='text-box-separator'></div>
              <h6>Location:</h6>
              <h5>University of Calgary</h5>
              <div className='text-box-separator'></div>
              <h6>Schedule:</h6>
              <h5>Tues/Thurs 6pm-8pm + Sat 10am-4pm</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </PageLayout>
  )
}

export default ContactPage
