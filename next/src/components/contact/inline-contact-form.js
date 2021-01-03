import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'

import { Feature, useFeatureFlag } from '../../hooks/use-feature-flag.js'
import { ErrorAlert, SuccessAlert } from './alert.js'
import { submitForm, FormSubmissionStatus } from './lib.js'

function generateMessage(headline) {
  return `Inline contact form with headline: "${headline}"`
}

export const InlineContactForm = ({ headline }) => {
  const isStatic = useFeatureFlag(Feature.StaticContactForm)

  const [submissionStatus, setSubmissionStatus] = useState(
    FormSubmissionStatus.Editing
  )
  const [errorMessage, setErrorMessage] = useState()

  if (isStatic) {
    return (
      <Container fluid={true} className='trons-purple-bkgnd mt-5'>
        <Row className='px-5 pt-5'>
          <Col>
            <h5>{headline}</h5>
          </Col>
        </Row>
        <Row className='pt-3 px-5 pb-5'>
          <Col>
            <Button className='trons-green-button' href='/contact'>
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values, formikHelpers) => {
        setSubmissionStatus(FormSubmissionStatus.None)

        const result = await submitForm({
          ...values,
          message: generateMessage(headline),
        })

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
          <Container fluid={true} className='trons-purple-bkgnd mt-5'>
            <Row className='px-5 pt-5 pb-0'>
              <Col>
                <h5>{headline}</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Row>
                    <Col sm={3}>
                      <Form.Group>
                        <Form.Label srOnly={true}>First Name</Form.Label>
                        <Form.Control
                          name='firstName'
                          type='text'
                          className='mb-2 mb-sm-0'
                          required={true}
                          disabled={isSubmitting}
                          placeholder='First name'
                          value={values.firstName}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={3}>
                      <Form.Group>
                        <Form.Label srOnly={true}>Last Name</Form.Label>
                        <Form.Control
                          name='lastName'
                          type='text'
                          className='mb-2 mb-sm-0'
                          disabled={isSubmitting}
                          placeholder='Last name'
                          value={values.lastName}
                          onChange={onChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={3}>
                      <Form.Group>
                        <Form.Label srOnly={true}>Email</Form.Label>
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
                            placeholder='Email'
                            value={values.email}
                            onChange={onChange}
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button
                        type='submit'
                        className='trons-green-button'
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
            </Row>
            <Row className='mx-auto px-5 pt-0 pb-4'>
              <Col xs={9} sm={9} md={9} lg={9} xl={9} className='p-0'>
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

InlineContactForm.propTypes = {
  headline: PropTypes.string.isRequired,
}
