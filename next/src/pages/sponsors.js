import React from "react"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-regular-svg-icons'

import { InlineContactForm } from "../components/contact-form"
import { PageLayout } from "../components/page-layout"
import { Parallax } from "../components/parallax"

import { terabyte, gigabyte, megabyte, inkindop, inkind, kilobyte, byte, bit } from "../data/sponsors.js"

import { sortBy } from "../util/legacy-util"

import sponsor2019 from "../files/sponsor2019.pdf"

import flickr_26251669169_532a2e461b_h from "../images/flickr/26251669169_532a2e461b_h.jpg"
import flickr_33329082910_ae4f890331_h from "../images/flickr/33329082910_ae4f890331_h.jpg"
import flickr_34139744040_dd7101632a_h from "../images/flickr/34139744040_dd7101632a_h.jpg"
import flickr_37252186395_e2a8f6c242_h from "../images/flickr/37252186395_e2a8f6c242_h.jpg"
import flickr_46815681822_1ed0845e9b_k from "../images/flickr/46815681822_1ed0845e9b_k.jpg"
import flickr_46815682412_71179fc4a8_k from "../images/flickr/46815682412_71179fc4a8_k.jpg"

/* usually for Terabyte and/or Gigabyte Level */
const SponsorRow = ({ sponsors, sponsorType }) => {
  if (sponsors.length === 0) {
    return (
      <Row className="mt-5">
        <Col>
          <h3 className="text-center">The Trons need your support!</h3>
          <h4 className="text-center">Be the first {sponsorType} sponsor to pledge your support this season.</h4>
        </Col>
      </Row>
    )
  }

  return sponsors.sort(sortBy("Name"))
    .map((sponsor, index) => {
      return (
        <Row key={index} className="mt-5">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5">
            <img src={require(`../images/sponsors/${sponsorType}/logo/${sponsor.Logo}`)} width="50%" className="animated fadeInUp wow" />
            <h2 className="pt-4">{sponsor.Name}</h2>
            <p>{sponsor.Description}</p>
            <h4 className="pb-4">Sponsorship Years: {sponsor.Years}</h4>
            <Button href={sponsor.URL} className="trons-green-button trons-medium-button">Visit {sponsor.Nickname}</Button>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div style={{ 'backgroundImage': `url(${require(`../images/sponsors/${sponsorType}/photo/${sponsor.Photo}`)})` }} className="trons-img-card animated fadeIn wow" data-wow-delay="0.5s" />
          </Col>
        </Row>
      )
    })
}

/* usually for Megabyte, Kilobyte and In-Kind sponsors with different # slices */
const SponsorGrid = ({ sponsors, sponsorType, slices }) => {
  if (sponsors.length === 0) {
    return (
      <Col>
        <h3 className="text-center">The Trons need your support!</h3>
        <h4 className="text-center">Be the first {sponsorType} sponsor to pledge your support this season.</h4>
      </Col>
    )
  }

  return sponsors.sort(sortBy("Name"))
    .map((sponsor, index) => {
      return (
        <Col key={index} xs={12} sm={12} md={6} lg={slices} xl={slices} className="px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1 pb-5">
          <div className="trons-sponsor-logo animated fadeIn wow" style={{ 'backgroundImage': `url(${require(`../images/sponsors/${sponsorType}/logo/${sponsor.Logo}`)})` }} />
          <h4 className="pt-4">{sponsor.Name}</h4>
          {sponsor.Photo ? <img className="trons-sponsor-photo animated fadeIn wow" src={require(`../images/sponsors/${sponsorType}/photo/${sponsor.Photo}`)} /> : null}
          <p>{sponsor.Description}</p>
          <h6 className="pb-4">Sponsorship Years: {sponsor.Years}</h6>
          <Button href={sponsor.URL} className="trons-green-button trons-small-button">Visit {sponsor.Nickname}</Button>
        </Col>
      )
    })
}

const SponsorList = ({ sponsors }) => {
  return (
    <Col xs={12} sm={12} md={6} lg={3} xl={3} className="px-5">
      <ul>
        {sponsors.sort(sortBy("Name"))
          .map((sponsor, index) => {
            return (<li key={index}>{sponsor.Name} {sponsor.Amount}</li>)
          })}
      </ul>
    </Col>
  )
}

const SponsorsPage = () => {
  return (
    <PageLayout currentPage={'sponsors'}>
      <Container fluid={true} className="mt-5 px-xl-5 px-lg-5 px-md-5 px-sm-1 px-xs-1">
        <Row>
          <Col xs={12} sm={12} md={6} lg={3} xl={3} className="pl-xl-5 pl-lg-5 pb-5 my-auto">
            <FontAwesomeIcon icon={faHandSpock} className="animated rotateInUpRight text-center" style={{ 'fontSize': '10em' }} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-3">
            <h1>A Colossal Thank You</h1>
            <p className='trons-intro'>From our new home on Planet Earth to the depths of outer space, the Intimitrons from Area 51 would like to thank our sponsors for their generous contributions to our team and our cause. Without their support, we wouldn't be able to participate in competition, have access to advanced tools and equipment, or purchase materials to build study and learn. More importantly, we wouldn't have been able to reach dozens of young women in Calgary and provide them with the opportunity to explore STEM and build confidence in their abilities.</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={3} xl={3} className="pl-xl-5 pl-lg-5 pb-5">
            <ButtonGroup id="trons-vert-team-menu" vertical={true} size={'lg'} aria-label="Meet the Team">
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Terabyte' }} className="trons-green-button">Terabyte</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Gigabyte' }} className="trons-green-button">Gigabyte</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Megabyte' }} className="trons-green-button">Megabyte</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Kilobyte' }} className="trons-green-button">Kilobyte</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Byte' }} className="trons-green-button">Bytes</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#inkind' }} className="trons-green-button">In-Kind</Button>
              <Button variant={'secondary'} onClick={() => { window.location.href = '#Bit' }} className="trons-green-button">Bits</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>

      <InlineContactForm headline={'Talk to us about sponsoring the Intimitrons and supporting Girls in STEM'} />

      <Container fluid={true} className="mt-5 px-lg-5 px-xl-5 px-md-5 px-sm-1 px-xs-1" id="sponsor">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="pb-5">
            <img src={flickr_34139744040_dd7101632a_h} alt="pitching for a sponsorship" width="100%" />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="px-3 pl-5 pt-5">
            <h1>Become a Sponsor</h1>
            <p className="trons-intro">FIRST Robotics Competition is a competition where high school aged students design and build a robot in a time frame of six weeks. Not only do we learn technical skills, but also important business and life skills along the way.</p>
            <h5>Sponsoring the Intimitrons helps with:</h5>
            <ul>
              <li>Entrance fees</li>
              <li>Shop expenses and robot parts</li>
              <li>Robot build and design space</li>
              <li>Knowledge</li>
            </ul>
            <Button href={sponsor2019} className="mt-3 trons-medium-button trons-purple-button">Download Sponsorship Kit</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="mt-5 mb-5">
        <Row className="px-3 mx-auto">
          <Col className="mx-auto">
            <CardDeck id="sponsorLevels">
              <Card>
                <Card.Body>
                  <Card.Title><h3>Byte</h3></Card.Title>
                  <h1 className="mb-0 pb-0">$500</h1>
                  <Card.Text>Byte level is a great way to let Calgary know that your company supports STEM education. We rely on our sponsors to fund our regional competition entrance fees for each season as well as travel and robot parts.</Card.Text>
                </Card.Body>
                <ListGroup variant={'flush'}>
                  <ListGroup.Item className="trons-green-bkgnd">Logo/Link on Trons Website</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Photo Op with the Trons</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Invite to Competition</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><h3>Kilobyte</h3></Card.Title>
                  <h1 className="mb-0 pb-0">$1000</h1>
                  <Card.Text>For our Kilobyte sponsorship level, you will get Byte perks plus we add your logo to some of our promotional materials such as flyers and on our season competition banner which is displayed in our pit and at outreach events.</Card.Text>
                </Card.Body>
                <ListGroup variant={'flush'}>
                  <ListGroup.Item className="trons-green-bkgnd">Logo on Some Promo Materials</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Logo on Competition Banner</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Choice of Trons Swag Item</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><h3>Megabyte</h3></Card.Title>
                  <h1 className="mb-0 pb-0">$2500</h1>
                  <Card.Text>For our Megabyte sponsorship level, you get Kilobyte perks plus we give your company a shout-out on social media as well as display your logo on our robot. It's important to us that people know how awesome our sponsors are.</Card.Text>
                </Card.Body>
                <ListGroup variant={'flush'}>
                  <ListGroup.Item className="trons-green-bkgnd">Logo Displayed on Robot</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Logo on Event Screens</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">Mention on Social Media</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><h3>Gigabyte</h3></Card.Title>
                  <h1 className="mb-0 pb-0">$5000</h1>
                  <Card.Text>For our Gigabyte sponsorship level, you get all Megabyte perks plus 1 banner ad on our website and a VIP tour of our pit at 1 regional compeititon where you'll get to experience the excitement of FRC first hand.</Card.Text>
                </Card.Body>
                <ListGroup variant={'flush'}>
                  <ListGroup.Item className="trons-green-bkgnd">Logo on All Promo Material</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">1 Banner Ad on Our Website</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">1 VIP Pit Tour at Regional</ListGroup.Item>
                </ListGroup>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title><h3>Terabyte</h3></Card.Title>
                  <h1 className="mb-0 pb-0">$10000</h1>
                  <Card.Text>Terabyte sponsors are instrumental in facilitating our participation in competitions away from home. You get all Gigabyte perks plus prominent logo display on all of our digital and print marketing materials. You also get an additional VIP tour and 2 award banquet invitations.</Card.Text>
                </Card.Body>
                <ListGroup variant={'flush'}>
                  <ListGroup.Item className="trons-green-bkgnd">Prominent Logo Display</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">2 VIP Pit Tours at Regional</ListGroup.Item>
                  <ListGroup.Item className="trons-green-bkgnd">2 Award Banquet Invitations</ListGroup.Item>
                </ListGroup>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="mb-5">
        <Row className="px-3 pb-3 mx-auto">
          <Col className="mx-auto">
            <h1 className="text-center">Other Ways to Support the Trons</h1>
          </Col>
        </Row>
        <Row className="px-3 mx-auto">
          <Col className=" px-2 mx-auto">
            <h3 className="pb-2">In-Kind Sponsorship</h3>
            <p className="trons-intro">In-kind sponsors are instrumental to our success by donating materials, workspace, equipment and most importantly their time. The expertise of professionals working in mechanical engineering, machining, software engineering, electrical engineering and more give us a head start on learning skills that prepare us for higher education.</p>
            <p className="trons-intro">If you have machine shop or electronics equipment that is collecting dust, or you would like to support the next generation of girls in STEM by volunteering your time and experience, please send us email at <a href="mailto:info@intimitrons.ca">info@intimitrons.ca</a>.</p>
            <h3 className="pb-2">Crowdfunding</h3>
            <p className="trons-intro">Support from the community through our GoFundMe helps us pay for entrance fees and travel expenses. The more supporters we have, the more opportunities we have to learn and grow! Every $ counts.</p>
          </Col>
        </Row>
      </Container>

      <Parallax img={flickr_26251669169_532a2e461b_h} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Terabyte">
        <Row>
          <Col>
            <h1 className="text-center">Terabyte Sponsors</h1>
          </Col>
        </Row>
        <div>
          <SponsorRow sponsors={terabyte} sponsorType={'terabyte'} />
        </div>
      </Container>

      <Parallax img={flickr_26251669169_532a2e461b_h} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Gigabyte">
        <Row>
          <Col>
            <h1 className="text-center">Gigabyte Sponsors</h1>
          </Col>
        </Row>
        <div>
          <SponsorRow sponsors={gigabyte} sponsorType={'gigabyte'} />
        </div>
      </Container>

      <Parallax img={flickr_37252186395_e2a8f6c242_h} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Megabyte">
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">Megabyte Sponsors</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <SponsorGrid sponsors={megabyte} sponsorType={'megabyte'} slices={6} />
        </Row>
      </Container>

      <Parallax img={flickr_33329082910_ae4f890331_h} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="inkind">
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">In-Kind Sponsors</h1>
          </Col>
        </Row>
        <Row className="py-5">
          <SponsorRow sponsors={inkindop} sponsorType={'inkindop'} />
        </Row>
        <Row className="pt-5">
          <SponsorGrid sponsors={inkind} sponsorType={'inkind'} slices={4} />
        </Row>
      </Container>

      <Parallax img={flickr_33329082910_ae4f890331_h} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Kilobyte">
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">Kilobyte Sponsors</h1>
          </Col>
        </Row>
        <Row className="mt-5" id="kilobyte-grid">
          <SponsorGrid sponsors={kilobyte} sponsorType={'kilobyte'} slices={4} />
        </Row>
      </Container>

      <Parallax img={flickr_46815681822_1ed0845e9b_k} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Byte">
        <Row className="mt-5">
          <Col>
            <h1 className="text-center">Bytes Sponsors</h1>
          </Col>
        </Row>
        <Row className="mt-5">
          <SponsorGrid sponsors={byte} sponsorType={'byte'} slices={4} />
        </Row>
      </Container>

      <Parallax img={flickr_46815682412_71179fc4a8_k} />

      <Container fluid={true} className="mt-5 mb-5 px-5" id="Bit">
        <Row className="mt-5">
          <Col >
            <h1 className="text-center">Bits Sponsors</h1>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <SponsorList sponsors={bit} />
        </Row>
      </Container>
    </PageLayout>
  )
}

export default SponsorsPage
