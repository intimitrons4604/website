import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { Page } from '../components/page.js'

const NotFoundPage = () => {
  return (
    <Page title='Page Not Found'>
      <Container fluid={true} className='py-5'>
        <Row className='justify-content-center'>
          <h1 style={{ display: 'inline-block' }}>Page Not Found</h1>
        </Row>
        <Row xs={2} className='justify-content-center'>
          <Col xs={'auto'} className='pr-5'>
            <FontAwesomeIcon icon={faQuestionCircle} size={'10x'} />
          </Col>
          <Col xs={'auto'}>
            <Row className='m-0'>
              <p className='trons-intro'>
                We searched the depths of outer space, but we couldn&apos;t find
                that page.
              </p>
            </Row>
            <Row className='m-0'>
              <p className='trons-intro'>
                Try returning <a href='/'>home</a> to planet Earth.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </Page>
  )
}

export default NotFoundPage
