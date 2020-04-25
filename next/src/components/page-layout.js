import React from "react"
import PropTypes from "prop-types"

import { Footer } from "./footer"
import { NavBar } from "./navigation"

import "../sass/main.scss"

export const PageLayout = ({ currentPage, children }) => {
  return (
    <>
      <NavBar currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  currentPage: PropTypes.string
}
