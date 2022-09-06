import rest from '../collection/rest'
import flatten from '../array/flatten'
import bind from './bind'

export default rest(function(obj, keys) {
  keys = flatten(keys, false)

  let len = keys.length
  if (len < 1) return new Error()
  while(len--) {
    let key = keys[len]
    obj[key] = bind(obj[key], obj)
  }
  return obj
})
