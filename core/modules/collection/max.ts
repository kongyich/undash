import { isArray, values } from "../../internal/_utils";
import each from "./each";

export default function max(collection, iteratee, context) {
  let result  = -Infinity, lastComputed = -Infinity, value, computed;

  if(iteratee == null) {
    collection = isArray(collection) ? collection : values(collection)
    for(let i = 0, len = collection.length; i < len; i++) {
      value = collection[i]
      if(value !== null && result < value) {
        result = value
      }
    }

  } else {
  
    each(collection, (item, index, list) => {
      computed = iteratee.call(context, item, index, list)

      if(computed > lastComputed || (result === -Infinity && lastComputed === -Infinity)) {
        lastComputed = computed
        result = item
      }
    })
  }
  return result
}
