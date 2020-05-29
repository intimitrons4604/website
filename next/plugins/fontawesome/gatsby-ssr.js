const fontawesome = require('@fortawesome/fontawesome-svg-core')
const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement(
      'style',
      {
        key: 'gatsby-plugin-fontawesome_css',
        type: 'text/css',
      },
      fontawesome.dom.css()
    ),
  ])
}
