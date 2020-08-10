import PropTypes from 'prop-types'
import React from 'react'
import Col from 'react-bootstrap/Col'

export const SponsorEmptyState = ({ sponsorType }) => {
  return (
    <Col>
      <h3 className='text-center'>The Trons need your support!</h3>
      <h4 className='text-center'>
        Be the first {sponsorType} sponsor to pledge your support this season.
      </h4>
    </Col>
  )
}

SponsorEmptyState.propTypes = {
  sponsorType: PropTypes.string.isRequired,
}
