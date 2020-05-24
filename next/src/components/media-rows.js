import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import moment from 'moment'

import { getMenuDivId, sortBy } from '../util/legacy-util.js'

export const MediaRows = ({ media }) => {
  return media
    .sort(sortBy('date'))
    .reverse()
    .map((item, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
        <React.Fragment key={index}>
          <Row
            className='mb-5'
            style={{ height: '50px' }}
            id={getMenuDivId(item.title)}
          />
          <Row className='mt-5 mb-5'>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className='pb-5'>
              <img
                src={item.thumbnail}
                width='90%'
                className='animate__animated animate__fadeIn wow'
              />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <h3>{item.title}</h3>
              <div className='d-flex justify-content-between align-items-end'>
                <div className='p-0 m-0'>
                  <h6 className='p-0 m-0'>{item.source}</h6>
                </div>
                <div className='p-0 m-0'>
                  <h6 className='p-0 m-0 text-right'>
                    {moment(item.date).format('MMMM Do YYYY')}
                  </h6>
                </div>
              </div>
              <p>{item.snippet}</p>
              <Button
                href={item.url}
                className='trons-green-button trons-small-button'
              >
                {item.button}
              </Button>
            </Col>
          </Row>
        </React.Fragment>
      )
    })
}

MediaRows.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      snippet: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
    })
  ).isRequired,
}
