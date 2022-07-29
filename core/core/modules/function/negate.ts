

export default function negate(iteratee) {
  return function() {
    return !iteratee.apply(this, arguments)
  }
}
