import { isArray } from "./_utils"


export default function createReduce(step) {
  function reduce(collection, iteratee, memo, context, initial) {
    let keys = !isArray(collection) && Object.keys(collection)
    let length = (keys || collection).length
    let index = step > 0 ? 0 : length - 1

    if(!initial) {
      memo = collection[keys ? keys[index] : index]
      index += step
    }

    for(; index >= 0 && index < length; index += step) {
      let curKey = keys ? keys[index] : index
      memo = iteratee.call(context, collection[curKey], curKey, collection)
    }
    return memo
  }

  return function(collection, iteratee, memo, context) {
    let initial = arguments.length >= 3
    return reduce(collection, iteratee, memo, context, initial)
  }
}
