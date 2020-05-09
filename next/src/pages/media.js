import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

import moment from 'moment'

import { NewsletterSignUp } from '../components/newsletter-sign-up'
import { PageLayout } from '../components/page-layout'
import { Parallax } from '../components/parallax'

import { articles, videos } from '../data/media'

import { sortBy } from '../util/legacy-util'

import flickr_34364767932_ea2fa26df3_h from '../images/flickr/34364767932_ea2fa26df3_h.jpg'
import flickr_37996293252_3f5fcab7d4_h from '../images/flickr/37996293252_3f5fcab7d4_h.jpg'

// This function is copied from legacy JS
function getMenuDivId(title) {
  var id = title.toLowerCase()
  id.replace(/\s/g, '-')
  return id
}

const MediaMenu = ({ media, mediaType }) => {
  return (
    <div className='trons-purple-bkgnd m-0 p-5'>
      <h1 className='text-center'>{mediaType}</h1>
      <Nav className='flex-column'>
        {media
          .sort(sortBy('Date'))
          .reverse()
          .map((item, index, arr) => {
            return (
              <React.Fragment key={index}>
                <Nav.Item className='trons-bullet'>
                  <Nav.Link href={`#${getMenuDivId(item.Title)}`}>
                    {item.Title}
                    <br />
                    <h6>{item.Source}</h6>
                    <h6>{moment(item.Date).format('MMMM Do YYYY')}</h6>
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

const MediaRow = ({ media, mediaType }) => {
  return media
    .sort(sortBy('Date'))
    .reverse()
    .map((item, index) => {
      return (
        <React.Fragment key={index}>
          <Row
            className='mb-5'
            style={{ height: '50px' }}
            id={getMenuDivId(item.Title)}
          />
          <Row className='mt-5 mb-5'>
            <Col xs={12} sm={12} md={4} lg={4} xl={4} className='pb-5'>
              <img
                src={require(`../images/media-thumbnail/${mediaType}/${item.Thumbnail}`)}
                width='90%'
                className='animated fadeIn wow'
              />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
              <h3>{item.Title}</h3>
              <div className='d-flex justify-content-between align-items-end'>
                <div className='p-0 m-0'>
                  <h6 className='p-0 m-0'>{item.Source}</h6>
                </div>
                <div className='p-0 m-0'>
                  <h6 className='p-0 m-0 text-right'>
                    {moment(item.Date).format('MMMM Do YYYY')}
                  </h6>
                </div>
              </div>
              <p>{item.Snippet}</p>
              <Button
                href={item.URL}
                className='trons-green-button trons-small-button'
              >
                {item.Button}
              </Button>
            </Col>
          </Row>
        </React.Fragment>
      )
    })
}

const MediaPage = () => {
  return (
    <PageLayout currentPage={'media'}>
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
            <h1 className='text-center'>What's Up Trons?</h1>
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
              size={'lg'}
              aria-label='Trons in the News'
            >
              <Button
                variant={'secondary'}
                onClick={() => {
                  window.location.href = 'alienated'
                }}
                className='trons-green-button'
              >
                Alienated
              </Button>
              <Button
                variant={'secondary'}
                onClick={() => {
                  window.location.href = '#articles-menu'
                }}
                className='trons-green-button'
              >
                Articles
              </Button>
              <Button
                variant={'secondary'}
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
            <MediaMenu media={articles} mediaType={'articles'} />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5' id='articles'>
        <MediaRow media={articles} mediaType={'articles'} />
      </Container>

      <Container fluid={true}>
        <Row>
          <Col className='p-0' id='videos-menu'>
            <MediaMenu media={videos} mediaType={'videos'} />
          </Col>
        </Row>
      </Container>
      <Container className='mt-5' id='videos'>
        <MediaRow media={videos} mediaType={'videos'} />
      </Container>
    </PageLayout>
  )
}

export default MediaPage
