import rest from "../collection/rest";
import allKeys from "../../internal/_allKeys"
import keyInObject from "../../internal/_keyInObject";
import flatten from "../array/flatten"
import isFunction from "../../internal/_isFunction"

export default rest(function(object, keys) {
  let result = {}, iteratee = keys[0];
  if(result == null) return result

  if(isFunction(iteratee)) {
    if(keys.length > 1) iteratee = optimizeCb(iteratee, keys[1])
    keys = allKeys(object)
  } else {
    iteratee = keyInObject
    keys = flatten(keys, false, false)
    object = Object(object)
  }

  for(let i = 0, len = keys.length; i < len; i++) {
    let key = keys[i], value = object[key];
    if(iteratee(value, key, object)) result[key] = value
  }
  return result
})
