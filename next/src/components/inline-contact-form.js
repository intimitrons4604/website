import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const InlineContactForm = ({ headline }) => {
  return (
    <Container fluid={true} className='trons-purple-bkgnd mt-5'>
      <Row className='px-5 pt-5 pb-0'>
        <Col>
          <h5>{headline}</h5>
          <Form method='post'>
            <Form.Row>
              <Col sm={3}>
                <Form.Group controlId='fname'>
                  <Form.Label srOnly={true}>First Name</Form.Label>
                  <Form.Control
                    type='text'
                    className='mb-2 mb-sm-0'
                    placeholder='First name'
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group controlId='lname'>
                  <Form.Label srOnly={true}>Last Name</Form.Label>
                  <Form.Control
                    type='text'
                    className='mb-2 mb-sm-0'
                    placeholder='Last name'
                    required={true}
                  />
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group controlId='email'>
                  <Form.Label srOnly={true}>Email</Form.Label>
                  <InputGroup className='mb-2 mb-sm-0'>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type='email'
                      placeholder='Email'
                      required={true}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col>
                <Button type='submit' className='trons-green-button'>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row className='mx-auto px-5 pt-0 pb-4'>
        <Col xs={9} sm={9} md={9} lg={9} xl={9} className='p-0'>
          <Alert show={false} variant='success' className='mt-2'>
            Thank you! Your information was sent. We will be in touch shortly.
          </Alert>
          <Alert show={false} variant='danger' className='mt-2'>
            Uh oh! There was a problem with your submission. Please correct the
            error and try again.
            <br />
            legacy data.message placeholder
          </Alert>
        </Col>
      </Row>
    </Container>
  )
}

InlineContactForm.propTypes = {
  headline: PropTypes.string.isRequired,
}
