const fontawesome = require('@fortawesome/fontawesome-svg-core')

exports.onClientEntry = () => {
  fontawesome.config.autoAddCss = false
}
