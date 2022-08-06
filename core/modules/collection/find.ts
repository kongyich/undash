import { isArray } from "../../internal/_utils";
import findIndex from "../array/findIndex";
import findKey from "./findKey";


export default function find(collection, iteratee, context) {
  let dealFn = isArray(collection) ? findIndex : findKey
  let key = dealFn(collection, iteratee, context)

  return collection[key]
}
