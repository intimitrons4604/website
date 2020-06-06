const fontawesome = require('@fortawesome/fontawesome-svg-core')
const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('style', {
      key: 'gatsby-plugin-fontawesome_css',
      type: 'text/css',
      dangerouslySetInnerHTML: {
        __html: fontawesome.dom.css(),
      },
    }),
  ])
}
