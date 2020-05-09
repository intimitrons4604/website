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

export function isInt(value) {
  return (
    !isNaN(value) &&
    (function (x) {
      return (x | 0) === x
    })(parseFloat(value))
  )
}
