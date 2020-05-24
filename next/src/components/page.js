import { Helmet } from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from './footer.js'
import { NavBar } from './navbar.js'

import '../sass/main.scss'

export const Page = ({ activePage, children, title }) => {
  return (
    <>
      <Helmet titleTemplate='%s | Intimitrons From Area 51'>
        <title>{title}</title>
      </Helmet>
      <NavBar activePage={activePage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Page.propTypes = {
  activePage: NavBar.propTypes.activePage,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
