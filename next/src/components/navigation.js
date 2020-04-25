import React from "react"

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import headerLogo from "../images/Logo-header-white.svg"

export const NavBar = ({currentPage}) => {
  return (
    <Navbar expand={'lg'} sticky={'top'} variant={'dark'} className="trons-purple-bkgnd">
      <Navbar.Brand href={'#'}>
        <img src={headerLogo} height="65" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/" active={currentPage === 'home'}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.gofundme.com/help-support-the-intimitrons-from-area-51">Donate</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/first" active={currentPage === 'first'}>FIRST</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/team" active={currentPage === 'team'}>Team</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/sponsors" active={currentPage === 'sponsors'}>Sponsors</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/media" active={currentPage === 'media'}>Media</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" active={currentPage === 'contact'}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
