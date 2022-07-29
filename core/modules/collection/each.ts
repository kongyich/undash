import { isArray } from '../../internal/_utils';

/**
 * @param {Array|Object} collection 
 * @param {Function} iteratee 
 * @param {Object} context
 * @returns {Array|Object}
*/

export default function each(collection, iteratee, context?) {
  let keys = !isArray(collection) && Object.keys(collection)
  let length = (keys || collection).length
  let index = 0;

  for(; index < length; index++) {
    let cutKeys = keys ? keys[index] : index
    iteratee.call(context, collection[cutKeys], cutKeys, collection)
  }
}
