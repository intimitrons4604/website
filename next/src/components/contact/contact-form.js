import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import { ErrorAlert, SuccessAlert } from './alert.js'
import { submitForm, FormSubmissionStatus } from './lib.js'

export const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(
    FormSubmissionStatus.Editing
  )
  const [errorMessage, setErrorMessage] = useState()

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }}
      onSubmit={async (values, formikHelpers) => {
        setSubmissionStatus(FormSubmissionStatus.None)

        const result = await submitForm(values)
        if (result.success) {
          setSubmissionStatus(FormSubmissionStatus.Success)
          formikHelpers.resetForm()
        } else {
          setSubmissionStatus(FormSubmissionStatus.Error)
          setErrorMessage(result.errorMessage)
        }
      }}
    >
      {({ isSubmitting, values, handleChange, handleSubmit }) => {
        const onChange = (e) => {
          setSubmissionStatus(FormSubmissionStatus.None)
          handleChange(e)
        }

        return (
          <Container className='p-0'>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Row className='pb-3'>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name='firstName'
                          type='text'
                          className='mb-2 mb-sm-0'
                          required={true}
                          disabled={isSubmitting}
                          placeholder='Jane'
                          value={values.firstName}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name='lastName'
                          type='text'
                          className='mb-2 mb-sm-0'
                          disabled={isSubmitting}
                          placeholder='Doe'
                          value={values.lastName}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row className='pb-3'>
                    <Col>
                      <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <InputGroup className='mb-2 mb-sm-0'>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            name='email'
                            type='email'
                            required={true}
                            disabled={isSubmitting}
                            placeholder='jane@example.org'
                            value={values.email}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row className='pb-5'>
                    <Col>
                      <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as='textarea'
                          name='message'
                          className='mb-2 mb-sm-0'
                          rows='5'
                          required={true}
                          disabled={isSubmitting}
                          placeholder='The Trons are wicked cool... where do I sign up?'
                          value={values.message}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row className='pb-3'>
                    <Col>
                      <Button
                        type='submit'
                        className='trons-green-button'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col>
                {submissionStatus === FormSubmissionStatus.Success && (
                  <SuccessAlert />
                )}
                {submissionStatus === FormSubmissionStatus.Error && (
                  <ErrorAlert errorMessage={errorMessage} />
                )}
              </Col>
            </Row>
          </Container>
        )
      }}
    </Formik>
  )
}
