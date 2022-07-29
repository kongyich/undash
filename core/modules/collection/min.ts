import { isArray, values } from "../../internal/_utils";
import each from "./each";

/**
 * @param {Array|Object} collection 
 * @param {Function} iteratee 
 * @param {Object} context
 * @returns {Array}
*/

export default function min(collection, iteratee, context) {
  let result = Infinity, lastComputed = Infinity, value, computed;

  if(iteratee == null || (typeof iteratee === 'number' && typeof collection[0] != 'object' && collection != null)) {
    collection = isArray(collection) ? collection : values(collection)

    for(let i = 0, len = collection.length; i < len; i++) {
      value = collection[i]
      if(value !== null && value < result) {
        result = value
      }
    }
  } else {
    each(collection, (item, index, list) => {
      computed = iteratee.call(context, item, index, list)

      if(computed < lastComputed || (lastComputed === Infinity && result === Infinity)) {
        result = item
        lastComputed = computed
      }
    })
  }
  return result
}
