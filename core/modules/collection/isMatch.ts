import { keys } from "../../internal/_utils";

export default function isMatch(obj, attrs) {
  let _keys = keys(attrs), length = _keys.length;
  if(obj == null) return !length

  for(let i = 0; i < length; i++) {
    let key = _keys[i]
    if(obj[key] !== attrs[key] || !(key in obj)) return false
  }
}
