import { keys } from "../../internal/_utils";

export default function pairs(obj) {
  let _keys = keys(obj), { length } = _keys, res = new Array(length), index = 0;
  for(; index < length; index++) {
    let key = _keys[index]
    res[index] = [key, obj[key]]
  }
  return res
}
