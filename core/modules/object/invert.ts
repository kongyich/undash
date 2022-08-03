import allKeys from "../../internal/_allKeys"

export default function invert(obj) {
  let result, _keys = allKeys(obj);
  for(let i = 0, len = _keys.length; i < len; i++) {
    let key = _keys[i]
    result[obj[key]] = key
  }
  return result
}
