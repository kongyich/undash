import map from "./map"
import pluck from "./pluck"

export default function sortBy(obj, iteratee, context) {
  let index = 0
  iteratee = iteratee.bind(context)

  return pluck(map(obj, function(value, key, list) {
    return {
      value,
      index: index++,
      criteria: iteratee(value, key, list)
    }
  }).sort(function(left, right) {
    let a = left.criteria
    let b = right.criteria
    if(a !== b) {
      if(a > b || a === void 0) return 1
      if(a < b || b === void 0) return -1
    }

    return left.index - right.index
  }), 'value')
}
