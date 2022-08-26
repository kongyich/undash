import isBoolean from "../../internal/_isBoolean";
import contains from "../collection/contains";

/**
 * @param {Array} array 
 * @param {Boolean} isSorted 
 * @param {Function} iteratee
 * @param {Object} context
 * @returns {Array}
*/

export default function uniq(array, isSorted?, iteratee?, context?) {
  if(!isBoolean(isSorted)) {
    context = iteratee
    iteratee = isSorted
    isSorted = false
  }

  let result =new Array()
  let seen = new Array()

  for(let i = 0, len = array.length; i < len; i++) {
    let value = array[i], computed = iteratee ? iteratee.call(context, value, i, array) : value;

    if(isSorted && !iteratee) {
      if(!i || seen !== computed) result.push(value)
      seen = computed
    } else if(iteratee) {
      if(!contains(seen, computed)) {
        seen.push(computed)
        result.push(value)
      }
    } else if(!contains(result, value)) {
        result.push(value)
    }
  }

  return result
}
