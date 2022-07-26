import { keys } from "../../internal/_utils";


export default function findKey(collection, iteratee, context) {
  let _keys = keys(collection), key;

  for(let index = 0, length = _keys.length; index < length; index++) {
    key = _keys[index]
    if(iteratee.call(context, collection[key], key, collection)) return key
  }
}
