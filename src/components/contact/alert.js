import PropTypes from 'prop-types'
import React from 'react'
import Alert from 'react-bootstrap/Alert'

export const SuccessAlert = () => {
  return (
    <Alert variant='success' className='mt-2'>
      Thank you! Your information was sent. We will be in touch shortly.
    </Alert>
  )
}

export const ErrorAlert = ({ errorMessage }) => {
  const hasError = !!errorMessage

  let message = 'Uh oh! There was a problem with your submission. '
  if (hasError) {
    message = message + 'Please correct the error and try again.'
  } else {
    message = message + 'Please try again.'
  }

  return (
    <Alert variant='danger' className='mt-2'>
      {message}
      {hasError && (
        <>
          <br />
          {errorMessage}
        </>
      )}
    </Alert>
  )
}

ErrorAlert.propTypes = {
  errorMessage: PropTypes.string,
}
