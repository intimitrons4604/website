import { Helmet } from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from './footer.js'
import { NavBar } from './navbar.js'

import favicon_ico from '../images/favicon/favicon.ico'
import favicon_png16 from '../images/favicon/favicon-16x16.png'
import favicon_png32 from '../images/favicon/favicon-32x32.png'

import '../sass/main.scss'

export const Page = ({ activePage, children, title }) => {
  return (
    <>
      <Helmet titleTemplate='%s | Intimitrons From Area 51'>
        <title>{title}</title>
        <link rel='icon' type='image/vnd.microsoft.icon' href={favicon_ico} />
        <link rel='icon' type='image/png' sizes='32x32' href={favicon_png32} />
        <link rel='icon' type='image/png' sizes='16x16' href={favicon_png16} />
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
