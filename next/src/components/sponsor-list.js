import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import React from 'react'

import { sortBy } from '../util/legacy-util'

export const SponsorList = ({ sponsors }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3} xl={3} className='px-5'>
      <ul>
        {sponsors.sort(sortBy('name')).map((sponsor, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
            <li key={index}>
              {sponsor.name} {sponsor.amount}
            </li>
          )
        })}
      </ul>
    </Col>
  )
}

SponsorList.propTypes = {
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ).isRequired,
}
