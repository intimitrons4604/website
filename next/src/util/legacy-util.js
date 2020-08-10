// These functions are copied from legacy JS

export function sortBy(prop) {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1
    } else if (a[prop] < b[prop]) {
      return -1
    }
    return 0
  }
}

export function getMenuDivId(title) {
  var id = title.toLowerCase()
  id.replace(/\s/g, '-')
  return id
}
