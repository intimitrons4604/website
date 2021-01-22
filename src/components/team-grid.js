import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import React from 'react'
import styled from 'styled-components'

import { sortBy } from '../util/legacy-util.js'

import alienLogo from '../images/Logo-Alien-Only.svg'

const CircularImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #40276b;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  margin: 2em auto;
`

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
        className='d-block mx-auto text-center'
      >
        <CircularImage src={person.photo || alienLogo} />
        <h4>{person.name}</h4>
        <h5 className='heading-separator'>{person.years}</h5>
        <p>{person.tagline}</p>
      </Col>
    )
  })
}

TeamGrid.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired,
      tagline: PropTypes.string.isRequired,
      photo: PropTypes.string,
    })
  ).isRequired,
}
