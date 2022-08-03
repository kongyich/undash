import { isArray } from "../../internal/_utils"
/**
 * @param {Array|Object} collection 
 * @param {Function} iteratee 
 * @param {Object} context
 * @returns {Array|Object}
*/

export default function map(collection, iteratee, context?) {
  let index = -1
  let keys = !isArray(collection) && Object.keys(collection)
  let length = (keys || collection).length
  let result = new Array(length)

  while(++index < length) {
    let curKey = keys ? keys[index] : index
    result[index] = iteratee.call(context, collection[curKey], curKey, collection)
  }
  return result
}
