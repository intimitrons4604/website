import PropTypes from 'prop-types'
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import moment from 'moment'

import { getMenuDivId, sortBy } from '../util/legacy-util.js'

export const MediaMenu = ({ media, mediaType }) => {
  return (
    <div className='trons-purple-bkgnd m-0 p-5'>
      <h1 className='text-center'>{mediaType}</h1>
      <Nav className='flex-column'>
        {media
          .sort(sortBy('date'))
          .reverse()
          .map((item, index, arr) => {
            return (
              // eslint-disable-next-line react/no-array-index-key -- Data used is static and has no unique key
              <React.Fragment key={index}>
                <Nav.Item className='trons-bullet'>
                  <Nav.Link href={`#${getMenuDivId(item.title)}`}>
                    {item.title}
                    <br />
                    <h6>{item.source}</h6>
                    <h6>{moment(item.date).format('MMMM Do YYYY')}</h6>
                  </Nav.Link>
                </Nav.Item>
                {index < arr.length - 1 ? (
                  <div className='text-box-separator' />
                ) : null}
              </React.Fragment>
            )
          })}
      </Nav>
    </div>
  )
}

MediaMenu.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      source: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  mediaType: PropTypes.string,
}
