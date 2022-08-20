import each from '../modules/collection/each'

export default function group(behavior, partition?) {
  return function(obj, iteritee, context) {
    iteritee = iteritee.bind(context)
    let res = partition ? [[], []] : {}
    each(obj, function(value, index) {
      let key = iteritee(value, index, obj)
      behavior(res, value, key)
    })
    return res
  }
}
