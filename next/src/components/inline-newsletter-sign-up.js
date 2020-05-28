import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const InlineNewsletterSignUp = () => {
  return (
    <Row className='p-5'>
      <Col>
        <h5>
          Sign up for our newsletter here, if you’d like updates on what we’ve
          been up to!
        </h5>
        <Form
          method='post'
          action='https://intimitrons.us3.list-manage.com/subscribe/post?u=d479728f08b6043f1d957d5b1&amp;id=cc9ef4518a'
          target='_blank'
          noValidate={true}
        >
          <Form.Row>
            <Col sm={3}>
              <Form.Group controlId='mce-FNAME'>
                <Form.Label srOnly={true}>First Name</Form.Label>
                <Form.Control
                  type='text'
                  className='mb-2 mb-sm-0'
                  placeholder='First name'
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group controlId='mce-LNAME'>
                <Form.Label srOnly={true}>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  className='mb-2 mb-sm-0'
                  placeholder='Last name'
                />
              </Form.Group>
            </Col>
            <Col sm={3}>
              <Form.Group controlId='mce-EMAIL'>
                <Form.Label srOnly={true}>Email</Form.Label>
                <InputGroup className='mb-2 mb-sm-0'>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='email' placeholder='Email' />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <Button type='submit' className='trons-green-button'>
                Subscribe
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  )
}
