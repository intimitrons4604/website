import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from './footer.js'
import { NavBar } from './navigation.js'

import '../sass/main.scss'

export const PageLayout = ({ currentPage, children }) => {
  return (
    <>
      <NavBar currentPage={currentPage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string,
}
