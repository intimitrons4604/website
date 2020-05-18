import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { MediaMenu } from '../components/media-menu.js'
import { MediaRows } from '../components/media-rows.js'
import { NewsletterSignUp } from '../components/newsletter-sign-up.js'
import { PageLayout } from '../components/page-layout.js'
import { Parallax } from '../components/parallax.js'

import { articles, videos } from '../data/media.js'

import flickr_34364767932_ea2fa26df3_h from '../images/flickr/34364767932_ea2fa26df3_h.jpg'
import flickr_37996293252_3f5fcab7d4_h from '../images/flickr/37996293252_3f5fcab7d4_h.jpg'

const MediaPage = () => {
  return (
    <PageLayout currentPage='media'>
      <Jumbotron fluid={true} className='remove-padding'>
        <Container fluid={true} className='remove-padding'>
          <Row>
            <Col className='remove-padding'>
              <div
                className='trons-hero'
                style={{
                  backgroundImage: `url(${flickr_37996293252_3f5fcab7d4_h})`,
                }}
              />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container className='mt-5'>
        <Row>
          <Col>
            <h1 className='text-center'>What&apos;s Up Trons?</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={9} lg={9} xl={9}>
            <script
              language='javascript'
              src='https://intimitrons.us3.list-manage.com/generate-js/?u=d479728f08b6043f1d957d5b1&fid=23401&show=10'
              type='text/javascript'
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={3}
            xl={3}
            className='pl-xl-5 pl-lg-5 pb-5'
          >
            <ButtonGroup
              id='trons-vert-team-menu'
              vertical={true}
              size='lg'
              aria-label='Trons in the News'
            >
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = 'alienated'
                }}
                className='trons-green-button'
              >
                Alienated
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = '#articles-menu'
                }}
                className='trons-green-button'
              >
                Articles
              </Button>
              <Button
                variant='secondary'
                onClick={() => {
                  window.location.href = '#videos-menu'
                }}
                className='trons-green-button'
              >
                Videos
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className='trons-purple-bkgnd mt-5'>
        <NewsletterSignUp />
      </Container>

      <Parallax img={flickr_34364767932_ea2fa26df3_h} />

      <Container fluid={true}>
        <Row>
          <Col className='p-0' id='articles-menu'>
            <MediaMenu media={articles} mediaType='articles' />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5' id='articles'>
        <MediaRows media={articles} mediaType='articles' />
      </Container>

      <Container fluid={true}>
        <Row>
          <Col className='p-0' id='videos-menu'>
            <MediaMenu media={videos} mediaType='videos' />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5' id='videos'>
        <MediaRows media={videos} mediaType='videos' />
      </Container>
    </PageLayout>
  )
}

export default MediaPage
