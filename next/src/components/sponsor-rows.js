import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { sortBy } from '../util/legacy-util'

/* usually for Terabyte and/or Gigabyte Level */
export const SponsorRows = ({ sponsors, sponsorType }) => {
  if (sponsors.length === 0) {
    return (
      <Row className='mt-5'>
        <Col>
          <h3 className='text-center'>The Trons need your support!</h3>
          <h4 className='text-center'>
            Be the first {sponsorType} sponsor to pledge your support this
            season.
          </h4>
        </Col>
      </Row>
    )
  }

  return sponsors.sort(sortBy('name')).map((sponsor, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
      <Row key={index} className='mt-5'>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className='px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5'
        >
          <img
            src={sponsor.logo}
            width='50%'
            className='animated fadeInUp wow'
          />
          <h2 className='pt-4'>{sponsor.name}</h2>
          <p>{sponsor.description}</p>
          <h4 className='pb-4'>Sponsorship Years: {sponsor.years}</h4>
          <Button
            href={sponsor.url}
            className='trons-green-button trons-medium-button'
          >
            Visit {sponsor.nickname}
          </Button>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <div
            style={{
              backgroundImage: `url(${sponsor.photo})`,
            }}
            className='trons-img-card animated fadeIn wow'
            data-wow-delay='0.5s'
          />
        </Col>
      </Row>
    )
  })
}

SponsorRows.propTypes = {
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      years: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.string,
      ]).isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ).isRequired,
  sponsorType: PropTypes.string,
}
