import React from 'react'
import PropTypes from 'prop-types'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import headerLogo from '../images/Logo-header-white.svg'

export const NavBar = ({ activePage }) => {
  return (
    <Navbar
      expand='lg'
      sticky='top'
      variant='dark'
      className='trons-purple-bkgnd'
    >
      <Navbar.Brand href='#'>
        <img src={headerLogo} height='65' />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Nav.Link href='/' active={activePage === 'home'}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.gofundme.com/help-support-the-intimitrons-from-area-51'>
              Donate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/first-robotics-competition'
              active={activePage === 'first-robotics-competition'}
            >
              FIRST
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/team' active={activePage === 'team'}>
              Team
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/sponsors' active={activePage === 'sponsors'}>
              Sponsors
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/media' active={activePage === 'media'}>
              Media
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/contact' active={activePage === 'contact'}>
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

NavBar.propTypes = {
  activePage: PropTypes.oneOf([
    'home',
    'first-robotics-competition',
    'team',
    'sponsors',
    'media',
    'contact',
  ]),
}
