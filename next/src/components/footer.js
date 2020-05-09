import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faFlickr,
  faInstagram,
  faTumblr,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

import footerLogo from '../images/intimitronsLOGO_square.png'

export const Footer = () => {
  return (
    <Container
      fluid={true}
      className='trons-purple-bkgnd remove-padding pt-0 px-0 pb-5'
    >
      <Row className='pr-5 pl-5 pt-4'>
        <Row className='pt-4 pb-2'>
          <Col xs={12} sm={12} md={4} lg={4} xl={4} className='m-auto'>
            <img src={footerLogo} width='90%' />
          </Col>
          <Col xs={12} sm={12} md={8} lg={8} xl={8} className='pt-4'>
            <h3>The Intimitrons from Area 51</h3>
            <p className='pb-0 pr-4'>
              The team Intimitrons from Area 51, was founded in hopes to inspire
              and encourage the participation of young women in engineering,
              science, and technical vocations. In a male dominated field, we
              see this as an important endeavor. Our team sees it important to
              uphold the values of FIRST and to continue to help others along
              our path as competitors. We would also like to reach out to the
              community and encourage participation in the fascinating and
              rewarding experience of robotics and these professions.
            </p>
            <div className='mb-3'>
              <Button
                href='mailto:info@intimitrons.ca'
                className='trons-invisible-button'
              >
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                &nbsp;&nbsp;info@intimitrons.ca
              </Button>
              <br />
              <Button
                href='https://intimitrons.eventbrite.ca'
                className='trons-invisible-button'
              >
                <FontAwesomeIcon icon={faLongArrowAltRight} />
                &nbsp;&nbsp;Intimitrons Events
              </Button>
            </div>
            <ul className='social-list'>
              <li>
                <a href='https://facebook.com/Intimitrons'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href='https://www.flickr.com/photos/151319075@N05'>
                  <FontAwesomeIcon icon={faFlickr} />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UCKdElgQUY6DtATzAgJVVE5w'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/intimitrons4604'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href='https://intimitrons.tumblr.com/'>
                  <FontAwesomeIcon icon={faTumblr} />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/intimitrons'>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div>
          <hr />
          <p className='copyright'>Copyright 2019 Intimitrons from Area 51</p>
        </div>
      </Row>
    </Container>
  )
}
