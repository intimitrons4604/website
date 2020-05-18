import Col from 'react-bootstrap/Col'
import React from 'react'
import PropTypes from 'prop-types'
import { sortBy, isInt } from '../util/legacy-util.js'

import alienLogo from '../images/Logo-Alien-Only.svg'

export const TeamGrid = ({ members }) => {
  return members.sort(sortBy('name')).map((person, index) => {
    return (
      <Col
        // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
        key={index}
        xs={12}
        sm={12}
        md={6}
        lg={3}
        xl={3}
        className='center-block text-center'
      >
        <div
          className='circle-img animated fadeInUp wow'
          data-wow-delay={`${0.1 * (index % 4)}s`}
          style={{
            backgroundImage: `url(${person.photo || alienLogo})`,
          }}
        />
        <h4>{person.name}</h4>
        <h5 className='heading-separator'>
          {isInt(person.year) ? `Since ${person.year}` : person.year}
        </h5>
        <p>{person.tagline}</p>
      </Col>
    )
  })
}

TeamGrid.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      tagline: PropTypes.string.isRequired,
      photo: PropTypes.string,
    })
  ).isRequired,
}
