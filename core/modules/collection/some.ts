import { isArray } from "../../internal/_utils";

/**
 * @param {Array|Object} collection 
 * @param {Function} iteratee 
 * @param {Object} context
 * @returns {Array|Object}
*/

export default function some(collection, iteratee, context) {
  let _keys = !isArray(collection) && Object.keys(collection)
  let length = (_keys || collection).length
  let index = -1

  while(++index < length) {
    let curKey = _keys ? _keys[index] : index
    if(iteratee.call(context, collection[curKey], curKey, collection)) {
      return true
    }
  }
  return false
}
