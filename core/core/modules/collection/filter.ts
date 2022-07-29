import { isArray, keys } from "../../internal/_utils";

/**
 * @param {Array|Object} collection 
 * @param {Function} iteratee 
 * @param {Object} context
 * @returns {Array|Object}
*/

export default function filter(collection, iteratee, context) {
  let _keys = !isArray(collection) && keys(collection)
  let length = (_keys || collection).length
  let resIndex = 0
  let index = -1, result = new Array();

  while(++index < length) {
    let curKey = _keys ? _keys[index] : index
    if(iteratee.call(context, collection[curKey], curKey, collection)) {
      result[resIndex++] = collection[curKey]
    }
  }
  return result
}
