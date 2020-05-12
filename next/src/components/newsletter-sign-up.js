import React from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const NewsletterSignUp = () => {
  return (
    <Row className='p-5'>
      <Col>
        <h5>
          Sign up for our newsletter here, if you’d like updates on what we’ve
          been up to!
        </h5>
        <Form
          action='https://intimitrons.us3.list-manage.com/subscribe/post?u=d479728f08b6043f1d957d5b1&amp;id=cc9ef4518a'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          target='_blank'
          noValidate={true}
        >
          <Form.Row className='align-items-center'>
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
                  <Form.Control
                    type='email'
                    className='required'
                    placeholder='Email'
                  />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden='true'
              >
                <input
                  type='text'
                  name='b_d479728f08b6043f1d957d5b1_cc9ef4518a'
                  tabIndex='-1'
                  value=''
                  readOnly={true}
                />
              </div>
              <button
                type='submit'
                value='Subscribe'
                name='subscribe'
                id='mc-embedded-subscribe'
                className='btn trons-green-button'
              >
                Subscribe
              </button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  )
}
