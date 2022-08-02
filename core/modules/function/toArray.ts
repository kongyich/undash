import values from "../../internal/_values"
import iteratorToArray from "../../internal/_iteratorToArray"
import mapToArray from "../../internal/_mapToArray"
import setToArray from "../../internal/_setToArray"
import getType from "./getType"
import isArrayLink from "../../internal/_isArrayLike"
import isString from "../../internal/_isString"
import stringToArray from "../../internal/_stringToArray"
import cloneArray from "../../internal/_cloneArray"

const MAP = 'map'
const SET = 'set'
const symIterator = Symbol.iterator

export default function toArray(value) {
  if(!value) return []

  if(isArrayLink(value)) {
    return isString(value) ? stringToArray(value) : cloneArray(value)
  }

  if(symIterator && value[symIterator]) {
    return iteratorToArray(value)
  }

  const type = getType(value)
  const func = type === MAP ? mapToArray : (type === SET ? setToArray : values)

  return func(value)
}
