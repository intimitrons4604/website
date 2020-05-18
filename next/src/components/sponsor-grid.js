import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import React from 'react'

import { sortBy } from '../util/legacy-util'

/* usually for Megabyte, Kilobyte and In-Kind sponsors with different # slices */
export const SponsorGrid = ({ sponsors, sponsorType, slices }) => {
  if (sponsors.length === 0) {
    return (
      <Col>
        <h3 className='text-center'>The Trons need your support!</h3>
        <h4 className='text-center'>
          Be the first {sponsorType} sponsor to pledge your support this season.
        </h4>
      </Col>
    )
  }

  return sponsors.sort(sortBy('name')).map((sponsor, index) => {
    return (
      <Col
        // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
        key={index}
        xs={12}
        sm={12}
        md={6}
        lg={slices}
        xl={slices}
        className='px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5'
      >
        <div
          className='trons-sponsor-logo animated fadeIn wow'
          style={{
            backgroundImage: `url(${sponsor.logo})`,
          }}
        />
        <h4 className='pt-4'>{sponsor.name}</h4>
        {sponsor.photo ? (
          <img
            className='trons-sponsor-photo animated fadeIn wow'
            src={sponsor.photo}
          />
        ) : null}
        <p>{sponsor.description}</p>
        <h6 className='pb-4'>Sponsorship Years: {sponsor.years}</h6>
        <Button
          href={sponsor.url}
          className='trons-green-button trons-small-button'
        >
          Visit {sponsor.nickname}
        </Button>
      </Col>
    )
  })
}

SponsorGrid.propTypes = {
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
      photo: PropTypes.string,
    })
  ).isRequired,
  sponsorType: PropTypes.string,
}
