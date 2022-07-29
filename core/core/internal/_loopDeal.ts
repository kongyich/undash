import { isArray } from "./_typeRelated"

export function loopDeal(data, fn, context) {
  let keys = !isArray(data) && Object.keys(data)
  let length = (keys || data).length
  let index = 0;
  let result = new Array(length)

  for(; index < length; index++) {
    let cutKeys = keys ? keys[index] : index
    result[index] = fn.call(context, data[cutKeys], cutKeys, data)
  }
  return result
}
